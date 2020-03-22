import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    
  }
 
    loadData(){
      let data =this.props.data.map(i=>{
        return <TableRow id={i.id} name={i.name} tel={i.tel} permission={i.permission} role={i.role} onUpdate={(item)=>this.props.onUpdate(item)} onDelete={(id)=>this.props.onDelete(id)}/>
      })
      return data;
    }
    render() {
     
        return (
            <div className="col-md-9">
            <table className="table table-striped table-inverse ">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền năng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.loadData()}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Table;