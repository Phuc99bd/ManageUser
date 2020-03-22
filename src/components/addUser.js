import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class addUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      permission: 1,
      name: "",
      tel: "",
      permission: 1
    }
  }
  onchange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  onSubmit(event){
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({name: "",tel:"",permission: 1})
  }
  loadAddUser() {
    if (this.props.status) {
      return (
        <button className="btn btn-block btn-outline-info" onClick={()=> this.props.onchange()}>Thêm mới</button>
      );
    }
    return (
      <div>
        <button className="btn btn-block btn-outline-secondary" onClick={()=> this.props.onchange()}>
          Đóng lại
        </button>   <form>
        <div className="card border-primary mt-2">
          <div className="card-header">Thêm mới</div>
       
          <div className="card-body text-primary">
          
              <h4 className="card-title">Tên User</h4>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  id
                  aria-describedby="helpId"
                  placeholder="Tên user..." onChange={(event)=>this.onchange(event)}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text"
                  className="form-control"
                  name="tel" value={this.state.tel}
                  id
                  aria-describedby="helpId"
                  placeholder="Số điện thoại.." onChange={(event)=>this.onchange(event)}
                />
              </div>
              <div className="form-group">
                <div className="form-group">
                  <select value={this.state.permission} className="custom-select" name="permission" id  onChange={(event)=>this.onchange(event)}>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    <option value="3">Moderator</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="reset"
                  className="btn btn-primary form-control"
                  name="phone"
                  id
                  aria-describedby="helpId"
                  value="Thêm mới"
                  onClick={(event)=>this.onSubmit(event)}
                />
              </div>
           
            {/*  */}
          </div>
        </div> </form>
        </div>
    );
  }
  render() {
    return <div className="col-md-3">{this.loadAddUser()}</div>;
  }
}

export default addUser;
