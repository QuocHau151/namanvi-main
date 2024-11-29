import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div id="QuickView" className="white-popup mfp-hide">
        <div className="rounded-10 container bg-white">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="/assets/img/product/product_details_1_1.jpg"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">
                  $120.85<del>$150.99</del>
                </p>
                <h2 className="product-title">Bosco Apple Fruit</h2>
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
                  Prepare to embark on a sensory journey with the Bosco Apple, a
                  fruit that transcends the ordinary and promises an
                  unparalleled taste experience. These apples are nothing short
                  of nature’s masterpiece, celebrated for their distinctive
                  blend of flavors and their captivating visual allure.
                </p>
                <div className="link-inherit mt-2">
                  <p>
                    <strong className="text-title me-3">Availability:</strong>
                    <span className="stock in-stock">
                      <i className="far fa-check-square me-2 ms-1" />
                      In Stock
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
                  <button className="th-btn">Add to Cart</button>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">Bosco-Apple-Fruit</span>
                  </span>
                  <span className="posted_in">
                    Category: <a href="shop.html">Fresh Fruits</a>
                  </span>
                  <span>
                    Tags: <a href="shop.html">Fruits</a>
                    <a href="shop.html">Organic</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" className="mfp-close">
            ×
          </button>
        </div>
      </div>
      {/*==============================
      Sidemenu
  ============================== */}
      <div className="sidemenu-wrapper sidemenu-cart d-none d-lg-block">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/img/product/product_thumb_1_1.jpg"
                      alt="Cart Image"
                    />
                    Bosco Apple Fruit
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      940.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/img/product/product_thumb_1_2.jpg"
                      alt="Cart Image"
                    />
                    Green Cauliflower
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      899.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/img/product/product_thumb_1_3.jpg"
                      alt="Cart Image"
                    />
                    Mandarin orange
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      756.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/img/product/product_thumb_1_4.jpg"
                      alt="Cart Image"
                    />
                    Shallot Red onion
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      723.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/img/product/product_thumb_1_5.jpg"
                      alt="Cart Image"
                    />
                    Sour Red Cherry
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <a href="cart.html" className="th-btn wc-forward">
                  View cart
                </a>
                <a href="checkout.html" className="th-btn checkout wc-forward">
                  Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      {/*==============================
      Mobile Menu
    ============================== */}
      <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <Link href="/" className="flex items-center justify-center">
              <img src="/assets/img/logo.png" alt="Frutin" />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <Link href="/">Trang Chủ</Link>
              </li>
              <li>
                <Link href="/gioi-thieu">Giới Thiệu</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/cua-hang">Cửa Hàng</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/tin-tuc">Tin Tức</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/tin-tuc">Tin Tức</Link>
                  </li>
                  <li>
                    <Link href="/tin-tuc-chi-tiet">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/lien-he">Liên Hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
    Header Area
  ==============================*/}
      <header className="th-header header-layout2">
        <div className="sticky-wrapper">
          <div className="container">
            <div className="z-index-common">
              <div className="header-top">
                <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                  <div className="d-none d-lg-block col-auto">
                    <p className="header-notice">
                      Miễn Phí Ship Toàn Thành Phố
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="header-links">
                      <ul>
                        <li className="d-none d-xxl-inline-block">
                          <i className="fal fa-location-dot" />
                          <a href="https://www.google.com/maps">
                            123/9 đường số 8 KP.1 phường Linh Xuân quận Thủ Đức
                          </a>
                        </li>
                        <li>
                          <div className="social-links">
                            <a href="https://www.facebook.com/">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://www.twitter.com/">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="https://www.linkedin.com/">
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <a href="https://www.instagram.com/">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="https://www.youtube.com/">
                              <i className="fab fa-youtube" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-area">
                <div className="logo-bg" />
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <Link href="/">
                        <img
                          className="ml-[13px] w-[50px] lg:w-[80%]"
                          src="/assets/img/logo.png"
                          alt="Frutin"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li className="menu-item-has-children">
                          <Link href="/">Trang Chủ</Link>
                        </li>
                        <li>
                          <Link href="/gioi-thieu">Giới Thiệu</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/cua-hang">Cửa Hàng</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/tin-tuc">Tin Tức</Link>
                        </li>
                        <li>
                          <Link href="/lien-he">Liên Hệ</Link>
                        </li>
                      </ul>
                    </nav>
                    <button
                      type="button"
                      className="th-menu-toggle d-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                  <div className="d-none d-xl-block col-auto ms-auto">
                    <div className="header-button">
                      <button
                        type="button"
                        className="simple-icon searchBoxToggler"
                      >
                        <i className="far fa-search" />
                      </button>
                      <button
                        type="button"
                        className="simple-icon sideMenuToggler"
                      >
                        <span className="badge">5</span>
                        <i className="fa-regular fa-cart-shopping" />
                      </button>
                      <Link href="/cua-hang" className="th-btn style4">
                        Mua Ngay
                        <i className="fas fa-chevrons-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*==============================
       */}
    </>
  );
}
