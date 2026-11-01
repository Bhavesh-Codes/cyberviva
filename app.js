/* ============================================================
   Cybersecurity Lab Viva — app logic (vanilla JS, offline)
   Mode: Learn / Test, saved via localStorage (try/catch wrapped).
   ============================================================ */
(function () {
"use strict";

var DATA = window.LAB_DATA;

/* ---------------- icons (inline, Lucide-style) ---------------- */
var ICONS = {
  shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3 8 3z"/><path d="M9 12l2 2 4-4"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  key: '<circle cx="7.5" cy="15.5" r="3.5"/><path d="m10.5 13 11-11"/><path d="m16.5 6.5 3 3"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  flask: '<path d="M10 2v7.5a2 2 0 0 1-.2.9L4.4 18.6A2 2 0 0 0 6.1 22h11.8a2 2 0 0 0 1.7-3.4L14.2 10.4a2 2 0 0 1-.2-.9V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  chevronR: '<path d="m9 18 6-6-6-6"/>',
  chevronL: '<path d="m15 18-6-6 6-6"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.97a4 4 0 0 0 3.3-1.7l5.25-8.6A4 4 0 0 1 15.83 6H22"/><path d="M2 6h1.97a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.17a4 4 0 0 1-3.57-2.2"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 2.64-6.36L3 8"/><path d="M3 3v5h5"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  zap: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>',
  arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  expand: '<path d="m6 5 6 6 6-6"/><path d="m6 13 6 6 6-6"/>',
  collapse: '<path d="m6 19 6-6 6 6"/><path d="m6 11 6-6 6 6"/>',
  layers: '<path d="m12 2 10 6.5-10 6.5L2 8.5 12 2z"/><path d="m2 14.5 10 6.5 10-6.5"/>',
  highlighter: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.83 0l-4.17-4.17a2 2 0 0 1 0-2.83L15 5"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  bookmark: '<path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
};
function svg(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>';
}
var escMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return escMap[c]; }); }

/* ---------------- flat model ---------------- */
var ALLQ = [];      // {id, q, a, modId, modTitle, expId, expTitle}
var TOPICS = [];    // {id, title, explanation, modId, modTitle}
var MODS = DATA.modules;
var GENERAL = DATA.generalViva;
MODS.forEach(function (m) {
  m.topics.forEach(function (t) { TOPICS.push({ id: t.id, title: t.title, explanation: t.explanation, modId: m.id, modTitle: m.title }); });
  m.experiments.forEach(function (e) {
    e.qa.forEach(function (qa) { ALLQ.push({ id: qa.id, q: qa.q, a: qa.a, modId: m.id, modTitle: m.title, expId: e.id, expTitle: e.title }); });
  });
});
GENERAL.forEach(function (g) { ALLQ.push({ id: g.id, q: g.q, a: g.a, modId: "gen", modTitle: "General Cyber Security Viva Questions", expId: "gen", expTitle: "General Cyber Security Viva Questions" }); });

function qById(id) { for (var i = 0; i < ALLQ.length; i++) if (ALLQ[i].id === id) return ALLQ[i]; return null; }

/* ---------------- persisted state ---------------- */
var KEY = "cyberlab-viva-v1";
var DEFAULTS = {
  mode: "learn", theme: "light", highlight: true,
  bookmarks: {}, marks: {}, seen: {}, open: {},
  shuffled: false, fltRev: false
};
var state = DEFAULTS;
var storageOK = true;
function load() {
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) { var p = JSON.parse(raw); state = Object.assign({}, DEFAULTS, p); }
  } catch (e) { storageOK = false; state = JSON.parse(JSON.stringify(DEFAULTS)); }
}
var saveTimer = null;
function save() {
  if (saveTimer) return;
  saveTimer = setTimeout(function () {
    saveTimer = null;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { storageOK = false; }
  }, 120);
}

/* ---------------- term highlight definitions ---------------- */
var CRIT = ["Common Vulnerability Scoring System", "NIST Cybersecurity Framework", "ISO/IEC 27001", "Information Security Management System", "Principle of Least Privilege", "Defense in Depth", "CIA Triad", "PCI-DSS", "CIS Critical Security Controls", "OWASP Top 10", "SQL Injection", "Cross-Site Scripting", "Cross-Site Request Forgery", "Man-in-the-Middle", "Denial of Service", "Multi-Factor Authentication", "Role-Based Access Control", "Vulnerability Assessment", "Three-Way Handshake", "Shared Responsibility Model", "TCP SYN Flood", "Zero-Day"];

var TERMS = ["Nmap", "Network Mapper", "Wireshark", "tcpdump", "netstat", "sqlmap", "setoolkit", "CrypTool", "OpenSSL", "hping3", "Hashcat", "John the Ripper", "Suricata", "Snort", "UFW", "Uncomplicated Firewall", "iptables", "netfilter", "Squid Proxy", "basic_ncsa_auth", "htpasswd", "OWASP ZAP", "Zed Attack Proxy", "OWASP Juice Shop", "Bee-Box", "Metasploitable 2", "Metasploitable", "Kali Linux", "Oracle VirtualBox", "VirtualBox", "AWS S3", "Simple Storage Service", "IAM", "pwscore", "libpwquality", "bcrypt", "Argon2", "rockyou.txt", "best64.rule", "OpenVAS", "Greenbone", "Nessus", "GVM", "CVSS", "CVE", "TCP SYN Cookies", "tcp_syncookies", "SYN_RECV", "Transmission Control Block", "half-open", "AccessDenied", "Block Public Access", "Server-Side Encryption", "Bucket Policy", "NIDS", "Intrusion Detection System", "Deep Packet Inspection", "promiscuous mode", "attack surface", "frequency analysis", "Kasiski examination", "Feistel", "Vigenère cipher", "entropy", "Rainbow Tables", "Credential Harvester", "phishing", "SQLi", "XSS", "IDOR", "CSRF", "totient", "acuart", "testphp.vulnweb.com", "Insecure Direct Object References", "Blind SQL Injection", "Spidering", "Passive Scanning", "Active Scanning", "url_regex", "dstdomain", "access.log", "fast.log", "vboxconfig", "msfadmin", "port 3128", "NAT", "Host-Only", "Internal Network", "hypervisor", "SPF, DKIM, and DMARC", "FIDO2", "WebAuthn", "IDS", "NVT", "Annex A", "Executive Summary", "Service Control Policies", "permission boundary", "Implicit Deny"];

function buildRe(list) {
  var parts = list.slice().sort(function (a, b) { return b.length - a.length; }).map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
  return new RegExp("(" + parts.join("|") + ")", "gi");
}
var CRIT_RE = buildRe(CRIT), TERM_RE = buildRe(TERMS);

