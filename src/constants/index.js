import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
   
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
   
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "MERN Stack Developer",
        company_name: "Klizos Solution PVT",
        icon: mongodb,
        iconBg: "#accbe1",
        date: "Nov 2022 - Present",
        points: [
            "Developing and maintaining web applications using Node.js, React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "node.js Intern",
        company_name: "Codezeal Technology Pvt. Ltd. ",
        icon: nodejs,
        iconBg: "#fbc3bc",
        date: "May 2022 - Jun 2022",
        points: [
            "Implement a Full stack project for food dilivery website.",
            "Learn  version control and work with another developers and help them to fix the bugs",
            "Implementing  design and ensuring cross-browser compatibility.",
            "Developing and maintaining web applications using Node.js, React.js and other related technologies.",
        ],
    },
    {
        title: "Web Design Intern",
        company_name: "Buck Softech Private Limited",
        icon: javascript,
        iconBg: "#b7e4c7",
        date: "Feb 2022 - Mar 2022",
        points: [
            "Developing and maintaining web applications using Html, Css, Javascript, React.js, and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];


export const education = [
    {
        title: "MCA",
        company_name: "CHANDIGARH UNIVERSITY",
        icon: mongodb,
        iconBg: "#accbe1",
        date: "July 2022 - 2024",
        points: [
            "Grade: sem 1:- 8.2 sgpa. sem 2:- 7.2 sgpa . sem3:- 8.2 , sem 4:- 7.8, overall :- 7.85",
            "Activities and societies: Writer: Contributor to the university's technical blog. Researcher: Conducted research on the use of machine learning in software engineering. Awards and Honors: Won first prize in the Chandigarh University hackathon and awarded the Outstanding Teaching Assistant award",
            "Participating in Coding Compition ",
        ],
    },
    {
        title: "BCA",
        company_name: "Gossner College ",
        icon: nodejs,
        iconBg: "#fbc3bc",
        date: "June 2019 - July 2022",
        points: [
            "Grade: 8.8 cgpa",
            "learn programming and lots of technical education. Expertise in web development.",
            "Activities and societies: gymActivities",
            "Play Football in the college team.",
        ],
    },
    // {
    //     title: "Web Design Intern",
    //     company_name: "Buck Softech Private Limited",
    //     icon: javascript,
    //     iconBg: "#b7e4c7",
    //     date: "Feb 2022 - Mar 2022",
    //     points: [
    //         "Developing and maintaining web applications using Html, Css, Javascript, React.js, and other related technologies.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sahilraj-developer',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sahilraj-developer/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Chat Application',
        description: 'Developed a Chat application using the MERN stack, in this aaplciation we can chat through the various members that are registered to the application',
        link: 'https://github.com/sahilraj-developer/node-chat-frontend-',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Food ordering website backend',
        description: 'Created a backend for food ordering website, here  we can add the food items and also user can register and login through this backend application.',
        link: 'https://github.com/sahilraj-developer/food-ordering-projectnode',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Candy Crush',
        description: 'Designed and built Candy crush clone application , here i include all the features of that candy crush game.',
        link: 'https://github.com/sahilraj-developer/candy-crush-clone',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'File sharing Application',
        description: 'Built a  file sharing application here the user can upload the file and share the link to download that file to other user, this project is in progress.',
        link: 'https://github.com/sahilraj-developer/file-sharing-app-frontend-',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];