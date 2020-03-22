import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    
  }
  onChange(event){
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <div className="btn-group">
                <input
                  type="text"
                  name
                  id
                  className="form-control"
                  placeholder="Nhập từ khóa tìm kiếm...."
                  aria-describedby="helpId" onChange={(event)=> this.onChange(event)}
                />
                <div className="btn btn-info">Tìm</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
