# backend Documentation

## This is the documentation for the backend of the Healthy Food Node React project.

### auth methods

#### googleAuthCallback

This method is used to authenticate the user with Google. It is called when the user clicks on the Google button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is already authenticated. If not, it checks if the user is logged in with Google. If the user is not logged in, it redirects the user to the login page with an error message. If the user is logged in, it creates a new user object with the user's information and saves it to the database. Then, it logs the user in and redirects them to the home page.

#### discordAuthCallback

This method is used to authenticate the user with Discord. It is called when the user clicks on the Discord button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is already authenticated. If not, it checks if the user is logged in with Discord. If the user is not logged in, it redirects the user to the login page with an error message. If the user is logged in, it creates a new user object with the user's information and saves it to the database. Then, it logs the user in and redirects them to the home page.

#### githubAuthCallback

This method is used to authenticate the user with GitHub. It is called when the user clicks on the GitHub button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is already authenticated. If not, it checks if the user is logged in with GitHub. If the user is not logged in, it redirects the user to the login page with an error message. If the user is logged in, it creates a new user object with the user's information and saves it to the database. Then, it logs the user in and redirects them to the home page.

### food methods

#### getAllFood

This method is used to get all the foods from the database. It is called when the user clicks on the "Get all foods" button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is authenticated. If not, it redirects the user to the login page with an error message. If the user is authenticated, it gets all the foods from the database and sends them back to the client.

#### updateStars

This method is used to update the stars of a food. It is called when the user clicks on the "Update stars" button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is authenticated. If not, it redirects the user to the login page with an error message. If the user is authenticated, it gets the food with the specified ID from the database. It then checks if the user has already rated the food. If the user has already rated the food, it deletes the rating from the database and sends a message back to the client. If the user has not rated the food, it creates a new rating object with the user's ID and the star value. It then updates the food's ratings and average in the database and sends the updated ratings and average back to the client.

#### searchFood

This method is used to search for foods. It is called when the user types in the search bar.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is authenticated. If not, it redirects the user to the login page with an error message. If the user is authenticated, it gets the search query from the request body and searches for foods with the specified name in the database. It then sends the found foods back to the client.

#### getFoodCategories

This method is used to get the categories of the foods. It is called when the user clicks on the "Get categories" button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is authenticated. If not, it redirects the user to the login page with an error message. If the user is authenticated, it gets the categories of the foods from the database and sends them back to the client.

### user methods

#### logout

This method is used to log out the user. It is called when the user clicks on the "Log out" button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is authenticated. If not, it redirects the user to the login page with an error message. If the user is authenticated, it logs the user out and sends a message back to the client.

#### validateLogin

This method is used to validate the login credentials. It is called when the user clicks on the "Log in" button.

The method takes two parameters:

- req: The request object.
- res: The response object.
- next: The next middleware function.

The method first checks if the user is already authenticated. If not, it checks if the user is logging in with Google, Discord, or GitHub. If the user is not logging in with Google, Discord, or GitHub, it redirects the user to the login page with an error message. If the user is logging in with Google, Discord, or GitHub, it validates the login credentials and sends a message back to the client.

#### validateSignUp

This method is used to validate the sign up credentials. It is called when the user clicks on the "Sign up" button.