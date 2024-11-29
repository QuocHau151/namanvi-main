"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div
        className="th-hero-wrapper hero-2 mt-[-140px] h-[100vh]"
        id="hero"
        data-bg-src="assets/img/hero/hero_bg_2_1.jpg"
      >
        <div
          className="swiper th-slider"
          id="heroSlider2"
          data-slider-options='{"effect":"fade"}'
        >
          <Swiper
            className="swiper-wrapper"
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="hero-inner">
                  <div className="container">
                    <div className="hero-style2">
                      <span
                        className="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        <img
                          src="/assets/img/theme-img/title_icon.svg"
                          alt="shape"
                        />
                        100% Sản phẩm sạch
                      </span>
                      <h1 className="hero-title">
                        <span
                          className="title1"
                          data-ani="slideinup"
                          data-ani-delay="0.4s"
                        >
                          Nấm Sạch
                          <span
                            className="title2"
                            data-ani="slideinup"
                            data-ani-delay="0.5s"
                          >
                            An Vi
                          </span>
                        </span>
                      </h1>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        <Link href="/cua-hang" className="th-btn z-50">
                          Mua Ngay
                          <i className="fas fa-chevrons-right ms-2" />
                        </Link>
                        <div className="arrow">
                          <img
                            src="/assets/img/hero/hero_arrow.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-img"
                    data-ani="slidebottomright"
                    data-ani-delay="0.1s"
                  >
                    <img src="/assets/img/hero/hero_2_1.png" alt="Image" />
                  </div>
                  <div
                    className="hero-shape1"
                    data-ani="slideinup"
                    data-ani-delay="0.7s"
                  >
                    <img
                      src="/assets/img/hero/hero_shape_1_1.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="hero-shape2"
                    data-ani="slideinup"
                    data-ani-delay="0.8s"
                  >
                    <img
                      src="/assets/img/hero/hero_shape_1_2.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="hero-shape3"
                    data-ani="slideinup"
                    data-ani-delay="0.9s"
                  >
                    <img
                      src="/assets/img/hero/hero_shape_1_3.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="hero-shape4"
                    data-ani="slidebottomright"
                    data-ani-delay="0.5s"
                  >
                    <img
                      src="/assets/img/hero/hero_shape_2_1.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-[100vh] w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="h-[100vh] w-full object-fill"
                    src="/assets/img/banner/banner1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-[100vh] w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="h-[100vh] w-full object-fill"
                    src="/assets/img/banner/banner2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="h-[100vh] w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="h-[100vh] w-full object-fill"
                    src="/assets/img/banner/banner3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <button
              data-slider-prev="#heroSlider2"
              className="slider-arrow default"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              data-slider-next="#heroSlider2"
              className="slider-arrow default"
            >
              <i className="far fa-arrow-right" />
            </button>
          </Swiper>
        </div>
        <div className="icon-box"></div>
      </div>
      {/*======== / Hero Section ========*/}
      {/*==============================
About Area  
==============================*/}
      <div className="space overflow-hidden" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-xl-0 mb-40">
              <div className="img-box5">
                <div className="shape1">
                  <img src="/assets/img/normal/about_3_2.png" alt="About" />
                </div>
                <div className="img1">
                  <img src="/assets/img/normal/about_3_1.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 text-xl-start text-center">
              <div className="title-area mb-32">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="shape" />
                  Về Công ty chúng tôi
                </span>
                <h2 className="sec-title">Công Ty TNHH SX TM DV An Vi</h2>
                <p className="sec-text">
                  Nấm An Vi là thực phẩm có giá trị dinh dưỡng cao được sử dụng
                  rộng rãi làm thực phẩm, dược liệu. Nấm có nhiều lợi ích và tốt
                  cho sức khỏe của con người, tuy nhiên ta cũng cần hiểu rõ vai
                  trò, thành phần và sự phân loại nấm trong tự nhiên để đem lại
                  hiệu quả mong muốn và tốt nhất.
                </p>
              </div>
              <div className="checklist list-two-column mb-40">
                <ul>
                  <li>100% Sản Phẩm Hữu Cơ</li>
                  <li>Không dùng chất hoá học</li>
                  <li>Sản Phẩm Luôn Tươi Mới</li>
                  <li>Giá cả phải chăng</li>
                  <li>Thân thiện môi trường</li>
                </ul>
              </div>
              <div>
                <a href="/about.html" className="th-btn">
                  Xem thêm
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
Cta Area  
==============================*/}
      <section className="space-bottom">
        <div className="z-index-common container">
          <div className="row gy-30">
            <div className="col-xxl-4 col-lg-5">
              <div
                className="offer-card mega-hover"
                data-bg-src="assets/img/bg/cta_bg_2_1.jpg"
              >
                <span className="h6 box-subtitle">
                  Giảm giá <span className="text-theme">10% </span>
                </span>
                <h3 className="box-title">Nấm kim châm</h3>
                <a href="shop-details.html" className="th-btn">
                  Mua Ngay
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-7">
              <div
                className="offer-card mega-hover"
                data-bg-src="assets/img/bg/cta_bg_2_2.jpg"
              >
                <span className="h6 box-subtitle">
                  Giảm giá <span className="text-theme">10% </span>
                </span>
                <h3 className="box-title">Nấm bào ngư</h3>
                <a href="shop-details.html" className="th-btn">
                  Mua Ngay
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="bg-top-center space-top"
        data-bg-src="assets/img/bg/gallery_bg_1.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg">
              <div className="title-area text-lg-start text-center">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Danh mục hình ảnh
                </span>
                <h2 className="sec-title text-white">
                  Những sản phẩm trưng bày của chúng tôi
                </h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#gallerySlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button
                    data-slider-next="#gallerySlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-gallery container">
          <div
            className="swiper th-slider has-shadow"
            id="gallerySlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_1.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_2.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_3.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_4.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_1.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_1.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_2.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_2.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_3.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_3.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="gallery-card">
                  <div className="box-img">
                    <img
                      src="/assets/img/gallery/gallery_1_4.jpg"
                      alt="gallery image"
                    />
                    <a
                      href="/assets/img/gallery/gallery_1_4.jpg"
                      className="icon-btn style2 popup-image"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                  <div className="box-content">
                    <p className="box-subtitle">Nấm Sạch</p>
                    <h3 className="box-title">
                      <a href="project-details.html">Nấm Bào Ngư</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none mt-40 text-center">
            <div className="icon-box">
              <button
                data-slider-prev="#gallerySlider1"
                className="slider-arrow default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#gallerySlider1"
                className="slider-arrow default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
