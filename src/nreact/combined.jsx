import { render } from "react-dom";
import Mybtn from "./mybtn";
import Mylist from "./mylist";


import * as React from "react";
class Mycomponent extends React.Component {
state = {
    abc : "my button",
    xyz : true,
    items: ["a","b","c","d","e","f","g","h","i","j"],
};
render(){
    const {abc,xyz} = this.state;
    return (
        <div>
            <Mybtn abc={abc} xyz={xyz}/>
            <Mylist items={items} />
        </div>
    );
}
}
export default Mycomponent;