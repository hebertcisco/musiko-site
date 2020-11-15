import React, { useEffect, useState } from "react";
import { IAboutFeatures, IAbout, ISeo } from "../../utils/types";
import VideoButton from "../VideoButton";

interface IAboutProps {
  about_features: IAboutFeatures[];
  about_features_more: IAboutFeatures[];
  about: IAbout;
  seo: ISeo;
}

const AboutComponent: React.FC<IAboutProps> = ({
  about_features,
  about_features_more,
  about,
  seo,
}) => {
  return (
    <section
      className="bg-center py-0"
      id="about"
      style={{
        background:
          "url(static/img/service-bg.svg) no-repeat; background-size: cover",
      }}
    >
      <section className="about py-0">
        <div className="container">
          <p className="h6 text-uppercase text-primary">{seo?.description}</p>
          <h2 className="mb-5">{seo?.title}</h2>
          <div className="row pb-5">
            {about_features?.map((about) => {
              return (
                <div
                  key={about.title}
                  className="col-lg-4 col-md-6 mb-4 mb-lg-0"
                >
                  <div className="card border-0 shadow rounded-lg py-4 text-left">
                    <div className="card-body p-5">
                      <i
                        className={`${about?.icon} svg-icon svg-icon-light`}
                        style={{
                          fontSize: "60px",
                          height: "60px",
                          color: `#${about?.color}`,
                        }}
                      ></i>
                      <h3 className="font-weight-normal h4 my-4">
                        {about?.title}
                      </h3>
                      <p className="text-small mb-0">{about?.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="with-pattern-1" id="services">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                className="img-fluid w-100 px-lg-5"
                src={about?.tutorial.image}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2>{about?.tutorial.title}</h2>
              <p className="text-muted">{about?.tutorial.description}</p>
              <VideoButton
                id={about?.tutorial.video.id}
                title={about?.tutorial.video.title}
              ></VideoButton>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2>{about?.more.title}</h2>
              <p className="text-muted">{about?.more.description}</p>

              <ul className="list-check">
                {about?.more.features.map((features) => {
                  return (
                    <li key={features} className="text-muted mb-2">
                      {features}
                    </li>
                  );
                })}
              </ul>

              <VideoButton
                id={about?.more.video.id}
                title={about?.more.video.title}
              ></VideoButton>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {about_features_more.map((about) => {
                  return (
                    <div key={about.title} className="col-lg-6 col-sm-6 mb-4">
                      <div className="card border-0 shadow rounded-lg text-left px-2">
                        <div className="card-body px py-5">
                          <i
                            className={`${about?.icon} svg-icon svg-icon-light`}
                            style={{
                              fontSize: "40px",
                              height: "40px",
                              color: `#${about?.color}`,
                            }}
                          ></i>
                          <h3 className="h5 font-weight-normal h4 my-3">
                            {about?.title}
                          </h3>
                          <p className="text-small mb-0 text-muted">
                            {about?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default AboutComponent;