/* ---------------- DOM helpers ---------------- */
function $(sel, el) { return (el || document).querySelector(sel); }
function $$(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
function el(tag, cls, html) {
  var d = document.createElement(tag);
  if (cls) d.className = cls;
  if (html != null) d.innerHTML = html;
  return d;
}
function byAcc(id) { return $('[data-acc="' + id + '"]'); }
var cbox = null, contentView = null, bmView = null;

/* ---------------- highlighter engine ---------------- */
function stripTags(html) {
  var d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent || "").replace(/\s+/g, " ");
}
var SKIP_TAGS = { CODE: 1, PRE: 1, MARK: 1, SCRIPT: 1, KBD: 1, FIGURE: 1 };
function wrapMatches(node, re, cls) {
  var text = node.nodeValue;
  if (!text) return false;
  re.lastIndex = 0;
  var hits = [], m;
  while ((m = re.exec(text))) {
    if (m[0].length === 0) { re.lastIndex++; continue; }
    hits.push([m.index, m.index + m[0].length]);
    if (hits.length > 400) break;
  }
  if (!hits.length) return false;
  var frag = document.createDocumentFragment();
  var pos = 0;
  for (var i = 0; i < hits.length; i++) {
    var s = hits[i][0], e = hits[i][1];
    if (s > pos) frag.appendChild(document.createTextNode(text.slice(pos, s)));
    var mk = document.createElement("mark");
    mk.className = cls;
    mk.textContent = text.slice(s, e);
    frag.appendChild(mk);
    pos = e;
  }
  if (pos < text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
  node.parentNode.replaceChild(frag, node);
  return true;
}
function highlightIn(root, re, cls) {
  if (!root) return;
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      if (!n.nodeValue || !n.nodeValue.trim() || !/[A-Za-z0-9]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      var p = n.parentElement;
      while (p && p !== root) { if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT; p = p.parentElement; }
      if (p !== root && !root.contains(n)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  var nodes = [], n;
  while ((n = walker.nextNode())) nodes.push(n);
  for (var i = 0; i < nodes.length; i++) wrapMatches(nodes[i], re, cls);
}
function applyHighlights(scope) {
  if (!state.highlight) return;
  highlightIn(scope, CRIT_RE, "hl-crit");
  highlightIn(scope, TERM_RE, "hl");
}
function clearHighlights(scope) {
  $$(".hl, .hl-crit, .hl-search", scope).forEach(function (mk) {
    var parent = mk.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mk.textContent), mk);
    parent.normalize();
  });
}

/* ---------------- code block copy buttons ---------------- */
var LANG_LABEL = { bash: "bash / terminal", json: "json policy", sql: "sql", conf: "squid.conf", text: "plain text" };
function wrapCodeBlocks(scope) {
  $$("pre", scope).forEach(function (pre) {
    if (pre.closest("figure.codebox")) return;
    var code = pre.querySelector("code");
    var langCls = code ? (code.className || "") : "";
    var lm = langCls.match(/lang-([a-z]+)/);
    var lang = lm ? lm[1] : "text";
    var fig = document.createElement("figure");
    fig.className = "codebox";
    var bar = el("div", "codebar", '<span class="lang">' + esc(LANG_LABEL[lang] || lang) + "</span>");
    var btn = el("button", "copy-btn");
    btn.type = "button";
    btn.dataset.copy = "1";
    btn.innerHTML = svg("copy") + '<span class="copy-lbl">Copy</span>';
    bar.appendChild(btn);
    fig.appendChild(bar);
    pre.parentNode.insertBefore(fig, pre);
    fig.appendChild(pre);
  });
}
function copyText(txt) {
  var ok = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt); return true; }
  } catch (e) { /* fall through */ }
  try {
    var ta = document.createElement("textarea");
    ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    ok = document.execCommand("copy");
    document.body.removeChild(ta);
  } catch (e) { ok = false; }
  return ok;
}

/* ---------------- accordion factory ---------------- */
function makeAcc(opts) {
  var wrap = el("div", "acc " + (opts.cls || ""));
  wrap.dataset.acc = opts.id;
  wrap.dataset.ord = (opts.ord != null ? opts.ord : 0);
  var head = el("div", "acc-head");
  var main = el("button", "acc-main");
  main.type = "button";
  main.dataset.action = "toggle";
  main.dataset.accHead = opts.id;
  main.setAttribute("aria-expanded", "false");
  main.setAttribute("aria-controls", "p-" + opts.id);
  if (opts.radId) head.id = opts.radId; // optional heading wrapper id
  main.innerHTML = (opts.headInner || "") + '<span class="chev">' + svg("chevron") + "</span>";
  head.appendChild(main);
  if (opts.star) {
    var s = el("button", "star-btn");
    s.type = "button";
    s.dataset.star = opts.id;
    s.setAttribute("aria-pressed", state.bookmarks[opts.id] ? "true" : "false");
    s.setAttribute("aria-label", "Bookmark");
    s.title = "Bookmark";
    s.innerHTML = svg("star");
    head.appendChild(s);
  }
  var panel = el("div", "acc-panel");
  panel.id = "p-" + opts.id;
  panel.setAttribute("role", "region");
  var inner = el("div", "acc-inner");
  var body = el("div", opts.bodyCls || "acc-body");
  if (typeof opts.body === "string") body.innerHTML = opts.body;
  else if (opts.body) body.appendChild(opts.body);
  inner.appendChild(body);
  panel.appendChild(inner);
  wrap.appendChild(head);
  wrap.appendChild(panel);
  return { wrap: wrap, main: main, body: body, head: head };
}

/* ---------------- progress ---------------- */
function moduleStats(modId) {
  var known = 0, rev = 0, seen = 0, total = 0;
  for (var i = 0; i < ALLQ.length; i++) {
    var q = ALLQ[i];
    if (q.modId !== modId) continue;
    total++;
    if (state.marks[q.id] === "known") known++;
    else if (state.marks[q.id] === "revision") rev++;
    if (state.seen[q.id]) seen++;
  }
  return { known: known, rev: rev, seen: seen, total: total };
}
function setBar(pb, known, rev, total, seenOnly) {
  if (!pb) return;
  var k = pb.querySelector(".pb-known"), r = pb.querySelector(".pb-rev");
  if (total === 0) total = 1;
  var pctK = (seenOnly ? known : known) / total * 100;
  var pctR = rev / total * 100;
  if (seenOnly) { pctK = known / total * 100; pctR = 0; }
  k.style.width = pctK + "%";
  r.style.width = pctR + "%";
  r.style.left = (seenOnly ? 100 : pctK) + "%";
  var lab = pb.parentNode.querySelector(".pb-label");
  if (lab) lab.textContent = seenOnly ? (known + " / " + total + " opened") : ((known + rev) + " / " + total + " answered");
  var tags = pb.parentNode.querySelectorAll(".pb-tag b");
  if (tags && tags.length >= 2) {
    tags[0].textContent = seenOnly ? String(known) : String(known);
    tags[1].textContent = seenOnly ? "0" : String(rev);
  }
}
function updateProgress() {
  var test = state.mode === "test";
  MODS.forEach(function (m) {
    var st = moduleStats(m.id);
    if (test) setBar($("#pb-" + m.id), st.known, st.rev, st.total, false);
    else setBar($("#pb-" + m.id), st.seen, 0, st.total, true);
  });
  // overall
  var allK = 0, allR = 0, allS = 0, allT = ALLQ.length;
  ALLQ.forEach(function (q) {
    if (state.marks[q.id] === "known") allK++;
    else if (state.marks[q.id] === "revision") allR++;
    if (state.seen[q.id]) allS++;
  });
  if (test) { setBar($("#pb-all"), allK, allR, allT, false); var sc = $("#bigScore"); if (sc) sc.innerHTML = "<b>" + allK + "</b> known · " + allR + " need revision · " + (allT - allK - allR) + " left"; }
  else { setBar($("#pb-all"), allS, 0, allT, true); var sc2 = $("#bigScore"); if (sc2) sc2.innerHTML = "<b>" + allS + "</b> of " + allT + " opened"; }
  var foot = $("#sideStats");
  if (foot) foot.innerHTML = "Questions: <b>" + allT + "</b>" + (test ? " · known: <b>" + allK + "</b> · revision: <b>" + allR + "</b>" : " · opened: <b>" + allS + "</b>") + (storageOK ? "" : "<br><b>Storage unavailable</b> — progress will not persist.");
}

