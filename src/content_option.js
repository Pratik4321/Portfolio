const logotext = "PRATIK";
const meta = {
    title: "Pratik Giri",
    description: "I’m Pratik Giri Full stack devloper,currently working in Nepal",
};

const introdata = {
    title: "I’m Pratik Giri",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Resolving design problems,building smart user interfaces and useful interactions,developing rich web applications and seamless web experiences",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About my self",
    aboutme: "Hello There! My name is Pratik Giri and I'm a frontend developer.I'm passionate about building beautiful and responsive websites that provide an enjoyable user experience. I have a strong understanding of HTML,CSS,JavaScript and frontend frameworks such as React.I'm also well-versed in the lastest web development technologies and trends. ",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node",
        value: 60,
    },
    {
        name: "MangoDB",
        value: 70,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I'm dedicated to creating user-centered designs that provide intuitive and engaging experiences for your target audience. I offer a range of design services to help you achieve your goals and improve your online presence.",
    },
    {
        title: "Web Site Designe",
        description: "As a web designer with 2years of experience, I'm passionate about creating beautiful, responsive, and user-friendly websites that help businesses achieve their goals. I offer a range of web design services to help you establish a strong online presence and attract more customers.",
    },
    {
        title: "Mobile Apps",
        description: " I'm passionate about creating user-friendly, engaging, and visually appealing mobile apps that help businesses achieve their goals. I offer a range of mobile app design services to help you establish a strong mobile presence and engage your target audience.",
    },
];

const dataportfolio = [{
        img: "data:image/jpeg;base64,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",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "pratikgiri2015@gmail.com",
    YOUR_FONE: "9866927835",
    description: "I'm excited to hear from you! If you have a project in mind, questions about my work, or just want to say hello, please don't hesitate to contact me. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Pratik4321",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/pratik-giri-0945581a1/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};