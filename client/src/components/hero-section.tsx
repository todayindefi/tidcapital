import { Button } from "@/components/ui/button";
import { Shield, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <span className="text-tid-black dark:text-tid-black"> DeFi Yield</span>
              <br />
              Farming
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              TID Capital specializes in proprietary DeFi yield farming and trading strategies. We deploy institutional-grade risk management and quantitative research to maximize returns while minimizing downside risk across market cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-tid-black hover:bg-tid-dark text-white px-8 py-4 text-lg h-auto"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("capabilities")}
                className="border-2 border-gray-300 hover:border-tid-black text-gray-700 dark:text-gray-300 hover:text-tid-black px-8 py-4 text-lg h-auto"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-tid-gray dark:text-tid-gray mr-2" />
                Risk Management
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-tid-gray dark:text-tid-gray mr-2" />
                Yield Farming
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-2xl bg-white dark:bg-gray-800 p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-tid-gray dark:text-tid-gray mb-2">12+</div>
                <div className="text-lg text-gray-600 dark:text-gray-300">Active Strategies</div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-tid-gray dark:text-tid-gray">12-20%</div>
                    <div className="text-gray-600 dark:text-gray-300">Stable APY</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-tid-gray dark:text-tid-gray">24/7</div>
                    <div className="text-gray-600 dark:text-gray-300">Risk Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
