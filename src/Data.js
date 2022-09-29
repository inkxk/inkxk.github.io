import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaLine,
    FaTwitter,
    FaReddit,
    FaStackOverflow,
} from "react-icons/fa";

const greeting = {
    firstName: "Potcharapol",
    lastName: "Nokyoo",
    subTitle: "Software Engineer",
    phoneNumber: "+66880949523",
    email: "potcharapol.nok@gmail.com",
    location: "Bangkok, Thailand",
    resumeLink: "",
};

const socialMedia = [
    {
        link: "https://github.com/inkxk",
        icon: FaGithub,
        color: "#171515",
        colorHover: "#525252",
    },
    { link: "", icon: FaLinkedinIn, color: "#0077b5", colorHover: "#489ecc" },
    { link: "", icon: FaReddit, color: "#FF4500", colorHover: "#fa7d4f" },
    {
        link: "https://line.me/ti/p/~gunink",
        icon: FaLine,
        color: "#06C755",
        colorHover: "#44d27f",
    },
    {
        link: "https://www.instagram.com/inkxk_/",
        icon: FaInstagram,
        color: "#C13584",
        colorHover: "#e952a7",
    },
    { link: "", icon: FaTwitter, color: "#00acee", colorHover: "#4cc3f2" },
    {
        link: "https://stackoverflow.com/users/16453804/inkxk",
        icon: FaStackOverflow,
        color: "#f3ca32",
        colorHover: "#ffdf6a",
    },
];

const skills = {
    frontEnd: "Building responsive website frontend using ReactJS, NextJS.",
    mobile: "Developing mobile applications using React-Native",
    css: "Styling website with Tailwind CSS, Bootstrap 5, Material-UI, Ant Design, Styled-Components.",
    backEnd: "Creating APIs for backend using NodeJS (Express).",
    aws: "Hands on Experience in AWS. (Codecommit, Lambda, API Gateway, EC2, ECS, Cloudwatch, DynamoDB, Elastic Beanstalk, SQS, Codepipeline)",
    // Migrating Lambda functions to ECS
    terraform: "Managing Infrastructure as Code (IaC) with Terraform.",
    mySQL: "Experience in database with MySQL.",
    git: "Experience with version control tools such as Git",
};

const degrees = {
    title: "Bachelor of Mechanical Engineering",
    subtitle: "Kasetsart University",
    duration: "2017 - 2021",
    descriptions: [
        "Particulate Matters Analyzing from Bike’s Tires in Various Riding Conditions (Graduation Thesis)",
        "Temperature Measurement with Calibration and Temperature Monitoring via NetPIE",
    ],
    website_link: "https://ku.ac.th",
};

const certifications = [
    {
        title: "Essential SQL for Everyone",
        subtitle: "- BorntoDev, 2022",
        logo_path: "bornlogo.jpeg",
        certificate_link:
            "https://drive.google.com/file/d/16P9jbpHEj3UcBy7Xvpcvl8BBHmYrKisN/view?usp=sharing",
    },
    {
        title: "DevLab3 Open Access Program",
        subtitle: "- BorntoDev, 2022",
        logo_path: "bornlogo.jpeg",
        certificate_link:
            "https://www.borntodev.com/devlab/certificate_online/1380596a4a9d83b43efccb8301e01c2e",
    },
    {
        title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
        subtitle: "- Udemy, 2021",
        logo_path: "udemy.png",
        certificate_link:
            "https://www.udemy.com/certificate/UC-b5fdcf3a-9153-4c15-8ec6-f255d904fc22/",
    },
    {
        title: "The Complete 2022 Web Development Bootcamp",
        subtitle: "- Udemy, 2021",
        logo_path: "udemy.png",
        certificate_link:
            "https://www.udemy.com/certificate/UC-c5d83bb8-de65-45c8-85dd-725b55c7d03f/",
    },
    {
        title: "Java Programming Masterclass covering Java 11 & Java 17",
        subtitle: "- Udemy, 2022",
        logo_path: "udemy.png",
        certificate_link: "",
    },
    {
        title: "The Complete 2021 Flutter Development Bootcamp with Dart",
        subtitle: "- Udemy, 2022",
        logo_path: "udemy.png",
        certificate_link: "",
    },
    {
        title: "SQL (Basic)",
        subtitle: "- HackerRank, 2022",
        logo_path: "",
        certificate_link:
            "https://www.hackerrank.com/certificates/9a016d878c53",
    },
    {
        title: "SQL (Intermediate)",
        subtitle: "- HackerRank, 2022",
        logo_path: "",
        certificate_link:
            "https://www.hackerrank.com/certificates/0bb2e784ab39",
    },
    {
        title: "Problem Solving (Basic)",
        subtitle: "- HackerRank, 2022",
        logo_path: "",
        certificate_link:
            "https://www.hackerrank.com/certificates/47a526223e58",
    },
    {
        title: "JavaScript (Basic)",
        subtitle: "- HackerRank, 2022",
        logo_path: "",
        certificate_link:
            "https://www.hackerrank.com/certificates/10b0aa8b4258",
    },
    {
        title: "React (Basic)",
        subtitle: "- HackerRank, 2022",
        logo_path: "",
        certificate_link:
            "https://www.hackerrank.com/certificates/dd93c0a3f5c0",
    },
];

const projects = [
    {
        title: "Essential SQL for Everyone",
        logo_path: "bornlogo.jpeg",
        project_link: "",
    },
];

export { greeting, socialMedia, skills, degrees, certifications, projects };
