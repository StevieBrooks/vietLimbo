import ServicesHero from "../images/hero-services-pexels-pixabay-267669.jpg"
import SoloClass from "../images/soloclass.jpg"
import GroupClass from "../images/services-group-pexels-thirdman-5256691.jpg"
import Translation from "../images/services-trans-etienne-girardet-hpbiThVmsss-unsplash.jpg"

export default function ServicesPage() {
    return (<>
        
        <section className="hero bg-primary px-5 pt-[10rem] pb-[5rem]">
            <div className="hero-container bg-secondary m-5 p-3 max-w-[80rem] mx-auto border-4 border-secblack rounded-xl relative">
                <img className="rounded-lg" src={ServicesHero} alt="" />
                <h2 className="absolute top-[50%] left-0 -translate-y-[50%] text-white bg-secondary px-3 ">Our range of services are displayed below...</h2>
            </div>
        </section>

        <section className="card-container flex justify-around m-5 py-5 max-w-[80rem] mx-auto">
            <div className="hero-card-1 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                <img src={SoloClass} alt="" className="img1 w-full rounded-lg" />
                <h3 className="font-bold p-2">Vietnamese Class</h3>
                <p><i>Price from $12/hour</i></p>
                <div className="button-container mx-3 my-5">
                    <button className="border-2 border-secblack bg-white hover:bg-secondary  font-bold px-5 py-2 rounded-md hover:text-white">Book Now!</button>
                </div>
            </div>
            <div className="hero-card-2 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 -rotate-3">
                <img src={GroupClass} alt="" className="img2 w-full rounded-lg" />
                <h3 className="font-bold p-2">Vietnamese Group Class</h3>
                <p><i>Price from $20/hour</i></p>
                <div className="button-container mx-3 my-5">
                    <button className="border-2 border-secblack bg-white hover:bg-secondary  font-bold px-5 py-2 rounded-md hover:text-white">Book Now!</button>
                </div>
            </div>
            <div className="hero-card-3 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                <img src={Translation} alt="" className="img3 w-full rounded-lg" />
                <h3 className="font-bold p-2">Vietnamese Translation</h3>
                <p><i>Price from $15/hour</i></p>
                <div className="button-container mx-3 my-5">
                    <button className="border-2 border-secblack bg-white hover:bg-secondary  font-bold px-5 py-2 rounded-md hover:text-white">Book Now!</button>
                </div>
            </div>
        </section>

        </>)
}