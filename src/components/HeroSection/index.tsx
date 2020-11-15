import React from "react";
import { IHero, ISeo } from "../../utils/types";
import { useRouter } from "next/router";

interface IHeaderProps {
  hero: IHero;
  seo: ISeo;
}

const HeroSectionComponent: React.FC<IHeaderProps> = ({ hero, seo }) => {
  const router = useRouter();

  return (
    <section
      className="hero bg-top"
      id="hero"
      style={{
        background:
          "url(static/img/banner-4.png) no-repeat; background-size: 100% 80%",
      }}
    >
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-5 py-5">
            <h1 className="font-weight-bold">{hero?.title}</h1>
            <p className="my-4 text-muted">{hero?.copy}</p>
            <ul className="list-inline mb-0">
              {hero?.download.map(({ title, ref, icon, class_name }) => (
                <li key={title} className={class_name}>
                  <button
                    className="btn btn-primary btn-lg px-4"
                    onClick={() => router.push(ref)}
                  >
                    <i className={`${icon} mr-3`}></i>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 ml-auto">
            <div className="device-wrapper mx-auto">
              <div
                className="device shadow"
                data-device="iPhoneX"
                data-orientation="portrait"
                data-color="black"
              >
                <div className="screen">
                  <img className="img-fluid" src={hero.image} alt={seo.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSectionComponent;
