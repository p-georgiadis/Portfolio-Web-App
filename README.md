# Next.js Application with TailwindCSS

This repository contains a Next.js application styled with TailwindCSS. It is designed to be deployed to AWS S3 with automated updates using GitHub Actions.

## Features

- **Next.js Framework:** Enables server-side rendering and static site generation.
- **TailwindCSS Integration:** Provides utility-first CSS for rapid UI development.
- **TypeScript Support:** Ensures type safety and modern JavaScript features.
- **ESLint & Prettier:** Ensures clean, consistent, and error-free code.
- **GitHub Actions:** Automates deployments to AWS S3 upon updates to the `main` branch.
- **Responsive Design:** Fully responsive and mobile-friendly.

---

## Project Structure

```
.
├── app/                     # Main application directory
├── public/                  # Static assets (e.g., images, fonts)
├── styles/                  # Global CSS files
├── .github/workflows/       # GitHub Actions for CI/CD
├── .next/                   # Next.js build artifacts (ignored)
├── node_modules/            # Project dependencies (ignored)
├── .env.local               # Local environment variables (ignored)
├── package.json             # Project dependencies and scripts
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## Prerequisites

To work with this project, you’ll need the following installed:

- **Node.js** (v18 or higher)
- **Yarn** (or npm)
- **AWS CLI** (for manual S3 management)
- **Git**

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

Visit `http://localhost:3000` to view your application.

---

## Deployment

### Manual Deployment to S3

1. **Build the application:**

   ```bash
   yarn build
   ```

2. **Export static files:**

   ```bash
   yarn export
   ```

3. **Sync with S3 bucket:**

   ```bash
   aws s3 sync out/ s3://your-s3-bucket-name --delete
   ```

---

### Automated Deployment with GitHub Actions

This repository is set up to deploy changes to your S3 bucket whenever the `main` branch is updated.

1. Add the following secrets to your GitHub repository:
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`
    - `AWS_S3_BUCKET`
    - `AWS_REGION`

2. Push updates to the `main` branch to trigger deployment.

---

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [AWS S3](https://aws.amazon.com/s3/)
- [GitHub Actions](https://github.com/features/actions)

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email:** [pgeorgiadis.it@gmail.com](mailto:pgeorgiadis.it@gmail.com)
- **GitHub:** [p-georgiadis](https://github.com/p-georgiadis)
- **LinkedIn:** [Panagiotis Georgiadis](https://linkedin.com/in/p-georgiadis)