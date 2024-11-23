// app/lib/constants.ts
import { ProjectCategory, Project } from './types';

export const SITE_CONFIG = {
    name: 'Pano Georgiadis',
    role: 'Cloud Engineer',
    email: 'pano@pgcloud.dev',
    github: 'https://github.com/p-georgiadis',
    linkedin: 'https://linkedin.com/in/p-georgiadis',
}

export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
    'Cloud & Infrastructure': 'Cloud engineering and infrastructure projects showcasing DevOps expertise and distributed systems design.',
    'Machine Learning & AI': 'Machine learning and artificial intelligence projects demonstrating data science and model development capabilities.',
    'Software Engineering': 'Software development projects highlighting programming, system design, and architectural skills.',
    'Open Source': 'Open source contributions and public infrastructure templates.'
};

export const PROJECTS: Project[] = [
    {
        id: "investprophet",
        title: 'InvestProphet - Stock Price Prediction Platform',
        description: 'Full-stack microservices application for real-time stock price prediction using LSTM neural networks. Features distributed system architecture with AWS SQS for inter-service communication, containerized deployment with ECS, and automated CI/CD pipeline. Implements advanced stock data processing with technical indicators and statistical analysis.',
        category: 'Cloud & Infrastructure',
        tags: [
            'Python',
            'Flask',
            'TensorFlow',
            'AWS',
            'Docker',
            'Microservices',
            'CI/CD',
            'WebSocket',
            'LSTM',
            'DevOps'
        ],
        infrastructure: [
            'AWS ECS with Fargate for container orchestration',
            'ECR for container registry',
            'SQS FIFO queues for service communication',
            'Route 53 for DNS management',
            'RDS for MySQL database',
            'CloudWatch for monitoring',
            'AWS Copilot for deployment',
            'GitHub Actions for CI/CD'
        ],
        techDetails: {
            backend: [
                'Flask web server with SocketIO',
                'LSTM neural network for price prediction',
                'Alpha Vantage API integration',
                'MySQL with PyMySQL for data persistence',
                'AWS SDK (boto3) for cloud services',
                'Pandas for data processing',
                'NumPy for numerical computations'
            ],
            frontend: [
                'Dynamic Chart.js visualizations',
                'Real-time WebSocket updates',
                'Responsive design with custom CSS',
                'jQuery for DOM manipulation',
                'Debounced stock symbol search',
                'Session management system'
            ],
            microservices: [
                'Data Collector service for API interactions',
                'Data Analyzer service for ML predictions',
                'Frontend service for user interface',
                'Inter-service communication via SQS',
                'Containerized with Docker'
            ],
            devops: [
                'Multi-stage Docker builds',
                'GitHub Actions workflow',
                'AWS Copilot deployment',
                'ECR push automation',
                'Environment secrets management',
                'Comprehensive testing suite'
            ]
        },
        link: 'https://github.com/p-georgiadis/investprophet',
        isOpenSource: false,
    },
    {
        id: "portfolio",
        title: 'This Website',
        description: 'Modern, responsive portfolio website built with Next.js 15 and hosted on AWS. Features server-side rendering, persistent particle animations using Framer Motion and Zustand for state management, and a dark theme optimized design. Implemented CI/CD pipeline for automated deployments.',
        category: "Cloud & Infrastructure",
        tags: [
            'Next.js 15',
            'React 19.0',
            'TypeScript',
            'TailwindCSS 3.3',
            'Framer Motion',
            'Zustand',
            'AWS',
            'CI/CD'
        ],
        infrastructure: [
            'Amazon S3 for static hosting',
            'CloudFront for global content delivery',
            'ACM for SSL/TLS certification',
            'Route 53 for DNS management',
        ],
        techDetails: {
            frontend: [
                'Next.js 15.0.3 with App Router',
                'React 19.0.0-rc',
                'TailwindCSS for styling',
                'TypeScript for type safety',
                'Framer Motion for persistent particle animations',
                'Zustand for global state management',
                'AnimatePresence for smooth transitions',
                'Lucide React for icons',
                'Geist font family'
            ],
            animations: [
                'Persistent particle system with global state',
                'Cross-page animation continuity',
                'Optimized render performance',
                'Client-side particle generation',
                'Custom easing functions'
            ],
            deployment: [
                'GitHub Actions for CI/CD',
                'S3 bucket with static website hosting',
                'CloudFront distribution with custom domain',
                'ACM for SSL certificate',
                'Route 53 for domain management'
            ]
        },
        link: 'https://github.com/yourusername/portfolio-website',
    },
    {
        id: "property-calculator",
        title: "Property Profit Calculator",
        description: "A mobile-friendly web app for calculating real estate sale profits quickly and efficiently. It allows users to account for deductions, sale types, and splits for shared profits. Built for personal use to manage real estate portfolio sales.",
        category: "Cloud & Infrastructure",
        tags: [
            "JavaScript",
            "HTML",
            "CSS",
            "Firebase",
            "Firestore",
            "GCP",
            "GitHub Pages",
            "Responsive Design",
            "Mobile-Friendly"
        ],
        infrastructure: [
            "Hosted on GitHub Pages",
            "Firebase Firestore for saving and retrieving tables",
            "Dynamic UI with Vanilla JavaScript",
            "Custom CSS for styling and responsive design",
        ],
        techDetails: {
            frontend: [
                "Vanilla JavaScript with modular functions",
                "Custom CSS animations and transitions",
                "Mobile-first responsive design using media queries",
                "HTML5 structure for accessibility and SEO"
            ],
            backend: [
                "Firebase Firestore for table data storage",
                "Dynamic Firebase configuration loading",
                "Secure and efficient Firestore document updates"
            ],
            deployment: [
                "Automated CI/CD with GitHub Actions",
                "Deployed to GitHub Pages",
                "Version control and deployment with GitHub"
            ]
        },
        link: "https://p-georgiadis.github.io/property-calculator/",
        isOpenSource: false
    },
    {
        id: "vote-deploy",
        title: "Continuous Delivery with ArgoCD and GKE: Voting Application",
        description: "This project demonstrates the deployment of a multi-tier voting application on Google Kubernetes Engine (GKE) using ArgoCD for Continuous Delivery (CD). The infrastructure includes Redis, PostgreSQL, and application components implemented in Python, Node.js, and .NET.",
        category: "Cloud & Infrastructure",
        tags: [
            "ArgoCD",
            "Kubernetes",
            "GKE",
            "Continuous Delivery",
            "Docker",
            "Redis",
            "PostgreSQL",
            "Python",
            "Node.js",
            ".NET"
        ],
        infrastructure: [
            "Google Kubernetes Engine (GKE) cluster for deployment",
            "ArgoCD for managing continuous delivery pipelines",
            "Redis for real-time vote collection",
            "PostgreSQL database for persistent storage",
            "Worker service implemented in .NET for vote processing"
        ],
        techDetails: {
            components: [
                "Frontend Voting App in Python",
                "Results App in Node.js",
                "Redis queue for vote storage",
                "Worker service in .NET for Redis to PostgreSQL",
                "Multi-tier architecture with Kubernetes YAML configurations"
            ],
            deployment: [
                "ArgoCD setup for application lifecycle management",
                "Google Cloud SDK for GKE cluster creation",
                "Kubernetes services with external IPs for app access",
                "Dockerized components with hosted images on Docker Hub"
            ],
            automation: [
                "ArgoCD auto-sync for continuous deployment",
                "Jenkinsfile for CI/CD pipeline implementation",
                "YAML configurations for deployments and services"
            ]
        },
        link: "https://github.com/p-georgiadis/vote-deploy",
        isOpenSource: false,
    },
    {
        id: "histopathologic-detection",
        title: 'Histopathologic Cancer Detection CNN',
        description: 'Deep learning model for detecting metastatic cancer in histopathologic tissue images using a custom CNN architecture. Achieved 86.89% accuracy with optimized threshold detection. Features ESRGAN-based super-resolution preprocessing and comprehensive hyperparameter tuning.',
        category: 'Machine Learning & AI',
        tags: [
            'Python',
            'TensorFlow',
            'CNN',
            'Computer Vision',
            'Medical Imaging',
            'Deep Learning',
            'Keras',
            'ESRGAN',
            'Scikit-learn',
            'NumPy'
        ],
        infrastructure: [
            'Custom CNN architecture',
            'ESRGAN super-resolution model',
            'Keras Tuner optimization',
            'Cross-validation framework',
            'Threshold optimization system',
            'Image preprocessing pipeline'
        ],
        techDetails: {
            architecture: [
                'Custom 4-layer CNN with optimized filters',
                'Batch normalization for training stability',
                'Dropout regularization (rate: 0.5382)',
                'Adam optimizer with tuned learning rate',
                'Global average pooling',
                'Binary classification output'
            ],
            preprocessing: [
                '32x32 center region extraction',
                'ESRGAN super-resolution to 224x224',
                'Advanced data augmentation techniques',
                'Batch processing with generators',
                'Normalization and standardization'
            ],
            performance: [
                'Accuracy: 86.89%',
                'Precision: 84.95%',
                'Recall: 82.20%',
                'F1-Score: 83.55%',
                'AUC-ROC: 0.9359'
            ],
            optimization: [
                'Hyperband tuning algorithm',
                'Cross-validation with 3 folds',
                'Dynamic threshold optimization',
                'Early stopping with patience',
                'Learning rate scheduling'
            ]
        },
        link: 'https://github.com/p-georgiadis/Histopathologic-Cancer-Detection',
    },
    {
        id: "wine-quality-prediction",
        category: "Machine Learning & AI",
        title: "Sommelier's AI: Wine Quality Prediction",
        description: "Machine learning project to predict wine quality based on physicochemical properties using supervised learning techniques. Features multiple model comparisons (XGBoost, Random Forest, Gradient Boosting), advanced data preprocessing, and SMOTE-Tomek for handling class imbalance. Achieved 79.06% accuracy in quality classification.",
        tags: [
            'Python',
            'XGBoost',
            'Scikit-learn',
            'Pandas',
            'NumPy',
            'SMOTE',
            'Feature Selection',
            'Data Visualization',
            'Supervised Learning',
            'Statistical Analysis'
        ],
        infrastructure: [
            'Jupyter Notebook environment',
            'Statistical analysis framework',
            'Machine learning pipeline',
            'Data preprocessing pipeline',
            'Model evaluation framework'
        ],
        techDetails: {
            models: [
                'XGBoost with SMOTE-Tomek balancing',
                'Random Forest classifier',
                'Gradient Boosting classifier',
                'Logistic Regression baseline',
                'Model ensemble techniques'
            ],
            preprocessing: [
                'SMOTE-Tomek for class imbalance',
                'Feature standardization',
                'Recursive Feature Elimination',
                'Label encoding for categorical data',
                'Cross-validation framework'
            ],
            analysis: [
                'Hyperparameter optimization',
                'Feature importance analysis',
                'Model comparison metrics',
                'Performance visualization',
                'Statistical validation'
            ],
            results: [
                'Accuracy: 79.06%',
                'Precision: 79.48%',
                'Recall: 79.06%',
                'F1-Score: 79.26%',
                'Optimized threshold detection'
            ]
        },
        link: 'https://github.com/p-georgiadis/ML-AI-Wine-Predicting',
        isOpenSource: false,
    },
    {
        id: "wine-clustering",
        category: "Machine Learning & AI",
        title: 'Wine Market Segmentation Analysis',
        description: 'Machine learning project analyzing wine market segmentation using unsupervised learning techniques. Features comprehensive clustering analysis using K-means and hierarchical methods, with PCA for dimensionality reduction. Delivered actionable insights for retailers and producers based on price, variety, and region clustering.',
        tags: [
            'Python',
            'Scikit-learn',
            'Pandas',
            'NumPy',
            'K-means',
            'PCA',
            'Hierarchical Clustering',
            'Data Visualization',
            'Seaborn',
            'Matplotlib'
        ],
        infrastructure: [
            'Jupyter Notebook environment',
            'Statistical analysis framework',
            'Data visualization suite',
            'Pandas data processing pipeline',
            'Scikit-learn ML pipeline'
        ],
        techDetails: {
            analysis: [
                'Principal Component Analysis (PCA)',
                'K-means clustering algorithm',
                'Hierarchical clustering with dendrograms',
                'Silhouette score optimization',
                'Elbow method validation'
            ],
            preprocessing: [
                'Missing value handling',
                'Feature scaling and normalization',
                'Categorical variable encoding',
                'Outlier detection and handling',
                'Data cleaning pipelines'
            ],
            visualization: [
                'Correlation heatmaps',
                'Distribution analysis plots',
                'Cluster visualization',
                'PCA component analysis plots',
                'Interactive clustering plots'
            ],
            insights: [
                'Market segmentation patterns',
                'Price-quality relationships',
                'Regional clustering analysis',
                'Consumer preference mapping',
                'Product positioning strategies'
            ]
        },
        link: 'https://github.com/p-georgiadis/ML-Unsupervised-Learning-Wine',
        isOpenSource: false,
    },
    {
        id: "disaster-tweets",
        title: 'NLP Disaster Tweet Classification',
        description: 'Deep learning model using LSTM and GloVe embeddings to classify tweets as disaster-related or non-disaster. Achieved 82% accuracy with optimized threshold detection. Features hyperparameter tuning, comprehensive data preprocessing, and detailed performance visualization.',
        category: 'Machine Learning & AI',
        tags: [
            'Python',
            'TensorFlow',
            'LSTM',
            'NLP',
            'Deep Learning',
            'GloVe',
            'Keras',
            'Scikit-learn'
        ],
        infrastructure: [
            'CUDA-enabled GPU processing',
            'TensorFlow mixed precision training',
            'Keras Tuner for hyperparameter optimization',
            'Numpy and Pandas for data processing',
        ],
        techDetails: {
            model: [
                'LSTM network with GloVe embeddings (300d)',
                'Bidirectional LSTM layers (64/128 units)',
                'Batch Normalization for training stability',
                'L2 regularization for overfitting prevention',
                'Dropout layers (0.3 rate)',
                'Adam optimizer with tuned learning rate'
            ],
            preprocessing: [
                'Text tokenization and lemmatization',
                'Custom contraction handling',
                'Stop word removal',
                'HTML entity decoding',
                'Special character cleaning'
            ],
            analysis: [
                'Precision-Recall curve optimization',
                'ROC curve analysis',
                'Confusion matrix visualization',
                'Word cloud generation',
                'Error analysis and classification reports'
            ],
            performance: [
                'Accuracy: 82%',
                'Precision (Disaster): 0.89',
                'Recall (Disaster): 0.71',
                'F1-Score: 0.79',
                'Optimized threshold: 0.374'
            ]
        },
        link: 'https://github.com/p-georgiadis/NLP-Disaster-Tweets',
    },
    {
        id: "matrix-factorization-project",
        title: "Matrix Factorization: BBC News Classification and Movie Ratings",
        description: "This project explores unsupervised and supervised matrix factorization techniques applied to text classification and movie ratings prediction. It showcases advanced machine learning concepts such as Non-negative Matrix Factorization (NMF) and logistic regression, with thorough comparisons and performance evaluations.",
        category: "Machine Learning & AI",
        tags: [
            "Python",
            "Matrix Factorization",
            "NMF",
            "Logistic Regression",
            "Scikit-learn",
            "Text Classification",
            "Movie Ratings",
            "Unsupervised Learning",
            "Supervised Learning",
            "Hyperparameter Tuning"
        ],
        infrastructure: [
            "Jupyter Notebooks for model development and analysis",
            "Custom data preprocessing pipelines",
            "Evaluation using metrics like RMSE and accuracy",
            "Reports summarizing results and limitations"
        ],
        techDetails: {
            components: [
                "NMF for latent feature extraction",
                "TF-IDF vectorization for text features",
                "GridSearchCV for logistic regression parameter tuning",
                "Sparse matrix reconstruction for efficient storage",
                "Custom topic-to-category mapping in text classification"
            ],
            analysis: [
                "Comparison of supervised vs unsupervised approaches",
                "Training accuracy up to 96.29% with NMF + Logistic Regression",
                "Root Mean Squared Error (RMSE) of 2.85 on movie ratings",
                "Visualization of confusion matrices and topic distributions",
                "Performance optimization with hyperparameter tuning"
            ],
            datasets: [
                "BBC News dataset for text classification",
                "Custom movie ratings dataset for collaborative filtering",
                "Preprocessed TF-IDF and sparse matrices for efficiency"
            ]
        },
        link: "https://github.com/p-georgiadis/Matrix-Factorization-Project",
        isOpenSource: true,
    },
    {
        id: "deep-racer",
        title: "AWS DeepRacer Project",
        description: "Development of a high-performing AWS DeepRacer model for the AWS DeepRacer Student League, leveraging reinforcement learning techniques, optimized reward functions, and racing line calculations.",
        category: "Machine Learning & AI",
        tags: [
            "Reinforcement Learning",
            "AWS DeepRacer",
            "Python",
            "Shapely",
            "Matplotlib",
            "Gradient Descent",
            "Optimization",
            "AI Scholarship",
            "Autonomous Vehicles"
        ],
        infrastructure: [
            "AWS DeepRacer cloud training environment",
            "Custom-designed reward function incorporating racing line adherence, speed, and steering",
            "Race track analysis using Shapely and Matplotlib for center, inner, and outer borders",
            "Iterative optimization of racing line using gradient descent"
        ],
        techDetails: {
            analysis: [
                "Analyzed 'jyllandsringen_open_cw' track with waypoints for precise track representation",
                "Generated racing line using gradient descent to optimize curvature and distance",
                "Visualized track features using Python libraries"
            ],
            rewardFunction: [
                "Designed reward function emphasizing track adherence and smooth direction changes",
                "Incorporated penalties for excessive steering and off-track behavior",
                "Optimized for maintaining progress and consistent speed"
            ],
            training: [
                "Trained model using AWS DeepRacer simulator with iterative refinements",
                "Evaluated performance through race metrics and adjusted reward function"
            ]
        },
        link: "https://github.com/p-georgiadis/deep-racer",
        isOpenSource: false,
    },
    {
        id: "puzzle-game",
        title: 'Six Little Words Puzzle Creator',
        description: 'Java-based educational word puzzle generator that creates engaging word games from user-provided words and clues. Features word tokenization, random puzzle generation, and comprehensive unit testing. Developed as a graduate course capstone project demonstrating SOLID principles and OOP design patterns.',
        category: 'Software Engineering',
        tags: [
            'Java',
            'OOP',
            'Unit Testing',
            'JUnit',
            'Educational Game',
            'SOLID Principles',
            'Design Patterns',
            'UML'
        ],
        infrastructure: [
            'Maven project structure',
            'JUnit test framework',
            'PlantUML for diagrams',
            'Git version control'
        ],
        techDetails: {
            design: [
                'Object-Oriented Design with SOLID principles',
                'UML class diagrams for architecture',
                'Clear separation of concerns',
                'Modular component design',
                'Extensible architecture'
            ],
            components: [
                'Puzzle class for game logic',
                'Reader class for input handling',
                'Tokenizer for word processing',
                'PuzzlePrint for output formatting',
                'Comprehensive test suite'
            ],
            functionality: [
                'Two-letter word tokenization',
                'Random token arrangement',
                'Clue management system',
                'Answer key generation',
                'Input validation'
            ],
            testing: [
                'JUnit test coverage',
                'Input validation tests',
                'Token generation tests',
                'Randomization tests',
                'Edge case handling'
            ]
        },
        link: 'https://github.com/p-georgiadis/puzzle-game',
    },
    {
        id: "visualization-project",
        title: "Data Visualization: Titanic Dataset Exploration",
        description: "A structured data visualization project exploring the Titanic dataset to uncover patterns and insights. Focused on designing user-centric visualizations using principles from data cognition, perception, and storytelling.",
        category: "Software Engineering",
        tags: [
            "Python",
            "Altair",
            "Pandas",
            "Jupyter Notebook",
            "Data Visualization",
            "Exploratory Data Analysis",
            "Human-Computer Interaction",
            "Data Storytelling"
        ],
        infrastructure: [
            "Exploratory data analysis pipeline",
            "Custom visualizations with Altair",
            "Evaluation through user feedback",
            "Detailed project documentation and reporting"
        ],
        techDetails: {
            analysis: [
                "Explored relationships between survival, class, age, and fare using bar charts, histograms, and scatter plots",
                "Implemented feature engineering, including family size and cabin deck classification",
                "Analyzed survival rates by gender and port of embarkation"
            ],
            visualizations: [
                "Designed insightful visualizations such as heatmaps, stacked bar charts, and scatter plots",
                "Stored visualizations in reusable formats for presentations",
                "Optimized visualizations for clarity and user understanding"
            ],
            evaluation: [
                "Conducted user feedback sessions to refine visualizations",
                "Focused on usability and effectiveness of storytelling through data",
                "Iterative improvements based on cognitive and perceptual principles"
            ]
        },
        link: "https://github.com/p-georgiadis/Visualization-Project",
        isOpenSource: false
    },
    {
        id: "quantum-odyssey",
        title: 'Quantum Computing Odyssey',
        description: 'Implementation of foundational quantum computing algorithms using IBM\'s Qiskit framework. Features quantum teleportation, GHZ state generation, Bell\'s inequality testing, and Grover\'s search algorithm. Includes comprehensive testing suite and quantum circuit visualizations.',
        category: 'Software Engineering',
        tags: [
            'Python',
            'Qiskit',
            'Quantum Computing',
            'IBM Quantum',
            'Numpy',
            'Matplotlib',
            'Unit Testing',
            'Scientific Computing'
        ],
        infrastructure: [
            'Qiskit Aer for quantum simulation',
            'Quantum circuit transpilation',
            'Quantum state visualization',
            'Automated testing framework'
        ],
        techDetails: {
            algorithms: [
                'GHZ State Generation - Three-qubit entangled state',
                'Quantum Teleportation Protocol',
                'Bell\'s Inequality Testing',
                'Grover\'s Search Algorithm',
                'Multi-Controlled Phase Gates'
            ],
            quantumFeatures: [
                'Quantum superposition with Hadamard gates',
                'Quantum entanglement via CNOT operations',
                'Phase manipulation and amplitude amplification',
                'Quantum measurement and state preparation',
                'Bell state creation and manipulation'
            ],
            implementation: [
                'Custom quantum circuit design',
                'State vector simulation',
                'Circuit visualization using matplotlib',
                'Comprehensive error analysis',
                'Statistical result validation'
            ],
            testing: [
                'Automated test suite for each algorithm',
                'State preparation verification',
                'Quantum operation validation',
                'Statistical outcome analysis',
                'Edge case handling'
            ]
        },
        link: 'https://github.com/p-georgiadis/quantum-odyssey',
    },
    {
        id: "landing-page-project",
        title: "Advanced Dynamic Landing Page",
        description: "An interactive, responsive landing page demonstrating advanced DOM manipulation, performance optimization, and modern JavaScript techniques. Built as a final project for the Udacity Front-End Web Developer Nanodegree program, showcasing expertise in responsive design and event-driven interactivity.",
        category: "Software Engineering",
        tags: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Vanilla JavaScript",
            "Flexbox",
            "Intersection Observer API",
            "Performance Optimization",
            "Accessibility"
        ],
        infrastructure: [
            "Hosted on GitHub Pages",
            "Mobile-first responsive design using Flexbox and media queries",
            "Custom JavaScript for dynamic DOM manipulation and interactivity",
            "Performance optimization with throttling and debouncing"
        ],
        techDetails: {
            frontend: [
                "Vanilla JavaScript with ES6+ features",
                "Dynamic menu and section creation using advanced DOM manipulation",
                "Intersection Observer API for visibility tracking",
                "Responsive design with Flexbox and media queries",
                "Custom ARIA attributes and keyboard navigation for accessibility"
            ],
            performance: [
                "Optimized event handling with throttling and debouncing",
                "Smooth scrolling and interaction effects",
                "Lazy-loading and progressive enhancement techniques"
            ],
            design: [
                "Modern typography with Google Fonts (Poppins and Roboto Slab)",
                "Font Awesome for lightweight, scalable icons",
                "Minimalistic and elegant styling using CSS3 animations and transitions"
            ],
            deployment: [
                "Deployed to GitHub Pages",
                "Version control and collaboration with Git and GitHub",
                "Development environment setup for ES6+ support"
            ]
        },
        link: "https://p-georgiadis.github.io/Landing-Page-Project/",
        isOpenSource: true
    },
    {
        id: "blog-website-project",
        title: "Cyberpunk Blog Website",
        description: "A dynamic and responsive blog website themed around cyberpunk culture, featuring advanced HTML, CSS, and responsive design techniques. Developed as a project for the Udacity Frontend Web Development Nanodegree, it showcases skills in modern web design, accessibility, and modular component-based architecture.",
        category: "Software Engineering",
        tags: [
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Flexbox",
            "CSS Grid",
            "Design System",
            "Accessibility",
            "Frontend Web Development"
        ],
        infrastructure: [
            "Hosted on GitHub Pages",
            "Semantic HTML5 structure for improved accessibility",
            "Custom CSS with modular design system",
            "Mobile-first responsive layouts using CSS Grid and Flexbox"
        ],
        techDetails: {
            frontend: [
                "Hero sections with Call-to-Actions (CTAs)",
                "Dynamic blog post previews using grid layouts",
                "Reusable modular components like buttons and cards",
                "Author information and related content sections on blog pages",
                "Custom design system for consistent color schemes and typography"
            ],
            accessibility: [
                "ARIA attributes for screen reader compatibility",
                "High-contrast color schemes for readability",
                "WCAG 2.0 compliant design practices",
                "Keyboard navigation support"
            ],
            deployment: [
                "Deployed to GitHub Pages",
                "Version control and collaboration with Git and GitHub",
                "Development workflow optimized for modular CSS"
            ]
        },
        link: "https://p-georgiadis.github.io/blog-website-project/"
    },
]

