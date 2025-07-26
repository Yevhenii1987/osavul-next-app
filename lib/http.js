// import sql from 'better-sqlite3';
import xss from 'xss';

// const db = sql('meals.db');

///////// DUMMY DATA ////////////////////////

import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';
import icon1 from '@/assets/prod-icon-1.svg';
import icon2 from '@/assets/prod-icon-2.svg';
import icon3 from '@/assets/prod-icon-3.svg';
import icon4 from '@/assets/prod-icon-4.svg';
import diamond from '@/assets/Diamond.svg';
import piechart from '@/assets/PieChart.svg';
import productImg_1 from '@/assets/img-1.jpg';
import productImg_2 from '@/assets/img-2.jpg';
import productImg_3 from '@/assets/img-3.jpg';
import productImg_4 from '@/assets/img-4.jpg';
import google from '@/assets/cl-google.svg';
import canada from '@/assets/cl-canada.svg';
import airbnb from '@/assets/cl-airbnb.svg';
import nike from '@/assets/cl-nike.svg';
import stripe from '@/assets/cl-stripe.svg';
import adidas from '@/assets/cl-adidas.svg';
import puma from '@/assets/cl-puma.svg';
import ritter from '@/assets/cl-ritter.svg';
import case1 from '@/assets/case-1.jpg';
import case2 from '@/assets/case-2.jpg';
import case3 from '@/assets/case-7.jpg';
import case4 from '@/assets/case-4.jpg';
import case5 from '@/assets/case-5.jpg';
import case6 from '@/assets/case-6.jpg';
import case7 from '@/assets/case-3.jpg';
import case8 from '@/assets/case-8.jpg';
import case9 from '@/assets/case-9.jpg';
import speaker1 from '@/assets/speaker-1.jpg';
import speaker2 from '@/assets/speaker-2.jpg';
import speaker3 from '@/assets/speaker-3.jpg';
import LinkedIn from '@/assets/LinkedIn.svg';

const productsShortData = [
  {
    id: '1',
    title: 'AI Module',
    text: 'We’ve designed and built ecommerce experiences that have driven sales and increased order sizes for everything from socks, cosmetics, shoes and luxury apparel.',
    image: icon1,
    slug: 'ai-module',
  },
  {
    id: '2',
    title: 'Analytical Module',
    text: 'We’ve designed and built ecommerce experiences that have driven sales and increased order sizes for everything from socks, cosmetics, shoes and luxury apparel.',
    image: icon2,
    slug: 'analitical-module',
  },
  {
    id: '3',
    title: 'AI Module',
    text: 'We’ve designed and built ecommerce experiences that have driven sales and increased order sizes for everything from socks, cosmetics, shoes and luxury apparel.',
    image: icon3,
    slug: 'ai-module',
  },
  {
    id: '4',
    title: 'Threat Intelligence',
    text: 'We’ve designed and built ecommerce experiences that have driven sales and increased order sizes for everything from socks, cosmetics, shoes and luxury apparel.',
    image: icon4,
    slug: 'threat-intelligence',
  },
];

const productPages = [
  {
    slug: 'ai-module',
    title: 'AI Module',
    video: '/video/stock-new-york.mp4',
    text: 'Osavul`s AI Module offers automated narrative analysis and impact assessment. Automatically reveal narratives and key opinions using AI Measure the impact of narratives on target audiences Gain insights from AI and generate detailed reports.',
  },
  {
    slug: 'analitical-module',
    title: 'Analytical Module',
    video: '/video/stock-new-york.mp4',
    text: 'Osavul`s AI Module offers automated narrative analysis and impact assessment. Automatically reveal narratives and key opinions using AI Measure the impact of narratives on target audiences Gain insights from AI and generate detailed reports.',
  },
  {
    slug: 'threat-intelligence',
    title: 'Threat Intelligence',
    video: '/video/stock-new-york.mp4',
    text: 'Osavul`s AI Module offers automated narrative analysis and impact assessment. Automatically reveal narratives and key opinions using AI Measure the impact of narratives on target audiences Gain insights from AI and generate detailed reports.',
  },
];

const productsData = [
  {
    id: '1',
    title: 'Analytical Module',
    text: 'Osavul`s Analytical Module offers analysts powerful tools to:',
    image: productImg_1,
    orderLink: '/',
    slug: 'analitical-module',
    list: [
      'Access open data from social media, messaging apps, and websites',
      'Analyze videos, images, texts, and the sources that spread these messages',
      'Conduct analyses and prepare comprehensive reports',
    ],
  },
  {
    id: '2',
    title: 'AI Module',
    text: 'Osavul`s AI Module offers automated narrative analysis and impact assessment.',
    image: productImg_2,
    orderLink: '/',
    slug: 'ai-module',
    list: [
      'Measure the impact of narratives on target audiences',
      'Automatically reveal narratives and key opinions using AI',
      'Gain insights from AI and generate detailed reports',
    ],
  },
];

const productFeaturesData = [
  {
    id: '1',
    title: 'Telegram',
    text: `Osavul's AI Module offers automated narrative analysis and
impact assessment.<br /><br />Automatically reveal narratives and key opinions using AI Measure the impact of narratives on target audiences Gain insights from AI and generate detailed reports.`,
    image: productImg_1,
    orderLink: '/',
    slug: 'telegram',
    list: [],
  },
  {
    id: '2',
    title: 'Bot Detection and Monitoring',
    text: `Today's digital landscape is increasingly susceptible to Coordinated Inauthentic Behaviour (CIB) and needs such tools as bot detection and bot monitoring.`,
    image: productImg_2,
    orderLink: '/',
    slug: 'bot-detection-monitoring',
    list: [
      'Measure the impact of narratives on target audiences',
      'Automatically reveal narratives and key opinions using AI',
      'Gain insights from AI and generate detailed reports',
    ],
  },
];

