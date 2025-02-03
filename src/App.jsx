import "./App.css";
import CircleProgress from "./components/CircleProgress";
import ImageBgCard from "./components/ImageBgCard";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import State from "./components/Stat";
import juniorImage from "./assets/images/2.png";
import teenAgerImage from "./assets/images/3.png";
import profImage from "./assets/images/4.png";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import ClientQuestion from "./Components/ClientQuestion";
import SocialMedia from "./Components/SocialMedia";
import Footer from "./Components/Footer";
import GetinTouch from "./Components/GetinTouch";

function App() {
  const products = [
    {
      id: 1,
      title: "World Cup Flags Football",
      description: "Dolor sit amet consectetur. Ut urna diam quis sagittis.",
      image: "https://taskph3.netlify.app/images/5.png",
      price: 22.0,
      rating: 5.0,
      view: 20,
      like: 200,
    },
    {
      id: 2,
      title: "Champion Soccer Ball",
      description:
        "Premium soccer ball for professional matches. Curated for excellence.",
      image: "https://taskph3.netlify.app/images/7.png",
      price: 35.0,
      rating: 4.8,
      view: 45,
      like: 150,
    },
    {
      id: 3,
      title: "Sports Water Bottle",
      description:
        "Lightweight, durable water bottle to keep you hydrated during games.",
      image: "https://taskph3.netlify.app/images/9.png",
      price: 12.5,
      rating: 4.5,
      view: 60,
      like: 230,
    },
    {
      id: 4,
      title: "Custom Team Jersey",
      description:
        "Design your custom jersey with premium materials for your team.",
      image: "https://taskph3.netlify.app/images/6.png",
      price: 50.0,
      rating: 4.9,
      view: 85,
      like: 400,
    },
    {
      id: 5,
      title: "Stadium Seat Cushion",
      description:
        "Comfortable and portable cushion for a better stadium experience.",
      image: "https://taskph3.netlify.app/images/8.png",
      price: 18.0,
      rating: 4.7,
      view: 30,
      like: 120,
    },
    {
      id: 6,
      title: "Football Training Cones",
      description:
        "Set of 20 durable training cones for drills and practice sessions.",
      image: "https://taskph3.netlify.app/images/10.png",
      price: 25.0,
      rating: 4.6,
      view: 40,
      like: 95,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>

        <Banner></Banner>

        <Section
          title={"Professional Hockeys Club"}
          description={
            "Elevating Excellence: Join the Professional Hockey Club for a Premier Sporting Experience. Skate into Success: Unleash Your Passion with the Professional Hockey Club."
          }
        ></Section>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
          <State
            progress={
              <CircleProgress
                strk={"red"}
                ofst={"73px"}
                percentage={"87"}
              ></CircleProgress>
            }
            title={"Prayer Facility"}
            description={
              "Our Prayer Facility offers a tranquil haven for moments of reflection and connection."
            }
          ></State>

          <State
            progress={
              <CircleProgress
                strk={"cyan"}
                ofst={"60px"}
                percentage={"95"}
              ></CircleProgress>
            }
            title={"Experienced Coach"}
            description={
              "Our seasoned coaches bring a wealth of experience, dedication, and personalized guidance to every coaching session."
            }
          ></State>

          <State
            progress={
              <CircleProgress
                strk={"orange"}
                ofst={"70px"}
                percentage={"90"}
              ></CircleProgress>
            }
            title={"Senior Player"}
            description={
              "Embark on a Journey of Mastery with Our Senior Players."
            }
          ></State>

          <State
            progress={
              <CircleProgress
                strk={"blue"}
                ofst={"80px"}
                percentage={"80"}
              ></CircleProgress>
            }
            title={"Training Ground"}
            description={
              "Our Training Ground is a sacred arena where dedication meets discipline, and aspirations evolve into achievements."
            }
          ></State>
        </div>

        <Section
          title={"Program Sections"}
          description={
            "Discover the richness within our organization through its multifaceted Program Sections, each a unique facet of our comprehensive offerings"
          }
        ></Section>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5 mt-10">
          <ImageBgCard
            image={juniorImage}
            title={"Junior Program"}
            description={
              "Empowering Tomorrow's Leaders: Unleashing Potential through the Junior Program. Journeying into Excellence with our Junior Program."
            }
          ></ImageBgCard>

          <ImageBgCard
            image={teenAgerImage}
            title={"Teenager Program"}
            description={
              "Navigating Adolescence: Empowering Growth with the Teenager Program. Unleashing Potential through our Teenager Program"
            }
          ></ImageBgCard>
        </div>

        <ImageBgCard
          image={profImage}
          title={"Professional Program"}
          description={
            "Master Your Craft: Elevate Your Skills with the Professional Program. Unleashing Potential through Our Professional Program."
          }
        ></ImageBgCard>

        <Section
          title={"Our New Products"}
          description={
            "Explore the Essence of Our New Products. Introducing the Latest in Our Array of New Products."
          }
        ></Section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <ClientQuestion></ClientQuestion>
        <Section
          title={"Get In Touch"}
          description={"Whether you have inquiries, feedback, or collaboration proposals, we're here to listen and respond promptly."}
        ></Section>
        <GetinTouch></GetinTouch>
        <SocialMedia></SocialMedia>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
