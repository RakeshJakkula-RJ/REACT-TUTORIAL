import React from 'react'
import { FaGithubSquare,  FaLinkedin,  FaTwitterSquare, } from 'react-icons/fa'
import image from "../Images/RJ.png";



const Hero = () => {
  return (
     <section className='bg-slate-400 py-24'>
         <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
            <article>
                 <h1 className='text-7xl font-bold text-emerald-950 px-14 tracking-wider'>I'm Rakesh Jakkula</h1>
                 <p className='mt-4 text-3xl font-semibold text-rose-900 px-14 capitalize tracking-wider'>
                   Front-End Developer
                  </p>
                  <p className='mt-2 text-stone-800 font-extrabold text-lg px-14 capitalize tracking-wide'>
                   Building Modern, User-Friendly Interfaces.
                  </p> 

                  <div className='flex gap-x-4 mt-4 px-14' >
                <a href="https://github.com/RakeshJakkula-RJ">
                    <FaGithubSquare className='h-12 w-8 text-slate-600  hover:text-gray-950 duration-300' />
                </a>
                <a href="https://www.linkedin.com/in/rakesh-jakkula-434775309/">
                    <FaLinkedin className='h-12 w-8 text-slate-600 hover:text-gray-950 duration-300' />
                </a>
                <a href="https://x.com/RakeshJak139">
                    <FaTwitterSquare className='h-12 w-8 text-slate-600 hover:text-gray-950 duration-300' />
                </a>
             </div>

            </article>

             <article>
                   <img src={image} alt="" className=' lg:h-96 px-14 md:h-60'/>
                   
             </article> 
         </div>
     </section>
  )
}

export default Hero