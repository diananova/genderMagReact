import React, { useState } from "react";

class GroupInfo extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
         groupName: ""
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    updateInput(event){
        this.setState({groupName : event.target.value})
    }

      handleSubmit(evt) {
        evt.preventDefault();
        const groupName = JSON.stringify(this.state.groupName);
        localStorage.setItem('group name', groupName);
        this.props.changeState('personaInput');

    }
    render() {
    return (   
        <div>
            <p>This tool will guide you through a software evaluation using the GenderMag method, otherwise known as a GenderMag session. Before you get started, please enter some information that will help identify this session.</p>
            <p>First, enter the name of your development team or project</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                    type="text"
                    onChange={this.updateInput}
                    />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
    );
    }
}
export default GroupInfo;
