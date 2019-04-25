import React from 'react';
import './Speaker.css'

const Speaker = ({speaker}) => {
    return <div>
        <table>
            <tbody>
                <tr>
                    <td rowspan="2"><img src={speaker.imageUrl} data-image alt={speaker.name} /></td>
                </tr>
                <tr>
                    <td valign="top">
                        
                        <div data-name>
                            <h3>{speaker.name}</h3>
                        </div>
                        <div data-title>
                            {speaker.talk.title}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
};

export default Speaker;