import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [drugname, setDrugname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/profile/${drugname}`);
    setDrugname("");
  };
  
  return (
    <div className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <label htmlFor="drugname">Enter your drugname</label>
        <input
          value={drugname}
          placeholder="Search . . ."
          onChange={(e) => setDrugname(e.target.value)}
          name="drugname"
          id="drugname"
        />
      </form>
    </div>
  );
};

export default Home;
