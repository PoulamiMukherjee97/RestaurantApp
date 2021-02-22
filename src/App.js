
import React,{ useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

// function App() {
//   const [usernameState,changeUsernameState]=useState(
//     {
//       username:[{name:"Pom"},{name:"Som"}]
//     }
//   )
//   const changeStateHandler=(event)=>
//   {
//     changeUsernameState(
//       {
//         username:[{name:event.target.value},{name:"Swarns"}]
//       }
//     )
//   }
//   const [personState,changePersonState]=useState(
//     {
//       person:[
//         {name:"Pom",age:23},
//         {name:"Som",age:24}
//       ]
//     }
//   )
//   const switchHandler=()=>{
//     changePersonState(
//       {
//         person:[
//           {name:"Poulami",age:23},
//           {name:"Swarns",age:24}
//         ]

//       }
//     )
//   }
//   return (
//     <div className="App">
//       <button onClick={switchHandler}>Click Me!</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age}/>
//       <Person name={personState.person[1].name} age={personState.person[1].age}>Hobbies:TT</Person>
//       <UserOutput name={usernameState.username[0].name}></UserOutput>
//       <UserOutput name={usernameState.username[1].name}></UserOutput>
//       <UserInput change={changeStateHandler}></UserInput>
//     </div>
//   );
// }
class App extends React.Component{
  state={
    person:[
            {name:"Pom",age:23,id:1},
            {name:"Swar",age:24,id:2}
          ],
          showPersons:false
  }
  // switchHandler=()=>{
  //       this.setState(
  //         {
  //           person:[
  //             {name:"Poulami",age:23},
  //             {name:"Swarns",age:24}
  //           ],
            
    
  //         }
  //       )
  //     }
    toggleHandler=()=>{
      const show=!this.state.showPersons;
      this.setState({
        showPersons:show
      })
    }
    deleteHandler=(index)=>{
      const persons=[...this.state.person];
      persons.splice(index,1);
      this.setState(
        {
          person:persons
        }
      )
    }
    changeHandler=(event,id)=>{
      const personIndex=this.state.person.findIndex(p=>{
        return p.id===id})
      const person={...this.state.person[personIndex]};
      person.name=event.target.value;

      const persons=this.state.person;
      persons[personIndex]=person;
      this.setState({
        person:persons
      })

    }
    render(){
      let person=null;
      if(this.state.showPersons)
      {
        person=
        <div>
        {this.state.person.map((p,index)=>{
          return <Person name={p.name} age={p.age} key={p.id} click={this.deleteHandler.bind(this,index)} change={(event)=>this.changeHandler(event,p.id)}></Person>
        })}
      </div>
      }
      return (
        <div className="App">
        <button onClick={this.toggleHandler}>Click Me!</button>
          {person}
        </div>
            )
      
    }
}

export default App;
