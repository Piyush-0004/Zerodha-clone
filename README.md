   # Zerodha Clone

A full-stack Zerodha clone built with **React**, **Node.js**, **MongoDB**, and **Express**. It replicates core features like login/signup, dashboard, buy/sell stocks, view holdings, positions, and order management.

 ## Live Demo

* **Link:** [https://zerodha-frontend-g99j.onrender.com](https://zerodha-frontend-g99j.onrender.com)


 ## Project Structure

Zerodha-clone/
├── backend/        # Node.js + Express + MongoDB
├── frontend/       # React frontend with login/signup
└── dashboard/      # React dashboard (after login)

 ## Authentication

* **JWT-based login/signup**
* Token stored in localStorage and passed in `Authorization` header
* Protected dashboard routes on backend (`/api/dashboard`)


## Features

* Login and Signup with validation
* Secure dashboard only accessible after login
* View Holdings and Positions from MongoDB Atlas
* **Buy/Sell** stocks with quantity and price inputs
* View all past orders with option to **delete**
* Color-coded orders by type (BUY/SELL)


## Technologies Used

* **Frontend:** React, React Router, Axios
* **Dashboard:** React, Charts (Chart.js), MUI Icons
* **Backend:** Node.js, Express, MongoDB Atlas, JWT, bcrypt
* **Deployment:** Render (backend, frontend, dashboard)

---

## Setup Instructions (Locally)

1. Clone the repo:

```bash
git clone https://github.com/Piyush-0004/Zerodha-clone.git
```

2. Navigate and install dependencies:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

3. Create `.env` files:

* **backend/.env**

```
PORT=3002
MONGO_URL=your-mongo-uri
JWT_SECRET=your-secret-key
```

* **frontend/.env** and **dashboard/.env**

```
REACT_APP_API_URL=https://your local host port
```

4. Run apps:

```bash
# backend
cd backend && npm start

# frontend
cd ../frontend && npm start

# dashboard
cd ../dashboard && npm start
```

---

##  Deployment Notes

* Use **Render** to deploy each folder separately:

  * Backend: `root=backend`, build=`npm install`
  * Frontend: `root=frontend`, build=`npm install && npm run build`, publish=`frontend/build`
  * Dashboard: same as frontend
* Use **HashRouter** to avoid refresh issues on Render
* Add `_redirects` file or `.htaccess` only if using static hosting


## Future Enhancements

* Add user-specific holdings/orders
* Pagination + filters in orders
* Admin panel to manage users/stocks
* Unit testing with Jest


# Feedback

Feel free to open an issue or reach out for improvements and suggestions!


#  GitHub Repo: [Piyush-0004/Zerodha-clone](https://github.com/Piyush-0004/Zerodha-clone)
