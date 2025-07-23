export default function MethodologySection() {
  const riskCategories = [
    {
      title: "Asset Risk Assessment",
      description: "Evaluation of underlying asset quality, market depth, volatility patterns, and correlation dynamics to assess fundamental stability."
    },
    {
      title: "APY Risk Analysis", 
      description: "Assessment of yield sustainability, emission schedules, tokenomics, and historical APY patterns to predict long-term viability."
    },
    {
      title: "Smart Contract Security",
      description: "Comprehensive audit review, code analysis, team credentials, and track record evaluation to minimize technical risks."
    },
    {
      title: "Peg Risk Monitoring",
      description: "Analysis of stablecoin mechanisms, collateralization ratios, and redemption processes to assess peg stability risks."
    }
  ];

  const riskScores = [
    { level: "Low Risk", score: "1-3", color: "green", allocation: "Conservative allocation" },
    { level: "Moderate", score: "4-6", color: "yellow", allocation: "Balanced exposure" },
    { level: "High Risk", score: "7-8", color: "orange", allocation: "Limited allocation" },
    { level: "Extreme", score: "9-10", color: "red", allocation: "Avoid or minimal" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
      yellow: "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300", 
      orange: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300",
      red: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section id="methodology" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Risk Assessment Framework
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive methodology evaluates every opportunity across four critical risk dimensions to ensure sustainable, risk-adjusted returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-xl shadow-lg bg-white dark:bg-gray-900 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Risk Analysis Framework
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-tid-blue/10 dark:bg-tid-blue/20 rounded-lg">
                    <div className="text-2xl font-bold text-tid-blue">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Risk Dimensions</div>
                  </div>
                  <div className="p-4 bg-tid-blue/10 dark:bg-tid-blue/20 rounded-lg">
                    <div className="text-2xl font-bold text-tid-blue">10</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Point Scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {riskCategories.map((category, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-tid-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Risk Scoring Matrix
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {riskScores.map((score, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl border ${getColorClasses(score.color)}`}
              >
                <div className="text-2xl font-bold mb-2">{score.level}</div>
                <div className="text-sm mb-2">Score: {score.score}</div>
                <div className="text-xs opacity-75">{score.allocation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
