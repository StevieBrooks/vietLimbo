import { useContext } from "react"
import BodyContext from "../contextFile"

export default function Footer() {

    const [pageActive, setPageActive]= useContext(BodyContext)

    const brandFunction = (e) => {
        e.preventDefault()
        setPageActive("body")
    }

    const aboutFunction = (e) => {
        e.preventDefault()
        setPageActive("about")
    }

    const servicesFunction = (e) => {
        e.preventDefault()
        setPageActive("services")
    }

    const resourcesFunction = (e) => {
        e.preventDefault()
        setPageActive("resources")
    }

    const contactFunction = (e) => {
        e.preventDefault()
        setPageActive("contact")
    }

    return (<>
    
        <footer className="flex justify-between items-center bg-primary py-5">
            <div className="brand-container">
                <div className="brand flex items-center ms-3 cursor-pointer" onClick={brandFunction}>
                    <span className="logo bg-white text-secblack text-2xl font-bold font-serif px-1 rounded border-2 shadow-md">V</span>
                    <h1 className="ps-1 text-secblack text-md hover:text-white underline underline-offset-4">ietLimbo</h1>
                </div>
                <p className="ms-3 text-center text-lg">Copyright 2024</p>
            </div>

            <div className="footer-menu w-4/5">
                <ul className="flex justify-between mx-5 text-lg">
                    <li className="hover:text-white"><a href="" onClick={aboutFunction}>About</a></li>
                    <li className="hover:text-white"><a href="">Privacy</a></li>
                    <li className="hover:text-white" onClick={contactFunction}><a href="">Contact</a></li>
                </ul>
            </div>
        </footer>

    </>)
}