Service Area  
==============================*/}
      <section
        className="bg-smoke2 space overflow-hidden"
        id="service-sec"
        data-bg-src="assets/img/bg/service_bg_1.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Sản Phẩm Bán Chạy
                </span>
                <h2 className="sec-title">
                  Sản phẩm nấm sạch được ưa chuộng nhất
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-40 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="service-card">
                <div className="box-img">
                  <img src="/assets/img/home/nambaongu.jpg" alt="Service" />
                </div>
                <div className="box-icon mx-auto">
                  <img src="/assets/img/icon/service_card_1.svg" alt="Icon" />
                </div>
                <div
                  className="box-content"
                  data-mask-src="assets/img/bg/service_card_shape.png"
                >
                  <h3 className="box-title">
                    <a href="service-details.html">Nấm Bào Ngư</a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Nấm bào ngư là loại nấm có giá trị dinh dưỡng rất cao. Ngoài
                    ra nấm bào ngư còn có tác dụng làm giảm cholesterol trong
                    máu, ức chế sự phát triển của không ít loài vi khuẩn và một
                    số loài còn có tác dụng chống ung thư. Nấm bào ngư còn có
                    tác dụng tẩy sạch váng dầu hoả, chống ô nhiễm môi trường.
                  </p>
                </div>
                <a href="service-details.html" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card">
                <div className="box-img">
                  <img src="/assets/img/home/nammeo.jpg" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="/assets/img/icon/service_card_2.svg" alt="Icon" />
                </div>
                <div
                  className="box-content"
                  data-mask-src="assets/img/bg/service_card_shape.png"
                >
                  <h3 className="box-title">
                    <a href="service-details.html">Nấm Mèo Sạch</a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Giàu chất sắt và vitamin B2 tốt cho người bị thiếu máu và
                    cải thiện tim mạch. - Giàu giá trị dinh dưỡng và khoáng chất
                    cần thiết cho cơ thể.
                  </p>
                </div>
                <a href="service-details.html" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-card">
                <div className="box-img">
                  <img src="/assets/img/home/dongtrung.jpg" alt="Service" />
                </div>
                <div className="box-icon">
                  <img src="/assets/img/icon/service_card_3.svg" alt="Icon" />
                </div>
                <div
                  className="box-content"
                  data-mask-src="assets/img/bg/service_card_shape.png"
                >
                  <h3 className="box-title">
                    <a href="service-details.html">Đông Trùng Hạ Thảo</a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Đông trùng hạ thảo có chứa những dược chất vô cùng quý hiếm
                    có khả năng giúp cơ thể phòng ngừa và hỗ trợ điều trị ung
                    thư - Các loại vitamin A, B (B1, B2, B12,…), C, E, K,… - Các
                    nguyên tố vi lượng như Mn, Al, K, Na, Mg
                  </p>
                </div>
                <a href="service-details.html" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
  
