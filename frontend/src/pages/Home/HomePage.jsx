import React, {useEffect, useState} from 'react';
import AvailabilityForm from '../../components/AvailabilityForm';
import './Home.css';
// import "../Admin/Admin.css"; 

const Home = () => {
  
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [userSessions, setUserSessions] = useState([]);
  const [userAvailabilityList, setUserAvailabilityList] = useState([]);

  const register = async () => {
    try {
      const res = await fetch("/api/userAuth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        }),
    });
      const user = await res.json();
      console.log(user);
      console.log(user.user);  
      setUser(user.user);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUserAvailability = async () => {
    let userId = user._id;
    try {
      const res = await fetch(`/api/userAvailability/${user._id}`, {
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

  const getUserSessions = async () => {
    try {
      const res = await fetch(`/api/userSession/${user._id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!res.ok) {
        if (res.status === 404) {
          console.log("User is not available");
        } else {
          console.log(`User is not available ${res.statusText}`);
        }
      }
  
      const data = await res.json();
      console.log('User Session:', data);
      setUserSessions(data);

    } catch (error) {
      console.error('Error fetching user session:', error.message);
    }
  };

  const deleteAvailability = async (availableId) => {
    console.log(availableId);
    try {
        const res = await fetch(`/api/userAvailability/${availableId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        console.log("Error in deleting user availability", res.status);
        return;
      }
      const data = await res.json();
      console.log('User availability deleted successfully:', data);
      setUserAvailabilityList(userAvailabilityList.filter(availability => availability._id !== availableId));
    } catch (error) {
      console.error('Error deleting user availability:', error.message);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      getUserSessions();
    }
  }, [user]);
 
  useEffect(() => {
    if (user && user._id) {
      fetchUserAvailability();
    }
  }, [user]);

  return (
    <div className='HomePage'>
      <h2>Dynamic User Scheduler</h2>
      <div className='login-section'>
        <label htmlFor="email">Register or Login through Email</label>
        <input type="email" placeholder='Enter your email' className='email-input' onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        <button onClick={register}>Login</button>
      </div>
      {userSessions.length > 0 && 
      <div className='session-notification-section'>
      {userSessions.length > 0 && <h2>You have some scheduled sessions below</h2>}
      {userSessions.length > 0 && userSessions.map((session) => {
        return (
          <div key={session._id}>
            <h3><span className='notification-detail'>Session type : </span>{session.type}</h3>
            <h3><span className='notification-detail'>Start-date : </span>{session.startDate}</h3>
            <h3><span className='notification-detail'>End-Date : </span>{session.endDate}</h3>
          </div>
        )
        })}
      </div>}
      {user && <AvailabilityForm user={user} />} 
      <div className='userAvailability-details-section'>
      {userAvailabilityList.length > 0 && userAvailabilityList.map((available, index) => {
              return (
                <div key={available._id} className='availability-detail'>
                  <div>
                    <h4>Start-Date : {available.startDate}</h4>
                    <h4>End-Date : {available.endDate}</h4>
                    <h4>Duration : {available.duration}</h4>
                  </div>
                  <div className='bton-section'>
                    <button onClick={() => {deleteAvailability(available._id)}}>Delete</button>
                  </div>
                </div>
              )
        })}
        </div> 
    </div>
  )
}

export default Home