/* ---------------- content builders ---------------- */
var sessionRevealed = {};

function questionBodyHTML(qq) {
  var revealed = sessionRevealed[qq.id] && state.mode === "test";
  if (state.mode === "learn") {
    return '<div class="answer">' + qq.a + "</div>";
  }
  var answer = '<div class="answer hide-until-reveal" ' + (!revealed ? "hidden" : "") + ">" + qq.a + "</div>";
  var mark = "";
  if (state.marks[qq.id]) {
    mark = '<span class="q-status ' + (state.marks[qq.id] === "known" ? "known" : "revision") + '" data-status="' + qq.id + '">' + svg(state.marks[qq.id] === "known" ? "check" : "rotate") + (state.marks[qq.id] === "known" ? "Knew it" : "Revision") + "</span>";
  }
  return (
    '<div class="reveal-row" ' + (revealed ? "hidden" : "") + ">" +
      '<button type="button" class="reveal-btn" data-reveal="' + qq.id + '">' + svg("eye") + "Reveal answer</button>" +
      '<span class="answer-hidden-note">Try answering aloud first, then reveal.</span>' +
    "</div>" +
    answer +
    '<div class="mark-row" ' + (revealed ? "" : "hidden") + ">" +
      '<button type="button" class="mark-btn know" data-mark-btn="known" data-qid="' + qq.id + '" aria-pressed="' + (state.marks[qq.id] === "known") + '">' + svg("check") + "I knew it</button>" +
      '<button type="button" class="mark-btn rev" data-mark-btn="revision" data-qid="' + qq.id + '" aria-pressed="' + (state.marks[qq.id] === "revision") + '">' + svg("rotate") + "Need revision</button>" +
      '<span class="mark-hint" data-status-slot="' + qq.id + '">Mark yourself to score progress.</span>' +
    "</div>"
  );
}

function buildQuestionAcc(qq, opts) {
  var statusChip = "";
  if (state.mode === "test" && state.marks[qq.id]) {
    var known = state.marks[qq.id] === "known";
    statusChip = '<span class="q-status ' + (known ? "known" : "revision") + '" data-status="' + qq.id + '">' + svg(known ? "check" : "rotate") + (known ? "Knew it" : "Revision") + "</span>";
  }
  var headInner =
    '<span class="qnum">Q' + (opts.ord + 1) + "</span>" +
    '<span class="acc-title">' + esc(qq.q) + "</span>" + statusChip;
  var a = makeAcc({
    id: qq.id,
    cls: "qitem",
    ord: opts.ord,
    body: questionBodyHTML(qq),
    bodyCls: "acc-body q-body",
    star: true,
    headInner: headInner
  });
  a.wrap.dataset.qid = qq.id;
  return a;
}

function buildTopicAcc(topic, ord) {
  var a = makeAcc({
    id: topic.id,
    cls: "topic",
    ord: ord,
    body: '<div class="answer topic-answer">' + topic.explanation + "</div>",
    bodyCls: "acc-body",
    star: true,
    headInner: '<span class="topic-ico">' + svg("book") + '</span><span class="acc-title">' + esc(topic.title) + "</span>"
  });
  return a;
}

function buildExperimentAcc(mod, exp, ord) {
  var body = el("div", "exp-body");
  if (exp.aim) {
    var aim = el("div", "exp-aim");
    aim.innerHTML = '<span class="aim-ico">' + svg("flag") + '</span>' +
      '<div class="aim-copy"><span class="aim-label">Aim</span><span class="aim-text">' + esc(exp.aim) + "</span></div>";
    body.appendChild(aim);
  }
  exp.qa.forEach(function (qa, i) {
    var a = buildQuestionAcc({ id: qa.id, q: qa.q, a: qa.a }, { ord: i });
    body.appendChild(a.wrap);
  });
  var a = makeAcc({
    id: exp.id,
    cls: "experiment",
    ord: ord,
    body: body,
    bodyCls: "",
    headInner: '<span class="exp-ico">' + svg("flask") + '</span><span class="acc-title">' + esc(exp.title) + "</span>" +
      '<span class="chip">' + exp.qa.length + " question" + (exp.qa.length > 1 ? "s" : "") + "</span>"
  });
  return a;
}

function moduleCardHeadInner(m) {
  var icon = m.icon || "shield";
  var tools =
    '<div class="card-tools">' +
      '<button type="button" class="mini-btn card-toggle" data-toggle-all="' + m.id + '" aria-expanded="false">' + svg("expand") + '<span class="lbl">Expand all</span></button>' +
    "</div>";
  return (
    '<span class="m-icon">' + svg(icon) + "</span>" +
    '<h2>' + esc(m.title) + "</h2>" + tools
  );
}

function buildModuleCard(m) {
  var card = el("section", "card");
  card.dataset.accent = m.accent;
  card.id = "card-" + m.id;
  card.innerHTML =
    '<div class="card-head">' + moduleCardHeadInner(m) + "</div>" +
    '<div class="card-meta">' +
      '<span class="chip">' + m.topics.length + " topics</span>" +
      '<span class="chip">' + m.experiments.length + " experiments</span>" +
      '<span class="chip">' + m.experiments.reduce(function (n, e) { return n + e.qa.length; }, 0) + " questions</span>" +
    "</div>" +
    '<div class="pbar-row"><div class="pbar" id="pb-' + m.id + '"><div class="pb-known"></div><div class="pb-rev"></div></div>' +
      '<span class="pb-label"></span>' +
      '<span class="pb-tag known">' + svg("check") + "<b>0</b></span>" +
      '<span class="pb-tag rev">' + svg("rotate") + "<b>0</b></span>" +
    "</div>";
  var gt = el("h3", "group-title", "Topics Covered <span class=\"chip\">" + m.topics.length + "</span>");
  card.appendChild(gt);
  m.topics.forEach(function (t, i) { card.appendChild(buildTopicAcc(t, i).wrap); });
  gt = el("h3", "group-title", "Experiments <span class=\"chip\">" + m.experiments.length + "</span>");
  card.appendChild(gt);
  m.experiments.forEach(function (e, i) { card.appendChild(buildExperimentAcc(m, e, i).wrap); });
  return card;
}

