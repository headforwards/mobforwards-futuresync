import React from 'react';
import './Speaker.css'

const Speaker = ({ speaker }) => {
    return <div className="row padme">
        <div class="col-3"><img src={speaker.imageUrl} class="img-fluid" data-image alt={speaker.name} />
        </div>
        <div class="col-9">

            <div data-name>
                <h3>{speaker.name}</h3>
            </div>
            <div data-title>
                <h4>{speaker.talk.title}</h4>
                <p data-description>{speaker.talk.description}</p>
            </div>
            <div>
                <button className="btn btn-success" data-interest >I'm interested</button>
            </div>
        </div>
        <hr />
    </div>

};

export default Speaker;