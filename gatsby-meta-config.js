module.exports = {
  title: `SEUNGMI.FE`,
  description: `오늘도 디벨롭`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.seungmidev.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `wSeungMi/wSeungMi.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `우승미`,
    bio: {
      role: `FE 개발자`,
      description: ['능동적으로 일하는', '기록을 중시하는', '탄탄한 기본기를 목표로하는'],
      thumbnail: '', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/wSeungMi`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `seungmi.dev@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.04 ~ 2023.09',
        activity: '멋쟁이사자처럼 데이터분석스쿨 1기 클래스매니저 근무',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2022.08 ~ 2023.01',
        activity: '멋쟁이사자처럼 프론트엔드스쿨 3기 참여 및 수료',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '커디어리(co-diary)',
        description:
          '커피와 디저트에 대해 기록할 수 있는 웹앱입니다. 기획 참여 및 전체 디자인(UX/UI, 아이콘, 로고), 기록하기 페이지, 상세 게시글 수정 페이지 작업을 진행했습니다. 기록하기 페이지에서 장소 등록을 위해 React Kakao Map SDK 라이브러리를 사용하여 카카오 API를 사용하였고, Firebase의 storage 기능을 사용하여 사진 등록/삭제 파일을 관리했습니다. (등록 전의 사진이 삭제된다면 Firebase의 storage에서도 이미지가 삭제될 수 있도록 처리) 또한, 업로드 전에 createObjectURL 메서드를 사용하여 이미지 사이즈 리사이징을 처리해주었으며, 이미지 등록시 사용자가 업로드를 인지할 수 있도록 스켈레톤 스타일의 UI를 표시해주었습니다.',
        techStack: ['React', 'Recoil', 'styled components', 'Firebase'],
        thumbnailUrl: 'thumbnail_cd_low.jpg',
        links: {
          post: '',
          github: 'https://github.com/co-diary/front',
          demo: 'https://co-diary-12418.web.app/',
        },
      },
      {
        title: '1n마켓(1nMarket) - 멋사 프론트엔드 스쿨 팀프로젝트',
        description:
          '1인 가구를 대상으로 개인으로 구매하기 부담스러운 용량의 물건들을 같이 구매하는 공동구매 커뮤니티 마켓 웹앱입니다. 기획 및 전체적인 디자인 컨셉 작업, 팀의 전반적인 서기 및 소통 역할을 담당했습니다. 작업으로는 판매중인 상품, 프로필 수정, 회원가입, QA를 진행했습니다. ',
        techStack: ['React', 'styled components', '제공된 API 사용'],
        thumbnailUrl: 'thumbnail_1n.jpg',
        links: {
          post: '',
          github: 'https://github.com/1nMarket/frontend',
          demo: '',
        },
      },
    ],
  },
};
