(function () {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Galerie de captures : images = [{ src, alt }]
  const gallery = (imgs) => !imgs || !imgs.length ? "" :
    `<div class="gallery">${imgs.map((i) => `<a href="${esc(i.src)}" target="_blank" rel="noopener"><img src="${esc(i.src)}" alt="${esc(i.alt || "")}" loading="lazy" /></a>`).join("")}</div>`;
  // Vidéo : lien YouTube ou fichier .mp4
  const video = (v) => {
    if (!v) return "";
    const yt = v.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    if (yt) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Démonstration vidéo" allowfullscreen loading="lazy"></iframe></div>`;
    return `<div class="video"><video src="${esc(v)}" controls preload="metadata"></video></div>`;
  };

  // Identité
  $("#brand").textContent = D.handle;
  $("#hero-name").textContent = D.name;
  $("#hero-title").textContent = D.title;
  $("#hero-pitch").textContent = D.pitch;
  $("#hero-meta").textContent = `${D.handle} sur GitHub, basée à ${D.location}`;
  const av = $("#avatar");
  if (D.avatar) { av.src = D.avatar; av.onerror = () => av.remove(); } else av.remove();
  $("#foot").textContent = `© ${new Date().getFullYear()} ${D.name}. Site statique, hébergé gratuitement.`;

  // Projet phare
  const F = D.featured;
  $("#korai").innerHTML = `
    <div class="featured-inner">
      <div>
        <p class="featured-ctx">${esc(F.context)}</p>
        <h2 id="korai-title">${esc(F.name)}</h2>
        <p class="featured-sub">${esc(F.subtitle)}</p>
        <p class="featured-summary">${esc(F.summary)}</p>
        ${F.confidential ? `<p class="conf-note"><svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/></svg><span>${esc(F.confidentialNote || "Projet confidentiel : code et données non publics.")}</span></p>` : ""}
        <ul>${F.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <ul class="stack" aria-label="Technologies">${F.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <div class="btn-row">
          ${F.demo ? `<a class="btn" href="${esc(F.demo)}" target="_blank" rel="noopener">Essayer la démo</a>` : ""}
          ${F.repo && !F.confidential ? `<a class="btn btn-ghost" href="${esc(F.repo)}" target="_blank" rel="noopener">Voir le code sur GitHub</a>` : ""}
          ${F.publicPost && F.publicPost.url ? `<a class="btn" href="${esc(F.publicPost.url)}" target="_blank" rel="noopener">${esc(F.publicPost.label || "Voir la publication")}</a>` : ""}
        </div>
      </div>
      <div class="metrics" role="list" aria-label="Résultats mesurés">
        ${F.metrics.map((m) => `<div class="metric" role="listitem"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}
        <p class="metrics-note">Mesuré sur le jeu de test du mémoire.</p>
      </div>
      ${F.video || (F.images && F.images.length) ? `<div class="featured-media">${video(F.video)}${gallery(F.images)}</div>` : ""}
    </div>`;

  // Projets + recherche
  const list = $("#project-list");
  const all = D.projects.map((p) => ({ ...p, hay: norm([p.name, p.summary, p.tags.join(" "), p.stack.join(" ")].join(" ")) }));

  function hl(text, q) {
    const t = esc(text);
    if (!q) return t;
    const words = q.split(/\s+/).filter((w) => w.length > 1);
    if (!words.length) return t;
    // surligne sans tenir compte des accents
    const src = norm(t);
    const marks = [];
    words.forEach((w) => { let i = 0; while ((i = src.indexOf(w, i)) !== -1) { marks.push([i, i + w.length]); i += w.length; } });
    if (!marks.length) return t;
    marks.sort((a, b) => a[0] - b[0]);
    let out = "", last = 0;
    marks.forEach(([a, b]) => { if (a < last) return; out += t.slice(last, a) + "<mark>" + t.slice(a, b) + "</mark>"; last = b; });
    return out + t.slice(last);
  }

  function render(qRaw) {
    const q = norm(qRaw.trim());
    const words = q.split(/\s+/).filter(Boolean);
    const shown = all.filter((p) => words.every((w) => p.hay.includes(w)));
    list.innerHTML = shown.map((p) => `
      <li class="project">
        <div class="project-year">${esc(p.year)}</div>
        <div>
          <h3>${hl(p.name, q)}</h3>
          <p>${hl(p.summary, q)}</p>
          <ul class="stack" aria-label="Technologies">${p.stack.map((s) => `<li>${hl(s, q)}</li>`).join("")}</ul>
          ${video(p.video)}${gallery(p.images)}
        </div>
        <div class="project-links">
          ${p.confidential ? `<span class="nolink">Projet confidentiel</span>` : p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Code source</a>` : `<span class="nolink">Code non public</span>`}
          ${p.extra ? `<a href="${esc(p.extra.url)}" target="_blank" rel="noopener">${esc(p.extra.label)}</a>` : ""}
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Démo en ligne</a>` : ""}
        </div>
      </li>`).join("");
    $("#empty").hidden = shown.length > 0;
    $("#result-count").textContent = q
      ? `${shown.length} projet${shown.length > 1 ? "s" : ""} pour « ${qRaw.trim()} »`
      : `${all.length} projets sélectionnés`;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(norm(c.dataset.q) === q)));
  }

  const input = $("#query");
  const suggestions = ["RAG", "Vision", "Agents", "Scala", "Power BI", "Machine learning"];
  $("#chips").innerHTML = suggestions.map((s) => `<button type="button" class="chip" data-q="${esc(s)}" aria-pressed="false">${esc(s)}</button>`).join("");
  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const on = b.getAttribute("aria-pressed") === "true";
    input.value = on ? "" : b.dataset.q;
    render(input.value);
    if (!on) $("#projets").scrollIntoView({ block: "start" });
  });
  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") $("#projets").scrollIntoView({ block: "start" }); });
  render("");

  $("#others").innerHTML = D.others.map((o) => `<li><a href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.name)}</a></li>`).join("");

  // Compétences
  $("#skills").innerHTML = D.skills.map((g) => `<div><h3>${esc(g.group)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

  // Parcours
  $("#timeline").innerHTML = D.timeline.map((t) => `<li><span class="when">${esc(t.when)}</span><div><div class="what">${esc(t.what)}</div><div class="where">${esc(t.where)}</div></div></li>`).join("");

  // Certifications
  const certs = D.certifications || [];
  if (certs.length) {
    $("#certs").innerHTML = certs.map((c) => `<li><b>${esc(c.name)}</b><span>${esc(c.by || "")}</span></li>`).join("");
  } else { $("#certs").remove(); document.querySelector(".cert-title").remove(); }

  // Contact
  const L = D.links, c = [];
  if (L.email) c.push(`<a href="mailto:${esc(L.email)}">Écrire un e-mail</a>`);
  if (L.linkedin) c.push(`<a href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  if (L.github) c.push(`<a href="${esc(L.github)}" target="_blank" rel="noopener">GitHub</a>`);
  if (L.cv) c.push(`<a href="${esc(L.cv)}" download>Télécharger mon CV</a>`);
  $("#contact-links").innerHTML = c.join("");
})();
