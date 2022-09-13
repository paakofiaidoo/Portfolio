import { faGithub, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

export default (req, res) => {
    res.statusCode = 200;
    res.json([
        {
            name: "twitter",
            href: "https://twitter.com/paakofiaidoo",
            fa: faTwitter,
        },
        {
            name: "Email",
            link: "paakofiaidoo17@gmail.com",
            href: "mailto:paakofiaidoo17@gmail.com",
            fa: faMailBulk,
        },
        {
            name: "call",
            link: "+233553214812",
            href: "tel:+233553214812",
            fa: faPhone,
        },
        {
            name: "linkedin",
            href: "https://linkedin.com/in/paakofiaidoo/",
            fa: faLinkedin,
        },
        {
            name: "whatsapp",
            href: "https://wa.me/233202396858",
            link: "233202396858",
            fa: faWhatsapp,
        },
        {
            name: "github",
            href: "https://github.com/paakofiaidoo",
            fa: faGithub,
        },
    ]);
};
// {
//   //   name: "Facebook",
//   //
//   //   href: "https://web.facebook.com/paakofi.aidoo",
//   //   fa: faFacebook,
//   //   animation: fb,
//   // },
//   // {
//   //   name: "instagram",
//   //
//   //   href: "https://www.instagram.com/pk_aidoo",
//   //   fa: faInstagram,
//   //   animation: instagram,
//   // },
