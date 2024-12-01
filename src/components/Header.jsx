import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="flex gap-6 justify-center py-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addCoffee">Add Coffee</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="signin">SignIn</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;