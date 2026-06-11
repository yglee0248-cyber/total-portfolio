const PROJECTS = {
  withday: {
    title: "WithDay - 여행 동행 매칭 플랫폼",
    period: "2026.05.11 ~ 2026.06.09 (1개월) | 4인 팀",
    role: "인증 / 추천 일정 / 관리자 설정 담당",
    visualClass: "withday-visual",
    techStack: ["Java", "Spring Boot", "MySQL"],
    docsLink: "https://notion.so",
    features: [
      "회원가입 및 자체 로그인 구현",
      "Google OAuth 2.0 기반 소셜 로그인 및 JWT 인증 구현",
      "비밀번호 및 계정 찾기 기능",
      "사용자 성향 기반 여행 일정 추천 알고리즘 설계 및 구현",
      "관리자 대시보드 및 서비스 설정 관리 API 개발"
    ]
  },
  c2c: {
    title: "AED / C2C - 중고거래·커뮤니티 플랫폼",
    period: "2026.03.24 ~ 2026.04.22 (1개월) | 5인 팀",
    role: "팀장 / 회원가입 및 인증 / 그린리턴 맵 구현",
    visualClass: "c2c-visual",
    techStack: ["Java", "Spring Boot", "Oracle", "SQL Developer"],
    docsLink: "https://notion.so",
    features: [
      "팀장으로서 Git Flow 기반 버전 관리 및 역할 분담 주도",
      "이메일 인증 타이머를 포함한 회원가입 프로세스 구현",
      "회원 정보 조회 및 수정 등 기본 회원 기능 구현",
      "플랫폼 메인 페이지 레이아웃 및 데이터 연동",
      "게시글에 대한 댓글 작성, 수정, 삭제 기능",
      "카카오맵 API를 활용한 그린리턴 맵(SIDO_MAP) 데이터 정제 및 시각화"
    ]
  }
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
  description: "▤",
  error: "!",
  search: "?",
  build: "+",
  check_box: "✓",
  check_circle: "✓",
  lightbulb: "*",
  list: "="
};

