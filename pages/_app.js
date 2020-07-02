import React from 'react'
import '../css/styles.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <h1>My App</h1>
            <Component {...pageProps} />
        </div>
    )
}