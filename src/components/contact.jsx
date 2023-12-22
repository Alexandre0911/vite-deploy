import React from "react"
import Title from "./title"



function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">

            <div className="flex justify-center items-center">

                <section className="flex flex-col w-full md:w-7/12">

                    <Title>Contact Me</Title>

                    <p>
                        Phone - (+351) 933 160 801
                    </p>

                    <p>
                        E-Mail - alexdias2206@proton.me
                    </p>
                    
                    <p>
                        LinkedIn - <a className="text-decoration-line: underline" href="https://www.linkedin.com/in/goncalo-meira/">Gonçalo Meira</a>
                    </p>
                    
                    <p>
                        GitHub - <a className="text-decoration-line: underline" href="https://github.com/Alexandre0911">Alexandre0911</a>
                    </p>

                </section>

            </div>

        </div>
    )
}



export default Contact