const TROUBLESHOOTING_DATA = [
  {
    id: "wd-1",
    project: "withday",
    title: "JWT Token 만료 시 무한 401 오류",
    problem: "Access Token 만료 시 클라이언트에서 지속적으로 401 에러가 발생하여 사용자 경험이 저하되었습니다.",
    cause: "Refresh Token을 활용한 재발급 로직이 클라이언트 Interceptor에 완전히 연결되지 않았습니다.",
    solution: ["Axios Interceptor 401 에러 핸들링 추가", "Refresh Token으로 새 Access Token 발급 로직 구현", "실패했던 기존 요청을 큐에 담았다가 재요청 처리"],
    result: "Token 만료 시에도 사용자가 인지하지 못할 정도로 매끄러운 인증 연장 흐름을 구성했습니다.",
    lesson: "클라이언트와 서버 간 인증 토큰 흐름을 정확히 이해하고 예외 상황을 처리하는 방법을 익혔습니다."
  },
  {
    id: "wd-2",
    project: "withday",
    title: "추천 일정 API N+1 쿼리 성능 저하",
    problem: "사용자 수가 증가함에 따라 여행 일정 추천 API의 응답 속도가 현저히 느려졌습니다.",
    cause: "데이터베이스 조회 과정에서 불필요한 반복 쿼리가 발생하고 조인 기준이 명확하지 않았습니다.",
    solution: ["자주 검색되는 조건에 복합 인덱스 추가", "연관 데이터 조회 쿼리 구조 개선", "페이징 기준을 명확히 분리하여 응답 데이터 축소"],
    result: "추천 API 응답 시간을 안정화하고 사용자가 기다리는 시간을 줄였습니다.",
    lesson: "백엔드 기능 구현은 동작 여부뿐 아니라 데이터 접근 방식까지 함께 검토해야 한다는 점을 체감했습니다."
  },
  {
    id: "wd-3",
    project: "withday",
    title: "소셜 회원가입 접근 오류 및 정보 누락",
    problem: "일부 구글 계정으로 로그인 시 프로필 이미지가 표시되지 않거나 이메일 정보가 누락되었습니다.",
    cause: "외부 API 응답 필드가 항상 동일하다고 가정했고, 사용자가 정보 제공을 제한한 경우의 예외 처리가 부족했습니다.",
    solution: ["OAuth 응답 파싱 로직 개선", "필수 데이터 누락 시 기본값 제공 처리 추가", "추가 정보 입력 폼으로 유도하는 플로우 추가"],
    result: "다양한 구글 계정 환경에서도 안정적인 로그인 및 회원가입 프로세스를 확립했습니다.",
    lesson: "외부 API 연동 시 응답 데이터의 다양성과 예외 케이스 처리의 중요성을 배웠습니다."
  },
  {
    id: "wd-4",
    project: "withday",
    title: "관리자 페이지 대용량 데이터 로딩 멈춤",
    problem: "관리자 페이지에서 전체 사용자 목록을 조회할 때 브라우저 렌더링이 멈추는 현상이 발생했습니다.",
    cause: "페이지네이션 없이 다량의 데이터를 한 번에 클라이언트로 전송하고 렌더링했습니다.",
    solution: ["서버 사이드 페이지네이션 적용", "한 페이지당 조회 건수 제한", "검색 조건과 정렬 기준을 API 파라미터로 분리"],
    result: "초기 로딩 속도를 줄이고 관리자 화면의 조작 안정성을 확보했습니다.",
    lesson: "대용량 데이터 처리 시 프론트엔드와 백엔드의 역할을 나누어 최적화해야 한다는 점을 익혔습니다."
  },
  {
    id: "c2c-1",
    project: "c2c",
    title: "그린리턴 맵 SIDO_MAP 데이터 파싱 오류",
    problem: "카카오맵에 폴리곤을 그리기 위한 SIDO_MAP 데이터 파싱 중 메모리 사용량이 급격히 증가했습니다.",
    cause: "원본 데이터 크기가 커서 클라이언트에서 한 번에 파싱하기에 부담이 컸습니다.",
    solution: ["백엔드에서 지도 데이터를 지역 단위로 분리", "필요한 지역 데이터만 요청하도록 로딩 방식 변경", "좌표 데이터 구조를 화면 표시 목적에 맞게 정리"],
    result: "지도 로딩 속도를 개선하고 브라우저 메모리 부담을 줄였습니다.",
    lesson: "공간 데이터처럼 큰 데이터는 화면에서 필요한 단위로 가공해 전달해야 한다는 점을 이해했습니다."
  },
  {
    id: "c2c-2",
    project: "c2c",
    title: "이메일 인증 타이머 동기화 실패",
    problem: "사용자가 페이지를 새로고침하면 이메일 인증 타이머가 초기화되어 인증 진행이 불안정했습니다.",
    cause: "타이머 상태를 클라이언트 메모리에만 저장하여 새로고침 시 상태가 사라졌습니다.",
    solution: ["인증 시작 시각을 서버에 기록", "클라이언트에서는 서버 기준 남은 시간을 계산", "만료 여부를 서버 응답과 함께 검증"],
    result: "새로고침 시에도 정확한 남은 시간 표시와 인증 프로세스 유지가 가능해졌습니다.",
    lesson: "중요한 상태 정보는 서버를 기준으로 관리해야 함을 배웠습니다."
  }
];

const NAV_SECTION_IDS = ["tech-stack", "projects", "troubleshooting", "docs", "about"];

let currentProjectFilter = "withday";
let currentTroubleId = "wd-3";

