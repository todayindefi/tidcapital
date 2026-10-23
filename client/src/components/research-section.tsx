import { Newspaper, Microscope, ShieldCheck } from "lucide-react";

export default function ResearchSection() {
  const researchFeatures = [
    {
      icon: ShieldCheck,
      title: "Asset & Protocol Risk Scoring",
      description: "Assets are scored on volatility, liquidity, structure, redemption, and issuer risk; protocols on contract, economic, and project risk. Scores are revisited as conditions change."
    },
    {
      icon: Microscope,
      title: "Security & Admin Review",
      description: "Review of upgradeability, multisig and timelock setups, admin permissions, audits, and past incidents, including forensic analysis where public post-mortems are thin."
    },
    {
      icon: Newspaper,
      title: "Backing & Market Monitoring",
      description: "Ongoing tracking of stablecoin pegs, collateral backing, lending market utilization, and oracle behavior across the protocols we use."
    }
  ];

  const researchAreas = [
    "Stablecoin and collateral backing",
    "Lending market health",
    "Smart-contract and admin permissions",
    "Oracles and price feeds",
    "Liquidity and exit conditions",
    "Security incidents and exploits"
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Proprietary <span className="text-tid-black">DeFi Research</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              TID Capital builds its own risk research and monitoring tools to evaluate opportunities before deployment and track positions afterward.
            </p>
            
            <div className="space-y-6">
              {researchFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-tid-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="text-tid-blue w-4 h-4" />
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
          </div>
          
          <div className="relative">
            <div className="rounded-xl shadow-lg bg-white dark:bg-gray-900 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Research Focus
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {researchAreas.map((area) => (
                  <li key={area} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