export const SKILLS = {
    cloud: [
        'AWS (EC2, ECS, RDS, S3, VPC, IAM)',
        'GCP',
        'Azure',
        'DigitalOcean',
        'Cloud-Native Architecture',
        'Cloud Migration',
        'Cloud Automation',
        'Cloud Applications',
        'Cloud Administration',
        'IBM Cloud',
    ],
    devops: [
        'Docker',
        'Kubernetes',
        'Terraform',
        'Ansible',
        'Jenkins',
        'Git',
        'CI/CD',
        'Infrastructure as Code',
        'Prometheus',
        'Grafana',
        'ELK Stack',
        'CloudWatch',
        'Nagios',
    ],
    linux: [
        'Ubuntu',
        'Debian',
        'CentOS',
        'RHEL',
        'Shell Scripting',
        'Cron Jobs',
        'Linux System Administration',
        'LFCS Certified Systems Administrator',
        'CompTIA Linux+',
    ],
    networking: [
        'TCP/IP',
        'HTTP',
        'DNS',
        'TLS',
        'Load Balancing',
        'Firewalls',
        'VPNs',
        'Subnetting',
        'VLAN',
        'Wireless (WiFi)',
        'IP Networking',
    ],
    scripting_and_automation: [
        'Bash',
        'Python',
        'PowerShell',
        'Automation Scripts',
        'Infrastructure Automation',
    ],
    databases: [
        'SQL (MySQL, PostgreSQL)',
        'NoSQL (MongoDB)',
        'AWS RDS',
        'Database Design',
        'Database Management System (DBMS)',
        'Azure SQL',
    ],
    monitoring_and_logging: [
        'Prometheus',
        'Grafana',
        'CloudWatch',
        'ELK Stack',
        'Nagios',
    ],
    languages: [
        'Python',
        'TypeScript',
        'JavaScript',
        'Java',
        'Node.js',
        'Bash',
        'HTML',
        'CSS',
        'Mandarin',
        'Greek',
    ],
    frontend: [
        'React',
        'TailwindCSS',
        'Responsive Design',
        'Accessibility',
        'Document Object Model (DOM)',
        'Frontend Development',
        'Frontend Design',
        'Debugging Code',
        'Web Applications',
        'Web Performance Optimization',
    ],
    frameworks: [
        'Node.js',
        'Express.js',
        'Next.js',
        'React',
        'TailwindCSS',
        'Sass',
    ],
    virtualization: [
        'VMware',
        'VirtualBox',
        'Hyper-V',
        'Virtualization',
    ],
    web_development: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
        'Accessibility',
        'Document Object Model (DOM)',
        'Frontend Development',
        'Frontend Design',
        'Debugging Code',
        'Web Applications',
        'Web Performance Optimization',
    ],
    machine_learning_and_ai: [
        'Machine Learning',
        'Deep Learning',
        'Generative AI',
        'Supervised Learning',
        'Unsupervised Learning',
        'Evolutionary Algorithms',
        'Statistical Data Analysis',
        'Quantum Computing',
        'Robotics',
    ],
    other_skills: [
        'Stakeholder Management',
        'Technical Training',
        'Documentation',
        'Ticketing Systems (JIRA, Zendesk)',
        'Remote Troubleshooting',
        'Business Strategy',
        'Customer Service',
        'Marketing',
        'Real Estate Transactions',
        'Military Communications',
        'Military Weapons Handling',
    ],
};


