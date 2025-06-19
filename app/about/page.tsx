import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <div className='text-4xl'>About</div>
            <Link href="/home" className="text-blue-500 hover:underline">Go Home</Link>
        </>
    )
}

export default About