
export default function Header() {
    return (<>
    
        <header className="flex justify-between items-center bg-primary py-5">

            <h1 className="ms-2">VietLimbo</h1>

            <nav className="w-3/5">
                <ul className="flex justify-evenly">
                    <li>About</li>
                    <li>Services</li>
                    <li>Resrouces</li>
                    <li>Blog</li>
                </ul>
            </nav>
            
            <button className="bg-white px-3 py-2 border border-2 rounded-lg me-2">Contact Me!</button>

        </header>
    
    </>)
}