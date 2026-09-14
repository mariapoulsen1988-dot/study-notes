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
          {
            q: "What do V and E stand for in graph notation G = (V, E)?",
            choices: ["V = nodes, E = edges", "V = vertices only in trees, E = edges only in cyclic graphs", "V = value, E = expectation", "V = visits, E = exits"],
            correct: 0,
            a: "V is the set of nodes (|V| = n); E is the set of edges (|E| = m). (Network Atlas, Ch. 6)",
          },
          {
            q: "What is a multigraph?",
            choices: ["A graph allowing multiple edges between the same node pair", "A graph with more than one connected component", "A graph with multiple node types", "A graph spanning multiple time steps"],
            correct: 0,
            a: "A multigraph allows parallel (multiple) edges between the same two nodes — a simple graph allows at most one. (Ch. 6)",
          },
          {
            q: "What is a self-loop?",
            choices: ["An edge connecting a node to itself", "A path that revisits the same node twice", "A node with degree zero", "A cycle of length two"],
            correct: 0,
            a: "An edge from a node back to itself. Simple graphs disallow self-loops — that's why the adjacency matrix diagonal is all zeros. (Ch. 6)",
          },
          {
            q: "In a weighted graph, what can a high edge weight mean?",
            choices: ["Either 'proximity' (stronger/closer) or 'distance' (costlier/farther), depending on context", "It always means the nodes are far apart", "It always means the connection is weak", "Weight only ever represents time"],
            correct: 0,
            a: "Interpretation depends on the network: proximity (high weight = closer/stronger tie) or distance (high weight = more costly to cross). This changes how algorithms like shortest path should treat the weight. (Ch. 6)",
          },
          {
            q: "What is a degree sequence?",
            choices: ["The list of every node's degree, usually sorted highest to lowest", "The order nodes were added to the network", "The list of shortest paths between all node pairs", "How a single node's degree changes over time"],
            correct: 0,
            a: "The list of all nodes' degrees in a network, conventionally sorted in descending order. (Ch. 9)",
          },
          {
            q: "Why must a graph have an even number of odd-degree nodes?",
            choices: ["Total degree (2m) is always even, so an odd count of odd degrees is impossible", "It's just a naming convention, not a rule", "Every graph must have an even number of nodes", "Self-loops force it"],
            correct: 0,
            a: "The sum of all degrees equals 2m, which is always even. An odd number of odd-degree nodes would make that sum odd — impossible. (Ch. 9)",
          },
          {
            q: "What is a 'leaf' node?",
            choices: ["A node with degree exactly 1", "A node with degree 0", "The node with the highest degree", "Any node in a directed graph"],
            correct: 0,
            a: "A node with exactly one connection — the term comes from tree/hierarchy structures. (Ch. 9)",
          },
          {
            q: "What is 'node strength' (weighted degree)?",
            choices: ["The sum of the weights of all edges incident to a node", "The number of edges incident to a node, ignoring weight", "The highest single edge weight touching a node", "The average weight of all edges in the network"],
            correct: 0,
            a: "In weighted networks, node strength sums the weights of all incident edges — distinct from plain degree, which just counts edges regardless of weight. (Ch. 9)",
          },
        ],
      },
      2: {
        flashcards: [
          {
            q: "What is the Erdős–Rényi random graph G(n,p)?",
            choices: ["n nodes; every possible pair gets a link independently with probability p", "n nodes in a ring, each linked to its nearest neighbors", "A network grown one node at a time with preferential attachment", "A network with exactly n(n-1)/2 links, no randomness involved"],
            correct: 0,
            a: "n nodes; for every possible pair (n(n-1)/2 of them), flip a biased coin — heads (probability p) means a link exists.",
          },
          {
            q: "Expected number of links in G(n,p)?",
            choices: ["⟨m⟩ = p · n(n-1)/2", "⟨m⟩ = p · n", "⟨m⟩ = n(n-1)/2", "⟨m⟩ = p² · n"],
            correct: 0,
            a: "⟨m⟩ = p · n(n-1)/2 — p times the total number of possible pairs.",
          },
          {
            q: "Expected degree in G(n,p)?",
            choices: ["⟨k⟩ = p(n-1)", "⟨k⟩ = p · n", "⟨k⟩ = p / n", "⟨k⟩ = n / p"],
            correct: 0,
            a: "⟨k⟩ = p(n-1) — each node could connect to n-1 others, each with probability p.",
          },
          {
            q: "What shape is the degree distribution of a sparse random graph?",
            choices: ["Poisson — concentrated near ⟨k⟩, no hubs", "Power law — heavy-tailed with hubs", "Uniform — every degree equally likely", "Bimodal — two separate peaks"],
            correct: 0,
            a: "Poisson (binomial in general), concentrated near the mean with a fast-dying tail. Degree depends only on ⟨k⟩, not n — no hubs emerge.",
          },
          {
            q: "At what average degree does the giant component appear in a random network?",
            choices: ["⟨k⟩ = 1", "⟨k⟩ = 0", "⟨k⟩ = ln n", "⟨k⟩ = n / 2"],
            correct: 0,
            a: "⟨k⟩ = 1 is the phase transition. Below it: only small fragments. Above it: one giant component absorbs nearly all nodes.",
          },
          {
            q: "Why do random networks have short average path lengths?",
            choices: ["Each step reaches ⟨k⟩ times more nodes, so distance grows only as ln n / ln⟨k⟩", "Random networks are always tiny", "Every node connects directly to every other node", "Short paths require high clustering"],
            correct: 0,
            a: "From a node, d steps reach about ⟨k⟩^d nodes. Covering all n nodes needs ⟨k⟩^d ≈ n, so d ≈ ln n / ln⟨k⟩ — logarithmic, so it grows very slowly even for huge n.",
          },
          {
            q: "Are short paths in a network evidence that it's random?",
            choices: ["No — other kinds of networks can have short paths too, for different reasons", "Yes, short paths only occur in random networks", "Short paths are impossible in real networks", "Short paths only occur in lattices"],
            correct: 0,
            a: "Short paths alone don't prove randomness — real networks have them too, often thanks to hubs or 'shortcut' edges rather than pure chance.",
          },
          {
            q: "Local clustering coefficient formula?",
            choices: ["C_i = 2e_i / [k_i(k_i−1)]", "C_i = e_i / k_i", "C_i = k_i / e_i", "C_i = 2k_i / e_i"],
            correct: 0,
            a: "C_i = 2e_i / [k_i(k_i−1)], where e_i is the number of edges among node i's neighbors — the fraction of neighbor-pairs that are actually linked.",
          },
          {
            q: "What does a clustering coefficient of 1 mean for a node?",
            choices: ["All of its neighbors are also connected to each other (a clique)", "The node has no neighbors", "The node is isolated", "The node has the highest degree in the network"],
            correct: 0,
            a: "C_i = 1 means the node's neighborhood forms a complete clique — 'your friends are all friends with each other.'",
          },
          {
            q: "Average clustering C vs. transitivity — what's the difference?",
            choices: ["C is the mean of each node's C_i; transitivity counts triangles network-wide", "They are always identical numbers", "Transitivity only applies to directed networks", "C is global, transitivity is local"],
            correct: 0,
            a: "C averages the per-node local clustering coefficients. Transitivity is a single network-wide triangle count. They diverge when hubs and low-degree nodes have very different neighborhood tightness.",
          },
          {
            q: "Why do hubs tend to have lower clustering coefficients than low-degree nodes?",
            choices: ["A hub's many neighbors are far less likely to all know each other too", "Hubs never have any neighbors in common", "Clustering is undefined for hubs", "Hubs always have C_i = 1"],
            correct: 0,
            a: "As k_i grows, the number of possible neighbor-pairs grows much faster than the number likely to actually be linked, so C_i tends to shrink for high-degree nodes.",
          },
          {
            q: "Why is the clustering coefficient set to 0 for a degree-1 node?",
            choices: ["With only one neighbor, there's no pair of neighbors to check for a link", "Degree-1 nodes always have C_i = 1", "Clustering only applies to hubs", "It's an arbitrary software limitation"],
            correct: 0,
            a: "C_i needs at least 2 neighbors to have any neighbor-pair to test. With k_i < 2 there's nothing to measure, so it's conventionally set to 0.",
          },
          {
            q: "What's the defining trait of a lattice network?",
            choices: ["High clustering by construction, but distances grow like n instead of log n", "Low clustering and short distances", "A Poisson degree distribution", "Every node has a different degree"],
            correct: 0,
            a: "Every node links to its nearest neighbors, so neighborhoods are naturally cliquish (high C) — but with no shortcuts, distances grow linearly with n rather than logarithmically.",
          },
          {
            q: "What defines a 'small world' network?",
            choices: ["Clustering far above chance AND distances close to what chance alone would give", "Only short distances — clustering doesn't matter", "Only high clustering — distances don't matter", "Every node having equal degree"],
            correct: 0,
            a: "Both properties together: much more clustering than a random network, but distances almost as short as a random network. Lattices only have the first; random graphs only have the second.",
          },
          {
            q: "How does the Watts–Strogatz model create a small world?",
            choices: ["Start from a lattice and rewire a small fraction q of links to random destinations ('shortcuts')", "Add nodes one at a time with preferential attachment", "Connect every pair of nodes with probability p", "Remove all high-degree nodes from a random graph"],
            correct: 0,
            a: "Starting from a lattice (high clustering), rewiring just a small fraction q of edges creates long-range 'shortcuts' that collapse average distance dramatically while barely denting clustering.",
          },
          {
            q: "Power law degree distribution formula?",
            choices: ["P(k) ~ k^(−γ)", "P(k) ~ e^(−k)", "P(k) ~ k²", "P(k) ~ ln(k)"],
            correct: 0,
            a: "P(k) ~ k^(−γ) — a straight line on log–log axes. No typical/characteristic degree; hubs appear that pure chance couldn't produce.",
          },
          {
            q: "Preferential attachment probability formula?",
            choices: ["Π(k_i) = k_i / Σ_j k_j", "Π(k_i) = 1 / n", "Π(k_i) = k_i / n", "Π(k_i) = Σ_j k_j / k_i"],
            correct: 0,
            a: "Π(k_i) = k_i / Σ_j k_j — a newcomer links to node i with probability proportional to i's current degree. 'The rich get richer.'",
          },
          {
            q: "What two ingredients does the Barabási–Albert model combine to produce a power law?",
            choices: ["Growth (nodes added over time) + preferential attachment", "Growth + random rewiring", "Preferential attachment + a fixed node count", "High clustering + short paths"],
            correct: 0,
            a: "Growth (new nodes over time) AND preferential attachment (newcomers favor high-degree nodes). Neither ingredient alone produces hubs — together they give a power law with γ ≈ 3.",
          },
          {
            q: "Why do early nodes tend to become hubs in a growing network?",
            choices: ["They've had more rounds of the process to accumulate links than later nodes", "Early nodes are given extra links by definition", "Late nodes refuse to connect to early ones", "It's purely random which nodes become hubs"],
            correct: 0,
            a: "First-mover advantage: a node added early has far more opportunities to gain new links than one added near the end, so small early leads compound over time.",
          },
          {
            q: "What is the CCDF of a degree distribution?",
            choices: ["For each k, the fraction of nodes with degree ≥ k", "The count of nodes with degree exactly k", "The average degree of the whole network", "A binned histogram of degrees"],
            correct: 0,
            a: "Complementary cumulative distribution: fraction of nodes with degree ≥ k. Needs no binning, uses every data point, and for a true power law it's also a straight line on log–log axes.",
          },
          {
            q: "Does a straight line on a log–log degree plot prove a power law?",
            choices: ["No — other distributions can look straight too; you need proper fitting/testing", "Yes, that's the definition of proof", "Only for networks with over 1,000 nodes", "Straight lines only ever mean random networks"],
            correct: 0,
            a: "A straight-looking line on log–log axes establishes a heavy tail, but not specifically a power law — other distributions (like log-normal) can mimic it. Confirming a power law needs statistical fitting, not eyeballing.",
          },
          {
            q: "What is a null model?",
            choices: ["A baseline network used to test whether a measured property is 'interesting' or just chance", "The very first network model ever proposed", "A network with zero edges", "A model with no nodes"],
            correct: 0,
            a: "A deliberately boring baseline — 'nothing interesting happening' — that you compare your real measurement against. Which null you choose determines what conclusion you're allowed to draw.",
          },
          {
            q: "What is the configuration model?",
            choices: ["A random network forced to match a real network's exact degree sequence, built by pairing random 'stubs'", "A network with a fixed number of edges only", "Another name for the Erdős–Rényi model", "A model where every node has the same degree"],
            correct: 0,
            a: "Give each node a number of 'stubs' equal to its real degree, then pair stubs uniformly at random — this creates a random network with the real network's exact degree sequence.",
          },
          {
            q: "What does a degree-preserving edge swap do?",
            choices: ["Rewires A–B and C–D into A–D and C–B, keeping every node's degree the same but scrambling who links to whom", "Removes edges to reduce network density", "Adds a self-loop to every node", "Doubles the number of edges in the network"],
            correct: 0,
            a: "It swaps two edges' endpoints (A–B, C–D → A–D, C–B). Every node keeps its original degree, but which specific nodes connect gets shuffled — a practical way to sample the configuration model.",
          },
          {
            q: "Why is comparing real clustering to a plain random G(n,m) network the wrong test for 'is clustering caused by hubs'?",
            choices: ["G(n,m) doesn't preserve the real degree sequence, so it can't isolate what heavy-tailed degree alone contributes", "G(n,m) always has higher clustering than real networks", "G(n,m) is identical to the real network by construction", "Clustering can't be computed on random networks"],
            correct: 0,
            a: "A plain random network has no hubs at all, so any clustering surplus could be due to degree heterogeneity, other structure, or both. A degree-preserving null (configuration model) isolates the 'beyond hubs' effect.",
          },
          {
            q: "In a shuffle test, what do z-score and empirical p-value mean?",
            choices: ["Z-score = how many standard deviations the real value is from the shuffle mean; p-value = fraction of shuffles reaching or exceeding the real value", "Z-score = the number of shuffles performed; p-value = the network's density", "Both measure the same thing as the clustering coefficient", "Z-score only applies to directed networks"],
            correct: 0,
            a: "Z-score: (real value − shuffle mean) / shuffle standard deviation. Empirical p-value: the fraction of shuffled networks whose statistic is at least as extreme as the real one.",
          },
          {
            q: "Friendship paradox formula: mean degree of a random neighbor?",
            choices: ["⟨k⟩ + σ²/⟨k⟩", "⟨k⟩ − σ²/⟨k⟩", "⟨k⟩ × σ²", "⟨k⟩ / σ²"],
            correct: 0,
            a: "Mean degree of a random neighbor = ⟨k⟩ + σ²/⟨k⟩ (σ² = degree variance). Since this is always ≥ ⟨k⟩, your friends have more friends than you on average.",
          },
          {
            q: "Why does the friendship paradox happen?",
            choices: ["Sampling a random neighbor is degree-biased: high-degree nodes get picked as 'a friend' more often", "It only happens in networks with negative correlations", "It's a measurement error, not a real effect", "It only happens when every node has the same degree"],
            correct: 0,
            a: "Picking 'a random friend of a random person' isn't sampling nodes uniformly — hubs are somebody's friend far more often than low-degree nodes, so they get oversampled.",
          },
          {
            q: "Does a degree-preserving shuffle eliminate the friendship paradox?",
            choices: ["No — the paradox depends only on the degree distribution's variance, which the shuffle preserves", "Yes, shuffling always removes the paradox", "The paradox only appears after shuffling", "Shuffling makes the paradox stronger every time"],
            correct: 0,
            a: "The paradox's strength depends only on ⟨k⟩ and the degree variance σ² — both untouched by a degree-preserving shuffle — so the effect survives even when who-links-to-whom is completely scrambled.",
          },
          {
            q: "Why did the founders of network science study random networks before real data existed?",
            choices: ["No large datasets existed yet, and the model was simple enough to solve with pure mathematics", "Random networks are the easiest networks to visualize", "They believed all real networks were literally random", "Random graphs were the only kind computers could store"],
            correct: 0,
            a: "With no large-scale data available, mathematics was the only tool on hand — and the random graph was simple enough to derive deep, beautiful results about analytically.",
          },
        ],
      },
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
let cardStatusByWeek = {};

