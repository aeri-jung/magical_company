(() => {
  "use strict";
  const content = window.PROFILE_CONTENT;
  if (!content) return;
  let mode = "day";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // 임의의 HTML을 실행하지 않고 <br> 줄바꿈만 허용합니다.
  function writeText(element, value) {
    const chunks = String(value ?? "").split(/<br\s*\/?>/i);
    element.replaceChildren();
    chunks.forEach((chunk, index) => {
      if (index) element.append(document.createElement("br"));
      element.append(document.createTextNode(chunk));
    });
  }
  function makeElement(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value !== undefined) writeText(element, value);
    return element;
  }
  function setList(id, values, render) {
    document.getElementById(id).replaceChildren(...values.map(render));
  }
  function render(nextMode) {
    mode = nextMode;
    const data = content[mode];
    document.documentElement.dataset.mode = mode;
    document.title = content.pageTitle;
    document.querySelector('meta[name="theme-color"]').content = mode === "day" ? "#182b53" : "#b83169";
    document.querySelectorAll("[data-copy]").forEach(element => writeText(element, data[element.dataset.copy]));
    const image = document.getElementById("character-image");
    image.src = data.image;
    image.alt = data.imageAlt;
    setList("hero-tags", data.tags, tag => makeElement("span", "tag", tag));
    setList("facts", data.facts, fact => {
      const item = makeElement("div", "fact");
      item.append(makeElement("dt", "", fact.label), makeElement("dd", "", fact.value));
      return item;
    });
    setList("story-paragraphs", data.story, text => makeElement("p", "", text));
    setList("scene-paragraphs", data.scene, text => makeElement("p", "", text));
    setList("traits", data.traits, trait => {
      const item = makeElement("div", "trait");
      item.append(makeElement("span", "trait-label", trait.label), makeElement("strong", "", trait.value));
      return item;
    });
    setList("world-cards", data.worldCards, card => {
      const item = makeElement("article", "world-card");
      item.append(makeElement("span", "world-number", card.number), makeElement("p", "world-card-label", card.title), makeElement("h3", "", card.subtitle), makeElement("p", "", card.text));
      return item;
    });
    document.getElementById("day-dot").classList.toggle("is-active", mode === "day");
    document.getElementById("night-dot").classList.toggle("is-active", mode === "night");
    document.querySelector(".mode-indicators").setAttribute("aria-label", mode === "day" ? "회사 프로필, 1 / 2" : "마법소녀 프로필, 2 / 2");
    document.querySelectorAll("[data-toggle]").forEach(button => {
      button.setAttribute("aria-label", data.toggleLabel);
      button.setAttribute("aria-pressed", String(mode === "night"));
    });
  }
  document.querySelectorAll("[data-toggle]").forEach(button => button.addEventListener("click", () => {
    const update = () => {
      render(mode === "day" ? "night" : "day");
      // 하단 버튼으로 전환해도 보이는 첫 전환 버튼으로 포커스를 옮깁니다.
      document.querySelector(".hero-action [data-toggle]").focus({ preventScroll: true });
      document.getElementById("mode-announcement").textContent = mode === "night" ? "마법소녀 프로필을 열었습니다." : "회사 프로필로 돌아왔습니다.";
    };
    // 기본 scrollIntoView는 고정 헤더 오프셋을 CSS scroll-margin-top으로 처리합니다.
    if (!reducedMotion.matches && document.startViewTransition) {
      const transition = document.startViewTransition(update);
      transition.ready.then(() => document.getElementById("profile").scrollIntoView({ behavior: "instant", block: "start" })).catch(() => {});
    } else {
      update();
      document.getElementById("profile").scrollIntoView({ behavior: "instant", block: "start" });
    }
  }));
  render("day");
  const preload = new Image();
  preload.src = content.night.image;
})();
