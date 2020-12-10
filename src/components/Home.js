import React from 'react'
import image from '../background.jpg'

export default function Home() {
    return (
        <main>
            <img src = {image} alt = "Background Image" className = "absolute object-cover w-full h-full" />
            <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-600 front-bold cursive leading-none lg: leading-snug home-name "> Welcome to My Personal Page</h1>
            </section>
        </main>
    )
}
