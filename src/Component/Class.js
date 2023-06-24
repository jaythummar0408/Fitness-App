import React from 'react'
import class1 from '../img/class-1.jpg'
import teacher1 from '../img/teacher-1.png'
const Class = () => {
  return (
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
  )
}

export default Class