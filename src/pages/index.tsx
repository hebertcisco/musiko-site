import HeaderComponent from "../components/Header";
import HeroSectionComponent from "../components/HeroSection";
import AboutComponent from "../components/About";
import FooterComponent from "../components/Footer";

import { IAbout } from "../utils/types";
import Head from "next/head";

export default function Home({
  header,
  seo,
  about,
  about_features,
  about_features_more,
  hero,
  footer,
  footer_contact_info,
  footer_copy,
  footer_social,
}) {
  return (
    <>
      <Head>
        <title>
          {seo?.title} - {seo?.description}
        </title>
        <link rel="icon" type="image/svg+xml" href={seo?.og_image} />

        <link rel="canonical" href={seo?.canonical} />
        <meta property="og:image" content={seo?.og_image} />
        <meta content={seo?.og_image} property="og:image" />
        <link rel="icon" type="image/svg+xml" href={seo?.og_image} />

        <meta property="og:locale" content="pt-BR" />
        <meta property="og:title" content={seo?.title} />
        <meta property="og:description" content={seo?.description} />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="favicon.ico" />

        <meta name="theme-color" content={seo?.themeColor} />
        <meta name="description" content={seo?.description} />

        <meta name="keywords" content={seo?.keywords} />

        <meta property="og:url" content={seo?.canonical} />
        <base href="/" />
        <link href="https://plus.google.com/+hebertsoftware" rel="publisher" />
        <meta content="index, follow" name="robots" />
        <meta content="1 days" name="revisit-after" />
        <meta content="global" name="distribution" />
        <meta content="general" name="rating" />
        <meta content="website" property="og:type" />
        <meta content={seo?.title} property="og:site_name" />
        <meta content="pt-BR" property="og:locale" />
        <meta content="en-US" property="og:locale:alternate" />
        <meta content="pt" property="og:locale:alternate" />
        <meta content="en_US" property="og:locale:alternate" />
        <meta content="id_ID" property="og:locale:alternate" />
        <meta content={seo?.title} property="og:title" />
        <meta content={seo?.canonical} property="og:url" />
        <meta content={seo?.description} property="og:description" />
        <meta content="@hebertbarros" name="twitter:site" />
        <meta content="@hebertsoftware" name="twitter:creator" />
        <meta content={seo?.domain} name="twitter:domain" />

        <meta content={seo?.og_image} property="og:image" />
        <meta content="512" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta content="id" name="geo.country" />
        <meta content="Brazil" name="geo.placename" />
      </Head>
      <HeaderComponent header={header} />
      <HeroSectionComponent hero={hero} seo={seo} />
      <AboutComponent
        about_features={about_features.about_features}
        about_features_more={about_features_more.about_features_more}
        about={about}
        seo={seo}
      />
      <FooterComponent
        footer={footer}
        footer_contact_info={footer_contact_info}
        footer_copy={footer_copy}
        footer_social={footer_social?.social}
        seo={seo}
      />
    </>
  );
}

export async function getStaticProps() {
  const res_header = await fetch(
    `${process.env.BASE_URL}api?doc=ZPLcLFv8UTXlUXsgSld1&collection=api`
  );
  const res_seo = await fetch(
    `${process.env.BASE_URL}api?doc=index.seo&collection=api`
  );
  const res_about = await fetch(
    `${process.env.BASE_URL}api?doc=about&collection=api`
  );
  const res_about_features = await fetch(
    `${process.env.BASE_URL}api?doc=about_features&collection=api`
  );
  const res_about_features_more = await fetch(
    `${process.env.BASE_URL}api?doc=about_features_more&collection=api`
  );
  const res_hero = await fetch(
    `${process.env.BASE_URL}api?doc=hero&collection=api`
  );
  const res_footer = await fetch(
    `${process.env.BASE_URL}api?doc=footer&collection=api`
  );
  const res_footer_contact_info = await fetch(
    `https://hebertbarros.me/api/v1/contact/info`
  );
  const res_footer_copy = await fetch(`https://hebertbarros.me/api/github`);

  const res_footer_social = await fetch(
    `${process.env.BASE_URL}api?doc=social&collection=api`
  );
  const header = await res_header.json();
  const seo = await res_seo.json();
  const about = await res_about.json();
  const about_features: IAbout[] = await res_about_features.json();
  const about_features_more: IAbout[] = await res_about_features_more.json();
  const hero = await res_hero.json();
  const footer = await res_footer.json();
  const footer_contact_info = await res_footer_contact_info.json();
  const footer_copy = await res_footer_copy.json();
  const footer_social = await res_footer_social.json();

  return {
    props: {
      header,
      seo,
      about,
      about_features,
      about_features_more,
      hero,
      footer,
      footer_contact_info,
      footer_copy,
      footer_social,
    },
    revalidate: 300, // In seconds
  };
}
