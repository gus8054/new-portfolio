const logo = "/images/logo.png";
const programmer = "/images/programmer.jpg";
const myPhoto = "/images/myPhoto.png";
const htmlImg = "/images/html5.webp";
const cssImg = "/images/css3.webp";
const jsImg = "/images/JS.webp";
const nodeJsImg = "/images/JS_Node.webp";
const nextImg = "/images/next.webp";
const pythonImg = "/images/python.webp";
const reactImg = "/images/React.webp";
const reduxImg = "/images/redux.webp";
const tailwindCSSImg = "/images/tailwindcss.webp";
const typescriptImg = "/images/typescript.webp";
const viteImg = "/images/vite.webp";
const styledComponentsImg = "/images/styledcomponents.webp";
const reactRouterImg = "/images/reactRouter.webp";
const jwtImg = "/images/jwt.webp";
const mysqlImg = "/images/mysql.webp";

export const about = `
4년제 소프트웨어 공학과 학과 수석 졸업하였고 블록체인, AI 교육 프로그램을 이수한 경험이 있습니다.
일반인 및 학생들 대상으로 코딩 교육을 가르쳐본 강사 경험이 있습니다.
현재는 프론트 엔드 개발자로 일하기 위해 관련 공부를 하고 있습니다.
`;

export const workExperiences = [
  {
    date: "2019.05",
    title: "정보처리 기사",
    subtitle: "한국산업인력공단",
    detail: ["자격증 취득"],
  },
  {
    date: "2020.02",
    title: "대학교 졸업",
    subtitle: "동의대학교",
    detail: ["학사 취득"],
  },
  {
    date: "2020.06 - 2020.10",
    title: "블록체인",
    subtitle: "주최: 동의대학교",
    detail: ["블록체인 개념", "탈중앙화", "개인 토큰 제작", "블록체인을 이용한 투표 시스템 제작"],
  },
  {
    date: "2020.12 - 2021.06",
    title: "코딩 교육 강사",
    subtitle: "주식회사 비트시스",
    detail: ["학생들 및 일반인을 대상으로한 인공지능 개념 및 파이썬 교육"],
  },
  {
    date: "2022.04 - 2022.10",
    title: "AI 자연어 처리 전문가 양성 과정 수료",
    subtitle: "주최: 주식회사 구름",
    detail: ["카이스트 주재걸 교수님의 강의", "머신러닝, 딥러닝, 자연어 처리", "영문 뉴스레터를 요약 및 번역해주는 모델 제작"],
  },
  {
    date: "2022.11 - 현재",
    title: "프론트 엔드 개발자가 되기위한 공부",
  },
];
export const projects = {
  about:
    "다음 프로젝트들은 개인 프로젝트들로, 저의 기술과 경험을 보여줍니다. 각 프로젝트에는 코드 저장소 및 라이브 데모에 대한 링크가 있습니다. 복잡한 문제를 해결하고 다양한 기술로 작업하며 프로젝트를 효과적으로 관리할 수 있는 저의 능력을 보여줍니다.",
  projectList: [
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/5a4e66ab-fcfa-4592-8b56-5df9014b467f/image.png",
      title: "부트스트랩 Album 클론 코딩",
      detail: "CSS의 Flex 레이아웃을 연습 및 숙달하기 위해 제작했습니다.",
      tags: ["html", "css"],
      link: {
        github: "https://github.com/gus8054/bootstrap-clone-album",
        velog: "https://velog.io/@ehdgus8054/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-Album-%ED%81%B4%EB%A1%A0-%EC%BD%94%EB%94%A9",
        demo: "https://gus8054.github.io/bootstrap-clone-album/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/00b845d3-01eb-4a44-a15b-d8aa6b5bce9e/image.png",
      title: "부트스트랩 Product 클론 코딩",
      detail: "CSS의 Grid 레이아웃을 연습 및 숙달하기 위해 제작했습니다.",
      tags: ["html", "css"],
      link: {
        github: "https://github.com/gus8054/bootstrap-clone-product",
        velog: "https://velog.io/@ehdgus8054/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-Product-%ED%81%B4%EB%A1%A0-%EC%BD%94%EB%94%A9",
        demo: "https://gus8054.github.io/bootstrap-clone-product/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/b22f6085-3803-46cc-91d6-a097d1ccd8b9/image.png",
      title: "부트스트랩 Pricing 클론 코딩",
      detail: "미디어 쿼리를 사용한 반응형 레이아웃을 연습 및 숙달하기 위해 제작했습니다.",
      tags: ["html", "css", "RWD"],
      link: {
        github: "https://github.com/gus8054/bootstrap-clone-pricing",
        velog: "https://velog.io/@ehdgus8054/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-Pricing-%ED%81%B4%EB%A1%A0-%EC%BD%94%EB%94%A9",
        demo: "https://gus8054.github.io/bootstrap-clone-pricing/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/e702b174-adbf-44a6-a194-b6b16f7c0c30/image.png",
      title: "TODO 웹 앱",
      detail: "브라우저의 첫 화면과 같은 느낌으로 제작했습니다. todo기능과 자주가는 사이트 마킹 기능 및 현재 시간을 나타내는 웹앱입니다.",
      tags: ["html", "css", "RWD", "js", "Intl", "Web Storage API"],
      link: {
        github: "https://github.com/gus8054/todo-web",
        velog: "https://velog.io/@ehdgus8054/TODO-%EC%9B%B9-%EC%96%B4%ED%94%8C",
        demo: "https://gus8054.github.io/todo-web/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/a5ddcce1-3839-4560-b372-87bd47c155b6/image.png",
      title: "포트폴리오(구버전)",
      detail: "포트폴리오 구버전입니다. React Router 6버전을 이용해서 제작했습니다.",
      tags: ["html", "css", "RWD", "js", "react", "react router", "typed.js"],
      link: {
        github: "https://github.com/gus8054/portfolio",
        velog: "https://velog.io/@ehdgus8054/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9B%B9",
        demo: "https://gus8054.github.io/portfolio/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/fa9a2c9b-e150-4241-8582-e5c591997318/image.png",
      title: "리액트 모던 웹 사이트 1",
      detail: "모던한 웹 사이트를 리액트로 제작했습니다.",
      tags: ["html", "css", "RWD", "js", "react", "react icons", "BEM"],
      link: {
        github: "https://github.com/gus8054/modern-webpage",
        velog: "https://velog.io/@ehdgus8054/Modern-website-1",
        demo: "https://gus8054.github.io/modern-webpage/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/d1babe2e-9d36-4852-b60c-923ce29c6da9/image.jpg",
      title: "리액트 모던 웹 사이트 2",
      detail: "모던한 웹 사이트를 리액트로 제작했습니다.",
      tags: ["html", "css", "RWD", "js", "react", "react icons", "BEM", "IntersectionObserver API"],
      link: {
        github: "https://github.com/gus8054/modern-webpage2",
        velog: "https://velog.io/@ehdgus8054/Modern-website-2",
        demo: "https://gus8054.github.io/modern-webpage2/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/9ad57dc9-5bc3-44b9-88c5-2e7b0d2e184a/image.png",
      title: "리액트 모던 웹 사이트 3",
      detail: "모던한 웹 사이트를 리액트로 제작했습니다.",
      tags: ["html", "css", "RWD", "js", "react", "tailwindcss", "vite"],
      link: {
        github: "https://github.com/gus8054/modern-webpage3",
        velog: "https://velog.io/@ehdgus8054/Modern-website-3",
        demo: "https://gus8054.github.io/modern-webpage3/#home",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/b165d1af-f65e-4566-b548-74c060a85d77/image.png",
      title: "New 포트폴리오",
      detail: "인터렉티브한 포트폴리오를 만들어보고자 제작했습니다.",
      tags: ["html", "css", "RWD", "js", "react", "react-icons", "styled components", "next.js", "reqeustAnimationFrame API"],
      link: {
        github: "https://github.com/gus8054/new-portfolio",
        velog: "https://velog.io/@ehdgus8054/New-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4#%EA%B2%B0%EA%B3%BC%EB%AC%BC",
        demo: "/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/54706ec6-1efa-4c11-afe9-2e7743338710/image.png",
      title: "모바일 유튜브",
      detail: "Fetch API로 외부 데이터를 가져와 렌더링을 하는 일련의 작업을 수행해보고자 제작했습니다.",
      tags: ["html", "css", "js", "react", "react-icons", "react router", "CSS Module", "vite", "Fetch API"],
      link: {
        github: "https://github.com/gus8054/youtube-mobile",
        velog: "https://velog.io/@ehdgus8054/Youtube-Mobile-%ED%81%B4%EB%A1%A0-%EC%BD%94%EB%94%A9",
        demo: "https://main--lambent-flan-e10d5b.netlify.app/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/a440e4da-d395-447d-8230-10e212329285/image.PNG",
      title: "삼성 노트 클론",
      detail: "express 라이브러리를 사용하지 않은 순수 node.js로 서버를 만들고 IndexedDB 웹 저장소로 데이터를 관리해보았습니다.",
      tags: ["html", "css", "js", "node.js", "Web Storage API"],
      link: {
        github: "https://github.com/gus8054/samsung-note-clone",
        velog: "https://velog.io/@ehdgus8054/%EC%82%BC%EC%84%B1-%EB%85%B8%ED%8A%B8-%ED%81%B4%EB%A1%A0",
        demo: "https://main--incredible-truffle-fb8504.netlify.app/",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/128e645a-80b1-4431-bcae-bde75ab5fae1/image.png",
      title: "블로그",
      detail: "프론트 엔드와 백 엔드를 분리시켜 개발하고 api로 통신하는 CRUD 프로젝트입니다. Mysql로 데이터를 관리해보았습니다.",
      tags: ["html", "css", "js", "react", "react-icons", "react router", "axios", "node.js", "express", "jwt", "mysql"],
      link: {
        github: "https://github.com/gus8054/blog",
        velog: "https://velog.io/@ehdgus8054/%EB%B8%94%EB%A1%9C%EA%B7%B8",
      },
    },
    {
      img: "https://velog.velcdn.com/images/ehdgus8054/post/8cfbf7d3-a859-480d-8b78-d05213d1cacf/image.png",
      title: "TODO 타입스크립트 앱",
      detail: "타입스크립트로 만든 todo앱입니다. 싱글톤 패턴을 이용했습니다.",
      tags: ["html", "css", "js", "typescript", "vite", "Web Storage API"],
      link: {
        github: "https://github.com/gus8054/todo-typescript",
        velog: "https://velog.io/@ehdgus8054/TODO-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%B1",
        demo: "https://gus8054.github.io/todo-typescript/",
      },
    },
  ],
};
export const techLogos = [
  {
    title: "html",
    img: htmlImg,
  },
  {
    title: "css",
    img: cssImg,
  },
  {
    title: "js",
    img: jsImg,
  },
  {
    title: "node.js",
    img: nodeJsImg,
  },
  {
    title: "next.js",
    img: nextImg,
  },
  {
    title: "python",
    img: pythonImg,
  },
  {
    title: "react",
    img: reactImg,
  },
  {
    title: "redux",
    img: reduxImg,
  },
  {
    title: "tailwindcss",
    img: tailwindCSSImg,
  },
  {
    title: "typescript",
    img: typescriptImg,
  },
  {
    title: "vite",
    img: viteImg,
  },
  {
    title: "styled components",
    img: styledComponentsImg,
  },
  {
    title: "react router",
    img: reactRouterImg,
  },
  {
    title: "jwt",
    img: jwtImg,
  },
  {
    title: "mysql",
    img: mysqlImg,
  },
];

export { logo, myPhoto, programmer, htmlImg, cssImg, jsImg, nodeJsImg, nextImg, pythonImg, reactImg, reduxImg, tailwindCSSImg, typescriptImg };
