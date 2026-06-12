const PROJECTS = {
  withday: {
    title: "WithDay - 여행 동행 매칭 플랫폼",
    summary: "사용자 성향 맞춤형 여행 동행 매칭 및 추천 일정 기반 서비스",
    overview:
      "회원 가입과 인증 흐름부터 추천 일정 조회/사용/관리, 관리자 약관·관심사 설정까지 담당하며 사용자 화면과 백엔드 API가 이어지는 흐름을 구현했습니다.",
    period: "2026.05.11 ~ 2026.06.09",
    team: "4인 팀",
    role: "회원/인증, 추천 일정, 관리자 설정 담당",
    visualClass: "withday-visual",
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Java",
      "Spring Boot",
      "MyBatis",
      "REST API",
      "MySQL",
      "Google OAuth",
      "JWT",
      "Cloudinary",
      "OneSignal",
    ],
    responsibilities: [
      "회원가입",
      "로그인",
      "로그아웃",
      "Google 소셜 로그인",
      "아이디 찾기",
      "비밀번호 찾기",
      "소셜 계정 비밀번호 재설정 제한",
      "추천 일정 목록/상세 조회",
      "추천 일정 사용하기",
      "추천 일정 등록/수정/삭제",
      "추천 일정 이미지 처리",
      "관리자 약관 관리",
      "관리자 관심사 관리",
    ],
    implementationPoints: [
      "이메일 인증, 약관 동의, 관심사 선택을 포함한 회원가입 흐름을 구성했습니다.",
      "Google OAuth 가입자는 추가 정보 입력 후 소셜 회원가입을 완료하도록 분기했습니다.",
      "로컬 계정과 소셜 계정을 provider 기준으로 구분해 비밀번호 재설정 접근을 제어했습니다.",
      "추천 일정 목록/상세 조회, 사용하기, 등록/수정/삭제 API 흐름과 화면 상태를 연결했습니다.",
      "추천 일정 이미지의 신규 업로드, 유지, 삭제 상태를 분리해 수정 요청에 반영했습니다.",
      "관리자 약관/관심사 관리 화면에서 목록, 등록, 수정, 삭제 흐름을 구현했습니다.",
    ],
    troubleshooting: [
      {
        title: "소셜 회원가입 접근 오류",
        problem:
          "Google 로그인 후 추가 정보 입력이 필요한 사용자가 일반 회원가입 흐름과 섞이며 접근 흐름이 불안정했습니다.",
        cause:
          "소셜 로그인 응답 이후 필요한 약관 동의, 관심사 선택, 추가 정보 저장 단계가 명확히 분리되지 않았습니다.",
        solution:
          "소셜 가입 전용 추가 정보 화면을 분리하고 OAuth 응답 데이터, 약관 동의, 관심사 선택값을 검증한 뒤 저장하도록 흐름을 정리했습니다.",
        result:
          "Google 계정 사용자가 누락 정보 없이 소셜 회원가입을 완료하고 로그인 상태로 서비스에 진입할 수 있게 되었습니다.",
        learned:
          "외부 인증은 로그인 성공만으로 끝나지 않고, 서비스 내부 회원 정보 완성 단계까지 하나의 가입 플로우로 설계해야 한다는 점을 배웠습니다.",
      },
      {
        title: "소셜 계정 재설정 제한",
        problem:
          "Google로 가입한 사용자가 로컬 계정용 비밀번호 찾기/재설정 기능에 접근할 수 있는 문제가 있었습니다.",
        cause:
          "로컬 계정과 소셜 계정의 인증 수단 차이를 화면과 API 요청 단계에서 충분히 구분하지 않았습니다.",
        solution:
          "계정 provider가 local이 아닌 경우 비밀번호 재설정 진입을 제한하고, 사용자에게 소셜 로그인 계정임을 안내하도록 처리했습니다.",
        result:
          "비밀번호가 없는 소셜 계정에 재설정 요청이 발생하지 않아 인증 흐름이 명확해졌습니다.",
        learned:
          "계정 유형별로 가능한 동작을 명확히 제한해야 보안과 사용자 안내가 함께 안정화된다는 점을 익혔습니다.",
      },
      {
        title: "추천 일정 초기값 오류",
        problem:
          "추천 일정을 사용해 일반 일정 등록 화면으로 이동할 때 제목, 지역, 카테고리 등 일부 초기값이 바로 반영되지 않았습니다.",
        cause:
          "추천 일정 데이터는 먼저 전달됐지만 지역/카테고리 옵션 데이터가 늦게 준비되면서 선택값 매핑 순서가 어긋났습니다.",
        solution:
          "추천 일정 payload를 등록 화면용 값으로 정규화하고, 옵션 데이터 로딩 이후 선택값을 다시 동기화하도록 상태 반영 순서를 조정했습니다.",
        result:
          "추천 일정 사용 시 필요한 기본 정보가 일정 등록 화면에 안정적으로 채워졌습니다.",
        learned:
          "비동기 데이터가 여러 개 섞이는 화면에서는 초기값 주입 시점과 옵션 데이터 준비 시점을 함께 설계해야 한다는 점을 확인했습니다.",
      },
      {
        title: "추천 일정 이미지 삭제 오류",
        problem:
          "추천 일정 수정 중 기존 이미지를 삭제해도 저장 후 다시 보이거나, 새 이미지와 삭제 이미지 상태가 섞이는 문제가 있었습니다.",
        cause:
          "기존 이미지 URL, 새로 추가한 파일, 삭제 대상 이미지가 하나의 화면 상태에서 명확히 분리되지 않았습니다.",
        solution:
          "유지할 이미지, 삭제할 이미지, 새로 업로드할 이미지를 별도 상태로 관리하고 multipart 요청에 명시적으로 포함했습니다.",
        result:
          "추천 일정 수정 시 이미지 추가/삭제 결과가 저장 후에도 일관되게 유지되었습니다.",
        learned:
          "파일 업로드 기능은 화면 미리보기 상태와 서버에 전달할 변경 명세를 분리해야 안정적으로 관리할 수 있음을 배웠습니다.",
      },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://withday-mib.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/yglee0248-cyber/WithDay",
      },
      {
        label: "Feature Spec",
        href: "https://drive.google.com/file/d/1kywr4U7Fl2Bc_jxUNsGPR82qysmVuIM9/view?usp=sharing",
      },
      {
        label: "Presentation",
        href: "https://drive.google.com/file/d/1vTlRwhSUPDwK-NX4IWmFJkmoaKs35Ed3/view?usp=sharing",
      },
      {
        label: "Notion Docs",
        href: "https://www.notion.so/0897fc771d5b8208a4ba81a0238853d8",
      },
    ],
  },
  c2c: {
    title: "AED / C2C - 중고거래·커뮤니티 플랫폼",
    summary: "지역 기반 중고거래, 커뮤니티, 친환경 위치 서비스를 포함한 팀 프로젝트",
    overview:
      "팀장으로 Git 흐름과 구현 범위를 관리하면서 회원 인증, 메인 글 목록, 댓글 기능, 그린리턴 위치 서비스 맵을 담당했습니다.",
    period: "2026.03.24 ~ 2026.04.22",
    team: "5인 팀",
    role: "팀장, 인증, 댓글, 그린리턴 맵 담당",
    visualClass: "c2c-visual",
    techStack: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "REST API",
      "Oracle",
      "SQL Developer",
      "React",
      "JavaScript",
      "Maven",
      "MUI",
      "Apache Tomcat",
      "Naver Map API",
      "Kakao Postcode API",
      "Public Data API",
    ],
    responsibilities: [
      "팀장 역할",
      "Git 관리",
      "더미 데이터 삽입",
      "회원가입",
      "로그인/로그아웃",
      "아이디/비밀번호 찾기",
      "메인 페이지 글 목록 출력",
      "거래 게시판 댓글",
      "커뮤니티 게시판 댓글",
      "그린리턴 위치 서비스 맵",
    ],
    implementationPoints: [
      "팀장으로 Git 브랜치 흐름과 작업 범위를 관리하고 팀 구현 일정을 조율했습니다.",
      "회원가입, 로그인/로그아웃, 아이디/비밀번호 찾기 등 기본 인증 흐름을 구현했습니다.",
      "이메일 인증 유효시간과 검증 상태를 사용자 화면에서 확인할 수 있도록 처리했습니다.",
      "메인 페이지에서 거래/커뮤니티 글 목록이 노출되도록 데이터 조회 흐름을 연결했습니다.",
      "거래 게시판과 커뮤니티 게시판의 댓글 작성, 조회, 수정, 삭제 흐름을 구현했습니다.",
      "카카오맵과 공공데이터 API의 지역명 차이를 매핑해 그린리턴 위치 정보를 표시했습니다.",
    ],
    troubleshooting: [
      {
        title: "이메일 인증 타이머 리렌더링 최적화",
        problem:
          "회원가입 화면의 이메일 인증 타이머가 매초 갱신되며 입력 폼 전체가 불필요하게 다시 렌더링되는 문제가 있었습니다.",
        cause:
          "타이머 상태가 회원가입 폼의 주요 상태와 같은 범위에서 관리되어, 초 단위 변경이 화면 전체 갱신으로 이어졌습니다.",
        solution:
          "타이머 표시 상태를 분리하고 interval 정리 로직을 명확히 두어 인증 시간만 갱신되도록 구조를 조정했습니다.",
        result:
          "회원가입 입력값은 안정적으로 유지하면서 인증 남은 시간만 갱신되어 화면 조작감이 개선되었습니다.",
      },
      {
        title: "그린리턴 맵 지역명 데이터 불일치 해결",
        problem:
          "카카오맵에서 얻은 지역명과 공공데이터 API의 지역명이 일부 달라 친환경 거점 데이터 조회가 누락되었습니다.",
        cause:
          "행정구역 명칭 표기 방식이 API마다 달랐고, 그대로 요청하면 공공데이터 조회 조건과 일치하지 않았습니다.",
        solution:
          "프론트엔드에서 지역명 매핑 테이블을 두고 카카오맵 지역명을 공공데이터 API 요청에 맞는 명칭으로 변환했습니다.",
        result:
          "지도 위치 기준으로 지역 내 친환경 거점 데이터를 안정적으로 조회하고 마커/정보창으로 표시할 수 있게 되었습니다.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yglee0248-cyber/react_semi",
      },
      {
        label: "Feature Spec",
        href: "https://drive.google.com/file/d/1Mte5BqyBt4LHrNA75DZuq2UWTVwm669o/view?usp=sharing",
      },
      {
        label: "Presentation",
        href: "https://drive.google.com/file/d/1t0vJfKGYugwYPx0csB0ddk8CUaOWbIWk/view?usp=sharing",
      },
      {
        label: "Notion Docs",
        href: "https://www.notion.so/C2C-Customer-to-Carbon-3507fc771d5b8015a3f5ed06e27c58e8",
      },
    ],
  },
};

