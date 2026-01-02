import { Calendar, MapPin } from 'lucide-react'

const Header = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 flex flex-col justify-center items-center py-24">
      <div className="text-center space-y-6">
        <div className="inline-block">
          <span className="bg-linear-to-r from-sky-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
            Coming Soon
          </span>
        </div>

        <h1 className="md:text-6xl text-4xl font-bold leading-tight">
          <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Palu Developer Day
          </span>
          <br />
          <span className="text-white text-5xl md:text-7xl">2026</span>
        </h1>

        <p className="text-blue-200 md:text-2xl text-xl max-w-3xl mx-auto">
          The Biggest Community-Led Developer Conference in Palu City
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
          <div className="flex items-center gap-2 text-sky-300">
            <Calendar className="w-5 h-5" />
            <span className="text-sm md:text-base">2026</span>
          </div>
          <div className="flex items-center gap-2 text-sky-300">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base">Palu City</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
