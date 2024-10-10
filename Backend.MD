# Backend Documentation

Welcome to the backend documentation for the **Healthy Food Node React** project. This guide outlines the various authentication and food-related API methods available in the application.

## Authentication Methods

### GET: `/login/auth/google`
Authenticates the user via Google when they click the Google button.

**Parameters:**
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

**Functionality:**
- Checks if the user is already authenticated.
- If not authenticated, checks if the user is logged in with Google.
- If not logged in, redirects to the login page with an error message.
- If logged in, creates a new user object, saves it to the database, logs the user in, and redirects to the home page.

---

### GET: `/login/auth/discord`
Authenticates the user via Discord when they click the Discord button.

**Parameters:**
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

**Functionality:**
- Checks if the user is already authenticated.
- If not authenticated, checks if the user is logged in with Discord.
- If not logged in, redirects to the login page with an error message.
- If logged in, creates a new user object, saves it to the database, logs the user in, and redirects to the home page.

---

### GET: `/login/auth/github`
Authenticates the user via GitHub when they click the GitHub button.

**Parameters:**
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

**Functionality:**
- Checks if the user is already authenticated.
- If not authenticated, checks if the user is logged in with GitHub.
- If not logged in, redirects to the login page with an error message.
- If logged in, creates a new user object, saves it to the database, logs the user in, and redirects to the home page.

---

### GET: `/login/logout`
Logs out the user when they click the "Log out" button.

**Parameters:**
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

**Functionality:**
- Checks if the user is authenticated.
- If not authenticated, redirects to the login page with an error message.
- If authenticated, logs the user out and sends a confirmation message back to the client.

---

### POST: `/login/auth`
Validates the user’s login credentials when they click the "Log in" button.

**Request Body:**
- `email`: The user's email.
- `password`: The user's password.

---

### POST: `/login/signup`
Creates a new user account when the user clicks the "Sign up" button.

**Request Body:**
- `name`: The user's name.
- `username`: The user's username.
- `img`: The user's image URL.
- `email`: The user's email.
- `provider`: The provider of the user (e.g., Google, Discord, GitHub, or email).
- `password`: The user's password.

---

## Food API Methods

### GET: `/api/foods`
Retrieves all food items from the database.

**Parameters:**
- `req`: The request object.
- `res`: The response object.
- `next`: The next middleware function.

**Functionality:**
- Checks if the user is authenticated.
- If not authenticated, redirects to the login page with an error message.
- If authenticated, retrieves all food items from the database and sends them to the client.

---

### POST: `/api/stars`
Updates the star rating of a food item when the user clicks the "Update stars" button.

**Request Body:**
- `id`: The ID of the food item.
- `stars`: The new star rating.

---

### GET: `/api/search`
Searches for food items based on user input in the search bar.

**Query Parameters:**
- `food`: The name of the food to search for.

---

### GET: `/api/categories`
Retrieves the categories of food items available in the database.

---
