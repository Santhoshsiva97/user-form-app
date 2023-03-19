import React from "react";

class DisplayUserResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <form className="form-container">
                    <div>
                        <label>Start Date: {this.props.item.startDate}</label>
                        <label>End Date: {this.props.item.endDate}</label>
                        <label>Total Sundays: {this.props.item.sundays}</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default DisplayUserResult;