const featurePages = [
  {
    slug: 'telegram',
    title: 'Telegram',
    image: case1,
    subTitle: 'Analyze Telegram Like Never Before',
    description: `The first method is simulation-based virtual reality. Driving
                  simulators, for example, give the driver on board the impression
                  that he/she is actually driving an actual vehicle by predicting
                  vehicular motion caused by driver input and feeding back
                  corresponding visual, motion, audio and proprioceptive cues to
                  the driver.\n\n
                  The simulator normally consists of several systems as follows: a
                  real-time vehicle simulation system performing real-time
                  simulation of vehicle dynamics; motion, visual and audio systems
                  reproducing vehicle motion, driving environment scenes and noise
                  sensed by a driver during driving; a control force roading
                  system acting as an interface between the driver and the
                  simulator; an operator console for monitoring system operation;
                  and system integration managing information and data transfer
                  among subsystems and synchronization.\n\n
                  Board the impression that he/she is actually driving an actual
                  vehicle by predicting vehicular motion caused by driver input
                  and feeding back corresponding visual, motion, audio and
                  proprioceptive cues to the driver.`,
  },
  {
    slug: 'bot-detection-monitoring',
    title: 'Bot Detection and Monitoring',
    image: case2,
    subTitle:
      'Today`s digital landscape is increasingly susceptible to Coordinated Inauthentic Behaviour (CIB) and needs such tools as bot detection and bot monitoring.',
    description: `The first method is simulation-based virtual reality. Driving
                  simulators, for example, give the driver on board the impression
                  that he/she is actually driving an actual vehicle by predicting
                  vehicular motion caused by driver input and feeding back
                  corresponding visual, motion, audio and proprioceptive cues to
                  the driver.\n\n
                  The simulator normally consists of several systems as follows: a
                  real-time vehicle simulation system performing real-time
                  simulation of vehicle dynamics; motion, visual and audio systems
                  reproducing vehicle motion, driving environment scenes and noise
                  sensed by a driver during driving; a control force roading
                  system acting as an interface between the driver and the
                  simulator; an operator console for monitoring system operation;
                  and system integration managing information and data transfer
                  among subsystems and synchronization.\n\n
                  Board the impression that he/she is actually driving an actual
                  vehicle by predicting vehicular motion caused by driver input
                  and feeding back corresponding visual, motion, audio and
                  proprioceptive cues to the driver.`,
  },
];

const featureAdvantagesData = [
  {
    id: '1',
    title: 'Brand Protection',
    text: `Safeguard your brand's reputation by <a href="/">monitoring Telegram</a> for mentions, discussions, and potential threats. Our software allows you to detect and respond to any brand-related issues proactively. Narrative attacks can start from a single comment, grow into a full-scale campaign attacking your company, and then migrate to other social media platforms.`,
    image: productImg_3,
  },
  {
    id: '2',
    title: 'Telegram OSINT Investigations',
    text: `Conduct Telegram investigations more effectively. Uncover valuable data, identify trends, analyze events and organizations to gather crucial information to support your investigative efforts.<br /><br /> Visualize the network of channels and their connections. Delve deeper into source profiles to gain better insights.`,
    image: productImg_4,
  },
  {
    id: '3',
    title: `Boost your cybersecurity`,
    text: `Telegram analysis is an essential part of the cybersecurity stack. To enhance your solutions or services, this essential option allows you <a href="/">to monitor everything</a> from data leaks to information attacks with our AI-powered solution and extensive collection of channels and groups. 
<br /><br />
Both cybersecurity providers and specialist can benefit from our solution.`,
    image: productImg_3,
  },
];

const featuresList = [
  {
    icon: diamond,
    title: 'TikTok',
    text: 'Lay the foundations for your product’s design system with reusable, responsive components that automatically scale to fit their content.',
  },
  {
    icon: diamond,
    title: 'TikTok',
    text: 'Lay the foundations for your product’s design system with reusable, responsive components that automatically scale to fit their content.',
  },
  {
    icon: piechart,
    title: 'TikTok',
    text: 'Lay the foundations for your product’s design system with reusable, responsive components that automatically scale.',
  },
  {
    icon: piechart,
    title: 'TikTok',
    text: 'Lay the foundations for your product’s design system with reusable, responsive components that automatically scale.',
  },
  {
    icon: diamond,
    title: 'Bring your ideas to life',
    text: 'From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test',
  },
  {
    icon: diamond,
    title: 'Bring your ideas to life',
    text: 'Lay the foundations for your product’s design system with reusable, responsive components that automatically scale to fit their content.',
  },
  {
    icon: piechart,
    title: 'Bring your ideas to life',
    text: 'From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test to full user flows.',
  },
];