document.addEventListener("DOMContentLoaded", () => {
  replaceIconText();
  setupNavigation();
  setupProjects();
  setupTroubleshooting();
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
      const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight + 1;
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
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
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

  document.querySelectorAll("[data-project-card]").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.projectCard));
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
      <div class="modal-content">
        <div class="modal-visual project-visual ${project.visualClass}" role="img" aria-label="${project.title} 미리보기"></div>
        <div class="modal-body">
          <button class="modal-close" type="button" aria-label="모달 닫기">
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
          <h3 id="project-modal-title">${project.title}</h3>
          <p class="modal-period">${project.period}</p>
          <div class="modal-role">
            <h4><span class="material-symbols-outlined" aria-hidden="true">person</span>Role</h4>
            <p>${project.role}</p>
          </div>
          <div class="modal-section">
            <h4><span class="material-symbols-outlined" aria-hidden="true">list</span>상세 기능</h4>
            <ul>
              ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>
          <div class="modal-section">
            <h4><span class="material-symbols-outlined" aria-hidden="true">build</span>Tech Stack</h4>
            <div class="tag-row">
              ${project.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
            </div>
          </div>
          <div class="modal-actions">
            <a href="${project.docsLink}" target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined" aria-hidden="true">description</span>
              프로젝트 문서
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  replaceIconText(modalContainer);
  document.body.classList.add("no-scroll");
  modalContainer.querySelector(".modal-close").addEventListener("click", closeModal);
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

function setupTroubleshooting() {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentProjectFilter = button.dataset.target;
      document.querySelectorAll(".tab-btn").forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      renderTroubleshootingList();
    });
  });

  renderTroubleshootingList();
}

function renderTroubleshootingList() {
  const listContainer = document.getElementById("trouble-list");
  const filteredItems = TROUBLESHOOTING_DATA.filter((item) => item.project === currentProjectFilter);

  if (!filteredItems.some((item) => item.id === currentTroubleId)) {
    currentTroubleId = filteredItems[0]?.id || "";
  }

  listContainer.innerHTML = filteredItems
    .map((item) => `
      <button class="trouble-item${item.id === currentTroubleId ? " active" : ""}" type="button" data-trouble="${item.id}">
        ${item.title}
      </button>
    `)
    .join("");

  listContainer.querySelectorAll("[data-trouble]").forEach((button) => {
    button.addEventListener("click", () => {
      currentTroubleId = button.dataset.trouble;
      renderTroubleshootingList();
    });
  });

  renderTroubleshootingDetail();
}

function renderTroubleshootingDetail() {
  const detailContainer = document.getElementById("trouble-detail");
  const item = TROUBLESHOOTING_DATA.find((entry) => entry.id === currentTroubleId);

  if (!item) {
    detailContainer.innerHTML = "";
    return;
  }

  detailContainer.innerHTML = `
    <h3>${item.title}</h3>
    <div class="detail-stack">
      <section class="detail-box problem">
        <h4><span class="material-symbols-outlined" aria-hidden="true">error</span>Problem</h4>
        <p>${item.problem}</p>
      </section>
      <section class="detail-box cause">
        <h4><span class="material-symbols-outlined" aria-hidden="true">search</span>Cause</h4>
        <p>${item.cause}</p>
      </section>
      <section class="detail-box solution">
        <h4><span class="material-symbols-outlined" aria-hidden="true">build</span>Solution</h4>
        <ul>
          ${item.solution.map((solution) => `
            <li>
              <span class="material-symbols-outlined" aria-hidden="true">check_box</span>
              <span>${solution}</span>
            </li>
          `).join("")}
        </ul>
      </section>
      <div class="detail-bottom">
        <section class="detail-box result">
          <h4><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Result</h4>
          <p>${item.result}</p>
        </section>
        <section class="detail-box lesson">
          <h4><span class="material-symbols-outlined" aria-hidden="true">lightbulb</span>Lesson Learned</h4>
          <p>${item.lesson}</p>
        </section>
      </div>
    </div>
  `;
  replaceIconText(detailContainer);
}

function setupDisabledLinks() {
  document.querySelectorAll('[aria-disabled="true"], .disabled-link').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
}
