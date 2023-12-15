
export default function Header() {
    return (<>
    
        <header className="flex justify-between items-center fixed w-full z-50 bg-primary py-5">

            <div className="brand flex items-center ms-3 cursor-pointer">
                <span className="logo bg-white text-secblack text-3xl font-bold font-serif px-1 rounded border-2 shadow-md">V</span>
                <h1 className="ps-1 text-secblack hover:text-white underline underline-offset-4">ietLimbo</h1>
            </div>


            <nav className="w-3/5">
                <ul className="flex justify-evenly text-lg text-secblack font-bold tracking-wider">
                    <li className="hover:text-white"><a href="">About</a></li>
                    <li className="hover:text-white"><a href="">Services</a></li>
                    <li className="hover:text-white"><a href="">Resrouces</a></li>
                    {/* <li className="hover:text-white"><a href="">Blog</a></li> */}
                </ul>
            </nav>
            
            <button className="bg-white hover:bg-secondary px-3 py-2 border border-2 border-secblack rounded-lg me-2 text-lg text-secblack hover:text-white font-bold tracking-wider">Contact Me!</button>

        </header>
    
    </>)
}