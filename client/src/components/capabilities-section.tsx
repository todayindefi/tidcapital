import { Search, Shield, TrendingUp, BarChart3, Zap, Target } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "Proprietary Yield Farming",
      description: "Advanced DeFi yield farming strategies developed through proprietary quantitative models and market analysis, optimized for institutional returns."
    },
    {
      icon: Zap,
      title: "Algorithmic Trading",
      description: "24/7 automated trading systems that capitalize on arbitrage opportunities, yield differentials, and market inefficiencies across DeFi protocols."
    },
    {
      icon: Shield,
      title: "Enterprise Risk Management",
      description: "Institutional-grade risk controls including position sizing, drawdown limits, smart contract auditing, and comprehensive portfolio hedging."
    },
    {
      icon: Search,
      title: "Research & Intelligence",
      description: "Deep protocol analysis backed by Today in DeFi research network, combining on-chain data with fundamental analysis for alpha generation."
    },
    {
      icon: Target,
      title: "Vault Curation",
      description: "Selective curation of third-party vaults and strategies that meet our strict risk-adjusted return criteria and institutional standards."
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Continuous monitoring and algorithmic rebalancing to maximize returns while maintaining target risk parameters across all strategies."
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional DeFi Yield Farming
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive approach combines proprietary trading algorithms, institutional risk management, and selective vault curation to deliver superior risk-adjusted returns in DeFi markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
              >
                <div className="w-12 h-12 bg-tid-black/10 dark:bg-tid-black/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-tid-black dark:text-tid-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
