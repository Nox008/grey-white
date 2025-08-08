// /components/layout/Footer.tsx

export function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-foreground border-t border-border-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-text-primary/70">
              &copy; {currentYear} Grey White Space Designs. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Replace with actual social media links */}
              <a href="#" className="text-sm text-text-primary/70 hover:text-text-primary transition-colors">Instagram</a>
              <a href="#" className="text-sm text-text-primary/70 hover:text-text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-text-primary/70 hover:text-text-primary transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }