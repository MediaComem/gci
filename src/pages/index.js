import React from 'react';
import styles from "./index-css-modules.module.css";
import { CarouselProvider, Slider, Slide, Dot, DotGroup, Image } from 'pure-react-carousel';
import slide1 from "../images/slide-2.png";
import logoHeig from "../images/heig-vd.png";
import 'pure-react-carousel/dist/react-carousel.es.css';
console.log(styles)

export default class extends React.Component {

  render() {
    return (
      <div>
      <img className={styles.heigLogo} src={logoHeig} alt="Logo HEIG-VD" />
      <Nav/>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={10}
        totalSlides={3}
        style={{position:"relative"}}
      >
        <Slider style={{height:'100vh'}}>
          <Slide index={0} style={{backgroundColor:'#42a155'}}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide1} hasMasterSpinner={true}/></div></Slide>
          <Slide index={1} style={{backgroundColor:'blue'}}>I am the second Slide.</Slide>
          <Slide index={2} style={{backgroundColor:'green'}}>I am the third Slide.</Slide>
        </Slider>
        <div className={styles.slidesFixedContent}>
          <h2>Bachelors</h2>
          <h2>construction &amp; infrastructures</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing, magnis turpis porta rhoncus sociosqu senectus. Feugiat ullamcorper egestas ent tempus magnis</p>
          <div>
            <Dot slide={0} className={styles.sliderDot} />
            <Dot slide={1} className={styles.sliderDot} />
            <Dot slide={2} className={styles.sliderDot} />
          </div>
        </div>
      </CarouselProvider>
      <AdvantagesSection anchor="section2"/>
      </div>
    );
  }
}

const Nav = props => (
  <nav className={styles.mainNav}>
    <ul className={styles.mainNavUl}>
      <li><a href="#section1">Accueil</a></li>
      <li><a href="#section2">Formation</a></li>
      <li><a href="#section3">Plan d'études</a></li>
      <li><a href="#section4">Nous contacter</a></li>
    </ul>
  </nav>
);

const AdvantagesSection = props => (
  <section id={props.anchor}>
    <h1>Section2</h1>
  </section>
);