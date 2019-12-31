import React, {Component} from 'react';

interface AgileAttributeProperties {
    label: string;
    color: 'red';
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

    handleClick = () => {
        this.setState({active: !this.state.active});
    };

    renderX() {
        return (
            <div className="AgileAttribute" onClick={this.handleClick}>
                <label htmlFor='label'>{this.props.label}</label>
            </div>
        );
    }

    render() {
        const color_ = this.props.color;
        return (
            <div onClick={this.handleClick}
                 style={{
                     color: color_,
                     border: '1px solid',
                     // backgroundColor: color_,
                     // borderRadius: "50%",
                     borderColor: this.state.active ? 'red' : 'black',
                     width: 100,
                     height: 75
                 }}>
            </div>
        );
    }

}
