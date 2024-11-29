import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper footer-layout2">
        <div className="shape-mockup" data-top={0} data-left={0}>
          <img src="/assets/img/shape/footer_shape_1.png" alt="shape" />
        </div>
        <div className="shape-mockup" data-bottom={0} data-right={0}>
          <img src="/assets/img/shape/footer_shape_2.png" alt="shape" />
        </div>
        <div className="z-index-common container">
          <div className="newsletter-wrap">
            <div className="newsletter-content">
              <div className="email-icon">
                <img src="/assets/img/icon/email_1.svg" alt="Icon" />
              </div>
              <h4 className="newsletter-title">
                Hãy để lại thông tin cho chúng tôi &lt;3.
              </h4>
            </div>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Địa chỉ email"
                />
              </div>
              <button type="submit" className="th-btn style3">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img src="/assets/img/logo.png" alt="Frutin" />
                      </a>
                    </div>
                    <p className="about-text">
                      Công ty TNHH SX TM DV An Vi là một thương hiệu uy tín
                      chuyên sản xuất và phân phối các loại nấm đáp ứng được các
                      yêu cầu khắc khe của khách hàng và thị trường. Nấm An Vi
                      là thực phẩm có giá trị dinh dưỡng cao được sử dụng rộng
                      rãi làm thực phẩm, dược liệu. Đã nhận được sự tín nhiệm
                      của khách hàng và đối tác lớn.
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img
                      src="/assets/img/theme-img/title_icon.svg"
                      alt="Icon"
                    />
                    Danh Mục
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="shop.html">Nấm Bào Ngư</a>
                      </li>
                      <li>
                        <a href="shop.html">Nấm Mèo</a>
                      </li>
                      <li>
                        <a href="shop.html">Nấm Linh Chi</a>
                      </li>
                      <li>
                        <a href="shop.html">Nấm Hoàng Kim</a>
                      </li>
                      <li>
                        <a href="shop.html">Đông Trùng Hạ Thảo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">
                    <img
                      src="/assets/img/theme-img/title_icon.svg"
                      alt="Icon"
                    />
                    Links Nhanh
                  </h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <Link href="/">Trang Chủ</Link>
                      <Link href="/gioi-thieu">Giới Thiệu</Link>
                      <Link href="/cua-hang">Cửa Hàng</Link>
                      <Link href="/tin-tuc">Tin Tức</Link>
                      <Link href="/lien-he">Liên Hệ</Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">
                    <img
                      src="/assets/img/theme-img/title_icon.svg"
                      alt="Icon"
                    />
                    Contact Us
                  </h3>
                  <div className="th-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-location-dot" />
                      </div>
                      <p className="info-box_text">
                        123/9 đường số 8 KP.1 phường Linh Xuân quận Thủ Đức
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <p className="info-box_text">
                        <a href="tel:0974668639" className="info-box_link">
                          0974 668 639
                        </a>
                        <a href="tel:0933668639" className="info-box_link">
                          0933 668 639
                        </a>
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <p className="info-box_text">
                        <a
                          href="mailto:namanvi@gmail.com"
                          className="info-box_link"
                        >
                          namanvi@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="copyright-wrap"
          data-bg-src="/assets/img/bg/copyright_bg_1.png"
        >
          <div className="container">
            <div className="row gy-2 align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024{" "}
                  <a href="index.html">Design By Sikido.vn</a>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <div className="payment-img"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*********************************
			Code End  Here 
	******************************** */}
      {/* Scroll To Top */}
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
}
