import React, {Component} from 'react';

// const FragileToAgile: React.FC = () => {
//     return (
//         <div>
//             <h1>{AppName()}</h1>
//         </div>
//     );
// };

class FragileToAgile extends Component {
    private appName = 'Fragile to agile';

    public render() {
        return (
            <div>
                <h1>{this.appName}</h1>
            </div>
        );
    }
}

export default FragileToAgile;
