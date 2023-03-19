import React from "react";
import { Button } from "semantic-ui-react";
import DisplayUserResult from './DisplayUserResult';
import "../index.css";

class DateComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('props:::', this.props.location)
        this.state = {
            startDate: null,
            endDate: null,
            sundays: 0,
            showForm: false,
        };
    }

    calculateSundays = (startDate, endDate) => {
        const sundays = [];
        let currentDate = new Date(startDate);
        let endDateFormat = new Date(endDate);
        console.log('currentDate:::', currentDate);
        console.log('endDate:::', endDate);
        console.log('compare:::', currentDate <= endDate);

        while (currentDate <= endDateFormat) {
          if (currentDate.getDay() === 0) {
            sundays.push(new Date(currentDate));
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        console.log(sundays)
        return sundays;
    }

    handleChange = (e, key) => {
        console.log('e::::', e);
        this.setState({ [key]: e.target.value });
    }
      

    handleSave = (event) => {
        event.preventDefault();
        console.log('this.state:::', this.state);
        const totalSundays = this.calculateSundays(this.state.startDate, this.state.endDate);
        console.log('totalSundays:::', totalSundays.length);
        this.setState({
            showForm: true,
            sundays: totalSundays.length,
        })
        // alert(`Total sundays from ${this.state.startDate} to end date ${this.state.endDate} is ${totalSundays.length}.`)
        // return (
        //     <Form>
        //         <div>Hello world</div>
        //     </Form>
        // );
    }

    render() {
        
        return(
            <div>
                <form className="form-container" onSubmit={this.handleSave}>
                    <div>
                        <label>Start Date:
                            <input type="date" name="startDate" placeholder="Enter Start date" value={this.state.startDate} onChange={(e) => this.handleChange(e, "startDate")} />
                        </label>
                    </div>
                    <div>
                        <label>End Date:
                            <input type="date" name="endDate" placeholder="Enter End date" value={this.state.endDate} onChange={(e) => this.handleChange(e, "endDate")} />
                        </label>
                    </div>
                    <div>
                        <Button primary type="submit">Submit</Button>
                    </div>
                </form>
                {this.state.showForm && <DisplayUserResult item={this.state} />}
            </div>
        )
    }
}

export default (DateComponent);