# Bumbu-Backend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)



## Description
This back end app hosts our front end app called Bumbu. This back end will hold all user data such as sign ups, login, and recipe data. To see all the magic please check out our front end server or head over to our heroku app link. <br>
This app has been deployed to Heroku at the following link: https://bumbu-backend.herokuapp.com/ <br>
Our Github repo can found at the following link: https://github.com/Cocineros/backend

## Table of Contents
  * [Installation](#installation)
  * [Queries](#queries)
  * [Mutations](#mutations)
  * [License](#license)
  * [Questions](#questions)
  * [Resources](#resources)

## Installation

Clone this repo, then install the dependencies by running the following command:
```
npm i
```
To use the queries and mutations via the Apollo server, run the following command then visit the link provided in the terminal:
```
npm run watch
```


## Queries
```
type Query {
    me: Profile
  }
```
Our me query gave us access to all of a user's information including the recipes that they have created in their dashboard.


## Mutations

```
 type Mutation {
    addProfile(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(name: String!,description: String!, ingredients: [String]!, instructions: String!): Recipe
    removeRecipe(_id: String!): Recipe
    editRecipe(_id: String!, name: String, description: String, ingredients: [String], instructions: String): Recipe
    removeProfile: Profile
  }
```
Our add profile mutation allows a user to create a profile and recieve a token to access the dashboard once they have filled all the required input fields in the sign up form. <br>
Our login mutation checks the database to match an email and password with an existing account, then once verified the logged in user recieves their token to access the dashboard. <br>
In order for a user to be able to create and add a recipe, they must provide a name, description, ingredients, and instructions for the recipe which is then saved to their account. <br>
A user can delete a recipe from their account and edit a recipe as long as the recipe id is provided. 



## Questions
If you have any questions, want to reports bug or request new features, please contact us: 

Amadea Margo
https://github.com/amadeamargo

Ayse Jones
https://github.com/AJones1200

Brian Garland
https://github.com/Bgar28

Janette Castillo
https://github.com/jcastillo9

Josshy Olea
https://github.com/josshy92

## License 
Licensed under [MIT License](https://opensource.org/licenses/MIT).


## Resources
https://codesource.io/how-to-create-and-save-schema-array-of-strings-in-mongoose/ <br>


https://www.apollographql.com/docs/ios/mutations/ <br>


https://medium.com/workflowgen/graphql-mutations-partial-updates-implementation-bff586bda989/ <br>



Thank you @ our amazing tutors, TA's and Professor and their amazing minds <3