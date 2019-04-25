import React from 'react';
import './Speaker.css'

const Speaker = ({speaker}) => {
    return <div>
        <table className="table table-striped">
            <tbody>
                <tr>
                    <td rowspan="2"><img src={speaker.imageUrl} data-image alt={speaker.name} /></td>
                </tr>
                <tr>
                    <td valign="top" align="left" width="100%">
                        
                        <div data-name>
                            <h3>{speaker.name}</h3>
                        </div>
                        <div data-title>
                            {speaker.talk.title}
                        </div>
                        <div>
                            <button className="btn btn-success" data-interest >I'm interested</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
};

export default Speaker;