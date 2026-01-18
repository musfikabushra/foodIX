# Fast Food App (Next.js App Router)

## Project Overview

Fast Food App is a simple web application built using Next.js 15/16 (App Router). The project demonstrates public and protected routing, mock authentication, item listing, item details, and optional item creation functionality. The application follows modern Next.js best practices and is deployed on Vercel.

Live Site: [https://fast-food-app-green.vercel.app](https://fast-food-app-green.vercel.app)

---

## Features

### 1. Landing Page (Public)

* Fully public landing page
* Contains 7 relevant sections (excluding Navbar and Footer)
* Navbar includes navigation links to:

  * Login
  * Items List
* No authentication required

### 2. Authentication (Mock Login)

* Hardcoded email and password based login
* Login credentials stored securely using cookies
* Protected routes for unauthenticated users
* Automatic redirection to Items page after successful login

Optional Enhancement:

* Authentication structure prepared to support NextAuth.js (credentials or social login)

### 3. Item List Page (Public)

* Publicly accessible page
* Fetches item data from an Express.js API / JSON source
* Displays item cards with:

  * Item name
  * Description
  * Price
  * Image

### 4. Item Details Page (Public)

* Dynamic route for individual items
* Displays full details of a selected product
* No authentication required

### 5. Protected Page: Add Item (Optional Feature)

* Accessible only to authenticated users
* Form to add a new product
* Sends item data to the Express.js server
* Redirects unauthenticated users to login
* Displays toast notification on successful item creation

---

## Technologies Used

* Next.js 15/16 (App Router)
* React
* Express.js (API / JSON data source)
* Cookie-based authentication
* Tailwind CSS
* Vercel (Deployment)

---

## Routes Summary

| Route       | Access    | Description                         |
| ----------- | --------- | ----------------------------------- |
| /           | Public    | Landing page with multiple sections |
| /login      | Public    | Login page for mock authentication  |
| /items      | Public    | List of all items                   |
| /items/[id] | Public    | Item details page                   |
| /add-item   | Protected | Add new item form                   |

---

## Login Credentials (Mock)

Email: [test@example.com](mailto:test@example.com)
Password: 123456

---

## Setup & Installation

1. Clone the repository

```bash
git clone <your-github-repo-url>
```

2. Navigate to the project directory

```bash
cd fast-food-app
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

6. Start production server

```bash
npm run start
```

---

## Project Highlights

* Clean and modular App Router structure
* Public and protected routing implemented
* Cookie-based authentication handling
* Server-side rendering with Next.js
* Deployed on Vercel

---

## Submission Information

* Live Site: [https://fast-food-app-green.vercel.app](https://fast-food-app-green.vercel.app)
* GitHub Repository: <your-github-repo-link>
* Login Credentials: Provided above

---

This project was built to demonstrate core Next.js App Router concepts, authentication flow, and API integration in a clean and scalable way.
