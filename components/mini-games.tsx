"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface MiniGame {
  id: number
  name: string
  description: string
  players: string
  duration: string
  strategies: string
}

export function MiniGames() {
  const [miniGames, setMiniGames] = useState<MiniGame[]>([])

  useEffect(() => {
    fetch('/api/mini-games')
      .then(response => response.json())
      .then(data => setMiniGames(data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {miniGames.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
              <CardDescription>{game.players} | {game.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{game.description}</p>
              <p className="text-sm text-muted-foreground">Stratégies : {game.strategies}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}