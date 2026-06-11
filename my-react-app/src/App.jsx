import { useState } from "react";

const roles = {
  de: {
    id: "de",
    title: "Data Engineer",
    emoji: "⚙️",
    verdict: "HIGHEST DEMAND IN 2026",
    verdictColor: "#00e5a0",
    tagline: "The backbone of all data work. Without pipelines, no AI, no dashboards, nothing works.",
    salaryEntry: "$70K–$95K",
    salaryMid: "$118K–$149K",
    salarySenior: "$147K–$179K",
    growth: "18% CAGR through 2030",
    demandScore: 96,
    entryDifficulty: 7,
    saturation: 3,
    aiRisk: 2,
    jobOpenings: "~150K+ globally (2026)",
    honest: [
      "Highest salary ceiling among all listed roles",
      "AI boom INCREASED demand — pipelines needed to feed LLMs",
      "Less glamorous than 'Data Scientist' but far more hireable right now",
      "Most companies can't function without DE; it's infrastructure-level critical",
      "Entry is harder than DA — needs coding + cloud + SQL + distributed systems",
      "India market: ₹8–18 LPA entry, ₹30–60 LPA mid-senior (Bengaluru/Hyderabad)",
    ],
    roadmap: [
      { phase: "Phase 1 (0–3 months)", title: "Foundations", items: ["Python basics (pandas, NumPy, file I/O)", "SQL — JOINs, window functions, CTEs, indexing", "Linux basics + command line", "Git & GitHub"] },
      { phase: "Phase 2 (3–6 months)", title: "Core Engineering", items: ["ETL/ELT concepts", "Apache Spark (PySpark)", "Apache Airflow (workflow orchestration)", "Data warehouse: Snowflake or BigQuery or Redshift"] },
      { phase: "Phase 3 (6–10 months)", title: "Cloud & Modern Stack", items: ["AWS (S3, Glue, Lambda, Redshift) OR GCP (BigQuery, Dataflow)", "dbt (data build tool) — now mandatory in most JDs", "Kafka basics (real-time streaming)", "Docker & basic Kubernetes"] },
      { phase: "Phase 4 (10–14 months)", title: "Advanced & Job-Ready", items: ["Data lakehouse (Delta Lake / Apache Iceberg)", "Data quality (Great Expectations)", "CI/CD for data pipelines", "System design interviews for DE"] },
    ],
    projects: [
      { name: "End-to-End ETL Pipeline", desc: "Scrape public API (e.g. OpenWeather / CoinGecko), transform with Python, load to PostgreSQL, schedule with Airflow. Deploy on AWS EC2.", impact: "HIGH" },
      { name: "Real-Time Streaming Dashboard", desc: "Use Kafka to ingest Twitter/Reddit stream → Spark Streaming → store in BigQuery → visualize in Looker Studio.", impact: "VERY HIGH" },
      { name: "dbt + Snowflake Data Warehouse", desc: "Take raw e-commerce CSV data → model in dbt → build star schema in Snowflake → document lineage.", impact: "HIGH" },
    ],
    tools: ["Python", "SQL", "Spark", "Airflow", "dbt", "Kafka", "AWS/GCP", "Docker", "Snowflake/BigQuery"],
  },
  ds: {
    id: "ds",
    title: "Data Scientist",
    emoji: "🧠",
    verdict: "HIGH CEILING, HIGH BAR",
    verdictColor: "#7c6cf5",
    tagline: "Still extremely valuable but entry-level is now brutal. Mid-senior is thriving.",
    salaryEntry: "$85K–$110K",
    salaryMid: "$138K–$175K",
    salarySenior: "$160K–$200K+",
    growth: "34% through 2034 (BLS)",
    demandScore: 80,
    entryDifficulty: 9,
    saturation: 8,
    aiRisk: 5,
    jobOpenings: "~23,400 openings/yr (US)",
    honest: [
      "Highest average salary ($160K–$200K senior)",
      "Entry-level is SATURATED — bootcamp graduates flooded the market 2021–2024",
      "AI tools (ChatGPT, AutoML) are replacing junior DS tasks — barrier raised",
      "Pure DS roles are merging with ML Engineer and AI Engineer roles",
      "70% of job posts now want cloud + DE skills alongside ML — it's not just Jupyter notebooks",
      "India market: ₹10–20 LPA entry, ₹35–80 LPA senior (harder to get without top college/portfolio)",
    ],
    roadmap: [
      { phase: "Phase 1 (0–3 months)", title: "Math & Python", items: ["Python (pandas, NumPy, matplotlib, seaborn)", "Statistics: distributions, hypothesis testing, p-values", "Linear algebra basics (vectors, matrices)", "Probability & Bayes theorem"] },
      { phase: "Phase 2 (3–6 months)", title: "Machine Learning Core", items: ["Scikit-learn: regression, classification, clustering", "Feature engineering & selection", "Model evaluation metrics (ROC, AUC, F1)", "SQL for data extraction"] },
      { phase: "Phase 3 (6–10 months)", title: "Deep Learning & NLP", items: ["TensorFlow or PyTorch fundamentals", "CNNs (image), RNNs/LSTMs (sequence)", "NLP: transformers, BERT, fine-tuning LLMs (HuggingFace)", "MLflow for experiment tracking"] },
      { phase: "Phase 4 (10–14 months)", title: "Deployment & Modern DS", items: ["FastAPI / Flask model serving", "Docker for model containerization", "AWS SageMaker or GCP Vertex AI", "LLM fine-tuning, RAG (Retrieval Augmented Generation) — THIS IS 2026's demand"] },
    ],
    projects: [
      { name: "End-to-End ML Project with Deployment", desc: "Train churn prediction model on telecom dataset → FastAPI endpoint → Dockerize → deploy on AWS/Render. Include model explainability (SHAP).", impact: "VERY HIGH" },
      { name: "LLM / RAG Application", desc: "Build a document Q&A chatbot using LangChain + OpenAI/Llama → vector DB (Chroma/Pinecone) → Streamlit UI. This is what 2026 DS interviews test.", impact: "CRITICAL" },
      { name: "Kaggle Competition (Top 10%)", desc: "Public proof of ML skills. Go for structured data comps. Document your EDA + feature engineering + ensemble approach in a detailed notebook.", impact: "HIGH" },
    ],
    tools: ["Python", "Scikit-learn", "PyTorch/TF", "HuggingFace", "MLflow", "SQL", "Spark", "FastAPI", "Docker", "LangChain"],
  },
  da: {
    id: "da",
    title: "Data Analyst",
    emoji: "📊",
    verdict: "EASIEST ENTRY, SATURATED MARKET",
    verdictColor: "#f5a623",
    tagline: "Best starting point. But don't plan to stay here — pivot up within 2 years.",
    salaryEntry: "$55K–$75K",
    salaryMid: "$95K–$117K",
    salarySenior: "$119K–$149K",
    growth: "23% through 2032",
    demandScore: 65,
    entryDifficulty: 4,
    saturation: 9,
    aiRisk: 7,
    jobOpenings: "High volume, high competition",
    honest: [
      "Easiest to break into — no CS degree hard requirement",
      "BUT it's also the most flooded role — thousands of applicants per job post",
      "AI tools (Copilot, ChatGPT, AutoBI) are automating basic DA tasks rapidly",
      "Salary ceiling is noticeably lower than DE or DS",
      "Strong pivot path: DA → DE (add pipelines) or DA → DS (add ML) within 1–2 yrs",
      "India market: ₹3.5–7 LPA entry, ₹12–25 LPA mid (not great unless domain-specialized)",
    ],
    roadmap: [
      { phase: "Phase 1 (0–2 months)", title: "Core Tools", items: ["Excel / Google Sheets (advanced formulas, pivot tables)", "SQL — SELECT, GROUP BY, JOINs, subqueries", "Python basics (pandas for data cleaning)", "Basic statistics (mean, median, variance, correlation)"] },
      { phase: "Phase 2 (2–5 months)", title: "Visualization", items: ["Tableau (get Tableau Public profile)", "Power BI (most in-demand in India/enterprise)", "Python: matplotlib, seaborn, plotly", "Dashboard design principles"] },
      { phase: "Phase 3 (5–8 months)", title: "Business Context", items: ["A/B testing & experimentation basics", "Business metrics (CAC, LTV, churn, MRR)", "Advanced SQL: window functions, CTEs", "Google Analytics / GA4"] },
      { phase: "Phase 4 (8–12 months)", title: "Specialization (Pick One)", items: ["Finance Analyst track: Excel modeling, financial ratios", "Product Analyst track: funnel analysis, cohort analysis", "Marketing Analyst track: campaign attribution, SEO data", "Start learning Python/ML to pivot toward DS"] },
    ],
    projects: [
      { name: "Full Dashboard Project", desc: "Take a real dataset (e.g. Superstore, COVID, or Spotify data) → clean in Python → build 5-page interactive dashboard in Tableau/Power BI with business recommendations.", impact: "HIGH" },
      { name: "SQL + Business Case Analysis", desc: "Use public e-commerce DB (e.g. Olist on Kaggle) → write 15+ SQL queries → present findings as a business report. Shows SQL + communication skills.", impact: "HIGH" },
      { name: "A/B Test Analysis", desc: "Take a public A/B test dataset → perform statistical significance tests → write a product decision memo. Rare skill among junior analysts.", impact: "HIGH" },
    ],
    tools: ["SQL", "Excel", "Power BI", "Tableau", "Python (pandas)", "Google Analytics", "Looker", "Statistics"],
  },
  ba: {
    id: "ba",
    title: "Business Analyst",
    emoji: "💼",
    verdict: "STABLE BUT LIMITED TECH CEILING",
    verdictColor: "#e06c75",
    tagline: "Great for non-tech backgrounds. BUT pay ceiling is lower and AI is eating the repetitive parts.",
    salaryEntry: "$55K–$70K",
    salaryMid: "$80K–$105K",
    salarySenior: "$105K–$130K",
    growth: "11% through 2032 (BLS)",
    demandScore: 55,
    entryDifficulty: 3,
    saturation: 8,
    aiRisk: 8,
    jobOpenings: "High volume, moderate competition",
    honest: [
      "Lowest technical barrier — most accessible for non-CS graduates",
      "Pay is noticeably lower than DE/DS/even DA in tech companies",
      "Heavy reliance on communication, stakeholder management, JIRA, Confluence",
      "AI is automating requirements documentation, user story writing, meeting summaries",
      "Strong in consulting (Accenture, Deloitte, TCS) and banking/insurance domains",
      "India: ₹3–6 LPA entry, ₹10–20 LPA mid — fine for MBA grads, not for CS grads",
    ],
    roadmap: [
      { phase: "Phase 1 (0–2 months)", title: "BA Fundamentals", items: ["Business process modeling (BPMN)", "Requirements elicitation techniques", "Excel & PowerPoint (still critical)", "JIRA + Confluence basics"] },
      { phase: "Phase 2 (2–5 months)", title: "Analysis Skills", items: ["SQL for data queries", "Power BI or Tableau basics", "Agile/Scrum methodology", "User story writing, use cases, wireframes"] },
      { phase: "Phase 3 (5–9 months)", title: "Domain Knowledge", items: ["Pick a domain: Finance, Healthcare, Supply Chain, or IT", "Process improvement (Six Sigma basics)", "Stakeholder management", "Presentation & communication skills"] },
      { phase: "Phase 4 (9–12 months)", title: "Certifications", items: ["CBAP (Certified Business Analysis Professional)", "PMI-PBA (entry)", "IIBA certification (valued globally)", "Agile BA or SAFe certification"] },
    ],
    projects: [
      { name: "Business Process Improvement Case Study", desc: "Take a real-world business scenario → document AS-IS process → identify gaps → design TO-BE process with BPMN → write BRD (Business Requirements Document).", impact: "HIGH" },
      { name: "Stakeholder Analysis + Dashboard", desc: "For any business problem, create stakeholder map, requirements matrix, and a Power BI dashboard showing KPIs. Shows full BA workflow.", impact: "HIGH" },
      { name: "Agile Sprint Simulation", desc: "Create a fake product backlog → write user stories with acceptance criteria → prioritize by value/effort → simulate 2-week sprint planning. Document in JIRA.", impact: "MEDIUM" },
    ],
    tools: ["Excel", "JIRA", "Confluence", "SQL", "Power BI", "Visio/Lucidchart", "Figma (wireframes)", "MS Teams"],
  },
  dba: {
    id: "dba",
    title: "Database Admin (DBA)",
    emoji: "🗄️",
    verdict: "DECLINING TRADITIONAL ROLE",
    verdictColor: "#888",
    tagline: "Being absorbed by cloud engineers and DevOps. Traditional DBA is shrinking fast.",
    salaryEntry: "$60K–$80K",
    salaryMid: "$95K–$120K",
    salarySenior: "$120K–$150K",
    growth: "8% (below average)",
    demandScore: 35,
    entryDifficulty: 5,
    saturation: 6,
    aiRisk: 9,
    jobOpenings: "Declining — AWS RDS, managed DBs replacing manual DBA work",
    honest: [
      "Traditional DBA role is being eaten by cloud-managed databases (AWS RDS, Aurora, Google Cloud SQL)",
      "Companies don't need 5 DBAs when AWS handles backup, scaling, patching automatically",
      "If you must go this route, pivot to Cloud Database Engineer or DataOps Engineer",
      "Oracle/SQL Server DBAs still employed in legacy enterprise (banking, government)",
      "Not recommended as a primary career target for freshers in 2026",
    ],
    roadmap: [
      { phase: "Phase 1", title: "SQL Mastery", items: ["PostgreSQL / MySQL / Oracle SQL", "Performance tuning & query optimization", "Indexing strategies, execution plans"] },
      { phase: "Phase 2", title: "Administration", items: ["Backup & recovery strategies", "User management & security", "Replication & high availability"] },
      { phase: "Phase 3", title: "Cloud (Mandatory Pivot)", items: ["AWS RDS, DynamoDB, Aurora", "Azure SQL, Cosmos DB", "Terraform for DB infra provisioning"] },
    ],
    projects: [
      { name: "Database Performance Tuning Project", desc: "Take slow queries on a public dataset → profile with EXPLAIN ANALYZE → optimize with indexes, partitioning, materialized views → document before/after metrics.", impact: "MEDIUM" },
    ],
    tools: ["PostgreSQL", "Oracle", "MySQL", "AWS RDS", "MongoDB", "Redis", "Terraform", "Performance Schema"],
  },
};

