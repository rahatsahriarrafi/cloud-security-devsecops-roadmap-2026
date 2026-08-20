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
  const searchEl = document.getElementById("phase-search");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");
  const toTop = document.getElementById("to-top");

  const STORAGE_KEY = "cloudsec-path-phase";
  const DONE_KEY = "cloudsec-path-done";
  const saved = localStorage.getItem(STORAGE_KEY);
  let activeId =
    data.phases.some((p) => p.id === saved) ? saved : data.phases[0].id;
  let searchQuery = "";

  function loadDone() {
    try {
      const raw = JSON.parse(localStorage.getItem(DONE_KEY) || "[]");
      return Array.isArray(raw)
        ? raw.filter((id) => data.phases.some((p) => p.id === id))
        : [];
    } catch (e) {
      return [];
    }
  }

  let doneIds = loadDone();

  function saveDone() {
    localStorage.setItem(DONE_KEY, JSON.stringify(doneIds));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function truncate(text, n) {
    if (text.length <= n) return text;
    return text.slice(0, n - 1) + "\u2026";
  }

  function padOrder(n) {
    return String(n).padStart(2, "0");
  }

  function activeIndex() {
    return data.phases.findIndex((p) => p.id === activeId);
  }

  function phaseMatches(phase, q) {
    if (!q) return true;
    const hay = [
      phase.title,
      phase.goal,
      phase.checkpoint,
      phase.duration,
      ...(phase.outcomes || []),
      ...(phase.tools || []),
      ...(phase.labs || []),
      ...((phase.topics || []).flatMap((t) => [t.title, ...(t.items || [])])),
      ...(phase.resources || []),
      ...(phase.mistakes || []),
      ...(phase.interview || []),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  }

  function updateProgress() {
    const total = data.phases.length;
    const done = doneIds.length;
    if (progressText) progressText.textContent = done + " / " + total;
    if (progressFill) progressFill.style.width = (done / total) * 100 + "%";
  }

  function toggleDone(id) {
    if (doneIds.includes(id)) {
      doneIds = doneIds.filter((x) => x !== id);
    } else {
      doneIds = doneIds.concat(id);
    }
    saveDone();
    updateProgress();
    renderMap();
    renderPanel();
  }

  function renderMap() {
    mapEl.innerHTML = "";
    const q = searchQuery.trim().toLowerCase();
    const visible = data.phases.filter((p) => phaseMatches(p, q));
    if (!visible.length) {
      mapEl.innerHTML =
        '<p class="empty-search">No phases match that search. Try "OIDC", "Kyverno", or "SBOM".</p>';
      return;
    }
    visible.forEach((phase) => {
      const done = doneIds.includes(phase.id);
      const row = document.createElement("div");
      row.className =
        "phase-row-wrap" +
        (phase.id === activeId ? " active" : "") +
        (done ? " done" : "");

      const check = document.createElement("button");
      check.type = "button";
      check.className = "phase-check" + (done ? " is-done" : "");
      check.title = done ? "Mark as not done" : "Mark phase complete";
      check.setAttribute("aria-pressed", done ? "true" : "false");
      check.setAttribute(
        "aria-label",
        (done ? "Unmark " : "Mark ") + phase.title + " complete"
      );
      check.innerHTML = done
        ? '<span aria-hidden="true">' + String.fromCharCode(0x2713) + '</span>'
        : '<span class="phase-check-box" aria-hidden="true"></span>';
      check.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDone(phase.id);
      });

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "phase-row" + (phase.id === activeId ? " active" : "");
      btn.setAttribute("aria-current", phase.id === activeId ? "true" : "false");
      btn.innerHTML =
        '<span class="num">' +
        padOrder(phase.order) +
        '</span><span class="title">' +
        escapeHtml(phase.title) +
        (done ? ' <span class="done-tag">done</span>' : "") +
        '</span><span class="dur">' +
        escapeHtml(phase.duration) +
        '</span><span class="check">' +
        escapeHtml(truncate(phase.checkpoint, 72)) +
        "</span>";
      btn.addEventListener("click", () => setActive(phase.id, true));

      row.appendChild(check);
      row.appendChild(btn);
      mapEl.appendChild(row);
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
      const mark = doneIds.includes(phase.id) ? " � done" : "";
      btn.innerHTML =
        "Phase " +
        phase.order +
        ": " +
        escapeHtml(phase.title) +
        "<small>" +
        escapeHtml(phase.duration) +
        escapeHtml(mark) +
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
          const prev =
            data.phases[(idx - 1 + data.phases.length) % data.phases.length];
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
    const done = doneIds.includes(phase.id);

    panelEl.setAttribute("aria-labelledby", "tab-" + phase.id);

    const weekHtml = (phase.weekPlan || [])
      .map(
        (w) =>
          '<div class="week-card"><div class="week-head"><strong>' +
          escapeHtml(w.week) +
          "</strong><span>" +
          escapeHtml(w.focus) +
          "</span></div>" +
          listHtml(w.tasks) +
          "</div>"
      )
      .join("");

    const section = (title, items, ordered) => {
      if (!items || !items.length) return "";
      const body = ordered
        ? "<ol>" +
          items.map((i) => "<li>" + escapeHtml(i) + "</li>").join("") +
          "</ol>"
        : listHtml(items);
      return (
        '<div class="detail-block"><h4 class="block-title">' +
        title +
        "</h4>" +
        body +
        "</div>"
      );
    };

    panelEl.innerHTML =
      "<h3>Phase " +
      phase.order +
      ": " +
      escapeHtml(phase.title) +
      '</h3><div class="phase-meta"><span class="pill teal">' +
      escapeHtml(phase.duration) +
      '</span><span class="pill">Expanded detail</span>' +
      (done
        ? '<span class="pill done-pill">Completed</span>'
        : '<span class="pill">In progress</span>') +
      '</div><p class="phase-goal">' +
      escapeHtml(phase.goal) +
      '</p><div class="panel-actions"><button type="button" class="btn ' +
      (done ? "btn-ghost" : "btn-primary") +
      '" id="toggle-done-btn">' +
      (done ? "Mark as not done" : "Mark phase complete") +
      '</button><button type="button" class="btn btn-ghost" id="copy-checkpoint-btn">Copy checkpoint</button></div><div class="grid-3"><div class="mini-block"><h4>Outcomes</h4>' +
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

    const toggleBtn = document.getElementById("toggle-done-btn");
    if (toggleBtn) toggleBtn.addEventListener("click", () => toggleDone(phase.id));
    const copyBtn = document.getElementById("copy-checkpoint-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(phase.checkpoint);
          copyBtn.textContent = "Copied";
          setTimeout(() => (copyBtn.textContent = "Copy checkpoint"), 1200);
        } catch (e) {
          copyBtn.textContent = "Copy failed";
        }
      });
    }
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

  if (searchEl) {
    searchEl.addEventListener("input", () => {
      searchQuery = searchEl.value;
      renderMap();
    });
  }

  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 400);
    });
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  updateProgress();
  setActive(activeId, false);
  renderTrends();
  renderSkills();
  renderRhythm();
})();
