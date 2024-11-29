import React from "react";

export default function GioiThieu() {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Liên Hệ</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Trang Chủ</a>
              </li>
              <li>Liên Hệ</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
Contact Info Area  
==============================*/}
      <div className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-7">
              <div className="title-area text-center">
                <h2 className="sec-title">Hãy liên lạc với chúng tôi</h2>
                <p className="sec-text">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn! Nếu bạn có
                  bất kỳ câu hỏi nào về sản phẩm, dịch vụ hoặc cần tư vấn thêm,
                  đừng ngần ngại liên hệ với chúng tôi qua các kênh dưới đây
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon">
                  <i className="fa-light fa-location-dot" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Địa Chỉ</h3>
                  <p className="box-text">
                    123/9 Đường số 8, KP1, Phường Linh Xuân, Quận Thủ Đức,
                    TP.Thủ Đức
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon bg-theme2">
                  <i className="fa-light fa-phone" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Số Điện Thoại</h3>
                  <p className="box-text">
                    <a href="tel:0974668639">0974 668 639</a>
                    <a href="tel:0933668639">0933 668 639</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="box-icon bg-title">
                  <i className="fa-light fa-envelope" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Email</h3>
                  <p className="box-text">
                    <a href="mailto:">namanvi@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-feature">
                <div className="media-body">
                  <h3 className="box-title">Mạng Xã Hội</h3>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a target="_blank" href="https://pinterest.com/">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*==============================
Contact Area   
==============================*/}
      <div className="space-bottom">
        <div className="container">
          <form
            action="mail.php"
            method="POST"
            className="contact-form input-smoke ajax-contact"
          >
            <h2 className="sec-title">Để Lại Thông Tin</h2>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Tên Của Bạn"
                />
                <i className="fal fa-user" />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Địa Chỉ Email"
                />
                <i className="fal fa-envelope" />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  name="number"
                  id="number"
                  placeholder="Số Điện Thoại"
                />
                <i className="fal fa-phone" />
              </div>
              <div className="form-group col-md-6">
                <select name="subject" id="subject" className="form-select">
                  <option value="" disabled selected hidden>
                    Chọn Chủ Đề
                  </option>
                  <option value="Organic Food">Mua Nấm</option>
                  <option value="Fresh Fruits">Đại lý</option>
                  <option value="Fresh Vegetable">Bán Lẻ</option>
                </select>
                <i className="fal fa-chevron-down" />
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={3}
                  className="form-control"
                  placeholder="Ghi Chứ"
                  defaultValue={""}
                />
                <i className="fal fa-pencil" />
              </div>
              <div className="form-btn col-12">
                <button className="th-btn btn-fw">
                  Gửi Thông Tin
                  <i className="fas fa-chevrons-right ms-2" />
                </button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3" />
          </form>
        </div>
      </div>
      {/*==============================
Map Area  
==============================*/}
      <div className="space-bottom">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.164397471067!2d106.77407297546641!3d10.879061057291372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d88420f5c581%3A0x560bc812fb21b265!2zMTIzLzkgxJAuIFPhu5EgOCwgS1AxLCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e1!3m2!1sen!2s!4v1732863814814!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
