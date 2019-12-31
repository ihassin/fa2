import React, {Component} from 'react';
import {Heading} from './heading';

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
                <Heading recipient={'Fragile to agile'}/>/>
            </div>
        );
    }
}

export default FragileToAgile;
