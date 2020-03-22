import React, { Component } from 'react';
import Header from './header';
import SearchForm from './searchForm';
import Table from './table';
import AddUser from './addUser';
import data from "./data.json";
import Permission  from "./permission.json";
import {v4 as uuidv4} from "uuid";
class App extends Component {
  constructor(props) {
    super(props);
    data.forEach(i=>{
      let value = Permission.filter(id=>{
        return (id.id === i.id);
      })
      if(value){
        i.role = value[0].role;
      }
    })
    this.state={
      status: true,
      data: data,
      keyword: "",
    
    }
  }
  addUser(item){
    let id = uuidv4();
    let { name , tel , permission} = item;
    let value = Permission.filter(i=>{
      return (i.id === +(permission))
    })
    
    this.state.data.push({id: id,name:name,tel:tel,permission: +(permission)});
    this.state.data[ this.state.data.length -1].role = value[0].role
    this.setState({data:  this.state.data})
  }
  onUpdate(item){
    let { id , name , tel , permission} = item;
    this.state.data.forEach(i=>{
        if(i.id === id){
          i.name= name;
          i.tel = tel;
          i.permission = permission;
          let value = Permission.filter(i=>{
            return (i.id === +(permission))
          })
          i.role = value[0].role;
        }
    })
    this.setState({data: this.state.data})
  }
  onChange(keyword){
    this.setState({ keyword: keyword});
  }
  isChange(){
    this.setState({status: !this.state.status});
  }
  onDelete(id){
    let arr =this.state.data.filter(i=>{
      return i.id != id;
    })
    this.setState({data:arr})
  }
  render(){
    let arr = this.state.data.filter(i=>{
      return (i.name.indexOf(this.state.keyword) != -1);
    })
    return (
      <div>
        <Header/>
        <SearchForm onChange={(keyword)=>this.onChange(keyword)}/>
        <div className="container">
          <div className="row">
              <Table data={arr} onUpdate={(item)=>this.onUpdate(item)} onDelete={(id)=>this.onDelete(id)}/>
              <AddUser status={this.state.status} onchange={()=>{this.isChange()}} addUser ={(item)=>this.addUser(item)}/>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
