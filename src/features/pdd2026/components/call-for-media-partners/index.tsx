'use client'

import { Radio } from 'lucide-react'

const CallForMediaPartners = () => {
  const handleEmailClick = () => {
    const email = 'hammercode28@gmail.com'
    const subject = 'Media Partnership Inquiry - PDD 2026'
    const body = `Hello PDD 2026 Team,

I am interested in becoming a media partner for PDD 2026.

Organization Name:
Contact Person:
Email:
Phone Number:
Type of Media (Blog/Podcast/YouTube/Community/etc):
Audience Reach & Description:

Please send me more information about media partnership opportunities.

Thank you!`

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div
      id="media-partner"
      className="bg-primaryBlack-800 bg-opacity-[0.4] py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
            Media <span className="text-purple-500">Partnership</span>
          </h2>
          <p className="text-blue-200 md:text-xl text-lg max-w-3xl mx-auto">
            Join us as a media partner to cover the biggest developer conference
            in Palu City and amplify the voice of tech community.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
          >
            <Radio className="w-5 h-5" />
            <span>Become a Media Partner</span>
          </button>
          <p className="text-blue-300 text-sm mt-4">
            Partner with us to spread the word
          </p>
        </div>
      </div>
    </div>
  )
}

export default CallForMediaPartners
