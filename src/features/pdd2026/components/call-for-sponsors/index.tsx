"use client";

import { Award, Star, TrendingUp } from "lucide-react";

const CallForSponsors = () => {
  const handleEmailClick = () => {
    const email = "hammercode28@gmail.com";
    const subject = "Sponsorship Inquiry - PDD 2026";
    const body = `Hello PDD 2026 Team,

I am interested in becoming a sponsor for PDD 2026.

Company Name:
Contact Person:
Email:
Phone Number:
Preferred Sponsorship Level (Gold/Silver/Bronze):
Brief Company Description:

Please send me more information about sponsorship packages.

Thank you!`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const tiers = [
    {
      icon: <Award className="h-8 w-8" />,
      name: "Gold",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500",
      features: ["Premium booth space", "Logo on main stage", "5 free tickets"],
    },
    {
      icon: <Star className="h-8 w-8" />,
      name: "Silver",
      color: "from-gray-300 to-gray-400",
      bgColor: "bg-gray-400",
      features: ["Standard booth space", "Logo on website", "3 free tickets"],
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      name: "Bronze",
      color: "from-orange-600 to-orange-700",
      bgColor: "bg-orange-600",
      features: ["Logo on website", "2 free tickets", "Social media shoutout"],
    },
  ];

  return (
    <div id="sponsor" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Sponsor{" "}
            <span className="from-pdd-purple to-pdd-blue bg-linear-to-r bg-clip-text text-transparent">
              PDD 2026
            </span>
          </h2>
          <p className="text-pdd-light/80 mx-auto max-w-3xl text-lg md:text-xl">
            Partner with us to empower the developer community and showcase your
            brand to hundreds of tech professionals.
          </p>
        </div>

        <div className="mb-12 text-center">
          <button
            onClick={handleEmailClick}
            className="group from-pdd-purple hover:from-pdd-purple/90 hover:shadow-pdd-purple/50 to-pdd-blue hover:to-pdd-blue/90 relative inline-flex transform items-center gap-3 rounded-lg bg-linear-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Award className="h-5 w-5" />
            <span>Become a Sponsor</span>
          </button>
          <p className="text-pdd-light/60 mt-4 text-sm">
            Contact us for detailed sponsorship packages
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div key={index}>
              <div className="space-y-4 text-center">
                <div className="flex justify-center">
                  <div
                    className={`bg-linear-to-br ${tier.color} rounded-lg p-3 text-white`}
                  >
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <ul className="text-pdd-light/80 space-y-2 text-sm">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${tier.bgColor}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallForSponsors;
