import React from 'react'
import image from '../background.jpg'

export default function Home() {
    return (
        <main>
            <img src = {image} alt = "Background cover" className = "absolute object-cover w-full h-full" />
            <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white motion-safe:animate-spin  front-bold cursive leading-none lg: leading-snug home-name "> Welcome to My Personal Page</h1>
            </section>
        </main>
    )
}
