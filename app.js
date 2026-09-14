// --- Course / week data ---
const COURSES = {
  "social-graphs": {
    label: "Social Graphs and Interactions",
    weeks: {
      1: {
        flashcards: [
          {
            q: "What is a network?",
            choices: ["Nodes connected by edges", "A single unbroken curve", "A table of raw numbers", "A list of usernames"],
            correct: 0,
            a: "Nodes (objects) connected by edges (relationships). n = number of nodes, m = number of edges.",
          },
          {
            q: "Which edge type means A→B does NOT imply B→A?",
            choices: ["Directed", "Undirected", "Weighted", "Simple"],
            correct: 0,
            a: "Directed: A→B says nothing about B→A. Undirected: A↔B, mutual by construction.",
          },
          {
            q: "Which edge type carries a number for strength?",
            choices: ["Weighted", "Unweighted", "Directed", "Simple"],
            correct: 0,
            a: "Weighted edges carry a number for strength — e.g. how many emails were sent, how many calls were made, or how much traffic flowed ('count' = how many times/how much). Unweighted edges just exist (0/1), with no such number.",
          },
          {
            q: "What is a simple network?",
            choices: ["At most one edge per pair, no self-loops", "A network with only 2 nodes", "A network with no edges at all", "A fully connected network"],
            correct: 0,
            a: "At most one edge per pair of nodes, no self-loops. The default assumption in this course.",
          },
          {
            q: "What is the degree of a node?",
            choices: ["Number of edges connected to it", "Number of nodes in the network", "Shortest path to another node", "Sum of all edge weights"],
            correct: 0,
            a: "The number of edges connected to it.",
          },
          {
            q: "In a directed graph, in-degree counts...",
            choices: ["Incoming edges", "Outgoing edges", "Self-loops only", "All edges, direction ignored"],
            correct: 0,
            a: "Directed graphs only. In-degree = incoming edges; out-degree = outgoing edges.",
          },
          {
            q: "Sum of all degrees in a network = ?",
            choices: ["2m", "m", "n", "m / n"],
            correct: 0,
            a: "Exactly 2m — every edge has two ends, so it's counted twice.",
          },
          {
            q: "Average degree formula?",
            choices: ["⟨k⟩ = 2m / n", "⟨k⟩ = m / n", "⟨k⟩ = n / m", "⟨k⟩ = m · n"],
            correct: 0,
            a: "⟨k⟩ = 2m / n",
          },
          {
            q: "What is density in a graph?",
            choices: ["2m / [n(n−1)]", "2m / n", "m / n", "n(n−1) / 2"],
            correct: 0,
            a: "2m / [n(n−1)] — fraction of possible edges that actually exist. Real networks are usually sparse (low density).",
          },
          {
            q: "What is an edge list?",
            choices: ["A list of edges, one pair at a time", "A matrix of 0s and 1s", "Nodes ranked by degree", "A picture of the network"],
            correct: 0,
            a: "The network written down as a list of its edges, one pair at a time — the simplest representation.",
          },
          {
            q: "What is an adjacency matrix?",
            choices: ["n×n matrix; entry (i,j) records edge i→j", "A list of all shortest paths", "A single row of degrees", "A diagram of communities"],
            correct: 0,
            a: "n×n matrix; entry a_ij records the edge (or weight) from i to j. Undirected ⇔ symmetric (a_ij = a_ji). Diagonal is 0 (no self-loops).",
          },
          {
            q: "In an adjacency matrix, row sums give you...",
            choices: ["Out-degree (or degree if undirected)", "In-degree", "Density", "Number of nodes"],
            correct: 0,
            a: "Row i sum = out-degree of i (or degree, if undirected). Column j sum = in-degree of j.",
          },
          {
            q: "Path vs distance?",
            choices: ["Path = sequence of edges; distance = shortest path length", "Path = single edge; distance = number of nodes", "Path = degree; distance = density", "They mean the same thing"],
            correct: 0,
            a: "Path = a sequence of edges from one node to another. Distance = the length of the shortest path between them.",
          },
          {
            q: "What is an isolate?",
            choices: ["A node with no edges at all", "The highest-degree node", "A node in the giant component", "A self-loop"],
            correct: 0,
            a: "Component = nodes that can all reach each other. Isolate = a node with no edges. Giant component = the one component holding most of the network.",
          },
          {
            q: "What is the degree distribution?",
            choices: ["How many nodes have each value of k", "The average degree only", "One node's list of neighbors", "The density of the network"],
            correct: 0,
            a: "For each value of k, how many nodes have exactly k connections — the most revealing portrait of a network.",
          },
          {
            q: "What is a heavy tail?",
            choices: ["Extreme degrees far more common than a bell curve predicts", "All nodes have equal degree", "No node has degree above 1", "A pattern only visible on linear axes"],
            correct: 0,
            a: "Extreme degrees occur far more often than a bell curve predicts. Invisible on linear axes — use log–log axes to see it.",
          },
          {
            q: "Why use binning on a degree distribution?",
            choices: ["Averages a noisy tail over widening ranges of k", "Removes all high-degree nodes", "Converts a directed graph to undirected", "Counts self-loops"],
            correct: 0,
            a: "It averages a noisy tail over ranges of k that widen as k grows, revealing the trend where raw data is too sparse (0/1 counts).",
          },
          {
            q: "Why must average in-degree = average out-degree?",
            choices: ["Every edge has exactly one tail and one head", "Because the network is undirected", "Because density is always 0.5", "It isn't true in general"],
            correct: 0,
            a: "Every edge has exactly one tail and one head, so total in-links = total out-links = m, giving the same average.",
          },
          {
            q: "Why can the same system give two genuinely different networks?",
            choices: ["Nodes/edges are a modeling choice — different choices answer different questions", "Because real data always has errors", "Because networks must be directed or undirected, never both", "It can't — there's only one correct network per system"],
            correct: 0,
            a: "Someone decides what a node and an edge are before any analysis starts. Different choices (e.g. papers-citing-papers vs. authors-co-authoring) can disagree on almost every question — who matters, what spreads. Neither is wrong; each answers a different question.",
          },
          {
            q: "Why can in-degree reach much higher values than out-degree in the same directed network?",
            choices: ["In-links are conferred by others (no ceiling); out-links are authored by one person (capped)", "In-degree and out-degree always have the same maximum", "Out-links have no limit, in-links are capped at 1", "Degree type doesn't affect the maximum value"],
            correct: 0,
            a: "An in-link is given by someone else's decision — many different people can all link to one popular node, so it can keep growing. An out-link has to be authored by the node itself, which caps how many it can create.",
          },
          {
            q: "Name a way careless binning can manufacture or hide a power law.",
            choices: ["Forgetting to divide by bin width, or binning where data is already dense", "Always dividing counts by n", "Using linear axes for the raw data", "Plotting degree instead of degree+1"],
            correct: 0,
            a: "Skipping the divide-by-width step makes wide bins look artificially popular. Binning where data is dense blurs real detail for no reason. Log-spaced edges can also split or merge integer degree values unevenly, distorting the shape.",
          },
          {
            q: "Undirected + simple network ⇒ what two matrix properties?",
            choices: ["Symmetric, and zero diagonal", "Symmetric, and all-ones diagonal", "Triangular, and zero diagonal", "Sparse, and symmetric"],
            correct: 0,
            a: "Undirected means the matrix is symmetric (a_ij = a_ji). Simple (no self-loops) means the diagonal is all zeros.",
          },
          {
            q: "When you switch a network drawing's layout, what stays the same (data, not decoration)?",
            choices: ["Number of nodes, number of edges, each node's degree", "How far apart two nodes look on screen", "Which nodes appear near the center", "The overall shape of the drawing"],
            correct: 0,
            a: "Layout changes only decoration — screen position and visual distance. The data (node count, edge count, every node's degree, and true network distances) never changes with the layout.",
          },
          {
            q: "Does being close together on screen mean two nodes are connected?",
            choices: ["Not necessarily — always check the edge list, not the picture", "Yes, always", "No, closeness is impossible in force layouts", "Only true in circle layouts"],
            correct: 0,
            a: "Closeness in a force layout often reflects real connectivity, but it can also be coincidental — the layout is a physics simulation, not a guarantee. Trust the edge list over eyeballed distance.",
          },
          {
            q: "What is the random layout actually useful for?",
            choices: ["A baseline: what the drawing looks like when position carries no information", "Finding the shortest path fastest", "Showing degree directly", "Nothing — it's always misleading"],
            correct: 0,
            a: "Random layout is the baseline case: if position told you nothing about the network, this is what you'd see. It makes the genuine structure a force layout reveals stand out by contrast.",
          },
        ],
      },
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
    },
  },
};

