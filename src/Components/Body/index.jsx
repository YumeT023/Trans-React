import React from "react";
import {Section} from "./Section";
import './index.css';
import pic1 from '../../assets/gPics/google_1.png';

export const Body = () => {
    return (
        <div className="Body">
            <Section title="Communiquez, créez et collaborez en équipe"
                     description={`Une solution flexible et innovante qui dope la productivité
                                    des organisations et de leurs collaborateurs.`}
                     img={pic1}
            />
        </div>
    )
}