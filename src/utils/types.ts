export interface INavLinks {
  ref?: string;
  name?: string;
  title?: string;
  current?: string;
}
interface INav {
  links?: INavLinks[];
}
export interface IHeader {
  logo?: string;
  title?: string;
  nav?: INav;
}
export interface ISocialList {
  href?: string;
  icon?: string;
  name?: string;
}
export interface IDL {
  icon?: string;
  ref?: string;
  title?: string;
  class_name?: string;
}
export interface IHero {
  title?: string;
  copy?: string;
  image?: string;
  download?: IDL[];
}
export interface IAboutFeatures {
  icon?: string;
  color?: string;
  title?: string;
  description?: string;
}
export interface IVideoButton {
  id?: string;
  title?: string;
}
export interface IAbout {
  title?: string;
  subtitle?: string;
  tutorial?: {
    image?: string;
    title?: string;
    description?: string;
    video?: IVideoButton;
  };
  more?: {
    title?: string;
    description?: string;
    features?: string[];
    video?: IVideoButton;
  };
}
export interface ISeo {
  title?: string;
  canonical?: string;
  og_image?: string;
  description?: string;
  themeColor?: string;
  keywords?: string;
  domain?: string;
}
interface IFooterLinks {
  name: string;
  ref: string;
}
interface IFooterLinksSection {
  title: string;
  links: IFooterLinks[];
}
export interface IFooter {
  copy: string;
  logo: string;
  links_section: IFooterLinksSection[];
}
interface IFooterContact {
  email: string;
  place: string;
  telephone: {
    area: string;
    ddd: string;
    number: string;
  };
}
export interface IFooterContactInfo {
  contact?: IFooterContact;
}
