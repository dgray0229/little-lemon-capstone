# Little Lemon Capstone

This is a version of the capstone project for the Meta Frontend Certification.

Per the certification instructions:

```
This course's final project assessment consists of a peer review and one final graded quiz. 

The purpose of the assessment

The primary purpose of the assessment is to check your knowledge and understanding of the key learning objectives of the course.  The assessment is designed to help you make sure that you can apply what you have learned. Most importantly, the assessment helps you establish which topics you have mastered and which topics require further focus before completing the course.

What to expect from the peer review 

You will combine the skills and knowledge that you applied throughout the course to write code to create a form that handles table bookings for the Little Lemon restaurant.  Your table bookings form will all be assessed in the peer review submission, and you will assess some of your peers' projects too.

What to expect from the final graded quiz 

The quiz only tests the topics you have already covered, so there shouldn't be any surprises. Please review the feedback on your answers and, where necessary, go back and work through the topics that require further attention. 
```

So for the final project, I added a small navigation using React Router. On form submission, it routes to a confirm component. You can add to your cart items selected from the menu, with a popup signifying the order has been added to cart.

Although the project uses advanced features like the Context API and the useReducer hook, I was not required to track the form data after submission, or how many items were added to the cart, so I chose not to implement those features.

Although, to add to the challenge, I decided to build out the project in TypeScript for type safety.

The project has some basic unit tests written with Vitest and the React version of Testing Library.

The goal for me was to pass through this certification as quickly as possible but I still decided to add some extra features to deepen my knowledge of certain concepts in TypeScript, Unit Testing, and the proper use of the Flux pattern and Context API.

I hope you enjoy the demo or perhaps learn from this project.

[Project Demo](https://github.com/dgray0229/little-lemon-capstone)
