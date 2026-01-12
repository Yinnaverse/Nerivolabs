import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-divider">
      <div className="container-narrow">
        <nav className="flex items-center justify-between h-16">
          <a href="/" className="text-lg font-medium tracking-tight text-hero">
            Nerivo Labs
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-body hover:text-hero transition-colors duration-200">
              Services
            </a>
            <a href="#work" className="text-sm text-body hover:text-hero transition-colors duration-200">
              Work
            </a>
            <a href="#about" className="text-sm text-body hover:text-hero transition-colors duration-200">
              About
            </a>
          </div>

          <Button variant="primary" size="sm" className="rounded-full">
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
