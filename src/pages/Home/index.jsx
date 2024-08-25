import React from "react";
import Cards from "../../components/cards/index.jsx";
import styles from "./style.module.css";
import CurlyGirl from "../../components/cards/imgs/Curly girl.jpg";
import PositiveBoy from "../../components/cards/imgs/positivBoy.jpg";
import HR from "../../components/cards/imgs/human resources.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  // Navigation
  const handleCardClick = () => {
    Navigate("/blog");
  };
  const Navigate = useNavigate();

  // Local Storage and Hooks
  const [data, setData] = useState(() => {
    // get data from Local Storage if it exists
    const savedData = localStorage.getItem("cardsData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [image, setImage] = useState("");
  const [fullname, setFullname] = useState("");
  const [occupation, setOccupation] = useState("");
  // set data to Local Storage when it changes
  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      image,
      fullname,
      occupation,
    };
    setData([...data, newData]);
    setImage(""); // Clear the image state
    setFullname(""); // Clear the fullname state
    setOccupation(""); // Clear the occupation state
  };


  return (
    <>
      <form className={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result); // This will set the image as a Base64 string
              };
              reader.readAsDataURL(file);
            }
          }}
        />

        <input
          name="fullname"
          placeholder="Full Name"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          name="occupation"
          placeholder="Occupation"
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className={styles.cardsContainer}>
        {data?.map((item, index) => {
          return (
            <Cards
              key={index}
              name={item.fullname}
              occupation={item.occupation}
              image={item.image}
              onClick={handleCardClick}
              currentRating={1}
            />
          );
        })}

        <Cards
          name={"Ann Mackenzie"}
          occupation={"Software Engineer"}
          image={CurlyGirl}
          onClick={handleCardClick}
          currentRating={1}
        />
        <Cards
          onClick={handleCardClick}
          name={"John Doe"}
          occupation={"CEO"}
          image={PositiveBoy}
          currentRating={1}
        />
        <Cards
          onClick={handleCardClick}
          name={"Marry Wattson"}
          occupation={"Human Resources"}
          image={HR}
          currentRating={1}
        />
      </div>
    </>
  );
};

export default Home;
