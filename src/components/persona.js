
import React from 'react';

class PersonaInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         Persona: "Abi"
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    updateInput(event){
        this.setState({Persona : event.target.value})
    }

      handleSubmit(evt) {
        evt.preventDefault();
        const Persona = JSON.stringify(this.state.Persona);
        localStorage.setItem('persona', Persona);
        this.props.changeState('pronounInput');

    }
      render() {
        return (
            <div>
                <p>Now select a Persona</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Persona
                        <select value={this.state.Persona}
                        onChange={this.updateInput}>
                        <option value="Abi">Abi</option>
                        <option value="Tim">Tim</option>
                        <option value="Pat">Pat</option>
                        <option value="Custom">Custom</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
        </div> 
    )}
}
export default PersonaInfo;