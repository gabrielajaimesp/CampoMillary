import React from 'react'
import style from './footer.module.css'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
return (
        <section className={style.footer}>
        <p>Campo Millary, 2023. <br />
            Freire, La Araucanía.</p>
            <div className={style.icons}>
            <i className={style.fa}> <FaFacebookSquare/> </i>
            <i className={style.fa}> <FaInstagram/> </i>
        </div>
    </section>     
)
}