function weekStatusKey(course, week) {
  return course + ":" + week;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    if (state.course && COURSES[state.course]) activeCourse = state.course;
    if (typeof state.week === "number" && state.week >= 1 && state.week <= NUM_WEEKS) activeWeek = state.week;
    if (typeof state.cardIndex === "number" && state.cardIndex >= 0) activeCardIndex = state.cardIndex;
    if (typeof state.collapsed === "boolean") weekNavCollapsed = state.collapsed;
    if (state.cardStatusByWeek && typeof state.cardStatusByWeek === "object") {
      cardStatusByWeek = state.cardStatusByWeek;
    }
  } catch (e) {
    // localStorage unavailable or corrupt — just start fresh
  }
}

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        course: activeCourse,
        week: activeWeek,
        cardIndex: activeCardIndex,
        collapsed: weekNavCollapsed,
        cardStatusByWeek: cardStatusByWeek,
      })
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
  saveState();
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
      delete cardStatusByWeek[weekStatusKey(activeCourse, w)];
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

  const mainRow = document.createElement("div");
  mainRow.className = "flashcard-main-row";

  const mainWrap = document.createElement("div");
  mainWrap.className = "flashcard-main-wrap";

  const cardPrevBtn = document.createElement("button");
  cardPrevBtn.className = "strip-arrow card-nav-arrow card-nav-prev";
  cardPrevBtn.setAttribute("aria-label", "Previous card");
  cardPrevBtn.textContent = "‹";
  cardPrevBtn.addEventListener("click", () => {
    goToCard(activeCardIndex - 1);
  });

  const cardNextBtn = document.createElement("button");
  cardNextBtn.className = "strip-arrow card-nav-arrow card-nav-next";
  cardNextBtn.setAttribute("aria-label", "Next card");
  cardNextBtn.textContent = "›";
  cardNextBtn.addEventListener("click", () => {
    goToCard(activeCardIndex + 1);
  });

  const stripRow = document.createElement("div");
  stripRow.className = "flashcard-strip-row";

  const strip = document.createElement("div");
  strip.className = "flashcard-strip";

  const statusKey = weekStatusKey(activeCourse, activeWeek);
  if (!Array.isArray(cardStatusByWeek[statusKey]) || cardStatusByWeek[statusKey].length !== week.flashcards.length) {
    cardStatusByWeek[statusKey] = new Array(week.flashcards.length).fill(null);
  }
  const cardStatus = cardStatusByWeek[statusKey];
  let stripHasCentered = false;

  function renderMain() {
    mainWrap.innerHTML = "";
    const card = week.flashcards[activeCardIndex];
    const cardIndexAtRender = activeCardIndex;
    mainWrap.appendChild(
      buildQuizCard(card, (isCorrect) => {
        cardStatus[cardIndexAtRender] = isCorrect ? "correct" : "wrong";
        saveState();
        renderStrip();
      })
    );
    cardPrevBtn.disabled = activeCardIndex <= 0;
    cardNextBtn.disabled = activeCardIndex >= week.flashcards.length - 1;
  }

  function renderStrip() {
    strip.innerHTML = "";
    week.flashcards.forEach((card, i) => {
      const mini = document.createElement("button");
      mini.className =
        "flashcard-mini" +
        (i === activeCardIndex ? " active" : "") +
        (cardStatus[i] === "correct" ? " status-correct" : "") +
        (cardStatus[i] === "wrong" ? " status-wrong" : "");
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

    const activeMini = strip.querySelector(".flashcard-mini.active");
    if (activeMini && typeof activeMini.scrollIntoView === "function") {
      const behavior = stripHasCentered ? "smooth" : "auto";
      stripHasCentered = true;
      const raf = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
      raf(() => {
        activeMini.scrollIntoView({ behavior, inline: "center", block: "nearest" });
      });
    }
  }

  function goToCard(newIndex) {
    if (newIndex < 0 || newIndex >= week.flashcards.length || newIndex === activeCardIndex) return;
    activeCardIndex = newIndex;
    saveState();
    renderMain();
    renderStrip();
  }

  let touchStartX = 0;
  let touchStartY = 0;
  let touchTracking = false;
  let touchDx = 0;
  let swipeDecided = null;

  function snapBack() {
    mainWrap.style.transition = "transform 0.18s ease";
    mainWrap.style.transform = "translateX(0)";
  }

  mainWrap.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchTracking = true;
      touchDx = 0;
      swipeDecided = null;
      mainWrap.style.transition = "none";
    },
    { passive: true }
  );

  mainWrap.addEventListener(
    "touchmove",
    (e) => {
      if (!touchTracking || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;

      if (swipeDecided === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        swipeDecided = Math.abs(dx) > Math.abs(dy);
      }
      if (swipeDecided) {
        touchDx = dx;
        mainWrap.style.transform = "translateX(" + dx + "px)";
      }
    },
    { passive: true }
  );

  mainWrap.addEventListener(
    "touchend",
    () => {
      if (!touchTracking) return;
      touchTracking = false;
      const dx = touchDx;
      const SWIPE_THRESHOLD = 30;

      if (swipeDecided && Math.abs(dx) > SWIPE_THRESHOLD) {
        const goingNext = dx < 0;
        const targetIndex = activeCardIndex + (goingNext ? 1 : -1);
        if (targetIndex >= 0 && targetIndex < week.flashcards.length) {
          mainWrap.style.transition = "transform 0.16s ease";
          mainWrap.style.transform = "translateX(" + (goingNext ? -80 : 80) + "px)";
          setTimeout(() => {
            activeCardIndex = targetIndex;
            saveState();
            mainWrap.style.transition = "none";
            renderMain();
            renderStrip();
            mainWrap.style.transform = "translateX(0)";
          }, 160);
          return;
        }
      }
      snapBack();
    },
    { passive: true }
  );

  mainWrap.addEventListener(
    "touchcancel",
    () => {
      touchTracking = false;
      snapBack();
    },
    { passive: true }
  );

  renderMain();
  renderStrip();

  stripRow.appendChild(strip);

  mainRow.appendChild(cardPrevBtn);
  mainRow.appendChild(mainWrap);
  mainRow.appendChild(cardNextBtn);

  stage.appendChild(mainRow);
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

function buildQuizCard(cardData, onFirstAttempt) {
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
    let firstAttemptDone = false;

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.textContent = opt.text;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (solved || btn.disabled) return;

        if (!firstAttemptDone) {
          firstAttemptDone = true;
          if (onFirstAttempt) onFirstAttempt(opt.isCorrect);
        }

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
