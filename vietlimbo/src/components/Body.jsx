import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"
import calendar from "../images/calendar.png"
import avatar from "../images/lily1.png"

export default function Body() {

    const studentReviews = [
        {
            name: "Qianni H",
            rating: "5/5",
            review: "Lily is a very good, patient, knowledgeable, and fun teacher! I learned a lot from her. Recommend!",
        }, 
        {
            name: "InfinityMadison",
            rating: "5/5",
            review: "Cam on for today's class Lim",
        }, 
        {
            name: "Gözde K",
            rating: "5/5",
            review: "Our first lesson was very informative and organised. Lim seems very experienced in her field and has a very friendly and warm approach. Looking forward to continue! ",
        }, 
        {
            name: "alci720",
            rating: "5/5",
            review: "Who's the best? - Lily!",
        }, 
    ]

    return (<>
    
        <section className="hero bg-primary px-5 pt-[10rem] pb-[15rem]">
            <div className="hero-container bg-secondary m-5 p-3 max-w-[80rem] mx-auto border-4 border-secblack rounded-xl">
                <h2 className=" text-white my-5 px-5 tracking-wide">TAKING THE BABY STEPS TO BECOME A MASTER VIETNAMESE SPEAKER</h2>
                <p className=" text-white mb-5 p-5">Hello and the warmest of welcomes to Viet Limbo. Let me begin by saying that I'm ecstatic to accommodate you here and sincerely hope that we can grow together. By coming here, you are already helping me, therefore, I feel it is my duty and my honour to go above and beyond to help you.</p>

                <div className="card-container flex justify-around m-5 py-5">
                    <div className="hero-card-1 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero1} alt="" className="img1 w-full rounded-lg" />
                        <p className="mt-3 text-secblack text-lg">Helping non-natives learn an exciting new language</p>
                    </div>
                    <div className="hero-card-2 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 -rotate-3">
                        <img src={hero2} alt="" className="img2 w-full rounded-lg" />
                        <p className="mt-3 text-secblack text-lg">Any age range, any dynamic</p>
                    </div>
                    <div className="hero-card-3 p-3 my-5 border-2 border-secblack rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero3} alt="" className="img3 w-full rounded-lg" />
                        <p className="mt-3 text-secblack text-lg">Ensuring youngsters maintain their cultural roots</p>
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
                    <button className="border-2 border-secblack bg-white hover:bg-secondary  font-bold px-5 py-2 rounded-md hover:text-white">Book lesson!</button>
                </div>

            </div>
        </section>

        <section className="social-proof border-t-8 border-primary py-5">
            <h2 className="bg-white text-center py-5">Still not sold? My students are overjoyed!</h2>
            <p className="bg-white text-center pt-3 pb-[2.5rem] px-2 border-b-8 border-primary">I'm not one to blow my own trumpet, so I've dropped a few reviews from past and present students below...</p>

            <div className="review-container">

                {studentReviews.map((item, index) => (
                    <div key={index} className={`review-card bg-secondary text-white p-5 my-[5rem] ${index % 2 == 0 ? "mx-auto" : "ms-10"} w-3/5 border-4 border-secblack rounded-lg hover:-translate-y-0.5 transition duration-300`}>
                        <span className="student-rating bg-primary p-5 border-4 border-secblack rounded-full relative bottom-9 font-bold text-2xl text-secblack tracking-widest">{item.rating}</span>
                        <p className="student-review text-white text-xl text-center px-1 py-3">❝ {item.review} ❞</p>
                        <h3 className="student-name text-md"><i>- {item.name}</i></h3>
                    </div>
                ))}

            </div>
        </section>

        <section className="resources-cta bg-primary p-5 pb-[2rem]">
            <div className="resources-container">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="text-container">
                    <h2 className="text-white py-5">Check out some of these free resources</h2>
                    <p className="text-white py-5 px-2">For now, the resources on this site are limited. However, as we grow, both the quality and consistency is expected to improve so we wholeheartedly welcome your support in the meantime. Moreover, should you have any suggestions for us, we are more than happy to hear them. Please feel free to hit us up on the Contact page. For now, these alphabet cards should be enough to get you started.</p>
                </div>
                <div className="button-container text-right">
                    <button className="border-2 border-secblack bg-white hover:bg-secondary font-bold px-5 py-2 me-[5rem] my-5 rounded-md hover:text-white">View Resources!</button>
                </div>
            </div>
        </section>

        <section className="about-intro">
            <div className="intro-container max-w-[70rem] mx-auto">
                <div className="img-container relative bottom-24 ms-[3rem] border-4 border-secblack rounded-lg w-fit p-3 bg-white z-10">
                    <img src={avatar} alt="" className="w-80 rounded-lg" />
                </div>
                <div className="text-container relative bottom-48 mx-5 border-4 border-secblack rounded-lg p-5 bg-white">
                    <h2 className="w-2/5 float-right ms-3 mb-3">So you can put a face to the name</h2>
                    <p className="mt-[6rem] mb-3">As Viet Limbo is still in its infancy, please don't be surprised or demotivated if a few teething problems occur. I'm hard at work trying to build a unique and valuable collection of resources to aid you learn Vietnamese. As you may be aware already, Vietnamese pronunciation is no easy feat. So I would like to invite you to check out the resources tab in the main menu. There is a button just above too.</p>
                    <p className="mb-5">It is my humble ambition to develop one of the finest resources of Vietnamese language education on the market. Incidentally, should you have any suggestions or criticisms, I would be more than delighted to hear them. For now, please remember that learning this melifluous language is not a sprint, it's a marathon. Take your time and I hope you enjoy this journey as much as I do. Please don't hesitate to reach out if you need anything. Your friend and Vietnamese mentor, Lily.</p>
                </div>
            </div>
        </section>

        <section className="contact-intro  text-center bg-white p-5 border-t-8 border-primary">
            <h2 className="p-5">I'm here if you need anything</h2>
            <p>As I have already mentioned, the first lesson is always free. Booking an informal chat will give you the chance to ask any burning questions and help you decide if we're the right fit. There is absolutely no obligation to book anything further. In the meantime, I look forward to hearing from you.</p>
            <button className="border-2 border-secblack bg-white hover:bg-secondary font-bold px-5 py-2 my-[2rem] rounded-md hover:text-white">Get in touch!</button>
        </section>
        
    </>)
}