import { JSFundamentalsDemo } from './demos/JSFundamentals'
import { WhatIsReactDemo } from './demos/WhatIsReact'
import { ComponentsDemo } from './demos/Components'
import { JSXDemo } from './demos/JSX'
import { PropsDemo } from './demos/Props'
import { StateDemo } from './demos/State'
import { EventsDemo } from './demos/Events'
import { ConditionalRenderingDemo } from './demos/ConditionalRendering'
import { ListsAndKeysDemo } from './demos/ListsAndKeys'
import { UseEffectDemo } from './demos/UseEffect'
import { ControlledComponentsDemo } from './demos/ControlledComponents'
import { FolderStructureDemo } from './demos/FolderStructure'
import { HooksDemo } from './demos/Hooks'
import { LiftingStateDemo } from './demos/LiftingState'
import { PerformanceDemo } from './demos/Performance'
import { APICallsDemo } from './demos/APICalls'
import { RoutingDemo } from './demos/Routing'
import { DebuggingDemo } from './demos/Debugging'

export const topics = [
  {
    id: 'js-fundamentals',
    title: '1. JavaScript Fundamentals',
    shortTitle: '1. JS Fundamentals',
    description: 'let vs const, arrow functions, destructuring, spread, map/filter/reduce, ES modules, async/await, closures. If you can\'t explain why map() is used in React lists, go back to JS.',
    code: `const nums = [1, 2, 3, 4, 5];

// map – transform each item (used for React lists)
nums.map(x => x * 2);  // [2, 4, 6, 8, 10]

// filter – keep items that pass a test
nums.filter(x => x > 2);  // [3, 4, 5]

// reduce – single value from array
nums.reduce((acc, x) => acc + x, 0);  // 15

// destructuring
const { name, age } = user;
const [first, ...rest] = arr;

// spread (don't mutate!)
setItems([...items, newItem]);`,
    Demo: JSFundamentalsDemo,
  },
  {
    id: 'what-is-react',
    title: '2. What React Actually Is',
    shortTitle: '2. What Is React',
    description: 'React is a library, not a framework. It builds UI components, uses a Virtual DOM, and UI updates are driven by state changes.',
    code: `// React is a LIBRARY (UI only)
// - Builds UI with components
// - Virtual DOM for efficient updates
// - Re-renders when state/props change

// If you can't explain "why React re-renders",
// you don't understand React.`,
    Demo: WhatIsReactDemo,
  },
  {
    id: 'components',
    title: '3. Components',
    shortTitle: '3. Components',
    description: 'The core unit of React. Functional components return JSX. Use composition (components inside components).',
    code: `// Functional component (modern standard)
function Welcome() {
  return <h1>Hello</h1>;
}

// Composition: components inside components
function App() {
  return (
    <div>
      <Welcome />
      <Label text="reusable" />
    </div>
  );
}`,
    Demo: ComponentsDemo,
  },
  {
    id: 'jsx',
    title: '4. JSX',
    shortTitle: '4. JSX',
    description: 'JS inside HTML-like syntax. JSX is syntactic sugar for React.createElement. Use {} for expressions, className not class, self-closing tags.',
    code: `// Expressions inside { }
const name = "React";
return <h1>Hello {name}</h1>;

// className, not class
<div className="container">

// Self-closing tags
<input type="text" />
<img src="..." alt="..." />`,
    Demo: JSXDemo,
  },
  {
    id: 'props',
    title: '5. Props',
    shortTitle: '5. Props',
    description: 'Data passed from parent to child. Props are read-only. You can pass functions as props. Never mutate props.',
    code: `// Props = data from parent to child
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

// Usage
<Greeting name="World" />
<Greeting name="React" />

// Props are READ-ONLY. Don't mutate.`,
    Demo: PropsDemo,
  },
  {
    id: 'state',
    title: '6. State',
    shortTitle: '6. State',
    description: 'useState: state causes re-render, updates are async, never mutate directly. Use functional updates: setCount(prev => prev + 1).',
    code: `const [count, setCount] = useState(0);

// ✅ Correct: functional update
setCount(prev => prev + 1);

// ❌ Wrong: count++ (mutation, chaos)
// State updates are asynchronous.`,
    Demo: StateDemo,
  },
  {
    id: 'events',
    title: '7. Events',
    shortTitle: '7. Events',
    description: 'Event handlers are functions. Use onClick={handleClick}. Synthetic events. To pass args: onClick={() => handle(id)}.',
    code: `// Handler is a function reference
<button onClick={handleClick}>Click</button>

// Pass argument: use arrow function
<button onClick={() => handleDelete(id)}>Delete</button>

// Synthetic events (React wraps native events)`,
    Demo: EventsDemo,
  },
  {
    id: 'conditional-rendering',
    title: '8. Conditional Rendering',
    shortTitle: '8. Conditional',
    description: 'Use && for show/hide, ternary for either/or, early return for complex logic. Avoid nested ternaries.',
    code: `// && (show when true)
{isLoggedIn && <Dashboard />}

// Ternary
{score >= 60 ? 'Pass' : 'Fail'}

// Early return in component
if (!user) return <Login />;
return <Profile user={user} />;`,
    Demo: ConditionalRenderingDemo,
  },
  {
    id: 'lists-keys',
    title: '9. Lists & Keys',
    shortTitle: '9. Lists & Keys',
    description: 'Use map() to render lists. key is required (stable id, not index). Keys help React track list changes (reconciliation).',
    code: `items.map(item => (
  <li key={item.id}>{item.name}</li>
));

// key must be stable, unique among siblings
// Index as key is usually bad (reorder/delete breaks UI)`,
    Demo: ListsAndKeysDemo,
  },
  {
    id: 'useeffect',
    title: '10. useEffect',
    shortTitle: '10. useEffect',
    description: 'Side effects: runs after render. Dependency array [] = run once, [a,b] = when a or b change. Return cleanup function. Avoid infinite loops.',
    code: `useEffect(() => {
  fetchData();
}, []);  // run once on mount

useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);  // cleanup
}, []);`,
    Demo: UseEffectDemo,
  },
  {
    id: 'controlled-components',
    title: '11. Controlled Components (Forms)',
    shortTitle: '11. Forms',
    description: 'Controlled: value + onChange live in React state. Handle submit with onSubmit and e.preventDefault().',
    code: `const [value, setValue] = useState('');

<input
  value={value}
  onChange={e => setValue(e.target.value)}
/>

<form onSubmit={e => {
  e.preventDefault();
  submit(value);
}}>`,
    Demo: ControlledComponentsDemo,
  },
  {
    id: 'folder-structure',
    title: '12. Folder Structure & Setup',
    shortTitle: '12. Folder Structure',
    description: 'Modern setup: Vite. Organize components, demos, and concerns. Don\'t put the entire app in App.js.',
    code: `// Vite: npm create vite@latest my-app -- --template react

src/
  main.jsx      # entry, ReactDOM.render
  App.jsx       # root component
  index.css     # global styles
  components/   # reusable UI
  demos/        # or features/`,
    Demo: FolderStructureDemo,
  },
  {
    id: 'hooks',
    title: '13. Basic Hooks',
    shortTitle: '13. Hooks',
    description: 'useState, useEffect, useRef, useContext. Understand why custom hooks exist.',
    code: `const [state, setState] = useState(0);
useEffect(() => { ... }, [deps]);
const ref = useRef(initialValue);
const value = useContext(MyContext);`,
    Demo: HooksDemo,
  },
  {
    id: 'lifting-state',
    title: '14. Lifting State Up',
    shortTitle: '14. Lifting State',
    description: 'When two components need the same data: put state in their common parent, pass down via props. Don\'t reach for global state for everything.',
    code: `// State in parent, pass to both children
function Parent() {
  const [value, setValue] = useState('');
  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  );
}`,
    Demo: LiftingStateDemo,
  },
  {
    id: 'performance',
    title: '15. Basic Performance',
    shortTitle: '15. Performance',
    description: 'Know what causes re-renders. React.memo can avoid unnecessary re-renders. Avoid unnecessary state.',
    code: `// Re-renders when:
// - component state changes
// - parent re-renders (and passes new props)
// - context value changes

// React.memo(Component) skips re-render
// if props are shallowly equal.`,
    Demo: PerformanceDemo,
  },
  {
    id: 'api-calls',
    title: '16. API Calls',
    shortTitle: '16. API Calls',
    description: 'Fetch data, handle loading and error state, render safely. Guard against data.user.name when data might be undefined.',
    code: `const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch(url)
    .then(res => res.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);

// Render: loading ? ... : error ? ... : data && ...`,
    Demo: APICallsDemo,
  },
  {
    id: 'routing',
    title: '17. Basic Routing',
    shortTitle: '17. Routing',
    description: 'react-router-dom: BrowserRouter, Routes, Route. useParams, useNavigate. Single-page app = one HTML page, URL drives which component shows.',
    code: `<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/topic/:id" element={<Topic />} />
  </Routes>
</BrowserRouter>

// In Topic component:
const { id } = useParams();
const navigate = useNavigate();`,
    Demo: RoutingDemo,
  },
  {
    id: 'debugging',
    title: '18. Debugging',
    shortTitle: '18. Debugging',
    description: 'Read error messages and stack traces. Use browser DevTools and React DevTools. Trace the cause; don\'t just refresh and pray.',
    code: `// - Read the error message and stack trace
// - Browser DevTools: Console, Network
// - React DevTools: components tree, props/state
// - Trace the cause; fix the root, not the symptom`,
    Demo: DebuggingDemo,
  },
]
