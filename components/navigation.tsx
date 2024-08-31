"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">MC Mini-Jeux</h1>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          <NavItem href="#accueil">Accueil</NavItem>
          <NavItem href="#mini-jeux">Mini-Jeux</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 space-y-2 text-center"
        >
          <NavItem href="#accueil" mobile>Accueil</NavItem>
          <NavItem href="#mini-jeux" mobile>Mini-Jeux</NavItem>
          <NavItem href="#contact" mobile>Contact</NavItem>
        </motion.div>
      )}
    </nav>
  )
}

function NavItem({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <motion.a
      href={href}
      className={`block ${mobile ? 'py-2' : ''} hover:text-secondary transition-colors duration-200`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}