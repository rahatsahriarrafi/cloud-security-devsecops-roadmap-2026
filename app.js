(function () {
  const data = window.ROADMAP;
  if (!data) return;

  const mapEl = document.getElementById("phase-map");
  const tabsEl = document.getElementById("phase-tabs");
  const panelEl = document.getElementById("phase-panel");
  const trendsEl = document.getElementById("trends-grid");
  const skillsBody = document.getElementById("skills-body");
  const rhythmBody = document.getElementById("rhythm-body");
  const prevBtn = document.getElementById("prev-phase");
  const nextBtn = document.getElementById("next-phase");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  const STORAGE_KEY = "cloudsec-path-phase";
  const saved = localStorage.getItem(STORAGE_KEY);
  let activeId =
    data.phases.some((p) => p.id === saved) ? saved : data.phases[0].id;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function truncate(text, n) {
    if (text.length <= n) return text;
    return text.slice(0, n - 1) + "…";
  }

  function padOrder(n) {
    return String(n).padStart(2, "0");
  }

  function activeIndex() {
    return data.phases.findIndex((p) => p.id === activeId);
  }

  function renderMap() {
    mapEl.innerHTML = "";
    data.phases.forEach((phase) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "phase-row" + (phase.id === activeId ? " active" : "");
      btn.setAttribute("aria-current", phase.id === activeId ? "true" : "false");
      btn.innerHTML =
        '<span class="num">' +
        padOrder(phase.order) +
        '</span><span class="title">' +
        escapeHtml(phase.title) +
        '</span><span class="dur">' +
        escapeHtml(phase.duration) +
        '</span><span class="check">' +
        escapeHtml(truncate(phase.checkpoint, 72)) +
        "</span>";
      btn.addEventListener("click", () => {
        setActive(phase.id, true);
      });
      mapEl.appendChild(btn);
    });
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    data.phases.forEach((phase, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = "tab-" + phase.id;
      btn.className = "phase-tab" + (phase.id === activeId ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", phase.id === activeId ? "true" : "false");
      btn.setAttribute("aria-controls", "phase-panel");
      btn.tabIndex = phase.id === activeId ? 0 : -1;
      btn.innerHTML =
        "Phase " +
        phase.order +
        ": " +
        escapeHtml(phase.title) +
        "<small>" +
        escapeHtml(phase.duration) +
        "</small>";
      btn.addEventListener("click", () => setActive(phase.id, false));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          const next = data.phases[(idx + 1) % data.phases.length];
          setActive(next.id, false);
          document.getElementById("tab-" + next.id).focus();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = data.phases[(idx - 1 + data.phases.length) % data.phases.length];
          setActive(prev.id, false);
          document.getElementById("tab-" + prev.id).focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          setActive(data.phases[0].id, false);
          document.getElementById("tab-" + data.phases[0].id).focus();
        } else if (e.key === "End") {
          e.preventDefault();
          const last = data.phases[data.phases.length - 1];
          setActive(last.id, false);
          document.getElementById("tab-" + last.id).focus();
        }
      });
      tabsEl.appendChild(btn);
    });
  }

  function listHtml(items) {
    return (
      "<ul>" +
      items.map((i) => "<li>" + escapeHtml(i) + "</li>").join("") +
      "</ul>"
    );
  }

  function renderPanel() {
    const phase = data.phases.find((p) => p.id === activeId) || data.phases[0];
    const idx = activeIndex();
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= data.phases.length - 1;

    panelEl.setAttribute("aria-labelledby", "tab-" + phase.id);

    const weekHtml = (phase.weekPlan || [])
      .map(
        (w) =>
          '<div class="week-card"><div class="week-head"><strong>' +
          escapeHtml(w.week) +
          '</strong><span>' +
          escapeHtml(w.focus) +
          "</span></div>" +
          listHtml(w.tasks) +
          "</div>"
      )
      .join("");

    const section = (title, items, ordered) => {
      if (!items || !items.length) return "";
      const body = ordered
        ? "<ol>" + items.map((i) => "<li>" + escapeHtml(i) + "</li>").join("") + "</ol>"
        : listHtml(items);
      return '<div class="detail-block"><h4 class="block-title">' + title + "</h4>" + body + "</div>";
    };

    panelEl.innerHTML =
      "<h3>Phase " +
      phase.order +
      ": " +
      escapeHtml(phase.title) +
      '</h3><div class="phase-meta"><span class="pill teal">' +
      escapeHtml(phase.duration) +
      '</span><span class="pill">Expanded detail</span><span class="pill">Checkpoint required</span></div><p class="phase-goal">' +
      escapeHtml(phase.goal) +
      '</p><div class="grid-3"><div class="mini-block"><h4>Outcomes</h4>' +
      listHtml(phase.outcomes) +
      '</div><div class="mini-block"><h4>Tools</h4>' +
      listHtml(phase.tools) +
      '</div><div class="mini-block"><h4>Checkpoint</h4><ul><li>' +
      escapeHtml(phase.checkpoint) +
      "</li></ul></div></div>" +
      (weekHtml
        ? '<h4 class="block-title">Week-by-week plan</h4><div class="week-grid">' +
          weekHtml +
          "</div>"
        : "") +
      '<h4 class="block-title">Topics in depth</h4>' +
      phase.topics
        .map(
          (topic) =>
            '<div class="topic"><div class="topic-head"><h4>' +
            escapeHtml(topic.title) +
            '</h4><span class="pill">' +
            escapeHtml(topic.depth) +
            "</span></div>" +
            listHtml(topic.items) +
            "</div>"
        )
        .join("") +
      section("Labs", phase.labs, true) +
      section("Resources", phase.resources, false) +
      section("Common mistakes", phase.mistakes, false) +
      section("Interview prompts", phase.interview, true);
  }

  function setActive(id, scrollToPanel) {
    activeId = id;
    localStorage.setItem(STORAGE_KEY, id);
    renderMap();
    renderTabs();
    renderPanel();
    if (scrollToPanel) {
      document.getElementById("phases").scrollIntoView({ behavior: "smooth" });
    }
  }

  function renderTrends() {
    trendsEl.innerHTML = data.trends
      .map(
        (t) =>
          '<article class="trend-card"><h3>' +
          escapeHtml(t.trend) +
          "</h3><p>" +
          escapeHtml(t.why) +
          "</p></article>"
      )
      .join("");
  }

  function renderSkills() {
    skillsBody.innerHTML = data.skills
      .map(
        (r) =>
          "<tr><td><strong>" +
          escapeHtml(r.domain) +
          "</strong></td><td>" +
          escapeHtml(r.junior) +
          "</td><td>" +
          escapeHtml(r.mid) +
          "</td><td>" +
          escapeHtml(r.senior) +
          "</td></tr>"
      )
      .join("");
  }

  function renderRhythm() {
    rhythmBody.innerHTML = data.rhythm
      .map(
        ([block, focus]) =>
          "<tr><td><strong>" +
          escapeHtml(block) +
          "</strong></td><td>" +
          escapeHtml(focus) +
          "</td></tr>"
      )
      .join("");
  }

  prevBtn.addEventListener("click", () => {
    const i = activeIndex();
    if (i > 0) setActive(data.phases[i - 1].id, false);
  });
  nextBtn.addEventListener("click", () => {
    const i = activeIndex();
    if (i < data.phases.length - 1) setActive(data.phases[i + 1].id, false);
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  setActive(activeId, false);
  renderTrends();
  renderSkills();
  renderRhythm();
})();