const ICON_MAP = {
  terminal: ">_",
  download: "↓",
  menu: "☰",
  close: "×",
  code: "{}",
  database: "DB",
  layers: "◇",
  web: "▣",
  dns: "▤",
  api: "↔",
  cloud: "☁",
  deployed_code: "⬡",
  rocket_launch: "↗",
  bug_report: "!",
  menu_book: "▤",
  person: "○",
  connect_without_contact: "@",
  folder: "□",
  check: "✓",
  mail: "@",
  phone: "☎",
  chat: "톡",
  description: "▤",
  error: "!",
  search: "?",
  build: "+",
  check_box: "✓",
  check_circle: "✓",
  lightbulb: "*",
  list: "=",
  link: "↗",
};

const NAV_SECTION_IDS = [
  "tech-stack",
  "projects",
  "docs",
  "about",
];

document.addEventListener("DOMContentLoaded", () => {
  replaceIconText();
  setupNavigation();
  setupProjects();
  setupDisabledLinks();
});

function replaceIconText(root = document) {
  root.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
    const key = icon.textContent.trim();
    icon.textContent = ICON_MAP[key] || key.slice(0, 2).toUpperCase();
    icon.classList.add("icon-ready");
  });
}

function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const navMenu = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const sectionLinks = Array.from(document.querySelectorAll(".nav-link"));

  const closeMenu = () => {
    navMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbar.offsetHeight +
        1;
      window.scrollTo({ top, behavior: "smooth" });
      closeMenu();
    });
  });

  const updateNavigationState = () => {
    navbar.classList.toggle("nav-scrolled", window.scrollY > 10);

    const marker = window.scrollY + navbar.offsetHeight + 140;
    let activeId = "";

    NAV_SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= marker) {
        activeId = id;
      }
    });

    sectionLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${activeId}`,
      );
    });
  };

  window.addEventListener("scroll", updateNavigationState, { passive: true });
  window.addEventListener("resize", updateNavigationState);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });

  updateNavigationState();
}

function setupProjects() {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(button.dataset.project);
    });
  });

}

function openModal(projectId) {
  const project = PROJECTS[projectId];
  const modalContainer = document.getElementById("modal-container");

  if (!project || !modalContainer) {
    return;
  }

  modalContainer.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div class="modal-content project-modal-content">
        <div class="modal-visual project-visual ${project.visualClass}" role="img" aria-label="${project.title} 미리보기"></div>
        <div class="modal-body">
          <button class="modal-close" type="button" aria-label="모달 닫기">
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>

          <p class="modal-kicker">Project Detail</p>
          <h3 id="project-modal-title">${project.title}</h3>
          <p class="modal-overview">${project.overview}</p>

          <div class="modal-meta-grid" aria-label="프로젝트 기본 정보">
            ${renderMeta("기간", project.period)}
            ${renderMeta("팀", project.team)}
            ${renderMeta("역할", project.role)}
          </div>

          ${renderModalSection("기술 스택", renderTags(project.techStack), "build")}
          ${renderModalSection("이영민 담당 기능", renderList(project.responsibilities, "modal-list-grid"), "person")}
          ${renderModalSection("구현 포인트", renderList(project.implementationPoints), "check_box")}
          ${renderTroubleshooting(project.troubleshooting)}
          ${renderModalSection("관련 링크/문서", renderProjectLinks(project.links), "link")}
        </div>
      </div>
    </div>
  `;

  replaceIconText(modalContainer);
  setupDisabledLinks(modalContainer);
  document.body.classList.add("no-scroll");
  modalContainer
    .querySelector(".modal-close")
    .addEventListener("click", closeModal);
  modalContainer.querySelector(".modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  });
}

