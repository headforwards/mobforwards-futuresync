import React from 'react';

const Speaker = ({speaker}) => {
    return <div>
    <span data-name>
        {speaker.name}
        </span>
        &nbsp;-&nbsp;
        <span data-title>
            {speaker.talk.title}
        </span>
    </div>
};

export default Speaker;