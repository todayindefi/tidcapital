import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import tidCapitalLogo from "@assets/TID Capital _1753260487995.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Capabilities", id: "capabilities" },
    { label: "Methodology", id: "methodology" },
    { label: "Research", id: "research" },
    { label: "About", id: "about" },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img src={tidCapitalLogo} alt="TID Capital" className="h-7 w-auto" />
            </div>
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-tid-black dark:hover:text-tid-black transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-4 text-xs">
              <a
                href="https://todayindefi.com"
                className="text-gray-500 dark:text-gray-400 hover:text-tid-black dark:hover:text-tid-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Today in DeFi
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="https://tidresearch.com"
                className="text-gray-500 dark:text-gray-400 hover:text-tid-black dark:hover:text-tid-black transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                TID Research
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-8 w-8"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-tid-black hover:bg-tid-dark text-white text-sm px-4 py-2 hidden sm:inline-flex"
            >
              Contact
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-gray-700 dark:text-gray-300 hover:text-tid-black dark:hover:text-tid-black transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t pt-6 space-y-4">
                    <a
                      href="https://todayindefi.com"
                      className="block text-gray-600 dark:text-gray-400 hover:text-tid-black dark:hover:text-tid-black transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Today in DeFi
                    </a>
                    <a
                      href="https://tidresearch.com"
                      className="block text-gray-600 dark:text-gray-400 hover:text-tid-black dark:hover:text-tid-black transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TID Research
                    </a>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-tid-black hover:bg-tid-black-dark text-white"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
