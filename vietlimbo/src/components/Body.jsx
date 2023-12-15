import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"
import calendar from "../images/calendar.png"

export default function Body() {

    const studentReviews = [
        {
            name: "Qianni H",
            rating: "10/10",
            review: "Lily is a very good, patient, knowledgeable, and fun teacher! I learned a lot from her. Recommend!",
        }, 
        {
            name: "InfinityMadison",
            rating: "10/10",
            review: "Cam on for today's class Lim",
        }, 
        {
            name: "Gözde K",
            rating: "10/10",
            review: "Our first lesson was very informative and organised. Lim seems very experienced in her field and has a very friendly and warm approach. Looking forward to continue! ",
        }, 
        {
            name: "alci720",
            rating: "10/10",
            review: "Who's the best? - Lily!",
        }, 
    ]

    return (<>
    
        <section className="hero bg-primary px-5 pt-[10rem] pb-[15rem]">
            <div className="hero-container bg-secondary m-5 p-3 max-w-[80rem] mx-auto">
                <h2 className=" text-white my-5 px-5 tracking-wide">TAKING THE BABY STEPS TO BECOME A MASTER VIETNAMESE SPEAKER</h2>
                <p className=" text-white text-lg mb-5 p-5">Hello and the warmest of welcomes to Viet Limbo. Let me begin by saying that I'm ecstatic to accommodate you here and sincerely hope that we can grow together. By coming here, you are already helping me, therefore, I feel it is my duty and my honour to go above and beyond to help you.</p>

                <div className="card-container flex justify-around m-5 py-5">
                    <div className="hero-card-1 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero1} alt="" className="img1 w-full rounded-lg" />
                        <p className="mt-3 text-secblack">Helping non-natives learn an exciting new language</p>
                    </div>
                    <div className="hero-card-2 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 -rotate-3">
                        <img src={hero2} alt="" className="img2 w-full rounded-lg" />
                        <p className="mt-3 text-secblack">Any age range, any dynamic</p>
                    </div>
                    <div className="hero-card-3 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero3} alt="" className="img3 w-full rounded-lg" />
                        <p className="mt-3 text-secblack">Ensuring youngsters maintain their cultural roots</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="free-lesson-cta px-5">
            <div className="cta-container bg-white flex flex-col items-center justify-around w-4/5 max-w-[70rem] mx-auto border-4 border-secblack p-5 pb-[2rem] rounded-xl relative bottom-[8rem]">

                <div className="img-container px-5 py-2 max-w-[8rem] absolute -top-10 -left-14 bg-white border-4 border-secblack rounded-lg">
                    <img src={calendar} alt="" />
                </div>

                <div className="text-container px-5 py-2 text-secblack">
                    <h2 className="px-[3rem]">Book Free Lesson</h2>
                    <p className="py-5 text-center">The first lesson is always free. Besides, it's more of an informal chat than anything else, so charging wouldn't be proper. That being said, one of the objectives of these get-to-know sessions is that you leave with something, even if it's just one new word. I sincerely look forward to working with you.</p>
                </div>

                <div className="button-container">
                    <button className="border-2 border-secblack bg-white hover:bg-secondary text-lg font-bold px-5 py-2 rounded-md hover:text-white">Book lesson!</button>
                </div>

            </div>
        </section>

        <section className="social-proof">
            <h2 className="bg-white text-center py-5">Still not sold? My students are overjoyed!</h2>
            <p className="bg-white text-center py-5 text-xl">I'm not one to blow my own trumpet, so I've dropped a few reviews from past and present students below...</p>
            <div className="review-container">

                {studentReviews.map((item, index) => (
                    <div key={index} className={`review-card bg-secondary text-white p-5 my-[3rem] ${index % 2 == 0 ? "mx-auto" : "ms-10"} w-3/5 border-2 border-secblack rounded-lg hover:-translate-y-0.5 transition duration-300`}>
                        <h3 className="student-name">{item.name}</h3>
                        <span className="student-rating">{item.rating}</span>
                        <p className="student-review text-white">❝{item.review}❞</p>
                    </div>
                ))}

            </div>
        </section>

        <section className="resources-cta">
            <div className="resources-container">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="text-container">
                    <h2>Check out some of these free resources</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus et vero, nulla mollitia facilis cupiditate quasi perferendis officiis quisquam.</p>
                </div>
                <div className="button-container">
                    <button>View Resources!</button>
                </div>
            </div>
        </section>

        <section className="contact-intro">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolor. Doloribus qui ad rerum eligendi quia, fugit eveniet tempora omnis corporis ullam officiis repellat sequi unde, similique dolor! Incidunt voluptatem repellat ipsam ab tenetur architecto id dolorum nam eius temporibus.</p>
            <button>Get in touch!</button>
        </section>
        
    </>)
}