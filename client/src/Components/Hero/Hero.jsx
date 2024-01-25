import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade,Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={true}
        modules={[EffectFade,Pagination]}
        className="hero__swiper"
      >
        <SwiperSlide className="hero__slider">
          <div className="hero__slider__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
          <div className="hero__slider__right">
            <div className="hero__slider__right__up">
              <i>60% Discount</i>
            </div>
            <div className="hero__slider__right__middle">
              <h1>Winter Collection</h1>
              <p>
                <i>Best Cloth Collection By 2020!</i>
              </p>
            </div>
            <div className="hero__slider__right__button">
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__slider">
          <div className="hero__slider__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
          <div className="hero__slider__right">
            <div className="hero__slider__right__up">
              <i>60% Discount</i>
            </div>
            <div className="hero__slider__right__middle">
              <h1>Winter Collection</h1>
              <p>
                <i>Best Cloth Collection By 2020!</i>
              </p>
            </div>
            <div className="hero__slider__right__button">
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__slider">
          <div className="hero__slider__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
          <div className="hero__slider__right">
            <div className="hero__slider__right__up">
              <i>60% Discount</i>
            </div>
            <div className="hero__slider__right__middle">
              <h1>Winter Collection</h1>
              <p>
                <i>Best Cloth Collection By 2020!</i>
              </p>
            </div>
            <div className="hero__slider__right__button">
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__slider">
          <div className="hero__slider__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
          <div className="hero__slider__right">
            <div className="hero__slider__right__up">
              <i>60% Discount</i>
            </div>
            <div className="hero__slider__right__middle">
              <h1>Winter Collection</h1>
              <p>
                <i>Best Cloth Collection By 2020!</i>
              </p>
            </div>
            <div className="hero__slider__right__button">
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero__slider">
          <div className="hero__slider__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp"
              alt=""
            />
          </div>
          <div className="hero__slider__right">
            <div className="hero__slider__right__up">
              <i>60% Discount</i>
            </div>
            <div className="hero__slider__right__middle">
              <h1>Winter Collection</h1>
              <p>
                <i>Best Cloth Collection By 2020!</i>
              </p>
            </div>
            <div className="hero__slider__right__button">
              <button>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
