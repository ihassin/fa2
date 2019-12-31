import React, {Component} from 'react';
import {Heading} from './heading';
import {AgileAttribute} from './agileAttribute';

// const FragileToAgile: React.FC = () => {
//     return (
//         <div>
//             <h1>{AppName()}</h1>
//         </div>
//     );
// };

class FragileToAgile extends Component {
    public render() {
        return (
            <div>
                <Heading recipient={'Fragile to agile'}/>
                <AgileAttribute label={'MVP'} color={'black'}/>
            </div>
        );
    }
}

export default FragileToAgile;
