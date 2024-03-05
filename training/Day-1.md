# React Training
## Day 1 (11 April, 2023)
- Introduction to react library.
- Ways of adding css - css modules, css import as file, scss import as file (needs sass).
- Class component, Styling in class component
- Class component setState:
    - When we use any function as handler to update the state of the component, the function must be binded with the this
    in the constructor so that the function has access to the setState function.
    - To access this inside the constructor call super(props) to set the props in the parent constructor.


## Day 2
- getDerivedStateFromProps(props, state) is a static method which will be called before rendering to update the state from the props.
- This can be used instead of setting state in the constructor.
- A demo of functional components


## Day 3
- Functional components, useState, useEffect, useRef hooks
- Form handling with dom, useState, useRef.
- Client side routing with `react-router-dom`.
- Hosting site in github pages.