'use client'

import { Mic } from 'lucide-react'

const SpeakersProposal = () => {
  const handleEmailClick = () => {
    const email = 'hammercode28@gmail.com'
    const subject = 'Speaker Proposal - PDD 2026'
    const body = `Hello PDD 2026 Team,

I would like to submit a speaker proposal for PDD 2026.

Full Name:
Email:
Phone Number:
Area of Expertise:
Proposed Topic:
Brief Bio:
LinkedIn Profile (optional):

Thank you!`

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div
      id="speaker-proposal"
      className="bg-primaryBlack-800 bg-opacity-[0.4] py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-3xl font-bold mb-4">
            Become a <span className="text-sky-500">Speaker</span>
          </h2>
          <p className="text-blue-200 md:text-xl text-lg max-w-3xl mx-auto">
            Share your expertise with the biggest community-led developer
            conference in Palu City. Submit your proposal now!
          </p>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50"
          >
            <Mic className="w-5 h-5" />
            <span>Submit Your Proposal</span>
          </button>
          <p className="text-blue-300 text-sm mt-4">
            Click to send your proposal via email
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpeakersProposal
