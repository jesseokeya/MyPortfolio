import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to= "/" exact>
                        Amir

                    </NavLink>
                    <NavLink to= "/post">
                        Posts
                        
                    </NavLink>
                    <NavLink to= "/project">
                        Projects
                    </NavLink>
                    <NavLink to= "/about">
                        About me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
