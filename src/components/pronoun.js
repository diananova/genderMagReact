import React from 'react';

class PronounInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         subjectPronoun: "",
         possessiveAdj: ""
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
        const subject= JSON.stringify(this.state.subjectPronoun);
        const possessive = JSON.stringify(this.state.possessiveAdj);
        localStorage.setItem('subjectPronoun', subject);
        localStorage.setItem('possessiveAdj',possessive);
        this.props.changeState('scenarioInput');
    }

    render() {
        return (   
            <div>
                <p>Please enter pronouns for your persona</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Subject Pronoun:
                        <input
                        name = "subjectPronoun"
                        type="text"
                        value = {this.state.subjectPronoun}
                        onChange={this.updateInput}
                        />
                    </label>
                    <br/>
                    <label>
                        Possessive Adjective:
                        <input
                        name = "possessiveAdj"
                        type="text"
                        value = {this.state.possessiveAdj}
                        onChange={this.updateInput}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
        );
        }
    
}

export default PronounInfo;