const advantagesData = {
  sectionTitle: 'Why you should choose us?',
  sectionCaption:
    'Osavul leverages AI-driven technology to protect organizations from various information threats.',
  stat: [
    {
      num: 50,
      text: 'Satisfied partners',
    },
    {
      num: 600,
      text: 'Major information threats detected in 2023',
    },
    {
      num: 100,
      text: 'Countries covered',
    },
  ],
  adv: [
    {
      img: diamond,
      title: 'Protecting information',
      text: `Osavul's mission is to protect society from disinformation and manipulation by malicious actors.`,
    },
    {
      img: piechart,
      title: 'Not misleading',
      text: 'Osavul Company does not use its technologies to mislead people, produce disinformation or increase divide and mistrust between social groups.',
    },
    {
      img: piechart,
      title: 'Democratic values',
      text: 'Osavul Company stands on democratic values, freedom of speech, self-determination, and self-expression for each individual.',
    },
    {
      img: diamond,
      title: 'Assisting governments',
      text: 'All our efforts are dedicated to assisting democratic governments in protecting their citizens and guarding responsible business organizations against information threats, building media resilience together with society.',
    },
  ],
};

const metricsData = {
  sectionTitle: 'Key Metrics',
  sectionCaption:
    'Osavul leverages AI-driven technology to protect organizations from various information threats.',
  stat: [
    {
      num: 50,
      text: 'Satisfied partners',
    },
    {
      num: 600,
      text: 'Major information threats detected in 2023',
    },
    {
      num: 100,
      text: 'Countries covered',
    },
  ],
  adv: [
    {
      img: diamond,
      title: 'Protecting information',
      text: `Osavul's mission is to protect society from disinformation and manipulation by malicious actors.`,
    },
    {
      img: diamond,
      title: 'Not misleading',
      text: 'Osavul Company does not use its technologies to mislead people, produce disinformation or increase divide and mistrust between social groups.',
    },
    {
      img: piechart,
      title: 'Democratic values',
      text: 'Osavul Company stands on democratic values, freedom of speech, self-determination, and self-expression for each individual.',
    },
    {
      img: piechart,
      title: 'Assisting governments',
      text: 'All our efforts are dedicated to assisting democratic governments in protecting their citizens and guarding responsible business organizations against information threats, building media resilience together with society.',
    },
  ],
};

const news = [
  {
    id: 1,
    img: news1,
    title: '5 Devastating Social Media Attacks and The Ways to Fight With',
    slug: 'news-1',
    tag: 'Blog',
    date: '2024-12-24',
    formattedDate: 'Dec 24, 2024',
    zoomLink: false,
  },
  {
    id: 2,
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: '2024-12-18',
    formattedDate: 'Dec 18, 2024 ⋅ 12 PM EST (NY time)',
    zoomLink: '/',
  },
  {
    id: 3,
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: '2023-10-10',
    formattedDate: 'Oct 10, 2023',
    zoomLink: false,
  },
  {
    id: 4,
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: '2024-12-18',
    formattedDate: 'Dec 18, 2024 ⋅ 12 PM EST (NY time)',
    zoomLink: '/',
  },
  {
    id: 5,
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: '2023-10-10',
    formattedDate: 'Oct 10, 2023',
    zoomLink: false,
  },
  {
    id: 6,
    img: news1,
    title: '5 Devastating Social Media Attacks and The Ways to Fight With',
    slug: 'news-1',
    tag: 'Blog',
    date: '2024-12-24',
    formattedDate: 'Dec 24, 2024',
    zoomLink: false,
  },
  {
    id: 7,
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: '2024-12-18',
    formattedDate: 'Dec 18, 2024 ⋅ 12 PM EST (NY time)',
    zoomLink: '/',
  },
  {
    id: 8,
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: '2023-10-10',
    formattedDate: 'Oct 10, 2023',
    zoomLink: false,
  },
  {
    id: 9,
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: '2024-12-18',
    formattedDate: 'Dec 18, 2024 ⋅ 12 PM EST (NY time)',
    zoomLink: '/',
  },
  {
    id: 10,
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: '2023-10-10',
    formattedDate: 'Oct 10, 2023',
    zoomLink: false,
  },
];

const articles = [
  {
    img: news1,
    title: '5 Devastating Social Media Attacks and The Ways to Fight With',
    slug: 'news-1',
    tag: 'Blog',
    date: 'Dec 24, 2024',
    zoomLink: false,
  },
  {
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: 'Dec 18, 2024 ⋅ 12 PM EST (NY time) ⋅ ',
    zoomLink: '/',
  },
  {
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: 'Oct 10, 2023',
    zoomLink: false,
  },
  {
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    slug: 'news-2',
    tag: 'Webinar',
    date: 'Dec 18, 2024 ⋅ 12 PM EST (NY time) ⋅ ',
    zoomLink: '/',
  },
  {
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    slug: 'news-3',
    tag: 'News',
    date: 'Oct 10, 2023',
    zoomLink: false,
  },
];

