import { Component } from "react";
import From from "./form";
import Form2 from "./form2";
import Form3 from "./form3";
class Container extends Component {
     constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            firstName: false,
            firstNameVal:"",
            LastName: false,
            date: false,
            email: false,
            address: false,
            error: false
        };
    }

     // validation of first name
    userFirstName = (e) => {
        let firstNameVal = e.target;
        let fname = firstNameVal.parentElement;
        if (/^[A-Za-z\s]+$/.test(firstNameVal.value) && (firstNameVal.value.length >3 && firstNameVal.value.length < 14) ) {
            firstNameVal.style.borderColor = "green";
            fname.style.color = "";
            this.setState({
                firstName: true
            })
        }
        else {
            firstNameVal.style.borderColor = "red";
            fname.style.color = "red";
            this.setState({
                firstName: false
            })
        }
    }

    // validation of last name
    userLastName = (e) => {
        let lastNameVal =  e.target;
        let lname = lastNameVal.parentElement;
        if (/^[A-Za-z\s]+$/.test(lastNameVal.value) && (lastNameVal.value.length >3 && lastNameVal.value.length < 14) ) {
                lastNameVal.style.borderColor = "green";
                lname.style.color = "";
                this.setState({
                    LastName: true
                 })
        }
        else {
            lastNameVal.style.borderColor = "red";
            lname.style.color = "red";
            this.setState({
                LastName: false
            })
        }
    }

    // validation of date
    checkDate = (e) => {
        let dateVal =  e.target;
        let dateText = dateVal.parentElement;
        let today = new Date()
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (dateVal.value > date) {
            dateVal.style.borderColor = "red";
            dateText.style.color = 'red'
            this.setState({
               date:false 
            })
        }
        else {
              dateVal.style.borderColor = "green";
              dateText.style.color = "";
              this.setState({
                date:true 
              })
        }  
    }

    // Email validation
    userEmail = (e) => {
        let emailVal =  e.target;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailVal.value.match(filter)) {
            emailVal.style.borderColor = "red";
            this.setState({
             email:false
         })
        }
        else {
            emailVal.style.borderColor = "green";
            this.setState({
                email:true
            })
        }
    }

    // Address Validation
    userAddress = (e) => {
        let addressVal = e.target;
        if (addressVal.value.length > 7) {
            addressVal.style.borderColor = "green"
            this.setState({
                address:true
            })
        }
        else {
            addressVal.style.borderColor = "red"
            this.setState({
                address:false
            })
        }
    }
    
    increment = () => {
        if (this.state.counter < 3) {
            // && (this.state.LastName === true) && (this.state.date === true) && (this.state.email === true) && (this.state.address === true)
            if ((this.state.firstName === true && (this.state.LastName === true) && (this.state.date === true) && (this.state.email === true) && (this.state.address === true)) ) { 
                this.setState({
                    counter: this.state.counter + 1,
                });
            }
            else {
                this.setState({
                    error: true,
                });
            }
          
        }
    }
    decrement = () => {
        if (this.state.counter > 1) {
             this.setState({
               counter: this.state.counter - 1,
             });
        }
    }
    render() {
    return (
      <div className="bodyContent">
        <div className="childContent">
          <div className="imgDiv">
            <div className="bgImg" style={{backgroundImage:`url(${require(`../images/form${this.state.counter}.jpg`)})`}}></div>
          </div>
          <div className="dataContent">
            <div className="formdata">
                <div className="status">
                    <div className="steps"><p className={(this.state.counter === 1 ? 'one' : 'change')}  style={ this.state.counter> 1 ? { backgroundImage: `url(${require(`../images/1828643.png`)})`} : {backgroundImage: ""} }>{this.state.counter>1?' ':'1'}</p><label>Sign Up</label></div>
                    <div className="steps"><p className={(this.state.counter === 2 ? 'one' : 'change')}   style={ this.state.counter> 2 ? { backgroundImage: `url(${require(`../images/1828643.png`)})`} : {backgroundImage: ""} }>{this.state.counter>2?' ':'2'}</p><label>Message</label></div>
                    <div className="steps"><p className={(this.state.counter === 3 ? 'one' : 'change')}   style={ this.state.counter> 3 ? { backgroundImage: `url(${require(`../images/1828643.png`)})`} : {backgroundImage: ""} }>{this.state.counter>3?' ':'3'}</p><label>Checkbox</label></div>
                </div>
                        <hr></hr>
                        <div className="step">Step{this.state.counter}/3</div>
                        <div className="pageName">{this.state.counter === 1  ? 'Sign UP' : null}{ this.state.counter === 2 ?  'Message' : null}{ this.state.counter === 3? 'CheckBox' : null}</div>
                        
                        {this.state.counter === 1 ? <From firstHandler={this.userFirstName} lastHandler={this.userLastName} dateHandler={this.checkDate} emailHandler={this.userEmail} addressHandler={ this.userAddress} /> : null}
                        {this.state.counter === 2  ? <Form2 />:null }
                        {this.state.counter === 3 ? <Form3 /> : null}
                        
                        {
                            this.state.error == true ? <span className="error">*Please make sure that you should filled all inputs</span>: ""
                        }
                        <hr></hr>
                        <div className="buttonDiv">
                            <button type="button" className="backbtn" onClick={this.decrement} style={this.state.counter > 1 ? { visibility: 'visible' } : { visibility: "hidden" }} >Back</button>
                            <button type={this.state.counter === 3 ? "submit" : "button"} className="nextStep" onClick={this.increment}>{this.state.counter === 3 ? "submit" : "Next Step"}</button>
                       </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;