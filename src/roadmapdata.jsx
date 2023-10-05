import { FaListAlt, FaFileMedical, FaFileInvoice } from "react-icons/fa";
import { BsPieChartFill,BsReverseLayoutTextWindowReverse, BsFillHouseDoorFill, BsFillPersonBadgeFill,BsCardChecklist, BsFillMortarboardFill } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";


//roadmap data
export const navBarData = [
    {
        id: 1,
        name: 'Class',
        icon: <BsFillHouseDoorFill />,
        link: '/class'
    },
    {
        id: 2,
        name: 'Dashboard',
        icon: <BsPieChartFill />,
        link: '/dashboard'
    },
    {
        id: 3,
        name: 'Tasks',
        icon: <BsCardChecklist />,
        link: '/task'
    },
    {
        id: 4,
        name: 'Webcode',
        icon: <BsReverseLayoutTextWindowReverse />,
        link: '/webcode'
    },
    {
        id: 5,
        name: 'Capstone',
        icon: <MdOutlineDeveloperMode />,
        link: '/capstone'
    },
    {
        id: 6,
        name: 'Queries',
        icon: <FaListAlt />,
        link: '/queries'
    },
    
    {
        id: 7,
        name: 'Portfolio-submission',
        icon: <BsFillPersonBadgeFill />,
        link: '/portfolio'
    },
    
    
    {
        id: 8,
        name: 'Leave-applications',
        icon: <FaFileMedical />,
        link: '/leave'
    },
    {
        id: 9,
        name: 'Mock-interview',
        icon: <FaFileInvoice />,
        link: '/mock'
    },
    {
        id: 10,
        name: 'Certificate',
        icon: <BsFillMortarboardFill />,
        link: '/certificate'
    }
    
];
export const roadMap = [
    {
        no: 1,
        dir: "step__right"
    },
    {
        no: 2,
        dir: "step__right"
    },
    {
        no: 3,
        dir: "step__right"
    },
    {
        no: 4,
        dir: "step__right"
    },
    {
        no: 5,
        dir: "step__bottom"
    },
    {
        no: 10,
        dir: "step__bottom"
    },
    {
        no: 9,
        dir: "step__left"
    },
    {
        no: 8,
        dir: "step__left"
    },
    {
        no: 7,
        dir: "step__left"
    },
    {
        no: 6,
        dir: "step__left"
    },
    {
        no: 11,
        dir: "step__right"
    },
    {
        no: 12,
        dir: "step__right"
    },
    {
        no: 13,
        dir: "step__right"
    },
    {
        no: 14,
        dir: "step__right"
    },
    {
        no: 15,
        dir: "step__bottom"
    },
    {
        no: 20,
        dir: "step_right"
    },
    {
        no: 19,
        dir: "step__left"
    },
    {
        no: 18,
        dir: "step__left"
    },
    {
        no: 17,
        dir: "step__left"
    },
    {
        no: 16,
        dir: "step__left"
    },
    

];
export const roadMapRes = [
    {
        no: 1,
        dir: "step__right"
    },
    {
        no: 2,
        dir: "step__right"
    },
    {
        no: 3,
        dir: "step__right"
    },
    {
        no: 4,
        dir: "step__right"
    },
    {
        no: 5,
        dir: "step__bottom"
    },
    {
        no: 6,
        dir: "step__bottom"
    },
    {
        no: 7,
        dir: "step__left"
    },
    {
        no: 8,
        dir: "step__left"
    },
    {
        no: 9,
        dir: "step__left"
    },
    {
        no: 10,
        dir: "step__left"
    },
    {
        no: 11,
        dir: "step__right"
    },
    {
        no: 12,
        dir: "step__right"
    },
    {
        no: 13,
        dir: "step__right"
    },
    {
        no: 14,
        dir: "step__right"
    },
    {
        no: 15,
        dir: "step__bottom"
    },
    {
        no: 16,
        dir: "step__bottom"
    },
    {
        no: 17,
        dir: "step__left"
    },
    {
        no: 18,
        dir: "step__left"
    },
    {
        no: 19,
        dir: "step__left"
    },
    {
        no: 20,
        dir: "step__left"
    }
    
];
export const roadMapData = [
    {
        day: 0,
        title: "No session title available",
        time: "Class schedule is not updated",
        content: "No content available",
        preread: "No preread available",
        activity: "",
        tags: "",
        task: "",
        link: ""
    },
    {
        day: 1,
        title: "Javascript - Day -1 : Introduction to Browser & web",
        time: "17/04/2023 - Monday - 10:00 AM : 1:00 PM",
        content: "Introduction to web Browser Wars DOM tree CSSOM tree, Browser internals - HTML parser, CSS parser,  JavaScript V8 engine, internals IP – MAC address – Ports & Evolution of HTTP, HTTP Methods How the Server looks at the URL Request & Response cycle",
        preread: "No preread available",
        activity: "https://docs.google.com/document/d/1QznT1zM4mI6dG0TOx5Xjs1GquMoSHO3xZ1USDnVM-w/preview",
        tags: ["javascript", "browser", "DOM"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 2,
        title: "Javascript - Day -2 : Request & Response cycle",
        time: "18/04/2023 - Tuesday - 10:00 AM : 1:00 PM",
        content: "HTML Browser view - Debugger, Inspect, Browser js vs Node js Data types Copy by value and Copy by reference Window & document object",
        preread: "No preread available",
        activity: "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJJrmVVLjMqN_TmmsHkL41AoIc/preview",
        tags: ["HTTP methods"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 3,
        title: "Javascript - Day -3 : JS array & objects",
        time: "19/04/2023 - Wednesday - 10:00 AM : 1:00 PM",
        content: "Introduction to Array, Array and JSON iteration, XMLHTTPRequest, Hoisting & scope",
        preread: "No preread available",
        activity: "https://docs.google.com/document/d/1cNDeT0CKJwqYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing",
        tags: ["array", "JSON", "objects"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 4,
        title: "JavaScript - Day -4: Functions",
        time: "20/04/2023 - Thursday - 10:00 AM : 1:00 PM",
        content: "Introduction to functions function & return keyword types of function",
        preread: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        activity: "https://docs.google.com/document/d/1TPk3wqxDi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit",
        tags: ["hoisting", "scope-block", "functions"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 5,
        title: "JavaScript - Day -5: ES5 vs ES6",
        time: "21/04/2023 - Friday - 10:00 AM : 12:00 PM",
        content: "var vs let vs const, block scoping, spread & rest operators, array & object destructure, Object property shorthand, Template literals, Arrow functions",
        preread: "https://aravishack.medium.com/es6-features-a-walk-through-1ffd8eb82f6",
        activity: "https://docs.google.com/document/d/1EIpyPItk5xMOQluXm_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        tags: ["es5", "es6", "arrow functions", "array destructure"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 6,
        title: "JavaScript - Day -6: OOP in JS",
        time: "21/04/2023 - Friday - 1:00 PM : 3:00 PM",
        content: "Understanding the basics of prototype, What is classes in js?, consntructor, need of setters/getters, use of this key word in classes",
        preread: "No preread available",
        activity: "https://docs.google.com/document/d/1ILi6J1s3tSv8xnXImIuW5jD652BXNHNLNa0ErmRsRk/edit?usp=sharing",
        tags: ["this keyword", "OOPS"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 7,
        title: "JavaScript - Day -7: Array methods",
        time: "24/04/2023 - Monday - 6:30 PM : 9:30 PM",
        content: "Map, Reduce,  Filter, Other array methods practice in session",
        preread: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        activity: "https://docs.google.com/document/d/12wAX28odaaCy4IWdlXQQ3LOrBB3UXLsMD99X1Ve1Uc/edit?usp=sharing",
        tags: ["arrow functions", "array methods"],
        task: "fs",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 8,
        title: "HTML- Day -1 : HTML",
        time: "04/05/2023 - Thursday - 6:30 PM : 9:30 PM",
        content: "What is HTML & Why to use?, Basic Tags, HTML vs HTML5, div vs section vs article, div vs span, inline vs block elements, HTML Forms, Input elements and attributes, Form submit, Session Practice task URL: https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/001-HTML.md",
        preread: "https://developer.mozilla.org/en-US/docs/Web/HTML,https://www.w3schools.com/html/, https://html.spec.whatwg.org/multipage/",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 9,
        title: "HTML & CSS- Day -2 : HTML & CSS",
        time: "09/05/2023 - Tuesday - 6:30 PM : 9:30 PM",
        content: "What is css?, ways to use css, property & value, class vs id, use of important, display property: inline, block",
        preread: " https://www.w3schools.com/html/default.asp, https://github.com/rvsp/html-CSS/",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 10,
        title: "HTML & CSS- Day -3 : HTML & CSS",
        time: "10/05/2023 - Wednesday - 6:30 PM : 9:30 PM",
        content: "Intro to pseudo-classes (link,visited,hover,active), box model: padding,margin,border, Grid, Flex - display, direction, wrap, flex-flow, justify-content, align-content, position property: fixed,static,relative,absolute,sticky, parent inherit, gradient",
        preread: "https://rvsp.github.io/CSS/, https://web.dev/learn/css/, https://www.w3schools.com/css/, https://css-tricks.com/, https://github.com/html-CSS/",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 11,
        title: "HTML & CSS- Day -4 : HTML & CSS",
        time: "12/05/2023 - Friday - 6:30 PM : 9:30 PM",
        content: "overflow - hidden, scroll, auto, visible, dropbox, measurements, fonts, icons, media query",
        preread: "https://rvsp.github.io/CSS/, https://web.dev/learn/css/, https://www.w3schools.com/css/, https://css-tricks.com/, https://github.com/html-CSS",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 12,
        title: "HTML & CSS- Day -5 : Responsive web design",
        time: "16/05/2023 - Tuesday - 6:30 PM : 9:30 PM",
        content: "What is RWD?, What is mobile first approach?, Bootstrap, - How to setup bootstrap?, - What is the layout?, - what is container, container-fluid & container with breakpoints?, - What is a grid in bootstrap?, - what is column prefix & it's use and maximum columns for a row?, - how to do nested columns, column ordering?",
        preread: "https://getbootstrap.com/docs/4.6/getting-started/introduction/",
        activity: "From the below Title you can pick any two and complete them with responsive design. For your reference visit this URL https://github.com/HTML-CSS/tree/master/Tasks",
        tags: ["bootstrap", "RWD"],
        task: "fe",
        link: "https://meet.google.com/cvn-fzsd-toe"

    },
    {
        day: 13,
        title: "DOM- Day -1 : DOM Intor",
        time: "17/05/2023 - Wednesday - 6:30 PM : 9:30 PM",
        content: "What is DOM?, createElement, setAttribute, getElementById, querySelector vs querySelectorAll, innerHTML vs innerText, appendChild vs append",
        preread: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 14,
        title: "DOM- Day -2 : Document vs Window",
        time: "22/05/2023 - Monday - 6:30 PM : 9:30 PM",
        content: "Window - Common Util functions, setTimeout vs setInterval , prompt, Alert, confirm , working with events",
        preread: "https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 15,
        title: "DOM- Day -3 : Recap of Topics",
        time: "23/05/2023 - Tuesday - 6:30 PM : 9:30 PM",
        content: "recap of DOM topics, Mandatory session practice task, https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md",
        preread: "No preread available",
        activity: "Pagination: https://docs.google.com/document/d/1O8yVCwB_aY5rZK1_mNkZ9GeYJLeom_dYmcVN3Mb2ws/edit , HTML-Forms: https://docs.google.com/document/d/1I8qIE7_ri5Q_1QqkxJ7rdlRmGnWWW7zCa7BXwAi8hI/edit , Calculator: https://docs.google.com/document/d/1VyZJG0KZAoZEs3h_lpP65XPekqsbFp8bouOZSWsOTc/edit",
        tags: ["DOM", "html", "css"],
        task: "fe",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 16,
        title: "Pre-Placement Session",
        time: "25/05/2023 - Thursday - 2:30 PM : 4:00 PM",
        content: "Mandatory session on placement readiness  factors",
        preread: "No preread available",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 17,
        title: "Async programming- Day -1 : Callback",
        time: "29/05/2023 - Monday - 8:00 AM : 11:00 AM",
        content: "Callback, What's the callback? - callstack,webapi, eventloop, queue, Use & the purpose of the callback , Pain of callback, Session reference  - http://latentflip.com/loupe/",
        preread: "https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/",
        activity: "Callback Hell Task: https://docs.google.com/document/d/1K6jTPmqWvzoRAm2t-GlOAxKmMRsLt5zaCsdcH_3LM/edit",
        tags: ["callbacks", "callback hell", "frontend"],
        task: "fe",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 18,
        title: "Async programming- Day -2 : Promise",
        time: "29/05/2023 - Monday - 6:30 PM : 9:30 PM",
        content: "Promise, - What is promise?, - Promise States, - Promise chain, - promise.all(), - Use of fetch() & then()",
        preread: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        activity: "Rest countries task https://docs.google.com/document/d/1s5jhTeSff2rHKbC5VQjao4Jbu257dxubwEKusoA9A/edit",
        tags: ["promise", "fetch-api"],
        task: "fe",
        link: "https://meet.google.com/cvn-fzsd-toe"

    },
    {
        day: 19,
        title: "Async programming- Day -3 : Fetch-api",
        time: "30/05/2023 - Tuesday - 6:30 PM : 9:00 PM",
        content: "Promise chaining, Async/Await with error handling",
        preread: "No preread available",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    },
    {
        day: 20,
        title: "Async programming- Day -4 : Promise fetch - request info & request init",
        time: "31/05/2023 - Wednesday - 6:30 PM : 9:30 PM",
        content: "Implementing CRUD with HTML, CSS JavaScript",
        preread: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
        activity: "",
        tags: "",
        task: "",
        link: "https://meet.google.com/cvn-fzsd-toe"
    }
];