Product Area  
==============================*/}
      <section className="space">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg">
              <div className="title-area text-lg-start text-center">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Sản phẩm nấm sạch
                </span>
                <h2 className="sec-title"> Những Sản Phẩm Nấm Nổi Bật </h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#productSlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button
                    data-slider-next="#productSlider1"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper th-slider has-shadow"
            id="productSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-bao-ngu-nhat.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Hot</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-bao-ngu-nhat"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-bao-ngu-nhat">
                        Nấm Bào Ngư Nhật
                      </Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Đánh Giá)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-bao-ngu-trang.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Hot</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-bao-ngu-trang"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <a href="/cua-hang/nam-bao-ngu-trang">
                        Nấm Bào Ngư Trắng
                      </a>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-bao-ngu-xam.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Hot</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-bao-ngu-xam"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-bao-ngu-xam">
                        Nấm Bào Ngư Xám
                      </Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-meo-thai-soi.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Sale</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-meo-thai-soi"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-meo-thai-soi">
                        Nấm Mèo Thái Sợi
                      </Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-meo-den.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">New</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-meo-den"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-meo-den">Nấm Mèo Đen</Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-hoang-kim.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Hot</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-hoang-kim"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-hoang-kim">Nấm Hoàng Kim</Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/nam-linh-chi-do.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">New</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/nam-linh-chi-do"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/nam-linh-chi-do">
                        Nấm Linh Chi Đỏ
                      </Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="th-product product-grid">
                  <div className="product-img">
                    <img
                      src="/assets/img/product/dong-trung-ha-thao.jpg"
                      alt="Product Image"
                    />
                    <span className="product-tag">Hot</span>
                    <div className="actions">
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="far fa-eye" />
                      </a>
                      <a href="cart.html" className="icon-btn">
                        <i className="far fa-cart-plus" />
                      </a>
                      <a href="wishlist.html" className="icon-btn">
                        <i className="far fa-heart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link
                      href="/cua-hang/dong-trung-ha-thao"
                      className="product-category"
                    >
                      Nấm Sạch
                    </Link>
                    <h3 className="product-title">
                      <Link href="/cua-hang/dong-trung-ha-thao">
                        Đông Trùng Hạ Thảo
                      </Link>
                    </h3>
                    <span className="price">Liên Hệ</span>
                    <div className="woocommerce-product-rating">
                      <span className="count">(120 Reviews)</span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none mt-40 text-center">
            <div className="icon-box">
              <button
                data-slider-prev="#productSlider1"
                className="slider-arrow default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#productSlider1"
                className="slider-arrow default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Feature Area  
