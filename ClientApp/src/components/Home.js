import React, { Component } from 'react';
import Nit from './Nit';
import Company from './Company';

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {nit: '',
                  nitState: false,
                  states:[],
                  identifications:[],
                  identificationType: 1,
                  identificationNumber: 1,
                  companyName: '',
                  firstname: '',
                  secondName: '',
                  firstLastName: '',
                  secondLastName: '',
                  email: 'd@hotmail.com',
                  city: '',
                  state: 1,
                  street: '',
                  zip: 1,
                  phone: 1, 
                  authPhone: false,
                  authMail: true,                                                                                       
                  };

    this.handleNitChange = this.handleNitChange.bind(this);
    this.handleNitSubmit = this.handleNitSubmit.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleCompanySubmit = this.handleCompanySubmit.bind(this);
  }

  componentDidMount() {
    const urlStates = 'Master/States';
    fetch(urlStates)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({states:data});
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

    const urlIdentifications = 'Master/Identifications';
    fetch(urlIdentifications)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({identifications:data});
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleNitChange(event) {
    this.setState({nit: event.target.value});
  }

  async handleNitSubmit(event) {
    event.preventDefault();
    const url = 'Company/' + this.state.nit;
    const response = await fetch(url);
    const data = await response.json();
    if (data.result === "success"){
      this.setState(data.company);
      this.setState({nitState: true})
    }else{
      alert('ERROR: ' + data.message);
    }  
  }

  handleCompanyChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }

  async handleCompanySubmit(event) {
    event.preventDefault();
    const response = await fetch('Company',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    if (data.result === "success"){
      alert('SUCCESS');
      this.setState({nitState: false})
    }else{
      alert('ERROR: ' + data.message);
    }  
  }
    
  render () {
    return (
      <div>
        {this.state.nitState ? (
          <Company value={this.state} handleCompanyChange={this.handleCompanyChange} handleCompanySubmit={this.handleCompanySubmit} />          
        ) : (
          <Nit value={this.state.nit} handleNitChange={this.handleNitChange} handleNitSubmit={this.handleNitSubmit} />
        )}
      </div>
    );
  }
}