const NUM_WEEKS = 8;

const ENCOURAGEMENTS = [
  "You've got this.",
  "Small steps count.",
  "Progress, not perfection.",
  "One card at a time.",
  "Confusion means you're growing.",
  "Keep going — future you says thanks.",
  "Every review makes it stick.",
  "You already know more than yesterday.",
  "Curiosity first, perfection later.",
  "Rest is part of studying too.",
  "Mistakes are just data.",
  "You're closer than you think.",
  "Consistency beats intensity.",
  "Nice — another card down.",
];

const STORAGE_KEY = "study-notes-state";

let activeCourse = Object.keys(COURSES)[0];
let activeWeek = 1;
let activeCardIndex = 0;
let weekNavCollapsed = false;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    if (state.course && COURSES[state.course]) activeCourse = state.course;
    if (typeof state.week === "number" && state.week >= 1 && state.week <= NUM_WEEKS) activeWeek = state.week;
    if (typeof state.cardIndex === "number" && state.cardIndex >= 0) activeCardIndex = state.cardIndex;
  } catch (e) {
    // localStorage unavailable or corrupt — just start fresh
  }
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ course: activeCourse, week: activeWeek, cardIndex: activeCardIndex })
    );
  } catch (e) {
    // ignore — e.g. private browsing with storage disabled
  }
}

loadState();

const courseTabsEl = document.getElementById("course-tabs");
const weekNavEl = document.getElementById("week-nav");
const contentEl = document.getElementById("content");
const quoteBarEl = document.getElementById("quote-bar");
const weekPillBtn = document.getElementById("week-pill-btn");

function initApp() {
  renderCourseTabs();
  renderWeekNav();
  renderContent();
  initQuoteCycle();
}

weekPillBtn.addEventListener("click", () => {
  weekNavCollapsed = false;
  renderWeekNav();
});

function updateWeekPill() {
  document.body.classList.toggle("week-focused", weekNavCollapsed);

  if (weekNavCollapsed) {
    weekPillBtn.hidden = false;
    weekPillBtn.textContent = "Week " + activeWeek + " · change week ▾";
  } else {
    weekPillBtn.hidden = true;
  }
}

initApp();

function initQuoteCycle() {
  if (!quoteBarEl) return;
  let quoteIndex = Math.floor(Math.random() * ENCOURAGEMENTS.length);
  quoteBarEl.textContent = ENCOURAGEMENTS[quoteIndex];

  setInterval(() => {
    quoteBarEl.classList.add("quote-fade");
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % ENCOURAGEMENTS.length;
      quoteBarEl.textContent = ENCOURAGEMENTS[quoteIndex];
      quoteBarEl.classList.remove("quote-fade");
    }, 400);
  }, 6000);
}

function renderCourseTabs() {
  courseTabsEl.innerHTML = "";
  Object.entries(COURSES).forEach(([key, course]) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (key === activeCourse ? " active" : "");
    btn.textContent = course.label;
    btn.addEventListener("click", () => {
      activeCourse = key;
      activeWeek = 1;
      activeCardIndex = 0;
      weekNavCollapsed = false;
      saveState();
      renderCourseTabs();
      renderWeekNav();
      renderContent();
    });
    courseTabsEl.appendChild(btn);
  });
}

function renderWeekNav() {
  weekNavEl.classList.toggle("collapsed", weekNavCollapsed);
  updateWeekPill();

  weekNavEl.innerHTML = "";
  for (let w = 1; w <= NUM_WEEKS; w++) {
    const btn = document.createElement("button");
    btn.className = "week-btn" + (w === activeWeek ? " active" : "");
    btn.textContent = "Week " + w;
    btn.addEventListener("click", () => {
      activeWeek = w;
      activeCardIndex = 0;
      weekNavCollapsed = true;
      saveState();
      renderWeekNav();
      renderContent();
    });
    weekNavEl.appendChild(btn);
  }
}

