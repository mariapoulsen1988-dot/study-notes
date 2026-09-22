// --- Course / week data ---
const COURSES = {
  "social-graphs": {
    label: "Social Graphs and Interactions",
    weekly: true,
    thinkBadge: true,
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
            think: true,
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
            think: true,
            q: "When you switch a network drawing's layout, what stays the same (data, not decoration)?",
            choices: ["Number of nodes, number of edges, each node's degree", "How far apart two nodes look on screen", "Which nodes appear near the center", "The overall shape of the drawing"],
            correct: 0,
            a: "Layout changes only decoration — screen position and visual distance. The data (node count, edge count, every node's degree, and true network distances) never changes with the layout.",
          },
          {
            think: true,
            q: "Does being close together on screen mean two nodes are connected?",
            choices: ["Not necessarily — always check the edge list, not the picture", "Yes, always", "No, closeness is impossible in force layouts", "Only true in circle layouts"],
            correct: 0,
            a: "Closeness in a force layout often reflects real connectivity, but it can also be coincidental — the layout is a physics simulation, not a guarantee. Trust the edge list over eyeballed distance.",
          },
          {
            think: true,
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
          {
            type: "think",
            q: "List three real networks. For each one: what are the nodes, what are the edges, is it directed or undirected, and is it weighted or unweighted?",
            a: "Three examples (yours can differ — same structure):\n\n1) The World Wide Web\n• Nodes: web pages. Edges: hyperlinks from one page to another.\n• Directed (a link on page A to page B doesn't mean B links back) and unweighted (a link either exists or it doesn't).\n• Weight-forcing question: 'how many times does A link to B, or how much traffic flows along that link?' — turns the 0/1 edge into a count.\n\n2) An airline route map\n• Nodes: airports. Edges: a direct flight route between two airports.\n• Undirected if you only care whether a route exists; unweighted by default.\n• Weight-forcing question: 'how many passengers or flights per week move along this route?'\n\n3) The Marvel character network (your marvel_network notebook)\n• Nodes: Marvel characters. Edges: two characters appeared together in the same comic issue.\n• Undirected (co-appearance has no direction) and unweighted if you only record 'did they ever appear together.'\n• Weight-forcing question: 'how many issues have these two characters appeared in together?' — turns a yes/no tie into a strength-of-connection number.\n\nPattern: weights get forced the moment you ask 'how much / how many' instead of just 'does a connection exist.'",
          },
          {
            think: true,
            q: "You have an unweighted network — an edge just marks 'connected' or not. What kind of question forces you to add weights?",
            choices: ["'How many times / how much flows along this edge?'", "'Is the network directed?'", "'What should I name this node?'", "'How do I draw this network?'"],
            correct: 0,
            a: "Weights appear the moment you move from 'does a connection exist' (0/1) to 'how much/how many' — e.g. call minutes, flight passengers, or shared comic-book appearances.",
          },
          {
            type: "think",
            q: "Pick a network you personally care about (a fourth one, different from the three above). Answer for it:\n• What are its nodes and edges?\n• Roughly how large is it?\n• Can it actually be mapped — is the data available?\n• Does it change over time?\n• Is something flowing or spreading on it?\n• Why do you care about it?",
            a: "This one's yours to fill in — here's a worked example showing the shape of a good answer (swap in your own network):\n\nExample: 'My study group's shared flashcard habit'\n• Nodes: the people in the group. Edges: 'sent this person a flashcard set' or 'reviewed the same deck the same week.'\n• Size: small — maybe 5–10 people, so a few dozen edges at most.\n• Mappable? Partly — I have my own usage data (this app!), but not everyone's, so only my slice of the network is actually available to me.\n• Changes over time: yes — who's active shifts week to week as an exam gets closer.\n• What flows: motivation to keep up, and explanations/knowledge (a good explanation from one person spreads to the others).\n• Why I care: it's the actual support system getting me through this course, and thinking of it as a network explains why some weeks everyone falls behind together — whoever the group's most-connected person is matters a lot.\n\nNow do the same for something real to you — a sports team, a group chat, a hobby community, a gym class, a fandom — anything with real nodes and real ties.",
          },
          {
            type: "think",
            q: "Describe one system that can be cast as a network in two genuinely different ways — a different choice of what counts as a node, not just different data. For each representation, name a question it can answer that the other representation structurally cannot.",
            a: "Example from lecture: academic literature.\n\nRepresentation 1 — papers citing papers\n• Nodes: individual papers. Edges: 'paper A cites paper B' (directed).\n• Can answer: what is the exact citation lineage of this one result — which specific paper did this idea come from?\n\nRepresentation 2 — authors co-authoring\n• Nodes: individual authors. Edges: 'author X and author Y wrote a paper together' (undirected, can be weighted by number of shared papers).\n• Can answer: which researchers cluster into the same collaboration community, and who bridges two different labs?\n\nNeither view is 'more correct.' The paper-citation network can't tell you about research collaborations (an author isn't a node there), and the co-authorship network can't tell you which specific idea led to which other idea (a paper isn't a node there). The choice of node decides which questions are even askable.",
          },
          {
            type: "think",
            q: "Take the edge list: A–B, A–C, A–D, B–C, C–D, D–E, E–F.\nDraw the network, then write down every node's degree.",
            a: "Drawing it: A, B, C, D form a tight cluster (A connects to all of B, C, D; B–C and C–D are also connected), and D is the doorway to a short tail D–E–F hanging off the cluster.\n\nDegrees (count each node's edges):\n• A: B, C, D → degree 3\n• B: A, C → degree 2\n• C: A, B, D → degree 3\n• D: A, C, E → degree 3\n• E: D, F → degree 2\n• F: E → degree 1",
            diagram: {},
          },
          {
            think: true,
            q: "Edge list A–B, A–C, A–D, B–C, C–D, D–E, E–F: which degree sequence (A,B,C,D,E,F) is correct?",
            choices: ["3, 2, 3, 3, 2, 1", "2, 2, 2, 2, 2, 2", "4, 3, 4, 4, 3, 2", "3, 3, 3, 3, 3, 3"],
            correct: 0,
            a: "A:3 (B,C,D), B:2 (A,C), C:3 (A,B,D), D:3 (A,C,E), E:2 (D,F), F:1 (E) — count each node's own edges straight from the list.",
          },
          {
            type: "think",
            q: "For that same edge list (A–B, A–C, A–D, B–C, C–D, D–E, E–F): how many edges does the network have, and what does the sum of the degrees you just wrote down have to do with that number? Compute the average degree and the density.",
            a: "Edges: m = 7 (count the list — that's all there is).\n\nSum of degrees: 3+2+3+3+2+1 = 14 = 2m. Every edge has two ends, so it gets counted once for each endpoint — the sum of degrees is always exactly twice the edge count, not just loosely related to it.\n\nAverage degree: ⟨k⟩ = 2m/n = 14/6 ≈ 2.33.\n\nDensity: 2m / [n(n−1)] = 14 / (6·5) = 14/30 ≈ 0.47 — about 47% of all possible pairs among these 6 nodes are actually linked.",
          },
          {
            think: true,
            q: "The edge list A–B, A–C, A–D, B–C, C–D, D–E, E–F has how many edges (m)?",
            choices: ["7", "6", "8", "14"],
            correct: 0,
            a: "Count the pairs in the list: A–B, A–C, A–D, B–C, C–D, D–E, E–F = 7 edges. (14 is the sum of degrees, 2m — not m itself.)",
          },
          {
            think: true,
            q: "A network has n=6 nodes and m=7 edges. What is its average degree ⟨k⟩?",
            choices: ["2.33 (=14/6)", "7 (=m)", "1.17 (=7/6)", "3.5 (=7/2)"],
            correct: 0,
            a: "⟨k⟩ = 2m/n = 14/6 ≈ 2.33 — the sum of degrees (2m) divided by the number of nodes.",
          },
          {
            think: true,
            q: "A network has n=6 nodes and m=7 edges. What is its density?",
            choices: ["≈0.47 (=14/30)", "≈0.23 (=7/30)", "1.0 — it's fully connected", "≈2.33 — same as average degree"],
            correct: 0,
            a: "Density = 2m / [n(n−1)] = 14 / (6·5) = 14/30 ≈ 0.47 — about 47% of all possible pairs are actually linked.",
          },
          {
            type: "think",
            q: "For the network A–B, A–C, A–D, B–C, C–D, D–E, E–F, write its adjacency matrix, rows and columns ordered A–F. Name two properties this matrix must have simply because the network is undirected and simple — say which is which. Then check that every row sum reproduces each node's degree.",
            a: "Matrix (1 = edge, 0 = none), order A,B,C,D,E,F:\nA: 0 1 1 1 0 0\nB: 1 0 1 0 0 0\nC: 1 1 0 1 0 0\nD: 1 0 1 0 1 0\nE: 0 0 0 1 0 1\nF: 0 0 0 0 1 0\n\nUndirected ⇒ symmetric (a_ij = a_ji — e.g. A–D and D–A are both 1).\nSimple (no self-loops) ⇒ zero diagonal (every a_ii = 0).\n\nRow sums: A=3, B=2, C=3, D=3, E=2, F=1 — exactly the degrees from before. ✓",
            diagram: {},
          },
          {
            think: true,
            q: "An undirected, simple network's adjacency matrix must always be...",
            choices: ["Symmetric, with a zero diagonal", "Symmetric, with a diagonal of all 1s", "Triangular (values only above the diagonal)", "Symmetric, but self-loops are allowed"],
            correct: 0,
            a: "Undirected ⇒ symmetric (a_ij = a_ji). Simple (no self-loops) ⇒ every diagonal entry a_ii = 0.",
          },
          {
            type: "think",
            q: "In the network A–B, A–C, A–D, B–C, C–D, D–E, E–F, find every triangle. Which single node would you remove to disconnect the network, and what does that suggest 'importance' might mean here?",
            a: "Triangles: {A,B,C} (A–B, A–C, B–C all present) and {A,C,D} (A–C, A–D, C–D all present) — just those two, sharing the edge A–C.\n\nRemoving D splits the network into {A,B,C} and {E,F} — the biggest single-node break. (Removing E also disconnects it, but only strands F alone — a smaller break.)\n\nSo 'importance' here isn't about having the most edges — A and C both have degree 3, same as D. It's about sitting on the only path between two otherwise-separate parts of the network, like a bridge or gatekeeper. That's a preview of betweenness centrality, which Week 3 defines properly.",
            diagram: { triangles: [["A", "B", "C"], ["A", "C", "D"]], cutNode: "D" },
          },
          {
            think: true,
            q: "How many triangles does the network A–B, A–C, A–D, B–C, C–D, D–E, E–F contain?",
            choices: ["2 — {A,B,C} and {A,C,D}", "0 — there are no triangles", "1 — only {A,B,C}", "4 — one per cluster node"],
            correct: 0,
            a: "{A,B,C}: A–B, A–C, B–C all present. {A,C,D}: A–C, A–D, C–D all present. Those are the only two, sharing edge A–C.",
          },
          {
            think: true,
            q: "In the network A–B, A–C, A–D, B–C, C–D, D–E, E–F, which single node's removal splits it into the most separated pieces?",
            choices: ["D — it splits off {E,F}", "A — it splits off {B}", "C — it splits off {D}", "F — it splits off nothing, F is a leaf"],
            correct: 0,
            a: "Removing D leaves {A,B,C} and {E,F} disconnected — the biggest single-node break, even though A and C have the same degree as D. Being a bridge matters more than degree here.",
          },
          {
            type: "think",
            q: "Now make the edges directed: A→B, A→C, A→D, B→C, C→D, D→E, E→F. Write each node's in-degree and out-degree, and write the adjacency matrix again — which of the row sums and column sums gives which degree now? What real relationship (following? citing? emailing?) would make this exact direction pattern meaningful?",
            a: "In-degree / out-degree:\n• A: in 0, out 3 (→B,C,D)\n• B: in 1, out 1 (→C)\n• C: in 2, out 1 (→D)\n• D: in 2, out 1 (→E)\n• E: in 1, out 1 (→F)\n• F: in 1, out 0\n\nAdjacency matrix (row = source, column = target), order A–F:\nA: 0 1 1 1 0 0\nB: 0 0 1 0 0 0\nC: 0 0 0 1 0 0\nD: 0 0 0 0 1 0\nE: 0 0 0 0 0 1\nF: 0 0 0 0 0 0\n\nRow sums give out-degree (A's row sums to 3, matching out-degree 3). Column sums give in-degree (C's column has two 1s — from A and B — matching in-degree 2).\n\nA relationship this pattern fits: a citation network, where A is a foundational early paper that B, C, and D all cite directly, while C→D→E→F traces a chain of each paper building on the one just before it — an old idea (A) fanning out, then a lineage of follow-up work running forward in time.",
            diagram: { directed: true },
          },
          {
            think: true,
            q: "Directed version (A→B, A→C, A→D, B→C, C→D, D→E, E→F): what are node C's (in-degree, out-degree)?",
            choices: ["(2, 1)", "(1, 2)", "(0, 3)", "(2, 2)"],
            correct: 0,
            a: "C receives from A and B (in-degree 2) and sends only to D (out-degree 1).",
          },
          {
            think: true,
            q: "In the directed network A→B, A→C, A→D, B→C, C→D, D→E, E→F, which node has out-degree 0?",
            choices: ["F", "A", "E", "D"],
            correct: 0,
            a: "F only receives (from E) and sends nothing onward — it's the end of the chain, out-degree 0.",
          },
          {
            type: "think",
            q: "For the (undirected) network A–B, A–C, A–D, B–C, C–D, D–E, E–F, sketch its degree distribution as a bar chart: k on the x-axis, number of nodes on the y-axis. Then write the distances d(A,F) and d(B,E).",
            a: "Degrees were A=3, B=2, C=3, D=3, E=2, F=1, so the bar chart has three bars:\n• k=1 → 1 node (F)\n• k=2 → 2 nodes (B, E)\n• k=3 → 3 nodes (A, C, D)\n(No bars at k=0 or k≥4 — nobody has those degrees.)\n\nDistances (shortest path length, undirected network):\n• d(A,F): A–D–E–F → 3 steps. Nothing shorter exists since F only touches E, and E only touches D and F.\n• d(B,E): B–A–D–E or B–C–D–E → 3 steps either way — B has no route to D's side in 2 steps.",
            diagram: {},
          },
          {
            think: true,
            q: "In the undirected network's degree distribution, how many nodes have degree exactly 3?",
            choices: ["3 — A, C, and D", "2 — A and C only", "1 — only D", "6 — all of them"],
            correct: 0,
            a: "Degrees were A=3, B=2, C=3, D=3, E=2, F=1 — three nodes (A, C, D) share degree 3.",
          },
          {
            think: true,
            q: "What is d(A,F), the shortest path length from A to F?",
            choices: ["3 (A–D–E–F)", "1 — they're directly connected", "2 (A–D–F)", "5 — you must pass through every node"],
            correct: 0,
            a: "A–D–E–F is 3 steps, and nothing shorter exists — F only touches E, and E only touches D and F.",
          },
          {
            think: true,
            q: "What is d(B,E), the shortest path length from B to E?",
            choices: ["3 (B–A–D–E or B–C–D–E)", "2 (B–D–E)", "1 — directly connected", "4 — no shorter route exists at all"],
            correct: 0,
            a: "B has no direct link to D's side, so the shortest route is 3 steps either via A or via C, both landing on D then E.",
          },
          {
            type: "think",
            think: true,
            q: "In the Marvel network explorable, flip between force, circle A–Z, circle by degree, and random layouts. For each of these, does it change when the layout changes? Sort them into DATA (stays the same) vs DECORATION (changes with layout):\n• number of nodes\n• number of edges\n• Spider-Man's degree\n• how far apart two characters look on screen\n• the network distance between the same two characters",
            a: "DATA — never changes, no matter the layout:\n• Number of nodes — the dataset didn't change, only the drawing did.\n• Number of edges — same reason.\n• Spider-Man's degree — degree is computed from the edge list, not from pixel positions.\n• Network distance between two characters — that's the shortest path length in the graph, a property of the edges, not of where anything sits on screen.\n\nDECORATION — this is the one thing that actually changes:\n• How far apart two characters look on screen — that's purely a side effect of whichever layout algorithm drew the picture this time.\n\nRule of thumb: if you could compute it from the edge list alone, with no drawing at all, it's data. If it only exists because of where the layout happened to place things, it's decoration.",
          },
          {
            think: true,
            q: "Which of these five things is the only one that actually changes when you switch from force to circle-by-degree layout?",
            choices: ["How far apart two characters look on screen", "The number of nodes", "The number of edges", "Spider-Man's degree"],
            correct: 0,
            a: "Everything else is computed from the edge list and stays identical no matter how it's drawn — only on-screen distance is a drawing artifact.",
          },
          {
            type: "think",
            think: true,
            q: "In circle A–Z, two characters sit right next to each other on the rim. What, if anything, does that tell you about whether they're connected? Now switch to circle by degree — what does this layout let you read off that A–Z does not? And what is the only piece of information any circle layout adds to the drawing?",
            a: "Circle A–Z: being neighbors on the rim tells you nothing about connection — it only means their names are alphabetically adjacent. Two characters could be next-door on the rim and never appear in the same comic.\n\nCircle by degree: now the rim position IS meaningful — it tells you roughly how connected each character is relative to the others, since they're ranked by degree. You can read off 'this one has more connections than that one' just from where they sit.\n\nThe one thing any circle layout adds: it forces every edge to be drawn as a visible chord crossing the circle, so you can no longer mistake 'sitting near each other' for 'being connected' — you have to actually look at the lines. What a circle layout can never add, no matter the sort order, is the connections themselves; those still only live in the edges.",
          },
          {
            think: true,
            q: "What does 'circle sorted by degree' let you read at a glance that 'circle sorted A–Z' does not?",
            choices: ["Roughly how connected each character is, from where they rank on the rim", "The exact list of who is connected to whom", "Which community each character belongs to", "The network's average path length"],
            correct: 0,
            a: "Sorting by degree turns rim position into a meaningful ranking. Alphabetical order carries no network information at all.",
          },
          {
            type: "think",
            think: true,
            q: "In the force layout, pick two nodes that sit close together. Give two different reasons they might be close — one that's about the network, one that isn't. Then hover a hub: are its neighbors all near it? What does that tell you about how much to trust 'close on screen'?",
            a: "Network reason: they're directly connected (an edge pulls them together), or they share many mutual neighbors, so the physics simulation's springs drag them into the same neighborhood.\n\nNon-network reason: they both got pulled toward the same popular hub and just happened to settle near each other without ever being connected to one another — or the simulation's random starting positions left them there by chance, especially in a big, cluttered network.\n\nHovering a hub: its neighbors are usually spread at very different distances, not clustered tightly around it — because each neighbor is also being pulled by its OTHER connections, not just by the hub. Some genuine neighbors end up looking far away.\n\nLesson: even in force layout — the layout that's actually trying to encode structure — screen closeness is a hint, not proof. Always check the edge list before concluding two nodes are connected.",
          },
          {
            think: true,
            q: "In force layout, why might a hub's neighbors not all appear close to it on screen?",
            choices: ["Each neighbor is also pulled by its own other connections, competing with the hub's pull", "Force layout ignores hubs entirely", "Neighbors are always placed alphabetically around a hub", "This never happens — a hub's neighbors are always right next to it"],
            correct: 0,
            a: "Every node is being tugged by all of its own edges at once, not just its tie to the hub — so a true neighbor can still end up looking far away.",
          },
          {
            type: "think",
            think: true,
            q: "Is the random layout 'wrong'? Think of something it's actually good for. What does force show you that random cannot — and what does force tempt you to over-read?",
            a: "Not wrong — it's a baseline. Random layout shows you exactly what the drawing would look like if position carried zero information about the network. That's genuinely useful: it's the control condition. Anything force layout shows that random doesn't is real signal, not just 'a picture of a network.'\n\nWhat force shows that random can't: actual structure — nodes that are heavily connected or share neighbors visibly cluster together, giving you an honest first impression of communities and hubs.\n\nWhat force tempts you to over-read: it makes clustering look so convincing that it's easy to forget it's still just a simulation — assuming two nearby nodes must be connected, or that visual gaps between clusters mean zero connections between them, without ever checking the actual edges.",
          },
          {
            think: true,
            q: "Is the random layout in a network drawing tool 'wrong' to use?",
            choices: ["No — it's a useful baseline showing what the drawing looks like when position carries zero information", "Yes, it should never be shown", "Yes, because it hides all the edges", "No, because it's always more accurate than force layout"],
            correct: 0,
            a: "Random layout is the control condition — it's what makes the real structure a force layout reveals stand out by contrast.",
          },
          {
            type: "think",
            think: true,
            q: "Turn the community colors on and off in each layout. Which layout makes the communities easiest to see, which hides them completely, and why does the color survive every layout while the visual grouping does not? Finish with a three-sentence critique of one layout as a data visualization: what it makes visible, what it hides, and one wrong conclusion a reader might draw from it.",
            a: "Easiest to see: force layout — since it pulls tightly-connected nodes together, same-colored (same-community) nodes end up visually clustered too, so color and position agree.\n\nHides them completely: circle A–Z (and random) — position there is unrelated to community membership, so same-colored dots scatter evenly around the rim or the canvas. The color is still correct, you just can't see it as clustering.\n\nWhy color survives but grouping doesn't: color is computed once from the network's community structure — a data property, independent of any drawing choice. Visual grouping is a side effect of whichever layout algorithm happens to be running, so it can vanish the moment you switch layouts even though nothing about the network changed.\n\nThree-sentence critique of force layout: it makes real clustering and hub structure visible at a glance, which is genuinely useful for a first look at a big network. It hides exact numbers — you can't reliably count a node's edges or read off precise distances just by looking. And it tempts a careless reader into concluding that two nodes sitting close together must be directly connected, when they might just be near the same hub.",
          },
          {
            think: true,
            q: "Why does a node's community color stay the same across every layout, while its visual neighbors keep changing?",
            choices: ["Color encodes a computed data property (community membership); position is just a layout choice", "The color is re-randomized by each new layout", "Only force layout assigns correct colors", "Community and layout are computed from the same algorithm"],
            correct: 0,
            a: "Community assignment is calculated from the network structure itself, so it doesn't care how the picture is drawn — but visual position is entirely at the mercy of the layout algorithm.",
          },
          {
            type: "think",
            think: true,
            q: "Only the in-degree looks like a power law — on log-log axes it stretches to Spider-Man at k=106, while the out-degree tail dies almost four times earlier, at Betsy Braddock's 28. Why? Think about who creates each kind of edge. Which of the two has a ceiling, and which can keep growing? So what does a node's in-degree mean in this network, and what does its out-degree mean?",
            a: "An in-link is conferred by someone else — a different article's editors deciding this character matters enough to link to. Nothing stops many different editors from all making that same choice about one popular character, so in-degree has no ceiling and can keep growing (the same 'rich get richer' mechanism Week 2 formalizes).\n\nAn out-link is authored — someone has to sit down and write it into this one page. A single article has a natural length, so out-degree is capped by how much any one page's author bothered to write.\n\nWhat each number means: in-degree is an externally-conferred measure of fame — how many other people decided this character was worth mentioning. Out-degree mainly reflects how thoroughly this character's own article happens to be written — a property of that one page's authorship, not of the character's true importance.",
          },
          {
            think: true,
            q: "In the Marvel citation-style network, a character's in-degree mainly reflects...",
            choices: ["How many other pages' editors chose to link to them — an externally-conferred measure of fame", "How many characters they personally fought", "The length of their own wiki article", "Their team affiliation"],
            correct: 0,
            a: "In-links are conferred by other editors' decisions, so in-degree tracks external recognition, not anything about the character's own page.",
          },
          {
            think: true,
            q: "And a character's out-degree mainly reflects...",
            choices: ["How thoroughly this character's own article was written — how many links its author included", "The character's total fame across the whole wiki", "The character's first appearance year", "Whether the character is a hero or villain"],
            correct: 0,
            a: "Out-links are authored by the page itself, so out-degree is capped by that one article's length and thoroughness, not by the character's fame.",
          },
          {
            type: "think",
            think: true,
            q: "Binning extends the power law — with raw data the straight line seems to stop around k≈20, but switching binning on continues it much further right. Where did the extra range come from: was it hiding, or did binning invent it?",
            a: "It was hiding, not invented. Out in the tail, every count is 0 or 1 — there's a single character at k=106 and nobody at 105 or 107. A log axis can't even display a zero, and a lone dot surrounded by invisible zeros looks like 'the data stopped here,' even though a real (very sparse) character sits far out.\n\nBinning aggregates a wide range of k together, so that lone point gets grouped with its (mostly empty) neighborhood into one bin with a computable density — turning an invisible, isolated data point into a plottable one. Nothing was added to the dataset; binning just made the existing sparse signal visible.",
          },
          {
            think: true,
            q: "Raw log-log data for the Marvel in-degree seems to stop around k≈20, but turning on binning extends the line much further right. What's really happening?",
            choices: ["The sparse tail (0s and 1s) was always there but invisible on a log axis; binning aggregates it into a visible signal", "Binning invents fake high-degree characters that don't exist", "Binning deletes the real data and replaces it with an estimate", "The extra range only appears because of a display bug"],
            correct: 0,
            a: "A log axis can't show a zero, and an isolated single point (k=106, count 1) surrounded by invisible zeros looks like nothing is there. Binning reveals the trend that was always present.",
          },
          {
            type: "think",
            think: true,
            q: "What can go wrong with binning? Name at least two ways careless binning could manufacture a power law that isn't there — or destroy one that is. Consider: forgetting to divide by bin width; binning where data is dense; where a wide bin's dot should sit on a log axis; whether you should ever fit a slope to a binned plot. Then the subtle one: degrees are integers — drop log-spaced bin edges onto integers and what can happen?",
            a: "Forget to divide by bin width: a wide bin naturally contains more raw points just because it spans more k-values, not because that region is truly denser. Without normalizing by width, wide tail bins look artificially over-populated, which can manufacture a fake heavy tail or distort a real one.\n\nBin where the data is already dense: at low k you already have plenty of individual points and real resolution. Binning there throws away genuine detail, smoothing out real curvature into a falsely clean-looking line.\n\nDot placement: a wide bin's point belongs at the geometric mean of its edges (not the arithmetic midpoint) — log-log axes are log-spaced, so a linear midpoint biases the point rightward and can distort the apparent slope.\n\nNever fit a slope to a binned plot: binning is for visualization only. Your choice of bin count and edges can change the apparent slope arbitrarily — a fit belongs on the raw or CCDF data with a proper method (e.g. maximum likelihood), not on bins you chose yourself.\n\nThe integer trap: log-spaced bin edges don't line up with integers. Two adjacent log-spaced edges can both fall between the same pair of integers, leaving that bin completely empty (a fake gap) while its neighbor's wider span happens to straddle two integer values (an artificial clump) — purely from where the edges landed, not from anything real in the network.\n\nFirst and last bin: the first can't start at 0 on a log axis (log(0) is undefined), so it needs special handling or excludes zero-degree nodes. The last bin often holds just one extreme point (the single max-degree node) spread over a huge width, making its density value tiny and unstable — an n=1 sample that shouldn't be over-interpreted or weighted heavily in a fit.",
          },
          {
            think: true,
            q: "What happens if you forget to divide a bin's count by its width when plotting a degree distribution?",
            choices: ["Wide bins look artificially more populated than they really are", "Nothing — bin width doesn't matter", "The plot becomes perfectly linear", "It only affects the y-intercept, not the shape"],
            correct: 0,
            a: "A wide bin naturally scoops up more raw points just by covering more k-values. Without dividing by width, that inflates its apparent density and can manufacture or exaggerate a heavy tail.",
          },
          {
            think: true,
            q: "Where should a wide bin's point be placed on a log-log axis?",
            choices: ["At the geometric mean of the bin's edges, not the arithmetic midpoint", "At the arithmetic midpoint of the bin's edges", "At the bin's left edge, always", "It doesn't matter — any point in the range works"],
            correct: 0,
            a: "The axis is log-spaced, so the point should be too. Using the linear midpoint biases the plotted point to the right and can distort the apparent slope.",
          },
          {
            think: true,
            q: "Should you fit a power-law slope directly to a binned plot?",
            choices: ["No — fit to the raw or CCDF data; binning is for visualization, and your bin choices can fake the slope", "Yes, binned data always gives the most accurate slope", "Yes, but only if you use exactly 10 bins", "It doesn't matter which data you fit to"],
            correct: 0,
            a: "Bin count and edge placement are choices you made, not properties of the network — fitting to them lets your own choices determine the answer. Fit to the raw or CCDF data instead.",
          },
          {
            think: true,
            q: "Degrees are integers. What can go wrong when log-spaced bin edges are dropped onto them?",
            choices: ["One bin can swallow two integer degree values while its neighbor captures none, creating fake gaps or clumps", "Integers can never be binned at all", "Log-spaced edges always align perfectly with integers", "This only matters for undirected networks"],
            correct: 0,
            a: "Log-spaced edges don't respect integer boundaries — two edges can both land between the same pair of integers (an empty bin) while the next bin's wider span catches two integers (a clump), purely by coincidence of where the edges fell.",
          },
          {
            think: true,
            q: "What's the specific risk with the very first and the very last bin in a log-binned degree distribution?",
            choices: ["The first can't start at 0 on a log axis, and the last often holds just one extreme point spread over a huge width — both are unstable, low-count edge cases", "They are always the most reliable bins", "The first bin should be discarded automatically by good software", "There is no special risk — all bins behave the same"],
            correct: 0,
            a: "log(0) is undefined, so the first bin needs special handling around zero-degree nodes. The last bin often contains just the single maximum-degree node spread over a huge width, making it a noisy sample of one.",
          },
          {
            type: "think",
            think: true,
            q: "The undirected distribution is the least useful of the three — it's roughly in-degree plus out-degree, mixing two different generating mechanisms into one curve. Can an obscure character with zero in-links have an undirected degree of zero? What does the tail really show you? Why would a network scientist look at in- and out-degree separately?",
            a: "Not necessarily. Undirected degree counts each neighbor once regardless of direction, so it's roughly in-degree + out-degree. A character with zero in-links can still have a nonzero undirected degree if their own article links out to anyone — those out-links still count. Undirected degree is only zero if BOTH in-degree and out-degree are zero: a truly isolated character, linked to by no one and linking to no one.\n\nWhat the tail really shows: since in-degree can reach far higher values than out-degree (106 vs 28), the undirected tail is essentially dominated by, and just re-displays, the in-degree tail. It doesn't add new information at the high end — it just adds mixing noise at the low end.\n\nWhy look separately: in-degree and out-degree come from two genuinely different mechanisms — externally-conferred fame (no ceiling) versus self-authored effort (capped). Combining them into one undirected number conflates 'this character is famous' with 'this character's page was thoroughly written,' throwing away exactly the asymmetry that's the interesting structural feature of a directed network.",
          },
          {
            think: true,
            q: "Can an obscure Marvel character with zero in-links still have a nonzero undirected degree?",
            choices: ["Yes — if their own article links out to anyone, those out-links still count toward undirected degree", "No — zero in-links always means undirected degree zero", "No — undirected degree only counts in-links", "Yes, but only if they appear in more than 10 issues"],
            correct: 0,
            a: "Undirected degree combines in- and out-links. Zero in-degree alone doesn't guarantee zero undirected degree — the character's own out-links still count.",
          },
          {
            think: true,
            q: "Why would a network scientist prefer to look at in-degree and out-degree separately rather than just the undirected degree?",
            choices: ["Because they come from two different mechanisms (conferred fame vs. self-authored effort) that undirected degree mixes together and can't tell apart", "Undirected degree is always mathematically wrong to compute", "In-degree and out-degree are always identical anyway", "Separate degrees are only relevant for weighted networks"],
            correct: 0,
            a: "Undirected degree conflates two distinct generating processes into one number, throwing away the very asymmetry (ceiling vs. no ceiling) that's structurally informative about a directed network.",
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
            think: true,
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
            think: true,
            q: "Local clustering coefficient formula?",
            choices: ["C_i = 2e_i / [k_i(k_i−1)]", "C_i = e_i / k_i", "C_i = k_i / e_i", "C_i = 2k_i / e_i"],
            correct: 0,
            a: "C_i = 2e_i / [k_i(k_i−1)], where e_i is the number of edges among node i's neighbors — the fraction of neighbor-pairs that are actually linked.",
          },
          {
            think: true,
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
            think: true,
            q: "Why do hubs tend to have lower clustering coefficients than low-degree nodes?",
            choices: ["A hub's many neighbors are far less likely to all know each other too", "Hubs never have any neighbors in common", "Clustering is undefined for hubs", "Hubs always have C_i = 1"],
            correct: 0,
            a: "As k_i grows, the number of possible neighbor-pairs grows much faster than the number likely to actually be linked, so C_i tends to shrink for high-degree nodes.",
          },
          {
            think: true,
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
            think: true,
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
            think: true,
            q: "Why do early nodes tend to become hubs in a growing network?",
            choices: ["They've had more rounds of the process to accumulate links than later nodes", "Early nodes are given extra links by definition", "Late nodes refuse to connect to early ones", "It's purely random which nodes become hubs"],
            correct: 0,
            a: "First-mover advantage: a node added early has far more opportunities to gain new links than one added near the end, so small early leads compound over time.",
          },
          {
            think: true,
            q: "What is the CCDF of a degree distribution?",
            choices: ["For each k, the fraction of nodes with degree ≥ k", "The count of nodes with degree exactly k", "The average degree of the whole network", "A binned histogram of degrees"],
            correct: 0,
            a: "Complementary cumulative distribution: fraction of nodes with degree ≥ k. Needs no binning, uses every data point, and for a true power law it's also a straight line on log–log axes.",
          },
          {
            think: true,
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
            think: true,
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
            think: true,
            q: "Friendship paradox formula: mean degree of a random neighbor?",
            choices: ["⟨k⟩ + σ²/⟨k⟩", "⟨k⟩ − σ²/⟨k⟩", "⟨k⟩ × σ²", "⟨k⟩ / σ²"],
            correct: 0,
            a: "Mean degree of a random neighbor = ⟨k⟩ + σ²/⟨k⟩ (σ² = degree variance). Since this is always ≥ ⟨k⟩, your friends have more friends than you on average.",
          },
          {
            think: true,
            q: "Why does the friendship paradox happen?",
            choices: ["Sampling a random neighbor is degree-biased: high-degree nodes get picked as 'a friend' more often", "It only happens in networks with negative correlations", "It's a measurement error, not a real effect", "It only happens when every node has the same degree"],
            correct: 0,
            a: "Picking 'a random friend of a random person' isn't sampling nodes uniformly — hubs are somebody's friend far more often than low-degree nodes, so they get oversampled.",
          },
          {
            think: true,
            q: "Does a degree-preserving shuffle eliminate the friendship paradox?",
            choices: ["No — the paradox depends only on the degree distribution's variance, which the shuffle preserves", "Yes, shuffling always removes the paradox", "The paradox only appears after shuffling", "Shuffling makes the paradox stronger every time"],
            correct: 0,
            a: "The paradox's strength depends only on ⟨k⟩ and the degree variance σ² — both untouched by a degree-preserving shuffle — so the effect survives even when who-links-to-whom is completely scrambled.",
          },
          {
            think: true,
            q: "Why did the founders of network science study random networks before real data existed?",
            choices: ["No large datasets existed yet, and the model was simple enough to solve with pure mathematics", "Random networks are the easiest networks to visualize", "They believed all real networks were literally random", "Random graphs were the only kind computers could store"],
            correct: 0,
            a: "With no large-scale data available, mathematics was the only tool on hand — and the random graph was simple enough to derive deep, beautiful results about analytically.",
          },
          {
            think: true,
            q: "Now that we have huge real datasets, why do we still keep the random-graph model around?",
            choices: ["It's the baseline 'nothing interesting happening' case you compare real measurements against", "It has become more accurate than real data", "It's required by law in network science papers", "It replaced the need for real network data entirely"],
            correct: 0,
            a: "It's the null model — the boring baseline that tells you whether a measured property (clustering, hubs, short paths) is a real finding or just what chance alone would give you.",
          },
          {
            type: "think",
            think: true,
            q: "The giant component appears at ⟨k⟩=1. Explain the intuition: why exactly one? (Think about what happens to a fragment when its nodes have, on average, more than one link each versus less than one.) What does the network look like on either side of the transition, and at what ⟨k⟩ does the last isolated node typically vanish?",
            a: "Think of extending outward from a small fragment. If nodes have on average MORE than one link each, each step outward tends to add more new connections than it uses up, so fragments keep growing and merging until one swallows almost everything. If nodes have FEWER than one link each on average, extending outward runs out of steam — fragments stay small and isolated, with too few links to keep chaining further.\n\nBelow ⟨k⟩=1: many small disconnected fragments, no giant piece. At and above ⟨k⟩=1: one giant component rapidly absorbs nearly all nodes, with only small scattered fragments left over.\n\nThe very last isolated node typically vanishes much later, around ⟨k⟩ ≈ ln n — well above the giant-component threshold of 1.",
          },
          {
            think: true,
            q: "Below the giant-component threshold ⟨k⟩=1, what does a random network look like?",
            choices: ["Many small disconnected fragments, no giant piece", "One giant component with a few missing nodes", "A single connected ring", "Every node isolated with degree 0"],
            correct: 0,
            a: "Below the threshold, links can't chain outward fast enough to merge fragments into one dominant piece — the network stays fragmented.",
          },
          {
            think: true,
            q: "At roughly what average degree does the very last isolated node typically disappear from a random network?",
            choices: ["⟨k⟩ ≈ ln n", "⟨k⟩ = 1", "⟨k⟩ = 0", "⟨k⟩ = n / 2"],
            correct: 0,
            a: "⟨k⟩ = 1 is only where the giant component appears — full connectivity (no isolates at all) needs the much higher threshold ⟨k⟩ ≈ ln n.",
          },
          {
            type: "think",
            think: true,
            q: "Sketch (pen, paper) the degree distribution of a random network with ⟨k⟩=10 on linear axes and on log-log axes. Then sketch, on the same two pairs of axes, a distribution with a heavy tail. Label the features that let you tell the two apart at a glance.",
            a: "Random, ⟨k⟩=10: on linear axes, a narrow, symmetric bell-shaped hump centered at k=10, essentially gone by k≈20-25. On log-log axes, that same hump curves and plunges steeply — it does NOT look like a straight line, since a Poisson-like distribution has no scale-free structure.\n\nHeavy-tailed: on linear axes, a tall spike at low k with a long, nearly invisible tail stretching far to the right. On log-log axes, this becomes an (approximately) straight declining line spanning many decades of k, with no natural 'edge' or cliff.\n\nTell-apart features: on log-log axes, random curves and drops off a cliff; heavy-tailed stays straight far out, with no characteristic scale. On linear axes, random is a symmetric hump around the mean; heavy-tailed is one huge spike plus rare, invisible-looking extreme outliers.",
          },
          {
            think: true,
            q: "On log-log axes, how does a random network's (Poisson) degree distribution look compared to a heavy-tailed one?",
            choices: ["It curves and drops off sharply, unlike the heavy-tailed distribution's straight line", "They look identical", "The random network's is the one that looks like a straight line", "Neither ever appears as a straight line"],
            correct: 0,
            a: "A Poisson-like distribution has a characteristic scale (the mean) and falls off fast — no straight line. A heavy tail has no characteristic scale, which is exactly what a straight log-log line signals.",
          },
          {
            type: "think",
            think: true,
            q: "A random network with the Marvel network's n and m has, on average, essentially no isolated nodes (expected number ≈ 0.02). The real network has 17. Which of the two facts is the more informative, and what does the real network's 17 isolates tell you that its ⟨k⟩ does not?",
            a: "The real count, 17, is far more informative. Under pure chance, essentially zero isolated nodes are expected — meaning a random network with Marvel's density would almost certainly have none at all. The real network having 17 shows that average degree alone doesn't determine how evenly connections are spread: a network can have a perfectly ordinary-looking ⟨k⟩≈9.5 while still having some characters barely mentioned at all and others massively over-connected. The 17 isolates are direct evidence of the real network's heavy-tailed, uneven degree distribution — something the single number ⟨k⟩ completely hides.",
          },
          {
            think: true,
            q: "A random network with Marvel's n and m has ~0.02 expected isolated nodes; the real Marvel network has 17. What does that gap tell you?",
            choices: ["The real network's degree is far less evenly spread than pure chance would produce", "The random network model must be wrong about ⟨k⟩", "17 isolates means the average degree must be very low", "Nothing — the two numbers should always match"],
            correct: 0,
            a: "A random network with the same average degree would essentially never produce isolates — the real network's 17 reveals heavy-tailed unevenness that ⟨k⟩ alone can't show.",
          },
          {
            type: "think",
            think: true,
            q: "G(n,p) with n=6 and p=0.2: expected number of links? Expected degree? Probability that a given node is isolated? Now the expected number of links for n=300, p=0.03 — check it against the Marvel m.",
            a: "n=6, p=0.2: expected links ⟨m⟩ = p·n(n−1)/2 = 0.2 × 15 = 3. Expected degree ⟨k⟩ = p(n−1) = 0.2 × 5 = 1.0. Probability a node is isolated = (1−p)^(n−1) = 0.8⁵ ≈ 0.328.\n\nn=300, p=0.03: expected links = 0.03 × 300×299/2 = 0.03 × 44,850 ≈ 1,345.5. Marvel's real network has 303 nodes and 1,434 links — close, in the right ballpark (the exact match, p≈0.031, is what the page quotes for Marvel's actual density).",
          },
          {
            think: true,
            q: "G(n,p) with n=6, p=0.2: what is the expected number of links?",
            choices: ["3 (=0.2×15)", "1.2", "0.2", "15"],
            correct: 0,
            a: "⟨m⟩ = p · n(n−1)/2 = 0.2 × (6×5/2) = 0.2 × 15 = 3.",
          },
          {
            think: true,
            q: "Same G(6, 0.2): what is the probability a given node is isolated?",
            choices: ["≈0.33 (=0.8⁵)", "0.2", "0.8", "0"],
            correct: 0,
            a: "A node is isolated if all 5 of its possible links fail to form: (1−0.2)⁵ = 0.8⁵ ≈ 0.328.",
          },
          {
            type: "think",
            think: true,
            q: "Node A's neighbors are {B, C, D}. Among them only B–C is linked. What is C_A? Now add the link C–D: what is C_A? Add B–D as well: what is it now?",
            diagram: {},
            a: "Possible neighbor-pairs among {B,C,D}: 3 (BC, BD, CD).\n\nOnly B–C linked: e=1, so C_A = 2×1/(3×2) = 1/3.\n\nAdd C–D: e=2, so C_A = 2×2/6 = 2/3.\n\nAdd B–D too (all three pairs linked): e=3, so C_A = 2×3/6 = 1 — A's neighborhood is now a clique.",
          },
          {
            think: true,
            q: "Node A's neighbors are {B,C,D}. Only B-C is linked. What is C_A?",
            choices: ["1/3", "2/3", "1", "0"],
            correct: 0,
            a: "One linked pair (B–C) out of 3 possible pairs: C_A = 2×1/(3×2) = 1/3.",
          },
          {
            think: true,
            q: "Same node A, now add the link C-D too (B-C and C-D both linked, B-D not). What is C_A now?",
            choices: ["2/3", "1/3", "1", "1/2"],
            correct: 0,
            a: "Two linked pairs out of 3 possible: C_A = 2×2/6 = 2/3.",
          },
          {
            think: true,
            q: "Add B-D as well, so all three pairs among A's neighbors are linked. What is C_A?",
            choices: ["1 — A's neighborhood is a clique", "2/3", "1/2", "0"],
            correct: 0,
            a: "All 3 possible pairs are linked: C_A = 2×3/6 = 1.",
          },
          {
            type: "think",
            think: true,
            q: "Take last week's edge list {A–B, A–C, A–D, B–C, C–D, D–E, E–F}. Compute C_i for all six nodes and the average C. Which nodes have C_i=0 and why — is it the same reason for each?",
            diagram: {},
            a: "Degrees: A=3(B,C,D), B=2(A,C), C=3(A,B,D), D=3(A,C,E), E=2(D,F), F=1(E).\n\nC_A: neighbors B,C,D — B-C yes, B-D no, C-D yes → e=2 of 3 possible → C_A=2×2/6=2/3.\nC_B: neighbors A,C — A-C yes → e=1 of 1 possible → C_B=2×1/2=1.\nC_C: neighbors A,B,D — A-B yes, A-D yes, B-D no → e=2 of 3 → C_C=2/3.\nC_D: neighbors A,C,E — A-C yes, A-E no, C-E no → e=1 of 3 → C_D=1/3.\nC_E: neighbors D,F — D-F no → e=0 of 1 → C_E=0.\nC_F: only 1 neighbor (E) → degree<2 → C_F=0 by convention.\n\nAverage C = (2/3+1+2/3+1/3+0+0)/6 ≈ 0.444.\n\nE and F both have C_i=0, but NOT for the same reason: F has degree 1, so there's no pair of neighbors to even test — a definitional zero. E has degree 2 (real neighbors D and F), but D and F simply aren't linked to each other — a genuine, computed zero.",
          },
          {
            type: "think",
            think: true,
            q: "A node of degree 12 has C_i=0.5. How many links exist among its neighbors? Now explain, in one sentence each, why (a) a hub in a social network usually has a lower C_i than a low-degree node, and (b) C_i is meaningless for a node of degree 1.",
            a: "Possible pairs among 12 neighbors = 12×11/2 = 66. Links among them = C_i × 66 = 0.5 × 66 = 33.\n\n(a) A hub's neighbors are far less likely to ALL know each other too — the number of possible pairs grows quadratically with degree, but the number of actually-existing ties among them doesn't keep pace, so C_i shrinks as degree grows.\n\n(b) With only one neighbor there's no pair of neighbors to check for a link at all — the ratio is 0/0, undefined, so it's conventionally set to 0 rather than measuring anything real.",
          },
          {
            think: true,
            q: "A node of degree 12 has C_i = 0.5. How many links exist among its 12 neighbors?",
            choices: ["33 (=0.5 × 66 possible pairs)", "6", "12", "66"],
            correct: 0,
            a: "Possible pairs = 12×11/2 = 66. Links = C_i × possible pairs = 0.5 × 66 = 33.",
          },
          {
            type: "think",
            think: true,
            q: "Marvel: C≈0.31 but transitivity≈0.18. Which of the two is pulled down by the hubs, and why would the two numbers coincide in a network where every node had the same degree?",
            a: "Transitivity is pulled down more by hubs. Transitivity effectively weights triangles by how many possible triples exist network-wide, which is dominated by the huge number of possible pairs around high-degree hubs — and hubs' neighborhoods are proportionally the sparsest. C, by contrast, averages each node's OWN C_i with equal weight regardless of degree, so a hub's low C_i doesn't get amplified by its huge number of possible pairs the way it does in transitivity.\n\nThe two would coincide in a REGULAR network where every node has the same degree: with no degree heterogeneity, weighting by degree (as transitivity implicitly does) becomes identical to a plain unweighted average (as C does) — there's nothing left to make them diverge.",
          },
          {
            type: "think",
            think: true,
            q: "Add a row to your table from 2.2: C for the real network and for the random one. Which rows of the table does the random network get right?",
            a: "The random network gets AVERAGE DISTANCE approximately right — both are short (real ≈2.7, random ≈2.8), since a random network's log n scaling genuinely produces short paths.\n\nIt gets everything about degree heterogeneity wrong: clustering (real ≈0.31 vs random ≈0.03, off by 10×), maximum degree (real ≈106 vs random ≈19), and isolated nodes (real has 17, random has essentially none). The random model captures the 'short paths' half of small-world behavior but misses everything that depends on hubs or uneven degree.",
          },
          {
            think: true,
            q: "Which property does a random network with Marvel's n and m get approximately right?",
            choices: ["Average path length (both are short, ~2.7-2.8)", "Clustering coefficient (both ≈0.31)", "Maximum degree (both ≈106)", "Number of isolated nodes (both ≈17)"],
            correct: 0,
            a: "Random networks are short (log n scaling) just like real ones — but they get clustering, max degree, and isolates all badly wrong.",
          },
          {
            type: "think",
            think: true,
            q: "For Watts-Strogatz networks with q=0, q=0.01 and q=1, rank the three by clustering and by mean shortest path.",
            a: "By clustering (highest to lowest): q=0 (lattice, all clustering) > q=0.01 (barely touched) > q=1 (fully random, clustering near 0).\n\nBy mean shortest path (longest to shortest): q=0 (lattice — grows like n) > q=0.01 (already dramatically shorter — a few shortcuts collapse it) > q=1 (fully random — grows like log n).\n\nThe key insight: q=0.01 is almost as clustered as q=0 but already almost as short-path as q=1 — that's the small-world sweet spot.",
          },
          {
            type: "think",
            think: true,
            q: "Write the figure caption for the classic Watts-Strogatz plot yourself — what's on the axes, what the error bars mean, what the reader should notice — and answer: around which q does the network become 'small'? Why does C hold on so much longer than ⟨d⟩? Explain the mechanism in two sentences, without the word 'shortcut' — then with it.",
            a: "Caption: x-axis is the rewiring probability q (log scale) from 0 to 1; y-axis shows mean shortest path ⟨d⟩ and clustering C (each normalized to their q=0 values), with error bars from repeated random runs at each q. The reader should notice that ⟨d⟩ collapses steeply at very small q, while C stays almost flat over that same range.\n\nAround q ≈ 0.01–0.1 the network already looks 'small' — distances have collapsed close to random-network levels.\n\nWithout 'shortcut': Rewiring only a small fraction of edges leaves the vast majority of the original lattice's local neighborhoods completely untouched, so the fraction of connected neighbor-pairs barely changes. But even a handful of far-flung reattached edges can slice straight across the whole ring, letting distant regions reach each other in far fewer steps than walking around.\n\nWith 'shortcut': Each rewired edge becomes a shortcut that removes at most one local triangle, so clustering barely notices a few rewires — but a shortcut can cut straight across the ring, so it takes very few of them to collapse the network's overall path lengths.",
          },
          {
            type: "think",
            think: true,
            q: "Describe what the network is at q=1. Is it exactly a random network? What is still different about it (hint: think about the minimum degree)?",
            a: "At q=1 every edge has been rewired to a random destination, so it looks a lot like a random graph. But it isn't exactly Erdős–Rényi G(n,p): the Watts-Strogatz construction started every node with a fixed number of edges before rewiring, so the total edge count and each node's baseline participation is guaranteed by construction — unlike true G(n,p), where each node's degree is a genuinely random draw that could in principle be very low or even zero (an isolate). So WS at q=1 still lacks the possibility of truly isolated nodes that plain G(n,p) allows.",
          },
          {
            think: true,
            q: "In a Watts-Strogatz network, why does clustering C survive rewiring far longer than the average path length ⟨d⟩?",
            choices: ["Only a tiny fraction of edges are touched, but even one rewired edge can create a long-range shortcut across the whole network", "Clustering is mathematically impossible to change once set", "Path length is measured on a different network than clustering", "Rewiring always increases clustering before it decreases it"],
            correct: 0,
            a: "A few rewired edges barely dent the vast majority of untouched local structure, but each one can slice straight across the network, collapsing distances disproportionately fast.",
          },
          {
            think: true,
            q: "Is a Watts-Strogatz network at q=1 exactly the same as an Erdős–Rényi random graph G(n,p)?",
            choices: ["No — every node still starts from a fixed baseline degree from construction, unlike G(n,p) where degree is fully random and can be very low or zero", "Yes, they are mathematically identical", "No — WS at q=1 always has more clustering than G(n,p)", "No — WS at q=1 always has longer paths than G(n,p)"],
            correct: 0,
            a: "WS's construction guarantees every node a baseline number of edges before rewiring; G(n,p) has no such guarantee, so it can produce isolates that WS at q=1 typically cannot.",
          },
          {
            type: "think",
            think: true,
            q: "The endpoint-list trick. Take a four-node network with edges A–B, B–C, B–D, and C–D. Write down the flat list of all edge endpoints. A newcomer picks one entry of that list uniformly at random and links to it. What is the probability it links to B? To A? Now explain, in one sentence, why picking uniformly from this list is exactly the rule Π(k_i) = k_i / Σ_j k_j.",
            a: "Endpoint list (each edge contributes both endpoints): A,B, B,C, B,D, C,D → [A,B,B,C,B,D,C,D], 8 entries total.\n\nB appears 3 times (from A-B, B-C, B-D): P(B) = 3/8. A appears once: P(A) = 1/8.\n\nWhy this equals Π(k_i): each node appears in the list exactly as many times as its degree (once per incident edge-endpoint), and the list has 2m total entries — so picking uniformly from the list gives node i probability k_i/2m = k_i/Σ_j k_j exactly.",
          },
          {
            think: true,
            q: "In the four-node network A-B, B-C, B-D, C-D, what is the probability a newcomer links to B via the endpoint-list trick?",
            choices: ["3/8 — B appears in 3 of the list's 8 entries", "1/4", "1/2", "3/4"],
            correct: 0,
            a: "B is an endpoint of 3 of the 4 edges (A-B, B-C, B-D), so it fills 3 of the 8 list slots.",
          },
          {
            think: true,
            q: "Why does picking uniformly from the endpoint list implement Π(k_i) = k_i/Σ_j k_j exactly?",
            choices: ["Each node appears in the list exactly as many times as its degree, so its share of the list equals its share of total degree", "The endpoint list is sorted by degree", "It's only an approximation, not exact", "Because the list has exactly n entries"],
            correct: 0,
            a: "The list has one entry per edge-endpoint, so node i's count in the list is exactly k_i, and the list's total length is exactly 2m = Σ_j k_j.",
          },
          {
            type: "think",
            think: true,
            q: "Rich get richer, one step. Suppose the newcomer-node E did link to B. Rewrite the list and compute B's probability of catching the next newcomer. Did it go up or down? Now suppose E had linked to A instead: what is A's share afterwards? Two sentences on why this feedback loop turns early luck into hubs.",
            a: "If E links to B: B's degree becomes 4, and the list grows to 10 entries (adding E,B). B's new share = 4/10 = 0.4, up from 3/8 = 0.375.\n\nIf E had linked to A instead: A's degree becomes 2, list grows to 10 entries. A's new share = 2/10 = 0.2, up from 1/8 = 0.125.\n\nEvery new link a node receives adds another copy of itself to the endpoint list, which directly raises the probability it gets picked next time — a self-reinforcing loop. Because this compounds over many rounds, whichever nodes happen to get an early lead keep pulling further ahead, turning small early luck into large, permanent hubs.",
          },
          {
            type: "think",
            think: true,
            q: "Kill the preference. Change the rule to 'pick an existing node uniformly at random.' Write Π(k_i) for that rule in a network of N nodes. Does degree matter at all? Then predict, without computing anything: after growing to 5,000 nodes under each rule, which network has the larger maximum degree, and what does each degree distribution look like on log-log axes?",
            a: "Under uniform selection, Π(k_i) = 1/N for every node — degree plays no role whatsoever.\n\nPrediction: preferential attachment produces a much larger maximum degree (the compounding 'rich get richer' effect builds real hubs), and its degree distribution is a straight line on log-log axes (a power law). Uniform attachment produces a much smaller, more evenly-spread maximum degree, with a distribution that curves and dies off quickly on log-log axes — no heavy tail, since there's no mechanism favoring already-popular nodes.",
          },
          {
            think: true,
            q: "Under the rule 'pick an existing node uniformly at random' in an N-node network, what is Π(k_i)?",
            choices: ["1/N — degree doesn't matter at all", "k_i/N", "k_i/Σ_j k_j", "1/k_i"],
            correct: 0,
            a: "Every node has the same chance regardless of degree, so Π(k_i) = 1/N.",
          },
          {
            think: true,
            q: "After growing to 5,000 nodes, which network has the larger maximum degree: preferential attachment or uniform-random attachment (same growth rule otherwise)?",
            choices: ["Preferential attachment — compounding advantage produces much bigger hubs", "Uniform attachment — every node gets an equal shot", "They're always identical", "Neither has a maximum degree"],
            correct: 0,
            a: "Preferential attachment's feedback loop compounds early leads into large hubs; uniform attachment has no such mechanism, so degree stays comparatively even.",
          },
          {
            type: "think",
            think: true,
            q: "Growth alone. Compare the uniform-growth network with a random G(n,m) network that has the same n and m. Neither has any preference, yet they differ. Name two things that differ and say why.",
            a: "Connected components: the growth network is built one node at a time, and every new node always attaches to at least one existing node — so it stays a single connected structure by construction, no isolates possible. G(n,m) places edges among all n nodes at once at random, which can easily leave some nodes with zero edges or split the network into several components.\n\nAge effect on degree: in the growth network, the earliest nodes had far more rounds of the process to accumulate extra links than latecomers, even without any preference — pure time gives them a mild degree advantage. G(n,m) has no arrival order at all; every node and edge was placed in one shot, so there's no age-based advantage, only a Poisson-like random draw.",
          },
          {
            think: true,
            q: "Name a difference between a uniform-growth network and a random G(n,m) network with the same n and m.",
            choices: ["The growth network is always one connected piece; G(n,m) can have isolates or multiple components", "They are mathematically identical", "G(n,m) always has more edges", "The growth network always has a power-law degree distribution"],
            correct: 0,
            a: "Growth guarantees every node attaches to something when it arrives; G(n,m) places all edges independently and can easily leave nodes unconnected.",
          },
          {
            type: "think",
            think: true,
            q: "Compute the CCDF of the Marvel in-degree and plot it on log-log axes next to the binned P(k) from week 1. Which is easier to read in the tail, and why does the CCDF need no binning at all? Read a rough slope off the CCDF and convert it to a γ.",
            a: "The CCDF is far easier to read in the tail — the binned P(k) has sparse, noisy individual bins out there (many empty or single-count), while the CCDF is a smooth, monotonically-decreasing staircase built from every single data point directly.\n\nWhy no binning is needed: the CCDF is a running total (the fraction of nodes with degree ≥ k) — you just sort the degrees and count down, with no aggregation or bin-width choices required.\n\nConverting slope to γ: a power law P(k)~k^(−γ) has a CCDF that is itself a power law with exponent γ−1. So if the CCDF's measured slope magnitude is β, then γ = β + 1.",
          },
          {
            think: true,
            q: "Why does the CCDF need no binning at all, unlike the raw P(k)?",
            choices: ["It's a running cumulative count — every data point is used directly, with no aggregation into arbitrary ranges", "It only counts even-numbered degrees", "It's calculated from a random sample instead of the full data", "CCDFs are always smoother by definition, regardless of method"],
            correct: 0,
            a: "The CCDF just counts down from sorted degree values — no bins, no arbitrary width or edge choices to distort it.",
          },
          {
            think: true,
            q: "A power law P(k) ~ k^(−γ) has a CCDF that is also a power law with what exponent?",
            choices: ["γ − 1", "γ", "γ + 1", "1/γ"],
            correct: 0,
            a: "Integrating (summing) a power law with exponent −γ gives a power law with exponent −(γ−1), i.e. the CCDF's exponent is γ−1.",
          },
          {
            type: "think",
            think: true,
            q: "Overlay the CCDF of your 5,000-node BA network and of a same-size random network. Which does Marvel resemble — and in which range of k does it stop resembling BA? (There are 303 nodes. Say something about what that does to the tail.)",
            a: "Marvel resembles the BA (scale-free) CCDF in the bulk of the distribution — both show a similarly gentle, slowly-decaying slope, unlike the random network's CCDF, which drops off in a sharp, near-vertical cliff.\n\nWhere it stops resembling BA: in the very far tail. Marvel has only 303 nodes — far fewer than a typical simulated BA network — so its tail is much noisier and cuts off abruptly at its single highest-degree node (k=106), lacking the smooth, extended reach a much larger BA network's tail would show. Small n means sampling noise dominates exactly the region you'd most want to trust.",
          },
          {
            type: "think",
            think: true,
            q: "In one paragraph: what is the robust claim you can make about the Marvel in-degree distribution, what is the claim you cannot make on this evidence, and what would it take to make it?",
            a: "Robust claim: the Marvel in-degree distribution has a genuine heavy tail — far more extreme values (like Spider-Man's 106) than any narrow, chance-based distribution could plausibly produce; this is visible on a log-log plot and confirmed by a CCDF that needs no binning tricks to show it. Claim you cannot make on this evidence alone: that it specifically follows a power law with a particular exponent γ — other heavy-tailed distributions (log-normal, power law with a cutoff) can also look straight-ish on these plots, so 'heavy-tailed' has been shown but 'power law' has not. What it would take: a proper statistical fit (maximum-likelihood estimation of γ and k_min), a goodness-of-fit test, and a likelihood-ratio comparison against alternative distributions — not just an eyeballed straight line.",
          },
          {
            think: true,
            q: "What's the strongest claim the Marvel in-degree data alone (a straight-ish line on log-log axes) actually supports?",
            choices: ["It has a genuine heavy tail — far more extreme values than chance would produce", "It is definitely a power law with γ=3", "It disproves the Barabási–Albert model", "It shows the network is disconnected"],
            correct: 0,
            a: "A straight-ish log-log line establishes a heavy tail. Confirming a specific power law needs a statistical fit and a test against alternatives, not eyeballing.",
          },
          {
            type: "think",
            think: true,
            q: "Current degrees in a growing network: A: 5, B: 3, C: 1, D: 1. A newcomer makes one preferential-attachment link. Probability it goes to A? To D? Now the newcomer makes m=2 links (first preferentially, then again among the rest): probability that A gets one of them?",
            a: "Sum of degrees = 5+3+1+1 = 10 = 2m, so m=5 edges. P(A) = 5/10 = 0.5. P(D) = 1/10 = 0.1.\n\nFor m=2 (first link preferential among all 4, second preferential among the remaining 3): P(A gets a link) = P(A first) + Σ over 'first went elsewhere' × P(A second | that case).\n• P(A first) = 0.5\n• If first=B (prob 0.3): remaining A(5),C(1),D(1), sum=7 → P(A second)=5/7\n• If first=C (prob 0.1): remaining A(5),B(3),D(1), sum=9 → P(A second)=5/9\n• If first=D (prob 0.1): remaining A(5),B(3),C(1), sum=9 → P(A second)=5/9\n\nP(A gets one of the two links) = 0.5 + 0.3×(5/7) + 0.1×(5/9) + 0.1×(5/9) ≈ 0.5 + 0.214 + 0.056 + 0.056 ≈ 0.825.",
          },
          {
            think: true,
            q: "Current degrees A:5, B:3, C:1, D:1 (m=5 edges). A newcomer makes one preferential-attachment link. What's the probability it goes to A?",
            choices: ["0.5 (=5/10)", "0.25", "0.1", "5/9"],
            correct: 0,
            a: "Π(A) = k_A / Σ_j k_j = 5/10 = 0.5.",
          },
          {
            think: true,
            q: "Same setup — probability the single new link goes to D?",
            choices: ["0.1 (=1/10)", "0.5", "0.25", "1/9"],
            correct: 0,
            a: "Π(D) = k_D / Σ_j k_j = 1/10 = 0.1.",
          },
          {
            type: "think",
            think: true,
            q: "After that newcomer has attached to A, the next newcomer arrives. Has A's chance of being chosen gone up or down, and by how much? Write one sentence connecting this to the phrase 'rich get richer.'",
            a: "A's degree becomes 6; the total degree sum becomes 10+2=12 (the new edge adds 1 to A and 1 to the newcomer). A's new share = 6/12 = 0.5 — exactly unchanged from 5/10 = 0.5 in this specific case, because A's original degree (5) exactly equalled the edge count (m=5), the precise break-even point (gaining a link raises your share only if your degree was below m, and lowers it if above).\n\nMore generally, whenever a node's degree is below that break-even point, winning a link tips the balance further in its favor — which is the compounding mechanism, repeated over many rounds, that turns small early leads into permanent hubs ('rich get richer').",
          },
          {
            type: "think",
            think: true,
            q: "Here are three degree distributions described in words. Name the model each one came from (random / Watts-Strogatz / Barabási-Albert / lattice) and say what would give it away on a plot: (a) every node has degree exactly 4; (b) a hump around 8, nothing above 20, and a bell shape on linear axes; (c) most nodes have degree 2 or 3, a few have 200.",
            a: "(a) A regular lattice-type network — every node linked to the same fixed number of neighbors. Giveaway: a single spike (delta function) at k=4 and nothing else, on either linear or log-log axes.\n\n(b) Random / Erdős–Rényi. Giveaway: a symmetric bell-shaped hump on linear axes that curves and plunges on log-log axes — no straight line, a hard-looking cutoff.\n\n(c) Barabási-Albert / scale-free. Giveaway: a straight declining line on log-log axes spanning from low k all the way to k=200, with no natural cutoff or hump.",
          },
          {
            think: true,
            q: "Which model would you name for a degree distribution described as 'every node has degree exactly 4'?",
            choices: ["A regular lattice-type network", "Random G(n,p)", "Barabási–Albert (scale-free)", "Watts–Strogatz with high q"],
            correct: 0,
            a: "Uniform degree with no variation at all is the signature of a regular/lattice-style construction, not any of the random-process models.",
          },
          {
            think: true,
            q: "Which model fits 'most nodes have degree 2 or 3, a few have 200'?",
            choices: ["Barabási–Albert (scale-free)", "A regular lattice", "Random G(n,p) with high p", "None of these ever produce this shape"],
            correct: 0,
            a: "A huge gap between typical degree and a few extreme hubs is exactly the heavy-tailed signature growth + preferential attachment produces.",
          },
          {
            type: "think",
            think: true,
            q: "You double ⟨k⟩ in a random network, keeping n. What happens to C? To the average distance? To the giant component? Now double n keeping ⟨k⟩ fixed: same three questions. Then, for Watts-Strogatz, what happens to C and ⟨d⟩ as q goes from 0.001 to 0.01 — and which of the two moves first?",
            a: "Double ⟨k⟩, fixed n: C = p = ⟨k⟩/(n−1) roughly doubles too. Average distance d≈ln n/ln⟨k⟩ decreases (more connections per step reach more nodes faster). Giant component: already well above threshold typically, so its fraction stays close to 1 — doubling makes it only marginally more robust.\n\nDouble n, fixed ⟨k⟩: C = ⟨k⟩/(n−1) roughly halves (shrinks as 1/n). Average distance increases slightly (ln n grows, though only logarithmically). Giant component's FRACTION stays the same (it depends on ⟨k⟩ alone, not n) — its absolute size just doubles along with n.\n\nWatts-Strogatz, q: 0.001→0.01: ⟨d⟩ moves first — it's already collapsed steeply by these tiny q values, while C only starts dropping noticeably at much larger q.",
          },
          {
            think: true,
            q: "You double ⟨k⟩ in a random network while keeping n fixed. What happens to the clustering coefficient C?",
            choices: ["It roughly doubles too, since C = p = ⟨k⟩/(n−1)", "It stays exactly the same", "It halves", "It becomes exactly 1"],
            correct: 0,
            a: "C equals p, and p = ⟨k⟩/(n−1), so doubling ⟨k⟩ at fixed n roughly doubles C.",
          },
          {
            think: true,
            q: "You double n in a random network while keeping ⟨k⟩ fixed. What happens to the FRACTION of nodes in the giant component?",
            choices: ["It stays about the same — the fraction depends only on ⟨k⟩, not n", "It doubles", "It halves", "It always becomes exactly 1"],
            correct: 0,
            a: "The giant-component fraction S solves 1−S=e^(−⟨k⟩S), which depends only on ⟨k⟩ — n doesn't appear, so the fraction is unchanged even though the absolute size doubles.",
          },
          {
            type: "think",
            think: true,
            q: "Fill in a 3×3 table: rows = random / Watts-Strogatz / Barabási-Albert; columns = clustering, distances, hubs. In each cell: does the model get the real world right or wrong, and what ingredient is responsible?",
            a: "Random: clustering WRONG (C=p→0 as n grows; no local triangle-forming mechanism). Distances RIGHT (short, ~log n; high connectivity spreads reach exponentially). Hubs WRONG (Poisson tail dies fast; no preferential attachment).\n\nWatts-Strogatz: clustering RIGHT (starts from a lattice, only a small fraction of edges rewired). Distances RIGHT (a few long-range shortcuts collapse path lengths). Hubs WRONG (degree stays roughly uniform near ⟨k⟩; no growth+preference mechanism).\n\nBarabási-Albert: clustering WRONG (no explicit local-triangle/lattice structure built in). Distances RIGHT (hubs act as natural shortcuts). Hubs RIGHT (growth + preferential attachment together produce a genuine heavy tail).\n\nNo single one of these three basic models gets all three right — that's the whole point of the week's story.",
          },
          {
            think: true,
            q: "In a 3×3 table of models × (clustering, distances, hubs), which model gets ALL THREE right?",
            choices: ["None of the three basic models gets all three right — that's the whole point of the week's story", "Random graph", "Watts–Strogatz", "Barabási–Albert"],
            correct: 0,
            a: "Random gets distances right but misses clustering and hubs. WS gets clustering and distances right but misses hubs. BA gets distances and hubs right but misses clustering.",
          },
          {
            type: "think",
            think: true,
            q: "'The Marvel network's average distance (2.7) is no shorter than a random network's (2.8), so it is not a small world.' Find the flaw and name the null model that would fix it.",
            a: "Being a small world requires BOTH short distances AND clustering far above chance — this claim only checks the distance half and ignores clustering entirely. A network can match random on distance while still being a genuine small world because of exceptional clustering, which Marvel has (C≈0.31 vs random's ≈0.03, about 10× higher). The fix isn't a different null for distance — it's remembering to also check clustering against the same random baseline; distance alone is an incomplete test of 'small world.'",
          },
          {
            think: true,
            q: "'Marvel's average distance is no shorter than random's, so it's not a small world' — what's the flaw?",
            choices: ["Being a small world requires short distances AND high clustering — this only checked distance and ignored clustering", "The distances quoted are simply wrong", "Random networks never have short distances", "Small-world status doesn't depend on distance at all"],
            correct: 0,
            a: "Small-world status needs both properties together. Checking only distance misses that Marvel's clustering is roughly 10× higher than a random network's.",
          },
          {
            type: "think",
            think: true,
            q: "'39% of links in the directed Marvel network are reciprocated. In a random directed network with the same density only 3% would be, so reciprocity is 13× higher than chance.' What is a better null here, and would the effect survive it?",
            a: "A better null is a degree-preserving one (shuffle or configuration model), not a plain density-matched random network. Hubs mechanically create many more opportunities for reciprocation just from having so many links — a node with over a hundred out- and in-links has vastly more chances for some of those to happen to be mutual, purely from volume, regardless of any real tendency to 'link back.' A density-only random null doesn't account for how much of the reciprocity is simply a side-effect of the heavy-tailed degree distribution.\n\nWould it survive? Likely only partially — some of the 13× effect is probably genuine, but part of it is likely inflated by hub effects, so the honest number requires re-running under the stricter degree-preserving null before trusting the full figure.",
          },
          {
            think: true,
            q: "Reciprocity is 13× higher than a random-density baseline predicts. What's a better null model for this specific claim?",
            choices: ["A degree-preserving null — hubs mechanically create more chances for reciprocation just from having many links", "There is no better null; the random-density comparison is already correct", "A null that removes all edges", "A null with double the number of nodes"],
            correct: 0,
            a: "A plain density-matched random network ignores that hubs create far more opportunities for mutual links just by volume — a degree-preserving shuffle isolates the effect beyond that.",
          },
          {
            type: "think",
            think: true,
            q: "'Our network's clustering, 0.31, is ten times that of an Erdős-Rényi network, which proves the clustering is caused by the heavy-tailed degree distribution.' What's wrong?",
            a: "A plain random null has no hubs at all, so it can't isolate how much of the clustering surplus specifically comes from hubs versus other structure — any surplus over a hub-free baseline is uninformative about what role hubs actually play. The right null is the degree-preserving configuration model or shuffle, which DOES have the real hubs. When you check that null instead, Marvel's clustering (0.32) is still far above the degree-preserving shuffle's (0.15) — proving hubs are NOT the whole story; there's real additional triangle-forming structure beyond what degree alone predicts.",
          },
          {
            think: true,
            q: "'Clustering is 10× random's, so it's caused by the heavy-tailed degree distribution' — what's wrong?",
            choices: ["A plain random null has no hubs at all, so it can't isolate what hubs specifically contribute — a degree-preserving null is needed", "Clustering can't be compared to random networks at all", "The 10× figure is definitely wrong", "Heavy-tailed degree distributions never cause clustering"],
            correct: 0,
            a: "A hub-free random baseline can't tell you what hubs contribute. Only a degree-preserving null (which keeps the real hubs) can isolate that.",
          },
          {
            type: "think",
            think: true,
            q: "Write the paragraph the AI should have written: three sentences that report the clustering result with the right null, the right comparison, and the right conclusion.",
            a: "Model paragraph: 'Marvel's clustering coefficient is 0.32, compared to a mean of 0.155 (SD 0.009) across 200 degree-preserving shuffles of the same network — a z-score of about 18, far beyond anything the shuffles produce. Because the shuffle preserves every node's degree exactly, this surplus cannot be explained by the network's heavy-tailed degree distribution alone. The real network therefore has additional, genuine clustering structure beyond what its hub-heavy degree sequence would predict by chance.'",
          },
          {
            type: "think",
            think: true,
            q: "State the friendship paradox precisely: which two averages are being compared, and why is the comparison biased by construction? Then use the formula ⟨k⟩+σ²/⟨k⟩ to explain why the paradox is strongest in scale-free networks and weakest — but not absent — in random ones.",
            a: "The paradox compares (a) the mean degree of a random PERSON to (b) the mean degree of that person's random FRIEND (a random neighbor). These aren't the same kind of sample: picking 'a random friend' means picking a random edge-endpoint, not a random node — and high-degree nodes are the endpoint of far more edges, so they get oversampled as 'somebody's friend' relative to how often they'd appear in a plain random pick of nodes. That oversampling is exactly the built-in bias.\n\nThe mean degree of a random neighbor is ⟨k⟩+σ²/⟨k⟩, always ≥ ⟨k⟩, with equality only when σ²=0 (every node has identical degree). The paradox's strength is set entirely by the degree VARIANCE σ² relative to the mean.\n\nScale-free networks have enormous degree variance (hubs push σ² way up), so σ²/⟨k⟩ is large — the paradox is very strong. Random (Poisson) networks have σ²≈⟨k⟩, small but not zero, giving σ²/⟨k⟩≈1 — a modest but genuinely nonzero paradox that never fully disappears as long as there's any degree variance at all.",
          },
          {
            think: true,
            q: "The friendship paradox compares the mean degree of a random person to the mean degree of...",
            choices: ["A random neighbor of a random person (i.e., a randomly sampled edge-endpoint)", "The single highest-degree node in the network", "A randomly rewired version of the same person", "The average across all possible networks"],
            correct: 0,
            a: "Sampling 'a random friend' means sampling a random edge-endpoint, which oversamples high-degree nodes compared to sampling nodes directly.",
          },
          {
            think: true,
            q: "Why is sampling 'a random friend' biased toward high-degree nodes?",
            choices: ["High-degree nodes are the endpoint of far more edges, so they get sampled as 'a friend' far more often", "Friends are chosen alphabetically", "It isn't biased — this is a common misconception", "Low-degree nodes are always excluded from the sample"],
            correct: 0,
            a: "Each edge-endpoint is an equally likely pick, and hubs simply own far more endpoints, so they turn up as someone's friend disproportionately often.",
          },
          {
            think: true,
            q: "The mean degree of a random neighbor equals ⟨k⟩ + σ²/⟨k⟩. In which kind of network is the friendship paradox strongest?",
            choices: ["A scale-free network — huge degree variance σ² makes the extra term large", "A perfectly regular network where every node has the same degree", "Any network with zero edges", "It's exactly the same strength in every network"],
            correct: 0,
            a: "The paradox's size is entirely driven by σ². Scale-free networks have the largest degree variance of all, so they show the strongest effect.",
          },
          {
            type: "think",
            think: true,
            q: "Run the friendship-paradox sampling on a degree-preserving shuffle of the Marvel network. The effect survives — explain why this null cannot kill it, and what that tells you about which network property the paradox really depends on. Then: could properties beyond the degree sequence (assortativity, clustering, communities) make the paradox stronger or weaker?",
            a: "A degree-preserving shuffle keeps every node's exact degree, which means it keeps ⟨k⟩ and σ² exactly the same. Since the paradox's strength depends only on those two numbers, the shuffle is mathematically guaranteed to leave it fully intact no matter how thoroughly who-links-to-whom gets scrambled. This shows the friendship paradox is purely a consequence of the degree sequence's spread — not of any particular wiring pattern, community structure, or who-connects-to-whom.\n\nBeyond degree: if hubs preferentially link to OTHER hubs (assortative), a random neighbor is even more likely to land on a hub than degree variance alone predicts, strengthening the paradox. Marvel is mildly disassortative (hubs link mostly to leaves), which dilutes this slightly relative to an assortative network with the same degree sequence — though the underlying degree-variance term still dominates, so this is a secondary correction, not a replacement.",
          },
          {
            think: true,
            q: "Why does a degree-preserving shuffle fail to kill the friendship paradox?",
            choices: ["The paradox's strength depends only on ⟨k⟩ and the degree variance, both of which the shuffle leaves untouched", "The shuffle doesn't actually change anything about the network", "Shuffling always makes the paradox stronger, never weaker", "The paradox only exists in shuffled networks"],
            correct: 0,
            a: "Since the formula ⟨k⟩+σ²/⟨k⟩ depends only on the degree sequence, and the shuffle preserves that sequence exactly, the paradox's magnitude can't change.",
          },
        ],
      },
      3: {
        flashcards: [
          {
            type: "think",
            think: true,
            q: "Walk vs path vs shortest path: define all three, then give an example of a walk of length 4 in a triangle that is not a path.",
            a: "A walk is any sequence of nodes where each consecutive pair is linked — nodes and edges can repeat. A path is a walk that never repeats a node. The shortest path between two nodes is the path with the fewest edges; its length is their distance.\n\nExample in a triangle {A,B,C} (edges A-B, B-C, C-A): the walk A→B→A→B→C has length 4 and is valid (each consecutive pair is a real edge), but it revisits A and B, so it is not a path.",
          },
          {
            type: "think",
            think: true,
            q: "Explain BFS to someone who has never seen it, in five sentences or fewer, and say why the ring a node lands in is guaranteed to be its shortest distance from the start.",
            a: "Start at your chosen node and mark it distance 0. Look at all of its direct neighbors — anyone not yet marked gets distance 1. Then look at the neighbors of those distance-1 nodes — anyone still unmarked gets distance 2. Keep expanding outward ring by ring, marking each brand-new node one more than the ring it was found from, until nothing new appears.\n\nWhy the ring guarantees shortest distance: BFS only explores nodes at distance d+1 after it has fully explored every node at distance d, so it's structurally impossible to first discover a node too early — reaching it requires passing through an already-discovered node exactly one ring closer. The ring where a node is first found is therefore necessarily its minimum possible distance.",
          },
          {
            type: "think",
            think: true,
            q: "In a directed network, d_AB=2 and d_BA=∞. Draw the smallest network in which that is true. What do 'weakly connected' and 'strongly connected' mean, and which of them does your drawing have?",
            a: "Smallest example: three nodes A, X, B with edges A→X and X→B, and no edges at all leading back toward A or X. Then d_AB=2 (via A-X-B) and d_BA=∞ (B has no way to reach A or X at all).\n\nWeakly connected: connected if you ignore direction — there's some path between every pair when edges are treated as undirected. Strongly connected: every node can reach every other node while following the arrows.\n\nThis drawing is weakly connected (A-X-B forms a connected chain ignoring direction) but not strongly connected (B cannot reach A or X).",
          },
          {
            type: "think",
            think: true,
            q: "The Marvel network has ⟨d⟩=2.67. The random network with the same n and m (your table from week 2) has ⟨d⟩=2.8. Is the real network's value evidence of anything? What would be?",
            a: "Not really — 2.67 vs 2.8 is a small, unremarkable gap, and short paths show up in many kinds of networks, random ones included. Short distances alone were already established as weak evidence of anything special (both random graphs and real small-world networks have them).\n\nWhat would be evidence: comparing CLUSTERING to the same random baseline instead. Marvel's clustering (≈0.31) is roughly ten times the random network's (≈0.03) — a stark, genuine gap that distance comparisons don't show. A real finding needs a null model and a z-score or p-value, not just eyeballing one loosely-informative number.",
          },
          {
            type: "think",
            think: true,
            q: "Draw this network: nodes 1-8, links 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8. Run BFS from node 1. Write the nodes ring by ring. What is the eccentricity of node 1 (its distance to the farthest node)?",
            diagram: { graph: "week3chain" },
            a: "Rings from node 1:\n• distance 0: {1}\n• distance 1: {2, 3}\n• distance 2: {4}\n• distance 3: {5}\n• distance 4: {6, 7}\n• distance 5: {8}\n\nThe farthest node is 8, at distance 5 — so node 1's eccentricity is 5.",
          },
          {
            think: true,
            q: "In the network 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8: what is node 1's eccentricity (BFS from node 1)?",
            choices: ["5 — node 8 is 5 steps away", "3", "8", "1"],
            correct: 0,
            a: "BFS from 1 reaches {2,3} at distance 1, {4} at 2, {5} at 3, {6,7} at 4, and {8} at 5 — the farthest node is 8.",
          },
          {
            type: "think",
            think: true,
            q: "Same network (nodes 1-8, links 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8). Run BFS from node 5. Which nodes are the network's center (smallest eccentricity), and what is the diameter?",
            diagram: { graph: "week3chain" },
            a: "Eccentricity of every node (by BFS from each): 1→5, 2→4, 3→4, 4→3, 5→3, 6→4, 7→4, 8→5.\n\nSmallest eccentricity is 3, shared by nodes 4 and 5 — they are the network's center (this network is the 'diamond {1,2,3,4} plus a branching tail 4-5-6/7-8', and the center sits right at the two nodes bridging those parts).\n\nDiameter = the largest eccentricity = 5 (the distance between the two extreme ends, nodes 1 and 8).",
          },
          {
            think: true,
            q: "In that same 8-node network, which nodes form the center (smallest eccentricity)?",
            choices: ["4 and 5 — both have eccentricity 3, the smallest in the network", "1 and 8 — the two endpoints", "Only node 5", "Every node ties for the center"],
            correct: 0,
            a: "Nodes 4 and 5 both have eccentricity 3, tied for smallest; nodes 1 and 8 have the largest eccentricity (5) and are the farthest apart — they set the diameter.",
          },
          {
            type: "think",
            think: true,
            q: "Now make the links 4→5 and 5→6 directed (all others stay undirected). Recompute the distances from node 1 and from node 6. Which pairs became unreachable?",
            a: "From node 1: nothing changes — 1 still reaches everyone with the same distances as before (2=1, 3=1, 4=2, 5=3, 6=4, 7=4, 8=5), because every one of those routes already travelled 4→5 and 5→6 in the 'forward' direction that's still allowed.\n\nFrom node 6: node 6's only edge was 5-6, now directed 5→6 — meaning 6 has no outgoing edge at all anymore. Node 6 cannot reach anyone: it's a complete dead end.\n\nMore generally, the bridge 4-5 becoming one-way (4→5 only) means the whole {5,6,7,8} side can no longer reach back into {1,2,3,4} at all — every pair (s,t) with s∈{5,6,7,8} and t∈{1,2,3,4} is now unreachable, even though the reverse direction (from {1,2,3,4} into {5,6,7,8}) still works fine.",
          },
          {
            type: "think",
            think: true,
            q: "Count the shortest paths from 1 to 5 in the network 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8. (There are two.)",
            a: "1 to 4 has two shortest paths of length 2: 1-2-4 and 1-3-4 (the diamond has no diagonal edges, so both routes around it tie). Extending either one by the single edge 4-5 gives two shortest paths of length 3 from 1 to 5: 1-2-4-5 and 1-3-4-5.",
          },
          {
            type: "think",
            think: true,
            q: "Compute the closeness of nodes D, F, and J in the Krackhardt kite (10 nodes: Andre, Beverly, Carol, Diane, Ed, Fernando, Garth, Heather, Ike, Jane; 18 links, with Diane the highest-degree node and Ike-Jane a small tail hanging off Heather-Garth-Fernando). Explain in one sentence why F beats D even though D has more links.",
            a: "Kite edges: A-B, A-C, A-D, A-F, B-D, B-E, B-G, C-D, C-F, D-E, D-F, D-G, E-G, F-G, F-H, G-H, H-I, I-J.\n\nDistances from D: A,B,C,E,F,G all at distance 1 (6 nodes); H at distance 2; I at distance 3; J at distance 4. Sum = 6×1+2+3+4 = 15. Closeness_D = 9/15 = 0.6.\n\nDistances from F: A,C,D,G,H at distance 1 (5 nodes); B,E,I at distance 2; J at distance 3. Sum = 5×1+3×2+3 = 14. Closeness_F = 9/14 ≈ 0.643.\n\nDistances from J: I at 1, H at 2, F&G at 3, A,B,C,D,E at 4. Sum = 1+2+3+3+4×5 = 29. Closeness_J = 9/29 ≈ 0.310.\n\nWhy F beats D: D has more direct connections but sits deep inside the dense cluster, while F sits right at the narrow bridge to the H-I-J tail — so F's average distance to everyone, tail included, ends up shorter than D's despite D's higher degree.",
          },
          {
            type: "think",
            think: true,
            q: "Compute the betweenness of H in the Krackhardt kite. Hint: H sits on every shortest path between {I, J} and the other seven nodes, and on no others. How many such pairs are there? Now do I, and explain why I has substantial betweenness with only two links.",
            a: "H's exclusive pairs: {I,J} × {A,B,C,D,E,F,G} = 2×7 = 14 pairs, and H is the sole route for every one of them → raw betweenness(H) = 14 (normalized: 14/36 ≈ 0.389, dividing by (n-1)(n-2)/2=36).\n\nI's exclusive pairs: {J} × {A,B,C,D,E,F,G,H} = 8 pairs, since J's only connection to the rest of the network runs through I → raw betweenness(I) = 8 (normalized ≈0.222).\n\nWhy I matters despite only 2 links: I isn't well-connected, but it's the SOLE bridge for J to reach anyone else — a classic low-degree, high-betweenness broker. Betweenness rewards being an irreplaceable bridge, not having many connections.",
          },
          {
            type: "think",
            think: true,
            q: "Compute the betweenness of C in the Krackhardt kite. (It should be zero. Why?)",
            a: "Carol (C) connects to A, D, and F. But A-D, D-F, and A-F are ALL directly connected to each other and to the rest of the dense cluster through multiple other routes — so no shortest path between any pair of C's neighbors (or between any pair elsewhere in the network) ever needs to detour through C. Every pair C could conceivably 'bridge' already has a more direct route that bypasses her entirely, giving betweenness exactly 0 despite having 3 real connections.",
          },
          {
            think: true,
            q: "In the Krackhardt kite, why is Carol's (C's) betweenness exactly zero despite having 3 connections?",
            choices: ["All of her neighbors are already directly connected to each other and to the rest of the network through other routes, so no shortest path ever needs to pass through her", "Betweenness is always zero for nodes with an odd degree", "She has the lowest degree in the network", "Betweenness can't be computed for degree-3 nodes"],
            correct: 0,
            a: "C's neighbors (A, D, F) are richly interconnected elsewhere, so every shortest path that could theoretically pass through C has a shorter or equally short alternative that doesn't.",
          },
          {
            type: "think",
            think: true,
            q: "In the network from 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8, which node has the highest betweenness? Compute it, using your count of shortest paths.",
            a: "Node 4 is a cut vertex separating {1,2,3} (3 nodes) from {5,6,7,8} (4 nodes): all 3×4=12 cross-pairs pass through it, plus it shares credit on the pair (2,3) — which has two shortest paths, 2-1-3 and 2-4-3 — for +0.5. Raw betweenness(4) = 12.5.\n\nNode 5 is a cut vertex separating {1,2,3,4} (4 nodes) from {6,7,8} (3 nodes): all 4×3=12 cross-pairs pass through it, PLUS it's the sole route for the within-{6,7,8} pairs (6,7) and (6,8) — both fully credited to node 5, adding +2. Raw betweenness(5) = 14.\n\nSo node 5 has the highest betweenness (14 > 12.5), even though node 4 looks more 'central' — 5's branching into three separate downstream nodes (6, 7, 8) creates more exclusive sole-bridge pairs than 4's position does.",
          },
          {
            think: true,
            q: "In the network 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8, which single node has the highest betweenness centrality?",
            choices: ["Node 5 — raw betweenness 14, beating node 4's 12.5", "Node 4 — it has the most connections to the diamond", "Node 1 — it's the starting point", "Node 8 — it's the farthest node"],
            correct: 0,
            a: "Both 4 and 5 are cut vertices, but 5's branch into three separate downstream nodes (6, 7, 8) gives it extra exclusive-bridge pairs that push its betweenness (14) above node 4's (12.5).",
          },
          {
            type: "think",
            think: true,
            q: "Come up with a network where betweenness centrality and closeness centrality have really different behaviors.",
            a: "Two dense 5-node cliques connected by a single bridge edge (and its two endpoint nodes). Those two bridge nodes have enormous betweenness — literally every shortest path between the two cliques must pass through them — but only moderate closeness, since they're still 2+ steps from most nodes in the far clique. Meanwhile, a node embedded deep in the center of one clique has excellent closeness within its own clique but zero betweenness, since it never sits on anyone's only route to anywhere.",
          },
          {
            type: "think",
            think: true,
            q: "For each of these questions, say which centrality measure you would use and why: whom to vaccinate first · whose retirement would hurt the company most · who has the most friends · which airport's closure delays the most journeys.",
            a: "Using the page's own framing — degree for popularity, closeness for reach, betweenness for control, PageRank/eigenvector for prestige:\n\n'Who has the most friends' is degree centrality by definition — pure connection count.\n\n'Whom to vaccinate first' fits closeness — the person who can reach (and so infect) the rest of the network fastest is exactly who slows the epidemic's overall reach most if removed first.\n\n'Which airport's closure delays the most journeys' is the classic betweenness question — a hub that many routes' shortest paths pass through, whether or not it has the highest traffic itself.\n\n'Whose retirement hurts the company most' fits eigenvector/PageRank-style prestige — someone deeply embedded among other important, well-connected people (a trusted advisor to the top brass) can matter enormously without being a structural bridge (betweenness) or simply popular (degree).",
          },
          {
            type: "think",
            think: true,
            q: "Take the four-node directed network A→B, A→C, B→C, C→A, D→C. Start with PR=0.25 for every node and α=0.85. Apply the PageRank equation once, to all four nodes, and write down the new vector. (D has no incoming links; what does it get, and from where?) Apply it a second time. Which node is winning, and why does A score well with a single incoming link?",
            a: "Out-degrees: A→{B,C} (2), B→{C} (1), C→{A} (1), D→{C} (1). Teleport floor: (1−0.85)/4 = 0.0375.\n\nIteration 1 (all start at 0.25):\nPR_A = 0.0375 + 0.85×(PR_C/1) = 0.0375 + 0.2125 = 0.25\nPR_B = 0.0375 + 0.85×(PR_A/2) = 0.0375 + 0.10625 = 0.14375\nPR_C = 0.0375 + 0.85×(PR_A/2 + PR_B/1 + PR_D/1) = 0.0375 + 0.85×0.625 = 0.56875\nPR_D = 0.0375 + 0 = 0.0375 (no incoming links — it only ever gets the teleport floor)\n\nIteration 2 (using the values above):\nPR_A = 0.0375 + 0.85×0.56875 ≈ 0.521\nPR_B = 0.0375 + 0.85×(0.25/2) = 0.14375\nPR_C = 0.0375 + 0.85×(0.125 + 0.14375 + 0.0375) ≈ 0.298\nPR_D = 0.0375 (always)\n\nAfter two iterations, A is winning (≈0.521). A scores well from just one incoming link because that link comes from C, which itself accumulates a large score (from A, B, and D) — and since C's out-degree is only 1, C hands its ENTIRE score to A in one concentrated dose rather than splitting it. Quality (a link from a high-scoring, non-splitting node) beats quantity of incoming links.",
          },
          {
            type: "think",
            think: true,
            q: "Set α=1 (no teleporting) in that same network. What happens to D's score, and after that to the whole thing? Say in one sentence what teleportation is for.",
            a: "D's score collapses to exactly 0 — the teleport floor was its ONLY source of score (it has no incoming links at all), and removing teleportation removes that floor entirely.\n\nMore generally, without teleportation, any node or group with no incoming links starves to exactly zero, and any cycle the walker enters with no escape can trap it forever, leaving the rest of the network undervalued or the iteration without a well-defined unique answer.\n\nTeleportation exists to guarantee every node keeps some positive score and the whole system converges to one well-defined stationary distribution, however oddly the real link structure is shaped.",
          },
          {
            type: "think",
            think: true,
            q: "Explain the difference between eigenvector centrality and PageRank in terms of what one node's link is worth when that node has many out-links. Then: in an undirected network, what does the random walker's stationary distribution reduce to?",
            a: "In plain eigenvector centrality (using the raw adjacency matrix), a node hands its FULL score to every one of its out-links — having many out-links doesn't dilute what each individual link is worth. In PageRank (using the row-normalized walk matrix), a node splits its score EVENLY across all of its out-links, so a link from a node with many out-links is worth less than a link from a node with few — the same total score, thinly spread.\n\nOn an undirected network, the stationary distribution reduces to π_i = k_i/2m — plain degree centrality, up to the normalizing constant. Undirected PageRank is, quite literally, degree wearing a hat.",
          },
          {
            think: true,
            q: "In an undirected network, what does the random walker's stationary distribution reduce to?",
            choices: ["π_i = k_i / 2m — exactly proportional to degree", "It's identical to betweenness centrality", "It's always uniform (1/n for every node)", "It's undefined for undirected networks"],
            correct: 0,
            a: "The vote-splitting that makes PageRank interesting on directed networks collapses on undirected ones — the stationary probability at a node is just its share of total degree.",
          },
          {
            type: "think",
            think: true,
            q: "Before computing anything: a node has degree 2 and the highest betweenness in its network. Draw a network where this happens. Then draw one where the highest-degree node has betweenness zero.",
            a: "Degree-2, highest betweenness: two large groups connected by a single node with exactly one edge into each group (an hourglass/bowtie shape). That connector has only degree 2, but every shortest path between the two groups must pass through it — giving it far higher betweenness than any node inside either group.\n\nHighest degree, zero betweenness: a complete graph (clique) — or simply a hub whose every neighbor is also directly connected to every other neighbor. Since any two of the hub's neighbors already have a direct edge, no shortest path between them ever needs to detour through the hub, so its betweenness is exactly 0 no matter how high its degree is.",
          },
          {
            type: "think",
            think: true,
            q: "Explain why closeness is so much harder to be surprising at than betweenness, under a degree-preserving shuffle. (Think about what the shuffle preserves and what closeness depends on.)",
            a: "Betweenness depends on the SPECIFIC wiring pattern — who exactly connects to whom — which a degree-preserving shuffle scrambles completely while holding degrees fixed. If a node's high betweenness came from being a specific, irreplaceable bridge, shuffling can easily destroy that specific position, making the real value stand out sharply from the shuffled distribution.\n\nCloseness is an aggregate (average distance to everyone), and that aggregate is much more strongly constrained by the degree sequence and overall small-world structure itself — in a heavy-tailed, well-connected network, almost any reasonably-connected node ends up close to everyone via SOME hub or other, almost regardless of the exact wiring. That leaves little room for one specific node's closeness to look dramatically different from what the shuffle also produces.",
          },
          {
            type: "think",
            think: true,
            q: "Write three sentences for a report that state Hercules's betweenness correctly: the value, the comparison, and what it does and does not mean.",
            a: "Model paragraph: 'Hercules has degree 26 and betweenness 0.037 in the Marvel network. Against 200 degree-preserving shuffles of the same network, the shuffled mean is 0.018 — his real value sits roughly four standard deviations above that. This shows Hercules's importance as a broker linking several corners of the Marvel universe is not simply a byproduct of his degree; it reflects a genuinely unusual bridging position beyond what his connection count alone would predict.'",
          },
          {
            type: "think",
            think: true,
            q: "On paper: what is r (degree assortativity) for a star (one hub, every other node linked only to it)? Draw a six-node network with r>0 and one with r<0, and sketch k_nn(k) for each. Is a ring assortative, disassortative, or neither?",
            a: "A star has r = −1: every single edge connects the one high-degree hub to a degree-1 leaf, the most extreme possible mismatch — maximally disassortative.\n\nr>0 example: two triangles joined by one edge between their two highest-degree members — same-degree nodes tend to link to same-degree nodes. k_nn(k) rises with k.\n\nr<0 example: a star — the hub (highest k) connects only to leaves (lowest k), and every leaf connects only to the hub (highest k). k_nn(k) falls sharply as k rises.\n\nA ring (every node degree exactly 2): neither — with zero degree variance, there's nothing to correlate, so assortativity is undefined/meaningless for a perfectly regular network.",
          },
          {
            think: true,
            q: "What is the degree assortativity r of a star network (one hub, every other node linked only to it)?",
            choices: ["r = −1 (maximally disassortative)", "r = 0", "r = +1", "r is undefined for stars"],
            correct: 0,
            a: "Every edge pairs the same maximal-degree hub with a minimal-degree leaf — the most extreme possible disassortative mismatch, r = −1.",
          },
          {
            think: true,
            q: "Is a ring (every node with degree exactly 2) assortative or disassortative?",
            choices: ["Neither — with zero degree variance, assortativity is undefined/meaningless", "Strongly assortative", "Strongly disassortative", "It's always exactly r=0.5"],
            correct: 0,
            a: "Assortativity measures correlation between degrees at either end of an edge — with every node sharing the exact same degree, there's no variation left to correlate.",
          },
          {
            type: "think",
            think: true,
            q: "In exercise 3.2's network (nodes 1-8, links 1-2, 1-3, 2-4, 3-4, 4-5, 5-6, 5-7, 7-8), list every maximal clique. What is the clique number?",
            diagram: { graph: "week3chain" },
            a: "This network is entirely triangle-free — the 'diamond' 1-2-4-3-1 has no diagonal edges (no 1-4 or 2-3 link), so it's just a 4-cycle, not a clique. No triangle exists anywhere else either (check every node's neighbors: none are mutually linked).\n\nSo every maximal clique here is just a single edge: {1,2}, {1,3}, {2,4}, {3,4}, {4,5}, {5,6}, {5,7}, {7,8} — eight maximal 2-cliques. The clique number is 2.",
          },
          {
            type: "think",
            think: true,
            q: "A 6-clique has how many links? What is the smallest degree a node in it can have? Use that to say, without computing anything, which Marvel characters cannot be in the 8-clique.",
            a: "A 6-clique has k(k−1)/2 = 6×5/2 = 15 links. Every member connects to all 5 others within the clique, so the smallest degree any member can have is 5 (possibly more, from links outside the clique).\n\nFor the actual 8-clique, membership requires being connected to all 7 other members — a minimum degree of 7 just from clique membership alone. So any Marvel character with degree below 7 is automatically excluded from the 8-clique — no need to check their specific connections at all.",
          },
          {
            think: true,
            q: "A 6-clique has how many links?",
            choices: ["15 (=6×5/2)", "6", "12", "30"],
            correct: 0,
            a: "Every pair among 6 members is linked: 6×5/2 = 15.",
          },
          {
            think: true,
            q: "What's the minimum degree any node inside an 8-clique must have (just from clique membership alone)?",
            choices: ["7 — connected to all 7 other members", "8", "4", "1"],
            correct: 0,
            a: "Clique membership requires a direct link to every other member — 7 others, so at least degree 7.",
          },
          {
            type: "think",
            think: true,
            q: "Explain why a network with clustering coefficient C=1 is a set of disconnected cliques, and why C=0 means it has no 3-clique (triangle) at all.",
            a: "C=1 for every node means every node's neighborhood is a complete clique — all of its neighbors are mutually connected. If a node had even one edge reaching outside its own tightly-knit group, its neighborhood would include members from two different groups who aren't connected to each other, breaking C_i=1 for that node. So a network where every node has C_i=1 is forced to break into separate, fully-connected components with no edges between them.\n\nC=0 (network-wide) means no node has even one linked pair of neighbors anywhere — since C_i measures exactly the fraction of a node's neighbor-pairs that are linked, a global value of exactly 0 means there is no set of three mutually-connected nodes anywhere in the network at all.",
          },
          {
            think: true,
            q: "Why does C=1 for every node in a network force it to be a disjoint union of complete cliques?",
            choices: ["If any node had a neighbor outside its own fully-connected group, that neighbor-pair wouldn't be linked, breaking C_i=1 for that node", "C=1 is just a coincidence with no structural implication", "C=1 always means the network has exactly one node", "It doesn't — C=1 networks can have any structure"],
            correct: 0,
            a: "Any cross-group edge would introduce a neighbor pair from different groups that isn't linked, which would drag that node's C_i below 1 — so C=1 everywhere forces total separation into cliques.",
          },
        ],
      },
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
    },
  },
  "good-to-know": {
    label: "Good to Know",
    weekly: false,
    thinkBadge: false,
    weeks: {
      1: {
        flashcards: [
          {
            q: "Markov's inequality: for a non-negative random variable X and t > 0, P(X ≥ t) ≤ ?",
            choices: ["E(X) / t", "t / E(X)", "Var(X) / t", "1 − E(X)/t"],
            correct: 0,
            a: "P(X ≥ t) ≤ E(X)/t. It only needs the mean — no shape, variance, or distribution assumptions required.",
          },
          {
            q: "What's the one condition Markov's inequality requires of X?",
            choices: ["X is non-negative (X ≥ 0)", "X is normally distributed", "X has finite variance", "X is symmetric about its mean"],
            correct: 0,
            a: "Non-negativity is the whole requirement. No variance, symmetry, or specific distribution needed — that's what makes it so widely usable (and also why the bound is often loose).",
          },
          {
            type: "think",
            q: "Why does Markov's inequality require X ≥ 0? What would break if X could go negative?",
            a: "The bound works by imagining the worst case: pile as much mass as possible right at t (or above) while the rest sits as low as it's allowed to go, and see what that does to the mean. If the 'rest' can only go as low as 0, there's a hard floor on how much it can drag the mean down — so a big chunk of mass ≥ t forces E(X) to be at least t·P(X≥t). If X could go negative, you could stash mass arbitrarily far below 0 to 'pay for' piling up even more mass above t, all while still landing on the same E(X). The floor at 0 is exactly what blocks that compensation trick.",
            diagram: {
              svg:
                '<svg viewBox="0 0 400 140" role="img" aria-label="Number line with a wall at zero blocking negative values, a few low values near the wall, the mean marked further right, and one big value out past the mean">' +
                '<line x1="70" y1="28" x2="70" y2="115" stroke="#cc1f7a" stroke-width="4" />' +
                '<line x1="59" y1="34" x2="70" y2="45" stroke="#cc1f7a" stroke-width="2" />' +
                '<line x1="59" y1="54" x2="70" y2="65" stroke="#cc1f7a" stroke-width="2" />' +
                '<line x1="59" y1="74" x2="70" y2="85" stroke="#cc1f7a" stroke-width="2" />' +
                '<line x1="59" y1="94" x2="70" y2="105" stroke="#cc1f7a" stroke-width="2" />' +
                '<text x="70" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#cc1f7a">0 (floor)</text>' +
                '<line x1="70" y1="115" x2="385" y2="115" stroke="#9384ab" stroke-width="1.5" />' +
                '<circle cx="90" cy="115" r="5" fill="#6d7fe0" />' +
                '<circle cx="105" cy="115" r="5" fill="#6d7fe0" />' +
                '<circle cx="120" cy="115" r="5" fill="#6d7fe0" />' +
                '<circle cx="135" cy="115" r="5" fill="#6d7fe0" />' +
                '<line x1="180" y1="58" x2="180" y2="115" stroke="#6d7fe0" stroke-width="1.5" stroke-dasharray="3 3" />' +
                '<text x="180" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#6d7fe0">E(X)</text>' +
                '<circle cx="340" cy="60" r="7" fill="#cc1f7a" />' +
                '<line x1="340" y1="67" x2="340" y2="115" stroke="#cc1f7a" stroke-width="1.5" stroke-dasharray="2 2" />' +
                '<text x="340" y="45" text-anchor="middle" font-size="11" font-weight="700" fill="#cc1f7a">one big value</text>' +
                '<text x="28" y="78" text-anchor="middle" font-size="18" fill="#cc1f7a">✕</text>' +
                '<text x="28" y="96" text-anchor="middle" font-size="10" fill="#cc1f7a">X&lt;0</text>' +
                "</svg>",
            },
          },
          {
            type: "think",
            q: "Sketch why P(X ≥ t) ≤ E(X)/t makes sense, using the picture of a distribution's tail.",
            a: "E(X) is a weighted average over the whole distribution. Let p = P(X ≥ t) be the tail mass. That tail alone contributes at least t·p to the average (each point in it is worth ≥ t). Everything else contributes ≥ 0, since X ≥ 0 everywhere. So E(X) ≥ t·p + 0, which rearranges straight to p ≤ E(X)/t. In the picture: the shaded tail can't be too fat, or it would drag the mean above the value you already know it to be.",
            diagram: {
              svg:
                '<svg viewBox="0 0 400 140" role="img" aria-label="Right-skewed distribution with mean E(X) and threshold t marked; the tail from t onward is shaded to represent P(X at least t)">' +
                '<polyline points="30,110 45,70 60,40 75,28 90,30 105,38 120,50 140,65 165,78 195,88 225,94 260,98 300,102 340,106 380,110" fill="none" stroke="#6d7fe0" stroke-width="2.5" />' +
                '<polygon points="260,98 300,102 340,106 380,110 260,110" fill="rgba(204,31,122,0.28)" />' +
                '<line x1="30" y1="110" x2="385" y2="110" stroke="#9384ab" stroke-width="1.5" />' +
                '<line x1="140" y1="60" x2="140" y2="110" stroke="#6d7fe0" stroke-width="1.5" stroke-dasharray="3 3" />' +
                '<line x1="260" y1="22" x2="260" y2="110" stroke="#cc1f7a" stroke-width="1.5" stroke-dasharray="3 3" />' +
                '<text x="140" y="125" text-anchor="middle" font-size="13" font-weight="700" fill="#6d7fe0">E(X)</text>' +
                '<text x="260" y="16" text-anchor="middle" font-size="13" font-weight="700" fill="#cc1f7a">t</text>' +
                '<text x="322" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#cc1f7a">P(X ≥ t)</text>' +
                "</svg>",
            },
          },
          {
            q: "If average income E(X) = $50,000, what's the max fraction of people earning ≥ $100,000?",
            choices: ["1/2 (50%)", "1/10 (10%)", "1/4 (25%)", "1 (100%)"],
            correct: 0,
            a: "P(X≥100,000) ≤ 50,000/100,000 = 1/2. If more than half made ≥$100k, the average alone would already exceed $50k.",
          },
          {
            q: "Same E(X) = $50,000 — max fraction of people earning ≥ $500,000?",
            choices: ["1/10 (10%)", "1/2 (50%)", "1/5 (20%)", "1/50 (2%)"],
            correct: 0,
            a: "P(X≥500,000) ≤ 50,000/500,000 = 1/10.",
          },
          {
            q: "Same E(X) = $50,000 — max fraction of people earning ≥ $5,000,000?",
            choices: ["1/100 (1%)", "1/10 (10%)", "1/1000 (0.1%)", "1/2 (50%)"],
            correct: 0,
            a: "P(X≥5,000,000) ≤ 50,000/5,000,000 = 1/100. Notice the pattern: multiply t by 10, the bound divides by 10.",
          },
          {
            think: true,
            q: "Rewrite t as a·E(X) — some multiple of the mean. Markov's inequality then becomes P(X ≥ a·E(X)) ≤ ?",
            choices: ["1/a", "a", "E(X)/a²", "a·E(X)"],
            correct: 0,
            a: "P(X ≥ a·E(X)) ≤ 1/a. That's the general shape behind the income example: a=2 → ≤1/2, a=10 → ≤1/10, a=100 → ≤1/100.",
          },
          {
            q: "What does Markov's inequality NOT give you?",
            choices: ["An exact probability — only a worst-case upper bound", "Any bound at all on P(X≥t)", "A bound that uses the mean", "A bound valid for non-negative X"],
            correct: 0,
            a: "It's often a very loose upper bound — the true P(X≥t) can be far smaller. It's a guarantee ('can't be worse than this'), not an estimate of the actual probability.",
          },
          {
            q: "One-line intuition for Markov's inequality?",
            choices: ["Not too many things can be above average, or the average would be higher than we know it is", "Most things are exactly average", "The variance controls how many things are above average", "Negative values pull the average down without limit"],
            correct: 0,
            a: "\"Not too many things can be above average, or else the average would be higher than we know it actually is.\" Non-negativity is what makes this bite — there's nothing below 0 to counterbalance a fat high tail.",
          },
          {
            q: "Markov's inequality has an extended form: for a r.v. X and a monotonically increasing function f with f(X) ≥ 0, P(X ≥ ε) ≤ ?",
            choices: ["E[f(X)] / f(ε)", "E(X) / f(ε)", "f(E(X)) / ε", "E[f(X)] · f(ε)"],
            correct: 0,
            a: "P(X ≥ ε) ≤ E[f(X)] / f(ε). Same shape as plain Markov, just measured through f instead of X directly.",
          },
          {
            q: "What two conditions does the extended Markov's inequality require of f?",
            choices: ["f is monotonically increasing, and f(X) is non-negative", "f must be linear and bounded", "f must be its own inverse", "f must be strictly decreasing"],
            correct: 0,
            a: "Monotonically increasing so that X≥ε ⇔ f(X)≥f(ε) (the event doesn't change), and f(X)≥0 so the original non-negativity argument still applies — now to f(X) instead of X.",
          },
          {
            think: true,
            q: "Plug f(x) = x into the extended Markov's inequality P(X≥ε) ≤ E[f(X)]/f(ε). What do you get?",
            choices: ["Exactly the plain Markov's inequality: P(X≥ε) ≤ E(X)/ε", "Chebyshev's inequality", "A tighter bound than plain Markov", "An undefined expression"],
            correct: 0,
            a: "f(x)=x is monotonically increasing, and f(X)=X≥0 is exactly the original requirement — so the extended form collapses back to P(X≥ε) ≤ E(X)/ε. The 'plain' Markov's inequality you already know is just the f(x)=x special case.",
          },
          {
            type: "think",
            q: "Using the extended Markov's inequality with f(x) = x² instead of f(x) = x (still assuming X ≥ 0), what bound do you get for P(X ≥ t), and why might it be tighter than the plain E(X)/t bound?",
            a: "X≥0 and x² is monotonically increasing on [0,∞), so X≥t ⇔ X²≥t². Applying the extended inequality with f(x)=x²: P(X≥t) = P(X²≥t²) ≤ E(X²)/t².\n\nThis can be tighter than E(X)/t because E(X²) folds in the spread of the distribution, not just its center — a distribution with the same mean but less spread gives a smaller E(X²), and therefore a tighter tail bound. This is the same trick that leads to Chebyshev's inequality.",
          },
          {
            q: "Closed form for the sum of consecutive integers 1+2+3+...+k = ?",
            choices: ["k(k+1)/2", "k²/2", "k(k−1)/2", "(k+1)²/2"],
            correct: 0,
            a: "1+2+3+...+k = k(k+1)/2 — Gauss's trick, after the story of young Gauss pairing off terms from opposite ends to spot the shortcut.",
          },
          {
            q: "'Teljari' (the top number in a fraction) — what's the English word?",
            choices: ["Numerator", "Denominator", "Divisor", "Quotient"],
            correct: 0,
            a: "Teljari = numerator, the top number. Example: in 3/4, 3 (teljari) is the numerator and 4 (nevnari) is the denominator.",
          },
          {
            q: "'Nevnari' (the bottom number in a fraction) — what's the English word?",
            choices: ["Denominator", "Numerator", "Divisor", "Remainder"],
            correct: 0,
            a: "Nevnari = denominator, the bottom number. Example: in 3/4, 4 (nevnari) is the denominator and 3 (teljari) is the numerator.",
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
let cardStatusByWeek = {};
let orderByWeek = {};
let mixSelectedWeeks = [];
let mixPickerOpen = false;

function weekStatusKey(course, week) {
  return course + ":" + week;
}

function weeksWithContent(course) {
  const weeks = COURSES[course].weeks;
  const list = [];
  for (let w = 1; w <= NUM_WEEKS; w++) {
    const wk = weeks[w];
    if (wk && Array.isArray(wk.flashcards) && wk.flashcards.length) list.push(w);
  }
  return list;
}

function buildMixDeck(course, weekNumbers) {
  const weeks = COURSES[course].weeks;
  let combined = [];
  weekNumbers.forEach((w) => {
    const wk = weeks[w];
    if (wk && Array.isArray(wk.flashcards)) combined = combined.concat(wk.flashcards);
  });
  return combined;
}

function shuffledIndexOrder(length) {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    if (state.course && COURSES[state.course]) activeCourse = state.course;
    if (typeof state.week === "number" && state.week >= 1 && state.week <= NUM_WEEKS) activeWeek = state.week;
    else if (state.week === "mix") activeWeek = "mix";
    if (typeof state.cardIndex === "number" && state.cardIndex >= 0) activeCardIndex = state.cardIndex;
    if (typeof state.collapsed === "boolean") weekNavCollapsed = state.collapsed;
    if (state.cardStatusByWeek && typeof state.cardStatusByWeek === "object") {
      cardStatusByWeek = state.cardStatusByWeek;
    }
    if (state.orderByWeek && typeof state.orderByWeek === "object") {
      orderByWeek = state.orderByWeek;
    }
    if (Array.isArray(state.mixSelectedWeeks)) {
      mixSelectedWeeks = state.mixSelectedWeeks.filter((w) => typeof w === "number" && w >= 1 && w <= NUM_WEEKS);
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
        orderByWeek: orderByWeek,
        mixSelectedWeeks: mixSelectedWeeks,
      })
    );
  } catch (e) {
    // ignore — e.g. private browsing with storage disabled
  }
}

loadState();
if (!COURSES[activeCourse].weekly) activeWeek = 1;

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
    const label = activeWeek === "mix" ? "🔀 Mixed weeks" : "Week " + activeWeek;
    weekPillBtn.textContent = label + " · change week ▾";
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
      mixPickerOpen = false;
      saveState();
      renderCourseTabs();
      renderWeekNav();
      renderContent();
    });
    courseTabsEl.appendChild(btn);
  });
}

