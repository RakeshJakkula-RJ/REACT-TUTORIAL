import React from 'react';
import { skills } from "../Data";

const Skills = () => {
  return (
   
    <section className='py-20 align-element bg-slate-400' id="skills"   >

        <div className=' pb-5'>
                  <h2 className='text-4xl font-medium text-rose-800 text-center tracking-wider capitalize'>
                       Skills & Expertise
                  </h2>
               </div>

         <div className='py-16 grid md:grid-cols-3 px-24 lg:grid-cols-3 gap-14'>
            { skills.map(skill => {

                const {id, title, icon, text} = skill;

               return  <article key={id}>
                           <span>{ icon }</span>
                           <h4 className='mt-6 text-rose-800 font-bold '>{ title }</h4>
                           <p className='mt-2 font-medium text-slate-950'>{ text }</p>
                       </article>
             })}
         </div>
     
    </section>
    
    
  )
}

export default Skills;