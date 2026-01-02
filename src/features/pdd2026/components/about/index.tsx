import Image from 'next/image'

const About = () => {
  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="relative bg-primaryBlack-800 bg-opacity-60 backdrop-blur-xs border border-sky-500/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center justify-center gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-lg group-hover:bg-sky-500/30 transition-all"></div>
                <Image
                  src="/assets/logos/ic_pdd24.svg"
                  alt="pdd-2026-logo"
                  width={80}
                  height={80}
                  className="relative w-20 h-20 md:w-24 md:h-24"
                />
              </div>
              <span className="text-sky-400">X</span>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-500/30 transition-all"></div>
                <Image
                  src="/assets/logos/ic_hmc.svg"
                  alt="hammercode-logo"
                  width={80}
                  height={80}
                  className="relative w-20 h-20 md:w-24 md:h-24"
                />
              </div>
            </div>

            <p className="text-blue-200 leading-relaxed md:text-lg max-w-4xl">
              <span className="text-sky-400">Palu Developer Day</span> aims to
              inspire the young generation of Palu City in the field of software
              engineering and technological creativity. The event brings
              together professionals and industry experts to share knowledge and
              the latest trends. bringing together developers, tech enthusiasts,
              and industry professionals. Join us to learn, network, and grow
              together as we shape the future of technology in Central Sulawesi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
