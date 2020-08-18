import React from 'react';
import './App.css';
import Welcome from './components/welcome.js'
import GroupInfo from './components/groupinfo.js'
import PersonaInfo from './components/persona.js'
import PronounInfo from './components/pronoun.js'
import Scenario from './components/scenario.js'
import Subgoal from './components/subgoal.js'
import Action from './components/action.js'
import Screenshot from './components/screenshot.js'
import Menu from './components/menu.js'
import Array from './components/array.js'
import CsvExport from './components/csv.js'
import SubgoalTree from './components/tree.js'
//page: welcome, groupInput, personaInput, 
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      page: 'welcome',
      subgoalArray: [],
      showArray: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.addSubgoal = this.addSubgoal.bind(this);
    this.addAction = this.addAction.bind(this);
  }

  handleClick(newPage) {
    this.setState({
      page: newPage,
    })
  }

  addSubgoal(subgoal) {
    console.log("addSubgoal");
    console.log(subgoal);
    this.setState( prevState => ({
      subgoalArray: [...prevState.subgoalArray, subgoal]
  }));
}

  addAction(subgoalName, action) {
    let subgoal = this.state.subgoalArray.find(elem =>  elem.subgoalName===subgoalName); //subgoal is an object
    let actions = subgoal.actions; //create a copy
    let newActions = actions.slice();
    newActions.push(action);
    this.setState(prevState => ({  //update subgoalArray
      subgoalArray: prevState.subgoalArray.map(
        el => el.subgoalName === subgoalName? { ...el, actions: newActions }: el
      )
    
    }))
  }
 
  
  render() {
  let page=null;
  localStorage.setItem('subgoalArray', JSON.stringify(this.state.subgoalArray));
  switch (this.state.page) {
    case 'welcome':
      page = <Welcome page="groupInput"changeState={this.handleClick}/>
      break
    case 'groupInput':
      page = <GroupInfo page="personaInput" changeState = {this.handleClick}/>
      break
    case 'personaInput':
      page = <PersonaInfo changeState = {this.handleClick} />
      break
    case 'pronounInput':
      page = <PronounInfo changeState={this.handleClick}/>
      break
    case 'scenarioInput':
      page = <Scenario changeState={this.handleClick}/>
      break
    case 'subgoalInput':
      page = <Subgoal changeState={this.handleClick} addSubgoal={this.addSubgoal}/>
      break
    case 'actionInput':
      page = <Action array = {this.state.subgoalArray} changeState={this.handleClick} addAction = {this.addAction}/>
      break 
    case 'screenshotInput':
      page = <Screenshot changeState={this.handleClick}/>
      break
    case 'menu':
      page = <Menu array = {this.state.subgoalArray} changeState={this.handleClick}/>
      break
    case 'tree':
      page = <SubgoalTree array = {this.state.subgoalArray} changeState={this.handleClick}/>
      break
    case 'csv':
      page = <CsvExport array = {this.state.subgoalArray} changeState={this.handleClick}/>
      break
    default:
      page = <div>default!</div>
  }
  return (
    <div>
    {page}
    </div>)
  } 
}
export default App;
