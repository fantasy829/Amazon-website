import React from 'react'
import './Home.css'
import Product from './Product.js'
import Img1 from './Images/blender.jpg'
import Img2 from './Images/iphone.jpg'
import Img3 from './Images/playstation.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='no image found'/>
      </div>

      <div className='home__row'>
         <Product 
         id= '12321341'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={29.9}
         rating={2}
         image = {Img1}
         />
         
         
         <Product
         id= '49538094'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0}
         rating={4}
         image= {Img2}
         />
         
      </div>

       <div className='home__row'>
          <Product
          id= '49538094'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0}
         rating={4}
         image={Img3} 
          />
          <Product
          id= '49538094'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
           />
          <Product 
          id= '49538094'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0}
         rating={3}
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
          />
      </div>

       <div className='home__row'>
         <Product 
         id= '49538094'
         title='Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl'
         price={239.0}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
         />
      </div>

      
    </div>
  )
}

export default Home
