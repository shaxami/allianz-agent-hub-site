const agents = [
  {name:'AI Use Case Discovery & Prioritization Agent', domain:'Strategy', risk:'Medium', purpose:'Finds, scores, and prioritizes AI opportunities across business domains.', capabilities:['Use case intake scoring','ROI and feasibility assessment','Risk-tier classification','Roadmap recommendation'], output:'Prioritized AI opportunity backlog with value/risk/feasibility scoring.'},
  {name:'Enterprise Data Readiness Agent', domain:'Data Foundation', risk:'Medium', purpose:'Assesses whether business domains have AI-ready data foundations.', capabilities:['Data quality scan','Lineage gap detection','Metadata maturity scoring','AI readiness heatmap'], output:'Domain-level AI readiness score and remediation plan.'},
  {name:'Responsible AI Governance Agent', domain:'Governance', risk:'High', purpose:'Controls risk, policy compliance, explainability, fairness, and auditability.', capabilities:['Risk classification','Bias/fairness monitoring','Explainability checks','Audit evidence generation'], output:'Responsible AI control report and approval recommendation.'},
  {name:'AI Portfolio Value Realization Agent', domain:'Value', risk:'Low', purpose:'Tracks measurable business value from AI investments.', capabilities:['ROI tracking','Adoption-to-value correlation','Scale candidate detection','Value leakage alerts'], output:'Executive value dashboard and intervention recommendations.'},
  {name:'AI Delivery Lifecycle Orchestrator Agent', domain:'Delivery', risk:'Medium', purpose:'Coordinates AI delivery from intake through production release.', capabilities:['Workflow routing','Security checkpointing','Model review coordination','Release readiness'], output:'AI SDLC status, blockers, and next-best actions.'},
  {name:'Data Product Intelligence Agent', domain:'Data Products', risk:'Low', purpose:'Manages reusable data products and prevents duplication.', capabilities:['Data product cataloging','Owner mapping','Usage monitoring','SLA tracking'], output:'Certified data product registry and reuse recommendations.'},
  {name:'Enterprise Knowledge Copilot Agent', domain:'Knowledge', risk:'Low', purpose:'Answers internal questions about standards, decisions, assets, and patterns.', capabilities:['Policy Q&A','ADR retrieval','Pattern recommendation','Onboarding guidance'], output:'Contextual answer with links to enterprise standards and decisions.'},
  {name:'AI Adoption & Workforce Transformation Agent', domain:'Adoption', risk:'Low', purpose:'Measures adoption and recommends workforce enablement interventions.', capabilities:['Adoption analytics','Training path recommendation','Sentiment trend analysis','Resistance detection'], output:'Adoption playbook by function and persona.'},
  {name:'Executive AI Decision Intelligence Agent', domain:'Executive', risk:'Medium', purpose:'Provides leadership with portfolio, risk, value, and maturity intelligence.', capabilities:['Steering summaries','Scenario simulation','Risk-adjusted recommendations','Maturity benchmarking'], output:'Executive briefing for AI transformation decisions.'},
  {name:'AI Risk & Shadow AI Detection Agent', domain:'Risk', risk:'High', purpose:'Identifies unapproved AI usage and sensitive-data exposure risk.', capabilities:['Shadow AI detection','Sensitive-data prompt risk','Policy violation alerts','Tool inventory checks'], output:'Risk queue with remediation actions.'},
  {name:'AI Operating Model Optimization Agent', domain:'Operating Model', risk:'Medium', purpose:'Optimizes AI delivery structures, governance friction, and bottlenecks.', capabilities:['Bottleneck analytics','Approval path optimization','Duplication detection','Operating model recommendations'], output:'Operating model improvement plan.'},
  {name:'Enterprise Semantic Layer Agent', domain:'Semantics', risk:'Medium', purpose:'Standardizes business definitions, KPIs, and data meaning across domains.', capabilities:['KPI reconciliation','Business glossary mapping','Metric conflict detection','Semantic contract validation'], output:'Approved semantic definitions and conflict resolution plan.'}
];

const domains = ['Claims','Underwriting','Finance','Operations','Customer','Risk','Legal','HR','IT','Distribution'];
const views = document.querySelectorAll('.view');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => btn.addEventListener('click', () => {
  navBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(btn.dataset.view).classList.add('active');
  document.getElementById('view-title').textContent = btn.textContent;
}));

function renderAgents() {
  const grid = document.getElementById('agentGrid');
  grid.innerHTML = agents.map((a, i) => `
    <article class="agent-card">
      <div class="agent-meta"><span>${a.domain}</span><span>${a.risk} risk</span></div>
      <h4>${a.name}</h4>
      <p>${a.purpose}</p>
      <button onclick="openAgent(${i})">Open agent</button>
    </article>
  `).join('');
}

function openAgent(i) {
  const a = agents[i];
  document.getElementById('modalContent').innerHTML = `
    <p class="eyebrow">${a.domain} Agent</p>
    <h3>${a.name}</h3>
    <p>${a.purpose}</p>
    <h4>Core capabilities</h4>
    <ul>${a.capabilities.map(c => `<li>${c}</li>`).join('')}</ul>
    <h4>Generated output</h4>
    <pre>${a.output}\n\nRecommended next action: assign business owner, validate data source, route through governance checkpoint, and update value realization dashboard.</pre>
  `;
  document.getElementById('agentModal').classList.remove('hidden');
}
function closeModal(){ document.getElementById('agentModal').classList.add('hidden'); }