const overallVerdict = {
  rank1: { role: "Data Engineer", why: "Highest demand + AI boom increased need for pipelines. Best salary/effort ratio. Future-proof as AI infrastructure expands.", color: "#00e5a0" },
  rank2: { role: "Data Scientist (AI/ML focused)", why: "Highest ceiling salary but harder to break in as a fresher. Entry now requires LLM/RAG skills, not just scikit-learn.", color: "#7c6cf5" },
  rank3: { role: "Data Analyst", why: "Best starting point for complete beginners. Plan to upskill within 18 months. Don't treat it as final destination.", color: "#f5a623" },
  rank4: { role: "Business Analyst", why: "Good for non-tech, MBA, or domain experts. Limited tech growth ceiling. Stable in consulting/banking.", color: "#e06c75" },
  rank5: { role: "Traditional DBA", why: "Avoid as fresh career target. Pivot toward Cloud DB or Data Engineering instead.", color: "#888" },
};

function ScoreBar({ score, color, label }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 11, color: "#aaa", fontFamily: "monospace" }}>{label}</span>
        <span style={{ fontSize: 11, color, fontFamily: "monospace", fontWeight: 700 }}>{score}/10</span>
      </div>
      <div style={{ background: "#1e2030", borderRadius: 4, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${score * 10}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
      </div>
    </div>
  );
}