function closeModal() {
  const modalContainer = document.getElementById("modal-container");

  if (!modalContainer || !modalContainer.innerHTML) {
    return;
  }

  modalContainer.innerHTML = "";
  document.body.classList.remove("no-scroll");
}

function renderMeta(label, value) {
  return `
    <div class="modal-meta-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderModalSection(title, content, icon) {
  return `
    <section class="modal-section">
      <h4><span class="material-symbols-outlined" aria-hidden="true">${icon}</span>${title}</h4>
      ${content}
    </section>
  `;
}

function renderTags(items) {
  return `
    <div class="tag-row">
      ${items.map((item) => `<span class="tech-tag">${item}</span>`).join("")}
    </div>
  `;
}

function renderList(items, className = "modal-list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderTroubleshooting(items) {
  return `
    <section class="modal-section modal-troubleshooting">
      <h4><span class="material-symbols-outlined" aria-hidden="true">bug_report</span>트러블슈팅</h4>
      <div class="modal-trouble-list">
        ${items
          .map(
            (item) => `
          <article class="modal-trouble-card">
            <h5>${item.title}</h5>
            ${renderTroubleRow("Problem", item.problem)}
            ${renderTroubleRow("Cause", item.cause)}
            ${renderTroubleRow("Solution", item.solution)}
            ${renderTroubleRow("Result", item.result)}
            ${item.learned ? renderTroubleRow("Learned", item.learned) : ""}
          </article>
        `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTroubleRow(label, value) {
  return `
    <div class="trouble-row">
      <strong>${label}</strong>
      <p>${value}</p>
    </div>
  `;
}

function renderProjectLinks(links) {
  return `
    <div class="modal-link-grid">
      ${links
        .map((link) => {
          if (link.href) {
            return `
              <a class="modal-link" href="${link.href}" target="_blank" rel="noopener noreferrer">
                <span>${link.label}</span>
                <small>새 탭</small>
              </a>
            `;
          }

          return `
            <a class="modal-link is-disabled" href="#" aria-disabled="true">
              <span>${link.label}</span>
              <small>${link.disabledText}</small>
            </a>
          `;
        })
        .join("")}
    </div>
  `;
}

function setupDisabledLinks(root = document) {
  root
    .querySelectorAll('[aria-disabled="true"], .disabled-link, .is-disabled')
    .forEach((link) => {
      link.addEventListener("click", (event) => event.preventDefault());
    });
}
