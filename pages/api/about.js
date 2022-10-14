import {
    faSchool,
    faBullseye,
    faCalendarDay,
    faHeart,
    // faQuoteLeft,
    faUserTag,
    faHouseUser,
    faLanguage,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";
export default (req, res) => {
    res.statusCode = 200;
    res.json([
        { fa: faCertificate, details: "Full Stack Developer, Cloud DevOps Engineer" },
        { fa: faCalendarDay, details: "22 years" },
        { fa: faHouseUser, details: "Sekondi-Takoradi, Ghana" },
        { fa: faLanguage, details: "English, Akan(Fanti)" },
        { fa: faSchool, details: "BSc Physics (Electronics Option) 4th Year Undergrad, Kwame Nkrumah University of Science and Technology, Kumasi, Ghana" },
        { fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), Movies & Animations, Gaming" },
        { fa: faBullseye, details: "I live to solve problems \nI want to get a score for humanity in terms of knowledge and the life of the African" },
        {
            fa: faUserTag,
            details: `René Descartes said, "cogito, ergo sum",  (Latin: “I think, therefore I am),	
        so firstly I am thinking thing and a good thinker if I might add,
        I am a passionate person who loves to learn and seek to apply knowledge in to solutions.
        I'm a Full Stack Developer with experienced building with divers libraries and frameworks in multiple programing languages really passionate about building solutions and tools. 
        I am also a skilled Cloud DevOps Engineer , deploying applications to multiple platforms like AWS, Heroku and Digital Ocean.
        always trying to be in step with the latest technology and looking for new ways to improve myself and my work.
        I work well with persons with different backgrounds and personalities in both remote and physical work environments.
        `,
        },
    ]);
};
