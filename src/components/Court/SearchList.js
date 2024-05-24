import React from 'react';
import { NavLink } from "react-router-dom";
import image1 from '../img/caytrac.png';
import image2 from '../img/kienthiet.jpg';
import image3 from '../img/trexanh.jpg';
import image4 from '../img/lequydon.png';
import image5 from '../img/thaotrang.png';
import image6 from '../img/thuysan.png';
import "../Court/SearchList.css"

const address = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
    "Quận 10", "Quận 11", "Quận 12", "Quận Phú Nhuận", "Quận Bình Thạnh",
    "Quận Gò Vấp", "Quận Tân Bình", "Quận Bình Tân", "Quận Tân Phú",
    "Thành phố Thủ Đức", "Bình Chánh", "Hóc Môn", "Củ Chi", "Cần Giờ", "Nhà Bè"
  ];

const Courts = [
  {
    image: image3,
    name: "Sân Cầu lông Tre Xanh",
    address: "50 Xô Viết Nghệ Tĩnh, Phường 19, Bình Thạnh, Thành phố Hồ Chí Minh"
  },
  {
    image: image2,
    name: "Sân Cầu Lông Kiến Thiết",
    address: "Khu Viso Kiến Thiết cũ, 50 Dân Chủ, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh"
  },
  {
    image: image6,
    name: "Sân cầu lông Thủy Sản",
    address: "185 Đ. Số 1, An Lạc, Bình Tân, Thành phố Hồ Chí Minh"
  },
  {
    image: image5,
    name: "Sân Cầu Lông Thảo Trang",
    address: "193 Đ. Lê Văn Quới, Bình Trị Đông, Bình Tân, Thành phố Hồ Chí Minh"
  },
  
];

const SearchList = () => {
  return (
    <div>
    <div className="booking__container1">
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
      <div className="section__container">
      
        <section className="popular__container">
          <h2 className="section__header">Popular Badminton Courts</h2>
          <div className="popular__grid">
            {Courts.map((court, index) => (
              <NavLink key={index} to={`/view/`} className="popular__card" onClick={() => window.scrollTo(0, 0)}>
                <img src={court.image} alt={court.name} />
                <div className="popular__content">
                  <div className="popular__card__header">
                    <h4>{court.name}</h4>
                  </div>
                  <p>{court.address}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchList;
