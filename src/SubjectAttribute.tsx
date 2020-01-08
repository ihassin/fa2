import React, {Component} from 'react';

interface SubjectProperties {
    label: string;
    top: string;
    left: string;
    active: boolean;
    onSelect: (event: React.MouseEvent<HTMLElement>) => void;
}

export function SubjectAttribute({label, top, left, active, onSelect  } : SubjectProperties) {
    // const [ active, setActive ] = React.useState(false);

    return (
        <div id={label} className="SubjectAttribute">
            <label onClick={onSelect} style={{
                border: '1px',
                fontSize: '35px',
                borderColor: active ? 'red' : 'black',
                borderStyle: active ? 'solid' : 'dotted',
                opacity: active ? 1 : 0.5,
                position: 'absolute',
                top: top,
                left: left
            }}>{label}</label>
        </div>
    );
}
