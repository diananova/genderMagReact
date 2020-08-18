import React from 'react';

class SubgoalTree extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (evt.target.name=='menu')
            this.props.changeState('menu');
      }

    render() {
        const tree = this.props.array.map(item => (
           <div>
               <ul>
               <li>Subgoal: {item.subgoalName}</li>
               {item.actions.map(action => (
                <ul>
                    <li>Action: {action.actionName}</li>
                </ul>))}
                </ul>
           </div>
       ))

        return(
            <div>
               {tree}
               <br/>
               <button name='menu' onClick={this.handleSubmit}>Go back to Menu</button>
            </div>
        )
    }
}
export default SubgoalTree;