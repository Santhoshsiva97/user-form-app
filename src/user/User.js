import React from "react";
import { Link, NavLink, redirect, Route, Routes } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import DateComponent from "./DateComponent";
import "../index.css";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gender: "",
            dob: null,
            phone: null,
            errors: [],
        };
    }
    

    handleChange = (e, key) => {
        console.log('e::::', e);
        this.setState({ [key]: e.target.value });
    }

    handleValidate = (userItem) => {
        let error = [];
        const keys = Object.keys(userItem);
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        const phoneFormat = /^(?:\+91|0)?[6789]\d{9}$/;

        for(let i = 0; i < keys.length; i++) {
            if(keys[i] === "name" && !userItem["name"]) {
                error.push('Name is required.');
            } else if(keys[i] === "email" && !emailFormat.test(userItem["email"])) {
                error.push("Enter valid Email ID");
            } else if(keys[i] === "phone" && !phoneFormat.test(userItem["phone"])) {
                error.push("Enter valid Phone number");
            }
        }
        console.log(error)
        this.setState({ errors: error });
        console.log(this.state.errors)

    }

    handleSave = (event) => {
        event.preventDefault();
        const { name, gender, email, dob, phone, errors } = this.state;
        const { history, location } = this.props;
        let userObj = {
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            phone: this.state.phone,
        };
        this.handleValidate(userObj);
        location.state = {
            idx: 0,
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            dob: this.state.dob,
            phone: this.state.phone,
        };
        console.log('location:::', location.state);
        if(errors.length > 0) { 
            location.state = {
                idx: 0,
                name: this.state.name,
                email: this.state.email,
                gender: this.state.gender,
                dob: this.state.dob,
                phone: this.state.phone,
            };
            location.reload("/date");
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <>
            <div>

                <form className="form-container" onSubmit={(e) => this.handleSave(e)} >
                    {errors.length > 0 ? errors.map((item, index) => <div key={index}><p style={{ color: "red" }}>{item}</p></div>) : [] }
                    <div>
                        <h2 style={{ textAlign: "center", border: "1px thin" }}>User Form page</h2>
                    </div>
                    <div>
                        <label>Name:
                            <input name="name" type="text" placeholder="Enter name" value={this.state.name} onChange={(e) => this.handleChange(e, "name")} />
                        </label>
                    </div>
                    <div>
                        <label>Email:
                            <input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.handleChange(e, "email")} />
                        </label>
                    </div>
                    <div>
                        <label>Gender: 
                            <select value={this.state.gender} onChange={this.handleChange} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Date Of Birth: 
                            <input name="dob" type="date" placeholder="Enter D.O.B" value={this.state.dob} onChange={(e) => this.handleChange(e, "dob")} />
                        </label>
                    </div>
                    <div>
                        <label>Phone Number:
                            <input name="phone" type="number" placeholder="Enter phone no" value={this.state.phone} onChange={(e) => this.handleChange(e, "phone")} />
                        </label>
                    </div>
                    <div>
                        <Link to="/date">
                            <Button type="submit">Next</Button>
                        </Link>
                    </div>

                </form>
                
            </div>
            {/* <Routes><Route Component={<DateComponent item={this.state} />} /></Routes> */}
            </>
        )
    }

}

export default User;


// onClick={(e) => this.handleSave(e)