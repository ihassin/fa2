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
                <Heading title={'Fragile to agile'}/>
                <AgileAttribute label={'MVP'} left={'20px'} top={'380px'}/>
                <AgileAttribute label={'agile'} left={'1200px'} top={'480px'}/>
            </div>
        );
    }
}

export default FragileToAgile;
