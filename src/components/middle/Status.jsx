import React from 'react'

const Status = () => {
    const checkBox = [
        'Active',
        'Draft',
        'Approved',
        'Recommendation',
        'Under Review'
    ]
  return (
    <div className='mt-2'>
      <p>Status</p>
     <div className='flex flex-col gap-2 mt-2'>
         {checkBox.map((check, index) => (
            <div key={index} className='flex gap-2 items-center'>
                <input type="checkbox" className='accent-primary w-5 h-5' name={check} />
                <label className='bg-white px-3 py-1 rounded-xl border-gray-200 border-1 b-red-900' htmlFor={check}>{check}</label>
            </div>
         ))}
     </div>
    </div>
  )
}

export default Status
