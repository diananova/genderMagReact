import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (evt.target.name=='action') {
            this.props.changeState('actionInput');
        }
        if (evt.target.name=='subgoal')
            this.props.changeState('subgoalInput');
        if (evt.target.name=='exit')
            this.props.changeState('otherInput');
      }
    render() {
        return (
            <div>
                <p>Done! Would you like to continue or save and exit?</p>
                <button name='subgoal' onClick={this.handleSubmit}>Add subgoal</button>
                <button name='action' onClick={this.handleSubmit}>Add action</button>
                <button name='exit' onClick={this.handleSubmit}>Save and exit</button>



            </div>
        )
    }

}

export default Menu;
