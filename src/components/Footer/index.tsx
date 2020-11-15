import React from "react";
import { IFooter, IFooterContactInfo, ISeo } from "../../utils/types";

interface IFooterProps {
  footer: IFooter;
  footer_contact_info: IFooterContactInfo;
  footer_copy: any;
  footer_social: any;
  seo: ISeo;
}

const FooterComponent: React.FC<IFooterProps> = ({
  footer,
  footer_contact_info,
  footer_copy,
  footer_social,
  seo,
}) => {
  let number =
    footer_contact_info.contact[0].telephone.area +
    footer_contact_info.contact[0].telephone.ddd +
    footer_contact_info.contact[0].telephone.number;
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer className="with-pattern-1 position-relative">
      <div className="container section-padding-y">
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <img className="mb-4" src={footer?.logo} alt="" width="110" />
            <p className="text-muted">{footer?.copy}</p>
          </div>
          {footer.links_section.map((links) => {
            return (
              <div key={links.title} className="col-lg-2 mb-4 mb-lg-0">
                <h2 className="h5 mb-4">{links.title}</h2>
                <div className="d-flex">
                  <ul className="list-unstyled d-inline-block mr-4 mb-0">
                    {links.links.map((links) => {
                      return (
                        <li key={links.name} className="mb-2">
                          <a className="footer-link" href={links.ref}>
                            {links.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="col-lg-5">
            <h2 className="h5 mb-4">Informações de contato</h2>
            <ul className="list-unstyled mr-4 mb-3">
              <li className="mb-2 text-muted">
                {footer_contact_info.contact[0].place}
              </li>
              <li className="mb-2">
                <a className="footer-link" href={`tel:${number}`}>
                  {number}
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="footer-link"
                  href={`mailto:${footer_contact_info.contact[0].email}`}
                >
                  {footer_contact_info.contact[0].email}
                </a>
              </li>
            </ul>

            <ul className="list-inline mb-0">
              {footer_social?.map((social) => {
                return (
                  <li key={social.href} className="list-inline-item">
                    <a className="social-link" href={social.href}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container text-center py-4">
          <p className="mb-0 text-muted text-sm">
            &copy; {currentYear}, {seo.title} - Desenvolvido por{" "}
            <a href={footer_copy?.blog} className="text-reset">
              {`HB.me`}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