function buildGeneralCard() {
  var card = el("section", "card");
  card.dataset.accent = "sand";
  card.id = "card-gen";
  var titleHtml =
    '<span class="m-icon">' + svg("layers") + "</span>" +
    '<h2>General Cyber Security Viva Questions</h2>' +
    '<div class="card-tools">' +
      '<button type="button" class="mini-btn card-toggle" data-toggle-all="gen" aria-expanded="false">' + svg("expand") + '<span class="lbl">Expand all</span></button>' +
    "</div>";
  card.innerHTML =
    '<div class="card-head">' + titleHtml + "</div>" +
    '<div class="card-meta"><span class="chip">' + GENERAL.length + " questions</span>" +
      '<span class="chip">cross-module revision</span></div>' +
    '<div class="pbar-row"><div class="pbar" id="pb-gen"><div class="pb-known"></div><div class="pb-rev"></div></div>' +
      '<span class="pb-label"></span>' +
      '<span class="pb-tag known">' + svg("check") + "<b>0</b></span>" +
      '<span class="pb-tag rev">' + svg("rotate") + "<b>0</b></span></div>";
  GENERAL.forEach(function (g, i) { card.appendChild(buildQuestionAcc(g, { ord: i, isObjective: false }).wrap); });
  return card;
}

/* ---------------- open / close / marking ---------------- */
var saveOpenT = null;
function setOpen(id, open) {
  var e = byAcc(id);
  if (!e) return;
  e.classList.toggle("open", !!open);
  var b = $(".acc-main", e);
  if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
  syncCardToggle(e.closest(".card"));
  if (open) {
    var ans = $(".answer", e) || e.querySelector(".topic-answer");
    if (ans && !e.dataset.hl) { applyHighlights(ans); e.dataset.hl = "1"; }
    if (sessionRevealed[id]) {
      var rr = $(".reveal-row", e); if (rr) rr.hidden = true;
      var an2 = $(".hide-until-reveal", e); if (an2) an2.hidden = false;
      var mr = $(".mark-row", e); if (mr) mr.hidden = false;
    }
  }
  state.open[id] = open ? 1 : 0;
  clearTimeout(saveOpenT);
  saveOpenT = setTimeout(function () { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (er) {} }, 200);
  if (!open) return;
  // mark seen for questions (learn or test) only for direct question ids
  var isQ = e.classList.contains("qitem");
  if (isQ && !state.seen[id]) { state.seen[id] = 1; save(); updateProgress(); }
  applyFilter();
}

function toggleAcc(id) {
  var e = byAcc(id);
  if (!e) return;
  setOpen(id, !e.classList.contains("open"));
}

function expandAllIn(modId, open) {
  var card = $("#card-" + modId);
  if (!card) return;
  $$(".acc", card).forEach(function (a) {
    var id = a.dataset.acc;
    setOpen(id, open);
  });
  syncCardToggle(card);
}

/* one toggle button per card: "Expand all" <-> "Collapse all" */
function cardAllOpen(card) {
  var list = $$(".acc", card);
  for (var i = 0; i < list.length; i++) if (!list[i].classList.contains("open")) return false;
  return list.length > 0;
}
function syncCardToggle(card) {
  if (!card) return;
  var b = $("[data-toggle-all]", card);
  if (!b) return;
  var all = cardAllOpen(card);
  b.setAttribute("aria-expanded", all ? "true" : "false");
  b.title = all ? "Collapse all sections" : "Expand all sections";
  b.setAttribute("aria-label", b.title);
  b.innerHTML = svg(all ? "collapse" : "expand") + '<span class="lbl">' + (all ? "Collapse all" : "Expand all") + "</span>";
}
function syncAllCardToggles() { $$(".card").forEach(syncCardToggle); }

function setMark(id, val) {
  if (state.marks[id] === val) delete state.marks[id];
  else state.marks[id] = val;
  save();
  // ensure a status chip exists in the question header (test mode), then update it
  var chip = null;
  $$('[data-status="' + id + '"]').forEach(function (c) { chip = c; });
  if (!chip && state.marks[id]) {
    var e = byAcc(id);
    var main = e ? $(".acc-main", e) : null;
    if (main) {
      chip = document.createElement("span");
      chip.dataset.status = id;
      var chev = $(".chev", main);
      if (chev) main.insertBefore(chip, chev); else main.appendChild(chip);
    }
  }
  if (chip) {
    var has = state.marks[id];
    if (!has) { chip.remove(); }
    else {
      var known = has === "known";
      chip.className = "q-status " + (known ? "known" : "revision");
      chip.innerHTML = svg(known ? "check" : "rotate") + (known ? "Knew it" : "Revision");
    }
  }
  $$('[data-mark-btn][data-qid="' + id + '"]').forEach(function (b) {
    b.setAttribute("aria-pressed", b.dataset.markBtn === state.marks[id] ? "true" : "false");
  });
  var slot = $('[data-status-slot="' + id + '"]');
  if (slot) slot.textContent = state.marks[id] ? (state.marks[id] === "known" ? "Marked: knew it" : "Marked: needs revision") : "Mark yourself to score progress.";
  updateProgress();
  applyFilter();
}

function revealQuestion(id) {
  sessionRevealed[id] = 1;
  var e = byAcc(id);
  if (!e) return;
  var rr = $(".reveal-row", e); if (rr) rr.hidden = true;
  var an = $(".hide-until-reveal", e) || $(".answer", e); if (an) an.hidden = false;
  var mr = $(".mark-row", e); if (mr) mr.hidden = false;
  var ans = $(".answer", e);
  if (ans && !e.dataset.hl) { applyHighlights(ans); e.dataset.hl = "1"; }
  refreshStatusChips();
}

function refreshStatusChips() { /* chips re-rendered on setMark */ }

/* ---------------- filter (need revision only) + shuffle ---------------- */
function applyFilter() {
  var on = state.mode === "test" && state.fltRev;
  document.body.classList.toggle("flt-rev", on);
  $$(".acc.experiment, #card-gen").forEach(function (exp) {
    exp.classList.remove("flt-empty");
  });
  if (!on) return;
  $$(".acc.experiment").forEach(function (exp) {
    var kids = $$(".acc.qitem", exp);
    var anyVisible = kids.some(function (k) { return k.offsetParent !== null; });
    exp.classList.toggle("flt-empty", kids.length > 0 && !anyVisible);
  });
  var genCard = $("#card-gen");
  if (genCard) {
    var kids = $$(".acc.qitem", genCard);
    genCard.classList.toggle("flt-empty", kids.length > 0 && !kids.some(function (k) { return k.offsetParent !== null; }));
  }
}

function applyShuffle() {
  var containers = [];
  $$(".exp-body").forEach(function (b) { containers.push(b); });
  var genCard = $("#card-gen");
  if (genCard) containers.push(genCard);
  containers.forEach(function (cont) {
    var kids = $$(".acc.qitem", cont);
    if (state.shuffled) {
      for (var i = kids.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = kids[i]; kids[i] = kids[j]; kids[j] = t;
      }
    } else {
      kids.sort(function (a, b) { return (+a.dataset.ord) - (+b.dataset.ord); });
    }
    kids.forEach(function (k) { cont.appendChild(k); });
  });
}

