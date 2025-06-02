import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Portfolio() {
  const experiences = [
    {
      title: "Programmer Analyst",
      org: "Rabobank",
      date: "Jun 2021 – Aug 2022",
      desc: "Environment: Java, SQL, Spring Framework, Informatica, Agile, Oracle, Python, REST APIs, SOAP, Web Services, SSL/TLS, OAuth, Data Encryption, Hibernate, Java EE."
    },
    {
      title: "AI-ML Intern",
      org: "AWS academy",
      date: "Mar 2022 – May 2022",
      desc: "Environment: AWS SageMaker,Amazon Rekognition,Amazon Comprehend,Amazon Polly,AWS Lambda,AWS EC2,AWS S3,Jupyter Notebooks,scikit-learn,TensorFlow,Keras,pandas, NumPy,Model Deployment,API Integration,Data Labeling and Preprocessing,Model Training & Evaluation,Cloud-based Machine Learning Pipelines,Classification & Regression Algorithmse"
    },
    {
      title: "Data Analyst",
      org: "Bupa",
      date: "Sep 2022 – Jul 2023",
      desc: "Environment: SQL, Python (pandas, NumPy), Tableau, Power BI, Looker, Informatica, scikit-learn, R, Epic, Cerner, Azure."
    },
    {
      title: "Senior Data Analyst",
      org: "Episensors",
      date: "Nov 2023 – Apr 2024",
      desc: "Environment: Excel (advanced level), SQL, Python (pandas, NumPy), Tableau, Power BI, Looker, Apache Kafka, Apache Spark, Hadoop, AWS S3, AWS Redshift, Informatica, Alteryx, scikit-learn, SciPy, Matplotlib, Seaborn, Snowflake."
    },
    {
      title: "Senior Data Analyst",
      org: "Northern Illinois University",
      date: "May 2024 – Present",
      desc: "Environment: SQL, Python (pandas, NumPy), Matplotlib, Seaborn, Power BI, Tableau, Looker, scikit-learn, Informatica, Alteryx, Snowflake, Apache Kafka, Apache Spark, Hadoop, Azure Data Lake, Azure Synapse, SciPy, Azure Machine Learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 font-sans scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f0c29]/90 backdrop-blur-md z-50 shadow-md py-4 px-8 flex justify-center gap-8 text-sm font-medium">
        {["Home", "Projects", "Stats", "Experience", "Skills", "publications","Certifications", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/ /g, "")}`} className="text-cyan-300 hover:text-pink-400 transition">{item}</a>
        ))}
      </nav>


      <div className="pt-28">
        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
          <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-[0_0_30px_5px_rgba(0,255,255,0.3)] ring-4 ring-cyan-400 animate-pulse">
            <img src={`${import.meta.env.BASE_URL}profile-hero.jpg`} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow mb-4 animate-pulse">Hello, I'm Mani</h1>
            <h2 className="text-2xl md:text-3xl text-pink-300 mb-6">Senior Data Analyst| Transforming Data into Strategy with ML & BI Tools</h2>
            <p className="text-gray-300 mb-6 text-base md:text-lg">
              Insightful and analytical Senior Data Analyst with over 3 years of professional experience in data mining, visualization, and predictive analytics across healthcare, finance, and academic research domains. Additionally, completed 1 year of volunteer experience assisting in data engineering and programming tasks, contributing to the development of ETL pipelines and analytics solutions. Proficient in SQL, Python, Power BI, and Tableau, with a proven ability to transform raw data into strategic insights. Skilled in collaborating with cross-functional teams to drive data-informed decision-making, optimize performance, and integrate AI/ML techniques into business intelligence workflows.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:sailakshmi.99k@gmail.com"><button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">Hire Me</button></a>
              {/*<button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">Hire Me</button>*/}
              <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">Download CV</button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="py-20 text-center bg-[#1a1a40] rounded-xl max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: "10+" },
              { label: "Tools", value: "30+" },
              { label: "Certifications", value: "5+" },
              { label: "Hours of Work", value: "100+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-4xl font-bold text-cyan-300 animate-pulse">{stat.value}</p>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto py-20">
          {[
            {
              title: "📊 Excel Sales Dashboard",
              desc: "Dashboard with PivotTables, slicers, and charts.",
              color: "from-purple-500 to-blue-500",
              emoji: "📊"
            },
            {
              title: "ANALYSIS OF ABNORMAL ACTIVITY DETECTION IN OFFLINE SURVEILLANCE FOOTAGE",
              desc: "We are using three separate models in the method to identify the videos of anomaly. The models are convolutional neural networks (CNN), architecture VGG16 and ResNet50. In this project, we use videos of real-time anomalies to train the pattern. So that we can able to evaluate each model's performance independently and use the model to predict anomalies with the highest degree of accuracy. VGG16 model is chosen from the three models for the prediction based on its performance in training and testing.We are using three separate models in the method to identify the videos of anomaly. The models are convolutional neural networks (CNN), architecture VGG16 and ResNet50. In this project, we use videos of real-time anomalies to train the pattern. So that we can able to evaluate each model's performance independently and use the model to predict anomalies with the highest degree of accuracy. VGG16 model is chosen from the three models for the prediction based on its performance in training and testing",
              color: "from-purple-500 to-blue-500",
              emoji: "🚨"
            },
            {
              title: "🗃️ SQL Retail Analytics",
              desc: "Advanced MySQL queries for insights.",
              color: "from-yellow-500 to-pink-500",
              emoji: "🗃️"
            },
            {
              title: "REAL AND FAKE FACE DETECTION",
              desc: "The model enables us to detect whether the given input image of a person is a real face or a fake face. The model is trained by more than 10,000 dataset images.",
              color: "from-yellow-500 to-pink-500",
              emoji: "🔍"
            },
            {
              title: "SMART HIRING WEB APPLICATION(ReactJS)",
              desc: "It is a job hiring portal developed using ReactJS, where we can build our profile and apply to various job roles. There are various options to identify the exact outcome of the user.",
              color: "from-yellow-500 to-pink-500",
              emoji: "🧠"
            },
            {
              title: "🎬 Netflix EDA",
              desc: "Data cleaning and visualizations in Python.",
              color: "from-green-400 to-teal-400",
              emoji: "🎬"
            },
            {
              title: "📈 Tableau Superstore",
              desc: "Interactive KPIs and filters using Tableau.",
              color: "from-blue-400 to-indigo-500",
              emoji: "📈"
            },
            {
              title: "SELFIE CAPTURING BY DETECTING SMILE",
              desc: "We can auto capture selfie by detecting smile. In addition to that feature we add photo capture, browsing option, filters, video option, watermark on image features in this project to make the interface user-friendly. The main idea is to develop and interface similar to the mobile camera in laptop.",
              color: "from-yellow-500 to-pink-500",
              emoji: "📹"
            },
          ].map((project, i) => (
            <div key={i} className={`bg-[#0e0e2e] rounded-2xl p-6 border border-cyan-300 shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_5px_rgba(0,255,255,0.3)] relative overflow-hidden`}>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} opacity-30 blur-xl animate-pulse`} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-pink-300 flex items-center gap-2">
                  <span className="text-2xl">{project.emoji}</span> {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
                <button className="mt-4 bg-transparent border border-cyan-300 text-cyan-300 px-4 py-1 rounded-full hover:bg-cyan-300 hover:text-black transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Timeline Section */}
      <section id="experience" className="py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-12">Work Experience Timeline</h2>
        <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400 z-0"></div>
        <div className="flex flex-col-reverse gap-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 flex justify-end pr-6">
                    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96">
                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-blue-700 font-medium text-sm mb-1">@ {exp.org}</p>
                      <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                      <p className="text-sm text-gray-700">{exp.desc}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center relative">
                    <div className="absolute left-[-12px] w-6 h-6 bg-gray-400 rounded-full border-4 border-[#201c3b] z-10"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 flex items-center relative">
                    <div className="absolute right-[-12px] w-6 h-6 bg-gray-400 rounded-full border-4 border-[#201c3b] z-10"></div>
                  </div>
                  <div className="w-1/2 flex justify-start pl-6">
                    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96">
                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-blue-700 font-medium text-sm mb-1">@ {exp.org}</p>
                      <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                      <p className="text-sm text-gray-700">{exp.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>
      <section id="skills" className="py-16 px-6 text-white">
  <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Technical Skills</h2>

  {[
    {
      title: "Data Analysis Tools",
      skills: ["Excel", "Power BI", "Tableau", "Looker", "Google Data Studio", "Root Cause Analysis (RCA)", "Pareto Charts", "Flowcharts", "Fishbone Diagrams"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "SAS", "STATA"]
    },
    {
      title: "Big Data Technologies",
      skills: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "Apache Flink"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Google Cloud Platform", "Microsoft Azure"]
    },
    {
      title: "Data Warehousing",
      skills: ["Snowflake", "Amazon Redshift", "Google BigQuery"]
    },
    {
      title: "ETL & Geospatial Tools",
      skills: ["Informatica", "Alteryx", "Apache Airflow", "Talend", "GeoPandas", "Folium", "QGIS (basic)", "ArcGIS (familiar)"]
    },
    {
      title: "ML & Statistical Analysis",
      skills: ["scikit-learn", "TensorFlow", "Keras", "Statsmodels", "SciPy"]
    },
    {
      title: "Data Manipulation & APIs",
      skills: ["pandas", "NumPy", "dplyr", "SQL-based transformations", "FTP", "SFTP", "REST API", "Defect Tracking", "KPI Reporting", "Corrective Action Planning"]
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "JIRA", "Confluence"]
    },
    {
      title: "Data Modeling & Databases",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Data Governance & Quality",
      skills: ["Informatica Data Quality", "Collibra", "Talend Data Quality", "CSV", "JSON", "fixed-width", "GeoDatabase"]
    },
    {
      title: "Data Security",
      skills: ["Encryption", "Data Masking", "IAM (Identity and Access Management)"]
    }
  ].map((section, idx) => (
    <div key={idx} className="mb-6">
      <h3 className="text-xl font-semibold text-pink-400 mb-3">{section.title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {section.skills.map((skill, i) => (
          <div
            key={i}
            className="border border-cyan-400 rounded-md px-3 py-2 text-center text-xs font-medium bg-[#1c1f2b] hover:bg-[#2c2f3b] transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  ))}
</section>


        {/* Research Publications */}
<section id="publications" className="py-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">Research Publications</h2>
  <div className="grid md:grid-cols-2 gap-10">
    {[
      {
        title: "United States Municipal Solid Waste prediction and forecasting unitil 2035 across entire counties in united states",
        journal: "Across Entire Counties in the United States"
      },
      {
        title: "Building Classification: A Comprehensive Dataset and DenseNet201-Based Approach",
        journal: "Satellite Image Interpretation"
      },
      {
        title: "USS-Water Dataset and U-Net+ Model: A Novel High-Resolution Satellite Imagery Approach for Surface Water Detection in the United States",
        journal: "A Novel High-Resolution Satellite Imagery Approach for Surface Water Detection in the United States"
      },
      {
        title: "Analysis Of Abnormal Activity Detection In Offline Surveillance Footage ",
        journal: "Computer Vision in Public Security"
      }
    ].map((pub, idx) => (
      <div key={idx} className="bg-[#202040] rounded-xl p-6 border border-cyan-400 text-gray-200 shadow-xl hover:shadow-cyan-500 transition duration-300">
        <h3 className="text-xl font-bold text-pink-300 mb-2">{pub.title}</h3>
        <p className="text-sm text-cyan-200">{pub.journal}</p>
      </div>
    ))}
  </div>
</section>
<section id="certifications" className="py-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">Certifications</h2>
  <div className="grid md:grid-cols-2 gap-10">
    {[
      {
        title: "Oracle AI Vector Search Certified Professional",
        issuer: "Oracle University",
        date: "April 2025",
        desc: "Recognized as an Oracle Certified Professional for expertise in AI-based vector search and intelligent retrieval systems.",
        image: `${import.meta.env.BASE_URL}oracle.png`
      },
      {
        title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "April 2022",
        desc: "Validated knowledge of AWS architecture, deployment, and cloud solution design.",
        image: `${import.meta.env.BASE_URL}aws1.png`
      },
      {
        title: "Work with generative artificial intelligence (AI) models in Azure Machine Learning",
        issuer: "Microsoft",
        date: "April 2024",
        desc: "Demonstrated proficiency in data cleaning, visualization, and analytics using spreadsheets, SQL, and R.",
        image: `${import.meta.env.BASE_URL}microsoftbadge1.png`
      },
      {
        title: "Deploy and consume models with Azure Machine Learning",
        issuer: "Microsoft",
        date: "April 2024",
        desc: "Demonstrated proficiency in data cleaning, visualization, and analytics using spreadsheets, SQL, and R.",
        image: `${import.meta.env.BASE_URL}microsoftbadge2.png`
      },
      {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "August 2024",
        desc: "Certification in designing and implementing AI solutions on Azure using Cognitive Services and ML.",
        image: `${import.meta.env.BASE_URL}Ai consultant.png`
      },
      {
        title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
        issuer: "Microsoft",
        date: "April 2022",
        desc: "Certification in designing and implementing AI solutions on Azure using Cognitive Services and ML.",
        image: `${import.meta.env.BASE_URL}aws2.png`
      },
      {
        title: "Build and Deploy Machine Learning App in Cloud with Python",
        issuer: "Udemy",
        date: "Feb 2025",
        desc: "Validated knowledge of AWS architecture, deployment, and cloud solution design.",
        image: `${import.meta.env.BASE_URL}udemy.png`
      }
    ].map((cert, idx) => (
      <div key={idx} className="bg-[#202040] rounded-xl p-6 border border-indigo-400 text-gray-200 shadow-xl hover:shadow-indigo-500 transition duration-300">
        <img src={cert.image} alt={cert.title} className="w-full h-48 object-contain rounded mb-4 border border-gray-600" />
        <h3 className="text-xl font-bold text-pink-300 mb-1">{cert.title}</h3>
        <p className="text-sm text-cyan-200 mb-1">{cert.issuer}</p>
        <p className="text-xs text-gray-400 mb-2">{cert.date}</p>
        <p className="text-sm text-gray-300">{cert.desc}</p>
      </div>
    ))}
  </div>
</section>
{/* Honors */}
<section id="honors" className="py-20 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">Honors</h2>
  <div className="bg-[#202040] rounded-xl p-6 border border-yellow-400 text-gray-200 shadow-xl hover:shadow-yellow-500 transition duration-300 text-center">
    <img src={`${import.meta.env.BASE_URL}honors-award.png`} alt="NIU Innovation Network Award" className="w-48 h-48 mx-auto mb-6 rounded-lg shadow-md border-2 border-yellow-300" />
    <h3 className="text-xl font-bold text-yellow-300 mb-2">Award Winner</h3>
    <p className="text-sm text-gray-300">Northern Illinois University — Illinois Innovation Network Sustainability Research 2024 Conference</p>
    <p className="text-sm text-gray-400 mt-2">Recognized for excellence in research poster presentation</p>
  </div>
</section>


        {/* Endorsements */}
      <section className="py-20 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">Endorsements</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { name: "Sarah Thompson", title: "Institutional Research Analyst, NIU", quote: "Mani consistently demonstrated exceptional analytical skills and initiative in complex university data projects." },
      { name: "Dr. Alan Lee", title: "Data Visualization Specialist, NIU", quote: "Her predictive models significantly influenced our institutional forecasting strategy." },

      { name: "James Walker", title: "Director of Data Science, Episensors", quote: "Mani's ability to turn raw insurance data into strategic insights was game-changing for our claims analytics." },
      { name: "Elena Cruz", title: "Senior BI Developer, Episensors", quote: "Her Tableau dashboards transformed how we visualized operational KPIs and improved team decisions." },

      { name: "Anil Verma", title: "Head of Analytics, Bupa India", quote: "She translated complex patient data into actionable health insights—an invaluable contribution to our R&D." },
      { name: "Dr. Reena Singh", title: "Clinical Data Scientist, Bupa", quote: "Mani's ML models forecasted patient outcomes with remarkable accuracy and impact." },

      { name: "Vikram Patel", title: "Lead Solutions Architect, Rabobank", quote: "Her ETL pipelines and secure data integration ensured smooth operations across our banking systems." },
      { name: "Neha Reddy", title: "Agile Delivery Manager, Rabobank", quote: "Mani was instrumental in delivering Java-based analytics features under tight regulatory deadlines." }
    ].map((endorse, idx) => (
      <div key={idx} className="bg-[#202040] rounded-xl p-6 border border-pink-400 text-gray-200 shadow-xl hover:shadow-pink-500 transition duration-300">
        <p className="italic text-sm">“{endorse.quote}”</p>
        <div className="mt-4 text-right">
          <p className="font-semibold text-pink-300">— {endorse.name}</p>
          <p className="text-xs text-gray-400">{endorse.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Footer / Call to Action */}
        <section id="contact" className="text-center py-20">
          <h2 className="text-xl font-semibold text-yellow-300">Let’s Connect</h2>
          <p className="text-sm text-gray-400 mt-1">Open to collaborations, internships, or full-time opportunities.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Github className="hover:text-pink-400 cursor-pointer" />
            <Linkedin className="hover:text-blue-400 cursor-pointer" />
            <FileText className="hover:text-green-400 cursor-pointer" />
          </div>
        </section>
      </div>
    </div>
  );
}