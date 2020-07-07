import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Antonio / {' '}
                <a className='hover:underline' href='https://linkedin.com/in/'>Linkedin</a> / {' '}
                <a className='hover:underline' href='https://gthub.com'>Github</a>
                <div className='mt-4'>
                    <img className='inline p-4' src='logo_semana_fsm.png'/>
                    <img className='inline p-4' src='logo_devpleno.png'/>
                </div>
            </div>
        </div>
    )
}