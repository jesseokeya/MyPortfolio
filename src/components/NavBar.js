import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function NavBar() {
    return (
        <header className= "bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to= "/" 
                        exact 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 cursor-pointer text-red-100 hover:text-yellow-300 text-5xl font-bold cursive tracking-widest">
                            Amir Kalmoni
                    </NavLink>
                    <NavLink to= "/post" 
                        className="inflex-flex items-center py-6 px-3 my-4 cursor-pointer text-red-200 hover:text-yellow-300 cursive text-1xl"
                        activeClassName="text-red-100 bg-red-700">
                        Posts
                        
                    </NavLink>
                    <NavLink to= "/project"
                        className="inflex-flex items-center py-6 px-3 my-4 cursor-pointer text-red-200 hover:text-yellow-300 cursive text-3xl"
                        activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>
                    <NavLink to= "/about"
                        className="inflex-flex items-center py-6 px-3 my-4 cursor-pointer text-red-200 hover:text-yellow-300 cursive text-2xl"
                        activeClassName="text-red-100 bg-red-700">
                        About me
                    </NavLink>
                </nav>
                <div className = "inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/amirkalmoni" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://linkedin.com/in/amir-kalmoni-a24152a4" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>

                </div>
            </div>
        </header>
    )
}
