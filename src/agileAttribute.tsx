import React, {Component} from 'react';

interface AttributeProperties {
    label: string;
}

export class AgileAttribute extends Component<AttributeProperties> {
    render() {
        return (
            <div className="AgileAttribute">
                <label htmlFor='label'>{this.props.label}</label>
            </div>
        );
    }
}