export const CLOUD_CERTS = [
    {
        name: "Azure Fundamentals",
        issuer: "Microsoft",
        imageSrc: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
        link: "https://www.credly.com/badges/d330b1a1-77f7-4af9-a56e-40af2c879f0b",
    },
    {
        name: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        imageSrc: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
        link: "https://www.credly.com/badges/8c7eed6e-c9af-4e24-a9b3-b3f41396d03b",
    },
    {
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        imageSrc: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
        link: "https://www.credly.com/badges/8d22badf-d4c4-41e8-b7f6-1a6797ef2c7e",
    },
    {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "CNCF",
        imageSrc: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
        link: "https://www.credly.com/badges/01312f65-ea8d-4d5a-bbd0-37513e5d6d2e",
    },
    // Add cloud certs here
];

export const COMPTIA_CERTS = [
    {
        name: "Security+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png",
        link: "https://www.credly.com/badges/cc5ce734-5444-419c-9ebc-89cb56d352cd",
        stackable: false
    },
    {
        name: "A+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/CompTIA_A_2Bce.png",
        link: "https://www.credly.com/badges/9df5f69e-3a20-4313-b1c2-7f0782501f01",
        stackable: false
    },
    {
        name: "Network+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/e1fc05b2-959b-45a4-8d20-124b1df121fe/CompTIA_Network_2Bce.png",
        link: "https://www.credly.com/badges/3e26e203-56ab-4f06-9de9-d7c382a98936",
        stackable: false
    },
    {
        name: "Cloud+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/4a1a7339-ce0f-458a-9ee7-620416e68c19/CompTIA_Cloud_2Bce.png",
        link: "https://www.credly.com/badges/3834146c-4220-4631-817e-50ef45bfcfec",
        stackable: false
    },
    {
        name: "Linux+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/6edb32c5-37d8-4fd4-98cd-2811932f0185/CompTIA_Linux_2Bce.png",
        link: "https://www.credly.com/badges/c762b6ef-03f8-406d-81ac-8cd917b8da18",
        stackable: false
    },
    {
        name: "Server+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/273d9e31-b6a6-449d-8a77-9213a2618f6d/CompTIA_Server_2B.png",
        link: "https://www.credly.com/badges/58aea155-f60a-4bb4-bb2b-92294cb891bb",
        stackable: false
    },
    // Stackable Certifications
    {
        name: "IT Operations Specialist (CIOS)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
        link: "https://www.credly.com/badges/a1210664-2101-4c24-98b4-515952b0e10d",
        stackable: true
    },
    {
        name: "Secure Infrastructure Specialist (CSIS)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
        link: "https://www.credly.com/badges/c25beec2-db25-49d4-8f57-eaf079db6d7a",
        stackable: true
    },
    {
        name: "Network Infrastructure Professional (CNIP)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/f308a5b0-18e3-4e93-ae15-9f27dd0a94cc/CompTIA_CNIP.png",
        link: "https://www.credly.com/badges/bf686352-e1f2-4b93-ba05-610de106b88f",
        stackable: true
    },
    {
        name: "Linux Network Professional (CLNP)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/d68e17f2-b591-4f2e-ae64-414ba82665f4/CompTIA_CLNP.png",
        link: "https://www.credly.com/badges/86e768da-0947-4255-bdcc-4579f6c087a8",
        stackable: true
    },
    {
        name: "Systems Support Specialist (CSSS)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/802502c7-7b2c-4a96-82b0-e6aa5796e878/CompTIA_CSSS.png",
        link: "https://www.credly.com/badges/5076de9f-ed18-4f28-b195-bf2d4c878e2d",
        stackable: true
    },
    {
        name: "Secure Cloud Professional (CSCP)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/9f54bf46-dc18-408c-a74e-2637facd1856/CompTIA_CSCP.png",
        link: "https://www.credly.com/badges/6e31c04d-5049-413a-8eb1-11147c8b4ae7",
        stackable: true
    },
    {
        name: "Cloud Admin Professional (CCAP)",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/18218ce6-e7d4-4479-9500-b7499645b763/CompTIA_CCAP.png",
        link: "https://www.credly.com/badges/53e28659-ecae-4974-b838-d4adc252ef25",
        stackable: true
    },
];


