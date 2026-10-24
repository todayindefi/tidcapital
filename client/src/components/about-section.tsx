import { Building, Brain, Settings } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Building,
      title: "Farming Strategies",
      description: "TID Capital designs and runs farming strategies across DeFi lending, liquidity, and yield opportunities."
    },
    {
      icon: Brain,
      title: "Research-Led",
      description: "In-house protocol and risk research informs which opportunities we pursue and how we monitor them."
    },
    {
      icon: Settings,
      title: "Systematic Approach",
      description: "A methodology combining quantitative metrics, qualitative assessment, and ongoing monitoring."
    }
  ];



  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Research-Driven DeFi Strategies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            TID Capital applies protocol research and onchain data to its DeFi farming strategies and vault curation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-tid-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-tid-blue w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
