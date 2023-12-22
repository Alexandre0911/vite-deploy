import React from "react"



function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">

            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Gonçalo Meira</h1>
            <p className="text-base md:text-xl mb-3 font-medium dark:text-white">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a back-end developer, I mostly code in Python but
                I have some practice with JavaScript aswell.
                I am currently trying to expand my horizons studying C++ & Rust
                for back-end developing.<br/>
                This website was built with the purpose of me trying out
                JavaScript, React and Tailwind (which apparently, went great).<br/>
                Right now, I am looking forward to try and solve everyday
                problems and to automate simple/boring tasks until
                I have enough experience to start developing games and, finally,
                achieve my dream of developing games.
            </p>

        </div>
    )
}



export default Intro