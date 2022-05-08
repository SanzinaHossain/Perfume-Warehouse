import React from 'react'
import "./About.css"
import pic from "../../Images/promises/pic-1.jpg"
const About = () => {
  return (
   
      <div className='about'>
        <div className="pt-5">
             <h1>About</h1>
             <h2 className='text-primary'>Perfume Warehouse</h2>
             <p>
             Perfume.com has been America’s #1 place to buy discount perfumes online since 1995. We stock more than 13,000 women’s and men’s fragrances, all of them deliverable to your door within just days. Our broad selection of perfumes and colognes includes celebrity scents, gift sets, best sellers, hard-to-find fragrances, specialty samples, new releases, and even discontinued brands. By buying your next bottle of fragrance online with us, you can save up to 70% off of retail prices, 365 days a year.

            Our massive collection of fragrances hugely surpasses what you could find at any individual shop. We also offer reviews of all of the perfumes we stock, making it easy to find what you’re looking for. As a result, first-time shoppers and the most discerning connoisseurs can both find just the right scent at a surprisingly low price. 
             </p>
        </div>
        <div >
          <img className='img-fluid' src={pic} alt=""></img>
         
        </div>
      </div>
  )
}

export default About