function renderWeekNav() {
  if (!COURSES[activeCourse].weekly) {
    weekNavEl.classList.remove("collapsed");
    weekNavEl.innerHTML = "";
    weekPillBtn.hidden = true;
    document.body.classList.remove("week-focused");
    document.body.classList.add("flat-course");
    return;
  }

  document.body.classList.remove("flat-course");
  weekNavEl.classList.toggle("collapsed", weekNavCollapsed && !mixPickerOpen);
  updateWeekPill();

  weekNavEl.innerHTML = "";

  if (mixPickerOpen) {
    renderMixPicker(weekNavEl);
    return;
  }

  const mixBtn = document.createElement("button");
  mixBtn.type = "button";
  mixBtn.className = "week-btn week-mix-btn" + (activeWeek === "mix" ? " active" : "");
  mixBtn.textContent = "🔀 Mix weeks";
  mixBtn.addEventListener("click", () => {
    mixPickerOpen = true;
    weekNavCollapsed = false;
    renderWeekNav();
  });
  weekNavEl.appendChild(mixBtn);

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

function renderMixPicker(container) {
  const available = weeksWithContent(activeCourse);

  const wrap = document.createElement("div");
  wrap.className = "mix-picker";

  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "mix-picker-title";
    empty.textContent = "No flashcards yet to mix.";
    wrap.appendChild(empty);
    container.appendChild(wrap);
    return;
  }

  const title = document.createElement("p");
  title.className = "mix-picker-title";
  title.textContent = "Mix flashcards from which weeks?";
  wrap.appendChild(title);

  const checksWrap = document.createElement("div");
  checksWrap.className = "mix-picker-checks";
  const checkboxes = [];

  available.forEach((w) => {
    const label = document.createElement("label");
    label.className = "mix-picker-check";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = mixSelectedWeeks.length ? mixSelectedWeeks.includes(w) : true;
    checkboxes.push({ w, cb });

    const span = document.createElement("span");
    span.textContent = "Week " + w;

    label.appendChild(cb);
    label.appendChild(span);
    checksWrap.appendChild(label);
  });
  wrap.appendChild(checksWrap);

  const actions = document.createElement("div");
  actions.className = "mix-picker-actions";

  const startBtn = document.createElement("button");
  startBtn.type = "button";
  startBtn.className = "mix-picker-start";
  startBtn.textContent = "🔀 Start random mix";
  startBtn.addEventListener("click", () => {
    const chosen = checkboxes.filter((c) => c.cb.checked).map((c) => c.w);
    if (!chosen.length) return;
    mixSelectedWeeks = chosen;
    activeWeek = "mix";
    activeCardIndex = 0;
    mixPickerOpen = false;
    weekNavCollapsed = true;
    const key = weekStatusKey(activeCourse, "mix");
    const deck = buildMixDeck(activeCourse, mixSelectedWeeks);
    orderByWeek[key] = shuffledIndexOrder(deck.length);
    delete cardStatusByWeek[key];
    saveState();
    renderWeekNav();
    renderContent();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "mix-picker-cancel";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    mixPickerOpen = false;
    renderWeekNav();
  });

  actions.appendChild(startBtn);
  actions.appendChild(cancelBtn);
  wrap.appendChild(actions);

  container.appendChild(wrap);
}

