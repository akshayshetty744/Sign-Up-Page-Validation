import { Component } from "react";
import img1 from '../images/Launch.png'
import img2 from '../images/Contact (1).png'
class Form3 extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            check: false
        })
    }
    Change1 = (e) => {
        if (e.target.checked) {
            this.setState({
                check:true
            })
           
        }
        else {
            this.setState({
                check:false
            })
        }
    }
    Change2 = (e) => {
        if (!e.target.checked) {
            this.setState({
                check:true
            })
        }
        else {
            this.setState({
                check:false
            })
        }
    }
    
    render() {
        return (
            <div className="form">
                <div className=""> <div className="imgcheck">
                    <input type="radio" id="maleImg" name="choice1" value="The number one choice" onChange={this.Change1}/> <label className="choice1" for="maleImg"  ><img className={this.state.check==true?"g":"male"} src={img1}></img></label>
                    <input type="radio" id="femaleImg"  name="choice1"  value="The number one choice" onChange={this.Change2}/> <label className="choice1" for="femaleImg"  ><img className={this.state.check==true?"male":"g"} src={img2}></img></label>
                </div></div>
                <div className="choice">
                    <div className="thiredcheck"> <input type="radio" id="male"  name="choice"  value="The number one choice"/> <label className="choice1" for="male" >I want to add this option.</label></div>
                    <div> <input type="radio" id="female" name="choice" value="The number two choice"/> <label for="female">Let me click on this checkbox and choose some cool stuf</label></div>
                </div>
          </div>
        );
     }
}
export default Form3;