/* ---------------- sidebar ---------------- */
var ACCENT_VAR = { mint: "#2fa98c", lavender: "#7c6fd6", peach: "#e08a55", sky: "#4d9fd6", rose: "#d96a8f", butter: "#c9a437", sand: "#5f7186" };
function renderSidebar() {
  var list = $("#sideList");
  if (!list) return;
  list.innerHTML = "";
  var buildGroup = function (id, title, accent, count, hasSub) {
    var grp = el("div", "side-group");
    grp.dataset.group = id;
    grp.dataset.ac = accent;
    var row = el("div", "side-row");
    var link = el("button", "side-link");
    link.type = "button";
    link.dataset.goto = id;
    link.innerHTML = '<span class="dot" style="background:' + (ACCENT_VAR[accent] || "#8fa3bd") + '"></span><span class="txt">' + esc(title) + "</span>";
    var box = el("span", "side-box");
    box.innerHTML = '<span class="side-count">' + count + "</span>";
    row.appendChild(link);
    if (hasSub) {
      var caret = el("button", "side-caret");
      caret.type = "button";
      caret.dataset.caret = id;
      caret.setAttribute("aria-expanded", "false");
      caret.setAttribute("aria-label", "Toggle " + title + " subsections");
      caret.title = "Show / hide experiments";
      caret.innerHTML = svg("chevronR");
      box.appendChild(caret);
    }
    row.appendChild(box);
    grp.appendChild(row);
    if (hasSub) {
      var sub = el("div", "side-sub");
      grp.appendChild(sub);
      return { grp: grp, sub: sub };
    }
    list.appendChild(grp);
    return { grp: grp, sub: null };
  };
  MODS.forEach(function (m) {
    var dot = buildGroup(m.id, m.title.replace(/^Module \d+: /, "M" + m.title.match(/^Module (\d+)/)[1] + ": "), m.accent, m.experiments.length + " exp", true);
    list.appendChild(dot.grp);
    m.experiments.forEach(function (e) {
      var b = el("button", "");
      b.type = "button";
      b.dataset.goto = e.id;
      b.textContent = e.title.replace(/^Experiment \d+: /, "");
      dot.sub.appendChild(b);
    });
  });
  var g = buildGroup("gen", "General Viva Questions", "sand", GENERAL.length + " q", false);
  list.appendChild(g.grp);
}

/* ---------------- test panel ---------------- */
function renderTestPanel() {
  var p = $("#testPanel");
  if (!p) return;
  var test = state.mode === "test";
  p.hidden = !test;
  if (!test) return;
  p.innerHTML =
    '<div class="test-row">' +
      '<span class="test-title">' + svg("zap") + "Test mode</span>" +
      '<span class="big-score" id="bigScore"></span>' +
      '<div class="pbar grow" id="pb-all"><div class="pb-known"></div><div class="pb-rev"></div></div>' +
    "</div>" +
    '<div class="test-row" style="margin-top:10px">' +
      '<label class="switch" title="Show only questions marked as needing revision">' +
        '<input type="checkbox" id="fltRevChk" ' + (state.fltRev ? "checked" : "") + ">" +
        svg("filter") + " Need revision only</label>" +
      '<label class="switch ' + (state.shuffled ? "shuffled" : "") + '" title="Shuffle question order inside each experiment">' +
        '<input type="checkbox" id="shufChk" ' + (state.shuffled ? "checked" : "") + ">" +
        svg("shuffle") + " Shuffle questions</label>" +
      '<span class="spacer" style="flex:1"></span>' +
      '<button type="button" class="quiz-btn" id="quizBtn">' + svg("zap") + "Quick quiz</button>" +
    "</div>";
  $("#fltRevChk").checked = state.fltRev;
  $("#shufChk").checked = state.shuffled;
}

/* ---------------- render main ---------------- */
function renderContent() {
  cbox = $("#content");
  cbox.innerHTML = "";
  MODS.forEach(function (m) { cbox.appendChild(buildModuleCard(m)); });
  cbox.appendChild(buildGeneralCard());
  wrapCodeBlocks(cbox);
  applyShuffle();
  // restore open accordions
  Object.keys(state.open).forEach(function (id) {
    if (state.open[id]) {
      var e = byAcc(id);
      if (e) { e.classList.add("open"); var b = $(".acc-main", e); if (b) b.setAttribute("aria-expanded", "true"); }
    }
  });
  renderTestPanel();
  updateProgress();
  applyFilter();
  applyTheme();
  applyHighlightPref();
  syncAllCardToggles();
}

/* restore open list also needs highlight/reveal pass */
function restoreOpenPanels() {
  Object.keys(state.open).forEach(function (id) {
    if (state.open[id]) setOpen(id, true);
  });
  applyFilter();
}

/* ---------------- search ---------------- */
var INDEX = [];
function buildIndex() {
  INDEX = [];
  MODS.forEach(function (m) {
    m.topics.forEach(function (t) {
      INDEX.push({ id: t.id, type: "topic", path: m.title, sub: "Topic", title: t.title, text: stripTags(t.explanation) });
    });
    m.experiments.forEach(function (e) {
      e.qa.forEach(function (qa) {
        INDEX.push({ id: qa.id, type: "question", path: m.title, sub: e.title, title: qa.q, text: stripTags(qa.a) });
      });
    });
  });
  GENERAL.forEach(function (g) {
    INDEX.push({ id: g.id, type: "question", path: "General Cyber Security Viva Questions", sub: "General viva", title: g.q, text: stripTags(g.a) });
  });
}

function markText(s, q) {
  if (!q) return esc(s);
  var out = "", low = s.toLowerCase(), ql = q.toLowerCase(), i = 0;
  var idx;
  while ((idx = low.indexOf(ql, i)) !== -1) {
    out += esc(s.slice(i, idx)) + "<mark>" + esc(s.slice(idx, idx + q.length)) + "</mark>";
    i = idx + q.length;
  }
  out += esc(s.slice(i));
  return out;
}

function runSearch(q) {
  var res = $("#searchResults");
  if (!res) return;
  var query = q.trim();
  if (!query) { res.hidden = true; res.innerHTML = ""; clearSearchMarks(); return; }
  var ql = query.toLowerCase();
  var scored = [];
  INDEX.forEach(function (it, i) {
    var t = it.title.toLowerCase(), x = it.text.toLowerCase();
    var ti = t.indexOf(ql), ai = x.indexOf(ql);
    if (ti === -1 && ai === -1) return;
    var score = (ti !== -1 ? 0 : 10) + i * 0.001;
    scored.push({ it: it, score: score, ti: ti, ai: ai });
  });
  scored.sort(function (a, b) { return a.score - b.score; });
  scored = scored.slice(0, 14);
  if (!scored.length) {
    res.hidden = false;
    res.innerHTML = '<div class="sr-head">Search</div><div class="sr-empty">No matches for "' + esc(query) + '". Try a tool name or key term.</div>';
    return;
  }
  var html = '<div class="sr-head">Search · ' + scored.length + (scored.length === INDEX.length ? "" : " shown") + "</div>";
  scored.forEach(function (s, n) {
    var it = s.it;
    var snip = "";
    var from = Math.max(0, (s.ai !== -1 ? s.ai : s.ti) - 46);
    snip = (from > 0 ? "…" : "") + it.text.slice(from, from + 150) + (from + 150 < it.text.length ? "…" : "");
    html +=
      '<button type="button" class="sr-item" data-goto-id="' + it.id + '">' +
        '<span class="sr-path"><span class="chip">' + it.type + "</span>" + esc(it.path) + (it.sub && it.sub !== it.path ? " › " + esc(it.sub) : "") + "</span>" +
        '<span class="sr-title">' + markText(it.title, it.title.toLowerCase().indexOf(ql) !== -1 ? query : "") + "</span>" +
        '<span class="sr-snip">' + markText(snip, query) + "</span>" +
      "</button>";
  });
  res.hidden = false;
  res.innerHTML = html;
}

