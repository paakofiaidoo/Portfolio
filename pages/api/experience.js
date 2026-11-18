export default (req, res) => {
    res.statusCode = 200;
    res.json([
        {
            company: "Grundfos",
            location: "Accra, Ghana",
            product: "Project Flow: a smart water-metering ecosystem spanning mobile, desktop and web management platforms.",
            roles: [
                {
                    title: "Technical Lead & Product Developer",
                    period: "Jan 2025 – Present",
                    points: [
                        "Lead a team of 10+ engineers building the Project Flow software ecosystem across mobile, desktop and web, setting technical direction, delivery standards and team goals.",
                        "Act as product developer for the platform: translate customer and business needs into features, shape the roadmap and contribute to product design and prioritisation.",
                        "Own software release management: introduced deployment rules and GitOps workflows that stabilised previously failing releases and reduced downtime.",
                        "On-site customer deployments: install and commission gateways and smart water meters and bring new sites onto the platform.",
                        "Accountable for software reliability and maintenance: monitoring, incident response and post-release fixes.",
                        "Manage customer support: the support team, tooling and escalation paths, feeding support insights back into the product.",
                        "Support technical sales: scope solutions with prospects, prepare proposals and demos, and act as the technical liaison between customers, management and engineering.",
                        "Develop backend services in Go and Rust; manage Azure infrastructure and Azure DevOps CI/CD pipelines.",
                        "Mentor engineers through goal-setting and reviews.",
                    ],
                },
                {
                    title: "Lead Backend Engineer",
                    period: "Sep 2024 – Dec 2024",
                    points: [
                        "Led backend development, implementing core platform services and new features.",
                        "Drove the migration to the current architecture and its production rollout with no loss of performance.",
                    ],
                },
                {
                    title: "Software Engineer",
                    period: "Nov 2023 – Sep 2024",
                    points: [
                        "Built hardware and software components of the platform, including the mobile applications.",
                        "Supported client system deployments and prototyped internal tools, including desktop applications and landing pages.",
                    ],
                },
            ],
        },
        {
            company: "Chestify AI Labs",
            location: "Remote (contract)",
            product: "A teleradiology platform that lets hospital managers and doctors send X-ray, MRI and other imaging studies to remote radiologists for reporting.",
            roles: [
                {
                    title: "Principal Software Engineer",
                    period: "Feb 2023 – Jun 2024",
                    points: [
                        "Built and led the software team delivering the platform.",
                        "Designed and built the in-house DICOM viewer used by radiologists, and the APIs that feed images to and return results from the AI diagnosis models.",
                        "Owned cloud infrastructure and DevOps on AWS with CircleCI.",
                        "Stack: Java (Spring Boot), React, PostgreSQL.",
                    ],
                },
            ],
        },
        {
            company: "Amatsii",
            location: "Remote",
            product: "Revenue: a subscription-management platform for small businesses, churches and groups, handling one-time and recurring subscriptions.",
            roles: [
                {
                    title: "Software Developer",
                    period: "Oct 2022 – Oct 2023",
                    points: ["Developed core features of Revenue, covering subscriber management and one-time and recurring billing plans."],
                },
                {
                    title: "Software Developer (Intern)",
                    period: "Sep 2021 – Nov 2022",
                    points: [
                        "Turned complex operational data into dashboards and visualisations with React, Kibana, Elasticsearch and PrimeReact.",
                        "Mentored 7 new programmers and resolved major production bugs.",
                        "Set up custom local domains and developer environments.",
                    ],
                },
                {
                    title: "Junior Frontend Developer (Intern)",
                    period: "Jun 2020 – Dec 2020",
                    points: [
                        "Established the web application foundation: project setup, file structure, technical documentation and CI/CD.",
                        "Built authentication (Okta), API-driven dashboards and core CRUD flows for Revenue in React.",
                    ],
                },
            ],
        },
        {
            company: "Freelance",
            location: "Independent",
            product: "",
            roles: [
                {
                    title: "Freelance Developer",
                    period: "2019 – 2023",
                    points: [
                        "Delivered e-commerce platforms for clients, including a pharmaceutical store and a multi-vendor African-foods marketplace for the US market.",
                        "Provided data-scraping and analysis services.",
                    ],
                },
            ],
        },
    ]);
};
