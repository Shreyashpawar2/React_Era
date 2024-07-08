## To create Reasct base project use follwing command
	- npx create-react-app <Project-Name>
			
## To start the React Project
	- npm run start

## through vit
    -- npm create vite@latest my-vue-app -- --template vue
	## then use cammand
			npm i
	## run project
	  npm run div
_____________________________________________________________________________________________________________________________

## Hookes
React control Ui updatation

 A) useState
    use to change statte and update UI
	Example :  const [counter,setCounter]=useState(5)
	  counter is variable and setCounter is function to control  counter

_____________________________________________________________________________________________________________________________

## Virtual DOM
- **What it is**: A lightweight copy of the actual DOM (Document Object Model) that browsers use to display a webpage.
- **Purpose**: It helps in efficiently updating the user interface (UI) by figuring out what changes need to be made without updating the entire DOM.
- **How it works**: When something changes in the app, the Virtual DOM updates first. Then, it compares the new Virtual DOM with the old one to find the differences (a process called "diffing"). Only the parts that changed are updated in the actual DOM, making the update process faster.

## Reconciliation
- **What it is**: The process of updating the DOM in response to changes in the data.
- **Purpose**: Ensures that the UI stays in sync with the underlying data while minimizing the number of changes to the actual DOM.
- **How it works**: When data changes, the Virtual DOM gets updated. The reconciliation algorithm compares the new Virtual DOM with the old one, finds the differences, and updates only the parts of the actual DOM that have changed.

## Fiber
- **What it is**: A new algorithm introduced by React to improve its performance and responsiveness.
- **Purpose**: Allows React to split the rendering work into small units of work called "fibers" and spread the work over multiple frames, making the app feel smoother.
- **How it works**: Instead of rendering the whole Virtual DOM in one go, React Fiber breaks the work into chunks and prioritizes them. If there are more important tasks, like user interactions, those get handled first, making the UI more responsive.

In summary:
- The **Virtual DOM** helps in efficiently managing updates to the user interface.
- **Reconciliation** is the process of syncing the UI with data changes using the Virtual DOM.
- **Fiber** is an improvement in how React manages and schedules updates, making the app more responsive and smooth._________________________________________________________________________________________________________

## PROPS

use for reusbility


_________________________________________________________________________________________________________

## Tailwind
 css frameWork
refer :[text](https://tailwindcss.com/docs/installation)
npm install -D tailwindcss
npx tailwindcss init -p

_________________________________________________________________________________________________________

## useCallBack(fn,dependancies)

1. useCallback
Real-world analogy: Imagine you have a chef who makes a special dish. The recipe for this dish doesn't change, so instead of writing down the recipe every time, you write it down once and reuse it whenever needed.

React scenario:
 useCallback is used to memoize a function, preventing its recreation on every render unless its dependencies change.
_________________________________________________________________________________________________________

## useEffect

Real-world analogy: Imagine you have a houseplant that needs watering. You decide to check and water it every morning. The act of checking and watering is akin to side effects in your daily routine.

React scenario: useEffect is used to perform side effects in functional components. This could be fetching data, directly manipulating the DOM, setting up a subscription, etc.
_________________________________________________________________________________________________________

## useRef

Real-world analogy: Imagine you have a diary where you jot down important notes. You don't want to change the notes, but you want to have a reference to look them up whenever you need.

React scenario: useRef provides a way to access and persist values between renders without causing re-renders.

_________________________________________________________________________________________________________

## Routing
npm install react-router-dom

import {Link,NavLink} from 'react-router-dom'

Sure! Here are concise notes on React Routing:

React Routing
What is React Router?
React Router: A standard library for routing in React.
Purpose: Helps in creating and navigating between different URLs in a React application.
Key Concepts
Router:

BrowserRouter: Uses HTML5 history API for cleaner URLs.
HashRouter: Uses hash portion of URL (e.g., example.com/#/home).
Routes:

Route: Defines a mapping between a URL path and a component.
jsx
Copy code
import { Route } from 'react-router-dom';

<Route path="/home" component={Home} />
Link:

Link: Creates navigational links.
jsx
Copy code
import { Link } from 'react-router-dom';

<Link to="/home">Home</Link>
Switch:

Switch: Renders the first matching Route or Redirect in its children.
jsx
Copy code
import { Switch, Route } from 'react-router-dom';

<Switch>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</Switch>
Exact:

exact: Ensures that the route only matches if the path is exactly the same.
jsx
Copy code
<Route exact path="/home" component={Home} />
Redirect:

Redirect: Redirects from one route to another.
jsx
Copy code
import { Redirect } from 'react-router-dom';

<Redirect from="/old-home" to="/home" />
Example Usage
jsx
Copy code
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
Summary
BrowserRouter and HashRouter: Choose the type of routing.
Route: Maps URL to component.
Link: Creates navigable links.
Switch: Renders the first matching route.
exact: Matches the exact path.
Redirect: Redirects from one route to another.


_________________________________________________________________________________________________________

### Contex Api

## step 1: