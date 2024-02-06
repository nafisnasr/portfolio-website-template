import React from 'react'
import { BiExit } from "react-icons/bi";
import "./ImgBox.css"

export default function ImgBox({ src, id }) {
    return (
        <div className="col-lg-3 col-md-5 col-6">
            <div className='img-box'>
                <img src={src} alt={id} />
                <span className='text'>Web Design <BiExit className='icon' /></span>
            </div>
        </div>
    )
}
