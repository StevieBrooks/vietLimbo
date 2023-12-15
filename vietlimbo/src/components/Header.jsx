
export default function Header() {
    return (<>
    
        <header className="flex justify-between items-center fixed w-full z-100000 bg-primary py-5">

            <div className="brand flex items-center ms-3 cursor-pointer">
                <span className="bg-white text-secblack text-3xl font-bold font-serif px-1 rounded border-2 shadow-md">V</span>
                <h1 className="ps-1 text-secblack underline underline-offset-4">ietLimbo</h1>
            </div>


            <nav className="w-3/5">
                <ul className="flex justify-evenly text-lg font-bold tracking-wider">
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Resrouces</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </nav>
            
            <button className="bg-white px-3 py-2 border border-2 rounded-lg me-2 text-lg font-bold tracking-wider">Contact Me!</button>

        </header>
    
    </>)
}