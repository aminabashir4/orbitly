"use client";

export default function PricingPlansSection() {
  const plans = [
    {
      title: "Basic",
      price: 15,
      features: [
        "Time tracking",
        "Task management",
        "Unlimited projects",
        "CRM",
        "Service library",
        "iOS & Android app",
        "Unlimited clients",
      ],
      buttonColor: "bg-[#d4f399] hover:bg-lime-300 text-gray-900",
      border: "border-gray-200",
      highlight: false,
    },
    {
      title: "Essentials",
      price: 25,
      subtitle: "Most popular",
      features: [
        "Everything in Basic plus:",
        "Invoices & Payments",
        "Proposals & Contracts",
        "All templates",
        "Forms & Questionnaires",
        "Expense tracking",
        "Income tracking",
      ],
      buttonColor: "bg-[#d4f399] hover:bg-lime-300 text-gray-900",
      border: "border-emerald-400",
      highlight: true,
    },
    {
      title: "Premium",
      price: 39,
      features: [
        "Everything in Essentials plus:",
        "Project insights",
        "Workload management",
        "Custom fields & properties",
        "Profit & Productivity reports",
        "Remove Bonsai branding",
        "Client portal",
      ],
      buttonColor: "bg-[#d4f399] hover:bg-lime-300 text-gray-900",
      border: "border-gray-200",
      highlight: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#969c8a] to-black">
              Pick the <span>best plan</span>
              <br /> for your <span className="font-bold">business</span>
            </h2>
          </div>
          <div>
            <p className="text-[#50504e] text-lg leading-relaxed max-w-sm">
              Everything you need to manage leads, automate your client workflow
              & provide a top experience.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex justify-center">
              {/* Highlighted border for center card */}
              {plan.highlight && (
                <div className="absolute -top-10 -left-1 -right-1 -bottom-1 border-t-50 border-l-[5px] border-r-[5px] border-b-[5px] border-[#86d9c7] rounded-2xl"></div>
              )}

              {/* White Card */}
              <div
                className={`relative bg-white rounded-2xl border ${plan.border} p-8 flex flex-col justify-between shadow-sm w-full h-full ${
                  plan.highlight ? "shadow-lg z-10" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-black text-sm font-semibold  px-4 py-1 rounded-full">
                    {plan.subtitle}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">
                      / user / mo
                    </span>
                  </div>
                  <p className="text-gray-500 mb-6">
                    {plan.highlight
                      ? "Send agreements and invoices to clients and keep track of finances."
                      : index === 0
                      ? "Track time and manage your projects seamlessly."
                      : "Advanced project management and reporting plus integrations."}
                  </p>
                  <hr className="mb-6 border-gray-200" />
                  <ul className="space-y-3 text-gray-700 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-black mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 w-full py-3 rounded-md font-medium ${plan.buttonColor} transition-colors duration-200`}
                >
                  Start for free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
