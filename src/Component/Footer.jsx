import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div id='contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center ' >
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To reach out! </h3>
        </div>
        <ul className='text-sm md:text-xl flex gap-4'>
            <li> <MdOutlineAlternateEmail size={20}/> <a href="https://mail.google.com/mail/u/0/#sent">Email</a></li>
            <li><FaLinkedin size={20} /><a href="https://www.linkedin.com/in/saksham-sharma-94615825a/">LinkedIN</a> </li>
            <li><FaGithub size={20}/><a href="https://github.com/sakshamsharma65">Github</a> </li>
        </ul>
      
    </div>
  )
}

export default Footer
