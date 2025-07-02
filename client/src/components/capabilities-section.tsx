import { Search, Shield, Settings, BarChart3, Link, Users } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Search,
      title: "Strategy Research",
      description: "Deep analysis of market conditions, protocol fundamentals, and yield opportunities backed by Today in DeFi research insights."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment across asset quality, APY sustainability, smart contract security, and peg stability."
    },
    {
      icon: Settings,
      title: "Vault Optimization",
      description: "Continuous monitoring and rebalancing of positions to maintain optimal risk-adjusted returns across market cycles."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time tracking of vault performance, risk metrics, and comparative analysis against benchmarks and alternatives."
    },
    {
      icon: Link,
      title: "Protocol Integration",
      description: "Strategic partnerships and integrations with leading DeFi protocols to access exclusive opportunities and enhanced yields."
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Leveraging the Today in DeFi community and research network for early identification of emerging opportunities."
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vault Curation Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our systematic approach to yield farming combines quantitative analysis with qualitative research to identify and manage optimal opportunities across DeFi protocols.
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
                <div className="w-12 h-12 bg-tid-red/10 dark:bg-tid-red/20 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-tid-red w-6 h-6" />
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
