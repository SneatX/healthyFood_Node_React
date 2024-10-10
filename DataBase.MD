# Database Documentation

This project uses a local MongoDB database with three collections: `foods`, `ratings`, and `users`. Below are the details of each collection, including the structure and types of the fields.

## Collections

### 1. Foods Collection
The `foods` collection stores information about different food items. Each document in this collection has the following properties:

| Property    | Type         | Description                             |
|-------------|--------------|-----------------------------------------|
| `_id`       | ObjectId     | Unique identifier for the food document |
| `name`      | String       | Name of the food                        |
| `calories`  | Number       | Calorie count of the food               |
| `category`  | String       | Category of the food (e.g., "vegetables")|
| `ingredients`| Array of Strings | List of ingredients in the food       |
| `ratings`   | Array of Numbers  | List of ratings given to the food      |
| `average`   | Number       | Average rating of the food              |
| `img`       | String       | Path or URL to the image of the food    |

### 2. Ratings Collection
The `ratings` collection stores the individual ratings given by users to specific food items. Each document has the following properties:

| Property   | Type      | Description                                          |
|------------|-----------|------------------------------------------------------|
| `_id`      | ObjectId  | Unique identifier for the rating document            |
| `foodId`   | ObjectId  | Reference to the `_id` of the rated food             |
| `userId`   | ObjectId  | Reference to the `_id` of the user who gave the rating|
| `star`     | Number    | Rating given to the food (e.g., 1-5 stars)           |

### 3. Users Collection
The `users` collection stores information about the users who rate the foods. Each document in this collection has the following properties:

| Property   | Type      | Description                                       |
|------------|-----------|---------------------------------------------------|
| `_id`      | ObjectId  | Unique identifier for the user                    |
| `name`     | String    | Full name of the user                             |
| `username` | String    | Username chosen by the user                       |
| `img`      | String    | URL to the user's profile picture                 |
| `email`    | String    | Email address of the user                         |
| `provider` | String    | Authentication provider used by the user (e.g., "google") |
| `password` | String or Null | Password for local authentication (null if using OAuth) |

## Examples

### foods Collection Example
```json
[{
  "_id": {
    "$oid": "6706f8400f3d1032f2403828"
  },
  "name": "Caesar salad",
  "calories": 200,
  "category": "vegetables",
  "ingredients": [
    "lettuce",
    "chicken",
    "cheese",
    "caesar dressing"
  ],
  "ratings": [
    4,
    5,
    1,
    5
  ],
  "average": 4,
  "img": "./platoComida.svg"
},
{
  "_id": {
    "$oid": "6706f8410f3d1032f2403829"
  },
  "name": "Quinoa Salad",
  "calories": 250,
  "category": "vegetables",
  "ingredients": [
    "quinoa",
    "bell peppers",
    "cucumber",
    "olive oil",
    "lemon juice"
  ],
  "ratings": [
    5,
    5,
    4,
    3
  ],
  "average": 4,
  "img": "./platoComida.png"
},
{
  "_id": {
    "$oid": "6706f8420f3d1032f240382a"
  },
  "name": "Almond Butter",
  "calories": 100,
  "category": "nuts_&_seeds",
  "ingredients": [
    "almonds"
  ],
  "ratings": [
    5,
    4,
    5,
    3
  ],
  "average": 4,
  "img": "./platoComida.png"
},
{
  "_id": {
    "$oid": "6706f8430f3d1032f240382b"
  },
  "name": "Grilled Chicken",
  "calories": 300,
  "category": "protein",
  "ingredients": [
    "chicken breast",
    "olive oil",
    "spices"
  ],
  "ratings": [
    5,
    4,
    4
  ],
  "average": 4.33,
  "img": "./platoComida.png"
},
{
  "_id": {
    "$oid": "6706f8440f3d1032f240382c"
  },
  "name": "Chocolate Protein Shake",
  "calories": 150,
  "category": "protein_shake",
  "ingredients": [
    "protein powder",
    "milk",
    "cocoa powder",
    "banana"
  ],
  "ratings": [
    4,
    5,
    5
  ],
  "average": 4.67,
  "img": "./platoComida.png"
}]
```

### ratings Collection Example

```json
[{
  "_id": {
    "$oid": "67074027e103db6975399464"
  },
  "foodId": {
    "$oid": "6706f8410f3d1032f2403829"
  },
  "userId": {
    "$oid": "6706e9c3c92ae829f6c4e532"
  },
  "star": 3
},
{
  "_id": {
    "$oid": "67074064cc83339687cdd96d"
  },
  "foodId": {
    "$oid": "6706f8420f3d1032f240382a"
  },
  "userId": {
    "$oid": "6706e9c3c92ae829f6c4e532"
  },
  "star": 3
},
{
  "_id": {
    "$oid": "6707407acc83339687cdd97a"
  },
  "foodId": {
    "$oid": "6706f8400f3d1032f2403828"
  },
  "userId": {
    "$oid": "6706e9c3c92ae829f6c4e532"
  },
  "star": 1
},
{
  "_id": {
    "$oid": "6707408a472d0d49ef4ab06f"
  },
  "foodId": {
    "$oid": "6706f8400f3d1032f2403828"
  },
  "userId": {
    "$oid": "6707408a472d0d49ef4ab06e"
  },
  "star": 5
}]
```

### users Collection Example

```json
[{
  "_id": {
    "$oid": "6706e9c3c92ae829f6c4e532"
  },
  "name": "Santiago Alexander Ospina Pabon",
  "username": "xxsantixx748",
  "img": "https://lh3.googleusercontent.com/a/ACg8ocK-JrUuHLoqkGLvQ3NtvCeXTcIcQ4vBl3EYtlLZTD6vJgJpP4I=s96-c",
  "email": "xxsantixx748@gmail.com",
  "provider": "google",
  "password": null
},
{
  "_id": {
    "$oid": "670703a1ea401ef055819b65"
  },
  "name": "usuario prueba",
  "username": "prueba",
  "img": "default.png",
  "email": "prueba@mail.com",
  "provider": "email",
  "password": "$2a$10$4qrcm2JUUbI952cZlo37feOWqK9KGufdLMy44sDvYsZMjNjst5.Xy"
},
{
  "_id": {
    "$oid": "67074086472d0d49ef4ab06c"
  },
  "name": "SneatX",
  "username": "SneatX",
  "img": "https://avatars.githubusercontent.com/u/127460590?v=4",
  "email": "https://github.com/SneatX",
  "provider": "github",
  "password": null
}]

```
