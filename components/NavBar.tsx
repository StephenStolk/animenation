import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <>
    <section className="w-full h-[4rem] flex flex-row justify-between">
        <div className="w-1/3 flex justify-start m-auto">
            <span className="text-red-500 text-xl font-bold">ANIMENATION</span>
        </div>
        <div className="w-1/3 flex flex-row m-auto justify-evenly">
            <a href="font-semibold"><span className="font-semibold">Home</span></a>
            <a href=""><span className="font-semibold">Anime</span></a>
        </div>
    </section>
    </>
  )
}

export default NavBar