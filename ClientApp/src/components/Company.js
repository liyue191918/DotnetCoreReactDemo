import React, { Component } from 'react';

class Company extends React.Component {
  render() {
    const addressStyles = {
      display: 'inline-block',
      marginRight: '1.0rem'
    }
    return (
      <div>
        <form onSubmit={this.props.handleCompanySubmit}>
          <div className="form-group">

            <label>Identification Type</label>
            <select value={this.props.value.identificationType} name="identificationType" className="form-control" onChange={this.props.handleCompanyChange}>
              {this.props.value.identifications.map((item, i) => {
                return (
                  <option key={i} >{item}</option>
                )}
              )}
            </select>

            <label>Identification number</label>
            <input name="identificationNumber" type="text" pattern="[0-9]*" title="Allow only numbers." className="form-control" value={this.props.value.identificationNumber} onChange={this.props.handleCompanyChange} /> 
            
            {(this.props.value.identificationType === "NIT" || this.props.value.identificationType === "foreign") && <div>
            <label>Company name</label>
            <input name="companyName" type="text" className="form-control" value={this.props.value.companyName} onChange={this.props.handleCompanyChange} /></div>
            }
            {(this.props.value.identificationType !== "NIT" && this.props.value.identificationType !== "foreign") && <div>
              <div>
                <div style={addressStyles}>
                  <label>First name</label>
                  <input name="firstname" type="text" pattern="[^0-9]*" title="Numbers are not allowed." className="form-control" value={this.props.value.firstname} onChange={this.props.handleCompanyChange} /> 
                </div>
                <div style={addressStyles}>
                  <label>Second name</label>
                  <input name="secondName" type="text" pattern="[^0-9]*" title="Numbers are not allowed." className="form-control" value={this.props.value.secondName} onChange={this.props.handleCompanyChange} /> 
                </div>
              </div>
              <div>
                <div style={addressStyles}>
                  <label>First last name</label>
                  <input name="firstLastName" type="text" pattern="[^0-9]*" title="Numbers are not allowed." className="form-control" value={this.props.value.firstLastName} onChange={this.props.handleCompanyChange} /> 
                </div>
                <div style={addressStyles}>
                  <label>Second last name</label>
                  <input name="secondLastName" type="text" pattern="[^0-9]*" title="Numbers are not allowed." className="form-control" value={this.props.value.secondLastName} onChange={this.props.handleCompanyChange} /> 
                </div>
              </div>
            </div>
            }
            <label>E-mail</label>
            <input name="email" type="email" className="form-control" value={this.props.value.email} onChange={this.props.handleCompanyChange} /> 
          </div>
          <div className="form-group">
            <div style={addressStyles}>
              <label>State</label>
              <select value={this.props.value.state} name="state" className="form-control" onChange={this.props.handleCompanyChange}>
                {this.props.value.states.map((item, i) => {
                  return (
                    <option key={i} >{item}</option>
                  )}
                )}
              </select>  
            </div>

            <div style={addressStyles}>
              <label>City</label>
              <input name="city" type="text" className="form-control" value={this.props.value.city} onChange={this.props.handleCompanyChange} /> 
            </div>
            <div style={addressStyles}>
              <label>Street</label>
              <input name="street" type="text" className="form-control" value={this.props.value.street} onChange={this.props.handleCompanyChange} /> 
            </div>

            <div style={addressStyles}>
              <label>Zip</label>
              <input name="zip" type="text" className="form-control" value={this.props.value.zip} onChange={this.props.handleCompanyChange} /> 
            </div>
          </div>
        
          <div className="form-group">
            <label>Cell phone</label>
            <input name="phone" type="text" pattern="[0-9]*" title="Allow only numbers." className="form-control" value={this.props.value.phone} onChange={this.props.handleCompanyChange} /> 
            <div>
              <label>
                <input checked={this.props.value.authPhone} name="authPhone" type="checkbox" onChange={this.props.handleCompanyChange} /> I authorize the sending of messages to the cell phone provided.
              </label>
            </div>
            <div>
              <label>
                <input checked={this.props.value.authMail} name="authMail" type="checkbox" onChange={this.props.handleCompanyChange} /> I authorize messages to be sent to the above e-mail address.
              </label>
            </div>
          </div>

          <button type="submit" className="btn-default">register</button>
        </form>
      </div>
    );
  }
}

export default Company;