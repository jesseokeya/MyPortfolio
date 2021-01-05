import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import ghana from '../ghana.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
import "tailwindcss/tailwind.css"


const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}

export default function About() {

    const[author , setAuthor] = useState(null)
    useEffect(() => {
        sanityClient.fetch(`*[_type =="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data)=> setAuthor(data[0]))
            .catch(console.error)
    }, [])
    if(!author) return <div>Loading...</div>


    return (
        <main className ="relative ">
            <img src = {ghana}
                alt = "Ghana boats"
                className = "absolute w-full"
            />
            <div className ="p-10 lg:pt-48 container mx-auto relative">
                <section className ="bg-yellow-600 rounded-lg shadow-2xl lg:flex p-20">
                    <img src = {urlFor(author.authorImage).url()} 
                        className = "rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" 
                        alt = {author.name}/>
                    <div className = "text-lg flex flex-col justify-center">
                         <h1 className="cursive text-6xl text-red-600 mb-4">
                              Hey there! <br/> {" "}
                                <span className = "text-green-300">I'm {author.name}</span>
                            </h1>
                        <div className = " prose lg:prose-xl text-gray-700">
                            <BlockContent 
                            blocks = {author.bio} 
                            projectId = "xqlg381s" 
                            dataset = "production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
