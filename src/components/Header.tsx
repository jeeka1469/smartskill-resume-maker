
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Info, LayoutTemplate, Menu, Wand, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-semibold tracking-tight flex items-center gap-2"
            >
              <span className="text-primary text-2xl">S</span>
              <span>SmartSkill</span>
            </Link>
          </div>

          {/* Desktop Navigation with DropDowns */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/features"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <FileText className="h-6 w-6 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Features
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore all of our AI-powered resume tools and features
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/features?tab=skill-extraction"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Wand className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">
                                Skill Extraction
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Auto-extract skills from your resume content
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/features?tab=ats-analysis" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">ATS Analysis</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Optimize your resume for applicant tracking systems
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/templates" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    <div className="flex items-center gap-1">
                      <LayoutTemplate className="h-4 w-4" />
                      <span>Templates</span>
                    </div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                    <div className="flex items-center gap-1">
                      <span>Pricing</span>
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="default" size="sm" className="ml-4" asChild>
              <Link to="/get-started">
                <div className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  <span>Get Started</span>
                </div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <p className="font-medium text-sm text-muted-foreground">Features</p>
              <Link 
                to="/features" 
                className="block text-sm pl-3 border-l-2 border-primary/20 hover:border-primary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>All Features</span>
                </div>
              </Link>
              <Link 
                to="/features?tab=skill-extraction" 
                className="block text-sm pl-3 border-l-2 border-primary/20 hover:border-primary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Wand className="h-4 w-4" />
                  <span>Skill Extraction</span>
                </div>
              </Link>
              <Link 
                to="/features?tab=ats-analysis" 
                className="block text-sm pl-3 border-l-2 border-primary/20 hover:border-primary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>ATS Analysis</span>
                </div>
              </Link>
            </div>
            
            <Link 
              to="/templates" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <LayoutTemplate className="h-4 w-4" />
                <span>Templates</span>
              </div>
            </Link>
            
            <Link 
              to="/pricing" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <Button variant="default" size="sm" className="w-full mt-4" asChild>
              <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  <span>Get Started</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
