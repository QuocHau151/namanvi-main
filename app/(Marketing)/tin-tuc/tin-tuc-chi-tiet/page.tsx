import React from "react";

export default function TinTucChiTiet() {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Details</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Trang Chủ</a>
              </li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
  Blog Area
    ==============================*/}
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img src="/assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="blog.html">
                      <i className="far fa-user" />
                      By Frutin
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar" />
                      21 June, 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="far fa-comments" />
                      Comments (3)
                    </a>
                  </div>
                  <h2 className="blog-title">
                    Change Your Eating Habits With Organic Food
                  </h2>
                  <p>
                    Organic food is produced without the use of synthetic
                    pesticides, herbicides, genetically modified organisms
                    (GMOs), or artificial fertilizers. Instead, organic farming
                    relies on natural methods like crop rotation, composting,
                    and biological pest control. Animals raised for organic
                    meat, eggs, and dairy products are typically given organic
                    feed and have access to the outdoors, allowing for more
                    humane and natural living conditions.
                  </p>
                  <p>
                    First and foremost, organic food is nutrient-rich. Organic
                    fruits, vegetables, and grains are often found to be richer
                    in essential nutrients, such as vitamins and minerals,
                    compared to conventionally grown produce. These
                    nutrient-dense foods can help support your overall health
                    and well-being. Additionally, organic farming practices
                    prioritize.
                  </p>
                  <blockquote>
                    <p>
                      Choose organic food, not only for a healthier you but for
                      a happier planet tos a conscious choice that nourishes
                      both body and Earth.
                    </p>
                    <cite>Michel Clarck</cite>
                  </blockquote>
                  <p>
                    Organic farming methods are designed to minimize soil
                    erosion, reduce pollution, and conserve water. By choosing
                    organic food, you are supporting sustainable agricultural
                    practices that protect the planet. Furthermore, organic food
                    is non-GMO by definition, so you can be sure thare not
                    consuming genetically modified organisms, which some people
                    prefer to avoid due to potential health and environmental
                    concerns.
                  </p>
                  <p>
                    Many people find that organic produce has a fresher, more
                    natural taste compared to conventionally grown counterparts.
                    This can make your meals more enjoyable and encourage you to
                    eat more fruits and vegetables. Moreover, choosing organic
                    often means supporting local, small-scale farmers who
                    prioritize sustainable and ethical farming practices. This
                    helps create a more resilient and diverse food system.
                  </p>
                  <h3 className="h5 mt-40">
                    Tips for Incorporating More Organic Food
                  </h3>
                  <p>
                    To make the transition to an organic diet smoother, start be
                    a great way to find fresh, organic produce while connecting
                    with local farmers. When buying packaged or processed foods,
                    always look for the organic certification.
                  </p>
                  <div className="row mt-15">
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-20"
                        src="/assets/img/blog/blog_inner_1.jpg"
                        alt="Blog Image"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <img
                        className="w-100 rounded-20"
                        src="/assets/img/blog/blog_inner_2.jpg"
                        alt="Blog Image"
                      />
                    </div>
                  </div>
                  <p>
                    {" "}
                    Consider planting a small organic garden at home or joining
                    a Community Supported Agriculture (CSA) program to enjoy
                    fresh, pesticide-free produce regularly. Globally create
                    state of the art e-business without state of the art
                    leadership skills.
                  </p>
                  <p className="mb-n2">
                    Changing your eating habits to include more organic food is
                    a positive step towards better health for both you and the
                    planet. While it may require some adjustment and investment,
                    the long-term benefits are well worth it. So, take the first
                    step today and make organic food a more significant part of
                    your diet. Your body and the Earth will thank you.
                  </p>
                  <div className="share-links clearfix">
                    <div className="row justify-content-between">
                      <div className="col-sm-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          <a href="blog.html">Agriculture</a>
                          <a href="blog.html">Organic</a>
                        </div>
                      </div>
                      <div className="col-sm-auto text-xl-end">
                        <span className="share-links-title">Share On:</span>
                        <div className="th-social">
                          <a href="https://facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a href="https://instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        {/* End Social Share */}
                      </div>
                      {/* Share Links Area end */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="th-comments-wrap">
                <h2 className="blog-inner-title h4">
                  <i className="far fa-comments" /> Comments (03)
                </h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/assets/img/blog/comment-author-1.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="far fa-calendar" />
                          14 March, 2023
                        </span>
                        <h3 className="name">Adam Jhon</h3>
                        <p className="text">
                          Collaboratively empower multifunctional e-commerce for
                          prospective applications. Seamlessly productivate plug
                          and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img
                              src="/assets/img/blog/comment-author-2.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <span className="commented-on">
                              <i className="far fa-calendar" />
                              15 March, 2023
                            </span>
                            <h3 className="name">Jusctin Dacon</h3>
                            <p className="text">
                              Competently provide access to fully researched
                              methods of empowerment without sticky models.
                            </p>
                            <div className="reply_and_edit">
                              <a href="blog-details.html" className="reply-btn">
                                <i className="fas fa-reply" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/assets/img/blog/comment-author-3.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="far fa-calendar" />
                          16 March, 2023
                        </span>
                        <h3 className="name">Jacklin July</h3>
                        <p className="text">
                          Collaboratively empower multifunctional e-commerce for
                          prospective applications. Seamlessly productivate plug
                          and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* Comment end */} {/* Comment Form */}
              <div className="th-comment-form">
                <div className="form-title">
                  <h3 className="blog-inner-title h4 mb-2">
                    <i className="fa-solid fa-reply" /> Leave a Comment
                  </h3>
                  <p className="form-text">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="form-control"
                    />
                    <i className="far fa-user" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email*"
                      className="form-control"
                    />
                    <i className="far fa-envelope" />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                    />
                    <i className="far fa-globe" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Write a Comment*"
                      className="form-control"
                      defaultValue={""}
                    />
                    <i className="far fa-pencil" />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="th-btn">Post Comment</button>
                  </div>
                </div>
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
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <a href="blog.html">Agriculture</a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="blog.html">Bread &amp; Bakery</a>
                      <span>(10)</span>
                    </li>
                    <li>
                      <a href="blog.html">Dairy Milk</a>
                      <span>(12)</span>
                    </li>
                    <li>
                      <a href="blog.html">Organic Foods</a>
                      <span>(6)</span>
                    </li>
                    <li>
                      <a href="blog.html">Fresh Vegetable</a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="blog.html">Fresh Fruits</a>
                      <span>(11)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="/assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Change Your Eating Habits With Organic Food
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
                        <a href="blog-details.html">
                          <img
                            src="/assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Transform Your Nutrition with Organic Meal
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
                        <a href="blog-details.html">
                          <img
                            src="/assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Improve Your Health By Organic Eating
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
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="blog.html">Agriculture</a>
                    <a href="blog.html">Dairy</a>
                    <a href="blog.html">Organic</a>
                    <a href="blog.html">Farm</a>
                    <a href="blog.html">Vegetable</a>
                    <a href="blog.html">Fruits</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
