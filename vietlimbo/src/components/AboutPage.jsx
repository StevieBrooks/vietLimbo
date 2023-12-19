import AboutHero from "../images/hero-about-pexels-markus-winkler-5156618.jpg"

// more interesting border radius for hero sections maybe? could even write function to randomise this and also animate on page load...

export default function AboutPage() {
    return (<>

        <section className="hero bg-primary px-5 pt-[10rem] pb-[5rem]">
            <div className="hero-container bg-secondary m-5 p-3 max-w-[80rem] mx-auto border-4 border-secblack rounded-xl relative">
                <img className="rounded-lg" src={AboutHero} alt="" />
                <h2 className="absolute top-[50%] left-0 -translate-y-[50%] text-white bg-secondary px-3 ">Viet Limbo: Your online guide to Vietnamese</h2>
            </div>
        </section>

        <section className="intro text-center p-5 m-5">
            <p>Being a native English speaker trying to study Vietnamese is not an easy task. Running a marathon with a baby elephant in tow would be easier. In terms of the language, the first thing that foreigners struggle with is the pronunciation. Vietnamese phonics have proven to be a huge obstacle for the majority of foreigners for eons. Naturally, many quit and simply enjoy Vietnam for the wonderful country that it is.</p>
        </section>
    
        <section>
            <p className="p-3">Neglecting to learn the language may be to the detriment of visitors. On the other hand, Vietnamese language sounds mellifluous either way. There is something truly blissful and satisfying about the way Tiếng Việt (Vietnamese language) rolls off the tongue. While difficult to master, it is not impossible.</p>

            <p className="p-3">Not to discourage you, but Vietnamese is generally regarded as one of the toughest languages for native English speakers to grasp. Therefore, it may come as no surprise that locals are encouraging and supportive towards anyone trying to study Vietnamese.</p>

            <p className="p-3">Once you’ve got past “hello” and “thank you” and the basic pronouns, you’re onto a winner. Making the effort to communicate with locals will not go unrewarded. At the very least, you can expect a smile and some friendly banter. Albeit, it might be a while before you understand exactly what is being said.</p>
        </section>

        

        <h2 className="p-5 my-5 border-t-8 border-primary border-b-8">“Study Vietnamese”, she said. Well then, please help!</h2>

        <section>
            <p className="p-3">Viet Limbo was founded in 2023 by my husband and I who’ve been an item since 2016. In short, the westerner came to Vietnam and fell in love with a local girl. I am from the mountains and I'm something of a country bumpkin. On the other hand, my husband is from Manchester and was more familiar with city life. Opposites attract…match made in heaven, right?</p>

            <p className="p-3">Wrong. my other half has a tendency to act like a primate and that drives me round the bend. On the flip side, I enjoy my afternoon naps and spend too much time on Facebook. This gives the hubby plenty to moan about too. When we aren't squabbling, we work hard in the field of education. I have been teaching Vietnamese online since 2016, but I prefer to wind my husband up in English. He has also worked as a teacher for many years.</p>

            <p className="p-3">With my invaluable support, we hope to develop an online resource to introduce you to the wonderful Vietnam. My husband is currently striving to learn the language. Meanwhile, I am currently striving to avoid teaching him directly. However, our mission is to build an impeccable and benevolent resource together. Using a playful blend of imagination, local insight, and over a decade of teaching experience, Viet Limbo aims to be the creme-de-la-creme.</p>

            <p className="p-3">My husband has tried to study Vietnamese numerous times. Unfortunately, every effort has failed so far. These failures have been for multiple reasons including lack of motivation or using inconsistent resources. However, his attempts have not been in vain. Thanks to his interest in coding, and with my help, a truly original resource is on the horizon.</p>
        </section>

        

        <h2 className="p-5 my-5 border-t-8 border-primary border-b-8">Study Vietnamese With Something Completely Different</h2>

        <section>
            <p className="p-3">Eventually, this website will include everything you need to feel right at home in Vietnam. Simple flashcard activities to help you master the basic concepts. Intriguing games and exercises to make practicing more fun. With Viet Limbo, you can study Vietnamese in a witty and light-hearted environment. Every aspect of the language will be covered and encouragement will be in full swing.</p>

            <p className="p-3">Viet Limbo also aims to provide an invaluable and unique insight into life in this beautiful country. With me as your benevolent guide, you are equipped with only the best. Moreover, my husband happens to be in the same position as you. As this site grows, so will his aptitude for the language and customs, as well as his love for me and my home country.</p>
        </section>

        

    </>)
}