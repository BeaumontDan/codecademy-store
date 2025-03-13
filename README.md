![Codecademy](https://www.codecademy.com/favicon.ico)

##### CODECADEMY: FULL-STACK ENGINEER COURSE

Challenge Project: Codecademy Store
=================================================

### Author(s)
[Dan Beaumont](https://github.com/BeaumontDan)
**Date of Compleation:** 3 March 2025

## Description

This is a React/Redux training/learning project, set by [Codecademy][codecademy], untilising Redux to create cart for the 'Codecademy Store'.

## Codecademy Objective


##### Overview

"In this project, you'll build a program that mimics Codecademy's own online store! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application."

##### Project Goals

"In this project, you will use functional React components to create an app that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments."

![Shopping Cart Demo](https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/shopping-cart-demo.gif)

"This application has three slices of state:"

- **inventory**: An array of objects representing the items that are available to purchase.
- **cart**: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- **currencyFilter**: A string that represents the currency used to calculate the prices displayed to the user: 'USD', 'CAD' or 'EUR'.

" As you will see, the file structure has been organized using the recommended feature-based pattern and most of the inventory and currency features have been built for you. It will be up to you to:"

- complete the cart's action creators and reducer logic
- create the store using createStore() and combineReducers()
- pass the store resources to presentational components via the top-level ```<App />``` component
- render the```<Cart />``` component using the current state data
- dispatch actions to the store

## Technologies

- React
- Redux
- JSX
- JavaScript
- HTML
- CSS
- Git & GitHub


## Credits

This project was made possible with help from Codecademy's tutorials and courses. For more information on [Codecademy][codecademy] and their Full-Stack Engineer Course, [click here][fullstackcourse].

[codecademy]: https://www.codecademy.com/
[fullstackcourse]: https://www.codecademy.com/learn/paths/full-stack-engineer-career-path