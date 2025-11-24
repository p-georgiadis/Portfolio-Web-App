// app/lib/constants.ts
import { ProjectCategory, Project, Experience } from './types';

export const SITE_CONFIG = {
    name: 'Pano Georgiadis',
    role: 'Cloud & DevOps Engineer | M.S. Computer Science | Multi-Cloud Certified | CompTIA Network of Experts',
    email: 'pgeorgiadis.it@gmail.com',
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
        id: "oci-foundation-enterprise",
        title: 'Enterprise-Grade OCI Foundation Implementation',
        description: 'Architected and deployed comprehensive Oracle Cloud Infrastructure foundation from zero institutional knowledge as sole cloud expert at Fortune 500 insurance company. Delivered production-ready multi-region environment in 4 weeks, achieving 100% CIS benchmark compliance with 73+ Terraform-managed resources, 11 security zones, and full SIEM integration—saving over $500,000 versus traditional enterprise team approach.',
        category: 'Cloud & Infrastructure',
        tags: [
            'Oracle Cloud (OCI)',
            'Terraform',
            'Azure DevOps',
            'CIS Compliance',
            'QRADAR SIEM',
            'Security Zones',
            'Cloud Guard',
            'Multi-Region',
            'Enterprise IAM',
            'IaC'
        ],
        infrastructure: [
            'Oracle Cloud Infrastructure (OCI) multi-region deployment',
            '73+ Terraform-managed resources across 7 reusable modules',
            '10-compartment hierarchy with conditional deployments',
            '11 Security Zones with Maximum Security Recipe (352 total policies)',
            'Cloud Guard with Oracle-managed detector and responder recipes',
            '22 event rules across 2 regions for comprehensive monitoring',
            'QRADAR SIEM integration with Kafka streaming',
            'Centralized logging infrastructure with service connectors',
            'Native OCI Object Storage backend for Terraform state'
        ],
        techDetails: {
            infrastructure: [
                '48 Terraform files organized in 7 production modules',
                'Finance compartment hierarchy (ARCS, Planning, PaaS, IaaS)',
                'Security compartment with centralized logging',
                'Multi-region architecture (primary + secondary)',
                'Automated compartment provisioning with feature flags',
                'Native OCI state backend with ETag locking',
                '90-day state retention with versioning'
            ],
            security: [
                '100% CIS OCI Foundation Benchmark compliance',
                '30+ automated CIS controls across all categories',
                '11 Security Zones enforcing Oracle Maximum Security Recipe',
                'Zero-trust model with default deny quotas',
                'IAM framework with 11 comprehensive policies',
                'Break-glass procedures and service account automation',
                'Multi-region event monitoring (IAM, Network, Cloud Guard)',
                'QRADAR SIEM with 168-hour retention and SASL auth'
            ],
            cicd: [
                '4 Azure DevOps pipelines (62,538 lines of YAML)',
                'Main deployment pipeline with Validate → Plan → Apply stages',
                'Daily drift detection with detailed-exitcode monitoring',
                'Weekly CIS compliance validation and HTML dashboards',
                'Controlled destruction pipeline with approval gates',
                'Automated rollback on failure detection',
                'Secure credential management via Azure Key Vault'
            ],
            governance: [
                'Operations tag namespace with 3 tags (CostCenter, Environment, Application)',
                '4 tag default assignments for automatic resource tagging',
                'Zero-trust quota policies preventing unauthorized resources',
                'Dynamic IAM group management from CSV',
                'Active Directory synchronization for enterprise integration',
                'Comprehensive audit trail with complete logging'
            ],
            documentation: [
                '34 comprehensive documentation files',
                'Architecture guides, pipeline documentation, security procedures',
                'QUICKSTART deployment guide and troubleshooting docs',
                'CIS compliance guides and integration documentation',
                'Break-glass and service account bootstrap procedures'
            ]
        },
        isOpenSource: false,
        featured: true,
    },
    {
        id: "weather-app-eks",
        title: 'Cloud-Native Weather Application on AWS EKS',
        description: 'Production-ready weather application deployed on AWS EKS using modern cloud-native best practices. Features Terraform Infrastructure as Code, Tekton CI/CD pipelines, GitOps workflows, and comprehensive security with IRSA and External Secrets Operator. Demonstrates advanced Kubernetes management with EKS Access Entries and pod identity visibility.',
        category: 'Cloud & Infrastructure',
        tags: [
            'AWS EKS',
            'Terraform',
            'Kubernetes',
            'Tekton',
            'GitOps',
            'Helm',
            'Node.js',
            'IRSA',
            'ECR',
            'DevOps'
        ],
        infrastructure: [
            'Amazon EKS with EKS Access Entries (modern auth)',
            'Amazon ECR with lifecycle policies',
            'AWS Secrets Manager with External Secrets Operator',
            'VPC with private subnets and NAT gateways',
            'IAM Roles for Service Accounts (IRSA)',
            'EBS CSI Driver with gp3 storage class',
            'Terraform Cloud for state management',
            'Kubernetes RBAC with AWS SSO integration'
        ],
        techDetails: {
            backend: [
                'Node.js Express server',
                'OpenWeatherMap API integration',
                'Kubernetes Downward API for pod metadata',
                'Health and readiness endpoints',
                'Real-time server information display',
                'Environment-based configuration'
            ],
            frontend: [
                'Responsive HTML5/CSS3 interface',
                'Real-time weather data visualization',
                'Pod identity visibility feature',
                'Mobile-optimized design',
                'Font Awesome icons',
                'Auto-refreshing server information'
            ],
            infrastructure: [
                'Terraform modules for VPC, EKS, ECR',
                'Helm charts for application deployment',
                'Tekton pipelines for Kubernetes-native CI/CD',
                'Kaniko for secure container building',
                'External Secrets Operator for secret management',
                'Pod Security Standards enforcement'
            ],
            security: [
                'Zero-trust identity model with IRSA',
                'Least privilege IAM policies',
                'Network isolation with private subnets',
                'Secret management via AWS Secrets Manager',
                'Pod identity isolation per service',
                'EKS Access Entries for modern authentication'
            ]
        },
        link: 'https://github.com/p-georgiadis/weather-app',
        isOpenSource: true,
    },
    {
        id: "terraform-docker-dashboard",
        title: 'Terraform Multi-Container Infrastructure with Interactive Dashboard',
        description: 'Local infrastructure demonstration using Terraform to orchestrate multi-container environments with Docker. Features modular Terraform architecture, MySQL database management, and a modern PHP dashboard interface for database operations. Showcases Infrastructure as Code principles in a containerized microservices environment.',
        category: 'Cloud & Infrastructure',
        tags: [
            'Terraform',
            'Docker',
            'MySQL',
            'PHP',
            'Nginx',
            'IaC',
            'Microservices',
            'WSL2',
            'DevOps',
            'Containers'
        ],
        infrastructure: [
            'Docker bridge network for container communication',
            'MySQL container with persistent data volumes',
            'Nginx with PHP-FPM for web interface',
            'Modular Terraform structure',
            'WSL2 Ubuntu environment',
            'Container health monitoring',
            'Automated container lifecycle management'
        ],
        techDetails: {
            backend: [
                'MySQL 8.0 database container',
                'PHP 8.1 with Alpine Linux',
                'Database connection testing scripts',
                'SQL query execution interface',
                'Table creation and management',
                'Error handling and logging'
            ],
            frontend: [
                'Modern dark theme dashboard',
                'Real-time container status monitoring',
                'Interactive SQL query interface',
                'Responsive design for mobile devices',
                'AJAX-based database operations',
                'Bootstrap styling framework'
            ],
            infrastructure: [
                'Terraform modules for network, database, web',
                'Docker provider configuration',
                'Container dependency management',
                'Persistent volume configuration',
                'Port mapping and service discovery',
                'State management with Terraform'
            ],
            devops: [
                'Infrastructure as Code with Terraform',
                'Modular architecture for reusability',
                'Container orchestration with Docker',
                'Environment variable management',
                'Automated setup and teardown scripts',
                'WSL2 integration for Windows development'
            ]
        },
        link: 'https://github.com/p-georgiadis/terraform-docker-php-mysql-dashboard',
        isOpenSource: true,
    },
    {
        id: "ai-photo-enhancer",
        title: 'AI-Powered Photo Enhancement with Real-ESRGAN & GFPGAN',
        description: 'GPU-accelerated photo enhancement application using state-of-the-art AI models for image super-resolution and face restoration. Optimized for RTX 3070 Ti with CUDA acceleration, featuring Real-ESRGAN for general image upscaling and GFPGAN for specialized face enhancement. Includes automated batch processing and memory management for large images.',
        category: 'Machine Learning & AI',
        tags: [
            'Python',
            'PyTorch',
            'CUDA',
            'Real-ESRGAN',
            'GFPGAN',
            'Computer Vision',
            'AI',
            'GPU',
            'Deep Learning',
            'Image Processing'
        ],
        infrastructure: [
            'CUDA 11.8 toolkit for GPU acceleration',
            'Python 3.11 virtual environment',
            'PyTorch with CUDA support',
            'WSL2 Ubuntu 24.04 development environment',
            'Automated model downloading and caching',
            'Memory-optimized processing for large images'
        ],
        techDetails: {
            ai_models: [
                'Real-ESRGAN for 4x image super-resolution',
                'GFPGAN for face enhancement and restoration',
                'Automatic model download and management',
                'GPU memory optimization with tiling',
                'Batch processing for multiple images',
                'Support for various image formats'
            ],
            performance: [
                'CUDA acceleration for RTX 3070 Ti (8GB VRAM)',
                'Automatic memory management and tiling',
                'Optimized for graduation photo enhancement',
                'Configurable upscale factors (2x, 4x)',
                'Face detection and enhancement pipeline',
                'Efficient batch processing workflow'
            ],
            implementation: [
                'PyTorch 2.0.1 with CUDA 11.8',
                'OpenCV for image processing',
                'BasicSR framework integration',
                'FaceXLib for face analysis',
                'Command-line interface with options',
                'Error handling and progress monitoring'
            ],
            development: [
                'Virtual environment isolation',
                'Comprehensive dependency management',
                'WSL2 GPU passthrough configuration',
                'Interactive PyCharm development setup',
                'Automated setup and verification scripts',
                'Performance optimization for different GPUs'
            ]
        },
        link: 'https://github.com/p-georgiadis/photo_enhancer',
        isOpenSource: true,
    },
    {
        id: "tiago-robot-controller",
        title: 'TIAGo Robot Autonomous Pick-and-Place Controller',
        description: 'Behavior tree-based autonomous controller for TIAGo robot performing pick-and-place operations in Webots simulator. Features computer vision for object recognition, inverse kinematics for arm control, GPS/compass navigation, and LIDAR-based obstacle avoidance. Demonstrates advanced robotics programming with hierarchical behavior trees and sensor fusion.',
        category: 'Software Engineering',
        tags: [
            'Python',
            'Robotics',
            'Webots',
            'Computer Vision',
            'Behavior Trees',
            'LIDAR',
            'Inverse Kinematics',
            'OpenCV',
            'AI',
            'Simulation'
        ],
        infrastructure: [
            'Webots R2023a robot simulator',
            'TIAGo robot platform integration',
            'Python 3.8+ runtime environment',
            'py_trees behavior tree framework',
            'OpenCV computer vision pipeline',
            'ikpy inverse kinematics solver'
        ],
        techDetails: {
            robotics: [
                'Hierarchical behavior tree architecture',
                'Computer vision object recognition',
                'Inverse kinematics with ikpy',
                'Force-based gripper control',
                'GPS and compass navigation',
                'LIDAR obstacle avoidance with 360° scanning'
            ],
            ai_vision: [
                'Multi-sample position averaging for stability',
                'Camera-to-world coordinate transformation',
                'Comprehensive 360° environment scanning',
                'Object detection with position estimation',
                'Dynamic head positioning for optimal viewing',
                'Sensor fusion for accurate localization'
            ],
            control_systems: [
                'Reactive navigation with waypoint following',
                'Collision avoidance using LIDAR sectors',
                'Adaptive motor control based on obstacles',
                'Precise arm positioning with joint control',
                'Gripper force feedback monitoring',
                'Safe positioning and movement planning'
            ],
            performance: [
                'Object recognition accuracy >95%',
                'Grasp success rate 100%',
                'Navigation accuracy ±0.08m',
                'Path efficiency 85-90%',
                'Full task completion ~120s',
                'Robust error handling and recovery'
            ]
        },
        link: 'https://github.com/p-georgiadis/Tiago-Robot-Controller',
        videoDemo: 'https://www.youtube.com/watch?v=rFbzJMR6La0&t=3s',
        isOpenSource: true,
    },
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
        isOpenSource: false
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
        isOpenSource: false
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
        isOpenSource: false
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
        isOpenSource: false
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
    cloud_platforms: [
        'AWS Solutions Architect',
        'Azure DevOps Engineer Expert, Administrator, Developer',
        'Oracle Cloud Infrastructure (OCI Architect)',
        'EC2, EKS, ECS, RDS, Lambda, S3, VPC',
        'Azure App Service, AKS, Azure Functions, Storage Accounts',
        'OCI Compartments, Security Zones, IAM',
        'GCP, Multi-Cloud Architecture'
    ],
    infrastructure_as_code: [
        'Terraform (Associate Certified)',
        'AWS CloudFormation',
        'ARM Templates, Bicep',
        'Ansible',
        'GitOps, Policy as Code',
        'Infrastructure Automation',
        'State Management'
    ],
    container_orchestration: [
        'Kubernetes (CKA Certified)',
        'Docker, Helm',
        'EKS/AKS/GKE',
        'Container Registry',
        'Microservices, Service Mesh',
        'Pod Security Standards'
    ],
    devops_cicd: [
        'Azure DevOps, GitHub Actions, Jenkins',
        'ArgoCD',
        'CI/CD Pipelines',
        'Blue-Green Deployment',
        'Configuration Management'
    ],
    security_compliance: [
        'Security+ Certified',
        'Zero Trust, IAM/RBAC, IRSA',
        'Network Security, CloudTrail, Security Groups',
        'Vulnerability Management',
        'SOC 2, HIPAA'
    ],
    linux_systems: [
        'LFCS/LFCT Certified',
        'Ubuntu, RHEL, CentOS',
        'Bash/Shell Scripting',
        'System Administration',
        'Performance Tuning',
        'Network Configuration'
    ],
    monitoring_sre: [
        'CloudWatch, Azure Monitor',
        'Prometheus, Grafana, ELK Stack',
        'Alerting, SLI/SLO',
        'Incident Response',
        'Site Reliability Engineering'
    ],
    programming: [
        'Python, JavaScript/Node.js',
        'Bash, PowerShell, SQL',
        'REST APIs, boto3, Azure SDK',
        'Git, JSON/YAML',
        'Database Management'
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
        name: "Azure DevOps Engineer Expert",
        issuer: "Microsoft",
        imageSrc: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
        link: "https://learn.microsoft.com/en-us/users/p-georgiadis/credentials/685f1dc754ecb7d7",
    },
    {
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        imageSrc: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
        link: "https://www.credly.com/badges/8d22badf-d4c4-41e8-b7f6-1a6797ef2c7e",
    },
    {
        name: "OCI Architect Associate",
        issuer: "Oracle",
        imageSrc: "https://images.credly.com/images/2936a311-fef7-4bf6-b2a8-af808788943a/OCI25CAA_cached_image_20251003-31-z1nj96.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=186BE05EBC4F3AFBD071E334404CF680D4998D76842A7D1D8796492472B742F7",
    },
    {
        name: "OCI Foundations Associate",
        issuer: "Oracle",
        imageSrc: "https://images.credly.com/images/06029c72-2e76-476f-96fd-c8f611420c49/OCI25FNDCFAV1_cached_image_20250926-31-s461ee.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3C6ABDA5CF0686F0E5CBFCFAD51A6380A97C0EA449684ABC6EB511874F6FEED3",
    },
    {
        name: "Azure Developer Associate",
        issuer: "Microsoft",
        imageSrc: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main",
        link: "https://learn.microsoft.com/en-us/users/p-georgiadis/credentials/cdabeec7a4608fce",
    },
    {
        name: "Azure Administrator Associate",
        issuer: "Microsoft",
        imageSrc: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/p-georgiadis/43D283DBE1AE2C51?sharingId=F1DDD9D8ACE92FDC",
    },
    {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "CNCF",
        imageSrc: "https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
        link: "https://www.credly.com/badges/01312f65-ea8d-4d5a-bbd0-37513e5d6d2e",
    },
    {
        name: "HashiCorp Certified: Terraform Associate (003)",
        issuer: "HashiCorp",
        imageSrc: "https://images.credly.com/size/340x340/images/0dc62494-dc94-469a-83af-e35309f27356/blob",
        link: "https://www.credly.com/badges/d59182d3-f49e-4d8d-837e-e85e4507cc90",
    },
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
];