export const LINUX_FOUNDATION_CERTS = [
    {
        name: "LFCS: Linux Foundation Certified Systems Administrator",
        issuer: "Linux Foundation",
        imageSrc: "https://images.credly.com/size/340x340/images/1e6611ca-8afe-4ecc-ad4d-305fba52ee7e/1_LFCS-600x600.png",
        link: "https://www.credly.com/badges/2099eaf8-2ff2-4087-97f9-189912dc4c83",
    },
    {
        name: "Cloud Engineer IT Professional Program",
        issuer: "Linux Foundation",
        imageSrc: "https://images.credly.com/size/340x340/images/2f33ded4-8e5e-442f-997d-2e804740ceab/image.png",
        link: "https://www.credly.com/badges/b67a98a9-0aba-4a27-8123-2666c62712ac",
    },
];

export const OTHER_CERTS = [
    {
        name: "ITIL 4 Foundation",
        issuer: "AXELOS",
        imageSrc: "https://images.credly.com/size/340x340/images/8b943c4b-c186-4e9f-84aa-004322b76eed/image.png",
        link: "https://www.credly.com/badges/30aa0ce5-379b-4116-aef0-b97c1cb3f8b4",
    },
    {
        name: "Docker Essentials: A Developer Introduction",
        issuer: "Docker",
        imageSrc: "https://images.credly.com/size/340x340/images/b0c5445a-72a2-46ce-a599-96147e210efb/blob",
        link: "https://www.credly.com/badges/888e8250-4ff7-4b34-bfdd-d4b87fa6a0d6",
    },
    {
        name: "IBM Cloud Essentials",
        issuer: "IBM",
        imageSrc: "https://images.credly.com/size/340x340/images/7d768acf-ce3c-4a05-9778-a5013b1211c9/blob",
        link: "https://www.credly.com/badges/dc074bfb-5043-47f1-b0a6-9bf3e45e9373",
    },
    {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        imageSrc: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        link: "https://www.credly.com/badges/542021b7-8c53-4de9-b705-e21c28d232dc",
    },
    {
        name: "Networking Basics",
        issuer: "Cisco",
        imageSrc: "https://images.credly.com/size/340x340/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
        link: "https://www.credly.com/badges/7b88ac1b-c09c-432a-89f0-7e2c719e0fc6",
    },
];

