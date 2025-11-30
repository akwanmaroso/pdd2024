import { Fragment } from 'react'
import Header from './components/header'
import About from './components/about'
import SpeakersProposal from './components/speakers-proposal'
import CallForSponsors from './components/call-for-sponsors'
import CallForMediaPartners from './components/call-for-media-partners'

const Pdd2026 = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <SpeakersProposal />
      <CallForSponsors />
      <CallForMediaPartners />
    </Fragment>
  )
}

export default Pdd2026
