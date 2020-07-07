import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout ( {children}) {
    return (
        <div>
            <Header/>
        <div className='container mx-auto'>
              {children}  
        </div>
            <Footer />
        </div>
    )
}