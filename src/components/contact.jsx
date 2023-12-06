import React from "react"
import Title from "./title"



function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/07349945-b446-4d4a-adef-374715cb9402" method="POST" className="flex flex-col w-full md:w-7/12">

                    <Title>Contact</Title>

                    <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <input type="text" name="email" placeholder="E-Mail" className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <textarea name="message" placeholder="Message" rows="10" className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <button type="button"
                    className="text-center inline-block px-4 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-tr from-cyan-600 to-pink-600 drop-shadow-md">Work With Me</button>

                </form>
            </div>

        </div>
    )
}



export default Contact