function renderContent() {
  contentEl.innerHTML = "";
  const week =
    activeWeek === "mix"
      ? { flashcards: buildMixDeck(activeCourse, mixSelectedWeeks) }
      : COURSES[activeCourse].weeks[activeWeek];

  if (!week || !week.flashcards || !week.flashcards.length) {
    const empty = document.createElement("p");
    empty.className = "empty-week";
    empty.textContent =
      activeWeek === "mix" ? "No flashcards yet to mix." : "No content yet for Week " + activeWeek + ".";
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

  if (!Array.isArray(orderByWeek[statusKey]) || orderByWeek[statusKey].length !== week.flashcards.length) {
    orderByWeek[statusKey] = week.flashcards.map((_, i) => i);
  }
  let order = orderByWeek[statusKey];

  let stripHasCentered = false;

  function renderMain() {
    mainWrap.innerHTML = "";
    const canonicalIndex = order[activeCardIndex];
    const card = week.flashcards[canonicalIndex];
    const showThinkBadge = !!COURSES[activeCourse].thinkBadge;
    const builtCard =
      card.type === "think"
        ? buildThinkCard(card, cardStatus[canonicalIndex], showThinkBadge, (status) => {
            cardStatus[canonicalIndex] = status;
            saveState();
            renderStrip();
          })
        : buildQuizCard(card, showThinkBadge, (isCorrect) => {
            cardStatus[canonicalIndex] = isCorrect ? "correct" : "wrong";
            saveState();
            renderStrip();
          });
    mainWrap.appendChild(builtCard);
    cardPrevBtn.disabled = activeCardIndex <= 0;
    cardNextBtn.disabled = activeCardIndex >= order.length - 1;
  }

  function renderStrip() {
    strip.innerHTML = "";
    order.forEach((canonicalIndex, i) => {
      const card = week.flashcards[canonicalIndex];
      const mini = document.createElement("button");
      mini.className =
        "flashcard-mini" +
        (i === activeCardIndex ? " active" : "") +
        (cardStatus[canonicalIndex] === "correct" ? " status-correct" : "") +
        (cardStatus[canonicalIndex] === "wrong" ? " status-wrong" : "");
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
        goToCard(i);
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

  function reshuffleOrder() {
    order = shuffledIndexOrder(week.flashcards.length);
    orderByWeek[statusKey] = order;
    activeCardIndex = 0;
    saveState();
    renderMain();
    renderStrip();
  }

  function restoreOriginalOrder() {
    order = week.flashcards.map((_, i) => i);
    orderByWeek[statusKey] = order;
    activeCardIndex = 0;
    saveState();
    renderMain();
    renderStrip();
  }

  const shuffleBtn = document.createElement("button");
  shuffleBtn.type = "button";
  shuffleBtn.className = "strip-arrow shuffle-btn";
  shuffleBtn.textContent = "🔀";
  shuffleBtn.setAttribute("aria-label", "Shuffle card order");
  shuffleBtn.addEventListener("click", reshuffleOrder);

  const resetOrderBtn = document.createElement("button");
  resetOrderBtn.type = "button";
  resetOrderBtn.className = "strip-arrow reset-order-btn";
  resetOrderBtn.textContent = "🔢";
  resetOrderBtn.setAttribute("aria-label", "Restore original order");
  resetOrderBtn.addEventListener("click", restoreOriginalOrder);

  function goToCard(targetIndex) {
    if (targetIndex < 0 || targetIndex >= order.length || targetIndex === activeCardIndex) return;
    const goingNext = targetIndex > activeCardIndex;
    const width = mainWrap.offsetWidth || 300;

    mainWrap.style.transition = "transform 0.2s ease";
    mainWrap.style.transform = "translateX(" + (goingNext ? -width : width) + "px)";

    setTimeout(() => {
      activeCardIndex = targetIndex;
      saveState();

      mainWrap.style.transition = "none";
      mainWrap.style.transform = "translateX(" + (goingNext ? width : -width) + "px)";

      renderMain();
      renderStrip();

      void mainWrap.offsetWidth;

      mainWrap.style.transition = "transform 0.2s ease";
      mainWrap.style.transform = "translateX(0)";
    }, 200);
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
        if (targetIndex >= 0 && targetIndex < order.length) {
          goToCard(targetIndex);
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

  stripRow.appendChild(shuffleBtn);
  stripRow.appendChild(strip);
  stripRow.appendChild(resetOrderBtn);

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

function createFlipButton(cardEl) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "flip-toggle-btn";
  btn.textContent = "⇄";
  btn.setAttribute("aria-label", "Flip card to see the other side");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    cardEl.classList.toggle("flipped");
  });
  return btn;
}

const WEEK1_NODE_POS = {
  A: [60, 105],
  B: [60, 40],
  C: [130, 72],
  D: [200, 105],
  E: [260, 72],
  F: [300, 105],
};

const WEEK1_EDGES = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["D", "E"],
  ["E", "F"],
];

const WEEK3_CHAIN_NODE_POS = {
  1: [30, 70],
  2: [90, 35],
  3: [90, 105],
  4: [150, 70],
  5: [210, 70],
  6: [270, 35],
  7: [270, 105],
  8: [330, 105],
};

const WEEK3_CHAIN_EDGES = [
  ["1", "2"],
  ["1", "3"],
  ["2", "4"],
  ["3", "4"],
  ["4", "5"],
  ["5", "6"],
  ["5", "7"],
  ["7", "8"],
];

const GRAPH_LAYOUTS = {
  week1: { nodePos: WEEK1_NODE_POS, edges: WEEK1_EDGES, viewBox: "0 0 320 140" },
  week3chain: { nodePos: WEEK3_CHAIN_NODE_POS, edges: WEEK3_CHAIN_EDGES, viewBox: "0 0 360 140" },
};

function buildNetworkDiagram({ directed = false, triangles = [], cutNode = null, graph = "week1" } = {}) {
  const R = 15;
  const { nodePos, edges, viewBox } = GRAPH_LAYOUTS[graph];
  const triangleColors = ["rgba(204,31,122,0.22)", "rgba(109,127,224,0.24)"];

  const triangleMarkup = triangles
    .map((tri, i) => {
      const pts = tri.map((n) => nodePos[n].join(",")).join(" ");
      return '<polygon points="' + pts + '" fill="' + triangleColors[i % triangleColors.length] + '" />';
    })
    .join("");

  const edgeMarkup = edges.map(([from, to]) => {
    const [x1, y1] = nodePos[from];
    let [x2, y2] = nodePos[to];
    let markerAttr = "";
    if (directed) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const shorten = R + 6;
      x2 = x2 - (dx / dist) * shorten;
      y2 = y2 - (dy / dist) * shorten;
      markerAttr = ' marker-end="url(#arrowhead)"';
    }
    return (
      '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) +
      '" stroke="#9384ab" stroke-width="2"' + markerAttr + " />"
    );
  }).join("");

  const nodeMarkup = Object.entries(nodePos)
    .map(([label, [x, y]]) => {
      const isCut = label === cutNode;
      const fill = isCut ? "#cc1f7a" : "#6d7fe0";
      const ring = isCut
        ? '<circle cx="' + x + '" cy="' + y + '" r="' + (R + 5) +
          '" fill="none" stroke="#cc1f7a" stroke-width="2" stroke-dasharray="4 3" />'
        : "";
      return (
        ring +
        '<circle cx="' + x + '" cy="' + y + '" r="' + R + '" fill="' + fill + '" />' +
        '<text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">' +
        label +
        "</text>"
      );
    })
    .join("");

  const defs = directed
    ? '<defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">' +
      '<path d="M0,0 L8,4 L0,8 Z" fill="#9384ab" /></marker></defs>'
    : "";

  const label = directed
    ? "Directed diagram of the network, arrows show direction"
    : "Diagram of the network";

  return (
    '<svg viewBox="' + viewBox + '" role="img" aria-label="' + label + '">' +
    defs +
    triangleMarkup +
    edgeMarkup +
    nodeMarkup +
    "</svg>"
  );
}

function buildQuizCard(cardData, showThinkBadge, onFirstAttempt) {
  const card = document.createElement("div");
  card.className = "flashcard flashcard-main";

  const inner = document.createElement("div");
  inner.className = "flashcard-inner";

  card.appendChild(createFlipButton(card));
  if (cardData.think && showThinkBadge) {
    card.appendChild(makeThinkBadge());
  }

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

  const backQuestion = document.createElement("p");
  backQuestion.className = "flashcard-back-question";
  backQuestion.textContent = cardData.q;

  const resultLine = document.createElement("p");
  resultLine.className = "flashcard-result";
  const explanation = document.createElement("p");
  explanation.className = "flashcard-explanation";
  explanation.textContent = cardData.a;
  back.appendChild(backQuestion);
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

function makeThinkBadge() {
  const badge = document.createElement("span");
  badge.className = "think-badge";
  badge.textContent = "🧠";
  badge.setAttribute("role", "img");
  badge.setAttribute("aria-label", "Think question");
  return badge;
}

function buildThinkCard(cardData, initialStatus, showThinkBadge, onSelfAssess) {
  const card = document.createElement("div");
  card.className = "flashcard flashcard-main flashcard-think";

  const inner = document.createElement("div");
  inner.className = "flashcard-inner";

  card.appendChild(createFlipButton(card));
  if (showThinkBadge) {
    card.appendChild(makeThinkBadge());
  }

  const front = document.createElement("div");
  front.className = "flashcard-face flashcard-front flashcard-quiz-front flashcard-think-front";

  const question = document.createElement("p");
  question.className = "flashcard-question";
  question.textContent = cardData.q;
  front.appendChild(question);

  const revealBtn = document.createElement("button");
  revealBtn.type = "button";
  revealBtn.className = "reveal-choices-btn";
  revealBtn.textContent = "Think about it, then reveal ↓";
  revealBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    card.classList.add("flipped");
  });
  front.appendChild(revealBtn);

  const back = document.createElement("div");
  back.className = "flashcard-face flashcard-back flashcard-think-back";

  const backQuestion = document.createElement("p");
  backQuestion.className = "flashcard-back-question";
  backQuestion.textContent = cardData.q;
  back.appendChild(backQuestion);

  if (cardData.diagram) {
    const diagramWrap = document.createElement("div");
    diagramWrap.className = "flashcard-diagram";
    diagramWrap.innerHTML = cardData.diagram.svg ? cardData.diagram.svg : buildNetworkDiagram(cardData.diagram);
    back.appendChild(diagramWrap);
  }

  const explanation = document.createElement("p");
  explanation.className = "flashcard-explanation flashcard-think-answer";
  explanation.textContent = cardData.a;
  back.appendChild(explanation);

  const assessRow = document.createElement("div");
  assessRow.className = "think-assess-row";

  const gotItBtn = document.createElement("button");
  gotItBtn.type = "button";
  gotItBtn.className = "think-assess-btn think-assess-good";
  gotItBtn.textContent = "✅ Got it";

  const laterBtn = document.createElement("button");
  laterBtn.type = "button";
  laterBtn.className = "think-assess-btn think-assess-later";
  laterBtn.textContent = "🕓 Come back later";

  function setAssessed(status) {
    gotItBtn.classList.toggle("selected", status === "correct");
    laterBtn.classList.toggle("selected", status === "wrong");
  }

  gotItBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setAssessed("correct");
    if (onSelfAssess) onSelfAssess("correct");
  });
  laterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setAssessed("wrong");
    if (onSelfAssess) onSelfAssess("wrong");
  });

  setAssessed(initialStatus);

  assessRow.appendChild(gotItBtn);
  assessRow.appendChild(laterBtn);
  back.appendChild(assessRow);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  return card;
}