function refreshHeatmap() {
  const heatmap = document.getElementById('heatmap');
  heatmap.innerHTML = domains.map(d => {
    const score = Math.floor(45 + Math.random()*50);
    const cls = score > 78 ? 'heat-low' : score > 60 ? 'heat-med' : 'heat-high';
    return `<div class="heat-cell ${cls}"><strong>${d}</strong><span>${score}% ready</span></div>`;
  }).join('');
}

function simulateValue() {
  const values = [
    ['Claims AI', 92], ['Data Products', 78], ['Underwriting', 64], ['Copilot Adoption', 57], ['Risk Analytics', 71]
  ];
  document.getElementById('valueChart').innerHTML = values.map(([label,val]) => `
    <div class="bar-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${val}%"></div></div><strong>${val}%</strong></div>
  `).join('');
}

function renderWorkflow() {
  const steps = [
    ['1','Discover','Use Case Agent identifies opportunities and collects intake data.'],
    ['2','Assess','Data Readiness and Semantic Layer Agents validate AI feasibility.'],
    ['3','Govern','Responsible AI and Shadow AI Agents classify risk and controls.'],
    ['4','Deliver','AI SDLC Orchestrator routes architecture, security, model, and release work.'],
    ['5','Scale','Value Realization and Adoption Agents recommend scale decisions.']
  ];
  document.getElementById('workflowSteps').innerHTML = steps.map((s,i) => `
    <div class="step" onclick="selectWorkflow(${i})"><div class="step-number">${s[0]}</div><h4>${s[1]}</h4><p>${s[2]}</p></div>
  `).join('');
}
function selectWorkflow(i) {
  const outputs = [
    'DISCOVER OUTPUT\nTop opportunity: Claims document summarization\nEstimated benefit: 18-25% cycle-time reduction\nFeasibility: High\nRisk tier: Medium',
    'ASSESS OUTPUT\nData readiness: 82%\nLineage: Partial\nQuality gaps: missing claim-status normalization\nRequired remediation: create certified claim event data product',
    'GOVERN OUTPUT\nControls required: human review, explainability note, PII masking, model monitoring\nApproval path: Responsible AI Board + Security Review',
    'DELIVER OUTPUT\nRecommended pattern: RAG + document intelligence + workflow integration\nDelivery path: 8-week MVP, 12-week scale pilot\nKey dependency: claims workflow API',
    'SCALE OUTPUT\nScale recommendation: Proceed with controlled rollout\nExpected annualized value: $3.2M\nAdoption risk: Medium\nNext action: frontline manager enablement plan'
  ];
  document.getElementById('workflowOutput').textContent = outputs[i];
}

function renderGovernance() {
  const risks = [
    ['High','Shadow GenAI tool detected in underwriting research workflow'],
    ['Medium','Claims summarization model missing finalized monitoring plan'],
    ['Medium','Customer analytics use case has incomplete consent mapping'],
    ['Low','Data product SLA documentation pending owner approval']
  ];
  document.getElementById('riskQueue').innerHTML = risks.map(r => `
    <div class="risk-item"><span>${r[1]}</span><span class="badge ${r[0].toLowerCase()}">${r[0]}</span></div>
  `).join('');
  const checks = ['Business owner assigned','Data lineage validated','PII controls applied','Model risk tier assigned','Human-in-loop confirmed','Monitoring plan active','Audit evidence stored'];
  document.getElementById('controlChecklist').innerHTML = checks.map((c,i) => `
    <div class="check-item"><span>${c}</span><span class="badge ${i < 5 ? 'low' : 'medium'}">${i < 5 ? 'Pass' : 'Open'}</span></div>
  `).join('');
}

function botResponse(prompt) {
  const p = prompt.toLowerCase();
  if (p.includes('scale')) return 'Top scale candidates are Claims Document Intelligence, Data Product Certification, and AI Knowledge Copilot. They score high on feasibility, reusable data foundation, and measurable cycle-time impact. Recommended action: fund two scale pilots and one enterprise enablement rollout.';
  if (p.includes('risk') || p.includes('governance')) return 'Highest governance risks are shadow GenAI usage, incomplete consent mapping, and missing model monitoring for medium-risk use cases. Recommended action: route impacted initiatives through Responsible AI review and enforce sensitive-data controls.';
  if (p.includes('ready') || p.includes('readiness')) return 'Lowest AI readiness appears in Legal Operations and Distribution due to fragmented metadata, inconsistent KPI definitions, and limited certified data products. Recommended action: establish domain data product owners and semantic contracts.';
  if (p.includes('summary')) return 'Executive summary: AI enablement is progressing with strong opportunity volume and improving data product maturity. Key concerns are governance throughput, shadow AI risk, and uneven adoption by domain. Recommended leadership decision: prioritize governed scale over additional experimentation.';
  return 'I would evaluate this across value, feasibility, risk, adoption, and data readiness. The relevant agents would coordinate use case prioritization, data assessment, responsible AI review, delivery orchestration, and value tracking.';
}
function addMessage(text, cls) {
  const div = document.createElement('div'); div.className = `message ${cls}`; div.textContent = text;
  document.getElementById('chatMessages').appendChild(div);
  div.scrollIntoView({behavior:'smooth'});
}
function sendPrompt() {
  const input = document.getElementById('userPrompt');
  const text = input.value.trim(); if(!text) return;
  addMessage(text, 'user'); input.value = '';
  setTimeout(() => addMessage(botResponse(text), 'bot'), 250);
}
document.querySelectorAll('.prompt-chips button').forEach(b => b.addEventListener('click', () => { document.getElementById('userPrompt').value = b.dataset.prompt; sendPrompt(); }));

renderAgents(); refreshHeatmap(); simulateValue(); renderWorkflow(); renderGovernance(); addMessage('Welcome. Ask me about AI portfolio, data readiness, governance, adoption, or value realization.', 'bot');
