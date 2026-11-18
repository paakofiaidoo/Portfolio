import {
    faSchool,
    faBullseye,
    faBriefcase,
    faHeart,
    faUserTag,
    faHouseUser,
    faLanguage,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";
export default (req, res) => {
    res.statusCode = 200;
    res.json([
        { fa: faCertificate, details: "Technical Lead, Product Developer, Full Stack Software Engineer, Cloud DevOps Engineer" },
        { fa: faBriefcase, details: "6+ years across full-stack software engineering, embedded systems and IoT, and cloud DevOps; currently Technical Lead at Grundfos on Project Flow, a smart water-metering platform" },
        { fa: faHouseUser, details: "Accra, Ghana" },
        { fa: faLanguage, details: "English, Akan (Fanti)" },
        { fa: faSchool, details: "BSc Physics (Electronics option), Kwame Nkrumah University of Science and Technology, Kumasi · Cloud DevOps Engineer Nanodegree, Udacity (ALX-T)" },
        { fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), Movies & Animations, Gaming" },
        { fa: faBullseye, details: "I live for the pursuit of knowledge and to solve problems" },
        {
            fa: faUserTag,
            details: `I lead a 10+ engineer team delivering a smart water-metering ecosystem across mobile, desktop and web,
            and shape its product roadmap alongside engineering leadership.
            I own release management, on-site meter and gateway deployments, site reliability and customer support,
            and I contribute to technical sales and solution design.
            I turn complex business logic into maintainable, scalable software and hardware,
            and I stay curious about the tools and ideas that make that work better.
            As René Descartes famously stated, 'cogito, ergo sum' - I think, therefore I am,
            and as a thinking individual, I am always striving to be my best self.
        `,
        },
    ]);
};
