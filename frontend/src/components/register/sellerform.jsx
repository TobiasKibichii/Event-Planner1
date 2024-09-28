import React, { useState } from 'react';
import axios from "axios"; 
import "../../components/form.css";

export const SellerForm =({userAccount})=>{
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/registerSeller", {
          firstname,
          lastname,
          email,
          password,
          contact,
          gender,
          image,
          userAccount,
          location
        });
        alert(res.data.message);
      } catch (error) {
        console.log(error)
        alert(error.message);
      }
    };

    const handleImageUpload = async (e) => {
      // Ensure a file is selected
      
      if (!e.target.files || e.target.files.length === 0) {
        alert("Please select a file.");
        return;
      }

      const formData = new FormData();
      formData.append("image", e.target.files[0]); // Attach the first file selected

      try {
        const res = await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(res.data);
       setImage(e.target.value); // Save filename to image state
       
      } catch (error) {
        alert(error.message);
      }
    };




    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First Name"
          required
        />
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter Last Name"
          required
        />
        <label htmlFor="email">Enter Email* </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label htmlFor="email">Password* </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label htmlFor="tel">Contact*</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Mobile number"
          required
        />
        <label htmlFor="gender">Gender*</label>
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
        <label htmlFor="image">Upload Profile Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="/image*"
          
          onChange={handleImageUpload}
        />
        <input disabled defaultValue={userAccount} />
        <label htmlFor="location">Location:</label>
        <input
          list="locations"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter or select a location"
        />
        <datalist id="locations">
          <option value="New York"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
          <option value="Houston"></option>
          <option value="San Francisco"></option>
        </datalist>
        <button type="submit">register</button>
      </form>
    );
}