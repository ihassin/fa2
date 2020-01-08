import React, {Component} from 'react';
import {Heading} from './heading';
import {SubjectAttribute} from './SubjectAttribute';

class FragileToAgile extends Component {
    handleSelect(event: React.MouseEvent<HTMLElement>) {
        // @ts-ignore
        alert(event.currentTarget.firstChild.textContent)
    };

    public render() {
        const subjects = [
            {
                label: 'MVP',
                left: '20px',
                top: '380px'
            },
            {
                label: 'agile',
                left: '1200px',
                top: '480px'
            }
        ];

        return (
            <div>
                <Heading title={'Fragile to agile'}/>
                {
                    subjects.map(({label, left, top}) => {
                        return <SubjectAttribute key={label} label={label} top={top} left={left}
                                                 onSelect={this.handleSelect} active={false}/>;
                    })
                }
            </div>
        );
    }
}

export default FragileToAgile;
