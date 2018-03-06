import React from 'react';
import styles from "./index-css-modules.module.css";
import { CarouselProvider, Slider, Slide, Dot, DotGroup, Image } from 'pure-react-carousel';
import slide1 from "../images/GCI-images-hexagones_Vert.png";
import slide2 from '../images/GCI-images-hexagones-Jaune.png'
import slide3 from '../images/GCI-images-hexagones-Bleu.png'
import logoHeig from "../images/heig-vd.png";
import logoHeigAlone from "../images/heig-vd-alone.png";
import logoHesSo from "../images/hes-so.png";
import logoHeigBlack from "../images/heig-vd-black.png";
import facebookIcon from "../images/facebook.png";
import facebookIconWhite from "../images/facebook-white.png";
import youtubeIcon from "../images/youtube.png";
import youtubeIconWhite from "../images/youtube-white.png";
import goDown from "../images/go-down.png";
import profilePic from "../images/profile.jpg";
import infoBackground from "../images/info-background.jpg";
import mapMarker from "../images/map-marker.png";
import skill1 from "../images/GCI-pictos-competences-01.png";
import skill2 from "../images/GCI-pictos-competences-02.png";
import skill3 from "../images/GCI-pictos-competences-03.png";
import skill4 from "../images/GCI-pictos-competences-04.png";
import skill5 from "../images/GCI-pictos-competences-05.png";
import skill6 from "../images/GCI-pictos-competences-06.png";
import skill7 from "../images/GCI-pictos-competences-07.png";
import skill8 from "../images/GCI-pictos-competences-08.png";
import skill9 from "../images/GCI-pictos-competences-09.png";
import skill10 from "../images/GCI-pictos-competences-10.png";
import skill11 from "../images/GCI-pictos-competences-11.png";
import myfont from "../fonts/320DD7_0_0.woff2";
import 'pure-react-carousel/dist/react-carousel.es.css';
import GoogleMapReact from 'google-map-react';
import ScrollableAnchor from 'react-scrollable-anchor'
import YouTube from 'react-youtube';


export default class extends React.Component {

