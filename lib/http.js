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
    img: news1,
    title: '5 Devastating Social Media Attacks and The Ways to Fight With',
    link: '/',
    tag: 'Blog',
    date: 'Dec 24, 2024',
    zoomLink: false,
  },
  {
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    link: '/',
    tag: 'Webinar',
    date: 'Dec 18, 2024 ⋅ 12 PM EST (NY time) ⋅ ',
    zoomLink: '/',
  },
  {
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    link: '/',
    tag: 'News',
    date: 'Oct 10, 2023',
    zoomLink: false,
  },
  {
    img: news2,
    title:
      'Osavul Webinar: Navigating information threats for PR and Strategy Specialists',
    link: '/',
    tag: 'Webinar',
    date: 'Dec 18, 2024 ⋅ 12 PM EST (NY time) ⋅ ',
    zoomLink: '/',
  },
  {
    img: news3,
    title:
      'Osavul Makes It to the "Rising UA Startups: Resilience Edition" List',
    link: '/',
    tag: 'News',
    date: 'Oct 10, 2023',
    zoomLink: false,
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

const casesAll = {
  pageNum: 1,
  isFirstPage: true,
  isLastPage: false,
  casesData: [
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
      title:
        'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
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
      title:
        "THE NUCLEAR PUSH: HOW RUSSIA USES FIMI FOR ROSATOM'S GLOBAL REACH",
      image: case7,
      slug: 'case-10',
    },
    {
      title:
        'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
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
      title:
        'Russian Propaganda in the Hamas-Israeli war: The war crimes denial',
      image: case5,
      slug: 'case-15',
    },
    {
      title: 'Russian propaganda in sports: brief study',
      image: case6,
      slug: 'case-16',
    },
  ],
};

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
  return {
    newsTag: tag,
    news: news,
  };
}

export async function getProductFeaturesData() {
  return productFeaturesData;
}

export async function getCases() {
  return casesData;
}

export async function getAllCases() {
  // test loading fallback
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return casesAll;
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
  caseData.title = casesAll.find((item) => item.slug === slug).title;
  return caseData;
}

export function getFeature(slug) {
  return featurePages.find((feature) => feature.slug === slug);
}

export function getFeatureAdvantages() {
  return featureAdvantagesData;
}

export async function sendBookingRequest(data) {
  data.email = xss(data.email);

  const response = await fetch(`http://api/book`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
