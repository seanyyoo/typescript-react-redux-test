# OVC-Interview-Test

### Instructions

Please write a react typescript (or javascript) redux app to display a table using this api endpoint https://jsonplaceholder.typicode.com/users.  **The project should also include sufficient unit tests**.

Please try to complete all **3 features** described.

We'll evalulate mainly on code readability and code reusability.

- Tools to use:
  - **create-react-app** https://github.com/facebook/create-react-app
  - **redux** - https://redux.js.org/
  - **jest** - https://jestjs.io/
  - **redux-thunk** - https://github.com/reduxjs/redux-thunk
  

**Feature 1.** Develop a table with 4 columns `Name`, `Email`, `City`, and `Company` populating the rows with the response from the api endpoint https://jsonplaceholder.typicode.com/users.   
     - The `Name` column should use `user.name`
     - The `Email` column should use `user.email`
     - The `City` column should use `user.address.city` 
     - The `Company` column should use `user.company.name`.

| Name        | Email           | City  | Company |
| ------------- |:-------------:| -----:| -----:  |  
| Leanne Graham      | Sincere@april.biz | Gwenborough |   Romaguera-Crona      |
| Ervin Howell    | Shanna@melissa.tv      |   Wisokyburgh |    Deckow-Crist     |
| zebra stripes | Nathan@yesenia.net      |    McKenziehaven |      Romaguera-Jacobson   |

**Feature 2.** Add an input field to search based on name.  For instance if "Lea" is entered, only the "Leanne Graham" row should show in the table.
   
(InputField Element to Search)

| Name        | Email           | City  | Company |
| ------------- |:-------------:| -----:| -----:  |  
| Leanne Graham      | Sincere@april.biz | Gwenborough |   Romaguera-Crona |

**Feature 3.** Make the rows clickable.  When a row is clicked, the website should show the user's posts.  You can utilize this api, `https://jsonplaceholder.typicode.com/posts?userId=1` for retrieve a user's posts.
   
<h3>Leanne Graham's Posts:</h3>

| Title        | Body           |
| ------------- |:-------------:|
| sunt aut facere repellat provident occaecati excepturi optio reprehenderit      | quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto |

`https://jsonplaceholder.typicode.com/users` gives back json looking like the following 
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]
  ```

`https://jsonplaceholder.typicode.com/posts?userId=1` responds with the following 
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```
