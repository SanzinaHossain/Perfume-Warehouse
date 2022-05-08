import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Ambassador from '../Ambassador/Ambassador'
import Banner from '../Banner/Banner'
import Brand from '../Brand/Brand'
import Items from '../Items/Items'

const Home = () => {
  return (
      <div>
          <Banner></Banner>
          <Items></Items>
          <Ambassador></Ambassador>
          <Footer></Footer>
      </div>
  )
}

export default Home