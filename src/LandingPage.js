import React, { useState, useEffect } from "react";

import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  NavDropdown,
  Card,
  Accordion,
  Button,
} from "react-bootstrap";

import {
  RiStoreLine,
  RiBarChartBoxLine,
  RiCalendarTodoLine,
  RiPaintBrushLine,
  RiDatabase2Line,
  RiGradienterLine,
  RiFileList3Line,
  RiPriceTag2Line,
  RiAnchorLine,
  RiDiscLine,
  RiBaseStationLine,
  RiFingerprintLine,
} from "react-icons/ri";

/*https://react-icons.github.io/react-icons/icons?name=bi */
import { BiSmile, BiSpreadsheet, BiHeadphone, BiGroup } from "react-icons/bi";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "glightbox/dist/css/glightbox.min.css";

import "./assets/css/style.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";

import "./assets/css/navbar.css"; // importieren Sie eine zusätzliche CSS-Datei für das Styling

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle =
    scrollPos > 50
      ? {
          height: "60px",
          backgroundColor: "rgba(1, 4, 136, 0.9)",
          transition: "height 0.5s, background-color 0.5s",
        }
      : {
          height: "80px",
          backgroundColor: "transparent",
          transition: "height 0.5s, background-color 0.5s",
        };

  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
      style={headerStyle}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <span>Bootslander</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
        </div>

        <Navbar expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link scrollto active" href="#hero">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link scrollto" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link scrollto" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="nav-link scrollto" href="#gallery">
                Gallery
              </Nav.Link>
              <Nav.Link className="nav-link scrollto" href="#team">
                Team
              </Nav.Link>
              <Nav.Link className="nav-link scrollto" href="#pricing">
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Deep Drop Down 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Deep Drop Down 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Deep Drop Down 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Deep Drop Down 4</NavDropdown.Item>
                <NavDropdown.Item href="#">Deep Drop Down 5</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-link scrollto" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <i className="bi bi-list mobile-nav-toggle"></i>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <div className="container">
        <Row className="justify-content-between">
          <Col
            lg={7}
            className="pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
          >
            <div data-aos="zoom-out">
              <h1>
                Build Your Landing Page With <span>Bootstlander</span>
              </h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className="text-center text-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className="order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/hero-img.png"
              className="img-fluid animated"
              alt=""
            />
          </Col>
        </Row>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
            data-aos="fade-right"
          >
            <a
              href="https://www.youtube.com/watch?v=StpBR2W8G5A"
              className="glightbox play-btn mb-4"
            />
          </div>
          <div
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
            data-aos="fade-left"
          >
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
              voluptate sed facere corporis dolores excepturi. Libero laboriosam
              sint et id nulla tenetur. Suscipit aut voluptate.
            </p>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon">
                <i className="bx bx-fingerprint" />
              </div>
              <h4 className="title">
                <a href="#z">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon">
                <i className="bx bx-gift" />
              </div>
              <h4 className="title">
                <a href="#z">Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon">
                <i className="bx bx-atom" />
              </div>
              <h4 className="title">
                <a href="#z">Dine Pad</a>
              </h4>
              <p className="description">
                Explicabo est voluptatum asperiores consequatur magnam. Et
                veritatis odit. Sunt aut deserunt minus aut eligendi omnis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Check The Features</p>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
              <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
              <h3>
                <a href="#z">Lorem Ipsum</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
              <i
                className="ri-bar-chart-box-line"
                style={{ color: "#5578ff" }}
              />
              <h3>
                <a href="#z">Dolor Sitema</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
              <i
                className="ri-calendar-todo-line"
                style={{ color: "#e80368" }}
              />
              <h3>
                <a href="#z">Sed perspiciatis</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
              <i className="ri-paint-brush-line" style={{ color: "#e361ff" }} />
              <h3>
                <a href="#z">Magni Dolores</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={250}>
              <i className="ri-database-2-line" style={{ color: "#47aeff" }} />
              <h3>
                <a href="#z">Nemo Enim</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
              <i className="ri-gradienter-line" style={{ color: "#ffa76e" }} />
              <h3>
                <a href="#z">Eiusmod Tempor</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={350}>
              <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }} />
              <h3>
                <a href="#z">Midela Teren</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
              <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }} />
              <h3>
                <a href="#z">Pira Neve</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={450}>
              <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
              <h3>
                <a href="#z">Dirada Pack</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={500}>
              <i className="ri-disc-line" style={{ color: "#b20969" }} />
              <h3>
                <a href="#z">Moton Ideal</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={550}>
              <i
                className="ri-base-station-line"
                style={{ color: "#ff5828" }}
              />
              <h3>
                <a href="#z">Verdo Park</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={600}>
              <i className="ri-fingerprint-line" style={{ color: "#29cc61" }} />
              <h3>
                <a href="#z">Flavor Nivelanda</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counts() {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={232}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={521}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={1463}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section id="details" className="details">
      <div className="container">
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/details-1.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check" /> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check" /> Iure at voluptas aspernatur
                dignissimos doloribus repudiandae.
              </li>
              <li>
                <i className="bi bi-check" /> Est ipsa assumenda id facilis
                nesciunt placeat sed doloribus praesentium.
              </li>
            </ul>
            <p>
              Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita
              omnis eum consequatur non. Sed in asperiores aut repellendus.
              Error quisquam ab maiores. Quibusdam sit in officia
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/details-2.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
            <p>
              Inventore id enim dolor dicta qui et magni molestiae. Mollitia
              optio officia illum ut cupiditate eos autem. Soluta dolorum
              repellendus repellat amet autem rerum illum in. Quibusdam
              occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/details-3.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>
              Sunt consequatur ad ut est nulla consectetur reiciendis animi
              voluptas
            </h3>
            <p>
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
              quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas
              dolor doloremque.
            </p>
            <ul>
              <li>
                <i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check" /> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check" /> Facilis ut et voluptatem aperiam.
                Autem soluta ad fugiat.
              </li>
            </ul>
            <p>
              Qui consequatur temporibus. Enim et corporis sit sunt harum
              praesentium suscipit ut voluptatem. Et nihil magni debitis
              consequatur est.
            </p>
            <p>
              Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit
              excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/details-4.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>
              Quas et necessitatibus eaque impedit ipsum animi consequatur
              incidunt in
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
            <ul>
              <li>
                <i className="bi bi-check" /> Et praesentium laboriosam
                architecto nam .
              </li>
              <li>
                <i className="bi bi-check" /> Eius et voluptate. Enim earum
                tempore aliquid. Nobis et sunt consequatur. Aut repellat in
                numquam velit quo dignissimos et.
              </li>
              <li>
                <i className="bi bi-check" /> Facilis ut et voluptatem aperiam.
                Autem soluta ad fugiat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Check our Gallery</p>
        </div>
        <div className="row g-0" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-1.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-2.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-3.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={250}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-4.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-5.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-5.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={350}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-6.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-6.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-7.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-7.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="gallery-item"
              data-aos="zoom-in"
              data-aos-delay={450}
            >
              <a
                href="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-8.jpg"
                className="gallery-lightbox"
              >
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-8.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SwiperCore.use([Pagination]);

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our Great Team</p>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pic">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="#z">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="member" data-aos="zoom-in" data-aos-delay={200}>
              <div className="pic">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href="#z">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="member" data-aos="zoom-in" data-aos-delay={300}>
              <div className="pic">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href="#z">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="member" data-aos="zoom-in" data-aos-delay={400}>
              <div className="pic">
                <img
                  src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social">
                  <a href="#z">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#z">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-6">
            <div className="box" data-aos="zoom-in" data-aos-delay={100}>
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#z" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div
              className="box featured"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <h3>Business</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#z" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay={300}>
              <h3>Developer</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#z" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay={400}>
              <span className="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#z" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                href="#z"
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                href="#z"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                Feugiat scelerisque varius morbi enim nunc?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                href="#z"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Dolor sit amet consectetur adipiscing elit?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                href="#z"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                href="#z"
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay={100}>
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 mt-5 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Bootslander</h3>
                <p className="pb-3">
                  <em>
                    Qui repudiandae et eum dolores alias sed ea. Qui suscipit
                    veniam excepturi quod.
                  </em>
                </p>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#z" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#z" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#z" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#z" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#z" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#z">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#z">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Bootslander</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

function addScripts() {
  return (
    <div>
      <a
        href="#z"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* <div id="preloader" /> */}
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </div>
  );
}

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <main id="main">
        <About />
        <Features />
        <Counts />
        <Details />
        <Gallery />
        <Testimonials />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {addScripts()}
    </div>
  );
}

export default LandingPage;
