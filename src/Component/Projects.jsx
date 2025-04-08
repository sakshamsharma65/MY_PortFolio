import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id="project" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className='py-7 px-8 flex flex-wrap gap-5 justify-center   text-white'>
<Projectcard title="Task Manager " main="Python ,django,html,css" src="https://media.istockphoto.com/id/2208274701/photo/project-management-and-task-scheduling-timeline-and-project-tracking-businessman-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=uURA_ck53vhM_nawVjuDDmHtkrmAaoDIHXFdPqVFifM="/>
<Projectcard title="ATM Simulator " main="Java jdbc content" src="https://media.istockphoto.com/id/2176058253/photo/female-hand-pressing-confirm-button-on-atm-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=PXkNZS5MjVo-A60YpyG2JKRUMu1lZrwVfyniWg3R5Lg=" />
<Projectcard title="Real Estate Page" main="React ,Html ,css ,Javascript" src="https://media.istockphoto.com/id/1992465937/photo/aerial-view-of-colorful-sunset-in-gurgaon-haryana-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jir9CrwofuGwgzgrKKYHPXr1YLvQ_YrE4XHsTO98dDk="/>
        </div>
      
    </div>
  )
}

export default Projects
