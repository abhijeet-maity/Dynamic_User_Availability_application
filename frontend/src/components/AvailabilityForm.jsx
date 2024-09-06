import React, {useState} from 'react';
import "../App.css";

const AvailabilityForm = ({user}) => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(30);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/userAvailability/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user : user._id,
            startDate: startDate,
            endDate: endDate,
            duration: duration,
        }),
      });

      const userAvailabilityData = await res.json();
      console.log(userAvailabilityData);

    } catch (error) {
      console.log("Error adding to Availability", error);
    }
  }

  return (
    <div className='user-availability-form'>
      <h2 className='head'>Book your slots here</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="startDate">start-Date</label>
          <input type="datetime-local" className='input' name={startDate} onChange={(e) => {setStartDate(e.target.value)}} value={startDate} required/>
        </div>
        <div className='form-field'>
          <label htmlFor="endDate">End-Date</label>
          <input type="datetime-local" className='input' name={endDate} onChange={(e) => {setEndDate(e.target.value)}} value={endDate} required/>
        </div>
        <div className='form-field'>
          <label htmlFor="duration">Duration (Minutes)</label>
          <input type="number" className='input' name={duration} onChange={(e) => {setDuration(Number(e.target.value))}}  value={duration} required/>
        </div>
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
    </div>
  )
}

export default AvailabilityForm
