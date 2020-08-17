
import React from 'react';

class Screenshot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event){
        const value = event.target.value;
        this.setState({
           ...this.state,
           [event.target.name]:value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.changeState('menu');
      }
    render() {
        return (
            <div>
            <p>Before discussing this action, click here to take a screenshot. Highlight the action with the maroon box, then click to capture. Continue to record information in the pop-up (this slider will temporarily close)</p>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit" />
                </form>
            </div>
            )}
}

export default Screenshot;