function renderContent() {
  contentEl.innerHTML = "";
  const week = COURSES[activeCourse].weeks[activeWeek];

  if (!week || !week.flashcards) {
    const empty = document.createElement("p");
    empty.className = "empty-week";
    empty.textContent = "No content yet for Week " + activeWeek + ".";
    contentEl.appendChild(empty);
    return;
  }

  if (activeCardIndex >= week.flashcards.length) {
    activeCardIndex = 0;
  }

  const stage = document.createElement("div");
  stage.className = "flashcard-stage";

  const mainWrap = document.createElement("div");
  mainWrap.className = "flashcard-main-wrap";

  const stripRow = document.createElement("div");
  stripRow.className = "flashcard-strip-row";

  const prevBtn = document.createElement("button");
  prevBtn.className = "strip-arrow strip-arrow-prev";
  prevBtn.setAttribute("aria-label", "Scroll left");
  prevBtn.textContent = "‹";
  prevBtn.addEventListener("click", () => {
    strip.scrollBy({ left: -260, behavior: "smooth" });
  });

  const nextBtn = document.createElement("button");
  nextBtn.className = "strip-arrow strip-arrow-next";
  nextBtn.setAttribute("aria-label", "Scroll right");
  nextBtn.textContent = "›";
  nextBtn.addEventListener("click", () => {
    strip.scrollBy({ left: 260, behavior: "smooth" });
  });

  const strip = document.createElement("div");
  strip.className = "flashcard-strip";

  function renderMain() {
    mainWrap.innerHTML = "";
    const card = week.flashcards[activeCardIndex];
    mainWrap.appendChild(buildQuizCard(card));
  }

  function renderStrip() {
    strip.innerHTML = "";
    week.flashcards.forEach((card, i) => {
      const mini = document.createElement("button");
      mini.className = "flashcard-mini" + (i === activeCardIndex ? " active" : "");
      mini.setAttribute("aria-label", card.q);

      const num = document.createElement("span");
      num.className = "flashcard-mini-num";
      num.textContent = String(i + 1);

      const text = document.createElement("span");
      text.className = "flashcard-mini-text";
      text.textContent = card.q;

      mini.appendChild(num);
      mini.appendChild(text);

      mini.addEventListener("click", () => {
        activeCardIndex = i;
        saveState();
        renderMain();
        renderStrip();
      });
      strip.appendChild(mini);
    });
  }

  renderMain();
  renderStrip();

  stripRow.appendChild(prevBtn);
  stripRow.appendChild(strip);
  stripRow.appendChild(nextBtn);

  stage.appendChild(mainWrap);
  stage.appendChild(stripRow);
  contentEl.appendChild(stage);
}

function shuffledOptions(card) {
  const options = card.choices.map((text, i) => ({ text, isCorrect: i === card.correct }));
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function buildQuizCard(cardData) {
  const card = document.createElement("div");
  card.className = "flashcard flashcard-main";

  const inner = document.createElement("div");
  inner.className = "flashcard-inner";

  const front = document.createElement("div");
  front.className = "flashcard-face flashcard-front flashcard-quiz-front";

  const question = document.createElement("p");
  question.className = "flashcard-question";
  question.textContent = cardData.q;
  front.appendChild(question);

  const REVEAL_LABEL = "Think first, then tap for choices";
  const REVEALED_LABEL = "Now pick your answer ↓";

  const revealBtn = document.createElement("button");
  revealBtn.type = "button";
  revealBtn.className = "reveal-choices-btn";
  revealBtn.textContent = REVEAL_LABEL;
  front.appendChild(revealBtn);

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "flashcard-choices";
  optionsWrap.hidden = true;
  front.appendChild(optionsWrap);

  const hintMsg = document.createElement("p");
  hintMsg.className = "flashcard-try-again";
  hintMsg.hidden = true;
  front.appendChild(hintMsg);

  revealBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    revealBtn.disabled = true;
    revealBtn.textContent = REVEALED_LABEL;
    revealBtn.classList.add("revealed");
    optionsWrap.hidden = false;
    hintMsg.hidden = false;
  });

  const back = document.createElement("div");
  back.className = "flashcard-face flashcard-back";

  const resultLine = document.createElement("p");
  resultLine.className = "flashcard-result";
  const explanation = document.createElement("p");
  explanation.className = "flashcard-explanation";
  explanation.textContent = cardData.a;
  back.appendChild(resultLine);
  back.appendChild(explanation);

  function reset() {
    card.classList.remove("flipped");
    revealBtn.disabled = false;
    revealBtn.textContent = REVEAL_LABEL;
    revealBtn.classList.remove("revealed");
    optionsWrap.hidden = true;
    hintMsg.hidden = true;
    optionsWrap.innerHTML = "";
    hintMsg.textContent = "";
    hintMsg.className = "flashcard-try-again";
    const options = shuffledOptions(cardData);
    let solved = false;

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.textContent = opt.text;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (solved || btn.disabled) return;

        if (opt.isCorrect) {
          solved = true;
          btn.classList.add("choice-correct");
          optionsWrap.querySelectorAll(".choice-btn").forEach((b) => (b.disabled = true));
          hintMsg.textContent = "";

          resultLine.textContent = "Correct!";
          resultLine.className = "flashcard-result result-correct";

          setTimeout(() => {
            card.classList.add("flipped");
          }, 600);
        } else {
          btn.classList.add("choice-wrong");
          btn.disabled = true;
          hintMsg.textContent = "Not quite — try again.";
          hintMsg.className = "flashcard-try-again show";
        }
      });

      optionsWrap.appendChild(btn);
    });
  }

  reset();

  back.addEventListener("click", () => {
    reset();
  });

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  return card;
}
