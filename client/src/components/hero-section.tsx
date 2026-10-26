import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Check } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const strategies = [
    "Lending markets",
    "Pendle fixed yield",
    "Stablecoin LP",
    "Perp DEX liquidity",
    "Vault curation (Lagoon, Term Finance)",
  ];

  const yieldSources = ["Borrower demand", "Trading activity", "Fixed-rate markets", "Protocol incentives"];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 lg:py-32">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-tid-black/5 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Professional
              <span className="text-tid-blue"> DeFi Yield</span>
              <br />
              Farming
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              TID Capital focuses on DeFi yield farming strategies, onchain lending markets, and non-custodial vault curation. Our approach combines protocol research, collateral analysis, portfolio monitoring, and active risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-tid-blue hover:bg-tid-blue-dark text-white px-8 py-4 text-lg h-auto"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("capabilities")}
                className="border-2 border-gray-300 hover:border-tid-blue text-gray-700 dark:text-gray-300 hover:text-tid-blue px-8 py-4 text-lg h-auto"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-tid-blue mr-2" />
                Risk Assessment
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-tid-blue mr-2" />
                Yield Farming
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-2xl bg-white dark:bg-gray-800 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Strategies</h3>
              <ul className="space-y-3">
                {strategies.map((strategy) => (
                  <li key={strategy} className="flex items-center text-gray-700 dark:text-gray-200">
                    <Check className="w-5 h-5 text-tid-blue mr-3 flex-shrink-0" />
                    {strategy}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Yield sources</div>
                <div className="flex flex-wrap gap-2">
                  {yieldSources.map((source) => (
                    <span key={source} className="px-3 py-1 text-xs rounded-full bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
