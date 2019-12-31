import React, {Component} from 'react';

interface AgileAttributeProperties {
    label: string;
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

    render() {
        return (
            <div className="AgileAttribute">
                <label htmlFor='label'>{this.props.label}</label>
            </div>
        );
    }
}
