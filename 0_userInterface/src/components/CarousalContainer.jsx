import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import book_1 from "../../src/asserts/images/Men&Women.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../asserts/wrapper/CarouselContainer.js";

const CarousalContainer = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const container = document.querySelector(".carousel-container");
   const carousel_author = document.querySelector(".carousel-author");
   const container_author = document.querySelector(
     ".carousel-container-author"
   );
    carousel.addEventListener("mouseenter", () => {
      // container.style.animationPlayState = "paused";
      container.style.animationPlayState = "paused";
    });

    carousel.addEventListener("mouseleave", () => {
      container.style.animationPlayState = "running";
    });
 

    carousel_author.addEventListener("mouseenter", () => {
      // container.style.animationPlayState = "paused";
      container_author.style.animationPlayState = "paused";
    });

    carousel_author.addEventListener("mouseleave", () => {
      container_author.style.animationPlayState = "running";
    });
  });

  return (
    <Wrapper>
      <div>
        <div className="explore-book-section">
          <h2
            className="explore-book-section-heading"
            style={{ textAlign: "center" }}
          >
            EXPLORE BOOK
          </h2>
          <div className="carousel">
            <div className="carousel-container">
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-book-section">
          <h2
            className="explore-book-section-heading"
            style={{ textAlign: "center" }}
          >
            EXPLORE AUTHOR
          </h2>
          <div className="carousel-author">
            <div className="carousel-container-author">
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Chetan Bhagat</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>John Gray</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>J K Rowling</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
              <div className="bookImage" style={{ width: "250px" }}>
                <img src={book_1} alt="" />
                <p>Man are From Mars, Women are from Venus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CarousalContainer;
