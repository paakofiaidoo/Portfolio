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
        { fa: faSchool, details: "BSc Physics (Electronics Option), Kwame Nkrumah University of Science and Technology, Kumasi, Ghana" },
        { fa: faHeart, details: "Coding, Philosophy (Ontology and Epistemology), Movies & Animations, Gaming" },
        { fa: faBullseye, details: "I live to solve problems and for the pursuit of knowledge" },
        {
            fa: faUserTag,
            details: `I am a Full-Stack developer and skilled Cloud DevOps Engineer 
            with a passion for learning and using my knowledge to build solutions and tools. 
            I have experience working with a variety of libraries, frameworks, and programming languages. 
            I am dedicated to staying up-to-date with the latest technology and constantly improving my skills. 
            In addition to my work, I also enjoy giving back to the community through mentorship and leading workshops, 
            both virtually and in person. Problem-solving is a particular interest of mine, 
            and I thrive in finding creative solutions to challenges. 
            As René Descartes famously stated, 'cogito, ergo sum' - I think, therefore I am,
            and as a thinking individual, I am always striving to be my best self.
        `,
        },
    ]);
};