  render() {
    return (
      <div>
        <img className={styles.heigLogo} src={logoHeigAlone} alt="Logo HEIG-VD" />
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={3}
          style={{position:"relative"}}
          className={styles.carousel}
        >
          
          <Slider>
            <Slide index={0} style={{backgroundColor:'#42a155'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide1} hasMasterSpinner={true}/></div></div></div></Slide>
            <Slide index={1} style={{backgroundColor:'#ffc10e'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide2} hasMasterSpinner={true}/></div></div></div></Slide>
            <Slide index={2} style={{backgroundColor:'#00aed6'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide3} hasMasterSpinner={true}/></div></div></div></Slide>
          </Slider>
          <div className={styles.slidesFixedContent}>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderRow}>
                <div className={styles.gridCol5}>
                  <h2>Bachelors</h2>
                  <h2>construction &amp; infrastructures</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing, magnis turpis porta rhoncus sociosqu senectus. Feugiat ullamcorper egestas ent tempus magnis</p>
                  <a className={styles.downloadButton} href="#contact">Télécharger la brochure</a>
                  <div>
                    <Dot slide={0} className={styles.sliderDot} />
                    <Dot slide={1} className={styles.sliderDot} />
                    <Dot slide={2} className={styles.sliderDot} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#formation" className={styles.goDown}>
            <img style={{height:'50px'}} src={goDown} alt="Logo HEIG-VD" />
          </a>
          
        </CarouselProvider>
        <MobileHeader/>
        <AdvantagesSection anchor="formation"/>
        <PaletteSection anchor="section3"/>
        <InformationsSection anchor="planetudes"/>
        <ContactFormSection anchor="contact"/>
        <div style={{height:'300px'}}>
          <SimpleMap/>
        </div>
        <NewsLetterSection anchor='section4' />
        <Footer/>
      </div>
    );
  }
}

const Nav = props => (
  <nav className={styles.mainNav}>
    <ul className={styles.mainNavUl}>
      <li><a href="#section1">Accueil</a></li>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#planetudes">Plan d'études</a></li>
      <li><a className={styles.mainNavContact} href="#contact">Nous contacter</a></li>
      <li><a href="#"><img src={facebookIconWhite} alt="facebook" /></a></li>
      <li><a href="#"><img src={youtubeIconWhite} alt="youtube" /></a></li>
    </ul>
  </nav>
);

const MobileHeader = props => (
  <section className={[styles.gridContainer,styles.mobileHeaderContainer].join(' ')}>
    <section className={styles.gridRow}>
      <section style={{paddingLeft:30,paddingTop:15}}>
      <h2>Bachelors</h2>
      <h2>construction &amp; infrastructures</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing, magnis turpis porta rhoncus sociosqu senectus. Feugiat ullamcorper egestas ent tempus magnis</p>
      <a className={styles.downloadButton} href="#">Télécharger la brochure</a>
      </section>
    </section>
  </section>
);


const Footer = props => (
  <section className={[styles.gridContainer,styles.footerContainer].join(' ')} id={props.anchor}>
    <section className={styles.gridRow}>
      <article className={styles.gridCol5}>
        <p>Filière Géomatique orientation Construction et Infrastructures (GCI) </p>
        <p>Une formation de la HEIG-VD</p>
      </article>
      <article className={styles.gridCol5}>
        <a href="#"><img src={logoHesSo} alt="Hes-So"/></a>
      </article>
    </section>
  </section>
);

class NewsLetterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <section className={[styles.gridContainer,styles.newsLetterContainer].join(' ')}>
        <section className={styles.gridRow}>
          <article className={styles.gridCol33}>
            <h1>Inscription à la newsletter</h1>
            <p>Pour recevoir les dernières informations relatives à la formation et à l’école, ainsi que les dates des événements :</p>
            <a className={styles.paletteDownloadButton} href="#">Plan d’études</a>
          </article>
          <article className={styles.gridCol33}>
            <h1>Inscription à la newsletter</h1>
            <p>Pour recevoir les dernières informations relatives à la formation et à l’école, ainsi que les dates des événements :</p>
            <a className={styles.paletteDownloadButton} href="#">Plan d’études</a>
          </article>
          <article className={styles.gridCol33}>
            <h1>nous suivre</h1>
            <p>Gardez le contact avec nous !</p>
            <div className={styles.socialIcons}>
              <img src={facebookIcon} alt="facebook" />
              <img src={youtubeIcon} alt="youtube" />
            </div>
          </article>
          <article className={styles.gridCol33}>
            <h1>Inscription à la newsletter</h1>
            <p>Pour recevoir les dernières informations relatives à la formation et à l’école, ainsi que les dates des événements :</p>
            <a className={styles.paletteDownloadButton} href="#">Plan d’études</a>
          </article>
        </section>
        </section>
    );
  }
}

class SimpleMapMarker extends React.Component {
  render() {
    return (
      <div>
        <img src={mapMarker} />
      </div>
    );
  }
}

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 46.7792276, lng: 6.6571928},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: ["AIzaSyBczaK_ZflzUQb66u0tq6SCFiCwYeJNCtM"] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <SimpleMapMarker lat={46.7802437} lng={6.6582137} />
      </GoogleMapReact>
    );
  }
}

class ContactFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names: '',email: '',phone:'', 'message':'',event:true, studentDiscuss:false, meetMarcoViviani:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var value = this.state;
    console.log(value)
    // if(value != null){
    //   fetch('https://hooks.zapier.com/hooks/catch/2986148/zv61t3/', {
    //     method: 'POST',
    //     body: JSON.stringify(value)
    //   })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         console.log(responseJson)
    //         console.log("Success")
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       console.log("Error")
    //     });; 
    // }
    event.preventDefault();
  }

  render() {
    return (
      <ScrollableAnchor id={this.props.anchor}>
        <section className={[styles.gridContainer,styles.contactFormContainer].join(' ')}>
          <section className={styles.gridRow}>
            <article className={styles.gridCol5}>
              <h1>prenez directement contact avec nous !</h1>
              <p>Si vous avez des interrogations concernant la formation ou l’école, n’hésitez pas à prendre contact avec nous via le formulaire ou par téléphone, nous nous ferons un plaisir de répondre à vos questions. </p>
              <img className={styles.contactFormHeigLogo} src={logoHeigBlack} alt="Logo HEIG-VD" />
              <section className={styles.gridRow}>
                <article className={styles.gridCol3}>
                  <img style={{maxHeight:'180px'}} src={profilePic} alt="Marco Viviani" />
                </article>
                <article className={styles.gridCol7} style={{alignContent:'flex-start'}}>
                  <ul className={styles.contactList}>
                    <li>
                      Route de Cheseaux 1
                    </li>
                    <li>
                      1401 Yverdon-les-Bains
                    </li>
                    <li>
                      +41 (0)24 557 63 30
                    </li>
                  </ul>
                  <ul className={styles.contactList}>
                    <li style={{textTransform:'uppercase','fontWeight': 'bold',marginBottom:'8px'}}>
                      Personne de contact:
                    </li>
                    <li>
                      Prof. Marco Viviani
                    </li>
                    <li>
                      Dr. en Génie Civil
                    </li>
                    <li>
                      Responsable d'orientatin CGI
                    </li>
                  </ul>
                </article>
              </section>
            </article>
            <article className={styles.gridCol5}>
              <p>Merci de remplir les champs ci-dessous:</p>
              <form className={styles.contactForm} onSubmit={this.handleSubmit}>
                <input name="names" type="text" value={this.state.names} onChange={this.handleChange} required placeholder="NOM ET PRÉNOM *" />
                <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required placeholder="EMAIL *" />
                <textarea name="message" value={this.state.message} onChange={this.handleChange} placeholder="MESSAGE" />
                <p>Je souhaite ...</p>
                <div style={{display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                  <input
                    name="event"
                    type="checkbox"
                    checked={this.state.event}
                    onChange={this.handleChange} />
                    <label>
                      ... assister à une séance d'information
                    </label>
                </div>
                <div style={{display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'20px'}}>
                  <input
                    name="studentDiscuss"
                    type="checkbox"
                    checked={this.state.studentDiscuss}
                    onChange={this.handleChange} />
                  <label>
                    ... discuter avec un-e étudiant-e ou un-e diplômé-e
                  </label>
                </div>
                <div style={{display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'20px'}}>
                  <input
                    name="meetMarcoViviani"
                    type="checkbox"
                    checked={this.state.meetMarcoViviani}
                    onChange={this.handleChange} />
                  <label>
                    ... rencontrer Marco Viviani
                  </label>
                </div>
                <input type="submit" value="Envoyer" />
              </form>
            </article>
          </section>
        </section>
      </ScrollableAnchor>
    );
  }
}

const InformationsSection = props => (
  <ScrollableAnchor id={props.anchor}>
    <section style={{backgroundImage: `url(${infoBackground})`}} className={[styles.gridContainer,styles.informatonsContainer].join(' ')}>
      <section className={styles.gridRow}>
        <article className={styles.gridCol5}>
          <h1>informations pratiques</h1>
          <p>De nombreux défis, réservés à l'esprit inventif et créatif, que nos diplômé-e-s se feront le plaisir de relever. Découvrez la variété du plan d’études ainsi que les condissions d’admission et autres informations relatives à la formation proposée, ci-dessous:</p>
          <a className={styles.downloadButton} href="#">Plan d’études</a>
          <a className={styles.downloadButton} href="#">Admissions et autres infos</a>
        </article>
        <article className={[styles.gridCol5,styles.informatonsContainerList].join(' ')}>
          <h2>Titre</h2>
          <p>Description</p>
          <h2>Titre</h2>
          <p>Description</p>
          <h2>Titre</h2>
          <p>Description</p>
          <h2>Titre</h2>
          <p>Description</p>
        </article>
      </section>
    </section>
  </ScrollableAnchor>
);

const AdvantagesSection = props => (
  <ScrollableAnchor id={props.anchor}>
    <section className={styles.gridContainer}>
      <section className={styles.gridRow}>
        <article className={[styles.advantagesSectionContentLeft,styles.gridCol5].join(' ')}>
          <h1>Les avantages de choisir cette formation plutôt qu’une autre</h1>
          <p>Devenir ingénieur-e dans les domaines de l'ingénierie civile, c'est devenir un acteur majeur dans la création, l'entretien et le développement de l'espace construit et de ses infrastructures dans le respect du développement économique durable.</p>
          <p>Notre orientation en construction et infrastructure répond aux exigences pluridisciplinaires liées à la conception, réalisation, rénovation et maintenance de nos infrastructures et de notre patrimoine immobilier</p>
        </article>
        <article className={[styles.advantagesSectionContentRight,styles.gridCol5].join(' ')}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={62}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}><div className={styles.videoContainer}><YouTube videoId="Y_hN-sp5bz4" /></div></Slide>
              <Slide index={1}><div className={styles.videoContainer}><YouTube videoId="AL7rPIuvLBY" /></div></Slide>
              <Slide index={2}><div className={styles.videoContainer}><YouTube videoId="jcrkrAh1nOc" /></div></Slide>
            </Slider>
            <div className={styles.advantagesSectionSliderDotsContainer}>
              <Dot slide={0} className={styles.advantagesSectionSliderDots} />
              <Dot slide={1} className={styles.advantagesSectionSliderDots} />
              <Dot slide={2} className={styles.advantagesSectionSliderDots} />
            </div>
          </CarouselProvider>
        </article>
      </section>
    </section>
  </ScrollableAnchor>
);

