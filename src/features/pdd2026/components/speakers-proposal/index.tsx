"use client";

import { Mic } from "lucide-react";

const SpeakersProposal = () => {
  const handleEmailClick = () => {
    const email = "hammercode28@gmail.com";
    const subject = "Speaker Proposal - PDD 2026";
    const body = `Hello PDD 2026 Team,

I would like to submit a speaker proposal for PDD 2026.

Full Name:
Email:
Phone Number:
Area of Expertise:
Proposed Topic:
Brief Bio:
LinkedIn Profile (optional):

Thank you!`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="speaker-proposal"
      className="bg-primaryBlack-800 bg-opacity-[0.4] scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Become a <span className="text-sky-500">Speaker</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-blue-200 md:text-xl">
            Share your expertise with the biggest community-led developer
            conference in Palu City. Submit your proposal now!
          </p>
        </div>

        <div className="mb-12 text-center">
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex transform items-center gap-3 rounded-lg bg-linear-to-r from-sky-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-sky-500 hover:to-blue-500 hover:shadow-xl hover:shadow-sky-500/50"
          >
            <Mic className="h-5 w-5" />
            <span>Submit Your Proposal</span>
          </button>
          <p className="mt-4 text-sm text-blue-300">
            Click to send your proposal via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeakersProposal;
