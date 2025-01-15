import React from 'react'
import { projects } from "../Data";
import { TiWorld } from "react-icons/ti";
import { FaGithub } from 'react-icons/fa';


const Project = () => {
  return (
    <section className='bg-slate-800 py-20 align-element' id="projects">

         <div className=' pb-5'>
                  <h2 className='text-4xl font-medium  text-red-900 text-center tracking-wider capitalize'>
                       Projects
                  </h2>
        </div>

              <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                  { projects.map((project) => {

                    const {id, url, img, text, github, title} = project;

                       return <article key={id} className='bg-slate-600 rounded-lg shadow-md block hover:shadow-xl duration-300'>
                          <img src={img} alt={title} 
                           className='w-full object-cover  rounded-t-lg h-64'/>

                            <div className='capitalize p-8'>
                                <h2 className='text-xl tracking-wide text-rose-950 font-medium'>{ title }</h2>
                                <p className='mt-4 text-slate-200 font-serif leading-loose'>{ text }</p>
                                 <div className='mt-4 flex gap-x-4 items-center'>
                                    <a href={ url }>
                                      <TiWorld className='h-12 w-8  text-slate-100 hover:text-gray-950 duration-300'/>
                                    </a>
                                    <a href={ github }>
                                        <FaGithub className='h-12 w-8 text-slate-100 hover:text-gray-950 duration-300'/>
                                    </a>
                                 </div>
                            </div>
                       </article>
                  })}
              </div>

    </section>
  )
}

export default Project