const careers = [
  {
    title: 'Cyber Threat Intelligence Analyst',
    slug: 'career-1',
    skills: [
      'Data analysis;',
      'Investigation tools;',
      'Proficiency in Python;',
      'Security tools;',
    ],
    location: 'Remote',
  },
  {
    title: 'Middle Full Stack Engineer',
    slug: 'career-2',
    skills: [
      'Strong Python skills;',
      'Proficiency in JavaScript;',
      'React, and TypeScript;',
      'Vue.js;',
    ],
    location: 'Kiev, Ukraine /<br /> New York, USA',
  },
  {
    title: 'Senior AI Engineer',
    slug: 'career-3',
    skills: [
      'Python; FastAPI; Docker;',
      'PostgreSQL;',
      'Elasticsearch;',
      'Asynchronous programming;',
    ],
    location: 'Remote',
  },
  {
    title: 'Cyber Threat Intelligence Analyst',
    slug: 'career-1',
    skills: [
      'Data analysis;',
      'Investigation tools;',
      'Proficiency in Python;',
      'Security tools;',
    ],
    location: 'Remote',
  },
  {
    title: 'Middle Full Stack Engineer',
    slug: 'career-2',
    skills: [
      'Strong Python skills;',
      'Proficiency in JavaScript;',
      'React, and TypeScript;',
      'Vue.js;',
    ],
    location: 'Kiev, Ukraine /<br /> New York, USA',
  },
  {
    title: 'Senior AI Engineer',
    slug: 'career-3',
    skills: [
      'Python; FastAPI; Docker;',
      'PostgreSQL;',
      'Elasticsearch;',
      'Asynchronous programming;',
    ],
    location: 'Remote',
  },
  {
    title: 'Cyber Threat Intelligence Analyst',
    slug: 'career-1',
    skills: [
      'Data analysis;',
      'Investigation tools;',
      'Proficiency in Python;',
      'Security tools;',
    ],
    location: 'Remote',
  },
  {
    title: 'Middle Full Stack Engineer',
    slug: 'career-2',
    skills: [
      'Strong Python skills;',
      'Proficiency in JavaScript;',
      'React, and TypeScript;',
      'Vue.js;',
    ],
    location: 'Kiev, Ukraine /<br /> New York, USA',
  },
  {
    title: 'Senior AI Engineer',
    slug: 'career-3',
    skills: [
      'Python; FastAPI; Docker;',
      'PostgreSQL;',
      'Elasticsearch;',
      'Asynchronous programming;',
    ],
    location: 'Remote',
  },
  {
    title: 'Cyber Threat Intelligence Analyst',
    slug: 'career-1',
    skills: [
      'Data analysis;',
      'Investigation tools;',
      'Proficiency in Python;',
      'Security tools;',
    ],
    location: 'Remote',
  },
  {
    title: 'Middle Full Stack Engineer',
    slug: 'career-2',
    skills: [
      'Strong Python skills;',
      'Proficiency in JavaScript;',
      'React, and TypeScript;',
      'Vue.js;',
    ],
    location: 'Kiev, Ukraine /<br /> New York, USA',
  },
  {
    title: 'Senior AI Engineer',
    slug: 'career-3',
    skills: [
      'Python; FastAPI; Docker;',
      'PostgreSQL;',
      'Elasticsearch;',
      'Asynchronous programming;',
    ],
    location: 'Remote',
  },
];

