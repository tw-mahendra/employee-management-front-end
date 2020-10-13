import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeServices.getEmployeeById(this.state.id).then( res =>{
            this.setState({employee: res.data});
            });
    }


    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3"></div>
                <h3 className="text-center">View Employee</h3>
                <div className= "card-body">
                    <div className="row">
                        <label>Employee First Name : </label>
                        <div> { this.state.employee.firstName}</div>
                    </div>

                    <div className="row">
                        <label>Employee Last Name : </label>
                        <div> { this.state.employee.lastName}</div>
                    </div>

                    <div className="row">
                        <label>Employee EmailId : </label>
                        <div> { this.state.employee.emailId}</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;