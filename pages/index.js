import React from "react"
import Link from "next/link"

export default function Index () {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
                <Link href="/contato">
                    <a>Contato</a>
                </Link>
                <Link href="/pesquisa">
                    <a>Pesquisa</a> 
                </Link>
            </div>
        </div>
    )
}