function clearSearchMarks() {
  $$(".hl-search").forEach(function (mk) {
    var parent = mk.parentNode;
    if (!parent) return;
    if (mk.classList.contains("hl") || mk.classList.contains("hl-crit")) {
      mk.classList.remove("hl-search");
    } else {
      parent.replaceChild(document.createTextNode(mk.textContent), mk);
      parent.normalize();
    }
  });
}
function setSearchMarks(scope, query) {
  if (!query) return;
  try {
    var re = new RegExp("(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    highlightIn(scope, re, "hl-search");
  } catch (e) {}
}

/* ---------------- jump / open chain ---------------- */
var PARENT_OF = {}; // q/topic/experiment id -> parent acc id ("" if card section)
function buildParentMap() {
  PARENT_OF = {};
  MODS.forEach(function (m) {
    m.topics.forEach(function (t) { PARENT_OF[t.id] = ""; });
    m.experiments.forEach(function (e) {
      PARENT_OF[e.id] = "";
      e.qa.forEach(function (qa) { PARENT_OF[qa.id] = e.id; });
    });
  });
  GENERAL.forEach(function (g) { PARENT_OF[g.id] = ""; });
}
function jumpTo(id) {
  showContent();
  var chain = [], cur = id, guard = 0;
  while (cur && PARENT_OF[cur] && guard++ < 10) { chain.unshift(cur); cur = PARENT_OF[cur]; }
  if (cur && byAcc(cur)) chain.unshift(cur);
  chain.forEach(function (a) { setOpen(a, true); });
  var e = byAcc(id);
  if (!e) return;
  e.scrollIntoView({ behavior: "smooth", block: "start" });
  e.classList.remove("flash");
  void e.offsetWidth;
  e.classList.add("flash");
  closeDrawer();
}

/* ---------------- content / bookmarks views ---------------- */
var bmOpen = false;
function showContent() {
  bmOpen = false;
  if (contentView) contentView.hidden = false;
  if (bmView) bmView.hidden = true;
  var b = $("#bmViewBtn"); if (b) b.setAttribute("aria-pressed", "false");
}
function showBookmarks() {
  bmOpen = true;
  if (contentView) contentView.hidden = true;
  if (bmView) bmView.hidden = false;
  var b = $("#bmViewBtn"); if (b) b.setAttribute("aria-pressed", "true");
  renderBookmarks();
  closeDrawer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderBookmarks() {
  if (!bmView) bmView = $("#bookmarksView");
  var items = [];
  MODS.forEach(function (m) {
    m.topics.forEach(function (t) { if (state.bookmarks[t.id]) items.push({ id: t.id, type: "topic", mod: m, title: t.title, sub: m.title }); });
    m.experiments.forEach(function (e) { e.qa.forEach(function (q) { if (state.bookmarks[q.id]) items.push({ id: q.id, type: "question", mod: m, title: q.q, sub: e.title }); }); });
  });
  GENERAL.forEach(function (g) { if (state.bookmarks[g.id]) items.push({ id: g.id, type: "question", mod: null, title: g.q, sub: "General Cyber Security Viva Questions" }); });
  if (!items.length) {
    bmView.innerHTML =
      '<div class="bm-head">' + svg("star") + '<h2>Bookmarks</h2></div>' +
      '<div class="bm-empty">' + svg("star") + "<p>No bookmarks yet.</p><p>Click the star on any topic or question to save it here. Bookmarks persist in your browser.</p></div>";
    return;
  }
  var html = '<div class="bm-head">' + svg("star") + '<h2>Bookmarks</h2><span class="chip">' + items.length + "</span></div>";
  html += items.map(function (it) {
    return '<div class="bm-item">' +
      '<button type="button" class="bm-go" data-goto-id="' + it.id + '">' +
        '<span>' + esc(it.title) + "</span>" +
        "<small>" + (it.type === "topic" ? "Topic · " : "Question · ") + esc(it.sub) + "</small>" +
      "</button>" +
      '<button type="button" class="icon-btn" data-star="' + it.id + '" aria-pressed="true" aria-label="Remove bookmark" title="Remove bookmark">' + svg("x") + "</button>" +
    "</div>";
  }).join("");
  bmView.innerHTML = html;
}

/* ---------------- drawer ---------------- */
function openDrawer() {
  document.body.classList.add("nav-open");
  var b = $("#menuBtn"); if (b) b.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  document.body.classList.remove("nav-open");
  var b = $("#menuBtn"); if (b) b.setAttribute("aria-expanded", "false");
}

/* ---------------- theme ---------------- */
/* Light is the default; dark only when the user explicitly picks it. */
function applyTheme() {
  var t = state.theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  var b = $("#themeToggle"); if (b) { b.innerHTML = svg(t === "dark" ? "sun" : "moon"); b.title = t === "dark" ? "Switch to light mode" : "Switch to dark mode"; b.setAttribute("aria-label", b.title); }
}
function applyHighlightPref() {
  document.body.classList.toggle("hl-off", !state.highlight);
  var b = $("#hlToggle");
  if (b) { b.setAttribute("aria-pressed", state.highlight ? "true" : "false"); b.innerHTML = svg("highlighter"); b.title = "Toggle key-term highlighting"; }
  if (state.highlight) {
    $$(".acc.open").forEach(function (a) {
      var ans = $(".answer", a);
      if (ans && !a.dataset.hl) { applyHighlights(ans); a.dataset.hl = "1"; }
    });
  } else {
    clearHighlights(document.body);
  }
}

/* ---------------- quick quiz ---------------- */
var quiz = { seq: [], idx: 0, revealed: {} };
function selectedModules() {
  var ids = MODS.map(function (m) { return m.id; });
  ids.push("gen");
  return ids;
}
function buildQuizPool() {
  var sel = selectedModules();
  var pool = ALLQ.filter(function (q) { return sel.indexOf(q.modId) !== -1; });
  return pool.map(function (q) { return q.id; });
}
function shuffleArr(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}
function quizStart() {
  var pool = buildQuizPool();
  if (!pool.length) { openQuiz(); renderQuizEmpty(); return; }
  quiz.seq = shuffleArr(pool.slice());
  quiz.idx = 0;
  quiz.revealed = {};
  openQuiz();
  renderQuizQ();
}
function openQuiz() {
  var q = $("#quiz"), bd = $("#quizBackdrop");
  if (q) { q.hidden = false; }
  if (bd) { bd.hidden = false; }
  var closer = $("[data-quiz-close]", q);
  if (closer) closer.focus();
}
function closeQuiz() {
  var q = $("#quiz"), bd = $("#quizBackdrop");
  if (q) { q.hidden = true; }
  if (bd) { bd.hidden = true; }
}
function quizBundle(id) {
  for (var i = 0; i < ALLQ.length; i++) if (ALLQ[i].id === id) return ALLQ[i];
  return null;
}
function renderQuizEmpty() {
  var box = $("#quiz");
  if (!box) return;
  box.innerHTML =
    '<div class="quiz-head">' + svg("zap") + '<h2 id="quizTitle">Quick quiz</h2>' +
      '<button type="button" class="icon-btn" data-quiz-close aria-label="Close quiz">' + svg("x") + "</button></div>" +
    '<div class="quiz-body"><div class="quiz-empty">No questions available. Select modules (checkboxes in the sidebar) or reset your selection.</div></div>';
}
function renderQuizQ() {
  var box = $("#quiz");
  if (!box) return;
  var id = quiz.seq[quiz.idx];
  var qb = quizBundle(id);
  if (!qb) { renderQuizEmpty(); return; }
  var revealed = !!quiz.revealed[id];
  var mark = state.marks[id];
  box.innerHTML =
    '<div class="quiz-head">' + svg("zap") + '<h2 id="quizTitle">Quick quiz</h2>' +
      '<span class="quiz-count">' + (quiz.idx + 1) + " / " + quiz.seq.length + "</span>" +
      '<button type="button" class="icon-btn" data-quiz-close aria-label="Close quiz">' + svg("x") + "</button></div>" +
    '<div class="quiz-body">' +
      '<div class="quiz-path"><span class="chip">' + esc(qb.modTitle.replace(/^Module \d+: /, "")) + "</span><span>" + esc(qb.expTitle) + "</span></div>" +
      '<div class="quiz-q">' + esc(qb.q) + "</div>" +
      '<div class="quiz-ans" ' + (revealed ? "" : "hidden") + '><div class="answer">' + qb.a + "</div></div>" +
      '<div class="reveal-row" ' + (revealed ? "hidden" : "") + '>' +
        '<button type="button" class="reveal-btn" data-quiz-reveal="' + id + '">' + svg("eye") + "Reveal answer</button>" +
        '<span class="answer-hidden-note">Answer aloud, then compare.</span></div>' +
    "</div>" +
    '<div class="quiz-foot">' +
      '<button type="button" class="nav-btn" data-quiz-prev ' + (quiz.idx === 0 ? "disabled" : "") + ">" + svg("chevronL") + "Previous</button>" +
      '<button type="button" class="nav-btn" data-quiz-end>' + svg("x") + "End quiz</button>" +
      '<span class="spacer"></span>' +
      '<button type="button" class="nav-btn" data-quiz-shuffle title="Reshuffle remaining questions">' + svg("shuffle") + "Shuffle</button>" +
      '<button type="button" class="nav-btn" data-quiz-next ' + (quiz.idx >= quiz.seq.length - 1 ? "disabled" : "") + ">Next" + svg("chevronR") + "</button>" +
    "</div>";
  var ansBox = $(".quiz-ans", box);
  if (revealed) {
    wrapCodeBlocks(ansBox);
    var mr = el("div", "mark-row", "");
    mr.style.borderTop = "1px dashed var(--line)";
    mr.style.paddingTop = "10px";
    mr.style.marginTop = "10px";
    mr.innerHTML =
      '<button type="button" class="mark-btn know" data-mark-btn="known" data-qid="' + id + '" aria-pressed="' + (mark === "known") + '">' + svg("check") + "I knew it</button>" +
      '<button type="button" class="mark-btn rev" data-mark-btn="revision" data-qid="' + id + '" aria-pressed="' + (mark === "revision") + '">' + svg("rotate") + "Need revision</button>" +
      '<span class="mark-hint" data-status-slot="' + id + '">' + (mark ? (mark === "known" ? "Marked: knew it" : "Marked: needs revision") : "Mark yourself to score progress.") + "</span>";
    ansBox.appendChild(mr);
    highlightIn(ansBox, getQuizHiRe(), "hl");
    if (!box.dataset.hl) { applyHighlights(ansBox); box.dataset.hl = "1"; }
  }
  var fb = $(".nav-btn", box);
  if (fb && !fb.disabled) fb.focus();
}
function getQuizHiRe() { return TERM_RE; }
function quizReveal(id) {
  quiz.revealed[id] = 1;
  renderQuizQ();
}
function quizStep(d) {
  var next = quiz.idx + d;
  if (next < 0 || next >= quiz.seq.length) return;
  quiz.idx = next;
  renderQuizQ();
}
function quizReshuffle() {
  var cur = quiz.seq[quiz.idx];
  var head = quiz.seq.slice(0, quiz.idx);
  var rest = shuffleArr(quiz.seq.slice(quiz.idx + 1));
  quiz.seq = head.concat([cur], rest);
  renderQuizQ();
}

/* ---------------- event delegation ---------------- */
function wire() {
  cbox = $("#content");
  contentView = $("#content");
  bmView = $("#bookmarksView");

  /* top bar */
  $("#brandIcon").innerHTML = svg("shield");
  $("#searchIcon").innerHTML = svg("search");
  $("#menuBtn").innerHTML = svg("menu");
  $("#bmViewBtn").innerHTML = svg("star");
  $("#resetBtn").innerHTML = svg("rotate");
  $("#toTop").innerHTML = svg("arrowUp");
  $("#modeLearn").innerHTML = svg("book") + "Learn";
  $("#modeTest").innerHTML = svg("flask") + "Test";
  $("#menuBtn").addEventListener("click", function () {
    if (document.body.classList.contains("nav-open")) closeDrawer(); else openDrawer();
  });
  $("#backdrop").addEventListener("click", closeDrawer);
  $("#modeLearn").addEventListener("click", function () { setMode("learn"); });
  $("#modeTest").addEventListener("click", function () { setMode("test"); });
  $("#themeToggle").addEventListener("click", function () {
    var cur = document.documentElement.dataset.theme;
    state.theme = cur === "dark" ? "light" : "dark";
    save(); applyTheme();
  });
  $("#hlToggle").addEventListener("click", function () {
    state.highlight = !state.highlight;
    save(); applyHighlightPref();
  });
  $("#bmViewBtn").addEventListener("click", function () {
    if (bmOpen) showContent(); else showBookmarks();
  });
  $("#resetBtn").addEventListener("click", function () {
    var yes = false;
    try { yes = window.confirm("Reset all progress, bookmarks and settings? This cannot be undone."); } catch (e) { yes = true; }
    if (!yes) return;
    try { localStorage.removeItem(KEY); } catch (e) {}
    sessionRevealed = {};
    load();
    setMode(state.mode, true);
    showContent();
    renderContent();
    renderSidebar();
    updateProgress();
  });
  $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* search box */
  var sin = $("#searchInput"), res = $("#searchResults");
  var sT = null;
  sin.addEventListener("input", function () {
    clearTimeout(sT);
    sT = setTimeout(function () { runSearch(sin.value); }, 130);
  });
  sin.addEventListener("keydown", function (ev) {
    var first = $(".sr-item", res);
    if (ev.key === "Enter") {
      if (first && first.offsetParent !== null) { first.click(); ev.preventDefault(); }
    } else if (ev.key === "Escape") {
      sin.value = ""; runSearch(""); sin.blur();
    }
  });
  document.addEventListener("click", function (ev) {
    if (!res.hidden && !ev.target.closest(".searchbox")) res.hidden = true;
  });

  /* delegated: global clicks */
  document.addEventListener("click", function (ev) {
    var t;
    if ((t = ev.target.closest("[data-goto-id]"))) {
      var id = t.dataset.gotoId;
      if (bmOpen) showContent();
      clearSearchMarks();
      var q = $("#searchInput"); if (q) setSearchMarks(byAcc(id), q.value.trim());
      jumpTo(id);
      if (res) res.hidden = true;
      return;
    }
    if ((t = ev.target.closest("[data-goto]"))) {
      jumpTo(t.dataset.goto);
      return;
    }
    if ((t = ev.target.closest("[data-caret]"))) {
      var g = $('[data-group="' + t.dataset.caret + '"]');
      if (g) t.setAttribute("aria-expanded", g.classList.toggle("open") ? "true" : "false");
      return;
    }
    if ((t = ev.target.closest(".sr-item"))) { if (res) res.hidden = true; return; }
  });

  /* delegated: content area */
  cbox.addEventListener("click", function (ev) {
    var t;
    if ((t = ev.target.closest("[data-acc-head]"))) {
      toggleAcc(t.dataset.accHead);
      return;
    }
    if ((t = ev.target.closest("[data-star]"))) {
      var id = t.dataset.star;
      if (state.bookmarks[id]) { delete state.bookmarks[id]; t.setAttribute("aria-pressed", "false"); }
      else { state.bookmarks[id] = 1; t.setAttribute("aria-pressed", "true"); }
      save();
      if (bmOpen) renderBookmarks();
      return;
    }
    if ((t = ev.target.closest("[data-reveal]"))) {
      revealQuestion(t.dataset.reveal);
      return;
    }
    if ((t = ev.target.closest("[data-mark-btn]"))) {
      setMark(t.dataset.qid, t.dataset.markBtn);
      return;
    }
    if ((t = ev.target.closest(".copy-btn"))) {
      var pre = t.closest("figure.codebox") ? t.closest("figure.codebox").querySelector("pre") : null;
      if (pre) {
        var ok = copyText(pre.textContent || "");
        var lbl = $(".copy-lbl", t);
        if (lbl) {
          lbl.textContent = ok ? "Copied" : "Copy failed";
          setTimeout(function () { lbl.textContent = "Copy"; }, 1400);
        }
      }
      return;
    }
    if ((t = ev.target.closest("[data-toggle-all]"))) {
      var card = t.closest(".card");
      if (card) expandAllIn(card.id.replace(/^card-/, ""), !cardAllOpen(card));
      return;
    }
  });

  /* delegated: test panel switches */
  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.id === "fltRevChk") { state.fltRev = t.checked; save(); renderTestPanel(); applyFilter(); }
    if (t.id === "shufChk") { state.shuffled = t.checked; save(); renderTestPanel(); applyShuffle(); }
  });
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest("#quizBtn");
    if (t) { quizStart(); return; }
    var closeB = ev.target.closest("[data-quiz-close]");
    if (closeB) { closeQuiz(); return; }
    if (ev.target.closest("[data-quiz-end]")) { closeQuiz(); return; }
    var rq = ev.target.closest("[data-quiz-reveal]");
    if (rq) { quizReveal(rq.dataset.quizReveal); return; }
    if (ev.target.closest("[data-quiz-next]")) { quizStep(1); return; }
    if (ev.target.closest("[data-quiz-prev]")) { quizStep(-1); return; }
    if (ev.target.closest("[data-quiz-shuffle]")) { quizReshuffle(); return; }
    var bd = ev.target.closest("#quizBackdrop");
    if (bd) { closeQuiz(); return; }
    var mk = ev.target.closest("[data-mark-btn]");
    if (mk && mk.closest("#quiz")) { setMark(mk.dataset.qid, mk.dataset.markBtn); }
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      var q = $("#quiz");
      if (q && !q.hidden) { closeQuiz(); return; }
      clearSearchMarks();
    }
  });

  /* mode function also wired above */
}

