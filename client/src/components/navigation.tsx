import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import tidCapitalLogo from "@assets/TID CAPITAL_1751460338488.png";

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
              <img src={tidCapitalLogo} alt="TID Capital" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-tid-red dark:hover:text-tid-red transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://todayindefi.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-tid-red dark:hover:text-tid-red transition-colors hidden sm:block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Today in DeFi
            </a>
            <a
              href="https://tidresearch.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-tid-red dark:hover:text-tid-red transition-colors hidden sm:block"
              target="_blank"
              rel="noopener noreferrer"
            >
              TID Research
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-tid-red hover:bg-tid-red-dark text-white hidden sm:inline-flex"
            >
              Contact Us
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-gray-700 dark:text-gray-300 hover:text-tid-red dark:hover:text-tid-red transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t pt-6 space-y-4">
                    <a
                      href="https://todayindefi.com"
                      className="block text-gray-600 dark:text-gray-400 hover:text-tid-red dark:hover:text-tid-red transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Today in DeFi
                    </a>
                    <a
                      href="https://tidresearch.com"
                      className="block text-gray-600 dark:text-gray-400 hover:text-tid-red dark:hover:text-tid-red transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TID Research
                    </a>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="w-full bg-tid-red hover:bg-tid-red-dark text-white"
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
