import { KeyRound, Gauge, ClipboardCheck, Droplets, Activity, FileText } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: KeyRound,
      title: "Multisig & Simulation",
      description: "Vault operations run through a multisig, and transactions are simulated before execution to confirm their effects."
    },
    {
      icon: Gauge,
      title: "Allocation Limits",
      description: "Exposure is capped by asset, market, and protocol, with limits set from internal risk scores."
    },
    {
      icon: ClipboardCheck,
      title: "Market Onboarding",
      description: "Before a market is used, its collateral, oracle, liquidity, and contract setup are assessed. Assets below our risk thresholds are not eligible for allocation."
    },
    {
      icon: Droplets,
      title: "Liquidity Management",
      description: "Idle liquidity is held to meet withdrawals and to allow deleveraging when conditions change."
    },
    {
      icon: Activity,
      title: "Position Monitoring",
      description: "Every position is tracked onchain, including value, yield, rewards, and capital flows, so changes are caught early."
    },
    {
      icon: FileText,
      title: "Detailed Reporting",
      description: "Position-level records of entries, exits, rewards, and capital flows support detailed, verifiable reporting."
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How We Curate
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vault curation is about managing risk on behalf of depositors. These are the controls behind every allocation.
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
