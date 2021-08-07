import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
// import Company from '../src/components/Company'
import Company from './Company'

 
afterEach(cleanup);

it('should equal to 0', () => {
//   const state = {nit: '',
//                 nitState: true,
//                 states:[],
//                 identifications:[],
//                 identificationType: 1,
//                 identificationNumber: 1,
//                 companyName: '',
//                 firstname: '',
//                 secondName: '',
//                 firstLastName: '',
//                 secondLastName: '',
//                 email: 'd@hotmail.com',
//                 city: '',
//                 state: 1,
//                 street: '',
//                 zip: 1,
//                 phone: 1, 
//                 authPhone: false,
//                 authMail: true,                                                                                       
//                 };
  // render(<Company value={state}/>);
  // render(<Company/>);
  expect(screen.getByLabelText(/E-mail/i)).toHaveTextContent('d@hotmail.com')

});

// it('number', ()=>{
//     expect(2).toBeGreaterThan(1)
// });
