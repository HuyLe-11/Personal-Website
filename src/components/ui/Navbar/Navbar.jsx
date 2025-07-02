import { Button } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

import './Navbar.css'
import { href } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='navbar-container'>

                <div className="destop-view">

                    <ul className='page-menu'>
                        <li><a href="/">Overall</a></li>
                        <li><a href="/Project">Project</a></li>
                        <li>Education</li>
                        <li>Skills</li>
                        <ColorModeButton />
                    </ul>
                    <div>
                        <Button className="contact-btn">Contact</Button>
                    </div>
                </div>

                <div className="toggle-view">
                    <div>
                        <Button className="contact-btn">Contact</Button>
                        <ColorModeButton />
                    </div>
                    <div>
                        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                            ☰
                        </button>
                        <br></br>
                        <nav className={`menu ${isOpen ? "open" : ""}`}>
                            <a href="/">Overral</a>
                            <a href="/Project">Project</a>
                            <a href="#">Education</a>
                            <a href="#">Skills</a>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}



export default Navbar