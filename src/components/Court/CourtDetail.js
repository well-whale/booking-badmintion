import React from 'react';
import { NavLink } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../Court/CourtDetail.css";

const ProductDetail = () => {
  const amenities = [
    { name: 'Wifi', icon: 'wifi' },
    { name: 'Bãi đỗ xe máy', icon: 'motorcycle' },
    { name: 'Trà đá', icon: 'ice-tea' },
    { name: 'Nước uống', icon: 'drink' },
    { name: 'Bãi đỗ xe oto', icon: 'car' },
    { name: 'Căng tin', icon: 'canteen' },
    { name: 'Đồ ăn', icon: 'food' }
  ];
  const productDetailItem = {
    images: [
      {
        original:
          "https://sonsanepoxy.vn/wp-content/uploads/2023/07/Thi-cong-san-cau-long.jpg",
        thumbnail:
          "https://sonsanepoxy.vn/wp-content/uploads/2023/07/Thi-cong-san-cau-long.jpg"
      },
      {
        original:
          "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg",
        thumbnail:
          "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg"
      },
      {
        original:
          "https://storage.googleapis.com/leep_app_website/2021/03/kich-thuoc-san-cau-long-2.jpg",
        thumbnail:
          "https://storage.googleapis.com/leep_app_website/2021/03/kich-thuoc-san-cau-long-2.jpg"
      },
      {
        original:
          "https://img.meta.com.vn/Data/image/2019/05/15/kich-thuoc-san-cau-long-tieu-chuan.png",
        thumbnail:
          "https://img.meta.com.vn/Data/image/2019/05/15/kich-thuoc-san-cau-long-tieu-chuan.png"
      },
    ],
    title: "Sân cầu lông Tre Xanh",
    clock: "5H - 23H",
    numberofcourt:"6 sân",
    address: "50 Xô Viết Nghệ Tĩnh, Phường 19, Bình Thạnh, Thành phố Hồ Chí Minh",
    phoneNumber: "03456789",
    socialMedia: "Facebook",
    price: "Từ 50.000 vnđ/h/sân." 
  };

  return (
    <section className="product-detail-container">
      {/* Image gallery */}
      <div className="image-gallery-container">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />
      </div>

      {/* Description */}
      <div className="product-description">
        <h2 className="product-title">{productDetailItem.title}</h2>
        <div className="product-reviews">
          <div className="rating-container">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={false}
              rating={4}
            />
          </div>
        </div>
        <p className="product-brand">
          Giờ Hoạt Động: <span>{productDetailItem.clock}</span>
        </p>
        <p className="product-brand">
          Quy mô: <span>{productDetailItem.numberofcourt}</span>
        </p>
        <p className="product-category">
          Địa Chỉ: <span>{productDetailItem.address}</span>
        </p>
        <p className="product-sku">
          Điện Thoại: <span>{productDetailItem.phoneNumber}</span>
        </p>
        <p className="product-price">
          Giá: <span>{productDetailItem.price}</span>
        </p>
        <p>
          {/* <i className="fa-brands fa-facebook"></i> */}
          <div className="amenities-container">
      <h5>Dịch vụ tiện ích</h5>
      <ul className="amenities-list">
        {amenities.map((amenity, index) => (
          <li key={index} className="amenity-item">
            <i className={`amenity-icon ${amenity.icon}`} aria-hidden="true"></i>
            {amenity.name}
          </li>
        ))}
      </ul>
    </div>
        </p>
        <button className="btn-book"><NavLink className="dropdown-item" to="/booking">Đặt sân</NavLink></button>
      </div>
      
    </section>
  );
};

export default ProductDetail;
