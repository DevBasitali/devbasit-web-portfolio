export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex h-14 items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-lg">Dev Basit Ali</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

