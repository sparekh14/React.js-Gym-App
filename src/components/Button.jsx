import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 py-8 mx-auto rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid cursor-pointer blueShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}