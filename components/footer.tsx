import { Github, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 MC Mini-Jeux. Tous droits réservés.</p>
        <div className="flex space-x-4">
          <a
            href="https://vincentyoumssiportfolio.great-site.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors duration-200"
          >
            <Globe className="w-5 h-5 mr-1" />
            Portfolio
          </a>
          <a
            href="https://github.com/mrvin100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}