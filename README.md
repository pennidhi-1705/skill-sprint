# skill-sprint
# SkillSprint 🚀

### Small Tasks. Real Experience. Local Impact.

SkillSprint is a skill-based opportunity and micro-internship platform that connects students with organizations through practical, real-world tasks. It helps students gain hands-on experience, develop relevant skills, and build their professional portfolios while enabling organizations to discover talent and assign meaningful work.

The platform also features **Harry AI**, a conversational assistant that helps users interact with SkillSprint and understand its features.

<p align="center">
  <a href="https://skillsprint-harry-ai.vercel.app/">
    <strong>🌐 Visit SkillSprint Live Website</strong>
  </a>
  &nbsp; | &nbsp;
  <a href="https://github.com/pennidhi-1705/skill-sprint">
    <strong>💻 GitHub Repository</strong>
  </a>
</p>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Harry AI Assistant](#-harry-ai-assistant)
- [How SkillSprint Works](#-how-skillsprint-works)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Database and Backend](#-database-and-backend)
- [Current Implementation Status](#-current-implementation-status)
- [Future Enhancements](#-future-enhancements)
- [Team CODE COOKIES](#-team-code-cookies)
- [License](#-license)

---

## 🌟 About the Project

SkillSprint bridges the gap between academic learning and practical industry experience.

Many students learn technical and professional skills through coursework but need opportunities to apply those skills in real-world situations. SkillSprint provides a centralized platform where students can discover tasks, connect with organizations, work on projects, and receive feedback.

Organizations can publish opportunities, review applications, select suitable candidates, and evaluate submitted work.

### Our Vision

To make practical experience and skill development more accessible through meaningful, skill-based opportunities.

### Our Mission

- Connect students with organizations offering practical tasks.
- Encourage learning through real-world project experience.
- Help students demonstrate their abilities through completed work.
- Simplify the process of discovering and managing opportunities.
- Support professional networking between students and organizations.

---

## 🎯 Problem Statement

Students often face challenges when trying to gain practical experience and demonstrate their abilities beyond academic qualifications.

Organizations may also find it difficult to identify suitable candidates for small, specific tasks through conventional recruitment processes.

### Key Challenges

- Limited access to practical, real-world work opportunities.
- Difficulty demonstrating skills through completed projects.
- A gap between academic knowledge and practical application.
- Challenges in discovering suitable tasks and organizations.
- Limited opportunities for structured feedback and professional networking.
- Time-consuming processes for identifying candidates for specific tasks.

---

## 💡 Our Solution

SkillSprint provides a centralized platform where students and organizations connect through skill-based tasks and project opportunities.

The platform enables:

- Students to discover opportunities based on their skills and preferences.
- Organizations to publish tasks and review student applications.
- Rule-based matching between student profiles and task requirements.
- Structured application, project submission, and review workflows.
- Organization discovery, following, and messaging features.
- Conversational assistance through Harry AI.
- Organization verification workflows with clearly identified prototype simulations.

---

## ✨ Key Features

### 🎓 1. Student Portal

The Student Portal helps students discover opportunities and manage their project activities.

- Student registration and login.
- Personalized student dashboard.
- Student profile management.
- Browse available opportunities.
- View task descriptions and required skills.
- Apply for suitable opportunities.
- Track application status.
- View selected projects and project progress.
- Submit project descriptions, file metadata, and result links.
- View organization reviews and feedback.
- Discover verified organizations.
- Follow organizations and access messaging features.

### 🏢 2. Organization Portal

The Organization Portal enables organizations to publish opportunities and manage student applications.

- Organization registration and login.
- Organization profile management.
- Organization verification workflow.
- Create and manage tasks.
- Specify required skills, duration, deadlines, work mode, rewards, and deliverables.
- View applications for organization-owned tasks.
- Shortlist, select, or reject applicants.
- Manage projects associated with selected applicants.
- Review student submissions.
- Provide feedback and update project completion status.

### 🧠 3. Skill-Based Matching

SkillSprint includes a deterministic, rule-based matching system that evaluates student profiles against opportunity requirements.

- Compares student skills with required task skills.
- Considers availability and location or remote-work conditions.
- Includes an experience-related scoring component.
- Produces structured matching results.
- Avoids generating random match percentages.

The matching logic is designed to make opportunity matching understandable and consistent.

### 🛡️ 4. Organization Verification

SkillSprint includes an organization verification workflow intended to support trust within the opportunity marketplace.

- AI-assisted document-consistency checking simulation.
- Mock government-record matching workflow.
- Verification status and confidence information.
- Needs Attention and Rejected review paths.
- Internal review console for authorized admin accounts.
- Audit logging for verification and review actions.

**Prototype limitation:** The current verification services are simulations. They do not perform real OCR-based document verification or connect to a live government registry. A confidence score must not be interpreted as proof that an organization or document is authentic.

### 💬 5. Networking and Communication

- Discover verified organizations through the organization directory.
- View public organization profiles.
- Follow and unfollow organizations.
- Access permission-based student-organization conversations.
- View in-app notifications for supported activities.
- Receive notifications for events such as applications, shortlisting, and messages.

Messaging and notifications currently use prototype storage rather than a real-time messaging infrastructure.

---

## 🤖 Harry AI Assistant

Harry is the conversational assistant integrated into SkillSprint.

Harry is designed to make the platform easier to understand and navigate by providing conversational assistance and responding to supported questions.

### Harry's Features

- Floating interactive character interface.
- Expandable chat panel.
- Text-based conversation.
- Platform-related assistance.
- General conversation and supported guidance.
- Browser-based speech recognition where supported.
- Spoken responses through browser speech synthesis where supported.
- Character movement between predefined positions.
- Interaction states for listening, thinking, talking, walking, and idle behavior.

### How Harry Works

Harry uses a frontend conversational service to handle supported platform-related questions and opportunity workflows.

An optional backend AI integration supports open-ended conversation when a compatible provider is configured.

Harry's opportunity-related responses are handled by the built-in application logic rather than relying on the general conversational AI to invent opportunity data.

**Important:** AI-provider availability depends on configuration. Browser speech features depend on browser support and permissions. Harry is a prototype assistant, not an unrestricted autonomous agent.

---

## 🔄 How SkillSprint Works

### Student Workflow

1. Register or log in as a student.
2. Complete the relevant profile information.
3. Browse available opportunities.
4. Review task descriptions and required skills.
5. Apply for a suitable opportunity.
6. Track the application status.
7. If selected, access the associated project.
8. Submit the completed work.
9. Receive feedback and view the project status.

### Organization Workflow

1. Register or log in as an organization.
2. Complete the organization profile and verification workflow.
3. Publish a task with its requirements and deliverables.
4. Review applications received for the task.
5. Shortlist, select, or reject applicants.
6. Manage projects associated with selected applicants.
7. Review submitted work.
8. Provide feedback and update the project's status.

### Project Synchronization

The prototype maintains shared task, application, project, submission, and review relationships.

- Organization-created tasks are shared with the student marketplace when eligible for publication.
- Applications retain the associated student, task, and organization identifiers.
- Selecting an application creates or reuses the associated project.
- Student submissions are linked to the relevant project.
- Organization reviews update the corresponding project and submission workflow.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend user interface |
| Vite 7 | Frontend development server and build tool |
| JavaScript (ES Modules) | Application logic |
| React Router 7 | Client-side routing |
| CSS | Interface styling |
| Node.js | Backend runtime |
| Express 5 | Backend API scaffold |
| PostgreSQL | Relational database schema |
| node-postgres (pg) | PostgreSQL connectivity |
| Neon PostgreSQL | Supported PostgreSQL hosting option |
| Browser Speech APIs | Speech recognition and speech synthesis where supported |
| localStorage | Prototype data persistence |

---

## 📁 Project Structure

```text
skill-sprint/
├── backend/
│   ├── db.js
│   └── server.js
├── database/
│   └── schema.sql
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── harry/
│   │   ├── assets/
│   │   │   ├── harry-face.png
│   │   │   └── harry-full.png
│   │   ├── HarryWidget.jsx
│   │   ├── harryAIProvider.js
│   │   ├── harryMovementController.js
│   │   └── useHarrySpeech.js
│   └── services/
│       ├── aiMatchingService.js
│       ├── aiSkillGapService.js
│       ├── aiVerificationService.js
│       ├── applicationService.js
│       ├── authService.js
│       ├── chatService.js
│       ├── conversationService.js
│       ├── followService.js
│       ├── governmentVerificationService.js
│       ├── harryService.js
│       ├── matchingService.js
│       ├── notificationService.js
│       ├── organizationService.js
│       ├── projectService.js
│       ├── storage.js
│       └── taskService.js
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
├── IMPLEMENTATION_NOTES.md
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run SkillSprint locally.

### Prerequisites

Make sure you have installed:

- Node.js with a version compatible with the project's Vite setup.
- npm, which is included with Node.js.
- Git, if you want to clone the repository.

### Step 1: Clone the Repository

```bash
git clone https://github.com/pennidhi-1705/skill-sprint.git
```

### Step 2: Navigate to the Project Directory

```bash
cd skill-sprint
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal by Vite.

### Step 5: Create a Production Build

```bash
npm run build
```

### Step 6: Preview the Production Build

```bash
npm run preview
```

---

## ⚙️ Environment Configuration

The repository includes an `.env.example` file.

Create a local `.env` file in the project root if you need to configure the optional backend integrations.

Example configuration:

```env
DATABASE_URL=
AI_API_KEY=
PORT=3001
```

### Environment Variables

| Variable | Description |
|---|---|
| DATABASE_URL | PostgreSQL connection string |
| AI_API_KEY | Optional AI provider API key |
| PORT | Backend server port; defaults to 3001 |

The backend also recognizes `ANTHROPIC_API_KEY` as an alternative AI-provider key.

**Security note:** Never commit actual API keys, passwords, or database credentials to GitHub. Keep secrets in your local environment or a secure deployment environment.

---

## 🗄️ Database and Backend

SkillSprint includes a PostgreSQL schema and an Express backend scaffold.

### Database Schema

The database schema is located at:

```text
database/schema.sql
```

It defines relational structures for platform entities and their relationships, including organizations, tasks, applications, projects, submissions, and reviews.

### Backend API

The backend server is located at:

```text
backend/server.js
```

Start the backend using:

```bash
npm run server
```

The backend includes the following API routes:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/health` | GET | Checks API health and configured database connectivity |
| `/api/matching` | POST | Returns a rule-based matching result |
| `/api/harry/chat` | POST | Optional AI-backed conversational response |

The frontend prototype can run independently of the optional backend configuration.

**Current architecture:** Much of the frontend application behavior uses localStorage-backed services. The existence of a database schema and API scaffold does not mean every feature is already connected to persistent database storage.

---

## 📊 Current Implementation Status

SkillSprint is a functional prototype with implemented frontend workflows and several simulated or scaffolded integrations.

| Component | Implementation status |
|---|---|
| Student Portal | Frontend prototype implemented |
| Organization Portal | Frontend prototype implemented |
| Opportunity marketplace | Implemented with prototype data services |
| Application workflows | Implemented in the prototype |
| Project and submission workflows | Implemented in the prototype |
| Matching | Deterministic, rule-based scoring |
| Harry AI | Conversational service with optional backend AI integration |
| Speech interaction | Browser-dependent speech APIs |
| Organization verification | Simulated verification pipeline |
| Government-record matching | Mock provider; no live registry connection |
| Data persistence | Primarily localStorage in the prototype |
| PostgreSQL | Schema and backend connectivity scaffold |
| Messaging | Prototype conversations; no real-time WebSocket transport |
| Production authentication | Requires secure server-side implementation |

### Production Readiness

The current project should not be considered production-ready.

Before production deployment, the following areas require further implementation and testing:

- Secure server-side authentication and password hashing.
- Server-side authorization and access-control enforcement.
- Persistent database integration across frontend services.
- Secure file and object storage.
- Real document verification and suitable official registry integrations.
- Production-ready messaging infrastructure.
- Additional moderation, reporting, and dispute-handling operations.
- Comprehensive automated testing and security review.

---

## 🔮 Future Enhancements

Potential future improvements include:

- Integrating secure server-side authentication and authorization.
- Connecting frontend services to PostgreSQL through protected APIs.
- Implementing secure document and file storage.
- Improving Harry AI with a production-ready AI provider.
- Integrating suitable real organization verification providers.
- Introducing real-time messaging using WebSockets or a similar technology.
- Expanding matching capabilities using validated student and task data.
- Improving accessibility and mobile responsiveness.
- Adding automated testing, monitoring, and deployment safeguards.
- Introducing additional analytics for students and organizations.

These are proposed enhancements, not claims that the features are already implemented.

---

## 👥 Team CODE COOKIES

**Project:** SkillSprint

**Team Name:** CODE COOKIES

### Team Members

1. PRANAYASRI AKULA
2. CH SBS HARINI
3. VV SAI KRUTHI
4. PENNIDHI SAMMAKKAGARI

---

## 🔗 Project Links

- **Live Website:** https://skillsprint-harry-ai.vercel.app/
- **GitHub Repository:** https://github.com/pennidhi-1705/skill-sprint

---

## 📄 License

No license has currently been specified for this repository.

---

<p align="center">
  <strong>SkillSprint 🚀</strong>
  <br>
  Small Tasks. Real Experience. Local Impact.
  <br><br>
  Built with ❤️ by CODE COOKIES
</p>
