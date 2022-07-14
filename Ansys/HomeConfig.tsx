import HeroImage from '../assets/Hero.jpg'
import { RecommendationType } from './Types/ConfigTypes';

export const NavBarConfig = [
  {
    title: "Courses",
    redirectTo: "/home",
  },
  {
    title: "Certifications",
    redirectTo: "https://certifications.ansys.com/",
  },
  {
    title: "Knowledge",
    redirectTo: "https://ansyskm.ansys.com/",
  },
  {
    title: "Events",
    redirectTo: "https://innovationspace.ansys.com/join-events/",
  },
];


export const HeaderConfig = [
    {
        title: "Fluid",
        redirectTo: "/search",
      },
      {
        title: "Structure",
        redirectTo: "/search",
      },
      {
        title: "Photonics",
        redirectTo: "/search",
      },
      {
        title: "Materials",
        redirectTo: "/search",
      },
      {
        title: "Electronics",
        redirectTo: "/search",
      },
]


export const HeroConfig = {
    title  : 'Life changes fast',
    description : 'Ansys Innovation Courses are award-winning, free, online physics and engineering courses designed for educators, students and engineers to enhance simulation and physics learning.',
    background : HeroImage,
    buttonText : 'Learn More',
    onClickButtonRedirect : '/search',
    
}


export const MainRecommendationConfig : RecommendationType= {

  title : 'Recommendations',
  description : "Here are your personalized recommendations",
  numberOfResults: 6,
  imageField : 'sfimage_url__c',
  pipeline : 'recommendation',
  id : 'Recommendation'
}

export const VideoRecommendationConfig : RecommendationType  = {

 /*  title : 'Videos',
  description : "Here are your personalized recommendations",
  numberOfResults: 3,
  imageField : 'ytthumbnailurl',
  pipeline : 'Video Rec Sidebar',
  id : 'Recommendation' */
}
