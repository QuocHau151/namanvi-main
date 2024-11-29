import Link from "next/link";
import React from "react";

export default function GioiThieu() {
  return (
    <>
      <>
        <div
          className="breadcumb-wrapper"
          data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Tin Tức</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">Trang Chủ</Link>
                </li>
                <li>Tin Tức</li>
              </ul>
            </div>
          </div>
        </div>
        {/*==============================
Blog Area
==============================*/}
        <section className="th-blog-wrapper space-top space-extra-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-lg-7">
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-img">
                    <Link href="/tin-tuc/tin-tuc-chi-tiet">
                      <img
                        src="/assets/img/blog/blog-s-1-1.jpg"
                        alt="Blog Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="far fa-user" />
                        Bởi Admin
                      </a>
                      <a href="blog.html">
                        <i className="far fa-calendar" />
                        21 June, 2024
                      </a>
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        <i className="far fa-comments" />
                        Nhận xét
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        Nấm An Vi – Hành trình từ thiên nhiên đến bàn ăn của bạn
                      </a>
                    </h2>
                    <p className="blog-text">
                      Giới thiệu quy trình sản xuất nấm sạch tại An Vi, từ khâu
                      ủ phối, nuôi trồng tại Nhà Nấm cho đến bảo quản và giao
                      hàng. Cam kết 100% hữu cơ, không sử dụng hóa chất, đảm bảo
                      an toàn và giữ nguyên giá trị dinh dưỡng. Khẳng định sứ
                      mệnh mang đến những sản phẩm chất lượng cao, góp phần nâng
                      cao sức khỏe cộng đồng.
                    </p>
                    <a
                      href="/tin-tuc/tin-tuc-chi-tiet"
                      className="th-btn btn-sm"
                    >
                      Xem Thêm
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div
                    className="blog-img th-slider"
                    data-slider-options='{"effect":"fade"}'
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="/tin-tuc/tin-tuc-chi-tiet">
                          <img
                            src="/assets/img/blog/blog-s-1-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="/tin-tuc/tin-tuc-chi-tiet">
                          <img
                            src="/assets/img/blog/blog-s-1-4.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                    </div>
                    <button className="slider-arrow slider-prev">
                      <i className="far fa-arrow-left" />
                    </button>
                    <button className="slider-arrow slider-next">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="far fa-user" />
                        Bởi Admin
                      </a>
                      <a href="blog.html">
                        <i className="far fa-calendar" />
                        22 June, 2024
                      </a>
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        <i className="far fa-comments" />
                        Nhận xét
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        Lợi ích sức khỏe vượt trội từ các sản phẩm nấm sạch của
                        An Vi
                      </a>
                    </h2>
                    <p className="blog-text">
                      Nêu bật các loại nấm chính mà công ty cung cấp, như nấm
                      linh chi, đông trùng hạ thảo, nấm hương, bào ngư. Phân
                      tích chi tiết giá trị dinh dưỡng và lợi ích sức khỏe: tăng
                      cường miễn dịch, hỗ trợ tiêu hóa, cải thiện giấc ngủ và
                      giảm cholesterol. Hướng dẫn cách sử dụng và chế biến các
                      sản phẩm nấm hiệu quả nhất.
                    </p>
                    <a
                      href="/tin-tuc/tin-tuc-chi-tiet"
                      className="th-btn btn-sm"
                    >
                      Xem Thêm
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="far fa-user" />
                        Bởi Admin
                      </a>
                      <a href="blog.html">
                        <i className="far fa-calendar" />
                        23 June, 2024
                      </a>
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        <i className="far fa-comments" />
                        Nhận xét
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        Nấm An Vi – Giải pháp thực phẩm xanh, bảo vệ môi trường
                      </a>
                    </h2>
                    <p className="blog-text">
                      Trình bày phương pháp sản xuất bền vững của An Vi, như tái
                      sử dụng mùn cưa và phế phẩm nông nghiệp để nuôi trồng nấm.
                      Nhấn mạnh việc không sử dụng hóa chất trong quy trình sản
                      xuất, góp phần bảo vệ môi trường và sức khỏe người tiêu
                      dùng. Chia sẻ tầm nhìn của công ty trong việc xây dựng một
                      hệ sinh thái bền vững, hài hòa với thiên nhiên.
                    </p>
                    <a
                      href="/tin-tuc/tin-tuc-chi-tiet"
                      className="th-btn btn-sm"
                    >
                      Xem Thêm
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div
                    className="blog-img"
                    data-overlay="title"
                    data-opacity={4}
                  >
                    <a href="/tin-tuc/tin-tuc-chi-tiet">
                      <img
                        src="/assets/img/blog/blog-s-1-3.jpg"
                        alt="Blog Image"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="far fa-user" />
                        Bởi Admin
                      </a>
                      <a href="blog.html">
                        <i className="far fa-calendar" />
                        24 June, 2024
                      </a>
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        <i className="far fa-comments" />
                        Nhận xét
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <a href="/tin-tuc/tin-tuc-chi-tiet">
                        Câu chuyện khách hàng: Vì sao tôi chọn nấm An Vi?
                      </a>
                    </h2>
                    <p className="blog-text">
                      Trích dẫn các ý kiến, cảm nhận chân thực của khách hàng về
                      chất lượng nấm, dịch vụ chăm sóc khách hàng và chính sách
                      giao hàng. Câu chuyện của một khách hàng tiêu biểu: nấm An
                      Vi đã giúp họ cải thiện sức khỏe như thế nào hoặc mang đến
                      trải nghiệm nấu ăn ra sao. Kêu gọi cộng đồng cùng trải
                      nghiệm sản phẩm và chia sẻ cảm nhận với công ty.
                    </p>
                    <a
                      href="/tin-tuc/tin-tuc-chi-tiet"
                      className="th-btn btn-sm"
                    >
                      Xem Thêm
                      <i className="fas fa-chevrons-right ms-2" />
                    </a>
                  </div>
                </div>

                <div className="th-pagination text-center">
                  <ul>
                    <li>
                      <a href="blog.html">1</a>
                    </li>
                    <li>
                      <a href="blog.html">2</a>
                    </li>
                    <li>
                      <a href="blog.html">3</a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-5">
                <aside className="sidebar-area">
                  <div className="widget widget_search">
                    <form className="search-form">
                      <input type="text" placeholder="Enter Keyword" />
                      <button type="submit">
                        <i className="far fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget widget_categories">
                    <h3 className="widget_title">Danh Mục</h3>
                    <ul>
                      <li>
                        <a href="blog.html">Nấm Bào Ngư</a>
                        <span>(8)</span>
                      </li>
                      <li>
                        <a href="blog.html">Nấm Mèo</a>
                        <span>(10)</span>
                      </li>
                      <li>
                        <a href="blog.html">Nấm Linh Chi</a>
                        <span>(12)</span>
                      </li>
                      <li>
                        <a href="blog.html">Đông Trùng Hạ Thảo</a>
                        <span>(6)</span>
                      </li>

                      <li>
                        <a href="blog.html">Các Loại Nấm Khác</a>
                        <span>(11)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h3 className="widget_title">Bài Viết Nổi Bật</h3>
                    <div className="recent-post-wrap">
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/tin-tuc/tin-tuc-chi-tiet">
                            <img
                              src="/assets/img/blog/recent-post-1-1.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="/tin-tuc/tin-tuc-chi-tiet"
                            >
                              Câu chuyện khách hàng: Vì sao tôi chọn nấm An Vi?
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="far fa-calendar" />
                              21 June, 2024
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/tin-tuc/tin-tuc-chi-tiet">
                            <img
                              src="/assets/img/blog/recent-post-1-2.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="/tin-tuc/tin-tuc-chi-tiet"
                            >
                              Nấm An Vi – Giải pháp thực phẩm xanh, bảo vệ môi
                              trường
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="far fa-calendar" />
                              22 June, 2024
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img">
                          <a href="/tin-tuc/tin-tuc-chi-tiet">
                            <img
                              src="/assets/img/blog/recent-post-1-3.jpg"
                              alt="Blog Image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <a
                              className="text-inherit"
                              href="/tin-tuc/tin-tuc-chi-tiet"
                            >
                              Nấm An Vi – Hành trình từ thiên nhiên đến bàn ăn
                              của bạn
                            </a>
                          </h4>
                          <div className="recent-post-meta">
                            <a href="blog.html">
                              <i className="far fa-calendar" />
                              23 June, 2024
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h3 className="widget_title">Từ Khoá Nổi Bật</h3>
                    <div className="tagcloud">
                      <a href="blog.html">Nấm</a>
                      <a href="blog.html">Nấm Bào Ngư</a>
                      <a href="blog.html">Nấm Bào Ngư Nhật</a>
                      <a href="blog.html">Nấm Mèo</a>
                      <a href="blog.html">Nấm Linh Chi</a>
                      <a href="blog.html">Đông Trùng Hạ Thảo</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
