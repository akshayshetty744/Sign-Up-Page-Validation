import { Component } from "react";

class Form2 extends Component{
    constructor(props){
        super(props);
        this.state = {
           text:false
       };
    }
    textHandle = (e) => {
        let text  = e.target
        if (text.value.length < 1) {
            console.log(e.target.value)
            this.setState({
                text: false
            })
        }
        else {
            this.setState({
                text: true
            })
        }
    }
    render() {
        return (
          <div className="form">
                <div className="areamessage">Message</div>
                      <textarea className={this.state.text==true?"textarea":"textareafalse"} onChange={this.textHandle}/>
                <div className="choice">
                    <input type="radio" id="male"  name="choice"  value="The number one choice"/> <label className="choice1" for="male" >The number one choice</label>
                    <input type="radio" id="female" name="choice" value="The number two choice"/> <label for="female">The number two choice</label>
                </div>
          </div>
        );
     }
}
export default Form2;