function setMode(mode, silent) {
  state.mode = mode;
  save();
  var learn = $("#modeLearn"), test = $("#modeTest"), wrap = document.querySelector(".mode-toggle");
  if (learn) learn.setAttribute("aria-selected", mode === "learn" ? "true" : "false");
  if (test) test.setAttribute("aria-selected", mode === "test" ? "true" : "false");
  if (wrap) wrap.dataset.active = mode;
  sessionRevealed = {};
  renderContent();
  restoreOpenPanels();
  updateSpy();
  if (!silent) window.scrollTo({ top: 0 });
}

/* scroll spy + reading progress + to top */
var spyObs = null;
function updateSpy() {
  if (spyObs) spyObs.disconnect();
  if (!window.IntersectionObserver) return;
  spyObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var id = en.target.id.replace(/^card-/, "");
      $$(".side-row").forEach(function (r) { r.classList.remove("active"); });
      var grp = $('[data-group="' + id + '"]');
      var row = grp ? $(".side-row", grp) : null;
      if (row) row.classList.add("active");
    });
  }, { rootMargin: "-90px 0px -66% 0px", threshold: 0 });
  $$(".card").forEach(function (c) { spyObs.observe(c); });
}
function wireScrollSpy() {
  updateSpy();
  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    var rb = $("#readbar"); if (rb) rb.style.width = Math.min(100, Math.max(0, pct)) + "%";
    var tt = $("#toTop");
    if (tt) tt.hidden = window.scrollY < 600;
  }, { passive: true });
}

/* ---------------- footer note ---------------- */
function renderFoot() {
  var n = $("#footNote");
  if (!n) return;
  var mods = MODS.length;
  var topics = TOPICS.length;
  var exps = MODS.reduce(function (a, m) { return a + m.experiments.length; }, 0);
  n.innerHTML = "Parsed from " + esc(DATA.source || "the study guide") + " — " + mods + " modules · " + topics + " topics · " + exps + " experiments · " + ALLQ.length + " questions (including " + GENERAL.length + " general viva questions). Works fully offline. Progress is saved in this browser only.";
}

/* ---------------- init ---------------- */
var initRan = false;
function init() {
  if (initRan) return;
  initRan = true;
  load();
  buildParentMap();
  buildIndex();
  wire();
  renderSidebar();
  renderContent();
  restoreOpenPanels();
  renderFoot();
  updateProgress();
  applyTheme();
  applyHighlightPref();
  wireScrollSpy();
  updateSpy();
}
document.addEventListener("DOMContentLoaded", init);
if (document.readyState !== "loading") init();
})();
