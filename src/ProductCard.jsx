import React from 'react'
import shoe from './black-yzy.png'
import shoe2 from './white-yzy.png'


const ProductCard = () => {
  return (
    <div className='container_product_card'>
       <div className='row'>
        <div className='col'>
        <div className='product_card' >
            <div className='top_card'>
                {/* img, price */}
                <img src={shoe} alt=""className="product_image"/>
                <span className='product_price'>$ 360</span>
            </div>
            <div className='bottom_card'>
                {/* name, desc, cta */}
                <div className='product_name'>
                    <h6>Adidas</h6>
                    <h4>Yeezy Boost 350</h4>
                </div>
                <div className='product_description'>
                    <p>Yo, let me tell you about Yeezys, they're like a symphony of style and innovation, crafted with the precision of a genius. They ain't just shoes, they're a statement, a testament to my vision and creativity. When you step into a pair, you're stepping into the future, where fashion meets art in the most extraordinary way. Yeezys ain't just footwear, they're a movement, a revolution in design that's changing the game.</p>
                </div>
                <button type="button" className='cta_add_to_cart'>Add To Cart</button>
            </div>
        </div>
    </div>
    </div>
    <div className='row'>
        <div className='col'>
        <div className='product_card' >
            <div className='top_card'>
                {/* img, price */}
                <img src={shoe2} alt="" className="product_image"/>
                <span className='product_price'>$ 360</span>
            </div>
            <div className='bottom_card'>
                {/* name, desc, cta */}
                <div className='product_name'>
                    <h6>Adidas</h6>
                    <h4>Yeezy Boost 350</h4>
                </div>
                <div className='product_description'>
                    <p>Yo, let me tell you about Yeezys, they're like a symphony of style and innovation, crafted with the precision of a genius. They ain't just shoes, they're a statement, a testament to my vision and creativity. When you step into a pair, you're stepping into the future, where fashion meets art in the most extraordinary way. Yeezys ain't just footwear, they're a movement, a revolution in design that's changing the game.</p>
                </div>
                <div>
                <button type="button" onClick={() => setScore(score + 1)}>className='cta_add_to_cart'>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default ProductCard