import {Mail, Phone} from 'lucide-react';
export function Footer()
{
    const currentYear = new Date().getFullYear();
    return(
        <footer className="border-t bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-1">
            <h3 className="font-bold text-lg">ABC Company</h3>
            <p className="text-sm text-muted-foreground">
              Engineering Intelligent Systems for the future
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:contact@abc-company.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              contact@abc-company.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} />
              +1 (555) 123-4567
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ABC Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
