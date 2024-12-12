import React from "react";
import Image from "next/image";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import Github from "../assets/Github.png"


function Contact() {
    return (
        <div className=" px-8 py-6 mt-4 animate-fade-in  bg-gray-800">
            <div>
            <p className="font-bold text-fuchsia-400 ml-5 text-4xl">Lets Connect</p>

            </div>
            {/* First column */}

            <div className=" flex mt-5 ml-5  p-24">
                <div className="">

                    <div className="mt-2 flex">
                        <Image
                            src={email}
                            alt="Monika"
                            className="rounded-full shadow-lg"
                            width={50}
                            height={50}
                        />
                        <div className="ml-8    ">
                        <p className="text-fuchsia-400">Email</p>
                        <p className="text-white">monikahj7@gmail.com</p>
                        </div>

                    </div>

                    <div className="mt-11 flex">
                        <Image
                            src={linkedin}
                            alt="Monika"
                            className="rounded-full shadow-lg"
                            width={50}
                            height={50}
                        />
                         <div className="ml-8">
                        <p className="text-fuchsia-400">Linked In</p>
                        <p className="text-white">monikahj7@gmail.com</p>
                        </div>

                    </div>

                    <div className="mt-11 flex">
                        <Image
                            src={Github}
                            alt="Monika"
                            className="rounded-full shadow-lg"
                            width={50}
                            height={50}
                        />
                         <div className="ml-8">
                        <p className="text-fuchsia-400">Git HUb</p>
                        <p className="text-white">monikahj7@gmail.com</p>
                        </div>

                    </div>

                    <div className=""></div>

                </div>

                {/* Second Column message */}
                <div className="">
                    <p className="">Email me</p>
                </div>
            </div>
      
      
      
      
        </div>
    );
}

export default Contact;
