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


/*
const [page, setPage] = useState("GROUP");
function Group(props) {
    const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`);
        const groupName = JSON.stringify(name);
        localStorage.setItem('group name', groupName);
        setPage("PERSONA");
    }

    return (   
    <div>
        <p>This tool will guide you through a software evaluation using the GenderMag method, otherwise known as a GenderMag session. Before you get started, please enter some information that will help identify this session.</p>
        <p>First, enter the name of your development team or project</p>
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
);
}

function Persona(props) {
    console.log("inside else");
    return (
        <div>
            <p>Now select a Persona</p>
        
    </div> 
    )   
}

export function Setup() {
    if (page=="GROUP") {
        console.log("page=GROUP");
        return <Group/>;
    }
    else {
        console.log("page=Persona");
        return <Persona/>;
    }
}

  

    /*
    const group = true;
    const [name, setName] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`);
        const groupName = JSON.stringify(name);
        localStorage.setItem('group name', groupName);
        group = false;
        return;
    }
    if (group==true) {
            console.log("inside if groupState==true ");
            return (
            <div>
                <p>This tool will guide you through a software evaluation using the GenderMag method, otherwise known as a GenderMag session. Before you get started, please enter some information that will help identify this session.</p>
                <p>First, enter the name of your development team or project</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
        );}
    else {
        console.log("inside else");
        return (
            <div>
                <p>Now select a Persona</p>
            <form onSubmit={handleSubmit}>
            <label>
                Frirst Name:
                <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div> 
        )
    }*/


