import React from "react";
import { useGlobalContext } from "../Context";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";


const Sidebar = () => {

    const { isSidebarOpen, closeSidebar} = useGlobalContext();

     return (
          <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}> 

             <div className="image">
                  <img src="" alt="Coding Addict" />

                  <button onClick={closeSidebar} className="close-btn">
                      <FaTimes />
                  </button>

             </div>

                  <ul>

                     {links.map((link) => {

                           const {id, url, text, icon} = link;

                           return (
                                  
                               <li key={id}>
                                    <a href={url}>
                                         {icon}
                                         {text}
                                    </a>
                               </li>
                                 
                            )
                     })}

                  </ul>

                     <ul>
                         {social.map((link) => {
                             const { id, url, icon } = link;

                             return (

                                 <li key={id}> 
                                    <a href={url}>
                                        {icon}
                                    </a>
                                 </li>
                             )
                         })}
                     </ul>
             
              </aside>

         );

    };

     export default Sidebar;