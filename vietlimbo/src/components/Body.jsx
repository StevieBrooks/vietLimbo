import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"

export default function Body() {
    return (<>
    
        <section className="hero bg-primary px-5 pt-5 pb-[10rem]">
            <div className="hero-container bg-secondary m-5 p-3 max-w-[80rem] mx-auto">
                <h2 className=" text-white my-5 px-5 tracking-wide">TAKING THE BABY STEPS TO BECOME A MASTER VIETNAMESE SPEAKER</h2>
                <p className=" text-white text-lg mb-5 p-5">Hello and the warmest of welcomes to Viet Limbo. Let me begin by saying that I'm ecstatic to accommodate you here and sincerely hope that we can grow together. By coming here, you are already helping me, therefore, I feel it is my duty and my honour to go above and beyond to help you.</p>

                <div className="card-container flex justify-around m-5 py-5">
                    <div className="hero-card-1 p-3 my-5 border-2 rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero1} alt="" className="img1 w-full rounded-lg" />
                        <p className="mt-3">Helping non-natives learn an exciting new language</p>
                    </div>
                    <div className="hero-card-2 p-3 my-5 border-2 rounded-lg bg-white text-center w-80 -rotate-3">
                        <img src={hero2} alt="" className="img2 w-full rounded-lg" />
                        <p className="mt-3">Any age range, any dynamic</p>
                    </div>
                    <div className="hero-card-3 p-3 my-5 border-2 rounded-lg bg-white text-center w-80 rotate-3">
                        <img src={hero3} alt="" className="img3 w-full rounded-lg" />
                        <p className="mt-3">Ensuring youngsters maintain their cultural roots</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="free-lesson-cta">
            <div className="cta-container">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="text-container">
                    <h2>Book a Free Lesson</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus et vero, nulla mollitia facilis cupiditate quasi perferendis officiis quisquam.</p>
                </div>
                <div className="button-container">
                    <button>Book lesson!</button>
                </div>
            </div>
        </section>

        <section className="social-proof">
            <h2>Still not sold? My students are overjoyed!</h2>
            <p>I'm not one to blow my own trumpet, so I've dropped a few reviews from past and present students below...</p>
            <div className="review-container">

                <div className="review-card">
                    <h3 className="student-name">Qianni H</h3>
                    <span className="student-rating">10/10</span>
                    <p className="student-review">❝Lily is a very good, patient, knowledgeable, and fun teacher! I learned a lot from her. Recommend!❞</p>
                </div>

                <div className="review-card">
                    <h3 className="student-name">InfinityMadison</h3>
                    <span className="student-rating">10/10</span>
                    <p className="student-review">❝Cam on for today's class Lim!❞</p>
                </div>

                <div className="review-card">
                    <h3 className="student-name">Gözde K</h3>
                    <span className="student-rating">10/10</span>
                    <p className="student-review">❝Our first lesson was very informative and organised. Lim seems very experienced in her field and has a very friendly and warm approach. Looking forward to continue! ❞</p>
                </div>

                <div className="review-card">
                    <h3 className="student-name">alci720</h3>
                    <span className="student-rating">10/10</span>
                    <p className="student-review">❝Who's the best? - Lily!❞</p>
                </div>

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