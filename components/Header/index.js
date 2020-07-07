import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header () {
    return (
        <>
            <div className={styles.wrapper}>
                <div className='container mx-auto '>
                    <Link href='/'>
                        <a><img className='mx-auto' src='/logo_palpitebox.png' alt='Palpite Box'/></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <div>
                    <Link href="/sobre">
                        <a className='px-2 hover:underline' >Sobre</a>
                    </Link>
                    <Link href="/contato">
                        <a className='px-2 hover:underline'>Contato</a>
                    </Link>
                    <Link href="/pesquisa">
                        <a className='px-2 hover:underline'>Pesquisa</a> 
                    </Link>
                </div>
            </div>
        </>
    )
}