const casesData = {
  enableBlock: true,
  cases: [
    {
      img: case1,
      slug: 'case-1',
      title: 'From Russia with Automation: August 2024 Public Report',
      list: [
        {
          icon: icon1,
          title: 'Challenge',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
        {
          icon: icon2,
          title: 'Result',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
      ],
    },
    {
      img: case2,
      slug: 'case-2',
      title: 'From Russia with Automation: August 2024 Public Report',
      list: [
        {
          icon: icon1,
          title: 'Challenge',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
        {
          icon: icon2,
          title: 'Result',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
      ],
    },
    {
      img: case3,
      slug: 'case-3',
      title: 'From Russia with Automation: August 2024 Public Report',
      list: [
        {
          icon: icon1,
          title: 'Challenge',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
        {
          icon: icon2,
          title: 'Result',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
      ],
    },
    {
      img: case4,
      slug: 'case-4',
      title: 'From Russia with Automation: August 2024 Public Report',
      list: [
        {
          icon: icon1,
          title: 'Challenge',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
        {
          icon: icon2,
          title: 'Result',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
      ],
    },
    {
      img: case5,
      slug: 'case-5',
      title: 'From Russia with Automation: August 2024 Public Report',
      list: [
        {
          icon: icon1,
          title: 'Challenge',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
        {
          icon: icon2,
          title: 'Result',
          text: 'Analysis of key narratives such as NATO being an aggressor, internal disunity, moral decay, dependency on the US, and perceived ineffectiveness.',
        },
      ],
    },
  ],
};

const casesAll = [
  {
    title: 'From Russia with Automation: August 2024 Public Report',
    image: case1,
    slug: 'case-1',
  },
  {
    title:
      "Dissecting The Ukrainian President's Alleged Villa Scandal: A Closer Look at the Disinformation Attack",
    image: case2,
    slug: 'case-2',
  },
  {
    title: 'MAIDAN 3 INformation operation against Ukraine (research)',
    image: case3,
    slug: 'case-3',
  },
  {
    title: 'Case study: Russian Hidden Racism Vocabulary',
    image: null,
    slug: 'case-4',
  },
  {
    title: 'Russian Info attack on fort Irwin',
    image: case4,
    slug: 'case-5',
  },
  {
    title: 'Case study: Russian Hidden Racism Vocabulary',
    image: null,
    slug: 'case-6',
  },
  {
    title: 'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
    image: case5,
    slug: 'case-7',
  },
  {
    title: 'Case study: Russian Hidden Racism Vocabulary',
    image: null,
    slug: 'case-8',
  },
  {
    title: 'Russian propaganda in sports: brief study',
    image: case6,
    slug: 'case-9',
  },
  {
    title: "THE NUCLEAR PUSH: HOW RUSSIA USES FIMI FOR ROSATOM'S GLOBAL REACH",
    image: case7,
    slug: 'case-10',
  },
  {
    title: 'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
    image: case8,
    slug: 'case-11',
  },
  {
    title: 'Case study: Russian Hidden Racism Vocabulary',
    image: case9,
    slug: 'case-12',
  },
  {
    title: 'MAIDAN 3 INformation operation against Ukraine (research)',
    image: case3,
    slug: 'case-13',
  },
  {
    title: 'Russian Info attack on fort Irwin',
    image: case4,
    slug: 'case-14',
  },
  {
    title: 'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
    image: case5,
    slug: 'case-15',
  },
  {
    title: 'Russian propaganda in sports: brief study',
    image: case6,
    slug: 'case-16',
  },
];

const clients = [
  {
    name: 'google',
    logo: google,
  },
  {
    name: 'canada',
    logo: canada,
  },
  {
    name: 'airbnb',
    logo: airbnb,
  },
  {
    name: 'nike',
    logo: nike,
  },
  {
    name: 'stripe',
    logo: stripe,
  },
  {
    name: 'adidas',
    logo: adidas,
  },
  {
    name: 'puma',
    logo: puma,
  },
  {
    name: 'ritter',
    logo: ritter,
  },
];

const awardsData = {
  enableBlock: true,
  awards: [
    {
      name: 'Google',
      img: google,
    },
    {
      name: 'Canada',
      img: canada,
    },
  ],
};

const caseData = {
  showForm: false,
  title: 'From Russia with Automation: August 2024 Public Report',
  details: `Scene graphs for dense regular objects such as heightfields and
                this polygon meshes tend to employ quadtrees and octrees, which
                are specialized variants of a 3D bounding box hierarchy. Since a
                heightfield occupies a box volume itself, recursively
                subdividing this box into eight subboxes`,
  nav: [
    {
      name: 'Summary',
      id: 'summary',
    },
    {
      name: 'Map',
      id: 'map',
    },
    {
      name: 'France',
      id: 'france',
    },
    {
      name: 'Network',
      id: 'network',
    },
  ],
  article: `<p>
              The first method is simulation-based <b>virtual reality</b>.
              Driving simulators, for example, give the driver on board the
              impression that he/she is actually driving an actual vehicle by
              predicting vehicular motion caused by driver input and feeding
              back corresponding visual, motion, audio and proprioceptive cues
              to the driver.
            </p>
            <br />
            <p>
              The simulator normally consists of several systems as follows: a
              real-time vehicle simulation system performing real-time
              simulation of vehicle dynamics; motion,
              <b>visual and audio systems</b>
              reproducing vehicle motion, driving environment scenes and noise
              sensed by a driver during driving; a control force roading system
              acting as an interface between the driver and the simulator; an
              operator console for monitoring system operation; and system
              integration managing information and data transfer among
              subsystems and synchronization.
            </p>
            <br />
            <p>
              The driving simulators have been used effectively for vehicle
              <a href="#">system development</a>, safety improvement and human
              factor study.
            </p>
            <h3 id="summary">
              The first method is simulation-based virtual reality. Driving
              simulators
            </h3>
            <ul>
              <li>The first method is simulation-based virtual reality</li>
              <li>
                Driving simulators, for example, give the driver on board the
                impression that he/she is actually driving an actual
              </li>
              <li>
                Vehicle by predicting vehicular motion caused by driver input
                and feeding back corresponding visual
              </li>
              <li>Motion, audio and proprioceptive cues to the driver</li>
            </ul>
            <br />
            <p>
              The simulator normally consists of several systems as follows: a
              real-time vehicle simulation system performing real-time
              simulation of vehicle dynamics; motion, visual and audio systems
              reproducing vehicle motion, driving environment scenes and noise
              sensed by a driver during driving; a control force roading system
              acting as an interface between the driver and the simulator; an
              operator console for monitoring system operation; and system
              integration managing information and data transfer among
              subsystems and synchronization.
            </p>
            <br />
            <p>
              The driving simulators have been used effectively for vehicle
              system development, safety improvement and human factor study.
            </p>
            <img id="map" src="/images/image-1.jpg" alt=" " />
            <h4 id="france">Automated Propaganda Networks</h4>
            <p>
              A deep dive into the tactics Russia uses to evade sanctions and
              pread disinformation through alternative domains.
            </p>
            <br />
            <br />
            <h4>Cross-platform Influence</h4>
            <p>Learn what accounts spread RT news narratives.</p>
            <br />
            <br />
            <h4 id="network">German Political Discourse</h4>
            <p>
              Examining how pro-Russian content manipulates public perception
              around Germany’s security and defense decisions.
            </p>
            <h3>Why Should You Read It?</h3>
            <p>
              This is a must-read for those i media, politics, fact-checking and
              monitoring info threats, providing a comprehensive view of
              how automation is being used to scale disinformation efforts.
            </p>
            <p>
              The US government has opened several investigations on RT's
              activities inside the USA. The same activity is conducted in other
              countries.
            </p>
            <p>Be ahead of information threats bared by the Russian outlets.</p>`,
};

const articleData = {
  showForm: true,
  title: 'From Russia with Automation: August 2024 Public Report',
  details: `September 12, 2024, 11 am (CET)<br /><br />
  123 Main Street, Apt 4B<br />
  Anytown, CA 91234<br />
  USA`,
  nav: [
    {
      name: 'Summary',
      id: 'summary',
    },
    {
      name: 'Map',
      id: 'map',
    },
    {
      name: 'France',
      id: 'france',
    },
    {
      name: 'Network',
      id: 'network',
    },
  ],
  article: `<p>Delaware & Kyiv — <a href="/">Osavul</a>, an AI-powered media intelligence company, receives a seed investment of $3 mln (€2.78 mln) from three European investors: <a href="/">42CAP</a>, <a href="/">u.ventures</a>, and <a href="/">SMRK</a>. This makes it one of the biggest investments in Europe in this sector.</p><br />
              <p>Founded in February 2022 in response to the Russian invasion of Ukraine and aimed at tackling disinformation, Osavul has developed an AI-driven intelligence platform for information environment assessment. The solution is capable of working with data from text, video, audio formats across various platforms such as websites, social media, etc.</p><br />
              <p>Osavul has built a trusted reputation on the market. It started as an innovative approach to propaganda disinformation deception and achieved the title of an Honorary Digital Ambassador of Ukraine. Then, it advanced to become a technology partner for the EU Commission-funded projects. Most recently, Osavul assisted in <a href="/">the analysis</a> of information warfare targeting NATO.</p><br /> ‍
              <p><strong>With this round of funding, Osavul aims to scale its operations globally, enhance its AI algorithms, accelerate its outreach, and offer new opportunities for the B2B segment.‍</strong></p><br />
              <p>With tools for analyzing information narratives, their sources, and ways of spreading, it’ll be possible to prevent reputation threats and run media intelligence analytics without costly research.</p><br />
              <p>The largest investment is made by 42CAP, an early stage German VC.</p>
            <ul>
              <li>The first method is simulation-based virtual reality</li>
              <li>
                Driving simulators, for example, give the driver on board the
                impression that he/she is actually driving an actual
              </li>
              <li>
                Vehicle by predicting vehicular motion caused by driver input
                and feeding back corresponding visual
              </li>
              <li>Motion, audio and proprioceptive cues to the driver</li>
            </ul>
            <br />
            <p>
              The simulator normally consists of several systems as follows: a
              real-time vehicle simulation system performing real-time
              simulation of vehicle dynamics; motion, visual and audio systems
              reproducing vehicle motion, driving environment scenes and noise
              sensed by a driver during driving; a control force roading system
              acting as an interface between the driver and the simulator; an
              operator console for monitoring system operation; and system
              integration managing information and data transfer among
              subsystems and synchronization.
            </p>
            <br />
            <p>
              The driving simulators have been used effectively for vehicle
              system development, safety improvement and human factor study.
            </p>
            <div id="speakers" class="speakers-carousel"></div>
            <h4 id="france">Automated Propaganda Networks</h4>
            <p>
              A deep dive into the tactics Russia uses to evade sanctions and
              pread disinformation through alternative domains.
            </p>
            <br />
            <br />
            <h4>Cross-platform Influence</h4>
            <p>Learn what accounts spread RT news narratives.</p>
            <br />
            <br />
            <h4 id="network">German Political Discourse</h4>
            <p>
              Examining how pro-Russian content manipulates public perception
              around Germany’s security and defense decisions.
            </p>
            <h3>Why Should You Read It?</h3>
            <p>
              This is a must-read for those i media, politics, fact-checking and
              monitoring info threats, providing a comprehensive view of
              how automation is being used to scale disinformation efforts.
            </p>
            <p>
              The US government has opened several investigations on RT's
              activities inside the USA. The same activity is conducted in other
              countries.
            </p>
            <p>Be ahead of information threats bared by the Russian outlets.</p>`,
};

const a = {
  article_part_1: `<p>Delaware & Kyiv — <a href="/">Osavul</a>, an AI-powered media intelligence company, receives a seed investment of $3 mln (€2.78 mln) from three European investors: <a href="/">42CAP</a>, <a href="/">u.ventures</a>, and <a href="/">SMRK</a>. This makes it one of the biggest investments in Europe in this sector.</p><br />
              <p>Founded in February 2022 in response to the Russian invasion of Ukraine and aimed at tackling disinformation, Osavul has developed an AI-driven intelligence platform for information environment assessment. The solution is capable of working with data from text, video, audio formats across various platforms such as websites, social media, etc.</p><br />
              <p>Osavul has built a trusted reputation on the market. It started as an innovative approach to propaganda disinformation deception and achieved the title of an Honorary Digital Ambassador of Ukraine. Then, it advanced to become a technology partner for the EU Commission-funded projects. Most recently, Osavul assisted in <a href="/">the analysis</a> of information warfare targeting NATO.</p><br /> ‍
              <p><strong>With this round of funding, Osavul aims to scale its operations globally, enhance its AI algorithms, accelerate its outreach, and offer new opportunities for the B2B segment.‍</strong></p><br />
              <p>With tools for analyzing information narratives, their sources, and ways of spreading, it’ll be possible to prevent reputation threats and run media intelligence analytics without costly research.</p><br />
              <p>The largest investment is made by 42CAP, an early stage German VC.</p>
            <ul>
              <li>The first method is simulation-based virtual reality</li>
              <li>
                Driving simulators, for example, give the driver on board the
                impression that he/she is actually driving an actual
              </li>
              <li>
                Vehicle by predicting vehicular motion caused by driver input
                and feeding back corresponding visual
              </li>
              <li>Motion, audio and proprioceptive cues to the driver</li>
            </ul>
            <br />
            <p>
              The simulator normally consists of several systems as follows: a
              real-time vehicle simulation system performing real-time
              simulation of vehicle dynamics; motion, visual and audio systems
              reproducing vehicle motion, driving environment scenes and noise
              sensed by a driver during driving; a control force roading system
              acting as an interface between the driver and the simulator; an
              operator console for monitoring system operation; and system
              integration managing information and data transfer among
              subsystems and synchronization.
            </p>
            <br />
            <p>
              The driving simulators have been used effectively for vehicle
              system development, safety improvement and human factor study.
            </p>`,
  article_part_2: `<h4 id="france">Automated Propaganda Networks</h4>
            <p>
              A deep dive into the tactics Russia uses to evade sanctions and
              pread disinformation through alternative domains.
            </p>
            <br />
            <br />
            <h4>Cross-platform Influence</h4>
            <p>Learn what accounts spread RT news narratives.</p>
            <br />
            <br />
            <h4 id="network">German Political Discourse</h4>
            <p>
              Examining how pro-Russian content manipulates public perception
              around Germany’s security and defense decisions.
            </p>
            <h3>Why Should You Read It?</h3>
            <p>
              This is a must-read for those i media, politics, fact-checking and
              monitoring info threats, providing a comprehensive view of
              how automation is being used to scale disinformation efforts.
            </p>
            <p>
              The US government has opened several investigations on RT's
              activities inside the USA. The same activity is conducted in other
              countries.
            </p>
            <p>Be ahead of information threats bared by the Russian outlets.</p>`,
};

const speakers = [
  {
    img: speaker1,
    name: 'Jared Meade',
    company: 'Rayne Strategy Group',
    position: 'Founder and Principal',
    soc_link: '/',
    soc_icon: LinkedIn,
  },
  {
    img: speaker2,
    name: 'Beatrice I.Bourdel-Grant',
    company: 'Kinetic Consulting',
    position: 'Strategic Business Consultant',
    soc_link: '/',
    soc_icon: LinkedIn,
  },
  {
    img: speaker3,
    name: 'Beatrice I.Bourdel-Grant',
    company: 'Kinetic Consulting',
    position: 'Strategic Business Consultant',
    soc_link: '/',
    soc_icon: LinkedIn,
  },
  {
    img: speaker1,
    name: 'Jared Meade',
    company: 'Rayne Strategy Group',
    position: 'Founder and Principal',
    soc_link: '/',
    soc_icon: LinkedIn,
  },
  {
    img: speaker2,
    name: 'Beatrice I.Bourdel-Grant',
    company: 'Kinetic Consulting',
    position: 'Strategic Business Consultant',
    soc_link: '/',
    soc_icon: LinkedIn,
  },
];

const careerData = {
  showForm: true,
  title: 'From Russia with Automation: August 2024 Public Report',
  location: 'Remote',
  nav: [
    {
      name: 'Role Overview',
      id: 'role',
    },
    {
      name: 'Key Responsibilities',
      id: 'responsibilities',
    },
    {
      name: 'Requirements',
      id: 'reqs',
    },
    {
      name: 'We Offer',
      id: 'offer',
    },
  ],
  article: `<p>
                Are you passionate about safeguarding countries, societies, and
                businesses from information threats? Look no further! Our
                rapidly scaling company is passionately committed to this
                crucial mission, offering you a privileged opportunity to
                collaborate with some of the world’s most influential
                organizations, including NATO and the EU.
              </p>
              <br />
              <p>
                If you’re ready to join a dynamic team working towards a common
                vision of a safer digital world, we invite you to be a part of
                our journey. Shape the future with us and help defend against
                online threats with purpose and innovation!
              </p>
              <br />
              <h3 id="role">Role Overview:</h3>
              <br />
              <p>
                We’re on the lookout for a skilled Analyst who is passionate
                about cyber threat prevention and intelligence, and who thrives
                on uncovering malicious activity in the digital landscape.
              </p>
              <br />
              <p>
                The ideal candidate will have hands-on experience in cyber
                threat hunting, digital forensics, and intelligence gathering,
                with a strong track record of identifying, analyzing, and
                reporting on emerging cyber threats.
              </p>
              <br />
              <p>
                This role requires deep analytical skills, technical fluency,
                and the ability to work across complex online environments to
                deliver actionable insights that help organizations stay ahead
                of evolving cyber threats.
              </p>
              <br />
              <h3 id="responsibilities">Key Responsibilities:</h3>
              <br />
              <ul>
                <li>Conduct proactive cyber threat hunting across a range of digital platforms and datasets.</li>
                <li>Research and monitor web, deep web, and dark web sources to identify indicators of compromise, malicious actors, and emerging tactics.</li>
                <li>Analyze and produce threat intelligence reports that include detailed attribution, technical indicators, and strategic insights.</li>
                <li>Maintain and enrich internal threat intelligence databases and tools with relevant findings.</li>
                <li>Stay up to date with current cyber threats, tactics, techniques, and procedures (TTPs) and apply this knowledge to ongoing investigations.</li>
              </ul>
              <br />
              <h3 id="reqs">Requirements</h3>
              <br />
              <ul>
                <li><strong>Minimum of 3 years of experience</strong> in cyber threat intelligence, threat hunting, or incident response.</li>
                <li>Demonstrated experience working with threat intelligence platforms, security tools, and relevant frameworks (e.g., MITRE ATT&CK).</li>
                <li>Strong understanding of cyber threat landscapes, including malicious actors and their methods.</li>
                <li>Experience with data analysis and investigation tools (e.g., SIEMs, OSINT platforms, malware sandboxes).</li>
                <li>Proficiency in Python, or other scripting languages used for automating analysis tasks.</li>
                <li>Familiarity with APIs, regular expressions, and basic querying languages (e.g., SQL).</li>
              </ul>
              <br />
              <h3 id="offer">We Offer:</h3>
              <br />
              <ul>
                <li>Opportunity to contribute to a mission-driven startup and support prestigious clients, including governments worldwide, enterprise clients, and leading NGOs in addressing information threats and tackling security challenges.</li>
                <li>Autonomy and freedom to drive experiments and bring your own ideas to life.</li>
                <li>Becoming a key contributor, you’ll also be rewarded with our stock compensation program.</li>
                <li>Flexibility of fully remote work.</li>
                <li>Flexible, unlimited time-off policy.</li>
              </ul>`,
};

const blogFormData = {
  title: 'Like this event?',
  text: 'Leave your contact to register',
  submitText: 'Register',
  fields: [
    {
      type: 'text',
      name: 'full-name',
      placeholder: 'First and last name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
    },
    {
      type: 'text',
      name: 'organisation',
      placeholder: 'Organisation',
    },
  ],
};
const careerFormData = {
  title: 'Want to join our team?',
  text: 'Leave your contact',
  submitText: 'Register',
  fields: [
    {
      type: 'text',
      name: 'full-name',
      placeholder: 'First and last name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
    },
    {
      type: 'text',
      name: 'phone',
      placeholder: 'Phone number',
    },
  ],
};
const contactsFormData = {
  title: 'Got a question?',
  text: 'Fill out the form below, and our representative will contact you as soon as possible.',
  submitText: 'Submit',
  fields: [
    {
      type: 'text',
      name: 'full-name',
      placeholder: 'First and last name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
    },
    {
      type: 'text',
      name: 'phone',
      placeholder: 'Phone',
    },
    {
      type: 'text',
      name: 'company',
      placeholder: 'Company',
    },
    {
      type: 'textarea',
      name: 'message',
      placeholder: 'Message',
    },
  ],
};
const bookingFormData = {
  title: 'Book demo',
  text: 'Experience streamlined communication. Complete the form below, and our representative will reach out to you shortly after submission.',
  submitText: 'Submit',
  fields: [
    {
      type: 'text',
      name: 'full-name',
      placeholder: 'First and last name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email address',
    },
    {
      type: 'text',
      name: 'company',
      placeholder: 'Company',
    },
    {
      type: 'textarea',
      name: 'message',
      placeholder: 'Message',
    },
  ],
};

export async function getFormData(formType) {
  if (formType === 'blog-form') {
    return blogFormData;
  }
  if (formType === 'career-form') {
    return careerFormData;
  }
  if (formType === 'contacts-form') {
    return contactsFormData;
  }
  if (formType === 'booking-form') {
    return bookingFormData;
  }
}

//////////////////////////////////////////

export async function getShortProducts() {
  // Database or fetch

  // return db.prepare('SELECT * FROM products').all();

  ////////////////////////////////////////////////////////
  // const response = await fetch('https://api/products');
  // if (!response.ok) {
  //   const error = new Error('Loading products failed');
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }
  // const products = await response.json();
  // return products;

  return productsShortData;
}

export async function getProducts() {
  return productsData;
}

export async function getAdvantagesData() {
  return advantagesData;
}

export async function getMetricsData() {
  return metricsData;
}

export async function getNews(tag = 'all') {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // const newsArr = news.sort(() => Math.random() - 0.5);
  return {
    newsTag: tag,
    news: news,
    // news: newsArr,
  };
}

export async function getSpeakers() {
  return speakers;
}

export async function getArticles(tag = 'all', page = 1) {
  console.log(`fetching page ${page}...`);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    articlesTag: tag,
    pageNum: page,
    pagesCount: 10,
    articles: articles,
  };
}
export async function getCareers(page = 1) {
  console.log(`fetching page ${page}...`);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    pageNum: page,
    pagesCount: 10,
    careers: careers,
  };
}

export async function getAllCases(page = 1) {
  console.log(`fetching page ${page}...`);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    pageNum: page,
    pagesCount: 10,
    cases: casesAll,
  };
}

export async function getProductFeaturesData() {
  return productFeaturesData;
}

export async function getCases(page = 1) {
  return casesData;
}

export function getClients() {
  return clients;
}

export function getAwards() {
  return awardsData;
}

export function getAllFeatures() {
  return featuresList;
}

export function getProduct(slug) {
  // return db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
  return productPages.find((prod) => prod.slug === slug);
}

export function getCase(slug) {
  caseData.title = casesAll.casesData.find((item) => item.slug === slug).title;
  return caseData;
}
export function getArticle(slug) {
  articleData.title = articles.find((item) => item.slug === slug).title;
  return articleData;
}
export function getCareer(slug) {
  careerData.title = careers.find((item) => item.slug === slug).title;
  return careerData;
}

export function getFeature(slug) {
  return featurePages.find((feature) => feature.slug === slug);
}

export function getFeatureAdvantages() {
  return featureAdvantagesData;
}

export async function sendRequest(data, url) {
  data.name = xss(data?.name);
  data.email = xss(data?.email);
  data.phone = xss(data?.phone);
  data.company = xss(data?.company);
  data.organisation = xss(data?.organisation);
  data.message = xss(data?.message);

  console.log(data);

  // const response = await fetch(`http://api/${url}`, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // if (!response.ok) {
  //   const error = new Error('An error occurred while deleting the event');
  //   error.code = response.status;
  //   error.info = await response.json();
  //   throw error;
  // }

  // return response.json();
}
