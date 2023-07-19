import React from 'react';
import "./Home.css";
import Product from './Product.js';


export default function Home() {
    
    
  return (
      <div className='home'>
          <div className='home-container'>
              <div className='home-imageCover'>
                <img className='home-image'
                    src="https://static.toiimg.com/thumb/msid-86475272,width-1280,height-720,resizemode-4/.jpg"
                        alt = 'hompage banner '>
                </img>
              </div>
              <div className='home-row'>
                  <Product
                      id = {100}
                      title='The Subtle Art of Not Giving a F*** : A Counterintuitive Approach to Living a Good Life'
                      price={299.99}
                      image='https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg'
                      rating={4}
                  
                  />
                  <Product
                      id = {101}
                      title='Keliss Boys Digital LED Watch'
                      price ={2200}
                      image='https://m.media-amazon.com/images/I/71IbtYa4G1S._AC_UY1000_.jpg'
                      rating={2}
                  />
              </div>
              <div className='home-row'>
                  <Product
                      id = {103}
                      title = 'Yeezy 350 v2'
                      price ={35500}
                      image = 'https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Zebra/Images/adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1635342807&h=320&q=75'
                      rating = {5}
                      
                  />
                  <Product
                      id = {104}
                      title = 'Nike Air Jordan 1 Pandas Low'
                      price={38000}
                      image = 'https://m.media-amazon.com/images/I/71a95kdnJ3L._AC_UY1000_.jpg'
                      rating = {5}
                  />
                  <Product
                      id = {105}
                      title = 'Nike Air Jordan 4 White Cement'
                      price ={400000}
                      image = 'https://images-cdn.ubuy.co.in/63a0a8078767bd4bed0f1ff6-air-jordan-4-retro-308497-106.jpg'
                      rating = {4}
                  />
              </div>
              <div className='home-row'>
                  
                  <Product
                      id = {106}
                      title = 'U know what is'
                      price ={120000}
                      image = 'https://images-cdn.ubuy.co.in/633a90aeaa0ecf729446a67b-5-1-ch-surround-sound-bar-with-dolby.jpg'
                      rating = { 5}
                  />
              </div>
          </div>
      </div>
  )
}
