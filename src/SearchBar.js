import React, { useState } from "react";

const SearchBar = ({ setSearchItems }) => {

  const [description,setDescription] = useState('Python');
  const [location,setLocation] = useState('');
  const [time,setTime] = useState('full_time')  

  const changeDesc = (e) => {
      setDescription(e.target.value);
  }

  const changeLocation = (e) => {
      setLocation(e.target.value);
  }

  const changeTime = (e) => {
      if(e.target.value === 'Full-Time'){
            setTime('full_time')
      }else{
          setTime('part_time')
      }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();

    setSearchItems({
        description: description,
        location: location,
        timing: time
    })

    e.target.reset()
    setTime('full_time')
  }
  

  return (
    <form className="my-3" onSubmit={onSubmit}>
      <div className="container my-2">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value = {description}
              onChange = {changeDesc}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value = {location}
              onChange = {changeLocation}
            />
          </div>
          <div className="col">
            <select id="inputState" className="form-control" onChange={changeTime}>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-outline-primary mb-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
