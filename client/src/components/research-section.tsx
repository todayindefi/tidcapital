import { Newspaper, Microscope, Users, ExternalLink } from "lucide-react";

export default function ResearchSection() {
  const researchFeatures = [
    {
      icon: Newspaper,
      title: "Market Intelligence",
      description: "Real-time analysis of DeFi trends, protocol updates, and market movements that impact yield opportunities."
    },
    {
      icon: Microscope,
      title: "On-Chain Analysis", 
      description: "Deep-dive research into protocol mechanics, tokenomics, and on-chain metrics for informed strategy development."
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Access to insights from the Today in DeFi community of researchers, developers, and DeFi practitioners."
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Powered by <span className="text-tid-red">Today in DeFi</span> Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              TID Capital strategies are built on the foundation of comprehensive DeFi research from Today in DeFi, combining market intelligence, protocol analysis, and community insights.
            </p>
            
            <div className="space-y-6">
              {researchFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-tid-red/10 dark:bg-tid-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="text-tid-red w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://todayindefi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-tid-red hover:text-red-700 dark:hover:text-red-400 font-semibold transition-colors"
              >
                Visit Today in DeFi 
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://tidresearch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-tid-red hover:text-red-700 dark:hover:text-red-400 font-semibold transition-colors"
              >
                TID Research Portal 
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl shadow-lg bg-white dark:bg-gray-900 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Research Impact
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-tid-red">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Research Reports</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-tid-red">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Protocols Analyzed</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-tid-red">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Community Members</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-tid-red">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Market Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
