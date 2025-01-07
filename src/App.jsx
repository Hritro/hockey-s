import './App.css'
import NavBar from './Components/NavBar'
import Section from './Components/section'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Section title={'Professional Hockeys Club'} description={'Elevating Excellence: Join the Professional Hockey Club for a Premier Sporting Experience. Skate into Success: Unleash Your Passion with the Professional Hockey Club.'}></Section>
      <Section title={'Program Sections'} description={'Discover the richness within our organization through its multifaceted Program Sections, each a unique facet of our comprehensive offerings'}></Section>
      <Section title={'Our New Products'} description={'Explore the Essence of Our New Products. Introducing the Latest in Our Array of New Products.'}></Section>
      <Section title={'Clients Question'} description={'Insightful Answers to Your Inquiries: Explore Our Clients Questions Section for Comprehensive Information and Support.'}></Section>
    </>
  )
}

export default App
