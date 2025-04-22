import React from 'react'

const Experience = () => {
    return (
        <div data-aos="fade-up" id="Experience" className='px-14 py-16' >
            <p className='text-3xl  text-fuchsia-400 font-bold'>Experience</p>

            <div className='mt-10 data-aos="fade-up'>
                <div className='grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 '>
                    <div>
                        <p className='text-xl text-slate-300'>2023 to Present</p>
                    </div>

                    <div>
                        <p className='text-xl text-slate-300 '>Jobox Hire Private limited</p>

                        <p className='text-base text-slate-400 mt-2'>Full Stack Developer</p>
                        <div className='flex gap-3'>
                            <p className='text-base text-slate-400 mt-1'>Project 1 : Job Portal  </p>
                            <a
                                href="https://joboxhire.com/Portal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-slate-400 mt-1"
                            >
                                Link
                            </a>
                        </div>

                        <p className=" text-base text-slate-400 mt-1"> <li>Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).</li>
                            <li>Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.</li>
                            <li>Created server-side functionalities with Node.js and tRPC.</li>
                            <li>Managed PostgreSQL databases and used Prisma ORM.</li>
                            <li>Handled version control and PR management on GitHub.</li></p>


                    </div>



                </div>

            </div>


        </div>
    )
}

export default Experience
