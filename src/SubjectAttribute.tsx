import React, {Component} from 'react';

interface SubjectProperties {
    label: string;
    top: string;
    left: string;
    active: boolean;
    onSelect: (event: React.MouseEvent<HTMLElement>) => void;
}

export function SubjectAttribute({label, onSelect, active, top, left} : SubjectProperties) {
    // const [ active, setActive ] = React.useState(false);

    return (
        <div id={label} className="SubjectAttribute" onClick={onSelect}>
            <label style={{
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

export class OldSubjectAttribute extends Component<SubjectProperties> {

    render() {
        const divStyle = {
            margin: '20px',
            width: '100px',
            height: '25px',
        };

        return (
            <div id={this.props.label} className="SubjectAttribute" onClick={this.props.onSelect}>
                <label style={{
                    border: '1px',
                    fontSize: '35px',
                    borderColor: this.props.active ? 'red' : 'black',
                    borderStyle: this.props.active ? 'solid' : 'dotted',
                    opacity: this.props.active ? 1 : 0.5,
                    position: 'absolute',
                    top: this.props.top,
                    left: this.props.left
                }}>{this.props.label}</label>
            </div>
        );
    }
}
