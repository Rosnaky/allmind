
const AppBar = () => {
    return (
        <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 w-full z-50">
            <h1 className="text-2xl font-bold">massdriver</h1>
            <nav>
                <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Docs</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default AppBar;