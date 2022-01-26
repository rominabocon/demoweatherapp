import React from 'react';


export default function Card ({min, max, name, img, onClose, id}) {


    return (
      <div key={id} className="card">
        <div id="closeIcon" >
            <button onClick={onClose}  className="btn">X</button>
        </div>
        <div >
          <h3 >{name}</h3>
          <div className="info">
            <div >
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div >
              <p>Max</p>
              <p>{max}°</p>
            </div>

          </div>
          <div >
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt='weather' />
            </div>
        </div>
      </div>
    );
};