const PaletteSection = props => (
  <section className={[styles.gridContainer,styles.paletteContainer].join(' ')} id={props.anchor}>
    <section className={styles.gridRow}>
      <article className={[styles.paletteSectionContentLeft,styles.gridCol4].join(' ')}>
        <h1>la palette complète des compétences de la formation</h1>
      </article>
      <article className={styles.gridCol6}>
        <p>Nos ingénieur-e-s en construction sont très apprécié-e-s par le marché du travail, par leurs compétences techniques et pratiques pointues, qui répondent aux exigences techniques du métier, et leurs compétences sociales qui leur permette d'œuvrer au sein d'équipes variées et interdisciplinaires.</p>
      </article>
    </section>
    <section className={[styles.gridRow,styles.paletteGroup].join(' ')}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill1} />
          <p>Concept, calcul et dimensionnement de structures et des ouvrages en bois, en béton, en acier ou en maçonnerie</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill2} />
          <p>Maintenance, remise en état, assainissement et rénovation des structures et des constructions</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill3} />
          <p>Dimensionnement et réalisation des ouvrages souterrains de la géotechnique</p>
        </div>
      </article>
    </section>
    <section className={[styles.gridRow,styles.paletteGroup].join(' ')}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill4} />
          <p>Conception et développement de projets de construction</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill5} />
          <p>Conception et développement de projets de construction</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill6} />
          <p>Planification et réalisation de petits et grands projets</p>
        </div>
      </article>
    </section>
    <section className={[styles.gridRow,styles.paletteGroup].join(' ')}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill7} />
          <p>Constructions hydrauliques, gestion des eaux et réalisation d'aménagements hydrauliques</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill8} />
          <p>Gestion des risques et dangers naturels</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill9} />
          <p>Transport, mobilité et constructions routières, maintenance et remise en état des voies de circulation </p>
        </div>
      </article>
    </section>
    <section className={[styles.gridRow,styles.paletteGroup].join(' ')}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill10} />
          <p>Transport, mobilité et constructions routières, maintenance et remise en état des voies de circulation </p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill11} />
          <p>Maintenance, remise en état, assainissement et rénovation des structures et des constructions</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <a className={styles.paletteDownloadButton} href="#">Télécharger la brochure</a>
        </div>
      </article>
    </section>
  </section>
);