import React from 'react';

const About = () => {
  return (
    <section id="about" className='bg-slate-400 py-10'>
         <div className='align-element grid md:grid-cols-2 items-center gap-16'>
             <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png" alt="" 
                       className='px-8 w-full  h-64'/>
            <article>
                <div className='pb-5'>

                  <h2 className='text-4xl font-medium text-rose-800 text-center tracking-wider capitalize'>
                        Hello!Code With Me
                  </h2>
               </div>

                <p className='px-10 font-semibold text-slate-900'>I am a frontend developer skilled in HTML, CSS, JavaScript, and React.js. 
                I create clean, responsive, and user-friendly websites, focusing on delivering great user experiences. With attention to detail and a passion for coding,
                 I build dynamic interfaces and work to ensure seamless performance across all devices.</p>

            </article>
         </div>
    </section>
  )
}

export default About;