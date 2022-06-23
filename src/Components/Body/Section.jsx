import React from 'react';

export const Section = ({title, description, img}) => {
    return (
        <div className="Section">

            <div className="content">

                <div className="content-title">
                    <h1>{title}</h1>
                </div>

                <div className="content-description">
                    <h2>{description}</h2>
                </div>

            </div>

            <div className="img">
                <img src={img} alt=""/>
            </div>

        </div>
    )
}