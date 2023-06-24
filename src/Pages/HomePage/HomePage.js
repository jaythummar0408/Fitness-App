import React from 'react'
import HeroSection from '../../Component/HeroSection'
import Navbar from '../../Component/Navbar'
import About from '../../Component/About'
import Services from '../../Component/Services'
import Class from '../../Component/Class'
import Discount from '../../Component/Discount'
import Price from '../../Component/Price'
import Testimonial from '../../Component/Testimonial'
import Team from '../../Component/Team'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'
import aboutImg from '../../img/about.png';
import class1 from '../../img/class-1.jpg'
import hero from '../../img/hero.png';
import teacher1 from '../../img/teacher-1.png'
const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section  */}
      <div class="hero">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-6">
              <div class="hero-text">
                <h1>Yoga Practice For Good Health</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                </p>
                <div class="hero-btn">
                  <a class="btn" href="">Join Now</a>
                  <a class="btn" href="">Contact Us</a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 d-none d-md-block">
              <div class="hero-image">
                <img src={hero} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <div class="about-img">
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
            <div class="col-lg-7 col-md-6">
              <div class="section-header text-left">
                <p>Learn About Us</p>
                <h2>Welcome to Yooga</h2>
              </div>
              <div class="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                </p>
                <a class="btn" href="">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services  */}
      <div class="service">
        <div class="container">
          <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>What we do</p>
            <h2>Yoga For Health</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout"></i>
                </div>
                <h3>Heal emotions</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="service-item active">
                <div class="service-icon">
                  <i class="flaticon-workout-1"></i>
                </div>
                <h3>Body Refreshes</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-2"></i>
                </div>
                <h3>Mind & Serenity</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-3"></i>
                </div>
                <h3>Enjoy Your life</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-4"></i>
                </div>
                <h3>Body & Spirituality</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-yoga-pose"></i>
                </div>
                <h3>Body & Mind</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Class  */}
      <div class="class">
        <div class="container">
          <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Our Classes</p>
            <h2>Yoga Class Shedule</h2>
          </div>
          <div class="row">
            <div class="col-12">
              <ul id="class-filter">
                <li data-filter="*" class="filter-active">All Classes</li>
                <li data-filter=".filter-1">Pilates Yoga</li>
                <li data-filter=".filter-2">Hatha Yoga</li>
                <li data-filter=".filter-3">Vinyasa yoga</li>
              </ul>
            </div>
          </div>
          <div class="row class-container">
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
              <div class="class-wrap">
                <div class="class-img">
                  <img src={class1} alt="Image" />
                </div>
                <div class="class-text">
                  <div class="class-teacher">
                    <img src={teacher1} alt="Image" />
                    <h3>Elise Moran</h3>
                    <a href="">+</a>
                  </div>
                  <h2>Pilates Yoga</h2>
                  <div class="class-meta">
                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Discount  */}
      <div class="discount wow zoomIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="section-header text-center">
            <p>Awesome Discount</p>
            <h2>Get <span>30%</span> Discount for all Classes</h2>
          </div>
          <div class="container discount-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
            </p>
            <a class="btn">Join Now</a>
          </div>
        </div>
      </div>

      {/* Price  */}
      <div class="price">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Yoga Package</p>
                    <h2>Yoga Pricing Plan</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="price-item">
                            <div class="price-header">
                                <div class="price-title">
                                    <h2>Basic</h2>
                                </div>
                                <div class="price-prices">
                                    <h2><small>$</small>49<span>/ mo</span></h2>
                                </div>
                            </div>
                            <div class="price-body">
                                <div class="price-description">
                                    <ul>
                                        <li>Personal Trainer</li>
                                        <li>Special Class</li>
                                        <li>Free Tutorials</li>
                                        <li>Group Training</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="price-footer">
                                <div class="price-action">
                                    <a class="btn" href="">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="price-item featured-item">
                            <div class="price-header">
                                <div class="price-status">
                                    <span>Popular</span>
                                </div>
                                <div class="price-title">
                                    <h2>Standard</h2>
                                </div>
                                <div class="price-prices">
                                    <h2><small>$</small>99<span>/ mo</span></h2>
                                </div>
                            </div>
                            <div class="price-body">
                                <div class="price-description">
                                    <ul>
                                        <li>Personal Trainer</li>
                                        <li>Special Class</li>
                                        <li>Free Tutorials</li>
                                        <li>Group Training</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="price-footer">
                                <div class="price-action">
                                    <a class="btn" href="">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="price-item">
                            <div class="price-header">
                                <div class="price-title">
                                    <h2>Premium</h2>
                                </div>
                                <div class="price-prices">
                                    <h2><small>$</small>149<span>/ mo</span></h2>
                                </div>
                            </div>
                            <div class="price-body">
                                <div class="price-description">
                                    <ul>
                                        <li>Personal Trainer</li>
                                        <li>Special Class</li>
                                        <li>Free Tutorials</li>
                                        <li>Group Training</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="price-footer">
                                <div class="price-action">
                                    <a class="btn" href="">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Team />
      <Footer />
</>
  )
}

export default HomePage