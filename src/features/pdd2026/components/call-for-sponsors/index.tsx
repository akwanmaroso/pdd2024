'use client'

import { Award, Star, TrendingUp } from 'lucide-react'

const CallForSponsors = () => {
  const handleEmailClick = () => {
    const email = 'hammercode28@gmail.com'
    const subject = 'Sponsorship Inquiry - PDD 2026'
    const body = `Hello PDD 2026 Team,

I am interested in becoming a sponsor for PDD 2026.

Company Name:
Contact Person:
Email:
Phone Number:
Preferred Sponsorship Level (Gold/Silver/Bronze):
Brief Company Description:

Please send me more information about sponsorship packages.

Thank you!`

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const tiers = [
    {
      icon: <Award className="w-8 h-8" />,
      name: 'Gold',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-500',
      features: ['Premium booth space', 'Logo on main stage', '5 free tickets'],
    },
    {
      icon: <Star className="w-8 h-8" />,
      name: 'Silver',
      color: 'from-gray-300 to-gray-400',
      bgColor: 'bg-gray-400',
      features: ['Standard booth space', 'Logo on website', '3 free tickets'],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      name: 'Bronze',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-600',
      features: ['Logo on website', '2 free tickets', 'Social media shoutout'],
    },
  ]

  return (
    <div id="sponsor" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
            Sponsor <span className="text-yellow-500">PDD 2026</span>
          </h2>
          <p className="text-blue-200 md:text-xl text-lg max-w-3xl mx-auto">
            Partner with us to empower the developer community and showcase your
            brand to hundreds of tech professionals.
          </p>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50"
          >
            <Award className="w-5 h-5" />
            <span>Become a Sponsor</span>
          </button>
          <p className="text-blue-300 text-sm mt-4">
            Contact us for detailed sponsorship packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div key={index}>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div
                    className={`bg-gradient-to-br ${tier.color} p-3 rounded-lg text-white`}
                  >
                    {tier.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <ul className="space-y-2 text-blue-200 text-sm">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 justify-center"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${tier.bgColor}`}
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
  )
}

export default CallForSponsors