export const EXPERIENCES = [
    {
        title: "Owner & System Administrator",
        company: "Meze LLC",
        duration: "Mar 2019 - Jan 2025",
        details: [
            "Administered Linux systems, creating cron jobs and scripts for end-of-day tasks and Raspberry Pi-based VoIP infrastructure in a hybrid environment.",
            "Deployed and managed AWS EC2 instances with SQL and RDS databases for POS systems and inventory tracking.",
            "Implemented containerization using AWS ECS, Docker, and CI/CD with GitHub Actions.",
            "Managed Ubiquiti networking products, configuring 48-port switches with custom NAT, VLANs, and subnets based on business use cases.",
            "Configured Ubiquiti firewall security gateway and access points, setting up separate WiFi networks for employees and guests with landing page terms and conditions.",
            "Deployed Nginx, Kubernetes, and Docker containers for on-premise static website hosting with online-ordering, later migrating to a cloud provider.",
            "Provided technical support and training for over 10 employees on various business equipment, including handhelds, POS systems, serial printers, tablets, and VoIP phone systems.",
            "Served as the sole point of contact for troubleshooting and assisting staff from diverse backgrounds and age groups.",
            "Created instructional documentation for software to streamline troubleshooting processes for employees.",
            "Collaborated with stakeholders, providing quarterly and annual business performance data based on online customer interactions and in-house sales."
        ],
    },
    {
        title: "Army Signal Corps",
        company: "Greek Army",
        duration: "Jan 2022 - Dec 2023",
        details: [
            "Served under mandatory conscription service as a dual US-Greek citizen, fulfilling a legal obligation for military service in Greece.",
            "Configured and utilized RADIUS and TACACS+ servers to enhance network security.",
            "Troubleshot diverse computer systems, communication networks, and surveillance camera setups.",
            "Orchestrated strategic maintenance and upgrades for communication systems.",
            "Collaborated with teams to provide technical expertise and training.",
        ],
    },
    // Add more experiences here
];

