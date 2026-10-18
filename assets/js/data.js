(function () {
/* =====================================================================
   PORTFOLIO CONTENT — edit this file to update the website.
   Everything you see on the page (roles, projects, skills, links)
   is generated from the objects below. No build step needed —
   just save the file and refresh the page.
   ===================================================================== */

const PROFILE = {
  name: "Kirolos Magdy",
  location: "Alexandria, Egypt",
  email: "kirolosmagdy242@gmail.com",
  phone: "+20 120 766 7431",
  phoneHref: "tel:+201207667431",
  linkedin: "https://linkedin.com/in/kirolos-magdy1",
  github: "https://github.com/kirlosmagdy",
  credly: "https://www.credly.com/earner/earned/badge/5e453185-1de9-4786-86b7-610ea50faebf",
  whatsapp: "https://wa.me/201207667431",
};

/* ---------------------------------------------------------------------
   FREELANCE PROFILES — shown in the Contact section
   --------------------------------------------------------------------- */
const FREELANCE = [
  { name: "Upwork", mark: "Up", note: "Freelance profile", url: "https://www.upwork.com/freelancers/~01ed8bf65fc5e3f4df?mp_source=share" },
  { name: "Freelancer", mark: "Fl", note: "@kirolosmagde", url: "https://www.freelancer.com/u/kirolosmagde?frm=kirolosmagde&sb=t" },
  { name: "Fiverr", mark: "Fi", note: "Gigs & offers", url: "https://www.fiverr.com/s/yeeYvpz" },
  { name: "Mostaql", mark: "مس", note: "مستقل", url: "https://mostaql.com/u/KirlosMagdy" },
  { name: "Khamsat", mark: "خم", note: "خمسات", url: "https://khamsat.com/user/kirlosmagdy" },
];

const GH = "https://github.com/kirlosmagdy/";

/* ---------------------------------------------------------------------
   PROJECT LIBRARY — each project is written once and reused by roles.
   --------------------------------------------------------------------- */
const PROJECTS = {
  dataflow: {
    title: "Automated Dataflow Pipeline",
    tag: "Graduation Project",
    repo: GH + "Automated_Dataflow_Pipeline",
    flow: ["Booking.com + Talabat", "Selenium Grid ×5", "Airflow · Celery · Redis", "Supabase Postgres", "5-table star schema"],
    metric: { value: "10K+", label: "records / run at 99.5% accuracy" },
    stack: ["Airflow 2.9", "CeleryExecutor", "Redis", "Docker Compose", "Selenium Grid", "PostgreSQL"],
    points: [
      "Production-grade weekly ETL pipeline orchestrated by Apache Airflow on Docker Compose.",
      "Scrapes Booking.com and Talabat in parallel with Selenium Grid (up to 5 concurrent sessions).",
      "Loads a 5-table Supabase PostgreSQL star schema with idempotent upserts.",
    ],
  },
  dwh: {
    title: "Modern SQL Data Warehouse",
    tag: "Medallion Architecture",
    repo: GH + "SQL_DataWarehouse_Project",
    flow: ["6 CRM + ERP tables", "Bronze · raw", "Silver · cleansed", "Gold · star schema", "BI views"],
    metric: { value: "6", label: "CRM + ERP sources consolidated" },
    stack: ["SQL Server", "T-SQL", "Stored Procedures", "Star Schema", "SCD Type 2"],
    points: [
      "Bronze → Silver → Gold warehouse with stored-procedure ETL, logging and error handling.",
      "Cleansing via deduplication, standardization and validation rules.",
      "Gold-layer star schema with surrogate keys, SCD Type 2 product dimension and BI reporting views.",
    ],
  },
  dbt: {
    title: "dbt and Snowflake ELT Pipeline",
    tag: "Analytics Engineering",
    repo: GH + "dbt_snowflake_project",
    flow: ["Raw sources", "Snowflake RAW", "dbt staging", "dbt marts", "Tested star schema"],
    metric: { value: "ELT", label: "staging → marts with tests & lineage" },
    stack: ["dbt Core", "Snowflake", "SQL", "Jinja Macros", "Seeds"],
    points: [
      "Loads raw data into Snowflake and transforms it through staging and mart layers.",
      "Star-schema models, reusable macros, seeds and automated data tests.",
      "Generated documentation and end-to-end data lineage.",
    ],
  },
  stadiums: {
    title: "Global Stadiums Azure Data Pipeline",
    tag: "Team Project",
    repo: GH + "Global_Stadiums_Data_Analysis_Project",
    flow: ["Python scraper", "Azure Data Lake", "Data Factory", "Synapse + Databricks", "Tableau"],
    metric: { value: "E2E", label: "scrape → lake → warehouse → BI" },
    stack: ["Python", "Azure Data Lake", "Data Factory", "Synapse", "Databricks", "Tableau"],
    points: [
      "End-to-end Azure pipeline: Python web scraping into Azure Data Lake.",
      "Data Factory ETL into Synapse, processing in Databricks, reporting in Tableau.",
    ],
  },
  phones: {
    title: "Used Phone Marketplace Streaming Pipeline",
    tag: "Architecture Design",
    repo: GH + "used_smartphones_pipeline",
    flow: ["Marketplace events", "Kafka", "Spark Streaming", "Snowflake + dbt", "Airflow schedule"],
    metric: { value: "Near-RT", label: "streaming architecture" },
    stack: ["Kafka", "Spark Streaming", "Airflow", "Snowflake", "dbt"],
    points: [
      "Designed a near-real-time pipeline for a used-phone marketplace.",
      "Kafka → Spark Streaming → Snowflake, orchestrated by Airflow, modeled with a dbt star schema.",
    ],
  },
  b2b: {
    title: "B2B Lead Generation Pipeline",
    tag: "Freelance · Client work",
    repo: GH + "B2B_Lead_Generation",
    flow: ["Google Maps", "Selenium smart-scroll", "Pandas clean + dedupe", "CSV / Excel", "Outreach-ready leads"],
    metric: { value: "1,500+", label: "company records per market" },
    stack: ["Python", "Selenium", "Pandas", "Web Scraping"],
    points: [
      "Replaced manual lead research for an export business with an automated Google Maps pipeline.",
      "Covers 5 markets (KSA, UAE, USA, Canada, Turkey) with configurable keywords per country.",
      "Smart-scroll logic + dynamic waits; output cleaned and deduplicated into outreach-ready CSV/Excel.",
    ],
  },
  airbnb: {
    title: "NYC Airbnb Market Analysis and Power BI Dashboard",
    tag: "Power BI Dashboard",
    repo: GH + "airbnb_data_analysis",
    flow: ["48.9K raw listings", "Clean + validate", "Feature engineering", "KPIs", "3-page Power BI"],
    metric: { value: "48.9K", label: "listings validated & analyzed" },
    stack: ["Python", "Pandas", "Power BI", "Feature Engineering"],
    points: [
      "Removed invalid prices, filled review gaps, flagged 239 extreme prices; engineered price tier & stay type.",
      "3-page interactive Power BI dashboard with KPIs and slicers.",
      "Found Manhattan + Brooklyn hold 85% of listings and 36% show zero availability.",
    ],
  },
  sales: {
    title: "Sales Data Analysis and Interactive Dashboard",
    tag: "KPI Reporting",
    repo: GH + "sales_data_analysis",
    flow: ["26K+ sales rows", "13 data-quality checks", "Feature engineering", "KPIs", "Power BI"],
    metric: { value: "$20M", label: "revenue analyzed · 50% margin" },
    stack: ["Python", "Pandas", "Power BI", "Data Quality"],
    points: [
      "Validated 26K+ sales records (2013–2016) through 13 documented data-quality checks.",
      "Defined KPIs ($20M revenue, $9.9M profit, 50% margin) in an interactive Power BI dashboard.",
      "Found one category drives 58% of revenue and 24% of orders generate 50% of it.",
    ],
  },
  attrition: {
    title: "Employee Attrition and Compensation Analysis",
    tag: "HR Analytics",
    repo: GH + "employee_data_analysis",
    flow: ["1,470 HR records", "Pandas + Seaborn EDA", "Attrition drivers", "Power BI", "HR actions"],
    metric: { value: "39.8%", label: "attrition spotted in Sales Reps" },
    stack: ["Python", "Pandas", "Seaborn", "Power BI"],
    points: [
      "Analyzed 1,470 employee records across attrition, pay, tenure and performance.",
      "Identified 16.1% overall attrition and 39.8% for Sales Representatives (2.5× average, lowest pay).",
      "Built an interactive Power BI dashboard on attrition, pay, tenure and performance by department and role.",
      "Recommended early-career pay progression and retention actions to HR.",
    ],
  },
};

/* ---------------------------------------------------------------------
   ROLES — one card per role, in this order.
   scene:    3D shape shown next to the role
   projects: exactly the projects listed in that role's CV (same order),
             plus the freelance B2B pipeline from the CV's Experience section
   stack:    per-project tools, exactly as written in brackets in that CV
   tags:     optional per-project label override for this role
   points:   per-project bullets, copied from that CV
   --------------------------------------------------------------------- */
const ROLES = [
  {
    id: "data-engineer",
    short: "DE",
    title: "Data Engineer",
    scene: "pipeline",
    headline: "ETL/ELT Pipelines · Data Warehousing · Cloud (Azure, AWS, Snowflake)",
    tagline: "I build pipelines that keep data correct — not just moving.",
    summary:
      "I design and automate ETL/ELT pipelines and data warehouses that turn raw, unreliable data into analytics-ready tables, and I debug what breaks so jobs keep running. I work across Python, SQL, Airflow, Docker, Snowflake and Azure, and use AI tools to build and document faster.",
    fit: ["Data Engineer", "ETL Developer", "Big Data Engineer", "Cloud Data Engineer"],
    cv: "assets/cv/Kirolos_Magdy_Data_Engineer.pdf",
    cvPreview: "assets/img/cv-de.webp",
    highlights: [
      { value: "10K+", label: "records per pipeline run" },
      { value: "99.5%", label: "load accuracy" },
      { value: "5", label: "parallel scraping sessions" },
    ],
    skills: {
      "Data Engineering": ["ETL/ELT", "Orchestration", "Data Warehousing", "Dimensional Modeling", "Medallion Architecture", "Batch & Streaming", "Data Quality", "Web Scraping"],
      "Big Data & Streaming": ["Apache Spark", "Spark Streaming", "Kafka", "Hadoop / HDFS", "YARN", "Hive", "HBase", "Flink"],
      "Cloud & Warehouses": ["Azure Data Factory", "Synapse", "Databricks", "Data Lake", "AWS S3", "AWS Glue", "Snowflake", "SQL Server", "PostgreSQL"],
      "Orchestration & DevOps": ["Airflow", "dbt", "Docker", "Docker Compose", "Celery", "Redis", "Git"],
      "Languages": ["Python", "PySpark", "Pandas", "SQL", "T-SQL"],
    },
    projects: ["dataflow", "dwh", "dbt", "stadiums", "phones", "b2b"],
    stack: {
      dataflow: ["Airflow", "Docker", "Selenium", "PostgreSQL"],
      dwh: ["SQL Server", "T-SQL", "Medallion Architecture"],
      dbt: ["dbt Core", "Snowflake", "SQL"],
      stadiums: ["Azure", "Python", "Tableau"],
      phones: ["Kafka", "Spark", "Snowflake"],
      b2b: ["Python", "Selenium", "Pandas"],
    },
    tags: { b2b: "Freelance Data Engineer" },
    points: {
      dataflow: [
        "Built a production-grade weekly ETL pipeline with Apache Airflow 2.9 (CeleryExecutor, Redis) on Docker Compose.",
        "Scrapes Booking.com and Talabat in parallel with Selenium Grid (up to 5 concurrent sessions).",
        "Designed a 5-table Supabase PostgreSQL star schema with upserts, processing 10K+ records per run at 99.5% accuracy.",
      ],
      dwh: [
        "Architected a SQL Server data warehouse with Medallion Architecture (Bronze / Silver / Gold).",
        "Consolidated 6 CRM and ERP source tables through T-SQL stored-procedure ETL with logging and error handling.",
        "Built data cleansing and a Gold-layer star schema (SCD Type 2, surrogate keys) with reporting views for BI.",
      ],
      dbt: [
        "Built an ELT pipeline on Snowflake with dbt: staging and mart layers and star-schema models.",
        "Reusable macros, seeds and automated data tests.",
        "Generated documentation and end-to-end data lineage.",
      ],
      stadiums: [
        "Contributed to an end-to-end Azure pipeline: Python scraping into Azure Data Lake.",
        "Data Factory ETL into Synapse, processing in Databricks and reporting in Tableau.",
      ],
      phones: [
        "Designed a near-real-time architecture: Kafka → Spark Streaming → Snowflake, orchestrated by Airflow.",
        "Modeled the warehouse layer as a dbt star schema.",
      ],
      b2b: [
        "Replaced slow, manual lead research for an export business with an automated Google Maps pipeline: 1,500+ import-company records per market across 5 countries.",
        "Solved Google Maps infinite scrolling with smart-scroll logic and dynamic waits, with configurable keywords per country.",
        "Cleaned and deduplicated the raw data with Pandas into CSV/Excel datasets ready for outreach.",
      ],
    },
  },
  {
    id: "analytics-engineer",
    short: "AE",
    title: "Analytics Engineer",
    scene: "schema",
    headline: "dbt · Snowflake · SQL · Dimensional Modeling",
    tagline: "I model data so the metrics are right and the models are reusable.",
    summary:
      "I build tested, documented dimensional models that turn raw data into analytics-ready tables the business can trust, and I define the KPIs on top of them. I work across dbt, Snowflake, SQL, Python and Airflow, and use AI tools to move faster.",
    fit: ["Analytics Engineer", "dbt Developer", "BI Engineer", "Data Modeler"],
    cv: "assets/cv/Kirolos_Magdy_Analytics_Engineer.pdf",
    cvPreview: "assets/img/cv-ae.webp",
    highlights: [
      { value: "SCD2", label: "history-tracked dimensions" },
      { value: "13", label: "documented data-quality checks" },
      { value: "5", label: "table star schema with upserts" },
    ],
    skills: {
      "Analytics Engineering": ["dbt Core", "Tests", "Macros", "Seeds", "Docs & Lineage", "ELT", "Kimball Modeling", "Star Schema", "SCD Type 2", "Surrogate Keys", "KPI Definition"],
      "Warehouses & SQL": ["Snowflake", "SQL Server", "PostgreSQL", "Azure Synapse", "Window Functions", "Views", "Stored Procedures", "T-SQL"],
      "Orchestration & Tools": ["Airflow", "Docker", "Git", "Azure Data Factory", "Spark", "Kafka"],
      "BI & Analytics": ["Power BI", "Tableau", "Plotly Dash", "EDA", "Data Validation"],
    },
    projects: ["dbt", "dwh", "dataflow", "airbnb", "sales", "b2b"],
    stack: {
      dbt: ["dbt Core", "Snowflake", "SQL"],
      dwh: ["SQL Server", "T-SQL", "Medallion Architecture"],
      dataflow: ["Airflow", "Docker", "PostgreSQL"],
      airbnb: ["Python", "Pandas", "Power BI"],
      sales: ["Python", "Power BI"],
      b2b: ["Python", "Selenium", "Pandas"],
    },
    tags: { b2b: "Freelance Data Engineer" },
    points: {
      dbt: [
        "End-to-end ELT pipeline that loads raw data into Snowflake and transforms it with dbt through staging and mart layers into star-schema tables.",
        "Implemented dbt macros, seeds and automated tests.",
        "Generated documentation and data lineage.",
      ],
      dwh: [
        "Consolidated 6 CRM and ERP source tables through Bronze, Silver and Gold layers with stored-procedure ETL, logging and error handling.",
        "Cleansed data with deduplication, standardization and validation.",
        "Modeled a Gold-layer star schema (conformed customer dimension, SCD Type 2 product dimension, sales fact with surrogate keys) and published reporting views.",
      ],
      dataflow: [
        "Weekly Airflow 2.9 (Docker) ETL pipeline loading a 5-table star schema into Supabase PostgreSQL with upserts.",
        "Processes 10K+ records per run at 99.5% accuracy.",
      ],
      airbnb: [
        "Validated and cleaned 48.9K listings: invalid prices removed, outliers flagged, 4 derived fields.",
        "Defined KPIs and delivered a 3-page Power BI dashboard on pricing, host activity and idle inventory.",
      ],
      sales: [
        "Validated 26K+ sales records through 13 documented data-quality checks.",
        "Defined KPIs ($20M revenue, $9.9M profit, 50% margin) and delivered a Power BI dashboard with business insights.",
      ],
      b2b: [
        "Automated Google Maps pipeline extracting 1,500+ import-company records per market across 5 countries.",
        "Cleaned, deduplicated and normalized the raw data with Pandas into structured CSV/Excel datasets.",
      ],
    },
  },
  {
    id: "data-analyst",
    short: "DA",
    title: "Data Analyst",
    scene: "bars",
    headline: "SQL · Power BI · Python · Dashboards & KPI Reporting",
    tagline: "I turn messy data into insights people can actually act on.",
    summary:
      "I care about insights being right, not just good-looking. I clean and validate data, define the right KPIs, and build interactive dashboards with SQL, Python, Power BI and Tableau — using AI tools to speed up analysis and documentation.",
    fit: ["Data Analyst", "BI Analyst", "Power BI Developer", "Reporting Analyst"],
    cv: "assets/cv/Kirolos_Magdy_Data_Analyst.pdf",
    cvPreview: "assets/img/cv-da.webp",
    highlights: [
      { value: "48.9K", label: "listings analyzed (Airbnb)" },
      { value: "26K+", label: "sales records validated" },
      { value: "3", label: "interactive Power BI dashboards" },
    ],
    skills: {
      "Analytics": ["Data Cleaning", "Validation", "EDA", "KPI Design", "Dashboarding", "Data Storytelling", "Statistics", "Feature Engineering"],
      "BI & Visualization": ["Power BI", "Tableau", "Plotly Dash", "Matplotlib", "Seaborn"],
      "Languages & Databases": ["SQL", "T-SQL", "Window Functions", "Python", "Pandas", "NumPy", "scikit-learn", "SQL Server", "PostgreSQL"],
      "Data Engineering": ["ETL/ELT", "Star Schema", "Snowflake", "dbt", "Airflow", "PySpark"],
    },
    projects: ["airbnb", "sales", "attrition", "dwh", "b2b"],
    stack: {
      airbnb: ["Python", "Pandas", "Power BI"],
      sales: ["Python", "Pandas", "Power BI"],
      attrition: ["Python", "Power BI"],
      dwh: ["SQL Server", "T-SQL"],
      b2b: ["Python", "Selenium", "Pandas"],
    },
    tags: { b2b: "Freelance Data Analyst" },
    points: {
      airbnb: [
        "Cleaned and validated 48.9K listings: removed 11 invalid prices, filled review gaps, flagged 239 extreme prices.",
        "Engineered features such as price tier and stay type.",
        "3-page Power BI dashboard with KPIs and slicers: Manhattan + Brooklyn hold 85% of listings and 36% show zero availability.",
      ],
      sales: [
        "Validated and cleaned 26K+ sales records (2013–2016): re-calculated revenue, tax and profit; flagged 34% walk-in customers and 2% loss-making sales.",
        "Engineered profit margin, order-size buckets and customer type.",
        "KPIs ($20M revenue, $9.9M profit, 50% margin) in Power BI: one category drives 58% of revenue and 24% of orders generate 50% of it.",
      ],
      attrition: [
        "Analyzed 1,470 employee records with Pandas and Seaborn; built an interactive Power BI dashboard on attrition, pay, tenure and performance.",
        "Identified 16.1% overall attrition and 39.8% for Sales Representatives (2.5× the average, lowest pay).",
        "Recommended early-career pay progression and retention actions to HR.",
      ],
      dwh: [
        "Built a SQL Server warehouse with Medallion Architecture (Bronze / Silver / Gold) and T-SQL ETL.",
        "Gold-layer star schema consolidating 6 ERP and CRM source tables for analytical reporting.",
      ],
      b2b: [
        "Replaced manual lead research for an export business with an automated pipeline: 1,500+ import-company records per market across 5 countries.",
        "Cleaned, deduplicated and normalized raw web data with Pandas into structured CSV/Excel datasets.",
      ],
    },
  },
];

/* ---------------------------------------------------------------------
   JOURNEY — freelance work, education and certifications (one timeline)
   type: work | edu | cert   (controls label + icon)
   --------------------------------------------------------------------- */
const TIMELINE = [
  {
    type: "work",
    when: "2024 — Present",
    title: "Freelance Data Engineer",
    org: "B2B Lead Generation · Export business client",
    text: "Replaced slow, manual lead research with an automated Google Maps pipeline that extracts 1,500+ import-company records per market across KSA, UAE, USA, Canada and Turkey, then cleans and deduplicates them into outreach-ready CSV/Excel datasets.",
    tags: ["Python", "Selenium", "Pandas", "Web Scraping", "Data Cleaning"],
    link: { label: "View on GitHub", url: "https://github.com/kirlosmagdy/B2B_Lead_Generation" },
  },
  {
    type: "edu",
    when: "Class of 2026",
    title: "Bachelor of Computers & Data Science",
    org: "Alexandria University",
    text: "Graduated June 2026, with a degree focused on how data systems are built, modeled and analyzed.",
    tags: ["Data Warehousing", "Data Modeling", "Data Engineering", "Cloud Solutions", "Distributed Data Analytics"],
  },
  {
    type: "cert",
    when: "2025",
    title: "Big Data Analysis Training Program",
    org: "National Telecommunication Institute (NTI)",
    text: "Hands-on training in the Hadoop ecosystem and real-time stream processing.",
    tags: ["Hadoop", "Spark", "Flink", "Hive", "HBase", "HDFS", "YARN"],
  },
  {
    type: "cert",
    when: "2024",
    title: "Microsoft Data Engineer",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    text: "Hands-on training in Azure data services and cloud data warehousing.",
    tags: ["Azure Data Factory", "Synapse Analytics", "Cloud Data Warehousing"],
  },
  {
    type: "cert",
    when: "Credly verified",
    title: "IBM SkillsBuild Data Analytics Certificate",
    org: "IBM",
    text: "Applied training in data preparation, descriptive and inferential statistics, and data visualization for storytelling.",
    tags: ["Data Preparation", "Statistics", "Data Visualization"],
    link: { label: "Verify badge", url: "https://www.credly.com/earner/earned/badge/5e453185-1de9-4786-86b7-610ea50faebf" },
  },
];

/* ---------------------------------------------------------------------
   PROJECTS SECTION
   SPOTLIGHT: the wide card on top (the freelance lead-generation project)
   FEATURED:  the 8 cards below it, in 2 rows of 4
   The role filter tabs are built automatically from each role's "projects".
   --------------------------------------------------------------------- */
const SPOTLIGHT = "b2b";
const FEATURED = ["dataflow", "dwh", "dbt", "stadiums", "phones", "airbnb", "sales", "attrition"];

/* expose to the other scripts */
window.PORTFOLIO = { PROFILE, PROJECTS, ROLES, TIMELINE, FEATURED, SPOTLIGHT, FREELANCE };
})();