==============================*/}
      <section
        className="why-sec3 space"
        data-bg-src="assets/img/bg/why_bg_2_2.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Lợi ích của Nấm
                </span>
                <h2 className="sec-title text-white">
                  An Vi - Địa Chỉ Xanh Cho Nguồn Nấm Sạch
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-0 justify-content-between">
            <div className="col-sm-auto">
              <div className="why-feature-left">
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly1-83140.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Hỗ trợ thúc đẩy đường ruột
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly2-71190.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Tăng cường hệ miễn dịch
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly3-57370.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Tự nhiên 100% - liên quan phòng chống ung thư
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-auto">
              <div className="img-box4 mt-0">
                <img
                  className=""
                  src="/assets/img/normal/why_3_1.png"
                  alt="Why"
                />
              </div>
            </div>
            <div className="col-sm-auto">
              <div className="why-feature-right">
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly4-56430.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Tốt cho huyết áp
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly5-24401.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Giảm cân hiệu quả
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="box-icon mx-auto">
                    <img
                      className="h-[70px] w-[70px]"
                      src="/assets/img/icon/iconly6-40112.png"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <div className="text-[18px] font-bold text-yellow-400">
                      Tăng cường sức khoẻ não bộ
                    </div>
                    <p className="italic text-white">
                      Cung cấp nấm an toàn 5 sạch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Process Area  
==============================*/}
      <section className="space" id="process-sec">
        <div className="shape-mockup" data-top={0} data-left={0}>
          <img src="/assets/img/shape/vector_shape_7.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom={0} data-right={0}>
          <img src="/assets/img/shape/vector_shape_6.png" alt="shape" />
        </div>
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
              Quy trình trồng Nấm của chúng tôi
            </span>
            <h2 className="sec-title">Làm sao để có sản phẩm sạch?</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div
                  className="box-img"
                  data-mask-src="assets/img/bg/process_bg_shape.png"
                >
                  <img src="/assets/img/icon/step-1.png" alt="image" />
                </div>
                <p className="box-number">Bước 1</p>
                <h3 className="box-title">Trại ủ phối</h3>
                <p className="box-text">
                  Nguyên liệu được trộn và ủ theo quy trình khoa học, đảm bảo
                  môi trường lý tưởng cho nấm phát triển, không sử dụng hóa
                  chất.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div
                  className="box-img"
                  data-mask-src="assets/img/bg/process_bg_shape.png"
                >
                  <img src="/assets/img/icon/step-2.png" alt="image" />
                </div>
                <p className="box-number">Bước 2</p>
                <h3 className="box-title">Nhà Nấm</h3>
                <p className="box-text">
                  Nấm được nuôi trồng trong điều kiện kiểm soát nghiêm ngặt về
                  nhiệt độ, độ ẩm và ánh sáng, đảm bảo nấm phát triển tự nhiên
                  và đạt chất lượng cao.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div
                  className="box-img"
                  data-mask-src="assets/img/bg/process_bg_shape.png"
                >
                  <img src="/assets/img/icon/step-3.png" alt="image" />
                </div>
                <p className="box-number">Bước 3</p>
                <h3 className="box-title">Lưu Kho</h3>
                <p className="box-text">
                  Sản phẩm được bảo quản trong kho lạnh hoặc môi trường chuyên
                  biệt, giữ độ tươi và giá trị dinh dưỡng tối ưu trước khi phân
                  phối.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 process-box-wrap">
              <div className="process-box">
                <div
                  className="box-img"
                  data-mask-src="assets/img/bg/process_bg_shape.png"
                >
                  <img src="/assets/img/icon/step-4.png" alt="image" />
                </div>
                <p className="box-number">Bước 4</p>
                <h3 className="box-title">Vận Chuyển</h3>
                <p className="box-text">
                  Nấm được đóng gói cẩn thận và vận chuyển nhanh chóng đến khách
                  hàng, đảm bảo sản phẩm luôn tươi ngon và an toàn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Faq Area
