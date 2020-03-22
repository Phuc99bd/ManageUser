import React, { Component } from 'react';
import Swal from 'sweetalert2'

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state={
            isEdit: false,
            id: this.props.id,
            name: this.props.name,
            tel: this.props.tel,
            permission: this.props.permission
        }
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onChangeStatus(){
        this.setState({isEdit: (this.state.isEdit) ? false :true})
    }
    onCancel(){
        this.setState({isEdit: false })
    }
    onUpdate(){
        this.props.onUpdate(this.state);
        this.setState({isEdit: false })
    }
    onDelete(){
        Swal.fire({
            title: 'Bạn có chắc chắn không?',
            text: 'You will not be able to recover this imaginary element!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              this.props.onDelete(this.state.id);
              Swal.fire(
                'Deleted!',
                'Your element has been deleted.',
                'success'
              )
           }
        })
    }
    isRenderByIsEdit(){
        return (!this.state.isEdit) ? ( <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>{this.props.role}</td>
            <td>
              <button className="btn btn-warning"  onClick={()=>this.onChangeStatus()} ><i className="fa fa-edit"/>Sửa</button>
              <button className="btn btn-danger" onClick={()=>this.onDelete()}><i className="fa fa-edit" />Xóa</button>
            </td>
          </tr>)
        : ( <tr>
            <td>{this.props.id}</td>
            <td><input type="text" name="name" className="form-control" defaultValue={this.props.name} onChange={(e)=>this.onChange(e)}/></td>
            <td><input type="text" name="tel" className="form-control" defaultValue={this.props.tel} onChange={(e)=>this.onChange(e)}/></td>
            <td>
              <select defaultValue={this.props.permission} className="form-control" onChange={(e)=>this.onChange(e)} name="permission" id="">
                <option value="1">Admin</option>
                <option value="2">User</option>
                <option value="3">Moderator</option>
              </select>
          </td>
            <td>
              <button className="btn btn-warning" onClick={()=> this.onUpdate()}><i className="fa fa-edit" />Update</button>
              <button className="btn btn-danger" onClick={()=> this.onCancel()}><i className="fa fa-edit" />Cancel</button>
            </td>
          </tr>);
    }
    render() {
        return (
            <React.Fragment>
                {this.isRenderByIsEdit()}
            </React.Fragment>
        );
    }
}

export default TableRow;