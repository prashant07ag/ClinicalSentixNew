import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [drugname, setDrugname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/${drugname}`);
      const data = response.data;
      console.log("Fetched data:", data);
      navigate(`/profile/${drugname}`);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again.");
    }
    setIsLoading(false);
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Home;