==============================*/}
      <div
        className="bg-smoke2 space overflow-hidden"
        id="faq-sec"
        data-bg-src="assets/img/bg/testi_bg_2.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="faq-img1">
                <div className="img1">
                  <img src="/assets/img/normal/faq_1_1.jpg" alt="faq" />
                </div>
                <div className="shape1">
                  <img src="/assets/img/bg/vector_shape_1.png" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 text-xl-start align-self-center text-center">
              <div className="ps-xl-4">
                <div className="title-area text-xl-start pe-xxl-5 text-center">
                  <span className="sub-title">
                    <img
                      src="/assets/img/theme-img/title_icon.svg"
                      alt="Icon"
                    />
                    Đặt câu hỏi cho chúng tôi?
                  </span>
                  <h2 className="sec-title">
                    Những câu hỏi thường gặp nếu bạn có thắc mắc?
                  </h2>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                        aria-controls="collapse-1"
                      >
                        Nấm của bạn có đạt tiêu chuẩn hữu cơ (organic) không
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      className="accordion-collapse show collapse"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Có, tất cả nấm của chúng tôi đều được trồng theo quy
                          trình hữu cơ, không sử dụng hóa chất tổng hợp hay phân
                          bón hóa học. Chúng tôi cam kết mang đến sản phẩm an
                          toàn, tự nhiên và tốt cho sức khỏe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        Thời hạn sử dụng của nấm sau khi mua là bao lâu?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nấm tươi: Thời hạn sử dụng từ 5-7 ngày nếu bảo quản
                          trong ngăn mát tủ lạnh. Nấm khô hoặc chế phẩm từ nấm:
                          Có thể sử dụng trong 6-12 tháng nếu bảo quản ở nơi khô
                          ráo, thoáng mát.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Làm thế nào để bảo quản nấm tươi tốt nhất?
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nấm tươi nên được bảo quản trong hộp kín hoặc túi zip
                          trong ngăn mát tủ lạnh, tránh ánh nắng trực tiếp và
                          nhiệt độ cao. Nếu không sử dụng ngay, hãy tránh rửa
                          nấm trước khi bảo quản để giữ độ tươi lâu hơn.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        Phương pháp xử lý và bảo quản nấm trước khi đóng gói như
                        thế nào?
                      </button>
                    </div>
                    <div
                      id="collapse-4"
                      className="accordion-collapse collapse"
                      aria-labelledby="collapse-item-4"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          Nấm được thu hoạch bằng tay, làm sạch tự nhiên, sau đó
                          đóng gói trong môi trường kiểm soát để đảm bảo giữ
                          trọn dưỡng chất và độ tươi ngon. Các sản phẩm khô như
                          nấm linh chi hoặc đông trùng hạ thảo được sấy khô bằng
                          công nghệ hiện đại để bảo toàn chất lượng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================

Testimonial Area  
==============================*/}
      <section className="space overflow-hidden" id="testi-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
              Cảm nhận
            </span>
            <h2 className="sec-title">Nhận xét của khách hàng</h2>
          </div>
          <div
            className="testi-box-area"
            data-bg-src="assets/img/bg/testi_bg_2.png"
          >
            <div className="testi-box-img">
              <img src="/assets/img/testimonial/testi_2_1.jpg" alt="Image" />
            </div>
            <div className="testi-box-shape">
              <img src="/assets/img/bg/testi_box_shape.png" alt="image" />
            </div>
            <div className="testi-box-slide">
              <div
                className="swiper th-slider"
                id="testiSlide2"
                data-slider-options='{"effect":"slide"}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testi-box">
                      <p className="testi-box_text">
                        Tôi rất hài lòng khi mua nấm tại An Vi. Nấm tươi, sạch
                        và được đóng gói cẩn thận. Đặc biệt, nấm bào ngư rất
                        ngon và dễ chế biến, cả gia đình tôi đều thích. Giá cả
                        hợp lý mà chất lượng vượt mong đợi. Chắc chắn tôi sẽ
                        quay lại ủng hộ.
                      </p>
                      <h3 className="testi-box_name">Anh Hậu</h3>
                      <span className="testi-box_desig">Khách bán lẻ</span>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testi-box">
                      <p className="testi-box_text">
                        Dịch vụ chăm sóc khách hàng của An Vi rất tuyệt vời. Tôi
                        đặt hàng online và nấm được giao đến rất nhanh, vẫn giữ
                        được độ tươi ngon. Các loại nấm linh chi và đông trùng
                        hạ thảo đều chất lượng cao, dùng làm trà rất tốt cho sức
                        khỏe. Rất tin tưởng và hài lòng!
                      </p>
                      <h3 className="testi-box_name">Chị Thu Thắm</h3>
                      <span className="testi-box_desig">Khách sỉ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi-box_quote">
                {/* <img src="/assets/img/testimonial/quote_1.png" alt="Image"> */}
              </div>
              <div className="icon-box">
                <button
                  data-slider-prev="#testiSlide2"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-left" />
                </button>
                <button
                  data-slider-next="#testiSlide2"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Blog Area  
