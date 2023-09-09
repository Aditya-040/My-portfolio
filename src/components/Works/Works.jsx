import React from 'react'
import './Works.css'
import {Link} from 'react-scroll'
import portfolio1 from '../../assets/RIGVEDA.png'
import portfolio2 from '../../assets/news.png'
import portfolio3 from '../../assets/Rp.png'

const Works = () => {
  return (
    <section id="portfolio">

            <h1 className="mywork">My Work</h1>
            <span className="workdesc">I take pride in paying attention to the smallest details 
            and I love creating beautiful and functional websites.
            I am exited to bring my skills and experience to help buisnesses achieve their goals and create a strong online presence."</span>
            
            <div className="workImg">
             
            <Link className="worklink"><img src={portfolio1} alt="1" className="workimgs" /></Link>
            <Link className="worklink"><img src={portfolio2} alt="2" className="workimgs" /></Link>
            <Link className="worklink"><img src={portfolio3} alt="3" className="workimgs" /></Link>
              </div>
              <button  className='workbtn'><a href="https://github.com/Aditya-040" >See more</a></button>

    </section>
  )
}

export default Works