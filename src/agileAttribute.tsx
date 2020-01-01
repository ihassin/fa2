import React, {Component} from 'react';

interface AgileAttributeProperties {
    label: string;
    top: string;
    left: string;
}

interface AgileAttributeState {
    active: boolean;
}

export class AgileAttribute extends Component<AgileAttributeProperties, AgileAttributeState> {
    constructor(props: AgileAttributeProperties) {
        super(props);
        this.state = {
            active: false
        };
    }

    divStyle = {
        // margin: '20px',
        // width: 100,
        // height: 25,
    };

    handleClick = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({active: !this.state.active});
    };

    render() {
        return (
            <div id={this.props.label} style={this.divStyle} className="AgileAttribute" onClick={this.handleClick}>
                <label style={{
                    border: '1px',
                    fontSize: '35px',
                    borderColor: this.state.active ? 'red' : 'black',
                    borderStyle: this.state.active ? 'solid' : 'dotted',
                    opacity: this.state.active ? 1 : 0.5,
                    position: 'absolute',
                    top: this.props.top,
                    left: this.props.left
                }}>{this.props.label}</label>
            </div>
        );
    }
}
