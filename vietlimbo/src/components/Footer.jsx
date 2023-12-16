export default function Footer() {
    return (<>
    
        <footer className="flex justify-between items-center bg-primary py-5">
            <div className="brand-container">
            <div className="brand flex items-center ms-3 cursor-pointer">
                <span className="logo bg-white text-secblack text-2xl font-bold font-serif px-1 rounded border-2 shadow-md">V</span>
                <h1 className="ps-1 text-secblack text-md hover:text-white underline underline-offset-4">ietLimbo</h1>
            </div>
                <p className="ms-3 text-center text-lg">Copyright 2024</p>
            </div>

            <div className="footer-menu w-4/5">
                <ul className="flex justify-between mx-5 text-lg">
                    <li className="hover:text-white"><a href="">About</a></li>
                    <li className="hover:text-white"><a href="">Privacy</a></li>
                    <li className="hover:text-white"><a href="">Contact</a></li>
                </ul>
            </div>
        </footer>

    </>)
}