function RoleCard({ role, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? role.verdictColor + "18" : "#0d0f1a",
        border: `1.5px solid ${active ? role.verdictColor : "#1e2030"}`,
        borderRadius: 12,
        padding: "12px 16px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.2s ease",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 4 }}>{role.emoji}</div>
      <div style={{ color: active ? role.verdictColor : "#e0e0e0", fontWeight: 700, fontSize: 13, fontFamily: "monospace" }}>
        {role.title}
      </div>
      <div style={{ color: active ? role.verdictColor : "#666", fontSize: 10, fontFamily: "monospace", marginTop: 2 }}>
        {role.verdict}
      </div>
    </button>
  );
}

export default function App() {
  const [activeRole, setActiveRole] = useState("de");
  const [activeTab, setActiveTab] = useState("overview");
  const role = roles[activeRole];

  const tabs = ["overview", "roadmap", "projects", "compare"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080a14",
      color: "#e0e0e0",
      fontFamily: "'Courier New', monospace",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d0f1a 0%, #111428 100%)",
        borderBottom: "1px solid #1e2030",
        padding: "28px 24px 20px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e5a0", boxShadow: "0 0 8px #00e5a0" }} />
            <span style={{ color: "#00e5a0", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>2026 Report · No Sugar Coating</span>
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(20px, 4vw, 32px)", fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
            DATA CAREERS:<br />
            <span style={{ color: "#00e5a0" }}>THE HONEST COMPARISON</span>
          </h1>
          <p style={{ color: "#888", fontSize: 12, marginTop: 8, marginBottom: 0 }}>
            Statistics-backed · Salary data · Roadmaps · Real projects · India + Global
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px" }}>

        {/* VERDICT BOX */}
        <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 12, padding: 20, marginBottom: 20 }}>
          <div style={{ color: "#00e5a0", fontSize: 11, letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>⚡ Bottom Line Ranking (2026)</div>
          {Object.entries(overallVerdict).map(([key, v], i) => (
            <div key={key} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{
                minWidth: 26, height: 26, borderRadius: 6, background: v.color + "22",
                border: `1px solid ${v.color}`, display: "flex", alignItems: "center", justifyContent: "center",
                color: v.color, fontWeight: 900, fontSize: 12
              }}>#{i + 1}</div>
              <div>
                <div style={{ color: v.color, fontWeight: 700, fontSize: 13 }}>{v.role}</div>
                <div style={{ color: "#888", fontSize: 11, marginTop: 2, lineHeight: 1.5 }}>{v.why}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Role Selector */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, marginBottom: 20 }}>
          {Object.values(roles).map(r => (
            <RoleCard key={r.id} role={r} active={activeRole === r.id} onClick={() => { setActiveRole(r.id); setActiveTab("overview"); }} />
          ))}
        </div>

        {/* Tab Nav */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? role.verdictColor : "#0d0f1a",
                color: activeTab === tab ? "#000" : "#888",
                border: `1px solid ${activeTab === tab ? role.verdictColor : "#1e2030"}`,
                borderRadius: 8,
                padding: "6px 14px",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "monospace",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: role.verdictColor + "12", border: `1px solid ${role.verdictColor}44`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 28 }}>{role.emoji}</span>
                <div>
                  <div style={{ color: role.verdictColor, fontWeight: 900, fontSize: 16 }}>{role.title}</div>
                  <div style={{ color: role.verdictColor, fontSize: 10, opacity: 0.8, letterSpacing: 2 }}>{role.verdict}</div>
                </div>
              </div>
              <p style={{ color: "#ccc", fontSize: 12, margin: 0, lineHeight: 1.6 }}>{role.tagline}</p>
            </div>

            {/* Salary Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
              {[["Entry Level", role.salaryEntry, "0–2 yrs"], ["Mid Level", role.salaryMid, "3–6 yrs"], ["Senior", role.salarySenior, "6+ yrs"]].map(([label, val, exp]) => (
                <div key={label} style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 12, textAlign: "center" }}>
                  <div style={{ color: "#555", fontSize: 10, marginBottom: 4 }}>{label}</div>
                  <div style={{ color: role.verdictColor, fontWeight: 900, fontSize: "clamp(11px, 2.5vw, 14px)" }}>{val}</div>
                  <div style={{ color: "#444", fontSize: 9, marginTop: 2 }}>{exp}</div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 12 }}>
                <div style={{ color: "#555", fontSize: 10, marginBottom: 6 }}>MARKET SCORES</div>
                <ScoreBar score={role.demandScore / 10} color={role.verdictColor} label="Job Demand" />
                <ScoreBar score={role.entryDifficulty} color="#f5a623" label="Entry Difficulty" />
                <ScoreBar score={role.saturation} color="#e06c75" label="Market Saturation" />
                <ScoreBar score={role.aiRisk} color="#888" label="AI Replacement Risk" />
              </div>
              <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 12 }}>
                <div style={{ color: "#555", fontSize: 10, marginBottom: 8 }}>KEY STATS</div>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ color: "#555", fontSize: 10 }}>GROWTH RATE</div>
                  <div style={{ color: role.verdictColor, fontWeight: 700, fontSize: 12 }}>{role.growth}</div>
                </div>
                <div>
                  <div style={{ color: "#555", fontSize: 10 }}>JOB OPENINGS</div>
                  <div style={{ color: "#ccc", fontSize: 11, lineHeight: 1.4 }}>{role.jobOpenings}</div>
                </div>
              </div>
            </div>

            {/* Honest Notes */}
            <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14, marginBottom: 16 }}>
              <div style={{ color: "#f5a623", fontSize: 10, letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>⚠ Honest Assessment</div>
              {role.honest.map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                  <span style={{ color: role.verdictColor, fontSize: 12, marginTop: 1 }}>›</span>
                  <span style={{ color: "#bbb", fontSize: 12, lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Core Tools */}
            <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14 }}>
              <div style={{ color: "#555", fontSize: 10, letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>Core Tools & Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {role.tools.map(tool => (
                  <span key={tool} style={{
                    background: role.verdictColor + "15",
                    border: `1px solid ${role.verdictColor}33`,
                    color: role.verdictColor,
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 11,
                    fontFamily: "monospace"
                  }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ROADMAP TAB */}
        {activeTab === "roadmap" && (
          <div>
            <div style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: 1 }}>
              SCRATCH → JOB-READY · {role.title.toUpperCase()}
            </div>
            {role.roadmap.map((phase, i) => (
              <div key={i} style={{ marginBottom: 16, position: "relative", paddingLeft: 20 }}>
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: 2, background: i === role.roadmap.length - 1 ? "transparent" : `${role.verdictColor}44`,
                }} />
                <div style={{
                  position: "absolute", left: -5, top: 4,
                  width: 12, height: 12, borderRadius: "50%",
                  background: role.verdictColor, boxShadow: `0 0 8px ${role.verdictColor}`
                }} />
                <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14 }}>
                  <div style={{ color: "#555", fontSize: 10, marginBottom: 2 }}>{phase.phase}</div>
                  <div style={{ color: role.verdictColor, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{phase.title}</div>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                      <span style={{ color: role.verdictColor, fontSize: 10, marginTop: 3 }}>▸</span>
                      <span style={{ color: "#bbb", fontSize: 12, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ background: "#0a1a12", border: "1px solid #00e5a044", borderRadius: 10, padding: 14, marginTop: 4 }}>
              <div style={{ color: "#00e5a0", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>⚡ Total Timeline: 12–16 months to first job (consistent daily 2–3 hr effort)</div>
              <div style={{ color: "#888", fontSize: 11, lineHeight: 1.6 }}>
                This assumes: No prior experience → disciplined learning → building projects simultaneously → active job applications from month 10 onward. Do NOT wait to "finish learning" before applying.
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div>
            <div style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: 1 }}>
              PORTFOLIO PROJECTS · FRESHER JOB STRATEGY
            </div>
            <div style={{ background: "#0a1420", border: "1px solid #7c6cf544", borderRadius: 10, padding: 12, marginBottom: 16 }}>
              <div style={{ color: "#7c6cf5", fontSize: 11, fontWeight: 700, marginBottom: 4 }}>Why projects &gt; certifications for freshers</div>
              <div style={{ color: "#888", fontSize: 11, lineHeight: 1.6 }}>
                Recruiters spend 20 seconds on a fresher resume. A deployed project link on GitHub/Render beats 5 Udemy certificates every single time. Build things people can click and see.
              </div>
            </div>
            {role.projects.map((proj, i) => (
              <div key={i} style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ color: role.verdictColor, fontWeight: 700, fontSize: 13 }}>Project {i + 1}: {proj.name}</div>
                  <span style={{
                    background: proj.impact === "CRITICAL" ? "#e06c75" : proj.impact === "VERY HIGH" ? "#00e5a0" : proj.impact === "HIGH" ? "#f5a623" : "#555",
                    color: "#000",
                    fontSize: 9,
                    fontWeight: 900,
                    padding: "2px 7px",
                    borderRadius: 4,
                    letterSpacing: 1,
                    whiteSpace: "nowrap"
                  }}>{proj.impact}</span>
                </div>
                <div style={{ color: "#aaa", fontSize: 12, lineHeight: 1.6 }}>{proj.desc}</div>
              </div>
            ))}
            <div style={{ background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14 }}>
              <div style={{ color: "#f5a623", fontSize: 11, fontWeight: 700, marginBottom: 8 }}>📌 How to Present Projects</div>
              {[
                "GitHub: Clean README with problem statement, architecture diagram, screenshots",
                "Deploy it live (Render free tier, Streamlit Cloud, AWS free tier) — interactive > static",
                "Document your thought process, not just the code",
                "Include a 2-min Loom video walkthrough — very few freshers do this, instant differentiator",
                "LinkedIn post about each project with technical learnings — builds visibility",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#f5a623" }}>›</span>
                  <span style={{ color: "#bbb", fontSize: 12, lineHeight: 1.5 }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPARE TAB */}
        {activeTab === "compare" && (
          <div>
            <div style={{ color: "#555", fontSize: 11, marginBottom: 16, letterSpacing: 1 }}>
              SIDE-BY-SIDE COMPARISON · ALL ROLES
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, minWidth: 600 }}>
                <thead>
                  <tr>
                    <th style={{ background: "#0d0f1a", padding: "10px 12px", textAlign: "left", color: "#555", borderBottom: "1px solid #1e2030", fontFamily: "monospace" }}>Metric</th>
                    {Object.values(roles).map(r => (
                      <th key={r.id} style={{ background: "#0d0f1a", padding: "10px 8px", textAlign: "center", color: r.verdictColor, borderBottom: "1px solid #1e2030", fontFamily: "monospace", fontSize: 10 }}>
                        {r.emoji} {r.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Entry Salary (US)", vals: ["$70–95K", "$85–110K", "$55–75K", "$55–70K", "$60–80K"] },
                    { label: "Senior Salary (US)", vals: ["$147–179K", "$160–200K+", "$119–149K", "$105–130K", "$120–150K"] },
                    { label: "Entry Salary (India)", vals: ["₹8–18 LPA", "₹10–20 LPA", "₹3.5–7 LPA", "₹3–6 LPA", "₹4–8 LPA"] },
                    { label: "Job Demand (2026)", vals: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐", "⭐⭐"] },
                    { label: "Entry Difficulty", vals: ["High", "Very High", "Low", "Very Low", "Medium"] },
                    { label: "Market Saturation", vals: ["Low", "Medium", "Very High", "High", "Medium"] },
                    { label: "AI Replacement Risk", vals: ["Low", "Medium", "High", "Very High", "Very High"] },
                    { label: "Growth Rate", vals: ["18% CAGR", "34% by 2034", "23% by 2032", "11% by 2032", "~8%"] },
                    { label: "Fresher Hireable?", vals: ["Yes (hard)", "Harder", "Yes (easy)", "Yes (easiest)", "Moderate"] },
                    { label: "Future-Proof?", vals: ["✅ Very", "✅ Yes", "⚠️ Pivot up", "⚠️ Limited", "❌ Declining"] },
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#080a14" : "#0a0c18" }}>
                      <td style={{ padding: "9px 12px", color: "#888", borderBottom: "1px solid #1a1c28" }}>{row.label}</td>
                      {row.vals.map((val, j) => (
                        <td key={j} style={{ padding: "9px 8px", textAlign: "center", color: "#ccc", borderBottom: "1px solid #1a1c28" }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 20, background: "#0a1a12", border: "1px solid #00e5a044", borderRadius: 10, padding: 16 }}>
              <div style={{ color: "#00e5a0", fontWeight: 700, fontSize: 13, marginBottom: 10 }}>🎯 Final Recommendation for Freshers (2026)</div>
              {[
                { title: "If you have coding background:", rec: "Start with Data Engineering. It's the highest ROI path right now. Learn Python + SQL + Airflow + cloud." },
                { title: "If you want AI/ML path:", rec: "Data Scientist track but you MUST add LLM/RAG/MLOps skills. Pure ML with scikit-learn is no longer enough in 2026." },
                { title: "If you're completely new to tech:", rec: "Start as Data Analyst (3–6 months learning), build 2–3 solid projects, then pivot to DE or DS within 18 months." },
                { title: "If you're from non-tech background (MBA/Commerce):", rec: "Business Analyst is your fastest entry. Add SQL + Power BI + domain expertise to differentiate." },
                { title: "DBA?", rec: "Don't target this as a fresh career unless you're going into legacy enterprise (banking, gov). Learn cloud databases within DE instead." },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <div style={{ color: "#f5a623", fontSize: 11, fontWeight: 700 }}>{item.title}</div>
                  <div style={{ color: "#aaa", fontSize: 12, marginTop: 3, lineHeight: 1.5 }}>{item.rec}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12, background: "#0d0f1a", border: "1px solid #1e2030", borderRadius: 10, padding: 14 }}>
              <div style={{ color: "#e06c75", fontSize: 11, fontWeight: 700, marginBottom: 8 }}>❌ Things No One Tells You (But Should)</div>
              {[
                "Certifications alone (AWS, Google, Coursera) don't get you a job. Projects + GitHub do.",
                "The 'Data Scientist' title is becoming a vague catch-all. Ask in interviews: 'Is this more analytics or ML engineering?'",
                "India's market pays 50–70% less than US remote. Upwork/Toptal/remote jobs are the real multiplier.",
                "Job hunting takes 3–6 months minimum even with a strong portfolio. Apply from month 10, not after 'finishing learning'.",
                "LinkedIn profile + cold outreach to hiring managers directly gets more responses than just portal applications.",
                "SQL is the single most important skill across ALL roles listed here. Master it first, always.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                  <span style={{ color: "#e06c75", fontSize: 12 }}>›</span>
                  <span style={{ color: "#bbb", fontSize: 12, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 24, borderTop: "1px solid #1e2030", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#333", fontSize: 10 }}>Sources: BLS, Glassdoor, 365DataScience, Motion Recruitment, WEF 2025 · Data as of 2026</span>
        </div>
      </div>
    </div>
  );
}
