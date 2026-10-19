import React from 'react'

const FAQ = (props) => {
  const { reviews } = props
  return (
     <div className="mt-5">
      <h1 className="text-sm font-bold">Faqs</h1>
      <div className="text-sm text-black">
        <h1 className="font-bold mr-3">Is Black long-lasting?</h1>
        <h1>Yes. Black EDT is designed to stay with you for hours.</h1>
      </div>
      <div className="text-sm text-black ">
        <h1 className="font-bold mr-3">Is this suitable for gifting?</h1>
        <h1>Absolutely. The 100ml EDT format makes it a premium and stylish gift choice.</h1>
      </div>
      <div className="text-sm text-black ">
        <h1 className="font-bold mr-3">Can this be worn daily?</h1>
        <h1>Yes. While ideal for evenings, many prefer it as their everyday signature scent.</h1>
      </div>
       <div className="text-sm text-black ">
        <h1 className="font-bold mr-3">What does Black smell like?</h1>
        <h1>Fresh lavender, refined neroli, and warm sensual musk.</h1>
      </div>
    </div>
  )
}

export default FAQ