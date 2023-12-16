// PAGES
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import AboutPage from "./components/AboutPage"
import ServicesPage from "./components/ServicesPage"
import ResourcesPage from "./components/ResourcesPage"
import ContactPage from "./components/ContactPage"


import './App.css'
import { useState } from "react"
import BodyContext from "./contextFile"

export default function App() {

  const [pageActive, setPageActive] = useState("body")

  const pageFunction = () => {
    switch(pageActive) {
      case "about":
        return <AboutPage />;
        break;
      case "services":
        return <ServicesPage />;
        break;
      case "resources":
        return <ResourcesPage />;
        break;
      case "contact":
        return <ContactPage />;
        break;
      default:
        return <Body />;
        break;
    }
  }

  return (<>

    <BodyContext.Provider value={[pageActive, setPageActive]}>
      <Header />
      {pageFunction()}
      <Footer />
    </BodyContext.Provider>

  </>
  )
}