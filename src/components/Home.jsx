import React from 'react';
// import resume from '../../public/NivethaResume.pdf';

const Home = () => {

  function sendMain() {
      const name = document.querySelector('.cname').value
      const email = document.querySelector('.cmail').value
      const message = document.querySelector('.cmsg').value

      if(name && email && message ){
        const mailtoLink = `mailto:nivethamaniofficial@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.location.href = mailtoLink
      }
    }
  
  return (
    <>
      {/*===== HEADER =====*/}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo" style={{textDecoration:"none"}}>Nivetha</a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link" style={{textDecoration:"none"}}>Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link" style={{textDecoration:"none"}}>About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link" style={{textDecoration:"none"}}>Skills</a></li>
              <li className="nav__item"><a href="#work" className="nav__link" style={{textDecoration:"none"}}>Projects</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link" style={{textDecoration:"none"}}>Contact</a></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/*===== HOME =====*/}
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi,<br />I&apos;m <span className="home__title-color">Nivetha</span><br /> Front-end Developer
            </h1>
            <a href="#contact" className="button" style={{textDecoration:"none"}}>Contact</a>
          </div>

          <div className="home__social">
            {/* <a href="#" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="#" className="home__social-icon"><i className='bx bxl-behance'></i></a> */}
            {/* <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nivethamaniofficial@gmail.com" className="home__social-icon"><i className='bx bx-envelope'></i></a> */}
            <a href="mailto:nivethamaniofficial@gmail.com" className="home__social-icon"><i className='bx bx-envelope'></i></a>
            <a href="https://github.com/Nivetha-08" className="home__social-icon"><i className='bx bxl-github'></i></a>
            <a href="https://t.me/NivethaMani" className="home__social-icon"><i className='bx bxl-telegram'></i></a>
          </div>

          <div className="home__img">
                    <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image className="home__blob-img" x="50" y="60" href="assets/img/perfil (2).png"/>
                        </g>
                    </svg>
                </div>
        </section>

        {/*===== ABOUT =====*/}
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="/assets/img/about.jpg" alt="About" />
            </div>
            <div>
              <h2 className="about__subtitle">I'm Nivetha</h2>
              <p className="about__text">I'm a dedicated <b>Front-End Developer with one year of experience</b> building responsive and user-friendly web interfaces. 
                                         I have a strong foundation in HTML, CSS, JavaScript, TypeScript and React, and I enjoy turning complex problems into simple, interactive solutions. 
                                         My work focuses on creating clean and accessible user experience, interacting API's and ensuring seamless performance across devices and browsers. 
                                         I'm always eager to learn new technologies and continuously improve my skills to build better, faster, and more intuitive web applications. 
              </p>
              {/* <button className="button" style={{border:"none"}}>Download CV</button> */}
              <a href="/NivethaResume.pdf" download="Nivetha-Resume.pdf" className='btn btn-primary'>Download CV</a>
            </div>
          </div>
        </section>

        {/*===== SKILLS =====*/}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div>
              {/* <h2 className="skills__subtitle">Professional Skills</h2> */}
              {/* <p className="skills__text">Lorem ipsum dolor sit amet...</p> */}
              {["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"].map((skill, index) => (
                <div className="skills__data" key={index}>
                  <div className="skills__names">
                    <i className={`bx bxl-${skill.toLowerCase().replace('/', '')} skills__icon`}></i>
                    <span className="skills__name">{skill}</span>
                  </div>
                  <div className={`skills__bar skills__${skill.toLowerCase().split('/')[0]}`}></div>
                  <div><span className="skills__percentage text-secondary">{['intermediate', 'intermediate', 'intermediate', 'intermediate',][index]}</span></div>
                </div>
              ))}
            </div>
            {/* <div>
              <img src="/assets/img/work3.jpg" alt="Skills" className="skills__img" />
            </div> */}
            <div> 
              {/* <h2 className="skills__subtitle">Professional Skills</h2> */}
              {/* <p className="skills__text">Lorem ipsum dolor sit amet...</p> */}
              {["REACT","REDUX","GIT","GITHUB"].map((skill, index) => (
                <div className="skills__data" key={index}>
                  <div className="skills__names">
                    <i className={`bx bxl-${skill.toLowerCase().replace('/', '')} skills__icon`}></i>
                    <span className="skills__name">{skill}</span>
                  </div>
                  <div className={`skills__bar skills__${skill.toLowerCase().split('/')[0]}`}></div>
                  <div><span className="skills__percentage text-secondary">{['intermediate', 'intermediate', 'intermediate', 'intermediate',][index]}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*===== WORK =====*/}
        <section className="work section" id="work">
          <h2 className="section-title">Projects</h2>
          <div className="work__container bd-grid">
            {[
  {
    id: 1,
    img: '/assets/img/work1.jpg',
    preview: 'https://nexora-green.vercel.app',
    live: 'https://github.com/Nivetha-08/Nexora-Website',
    proname: 'Nexora Website'
  },
  {
    id: 2,
    img: '/assets/img/work2.jpg',
    preview: 'https://kaira-weld.vercel.app',
    live: 'https://github.com/Nivetha-08/Kaira-Shopping-Page',
    proname: 'Kaira Shopping Page'
  },
  {
    id: 3,
    img: '/assets/img/work3.jpg',
    preview: 'https://todo-one-sable-64.vercel.app',
    live: 'https://github.com/Nivetha-08/Todo-App',
    proname: 'Todo App'
  },
  {
    id: 4,
    img: '/assets/img/work4.jpg',
    preview: 'https://fruitsapp-kappa.vercel.app',
    live: 'https://github.com/Nivetha-08/Fruits-App',
    proname: 'CRUD Operation'
  },
  {
    id: 5,
    img: '/assets/img/work5.jpg',
    preview: 'https://bmi-two-brown.vercel.app',
    live: 'https://github.com/Nivetha-08/BMI',
    proname: 'BMI Calculator'
  },
  {
    id: 6,
    img: '/assets/img/work6.jpg',
    preview: 'https://advice-app-swart.vercel.app',
    live: 'https://github.com/Nivetha-08/Advice-App',
    proname: 'Random Quote Generator'
  },
].map(item => (
  <div className="work__img" key={item.id}>
    <img src={item.img} alt={`Work ${item.id}`} />
    <div className="work__overlay">
      <a href={item.preview} className="work__icon" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
        <i className="bx bx-search"></i>
      </a>
      <a href={item.live} className="work__icon" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
        <i className="bx bx-link-external"></i>
      </a>
    </div>
    <div className='h6 text-center py-2'>{item.proname}</div>
  </div>
))}

          </div>
        </section>

        {/*===== CONTACT =====*/}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form className="contact__form" action="https://formsubmit.co/nivethamaniofficial@gmail.com" method="POST">
              <input type="text" placeholder="Name" className="contact__input cname" name="name" required/>
              <input type="email" placeholder="Email" className="contact__input cmail" name="email" required/>
              <textarea cols="0" rows="10" className="contact__input cmsg" name="message" required></textarea>
              {/* <input type="submit" value="Send" className="contact__button button"/> */}
              {/* <button className="btn btn-primary px-4" id="cbtn" onClick={sendMain} type="submit">Send</button> */}
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary px-4" id="cbtn" onClick={sendMain} type="submit">
                Send
                </button>
              </div>

            </form>
          </div>
        </section>
      </main>

      {/*===== FOOTER =====*/}
      <footer className="footer">
        <p className="footer__title">Nivetha</p>
        <div className="footer__social">
          <a href="https://github.com/Nivetha-08" className="footer__icon"><i className='bx bxl-github'></i></a>
          <a href="https://t.me/Nivetha0801" className="footer__icon"><i className='bx bxl-telegram'></i></a>
          <a href="https://wa.me/6379598987?text=Hello%20there!" className="footer__icon"><i className='bx bxl-whatsapp'></i></a>
        </div>
        {/* <p className="footer__copy">&copy; Bedimcode. All rights reserved</p> */}
        <p className="footer__copy"><a href="mailto:nivethamaniofficial@gmail.com" style={{textDecoration:"none", color:"white"}}>nivethamaniofficial@gmail.com</a></p>
        {/* <p className="footer__copy" style={{textDecoration:"none"}}><a href="mailto:xxx@gmail.com">xxx@gmail.com</a></p> */}
      </footer>
    </>
  );
};

export default Home;
