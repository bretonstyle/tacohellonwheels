import { Navbar } from "react-bootstrap";

//Generate a Navbar component with the following:
// A brand with the text "Taco Hell on Wheels"
// Members button
// Events button
// About button

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="#home">Taco Hell on Wheels</Navbar.Brand>
        <Navbar.Brand href="#home">Members</Navbar.Brand>
        <Navbar.Brand href="#home">Events</Navbar.Brand>
        <Navbar.Brand href="#home">About</Navbar.Brand>
        </Navbar>
    );
    }

export default NavBar;


    