export const EDUCATION = [
    {   institution: "University of Colorado Boulder",
        logo: "/images/university_of_colorado.png",
        degree: "Master of Science - MS, Computer Science",
        duration: "Jan 2024 - Apr 2025",
        details: [
            "Focus: Cloud-Native Architecture, Machine Learning, and Systems Engineering",
            "GPA: 4.0",
            "Developed a strong foundation in algorithm design, including dynamic programming, greedy algorithms, and approximation techniques, complemented by advanced data structures and quantum computing concepts.",
            "Gained expertise in networking systems, cloud architectures, and Linux-based network configurations, with hands-on experience in designing scalable cloud solutions.",
            "Mastered core principles of supervised, unsupervised, and deep learning, including neural network architectures, generative AI models, and advanced machine learning techniques.",
            "Explored ethical dimensions of AI, robotics, and computing applications, fostering a comprehensive understanding of societal and professional responsibilities in technology development.",
            "Specialized in autonomous systems and robotics, with an emphasis on system modeling, verification, synthesis, path planning, and robotic task execution.",
            "Acquired practical skills in big data software architecture, focusing on designing and implementing large-scale data-driven systems.",
            "Deepened knowledge in data mining processes, from pipeline creation to method application and project execution.",
            "Achieved proficiency in relational database design, SQL, and advanced database technologies, including modeling and future trends.",
            "Enhanced data visualization capabilities and object-oriented design principles to deliver clear, actionable insights and robust software solutions."
        ]
    },
    {
        institution: "Udacity",
        logo: "/images/udacity_logo.png", // Add the Udacity logo in your public/images folder
        degree: "Nanodegree, Front End Web Development",
        duration: "Aug 2024 - Nov 2024",
        details: [
            "CSS, Website Layout, Website Components",
            "JavaScript & the DOM",
            "Web APIs and Asynchronous Applications",
            "Build Tools and Single Page Web Apps",
        ],
    },
    {
        institution: "The Linux Foundation & The Cloud Native Computing Foundation",
        logo: "/images/linux_foundation_logo.png", // Add the Linux Foundation logo in your public/images folder
        degree: "Cloud Engineer IT Professional Program Bootcamp",
        duration: "Aug 2023 - Jun 2024",
        details: [
            "LF Certified Cloud Technician",
            "LF Certified Linux System Administrator",
            "CNCF Certified Kubernetes Administrator",
        ],
    },
    {
        institution: "Visible Edge, Inc.",
        logo: "/images/visible_edge_logo.png", // Add the Visible Edge logo in your public/images folder
        degree: "Cloud Architect & IT Support",
        duration: "Mar 2023 - Aug 2023",
        details: [
            "CompTIA Trifecta",
            "Microsoft Certified: Azure Fundamentals",
            "AWS Certified Cloud Practitioner",
            "Axelos ITIL 4 Certified",
        ],
    },
    {
        institution: "Saint John's High School",
        logo: "/images/saint_johns_logo.png", // Add the Saint John's logo in your public/images folder
        degree: "High School Diploma",
        duration: "",
        details: [
            "National Honor Society Member",
            "AP Mandarin Chinese",
            "Captain of the Varsity Wrestling Team",
            "Investment Club",
            "SJ Jazz Band - Jazz Guitar",
        ],
    },
];
