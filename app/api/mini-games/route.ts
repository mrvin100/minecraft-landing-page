import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://66ce1b838ca9aa6c8ccce13f.mockapi.io/Test/Api/ModeJeu')
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching mini-games:', error)
    return NextResponse.json({ error: 'Failed to fetch mini-games' }, { status: 500 })
  }
}