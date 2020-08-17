
import React from 'react';

class Welcome extends React.Component {
    onClick = () => {
        this.props.changeState(this.props.page);
    }
    render() {
    return (
        <div className="App">
        <h1 id="welcomeText">Welcome to the GenderMag Recorder's Assistant!</h1>
            <p>The GenderMag Method (short for “<u>Gender</u> Inclusiveness <u>Mag</u>nifier”) is a method for finding gender-inclusiveness issues in software features. Using GenderMag, software developers and/or user experience (UX) teams can evaluate their software from a gender-inclusiveness perspective. Fixing issues that may disproportionately affect one gender over another can lead to better usability for everyone.</p>
            <p>More information about GenderMag can be found on our <a href="http://gendermag.org/" target="_blank">website</a>. </p>
        <button onClick={this.onClick}>Start GenderMag</button>
        </div>
    )
    }
}

export default Welcome;
