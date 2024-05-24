import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from "react-router-dom";
const address = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
    "Quận 10", "Quận 11", "Quận 12", "Quận Phú Nhuận", "Quận Bình Thạnh",
    "Quận Gò Vấp", "Quận Tân Bình", "Quận Bình Tân", "Quận Tân Phú",
    "Thành phố Thủ Đức", "Bình Chánh", "Hóc Môn", "Củ Chi", "Cần Giờ", "Nhà Bè"
  ];
const Search = () => {
    return (
        <div className="booking__container">
          <form>
            <div className="form__group">
              <div className="input__group">
                <select defaultValue="">
                  <option value="" disabled>Select location</option>
                  {address.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <label>Location</label>
              </div>
              <p>Where are you playing?</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="date" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
          </form>
          <button className="btn">
            <NavLink to="/search"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
          </button>
        </div>
      
    );
};

export default Search;
