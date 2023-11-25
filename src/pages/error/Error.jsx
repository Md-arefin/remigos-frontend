import React from 'react';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="relative">
        <div>
            <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/private_files/lf30_bfxeb0to.json"
                className="xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[450px]
             w-[350px]"
            >
                <Controls
                    visible={!true}
                    buttons={["play", "repeat", "frame", "debug"]}
                />
            </Player>
        </div>
        <Link to="/">
            <div className="text-center flex justify-center items-center">
                <button className="bg-red-500 text-white hover:bg-red-600 hover:text-slate-950 w-36 py-2 rounded-lg text-lg font-semibold">
                    Back to Home
                </button>
            </div>
        </Link>
    </div>
    );
};

export default ErrorPage;