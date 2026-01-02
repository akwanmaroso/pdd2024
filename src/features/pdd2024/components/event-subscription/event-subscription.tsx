"use client";

import { useState } from "react";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventSubscriptionOld = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/newsletters/subscribe`, {
        email: email,
      });

      // this action clears the input value and is triggered when the email is sent successfully
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
      }, 2500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primaryBlack-800 bg-opacity-[0.4] my-10">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-end md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <p className="mb-2 text-2xl font-semibold text-blue-200 md:mb-4">
              What to expect:
            </p>
            <ul className="list-none space-y-2 text-sm text-blue-100 md:text-base">
              <li>🎤 Inspiring keynote speakers</li>
              <li>💡 Cutting-edge AI demonstrations</li>
              <li>🤝 Networking opportunities</li>
              <li>🚀 Insights into the future of IT</li>
            </ul>
          </div>
          <form className="md:w-1/2" onSubmit={handleSubscription}>
            <p className="mb-4 text-lg font-semibold text-blue-200">
              Stay updated:
            </p>
            <div className="flex items-center">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-opacity-50 focus:bg-opacity-75 w-full appearance-none rounded-l-lg bg-blue-800 p-3 leading-tight text-white transition-all duration-200 focus:outline-hidden"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button
                disabled={isLoading || isSuccess}
                className={`${isLoading || isSuccess ? "cursor-not-allowed" : "cursor-pointer"} ${
                  isSuccess
                    ? "bg-sky-600"
                    : "bg-blue-600 hover:bg-blue-700 active:bg-blue-500"
                } shrink-0 rounded-r-lg px-4 py-3 text-sm text-white transition duration-300`}
              >
                {isLoading
                  ? "Loading..."
                  : isSuccess
                    ? "Email Sent!"
                    : "Notify Me"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventSubscriptionOld;
