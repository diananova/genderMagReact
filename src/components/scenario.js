import React from 'react';

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         scenario: ""
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    updateInput(event){
        this.setState({scenario : event.target.value})
    }

      handleSubmit(evt) {
        evt.preventDefault();
        const scenario = JSON.stringify(this.state.scenario);
        localStorage.setItem('scenario', scenario);
        this.props.changeState('subgoalInput');

    }
    render() {
        let persona = localStorage.getItem('persona');
        if (persona!=null)
            persona = persona.slice(1, persona.length-1);

        return(
        <div>
            <p>Take a moment to describe the scenario {persona} will be performing</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Scenario
                    <input
                    type="text"
                    onChange={this.updateInput}
                    />
                </label>
                <input type="submit" value="Submit" />
                </form>
        </div>
        )
    }

}
export default Scenario;