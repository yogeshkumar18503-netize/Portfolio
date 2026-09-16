import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'S. YOGESH KUMAR',
    titles: [
      'Data Analyst',
      'Python & SQL Developer',
      'Business Intelligence Analyst',
      'Data Visualization Specialist',
      'Financial & Operations Analyst'
    ],
    headline: 'Aspiring Data Analyst • MBA (Finance & Analytics) • SRM University',
    email: 'yogeshkumar18503@gmail.com',
    alternateEmail: 'ys4191@srmist.edu.in',
    phone: '+91 6381318721',
    location: 'Chennai, Tamil Nadu, India',
    hometown: 'Vilathikulam, Thoothukudi',
    availability: 'Actively seeking entry-level Data Analyst / BI opportunities',
    linkedin: 'https://www.linkedin.com/in/yogesh-kumar-734a56238',
    github: 'https://github.com/yogeshkumar0503'
  },

  metrics: [
    {
      label: 'MBA Academic Standing',
      value: '8.6',
      target: 8.6,
      isDecimal: true,
      suffix: ' CGPA',
      subtext: 'Finance & Analytics Specialization',
      badge: 'SRM KTR',
      icon: 'Award',
      accentColor: '#38BDF8'
    },
    {
      label: 'Core Applied Projects',
      value: '02',
      target: 2,
      suffix: ' Systems',
      subtext: 'Python OOP & Database Records',
      badge: 'Engineered',
      icon: 'Code2',
      accentColor: '#6366F1'
    },
    {
      label: 'Technical Certifications',
      value: '08+',
      target: 8,
      suffix: '+ Certifications',
      subtext: 'Login 360, FIIT, Great Learning, Forage',
      badge: 'Verified',
      icon: 'CheckCircle2',
      accentColor: '#F59E0B'
    },
    {
      label: 'Events & Operations Led',
      value: '1000+',
      target: 1000,
      suffix: '+ Participants',
      subtext: 'Intra-College Sports & Cultural Fests',
      badge: 'Organized',
      icon: 'Users',
      accentColor: '#10B981'
    }
  ],

  about: {
    summary: [
      'Analytical and motivated aspiring Data Analyst currently pursuing MBA in Finance & Analytics at SRM University, Chennai (CGPA: 8.6), with a foundational degree in B.Com (Computer Applications) from Thiagarajar College, Madurai (CGPA: 8.1).',
      'Possesses a unique dual skill set: an innate understanding of commercial and financial operations combined with practical programming proficiency in Python, MySQL, Pandas, NumPy, Power BI, Tableau, and Advanced Microsoft Excel.',
      'Experienced in logistics operations analysis and statutory tariff auditing during summer internship at DBGT Pvt Ltd (Thoothukudi Container Terminal). Passionate about turning raw business telemetry into clean reports and automated data pipelines.'
    ],
    quote: 'Data is not just numbers in tables; it is the pulse of business operations. My passion lies in finding patterns, automating calculations, and communicating actionable insights that optimize performance.',
    coreCompetencies: [
      {
        title: 'Data Cleaning & Preprocessing',
        description: 'Handling missing values, deduplication, type casting, and anomaly filtering using Pandas and SQL queries.',
        icon: 'Database'
      },
      {
        title: 'BI Dashboard Development',
        description: 'Designing user-focused interactive reporting interfaces in Power BI, Tableau, and Excel.',
        icon: 'PieChart'
      },
      {
        title: 'Statistical Modeling & Computation',
        description: 'Descriptive statistics, distribution shapes, variance analysis, and mathematical logic in Python/NumPy.',
        icon: 'Calculator'
      },
      {
        title: 'Prompt Engineering & Productivity',
        description: 'Certified in Prompt Engineering to speed up query drafting, regex construction, and automated documentation.',
        icon: 'Sparkles'
      }
    ]
  },

  skills: [
    {
      name: 'Python',
      category: 'programming',
      level: 'Intermediate',
      description: 'OOP concepts, modular scripts, logic structures, Library Management System development.',
      icon: 'Terminal'
    },
    {
      name: 'MySQL / SQL',
      category: 'database',
      level: 'Working Knowledge',
      description: 'Relational schemas, joins, filtering, group by aggregations, subqueries, and data extraction.',
      icon: 'Database'
    },
    {
      name: 'Pandas',
      category: 'programming',
      level: 'Working Knowledge',
      description: 'DataFrames, series manipulation, indexing, handling missing values, data grouping & reshaping.',
      icon: 'Table'
    },
    {
      name: 'NumPy',
      category: 'programming',
      level: 'Working Knowledge',
      description: 'Multi-dimensional arrays, vectorized mathematics, numerical calculations, and array broadcasting.',
      icon: 'Binary'
    },
    {
      name: 'Power BI',
      category: 'visualization',
      level: 'Working Knowledge',
      description: 'Interactive visual reports, dashboard design, KPI cards, drill-down analytics, report publishing.',
      icon: 'BarChart'
    },
    {
      name: 'Tableau',
      category: 'visualization',
      level: 'Working Knowledge',
      description: 'Worksheet generation, storytelling dashboards, custom charts, filters, trend visualization.',
      icon: 'LayoutDashboard'
    },
    {
      name: 'Microsoft Excel',
      category: 'database',
      level: 'Intermediate (Certified)',
      description: 'Pivot Tables, VLOOKUP, XLOOKUP, Nested IFs, Conditional Formatting, Dynamic Charts.',
      icon: 'FileSpreadsheet'
    },
    {
      name: 'Exploratory Data Analysis',
      category: 'concepts',
      level: 'Applied',
      description: 'Univariate & bivariate exploration, pattern recognition, anomaly identification, hypothesis checking.',
      icon: 'Search'
    },
    {
      name: 'Data Cleaning',
      category: 'concepts',
      level: 'Applied',
      description: 'Standardizing inconsistent formats, handling missing observations, duplicate removal, record hygiene.',
      icon: 'Filter'
    },
    {
      name: 'Statistics',
      category: 'concepts',
      level: 'Core Foundation',
      description: 'Measures of central tendency, dispersion, variance, standard deviation, percentile distributions.',
      icon: 'LineChart'
    },
    {
      name: 'Prompt Engineering',
      category: 'programming',
      level: 'Certified (2024)',
      description: 'Certified by Great Learning. Utilizing LLMs for analytical script generation, SQL design, and documentation.',
      icon: 'Sparkles'
    },
    {
      name: 'Project Management',
      category: 'concepts',
      level: 'Certified (2024)',
      description: 'Certified by Great Learning. Milestone tracking, scope management, and timeline coordination.',
      icon: 'Briefcase'
    }
  ],

  projects: [
    {
      id: 'library-management-system',
      title: 'Library Management System',
      subtitle: 'Automated Cataloging, Lending & Fee Computation',
      category: 'Python Application & Data Handling',
      description: 'An end-to-end Python system engineered to maintain comprehensive book inventory, automate lending workflows, track member borrowing histories, and eliminate manual calculation errors.',
      businessProblem: 'Manual book issue logs result in lost inventory, untracked overdue books, and inaccurate penalty calculations for prolonged borrowing.',
      solution: 'Engineered object-oriented classes (Book, Library, Member) with dynamic validation, borrowing queues, and automated fee algorithms.',
      technologies: ['Python 3', 'OOP Concepts', 'Data Structures', 'Automated Calculations', 'Modular Architecture'],
      highlights: [
        'Automated penalty fee calculation based on borrowing duration against dynamic grace thresholds.',
        'Modular architecture facilitating extensible addition of book records, members, and return statuses.',
        'Applied structured input validation to prevent record collisions and inconsistencies.'
      ],
      codeSnippet: {
        filename: 'library_system.py',
        language: 'python',
        code: `class LibrarySystem:
    def __init__(self):
        self.inventory = {}
        self.borrowed = {}
        self.daily_rate = 5.0  # Daily penalty in INR

    def calculate_rental_charge(self, days_held, grace_period=14):
        if days_held <= grace_period:
            return 0.0
        overdue = days_held - grace_period
        return overdue * self.daily_rate`
      },
      githubUrl: 'https://github.com/yogeshkumar0503'
    },
    {
      id: 'part-v-management',
      title: '"PART V MANAGEMENT" Institutional System',
      subtitle: 'Academic Records, Event Scheduling & Venue Allocation',
      category: 'Database & Scheduling System',
      description: 'An institutional management and event scheduling data system designed to record student activity participation, upload campus events, and manage venue allocation schedules efficiently.',
      businessProblem: 'Multiple simultaneous co-curricular and sports events created scheduling conflicts, duplicated venue bookings, and fragmented student attendance tracking.',
      solution: 'Unified student activity database that organized records for hundreds of students, enabled seamless venue scheduling, and prevented operational clashes.',
      technologies: ['Database Management', 'MySQL Queries', 'Record Hygiene', 'Event Scheduling', 'Operational Coordination'],
      highlights: [
        'Maintained structured records for student participation across diverse college activities.',
        'Prevented venue allocation collisions across campus departments.',
        'Provided clear query capabilities for administrative reporting and attendance validation.'
      ],
      codeSnippet: {
        filename: 'part_v_schedule.sql',
        language: 'sql',
        code: `SELECT e.event_id, e.event_name, v.venue_name,
       COUNT(s.student_id) AS total_participants, e.start_time
FROM events e
JOIN venues v ON e.venue_id = v.id
LEFT JOIN student_attendance s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY e.start_time ASC;`
      }
    }
  ],

  workflow: [
    { step: '01', title: 'Understand', description: 'Frame the business problem, identify key performance indicators (KPIs), and define measurable outcomes.' },
    { step: '02', title: 'Collect', description: 'Extract raw data from relational databases (MySQL), spreadsheets (Excel), or external sources.' },
    { step: '03', title: 'Clean', description: 'Handle missing values, duplicate records, inappropriate types, and anomalies with Pandas.' },
    { step: '04', title: 'Explore', description: 'Investigate statistical distributions, summary metrics, and data correlation patterns.' },
    { step: '05', title: 'Query & Model', description: 'Write structured SQL queries, business logic transformations, and metric calculations.' },
    { step: '06', title: 'Visualize', description: 'Develop intuitive, recruiter-ready dashboards in Power BI, Tableau, and Excel.' },
    { step: '07', title: 'Communicate', description: 'Deliver actionable findings to stakeholders to drive sound, data-backed business decisions.' }
  ],

  experience: [
    {
      role: 'Finance & Operations Intern',
      company: 'DBGT PVT LTD (Dakshin Bharat Gateway Terminal)',
      location: 'Thoothukudi, Tamil Nadu, India',
      duration: 'June 2024 – July 2024',
      type: 'Industrial Summer Internship',
      highlights: [
        'Audited Terminal Handling Charges (THC) against central government statutory tariffs to ensure billing compliance.',
        'Acquired hands-on exposure to container terminal logistics, vessel cargo handling efficiency, and operational turnaround.',
        'Cross-referenced logistics telemetry with tariff schedules to maintain reconciliation transparency.'
      ],
      tags: ['Government Tariff Compliance', 'Terminal Handling Charges (THC)', 'Logistics Operations', 'Data Reconciliation']
    }
  ],

  education: [
    {
      degree: 'MBA (Finance & Analytics)',
      institution: 'SRM University, Kattankulathur (KTR), Chennai',
      location: 'Chennai, Tamil Nadu',
      duration: '2023 – 2025',
      score: '8.6 / 10 (8.40)',
      scoreLabel: 'CGPA',
      description: 'Postgraduate management degree specializing in corporate finance, business analytics, quantitative modeling, and data-driven strategy.'
    },
    {
      degree: 'B.Com (Computer Applications)',
      institution: 'Thiagarajar College of Arts and Science',
      location: 'Madurai, Tamil Nadu',
      duration: '06/2020 – 05/2023',
      score: '8.1 / 10 (8.78% / 75.86%)',
      scoreLabel: 'CGPA',
      description: 'Undergraduate foundation covering commerce, accounting principles, computerized management information systems, and programming tools.'
    },
    {
      degree: 'Higher Secondary Certificate (XII State Board)',
      institution: 'SRMS Matriculation Higher Secondary School, Sinthalakarai',
      location: 'Sinthalakarai, Tamil Nadu',
      duration: '2020',
      score: '80.6%',
      scoreLabel: 'Percentage',
      description: 'Completed Higher Secondary schooling under the Tamil Nadu State Board.'
    },
    {
      degree: 'Secondary School Certificate (X Central Board)',
      institution: 'Sri Ambal Vidhyalaya, Vilathikulam',
      location: 'Vilathikulam, Thoothukudi',
      duration: '2018',
      score: '52.4%',
      scoreLabel: 'Percentage',
      description: 'Completed Secondary School examination under the Central Board.'
    }
  ],

  certifications: [
    {
      title: 'Data Analytics Comprehensive',
      issuer: 'Login 360',
      category: 'analytics',
      description: 'Full stack program covering Python, MySQL, Pandas, NumPy, Power BI, Tableau, Excel, Statistics, EDA, and Dashboards.'
    },
    {
      title: 'Advance Excel',
      issuer: 'FIIT',
      year: '2024',
      category: 'analytics',
      description: 'Pivot Tables, VLOOKUP, XLOOKUP, Nested IF formulas, Data Modeling, and automated financial spreadsheets.'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Great Learning',
      year: '2024',
      category: 'productivity',
      description: 'LLM prompt construction, chaining techniques, and AI-augmented coding for data queries.'
    },
    {
      title: 'Project Management',
      issuer: 'Great Learning',
      year: '2024',
      category: 'productivity',
      description: 'Project lifecycles, milestone setting, cross-functional coordination, and risk reduction.'
    },
    {
      title: 'Investment Banking',
      issuer: 'Forage',
      year: '2024',
      category: 'finance',
      description: 'Corporate valuation, financial statement analysis, and capital structure models.'
    },
    {
      title: 'Tally Prime',
      issuer: 'TEPL Tally Education',
      year: '2023',
      category: 'finance',
      description: 'Computerized double-entry bookkeeping, GST ledgers, and financial reconciliation.'
    },
    {
      title: 'CMA Foundation',
      issuer: 'Institute of Cost Accountants of India (ICAI)',
      year: '2022',
      category: 'finance',
      description: 'Fundamentals of cost accounting, commercial arithmetic, and economic analysis.'
    },
    {
      title: 'Personality Development & Communication',
      issuer: 'Skill Power',
      year: '2022',
      category: 'productivity',
      description: 'Executive presentation skills, business communication, and interview readiness.'
    }
  ],

  achievements: [
    {
      title: 'Sports Event Organizer (1,000+ Students)',
      metric: '1,000+ Participants',
      description: 'Organized intra-college sports meet managing fixture schedules, tournament logistics, score tables, and team committees.',
      icon: 'Flag',
      color: '#A855F7'
    },
    {
      title: 'Cultural Event Coordinator (700+ Students)',
      metric: '700+ Participants',
      description: 'Coordinated department cultural festival, handling event scheduling, student registration logs, and venue arrangements.',
      icon: 'Music',
      color: '#38BDF8'
    },
    {
      title: 'Placement Representative & Club Organizer',
      metric: 'Section Lead',
      description: 'Elected section Placement Representative liaising with the university placement office; organized Entrepreneurship Club (2023-2024).',
      icon: 'Users',
      color: '#10B981'
    },
    {
      title: 'Volleyball Runner-Up & MPL Organizer',
      metric: 'Tournament Runner-Up',
      description: 'Secured runner-up position in intra-college volleyball tournament; co-organized MPL sports event in 2023.',
      icon: 'Medal',
      color: '#F59E0B'
    },
    {
      title: 'Social Service League & 4+ Blood Donations',
      metric: 'Community Service',
      description: 'Regular donor participating across 4+ voluntary blood donation camps; active member in Social Service League & Rotaract.',
      icon: 'Heart',
      color: '#EF4444'
    },
    {
      title: 'Creative Writing & Logical Problem Solving',
      metric: 'Logic & Creativity',
      description: 'Writer, poet, lyricist, and Rubik\'s cube enthusiast with strong algorithmic and pattern-recognition intuition.',
      icon: 'BookOpen',
      color: '#6366F1'
    }
  ]
};
