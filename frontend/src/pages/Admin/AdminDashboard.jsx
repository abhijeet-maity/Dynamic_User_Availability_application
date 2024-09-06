import React, {useState, useEffect} from 'react';
import "./Admin.css"

const AdminDashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [displayUserAvailability, setDisplayUserAvailability] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [userAvailabilityList, setUserAvailabilityList] = useState([]);

  const getAllUsers = async () => {
    
    try {
      const res = await fetch("/api/userAuth/",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        console.log("Error in getting all users", res.statusText);
        //throw new Error(`Error: ${response.statusText}`);
      }
      const data = await res.json();
      console.log('All Users:', data);
      setAllUsers(data);
    } catch (error) {
      console.log("Error occurred in getting userList", error.message);
    }
  }

  const displayUserAvailabilityofUser = async (user) => {
    setDisplayUserAvailability(true);
    setSelectedUser(user);
    console.log(user._id);
  }

  useEffect(() =>{
    getAllUsers();
  },[]);

  const fetchUserAvailability = async (user) => {
    let userId = user._id;
    try {
      const res = await fetch(`/api/userAvailability/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        if (res.status === 404) {
          console.log("User is not available");
        } else {
          console.log(`User is not available ${res.statusText}`);
        }
      }
  
      const data = await res.json();
      console.log('User Availability:', data);
      setUserAvailabilityList(data);
    } catch (error) {
      console.error('Error fetching user availability:', error.message);
    }
  };

  useEffect(() => {
    if (selectedUser && selectedUser._id) {
      fetchUserAvailability(selectedUser);
    }
  }, [selectedUser]);
  
  const addSession = async (user,startDate,endDate) => {
    try {
      const res = await fetch('/api/userSession/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user : user, 
          startDate : startDate, 
          endDate : endDate,
          type : 'one-on-one',
        }),  // Send the session data as JSON
      });
  
      if (!res.ok) {
        console.log("Error in session scheduling", res.status);
      }
  
      const data = await res.json();
      console.log('Session added successfully:', data);
    } catch (error) {
      console.error('Error adding session:', error.message);
    }
  };

  return (
    <div className='admin-panel'>
      <h2>Admin Dashboard</h2>
      <div className='allusers-section'>
        {allUsers.map((user, index) => {
          return (
            <div key={user._id} className='each-user'>
              <h3>{user.email}</h3>
              <button onClick={() => {displayUserAvailabilityofUser(user)}}>check availability</button>
            </div>
          )
        })}
      </div>

      {displayUserAvailability && (
        <div className='session-section'>
          <div className='session-heading'>
            <h3>{selectedUser.email} availability list</h3>
            <button onClick={() => {setDisplayUserAvailability(false)}}>X</button>
          </div>
          <div className='session-details-section'>
            {userAvailabilityList.length > 0 && userAvailabilityList.map((user, index) => {
              return (
                <div key={user._id} className='session-detail'>
                  <div>
                    <h4>Start-Date : {user.startDate}</h4>
                    <h4>End-Date : {user.endDate}</h4>
                    <h4>Duration : {user.duration}</h4>
                  </div>
                  <button onClick={() => {
                      addSession(user.user, user.startDate, user.endDate);
                  }}>Schedule session</button>
                </div>
              )
            })}
            {userAvailabilityList.length === 0 && <h2>User is not available</h2>}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
