import { Coins } from "lucide-react";
import { SiEthereum } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Vault Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're developing specialized vault strategies targeting specific asset classes and risk profiles. Early access available to institutional partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-tid-black text-white">
              Coming Soon
            </Badge>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
              <Coins className="text-blue-600 dark:text-blue-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stablecoin Yield Vaults
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Conservative yield strategies focused on major stablecoins (USDC, USDT, DAI) with emphasis on capital preservation and consistent returns. Target APY: 12-18%.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Multi-protocol diversification
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Automated rebalancing
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Insurance coverage options
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-tid-black text-white">
              Coming Soon
            </Badge>
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
              <SiEthereum className="text-purple-600 dark:text-purple-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ETH Yield Farming Vaults
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Strategic ETH-based yield opportunities including liquid staking, DeFi lending, and LP strategies. Target APY: 10-20% with managed volatility exposure.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Liquid staking integration
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                MEV protection strategies
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Risk-adjusted positioning
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-tid-black hover:bg-tid-black-dark text-white px-8 py-4 text-lg h-auto"
          >
            Request Early Access
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Limited spots available for institutional and qualified investors
          </p>
        </div>
      </div>
    </section>
  );
}
