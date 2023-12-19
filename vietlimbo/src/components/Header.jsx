import { useContext } from "react"
import BodyContext from "../contextFile"


export default function Header() {

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
    
        <header className="flex justify-between items-center fixed top-0 w-full z-50 bg-primary py-5">

            <div className="brand flex items-center ms-3 cursor-pointer" onClick={brandFunction}>
                <span className="logo bg-white text-secblack text-3xl font-bold font-serif px-1 rounded border-2 shadow-md">V</span>
                <h1 className="ps-1 text-secblack hover:text-white underline underline-offset-4">ietLimbo</h1>
            </div>


            <nav className="w-3/5">
                <ul className="flex justify-evenly text-lg text-secblack font-bold tracking-wider">
                    <li className="hover:text-white" onClick={aboutFunction}><a href="">About</a></li>
                    <li className="hover:text-white" onClick={servicesFunction}><a href="">Services</a></li>
                    <li className="hover:text-white" onClick={resourcesFunction}><a href="">Resources</a></li>
                    {/* <li className="hover:text-white"><a href="">Blog</a></li> */}
                </ul>
            </nav>
            
            <button className="bg-white hover:bg-secondary px-3 py-2 border border-2 border-secblack rounded-lg me-2 text-secblack hover:text-white font-bold tracking-wider" onClick={contactFunction}>Contact Me!</button>

        </header>
    
    </>)
}