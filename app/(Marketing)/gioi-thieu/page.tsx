import React from "react";

export default function GioiThieu() {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Giới Thiệu</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Trang Chủ</a>
              </li>
              <li>Giới Thiệu</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
About Area  
==============================*/}
      <div className="space overflow-hidden" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_1_2.jpg" alt="Image" />
                </div>
                <div className="shape1 movingX">
                  <img src="assets/img/normal/about_1_3.png" alt="Image" />
                </div>
                <div className="year-counter">
                  <div className="year-counter_number">
                    <span className="counter-number">10</span>+
                  </div>
                  <p className="year-counter_text">Năm Kinh Nghiệm</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-5 ps-xl-2 ms-xl-1 text-xl-start text-center">
                <div className="title-area mb-32">
                  <span className="sub-title">
                    <img
                      src="assets/img/theme-img/title_icon.svg"
                      alt="shape"
                    />
                    Thông Tin Về Công Ty Chúng Tôi
                  </span>
                  <h2 className="sec-title">Nấm An Vi sản xuất nấm sạch</h2>
                  <p className="sec-text">
                    Công ty TNHH SX TM DV An Vi là một thương hiệu uy tín chuyên
                    sản xuất và phân phối các loại nấm đáp ứng được các yêu cầu
                    khắc khe của khách hàng và thị trường. Nấm An Vi là thực
                    phẩm có giá trị dinh dưỡng cao được sử dụng rộng rãi làm
                    thực phẩm, dược liệu. Đã nhận được sự tín nhiệm của khách
                    hàng và đối tác lớn.
                  </p>
                </div>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="box-icon">
                      <img
                        src="assets/img/icon/about_feature_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="box-title">Nấm ăn đạt chuẩn</h3>
                  </div>
                  <div className="about-feature">
                    <div className="box-icon">
                      <img
                        src="assets/img/icon/about_feature_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <h3 className="box-title">Quy trình sạch 100%</h3>
                  </div>
                </div>
                <div>
                  <a href="about.html" className="th-btn">
                    Tìm hiểu thêm
                    <i className="fas fa-chevrons-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
Counter Area  
==============================*/}
      <div
        className="counter-sec11"
        data-bg-src="assets/img/bg/counter_bg_1_1.jpg"
      >
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_1.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">3000</span>+
                </h2>
                <p className="box-text">Tổng sản phẩm</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_2.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">100</span>+
                </h2>
                <p className="box-text">Nhân sự</p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_3.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">1000</span>+
                </h2>
                <p className="box-text">Khách hàng </p>
              </div>
            </div>
            <div className="divider" />
            <div className="counter-card">
              <div className="box-icon">
                <img src="assets/img/icon/counter_card_4.svg" alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">50</span>+
                </h2>
                <p className="box-text">Chứng chỉ an toàn</p>
              </div>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>
      {/*==============================
Feature Area  
==============================*/}
      <div className="space overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 text-xl-start text-center">
              <div className="title-area">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  Tại sao chọn chúng tôi
                </span>
                <h2 className="sec-title">
                  Với hơn 10 năm kinh nghiệm trồng nấm sạch
                </h2>
                <p className="sec-text">
                  Công Ty TNHH SX TM DV An Vi tự hào sở hữu hơn 10 năm kinh
                  nghiệm trong lĩnh vực trồng nấm sạch. Chúng tôi đã không ngừng
                  nghiên cứu và cải tiến quy trình sản xuất để mang đến những
                  sản phẩm nấm chất lượng cao, an toàn cho sức khỏe và thân
                  thiện với môi trường.
                </p>
              </div>
            </div>
          </div>
          <div className="text-xl-start text-center">
            <div className="choose-feature-area">
              <div className="row">
                <div className="col-xl-7">
                  <div className="choose-feature-wrap">
                    <div className="choose-feature">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/choose_feature_1.svg"
                          alt="Icon"
                        />
                      </div>
                      <h3 className="box-title">100% Organic</h3>
                      <p className="box-text">
                        Nấm sạch, hữu cơ, không hóa chất, an toàn tuyệt đối.
                      </p>
                    </div>
                    <div className="choose-feature">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/choose_feature_2.svg"
                          alt="Icon"
                        />
                      </div>
                      <h3 className="box-title">Sản phẩm tươi mới</h3>
                      <p className="box-text">
                        Luôn đảm bảo nấm tươi ngon, giàu giá trị dinh dưỡng.
                      </p>
                    </div>
                    <div className="choose-feature">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/choose_feature_3.svg"
                          alt="Icon"
                        />
                      </div>
                      <h3 className="box-title">Vệ sinh an toàn</h3>
                      <p className="box-text">
                        Quy trình sản xuất đạt chuẩn, đảm bảo an toàn thực phẩm.
                      </p>
                    </div>
                    <div className="choose-feature">
                      <div className="box-icon">
                        <img
                          src="assets/img/icon/choose_feature_4.svg"
                          alt="Icon"
                        />
                      </div>
                      <h3 className="box-title">Bảo vệ môi trường</h3>
                      <p className="box-text">
                        Nuôi trồng bền vững, thân thiện với môi trường tự nhiên.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  <div className="img-box2-wrap">
                    <div className="img-box2">
                      <div className="img1">
                        <img src="assets/img/normal/why_1_1.webp" alt="Why" />
                      </div>
                      <div className="img2">
                        <img src="assets/img/normal/why_1_2.png" alt="Why" />
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
       */}
    </>
  );
}
