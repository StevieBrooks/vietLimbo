import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import './App.css'
import { useState, useRef } from "react"
import BodyContext from "./contextFile"

export default function App() {

  const [bodyActive, setBodyActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)
  const [servicesActive, setServicesActive] = useState(false)
  const [resourcesActive, setResourcesActive] = useState(false)
  const [contactActive, setContextActive] = useState(false)

  return (<>

    <BodyContext.Provider value={[bodyActive, setBodyActive, aboutActive, setAboutActive, servicesActive, setServicesActive, resourcesActive, setResourcesActive, contactActive, setContextActive]}>
      <Header />
      {bodyActive && <Body />}
      <Footer />
    </BodyContext.Provider>

  </>
  )
}