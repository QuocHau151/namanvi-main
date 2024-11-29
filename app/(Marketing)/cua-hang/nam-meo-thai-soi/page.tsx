import Link from "next/link";
import React from "react";

export default function ChiTietSanPham() {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Chi tiết sản phẩm</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Trang Chủ</a>
              </li>
              <li>Chi tiết sản phẩm</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
    Product Details
    ==============================*/}
      <section className="product-details space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img border-1">
                  <img
                    src="/assets/img/product/nam-meo-thai-soi.jpg"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">Liên Hệ</p>
                <h2 className="product-title">Nấm Mèo Thái Sợi</h2>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <a
                    href="shop-details.html"
                    className="woocommerce-review-link"
                  >
                    (<span className="count">4</span> customer reviews)
                  </a>
                </div>
                <p className="text">
                  Nấm đã sấy khô và cắt sợi sẵn, tiện lợi hơn trong chế biến -
                  Giàu chất sắt và vitamin B2 tốt cho người bị thiếu máu và cải
                  thiện tim mạch. - Giàu giá trị dinh dưỡng và khoáng chất cần
                  thiết cho cơ thể. - Phụ nữ sợ dùng viên sắt có thể bổ sung Nấm
                  Mộc Nhĩ Thái Sợi trong khẩu phần ăn mỗi tuần. - Dễ dàng kết
                  hợp với bất kỳ món ăn nào, thực đơn chay hay mặn đều dùng
                  được.
                </p>
                <div className="link-inherit mt-2">
                  <p>
                    <strong className="text-title me-3">Tồn Kho:</strong>
                    <span className="stock in-stock">
                      <i className="far fa-check-square me-2 ms-1" />
                      Còn Hàng
                    </span>
                  </p>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <input
                      type="number"
                      className="qty-input"
                      step={1}
                      min={1}
                      max={100}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-chevron-up" />
                    </button>
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-chevron-down" />
                    </button>
                  </div>
                  <button className="th-btn">Thêm Vào Giỏ Hàng</button>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="product_meta">
                  <span className="posted_in">
                    Danh Mục: <a href="#">Nấm Bào Ngư</a>
                  </span>
                  <span>
                    Từ Khoá: <a href="#">Nấm</a>
                    <a href="#">Nấm Bào Ngư</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav product-tab-style1" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link th-btn active"
                id="description-tab"
                data-bs-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="false"
              >
                Chi Tiết Sản Phẩm
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link th-btn"
                id="reviews-tab"
                data-bs-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="true"
              >
                Review Khách Hàng
              </a>
            </li>
          </ul>
          <div className="tab-content" id="productTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p>
                Nấm đã sấy khô và cắt sợi sẵn, tiện lợi hơn trong chế biến -
                Giàu chất sắt và vitamin B2 tốt cho người bị thiếu máu và cải
                thiện tim mạch. - Giàu giá trị dinh dưỡng và khoáng chất cần
                thiết cho cơ thể. - Phụ nữ sợ dùng viên sắt có thể bổ sung Nấm
                Mộc Nhĩ Thái Sợi trong khẩu phần ăn mỗi tuần. - Dễ dàng kết hợp
                với bất kỳ món ăn nào, thực đơn chay hay mặn đều dùng được.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="woocommerce-Reviews">
                <div className="th-comments-wrap">
                  <ul className="comment-list">
                    <li className="review th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-1.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h4 className="name">Adam Jhon</h4>
                          <span className="commented-on">
                            <i className="far fa-calendar" />
                            22 April, 2023
                          </span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                          <p className="text">
                            This product is very much qualityful and I love this
                            working system and speed.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="review th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-2.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h4 className="name">Jusctin Dacon</h4>
                          <span className="commented-on">
                            <i className="far fa-calendar" />
                            26 April, 2023
                          </span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                          <p className="text">
                            They delivered the product in a few time. Product
                            quality is also very good.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="review th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-3.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h4 className="name">Jacklin July</h4>
                          <span className="commented-on">
                            <i className="far fa-calendar" />
                            26 April, 2023
                          </span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                          <p className="text">
                            Their product and service is very satisfying. I
                            highly recommend their services.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="review th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-4.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h4 className="name">Adison Smith</h4>
                          <span className="commented-on">
                            <i className="far fa-calendar" />
                            26 April, 2023
                          </span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                          <p className="text">
                            I am just in love with this product. Their service
                            is also very good you can also try.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                {/* Comment Form */}
                <div className="th-comment-form">
                  <div className="form-title">
                    <h3 className="blog-inner-title">Thêm Nhận Xét</h3>
                  </div>
                  <div className="row">
                    <div className="form-group rating-select d-flex align-items-center">
                      <label>Đánh Giá Của Bạn</label>
                      <p className="stars">
                        <span>
                          <a className="star-1" href="#">
                            1
                          </a>
                          <a className="star-2" href="#">
                            2
                          </a>
                          <a className="star-3" href="#">
                            3
                          </a>
                          <a className="star-4" href="#">
                            4
                          </a>
                          <a className="star-5" href="#">
                            5
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Viết Nhận Xét Của Bạn"
                        className="form-control"
                        defaultValue={""}
                      />
                      <i className="text-title far fa-pencil-alt" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Tên Của Bạn"
                        className="form-control"
                      />
                      <i className="text-title far fa-user" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Email Của Bạn"
                        className="form-control"
                      />
                      <i className="text-title far fa-envelope" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        id="reviewcheck"
                        name="reviewcheck"
                        type="checkbox"
                      />
                      <label htmlFor="reviewcheck">
                        Lưu tên, email và trang web của tôi trong trình duyệt
                        này cho lần bình luận tiếp theo của tôi.
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="th-btn">Gửi Nhận Xét</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*==============================
		Related Product  
		==============================*/}
          <div className="space-extra-top mb-30">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-auto">
                <h2 className="sec-title text-center">Sản Phẩm Liên Quan</h2>
              </div>
              <div className="col-md d-none d-sm-block">
                <hr className="title-line" />
              </div>
              <div className="col-md-auto d-none d-md-block">
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                        src="/assets/img/product/nam-bao-ngu-nhat.jpg"
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
                        <span className="count">(120 Reviews)</span>
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5.00 out of 5"
                        >
                          <span>
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                        <Link href="/cua-hang/nam-bao-ngu-trang">
                          Nấm Bào Ngư Trắng
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
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
                        <Link href="/cua-hang/nam-hoang-kim">
                          Nấm Hoàng Kim
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
                            Rated <strong className="rating">5.00</strong> out
                            of 5 based on <span className="rating">1</span>{" "}
                            customer rating
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none mt-40 text-center">
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
      </section>
    </>
  );
}