==============================*/}
      <section className="space bg-smoke2 overflow-hidden" id="blog-sec">
        <div className="shape-mockup" data-top={0} data-left={0}>
          <img src="/assets/img/shape/vector_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom={0} data-right={0}>
          <img src="/assets/img/shape/vector_shape_2.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg">
              <div className="title-area text-lg-start text-center">
                <span className="sub-title">
                  <img src="/assets/img/theme-img/title_icon.svg" alt="Icon" />
                  Tin tức
                </span>
                <h2 className="sec-title">Tin tức mới nhất</h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn">
                <a href="blog.html" className="th-btn">
                  Xem nhiều hơn
                  <i className="fas fa-chevrons-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-xl-6">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog_2_1.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      Bởi Admin
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      15 March, 2024
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Nấm An Vi – Hành trình từ thiên nhiên đến bàn ăn của bạn
                    </a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Giới thiệu quy trình sản xuất nấm sạch tại An Vi, từ khâu ủ
                    phối, nuôi trồng tại Nhà Nấm cho đến bảo quản và giao hàng.
                    Cam kết 100% hữu cơ, không sử dụng hóa chất, đảm bảo an toàn
                    và giữ nguyên giá trị dinh dưỡng. Khẳng định sứ mệnh mang
                    đến những sản phẩm chất lượng cao, góp phần nâng cao sức
                    khỏe cộng đồng.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Xem Thêm
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog_2_2.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      Bởi Admin
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      16 March, 2024
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Lợi ích sức khỏe vượt trội từ các sản phẩm nấm sạch của An
                      Vi
                    </a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Nêu bật các loại nấm chính mà công ty cung cấp, như nấm linh
                    chi, đông trùng hạ thảo, nấm hương, bào ngư. Phân tích chi
                    tiết giá trị dinh dưỡng và lợi ích sức khỏe: tăng cường miễn
                    dịch, hỗ trợ tiêu hóa, cải thiện giấc ngủ và giảm
                    cholesterol. Hướng dẫn cách sử dụng và chế biến các sản phẩm
                    nấm hiệu quả nhất.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Xem Thêm
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog_2_3.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      Bởi Admin
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      17 March, 2024
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Nấm An Vi – Giải pháp thực phẩm xanh, bảo vệ môi trường
                    </a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Trình bày phương pháp sản xuất bền vững của An Vi, như tái
                    sử dụng mùn cưa và phế phẩm nông nghiệp để nuôi trồng nấm.
                    Nhấn mạnh việc không sử dụng hóa chất trong quy trình sản
                    xuất, góp phần bảo vệ môi trường và sức khỏe người tiêu
                    dùng. Chia sẻ tầm nhìn của công ty trong việc xây dựng một
                    hệ sinh thái bền vững, hài hòa với thiên nhiên.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Xem Thêm
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog_2_4.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user" />
                      Bởi Admin
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      19 March, 2024
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Câu chuyện khách hàng: Vì sao tôi chọn nấm An Vi?
                    </a>
                  </h3>
                  <p className="box-text line-clamp-3">
                    Trích dẫn các ý kiến, cảm nhận chân thực của khách hàng về
                    chất lượng nấm, dịch vụ chăm sóc khách hàng và chính sách
                    giao hàng. Câu chuyện của một khách hàng tiêu biểu: nấm An
                    Vi đã giúp họ cải thiện sức khỏe như thế nào hoặc mang đến
                    trải nghiệm nấu ăn ra sao. Kêu gọi cộng đồng cùng trải
                    nghiệm sản phẩm và chia sẻ cảm nhận với công ty.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Xem Thêm
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Brand Area  
==============================*/}
      <div className="mt-1 bg-white py-5">
        <div className="th-container py-md-4 container">
          <div
            className="swiper th-slider"
            id="blogSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"5"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-box">
                  <img src="/assets/img/brand/brand-1.jpg" alt="Brand Logo" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <img src="/assets/img/brand/brand-2.jpg" alt="Brand Logo" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <img src="/assets/img/brand/brand-3.jpg" alt="Brand Logo" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <img src="/assets/img/brand/brand-4.jpg" alt="Brand Logo" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <img src="/assets/img/brand/brand-5.jpg" alt="Brand Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
