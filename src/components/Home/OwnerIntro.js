import React from 'react'

function OwnerIntro() {
  return (
    <div className='mx-10 my-5 flex justify-between items-center'>
        <div className='wrap w-3/4 justify-end'>
            <h6 className='text-4xl mb-5'>Meet The Founder</h6>
            <p>Adil Qadri, the visionary Founder & CEO of "Adil Qadri," has carved a niche for himself in the premium perfume industry, building a brand synonymous with luxury and sophistication. His collection is celebrated for its exceptional quality and high-end scents, each meticulously crafted to deliver a memorable olfactory experience. With a deep commitment to excellence, Adil has transformed traditional perfumery by integrating modern sensibilities, ensuring that his fragrances resonate with today’s discerning consumers.Understanding the evolving preferences of his loyal clientele, Adil Qadri has introduced a distinctive range of attars designed to seamlessly complement contemporary lifestyles. Each fragrance captures the essence of elegance, offering a variety of scents suitable for both formal and casual occasions. By marrying tradition with innovation, Adil Qadri has redefined the art of luxury perfumery, creating an experience that elevates everyday moments into something truly extraordinary.</p>
        </div>
        <div className='rounded-full w-1/4 items-center justify-center flex'>
            <img
                src='https://img.magnific.com/free-photo/serious-confident-business-coach-posing-with-arms-folded_74855-3084.jpg?semt=ais_hybrid'
                className='h-64 w-64 rounded-full'
            />
        </div>
    </div>
  )
}

export default OwnerIntro