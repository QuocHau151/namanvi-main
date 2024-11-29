import Link from "next/link";
import React from "react";

export default function CuaHang() {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Cửa hàng</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Trang Chủ</Link>
              </li>
              <li>Cửa hàng</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
Product Area
==============================*/}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <p className="woocommerce-result-count">
                  Showing 1–12 of 16 results
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="menu_order" selected>
                      Sắp Xếp Theo
                    </option>
                    <option value="popularity">Xếp theo nổi bật</option>
                    <option value="rating">Xếp theo giá</option>
                    <option value="date">Xếp theo A-Z</option>
                    <option value="price">Giá Tăng</option>
                    <option value="price-desc">Giá Giảm</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row gy-40">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-bao-ngu-nhat.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Hot</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-bao-ngu-xam.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">New</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-bao-ngu-trang.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Hot</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-hoang-kim.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Sale</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-meo-den.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">New</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-meo-thai-soi.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Hot</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/nam-linh-chi-do.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">New</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img
                    src="assets/img/product/dong-trung-ha-thao.jpg"
                    alt="Product Image"
                  />
                  <span className="product-tag">Hot</span>
                  <div className="actions">
                    <Link href="#QuickView" className="icon-btn popup-content">
                      <i className="far fa-eye" />
                    </Link>
                    <Link href="cart.html" className="icon-btn">
                      <i className="far fa-cart-plus" />
                    </Link>
                    <Link href="wishlist.html" className="icon-btn">
                      <i className="far fa-heart" />
                    </Link>
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
                        Rated <strong className="rating">5.00</strong> out of 5
                        based on <span className="rating">1</span> customer
                        rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="th-pagination pt-50 text-center">
            <ul>
              <li>
                <Link href="blog.html">1</Link>
              </li>
              <li>
                <Link href="blog.html">2</Link>
              </li>
              <li>
                <Link href="blog.html">3</Link>
              </li>
              <li>
                <Link href="blog.html">
                  <i className="far fa-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
