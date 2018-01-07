import React from 'react'

export default ({actress, movie, year, pictures, index, close}) => (
    <div className='popup'>
        <div className='popup_inner'>
            <h2>{actress}</h2>
            <img src={pictures[index]} height="200px" width="200px" alt=""/>
            <div className="actressText">
                {`Acted in: `}
                <p>{`"${movie}"`}</p>
                {`in the year ${year}`}
            </div>
            <button className="btn btn-primary" onClick={close}>OK</button>
        </div>
    </div>
)






