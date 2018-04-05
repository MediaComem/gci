import React from 'react';
import styles from "./index-css-modules.module.css";
import { CarouselProvider, Slider, Slide, Dot, DotGroup, Image, WithStore } from 'pure-react-carousel';
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
import linkedinIcon from "../images/linkedin.png";
import instagramIcon from "../images/instagram.png";
import goDown from "../images/go-down.png";
import profilePic from "../images/marcoViviani.jpg";
import infoBackground from "../images/info-background.jpg";
import mapMarker from "../images/map-marker.png";
import brochure from "../images/brochure-bachelor-master.png";
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
import facebookPreview from "../images/GCI-Post-FB-PAQUES-LINK.jpg";
import facebookPreview1 from "../images/GCI-Post-FB-LINK-bleu.jpg";
import facebookPreview2 from "../images/GCI-Post-FB-LINK-jaune.jpg";
import facebookPreview3 from "../images/GCI-Post-FB-LINK-vert.jpg";
import favicon from "../images/GCI-Favicon.png";
import myfont from "../fonts/320DD7_0_0.woff2";
import 'pure-react-carousel/dist/react-carousel.es.css';
import GoogleMapReact from 'google-map-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import YouTube from 'react-youtube';
import {Helmet} from "react-helmet";

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`


export default class extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bachelor en Géomatique, Orientation Construction et Infrastructures</title>
          <meta name="description" content=" Construisez votre avenir et venez découvrir l’orientation construction et infrastructures de la filière géomatique."/>
          <meta name="keywords" content="yverdon, yverdon-les-bains, heig-vd, bachelor, bachelor of science, 3 ans, cursus, hes-so, hes, formation, étudiant, étude, génie civil, ingénieur, ingénierie, plein-temps, temps partiel, construction, infrastructure, géomatique, orientation, ingénierie civil"/>
          <meta name="author" content="HEIG-VD – Haute école d’ingénierie du canton de Vaud Yverdon-les-Bains"/>
          <meta property="og:title" content="Orientation construction et infrastructures – Construisez votre avenir" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Géomatique – Construction et infrastructures" />
          <meta property="og:description" content="Devenez acteur-trice majeur dans la création, l’entretien et le développement de l’espace construit et de ses infrastructures" />
          <meta property="og:url" content={this.props.data.site.siteMetadata.siteURL} />
          <meta property="og:image" content={this.props.data.site.siteMetadata.siteURL+facebookPreview} />
          <meta property="og:image" content={this.props.data.site.siteMetadata.siteURL+facebookPreview1} />
          <meta property="og:image" content={this.props.data.site.siteMetadata.siteURL+facebookPreview2} />
          <meta property="og:image" content={this.props.data.site.siteMetadata.siteURL+facebookPreview3} />
          <link rel="shortcut icon" type="image/png" href={this.props.data.site.siteMetadata.siteURL+favicon}/>
          <link rel="shortcut icon" type="image/png" href={this.props.data.site.siteMetadata.siteURL+favicon}/>
        </Helmet>
        <a href="https://www.heig-vd.ch"><img className={styles.heigLogo} src={logoHeigAlone} alt="Logo HEIG-VD" /></a>
        <CarouselProvider style={{position:"relative"}} className={styles.carousel}
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={3} >
          <MyCarousel/>
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

class MyCarouselComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentSlide:0}
  }

  componentDidMount(){
    setInterval(this.changeSlide.bind(this), 3000);
  }

  changeSlide(){
    this.setState(prevState => {
      return {currentSlide: prevState.currentSlide > 1 ? 0 : prevState.currentSlide + 1}
    });
    this.props.carouselStore.setStoreState({ currentSlide: this.state.currentSlide });
  }

  render(){
    return(
      <span style={{position:"relative"}} className={styles.carousel} >
      <Slider>
        <Slide index={1} style={{backgroundColor:'#f5c345'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide2} hasMasterSpinner={true}/></div></div></div></Slide>
        <Slide index={0} style={{backgroundColor:'#42a155'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide1} hasMasterSpinner={true}/></div></div></div></Slide>
        <Slide index={2} style={{backgroundColor:'#21abd2'}}><div className={styles.sliderContainer}><div className={styles.sliderRow}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide3} hasMasterSpinner={true}/></div></div></div></Slide>
      </Slider>
      <div className={styles.slidesFixedContent}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderRow}>
            <div className={styles.gridCol5}>
              <h2>Orientation</h2>
              <h2>construction &amp; infrastructures</h2>
              <p>Cette orientation de la filière Géomatique de la HEIG-VD vous permettras d’acquérir les connaissances et les compétences qui vous seront nécessaires afin de travailler dans les domaines de la construction et de l’ingénierie civile.</p>
              <a className={styles.downloadButton} href="#contact">Séance d’information</a>
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
      </span>
    )
  }
};


const MyCarousel = WithStore(MyCarouselComponent, state => ({
  naturalSlideWidth:state.naturalSlideWidth,
  naturalSlideHeight:state.naturalSlideHeight,
  totalSlides:state.totalSlides
}));

const Nav = props => (
  <nav className={styles.mainNav}>
    <ul className={styles.mainNavUl}>
      <li><a href="#section1">Accueil</a></li>
      <li><a href="#formation">Formation</a></li>
      <li><a href="#planetudes">Plan d'études</a></li>
      <li><a className={styles.mainNavContact} href="#contact">Nous contacter</a></li>
      <li><a href="#"><img src={facebookIconWhite} alt="facebook" /></a></li>
      <li><a href="https://www.youtube.com/user/HEIGVD"><img src={youtubeIconWhite} alt="youtube" /></a></li>
    </ul>
  </nav>
);

const MobileHeader = props => (
  <section className={[styles.gridContainer,styles.mobileHeaderContainer].join(' ')}>
    <section className={styles.gridRow}>
      <section style={{paddingLeft:30,paddingTop:15}}>
      <h2>Orientation</h2>
      <h2>construction &amp; infrastructures</h2>
      <p>Cette orientation de la filière Géomatique de la HEIG-VD vous permettras d’acquérir les connaissances et les compétences qui vous seront nécaissaires afin de travailler dans les domaines de la construction et de l’ingénierie civile.</p>
      <a className={styles.downloadButton} href="#contact">Séance d’information</a>
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
        <a href="https://www.hes-so.ch/"><img src={logoHesSo} alt="Hes-So"/></a>
      </article>
    </section>
  </section>
);

const NewsLetterSection = props => (
  <section className={[styles.gridContainer,styles.newsLetterContainer].join(' ')}>
  <section className={styles.gridRow}>
    <article className={styles.gridCol33}>
      <h1>Recherche & développement</h1>
      <p>L’institut d’ingénierie du territoire (insit) de la HEIG-VD a pour objectif principal de renforcer sa position de centre de compétences en ingénierie territoriale et ce, dans sa relation avec le tissu économique local, national et international.</p>
      <a className={styles.paletteDownloadButton} href="https://heig-vd.ch/rad/instituts/insit">En savoir plus</a>
    </article>
    <article className={styles.gridCol33}>
      <h1>Un master pour la suite?</h1>
      <p>Le Master of Science HES-SO en Ingénierie de territoire (MIT) vise la formation d’ingénieur-e-s capables d’œuvrer comme cadres supérieurs dans les entreprises privées et les administrations publiques actives dans les domaines de génie Civil, de la géomatique et de l’urbanisme opérationnel.</p>
      <a className={styles.paletteDownloadButton} href="https://heig-vd.ch/formations/master/filieres/ingenierie-du-territoire">Renseignements</a>
    </article>
    <article className={styles.gridCol33}>
      <h1>nous suivre</h1>
      <p>Restez en contact avec nous sur nos canaux sociaux!</p>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/HEIGVD/?hc_ref=ARRmadl3u6MqvfXzecrRrcIniLz4iRqM83drRV6KVtJOaORMlDlPwG9o1DT2V3NDhhw"><img src={facebookIcon} alt="facebook" /></a>
        <a href="https://www.youtube.com/user/HEIGVD"><img src={youtubeIcon} alt="youtube" /></a>
        <a href="https://www.instagram.com/heigvd/"><img src={instagramIcon} alt="facebook" /></a>
        <a href="https://www.linkedin.com/edu/school?id=154032"><img src={linkedinIcon} alt="youtube" /></a>
      </div>
    </article>
    <article className={styles.gridCol33}>
      <h1>Plus d'informations</h1>
      <div className={styles.brochureBlock}>
      <img src={brochure} alt="Brocure HEIG-VD" />
      <a className={styles.downloadButton} href="https://heig-vd.ch/docs/default-source/doc-centre-formation-de-base/brochure-bachelor-master-2018.pdf?sfvrsn=bf269fea_4">télécharger</a>
      </div>
    </article>
  </section>
  </section>
)

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
    this.state = {names: '',email: '',phone:'', 'message':'',event:true, studentDiscuss:false, meetMarcoViviani:false, formSuccess:false, formError:false};

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
    if(value != null){
      fetch('https://hooks.zapier.com/hooks/catch/2986148/zv61t3/', {
        method: 'POST',
        body: JSON.stringify(value)
      })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            console.log("Success")
            this.setState({names: '',email: '',phone:'', 'message':'',event:true, studentDiscuss:false, meetMarcoViviani:false, formSuccess:true})

        })
        .catch((error) => {
          console.error(error);
          console.log("Error")
          this.setState({formError:true})
        });; 
    }
    event.preventDefault();
  }

  render() {
    return (
      <ScrollableAnchor id={this.props.anchor}>
        <section className={[styles.gridContainer,styles.contactFormContainer].join(' ')}>
          <section className={styles.gridRow}>
            <article className={styles.gridCol5}>
              <h1>Nous sommes là pour vous!</h1>
              <p>Laissez-nous vos coordonnées nous nous ferons un plaisir de vous recontacter.</p>
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
                      Dr. en Sciences Techniques, Ingénieur civil
                    </li>
                    <li>
                      Responsable de l’orientation 
                    </li>
                    <li>
                      GCI - constructions en infrastructures
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
                <div style={{display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'20px'}}>
                <input type="submit" value="Envoyer" />
                {
                  this.state.formSuccess
                    ? <p className={styles.thanksSubmit}>Merci, votre message a bien été envoyé</p>
                    : null
                }
                {
                  this.state.formError
                    ? <p className={styles.thanksSubmit}>Le message n'a pas pu être envoyé</p>
                    : null
                }
                </div>
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
          <h1>Construisez votre avenir</h1>
          <p>De nombreux défis, réservés à l'esprit inventif et créatif, que nos diplômé-e-s se feront le plaisir de relever.</p>
          <p>Découvrez la variété du plan d’études (à télécharger ci-dessus) ainsi que les conditions d’admission, prenez connaissances des pré-requis et autres informations relatives à la formation.</p>
          <a className={styles.downloadButton} href="https://heig-vd.ch/formations/bachelor/admission/conditions-admission">Conditions d’admission</a>
          <a className={styles.downloadButton} href="https://heig-vd.ch/formations/bachelor/admission/inscriptions">Inscription</a>
        </article>
        <article className={[styles.gridCol5,styles.informatonsContainerList].join(' ')}>
          <h2>Titre obtenu</h2>
          <p>Bachelor of Science HES-SO en Géomatique, Orientation Construction et Infrastructures</p>
          <h2>Lieu</h2>
          <p>Haute école d’Ingénierie et de Gestion du Canton de Vaud, Yverdon-les-Bains</p>
          <h2>Durée</h2>
          <p>3 ans à plein temps ou 4 ans en emploi / à temps partiel</p>
          <h2>Délais d’inscription</h2>
          <p>31 mai 2018</p>
          <h2>Frais d'écolage</h2>
          <p>CHF 1’200.- / année</p>
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
          <h1>Pourquoi choisir notre formation?</h1>
          <p>Devenir ingénieur-e dans les domaines de l'ingénierie civile, c'est devenir un acteur majeur dans la création, l'entretien et le développement de l'espace construit et de ses infrastructures dans le respect du développement économique durable.</p>
          <p>Notre orientation en construction et infrastructures répond aux exigences pluridisciplinaires liées à la conception, réalisation, rénovation et maintenance de nos infrastructures et de notre patrimoine immobilier.</p>
        </article>
        <article className={[styles.advantagesSectionContentRight,styles.gridCol5].join(' ')}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={62}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}><div className={styles.videoContainer}><YouTube videoId="O6QVNbL3rDE" /></div></Slide>
              {/*<Slide index={1}><div className={styles.videoContainer}><YouTube videoId="AL7rPIuvLBY" /></div></Slide>
              <Slide index={2}><div className={styles.videoContainer}><YouTube videoId="jcrkrAh1nOc" /></div></Slide>*/}
            </Slider>
            {/*
            <div className={styles.advantagesSectionSliderDotsContainer}>
              <Dot slide={0} className={styles.advantagesSectionSliderDots} />
              <Dot slide={1} className={styles.advantagesSectionSliderDots} />
              <Dot slide={2} className={styles.advantagesSectionSliderDots} />
            </div>*/}
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
        <h1>La palette complète des compétences de la formation</h1>
      </article>
      <article className={styles.gridCol6}>
        <p>Nos ingénieur-e-s en construction sont très apprécié-e-s par le marché du travail, par leurs compétences techniques et pratiques pointues, qui répondent aux exigences techniques du métier, et leurs compétences sociales qui leur permettent d'œuvrer au sein d'équipes variées et interdisciplinaires.</p>
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
          <p>Transport, mobilité et constructions routières, maintenance et remise en état des voies de circulation</p>
        </div>
      </article>
    </section>
    <section className={[styles.gridRow,styles.paletteGroup].join(' ')}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill10} />
          <p>Energétique du bâtiment</p>
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
          <a className={styles.paletteDownloadButton} href="https://heig-vd.ch/formations/bachelor/filieres/geomatique/construction-et-infrastructures/plan-etude-gci-plein-temps">Le plan d’études</a>
        </div>
      </article>
    </section>
  </section>
);