import { Component } from "react";
class Submit extends Component { 
    constructor(props) {
        super(props);
         this.state = {
            Submit:false
        };
        console.log("hello")
    }
    render() {
        return (
            <>
              <h1> Thank You</h1> 
            </>
        )
    }
}
export default Submit;