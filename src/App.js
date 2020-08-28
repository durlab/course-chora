import React, { useEffect } from 'react';
import './App.css';
import Course from './Components/Course/Course';
import { useState } from 'react';
import users from './Components/fakeData/users';
import CourseRequest from './Components/CourseRequest/CourseRequest';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,  faMoneyBillWaveAlt} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [user, setUser] = useState(users);
  const [request, setRequest] = useState([]);
  console.log(user);

  const handleOnClick = (addedFriend) => {
    console.log(addedFriend);
    const updateReq = [...request, addedFriend];
    setRequest(updateReq);
  }
  const totalprice = request.reduce((total, friend) => total + friend.price, 0);
  const reqAreaStyle = { borderLeft: '1px solid lightgray', width: '30%', textAlign: 'center',marginTop:'20px' }
  const bodyStyle = { display: 'flex', justifyContent: 'space-between'}
  return (
    <div>

      <Navbar></Navbar>
      <div style={bodyStyle}>
        <div style={{ width: '65%' }}>
          {
            user.map(user => <Course user={user} handleOnClick={handleOnClick}></Course>)
          }
        </div>
        <div style={reqAreaStyle}>
          <h2>Course Enrolled </h2>
          <h3><FontAwesomeIcon icon={faShoppingCart}/> : {request.length}</h3>
          <p><b><FontAwesomeIcon icon={faMoneyBillWaveAlt}/> : {totalprice} $</b></p>
          <hr />
          {
            request.map(singleRequest => <CourseRequest request={singleRequest}></CourseRequest>)
          }
        </div>
      </div>
    </div>

  );
}

export default App;
