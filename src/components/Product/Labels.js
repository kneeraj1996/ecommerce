import React from 'react'

const labels = [
  'Non-Alcoholic',
  'Unisex',
  'Roll-On',
  'Extra Long Lasting',
  'Arabic And French Blend',
  'Sweet',
]

const Labels = () => {
  return (
    <div className='my-4 flex flex-wrap gap-2'>
      {labels.map((label) => (
        <span
          key={label}
          className=' bg-black px-3 py-1 text-sm text-white rounded-md'
        >
          {label}
        </span>
      ))}
    </div>
  )
}

export default Labels