export function NavBar() {
    
    return (
        <div className="navigation px-10 flex items-center bg-red-500">
            <ul className="options text-white text-xl px-4">
                <li className="">Joshua Watson</li>
                <button className="copy">Email</button>
                <li><a href="url">Linkedin</a></li>
                <li><a>GitHub</a></li>
            </ul>
        </div>
    )
}