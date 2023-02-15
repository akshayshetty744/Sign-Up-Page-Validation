import { Component } from "react";

class Form extends Component{
         constructor(props) {
            super(props);
             this.state = {
                firstName:false
            };
    }

    render() {
        return (
          <div className="form">
                <div className="userName">
                    <div  className="textName"><div className="firstName">First Name</div><input className="nameType" type="text"  onKeyUp={(e)=>this.props.firstHandler(e)} placeholder="Enter your First name"/></div>  
                    <div className="textName"><div  className="lastName">Last Name</div><input className="nameType lname" type="text" onKeyUp={(e)=>this.props.lastHandler(e)} placeholder="Enter your Last name"/></div> 
                </div>
                <div className="userEmail">
                    <div  className="textName"><div className='dateText'>Date Of Birth</div><input className="nameType date" type="date" onChange={(e)=>this.props.dateHandler(e)}  /></div>  
                    <div className="textName"><div>Email Address</div><input className="nameType email" type="email" onKeyUp={(e)=>this.props.emailHandler(e)} placeholder="Your mail id"/></div> 
                </div>
                <div className="userAddress">
                    <div className="address"><div>Address</div><input className="nameAddress" type="text" onKeyUp={(e) =>this.props.addressHandler(e)} /></div> 
                </div>
            </div>
            
        );
     }
}
export default Form;