export const COMPTIA_CERTS = [
    {
        name: "CloudNetX",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/16b097aa-10b3-4c90-9f96-f7b43ffa6cb4/blob",
        link: "https://www.credly.com/badges/4241a986-748f-4f60-ba3b-4706209ed841",
        stackable: false
    },
    {
        name: "Security+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
        link: "https://www.credly.com/badges/cc5ce734-5444-419c-9ebc-89cb56d352cd",
        stackable: false
    },
    {
        name: "A+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
        link: "https://www.credly.com/badges/9df5f69e-3a20-4313-b1c2-7f0782501f01",
        stackable: false
    },
    {
        name: "Network+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob",
        link: "https://www.credly.com/badges/3e26e203-56ab-4f06-9de9-d7c382a98936",
        stackable: false
    },
    {
        name: "Cloud+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/b2e3c623-cc4a-4f0c-8a3b-aa6231e138fe/blob",
        link: "https://www.credly.com/badges/3834146c-4220-4631-817e-50ef45bfcfec",
        stackable: false
    },
    {
        name: "Linux+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/c8ba8fa6-ab8b-4df7-879f-4ae7b98b2765/blob",
        link: "https://www.credly.com/badges/c762b6ef-03f8-406d-81ac-8cd917b8da18",
        stackable: false
    },
    {
        name: "Server+",
        issuer: "CompTIA",
        imageSrc: "https://images.credly.com/size/340x340/images/8293972f-573a-4d0b-be14-0bcb65e80b16/blob",
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
        name: "LFCT: Linux Foundation Certified Cloud Technician",
        issuer: "Linux Foundation",
        imageSrc: "https://images.credly.com/images/1648c7a8-3d44-4b7f-84d5-986746d9f7d0/image.png",
        link: "https://www.credly.com/badges/dda5fb2d-48b3-47c1-8edf-68f73cc3d34b",
    },
    {
        name: "Source Control Management with Git",
        issuer: "Linux Foundation",
        imageSrc: "https://images.credly.com/size/340x340/images/29ad7ced-93b0-4543-b84c-3c6ccc183405/image.png",
        link: "https://www.credly.com/badges/068e894f-82d6-40e4-bf24-30e261cbf3d4",
    },
    {
        name: "Shell Scripting using Bash",
        issuer: "Linux Foundation",
        imageSrc: "https://images.credly.com/images/62ed61bd-120c-487b-8d0f-aea54f414b2b/image.png",
        link: "https://www.credly.com/badges/1ab6fe59-b7dd-4ae5-97eb-3636d7f07c5a",
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

export const EXPERIENCES: Experience[] = [
    {
        title: "Cloud DevOps Engineer",
        company: "The Hanover Insurance Group, Massachusetts (Remote)",
        duration: "Sep 2025 - Present",
        logo: "/images/hanover.png",
        details: [
            "Multi-Cloud Infrastructure Architecture - OCI Greenfield Deployment: Independently architected and deployed Oracle Cloud Infrastructure (OCI) from zero institutional knowledge as sole cloud expert, delivering production-ready multi-region environment in 4 weeks and saving $500K+ versus external consultants; engineered 73+ infrastructure resources across 48 Terraform files and 7 reusable modules supporting critical business applications.",
            "Security & Compliance Leadership - Enterprise-Scale Hardening: Single-handedly achieved 100% CIS benchmark compliance across OCI environment, implementing 30+ security controls, 11 isolated security zones, and enterprise IAM architecture; established Azure security baseline with QRADAR SIEM integration and comprehensive monitoring across multi-cloud estate.",
            "CI/CD Pipeline Operations & Production Support: Maintained 5+ weekly production releases across Azure DevOps pipelines supporting business-critical applications; provided daily technical consultation to senior leadership on cloud architecture decisions and infrastructure optimization strategies.",
            "Azure Enterprise Infrastructure & Automation: Managed Azure landing zones, hub-spoke networking, and enterprise resource governance supporting organization-wide cloud operations; automated infrastructure provisioning and configuration management reducing manual deployment effort.",
            "Technical Leadership & Knowledge Transfer: Served as sole cloud infrastructure subject matter expert, providing daily technical guidance to senior leadership and development teams; established cloud best practices and governance frameworks enabling organizational cloud maturity."
        ],
    },
    {
        title: "Systems Administrator - Jr. Cloud Engineer", // Updated title
        company: "Meze LLC, Massachusetts",
        duration: "Mar 2019 - Jan 2025",
        details: [
            "Designed and implemented AWS-based infrastructure (EC2, RDS, ECS) for business applications; orchestrated containerized applications using Docker and Kubernetes; created CI/CD pipelines with GitHub Actions; implemented monitoring and logging solutions.",
            "Architected secure network infrastructure using Ubiquiti products, configuring VLANs, subnets, and custom NAT rules; established network segmentation with separate WiFi networks; managed firewall configurations and security protocols.",
            "Migrated from traditional PBX to EC2 and Raspberry Pi-based 3CX phone systems with SIP trunking, reducing monthly telecom costs by 90% while achieving 99.9% uptime and enhancing call quality; automated Linux system maintenance with custom scripts and scheduled jobs; implemented Nginx for on-premise web hosting.",
            "Designed and deployed a hybrid cloud-on-premises environment that maintained critical business functions during 7 power outages and 3 major ISP disruptions, ensuring continuous payment processing and remote operations; served as primary technical resource for a 15-employee organization; created comprehensive technical documentation."
        ],
    },
    {
        title: "Signals Corps Specialist",
        company: "Greek Army, Central Macedonia, Greece",
        duration: "Jan 2022 - Dec 2022",
        details: [
            "Fulfilled mandatory military service requirement as a US-born citizen with dual Greek citizenship, applying technical skills to military communication systems while meeting conscription obligations.",
            "Maintained mission-critical military communication networks with 99.98% uptime requirements in high-pressure tactical environments, developing exceptional troubleshooting skills under extreme time constraints.",
            "Implemented advanced authentication systems including RADIUS and TACACS+ for secure access control across sensitive network infrastructure, ensuring zero security breaches during tenure.",
            "Operated in 24/7 rotating shift environments responding to priority incidents within 5-minute SLAs, developing exceptional incident management capabilities applicable to cloud infrastructure monitoring.",
            "Applied military-grade security standards to mission-critical systems while successfully completing 20+ high-stress deployment exercises, demonstrating adaptability and performance excellence under pressure."
        ],
    },
];

export const EDUCATION = [
    {
        institution: "University of Colorado Boulder",
        logo: "/images/university_of_colorado.png",
        degree: "Master of Science in Computer Science",
        duration: "Jan 2023 - May 2025",
        gpa: "4.0",
        specializations: [
            "Software Architecture for Big Data",
            "Machine Learning",
            "Networking & Cloud Systems",
            "Algorithms",
            "Computing Ethics"
        ],
        aiCertificate: "Machine Learning, Robotics, Autonomous Systems, Generative AI",
        details: [
            "Algorithm Design & Quantum Computing",
            "Cloud & Network Architecture",
            "Machine Learning & Neural Networks",
            "Autonomous Systems & Robotics",
            "Data Mining & Database Systems",
            "Software Architecture & OO Design"
        ],
        mastersDiploma: "/images/masters-diploma.png",
        aiCertificateImage: "/images/ai-certificate.png"
    },
    {
        institution: "Udacity",
        logo: "/images/udacity_logo.png",
        degree: "AI Programming with Python Nanodegree",
        duration: "Nov 2024 - Mar 2025",
        details: [
            "Developed AI applications with Python, NumPy, pandas, and Matplotlib; implemented neural networks with PyTorch",
            "Applied linear algebra and calculus fundamentals to build and train an image classifier using backpropagation"
        ]
    },
    {
        institution: "Udacity",
        logo: "/images/udacity_logo.png",
        degree: "Front End Web Developer Nanodegree",
        duration: "Aug 2024 - Nov 2024",
        details: [
            "Built responsive web applications with JavaScript, DOM manipulation, asynchronous programming, and Express",
            "Implemented performance optimization using Webpack, Sass, and service workers for offline functionality"
        ],
    },
    {
        institution: "The Linux Foundation & The Cloud Native Computing Foundation",
        logo: "/images/linux_foundation_logo.png",
        degree: "Cloud Engineer IT Professional Program",
        duration: "Aug 2023 - Jun 2024",
        details: [
            "LF Certified Cloud Technician, CNCF Certified Kubernetes Administrator, Advanced Linux system administration"
        ],
    },
    {
        institution: "Visible Edge, Inc.",
        logo: "/images/visible_edge_logo.png",
        degree: "Cloud Architecture & IT Support Program",
        duration: "Mar 2023 - Aug 2023",
        details: [
            "CompTIA A+ and Network+, Microsoft Azure Fundamentals, AWS Certified Cloud Practitioner, ITIL 4 Certified"
        ],
    },
    {
        institution: "Saint John's High School",
        logo: "/images/saint_johns_logo.png",
        degree: "Graduated with Honors",
        duration: "",
        details: [
            "NHS Member, AP Mandarin Chinese, Varsity Wrestling Captain, Investment Club, Jazz Band (Guitar)"
        ],
    },
];