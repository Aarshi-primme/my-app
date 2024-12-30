import * as React from 'react';
class StateABC extends React.Component {
    state = {
        frist: true,
        second: "red",
       // third: 'Hello World',
    };
    render() {
        const{first, second} = this.state;
        return(
            <div>
        <button disabled={first}> click here </button>
        <p style={{color:second}}>value is this</p>
        </div>
        );

    }
}
export default StateABC;