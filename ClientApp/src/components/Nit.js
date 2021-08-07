import React, { Component } from 'react';

class Nit extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleNitSubmit}>
          <div className="form-group">
            <label>Please input company's NIT.</label>
            <input type="text" className="form-control" value={this.props.value} onChange={this.props.handleNitChange} /> 
          </div>
          <button type="submit" className="btn-default">register</button>
        </form>
      </div>
    );
  }
}

export default Nit;