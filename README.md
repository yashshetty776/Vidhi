# ⚖️ VIDHI - Legal Aid Web Platform

VIDHI is a comprehensive web platform designed to bridge the gap between individuals seeking legal assistance and verified pro bono lawyers. By leveraging advanced AI and robust technology, VIDHI empowers users with accessible legal guidance, real-time case management, and a collaborative legal community. This initiative directly supports SDG 16: Peace, Justice, and Strong Institutions.

---

## 🚩 Introduction

Access to reliable legal aid remains a challenge for many, often hindering justice and equity. The VIDHI platform addresses this by:
- Connecting users with verified pro bono lawyers,
- Providing AI-powered legal guidance,
- Fostering legal awareness through a community-driven knowledge base.

---

## ✨ Features

### 👤 User Management & Authentication
- **User Roles:** Distinct interfaces and capabilities for Clients (legal seekers) and Lawyers (legal providers).
- **Secure Authentication:** JWT-based authentication ensures user data privacy.

### 🤖 AI-Powered Legal Guidance
- **AI Chatbot:** OpenAI GPT-powered chatbot offers preliminary legal guidance.
- **Dynamic Responses:** Adjustable temperature parameter for response control.

### ⚖️ Lawyer Matching & Case Management
- **Matching Algorithm:** Pairs clients with lawyers based on expertise and availability.
- **In-App Messaging:** Direct and secure communication between clients and lawyers.
- **Case Tracking:** Real-time updates on case progress.

### 🌐 Community Forum & Knowledge Base
- **Forums:** Engage in general legal discussions and seek advice.
- **Knowledge Base:** Access FAQs, document templates, and legal articles.

### 📰 Real-Time Legal News
- **News Integration:** Stay updated with the latest legal developments.

### 🔔 Notifications & Updates
- **Instant Alerts:** Receive notifications for case status changes and legal news.

### 🔒 Security & Usability
- **Privacy First:** Secure user data and communication channels.
- **Accessible UI:** Built with Material-UI (MUI) for a smooth and user-friendly experience.

---

## 🏃 Application Flow

1. **User Registration & Authentication**
    - Sign up as a Client or Lawyer with secure JWT authentication.
2. **Legal Guidance & Case Submission**
    - Clients submit legal questions; AI chatbot provides initial guidance and case categorization.
3. **Lawyer Matching & Consultation**
    - System matches clients with suitable lawyers, who can accept or reject cases.
    - In-app chat enables secure communication.
4. **Case Management & Updates**
    - Both parties track case progress and receive real-time updates.
5. **Community Engagement & Legal Resources**
    - Users join forums, access the knowledge base, and stay informed with legal news.

---

## 🛠️ Tech Stack

- **Frontend:** Vite + React.js + Material-UI (MUI)
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Authentication:** JWT
- **AI Integration:** OpenAI GPT via Chatbase

---

## 📦 Core Modules

- **User Authentication:** Secure JWT login with role-based access.
- **AI Chatbot Integration:** OpenAI GPT-powered chatbot for legal guidance.
- **Lawyer Matching:** Intelligent matching based on lawyer expertise and client needs.
- **Case Management:** Real-time tracking and status updates.
- **Community Forum & Knowledge Base:** Legal discussions and resource library.

---

## ⚡ Installation & Setup

### Prerequisites

- Node.js & npm (frontend)
- Python & pip (backend)
- MongoDB (database)

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔮 Future Scope

- **Expanded Legal Assistance:** Partner with more legal firms and aid societies.
- **Advanced AI:** Enhanced NLP and contextual understanding.
- **Multi-Language Support:** Serve a diverse user base.
- **Enhanced Security:** Compliance with regulations like GDPR.
- **Mobile App:** iOS and Android versions.

---

## 🌍 Impact & Social Relevance

VIDHI democratizes access to legal resources, connecting individuals with credible legal support and fostering legal literacy. The platform exemplifies the use of technology for social good, striving for justice, equality, and empowerment in line with SDG 16.

---

## 🤝 Contributing

Contributions are welcome! Please submit issues or pull requests to help improve the platform.

---

**VIDHI — Empowering Justice, One Click at a Time!**

---
