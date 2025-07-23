import { Search, Shield, TrendingUp, BarChart3, Zap, Target } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "Proprietary Yield Farming",
      description: "Advanced DeFi yield farming strategies developed through proprietary quantitative models and market analysis, optimized for institutional returns."
    },
    {
      icon: BarChart3,
      title: "Automated Monitoring Systems",
      description: "Advanced risk monitoring and automated data gathering systems for tracking farm performance, risk metrics, and protocol stability."
    },
    {
      icon: Shield,
      title: "Comprehensive Risk Management",
      description: "Advanced risk assessment covering asset risk, protocol risk, APY risk, and peg risk, using tranching and diversification strategies."
    },
    {
      icon: Search,
      title: "DeFi Research & Intelligence",
      description: "Understanding and analyzing DeFi protocols, yield opportunities, points programs, and risk-adjusted yield backed by Today in DeFi news flow."
    },
    {
      icon: Target,
      title: "Vault Curation",
      description: "Selective curation of third-party vaults and strategies that meet our strict risk-adjusted return criteria and institutional standards."
    },
    {
      icon: Zap,
      title: "Market Intelligence",
      description: "Real-time news flow keeping us on top of the latest farms, airdrops, and yield generating protocols for optimal opportunity capture."
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
                <div className="w-12 h-12 bg-tid-blue/10 dark:bg-tid-blue/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-tid-blue dark:text-tid-blue w-6 h-6" />
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
