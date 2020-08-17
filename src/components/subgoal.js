
import React from 'react';

class Subgoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         subgoalName: "",
         yesno: "",
         why: "",
        // facets:
         motivation: false,
         computerSelfEfficacy: false,
         attitudeTowardsRisk: false,
         informationProcessingStyle: false,
         learningByProcess: false
        }
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
        const arr = ['attitudeTowardsRisk', 'computerSelfEfficacy', 'informationProcessingStyle', 'learningByProcess', 'motivation'];
        const result = arr.filter(elem => this.state[elem]=='on');
        const mySubgoal = {
            subgoalName: this.state.subgoalName,
            yesno: this.state.yesno,
            why: this.state.why,
            facets: result,
            actions: []
          }
        this.props.addSubgoal(mySubgoal);
        this.props.changeState('actionInput');

    }
    render() {
        let persona = localStorage.getItem('persona');
        if (persona!=null)
            persona = persona.slice(1, persona.length-1);
        return(
            <div>
            <p>Now that you've completed the initial setup, enter a subgoal for {persona} to perform</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Subgoal
                    <input
                    name = "subgoalName"
                    type="text"
                    onChange={this.updateInput}
                    />
                </label>
                <br/>
                <div id="radio">
                <p>Will Abi have formed this subgoal as a step to a overall goal?
</p>
                    <label>
                            <input
                            name = "yesno"
                            type="radio"
                            value = 'Yes'
                            checked = {this.state.yesno==='Yes'}
                            onChange={this.updateInput}
                            />Yes
                        </label>

                        <label>
                            <input
                            name = "yesno"
                            type="radio"
                            value = 'No'
                            checked = {this.state.yesno==='No'}
                            onChange={this.updateInput}
                            />No
                        </label>

                        <label>
                            <input
                            name = "yesno"
                            type="radio"
                            value = 'Maybe'
                            checked = {this.state.yesno==='Maybe'}
                            onChange={this.updateInput}
                            />Maybe
                        </label>
                        </div>
                <br/>
                <div id="textbox">
                    <label>
                        Why, why nor or why maybe?
                        <input
                        name = "why"
                        type="textarea"
                        onChange={this.updateInput}
                        />
                    </label>
                </div>

                <div id="checkbox">
                <label>Motivation
                    <input
                        name="motivation"
                        type="checkbox"
                        checked={this.state.motivation}
                        onChange={this.updateInput} />
                    </label>
                    <br/>
                    <label>Computer Self Efficacy
                    <input
                        name="computerSelfEfficacy"
                        type="checkbox"
                        checked={this.state.computerSelfEfficacy}
                        onChange={this.updateInput} />
                    </label>
                    <br/>
                    <label>Attitude Towards Risk
                    <input
                        name="attitudeTowardsRisk"
                        type="checkbox"
                        checked={this.state.attitudeTowardsRisk}
                        onChange={this.updateInput} />
                    </label>
                    <br/>
                    <label>Information Processing Style
                    <input
                        name="informationProcessingStyle"
                        type="checkbox"
                        checked={this.state.informationProcessingStyle}
                        onChange={this.updateInput} />
                    </label>
                    <br/>
                    <label>Learning by process
                    <input
                        name="learningByProcess"
                        type="checkbox"
                        checked={this.state.learningByProcess}
                        onChange={this.updateInput} />
                    </label>
                    <br/>
                  
                </div>
                <input type="submit" value="Submit" />
                </form>
               

            </div>)
    }
}

export default Subgoal;