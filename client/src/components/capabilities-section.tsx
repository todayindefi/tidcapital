import { Search, Shield, TrendingUp, BarChart3, Zap, Target } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "Yield Farming Strategies",
      description: "Research, deployment, and monitoring of farming strategies across DeFi lending, liquidity, and yield opportunities."
    },
    {
      icon: BarChart3,
      title: "Automated Monitoring Systems",
      description: "Automated onchain data gathering for tracking position performance, risk metrics, and protocol stability."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Analysis of collateral assets, liquidity conditions, protocol security, counterparty exposures, and changing market conditions."
    },
    {
      icon: Search,
      title: "DeFi Research & Intelligence",
      description: "Understanding and analyzing DeFi protocols, yield opportunities, points programs, and the risks behind each yield source."
    },
    {
      icon: Target,
      title: "Vault Curation",
      description: "Selection and management of eligible markets and allocations for non-custodial DeFi vaults, subject to each vault's technical permissions."
    },
    {
      icon: Zap,
      title: "Market Intelligence",
      description: "Tracking new farms, protocol launches, and changes to existing yield opportunities."
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
            We research, deploy, and monitor farming strategies across DeFi protocols, and curate non-custodial vaults.
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
                <div className="w-12 h-12 bg-tid-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-tid-blue w-6 h-6" />
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
