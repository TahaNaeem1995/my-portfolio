import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Image from 'next/image'

const data = [
    {
        id:0,
        title: "Static Interactive Resume",
        desc:"A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically",
        img:"/project 03.png",
        tags:["NEXTJS","NODE","CSS","TYPESCRIPT"]
    },

    {
        id:1,
        title: "Todo list",
        desc:"A React & Typesript based app for managing and orginazing your tasks efficiently.",
        img:"/project 01.png",
        tags:["NEXTJS","NODE","CSS","TYPESCRIPT"]
    },

    {
        id:2,
        title: "Simple calculator",
        desc:"A  basic HTML CSS and Typesript calculator for essential arithmetic operations.",
        img:"/project 02.png",
        tags:["NEXTJS","NODE","CSS","TYPESCRIPT"]
    },
]

export const Project = () => {
  return (
    <div>Project</div>
  )
}


