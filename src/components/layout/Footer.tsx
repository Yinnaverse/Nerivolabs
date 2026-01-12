const Footer = () => {
  return (
    <footer className="border-t border-divider">
      <div className="container-narrow py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-lg font-medium tracking-tight text-hero">
              Nerivo Labs
            </span>
            <p className="text-caption mt-3 max-w-sm">
              A multidisciplinary design studio focused on product design, 
              brand systems, and digital experiences.
            </p>
          </div>

          <div>
            <span className="label-mono">Navigation</span>
            <nav className="mt-4 flex flex-col gap-2">
              <a href="#services" className="text-sm text-body hover:text-hero transition-colors duration-200">
                Services
              </a>
              <a href="#work" className="text-sm text-body hover:text-hero transition-colors duration-200">
                Work
              </a>
              <a href="#about" className="text-sm text-body hover:text-hero transition-colors duration-200">
                About
              </a>
            </nav>
          </div>

          <div>
            <span className="label-mono">Connect</span>
            <nav className="mt-4 flex flex-col gap-2">
              <a href="#" className="text-sm text-body hover:text-hero transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-sm text-body hover:text-hero transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-body hover:text-hero transition-colors duration-200">
                Dribbble
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-divider flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-xs text-muted-foreground">
            © 2024 Nerivo Labs. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground">
            Designed with intention.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
