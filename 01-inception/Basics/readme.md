# React Interview Preperation

1. What is Emmet?

- Emmet is a **_Code Editor Plugin_** and **_Code Abbrevation_** that makes code easier to use.

- It allows you to expand HTML, CSS and XML code.

- Emmet can be used to generate complex HTML and CSS code with few Keystrokes.

- emmet is a powerful tool that can be save your lot of time and effort when coding.

- Benfits :
  - **_Speed_** --> Write Code Much Faster.
  - **_Accuracy_** --> Avoid Errors.
  - **_Consistency_** --> Write more consitency code by following standard set of abbrevation.

---

2.  Difference between a Library and Framework?

**_Framework:_**

- More complex set of code that provides structure for developing applications

- We want to build complete application then Framework is Good.

- Set of rules and Guidelines that can follow into build our applications.

**_Library:_**

- Collection of code that can be used our own code.

- It gives set of tools and functionality that can be used to build our own applications.

- Libraries are More Flexible than Framework.

- We used Library to build any type of application that we want.

---

3.  What is CDN? Why do we use it?

- A Content Delivery Network (CDN) is the network of servers , distributed around the world, that deliver the web content to users, with High availability and Performance.

- CDN's are Cache Static and Dynamic content such as, HTML pages, Images, videos and Javascript Files, so that they can be delivered to user more quickly and efficiently.

- CDN's are used to improve the Performance and Web Reliability of website and web applications.

**_Benifits :_**

1. Performace:

- CDN's are used improve the performance of the Websites and Web applications to deliver the web content to the users from the servers that closer to them.

- This can reduce the Latency and improve the overall UserExperience.

2. Increased Reliabilty:

- CDN's are increasing the reliability of the website and web application that deliver the webcontent across the network of servers.

- This means if the one of the server goes down , the content can still be delivered from the other servers.

3. Reduce BandWidth Cost:

- It reduce the bandwith cost by caching the content on servers that are closer to them.

- This means user can download the content from servers that are closer to them,which can reduce bandwidth cost for both users and website owners.

4. Improved Security:

- It improve the security of applications providing a layer protection between website and user.

---

4. Why is React known as React?

- React is known as react, because it's core feature, which is ability to "react" to changes the data.

- React was originally created by Facebook in 2011 for use in their own application, and it was released in 2013 for oper-source projects.

- React is the **Decelrative** Library, which means that you tell it what you want the UI to look like, but NOT how to achieve it.

- React will then figure out the most efficient way to update the UI when the data changes.

- This makes React very efficient and easy to use, and it is why it has become one of the most popular JavaScript libraries in the world.

1. **Compoenet Based Architecture**:

- React applications are built from reusable components, which makes them easy to maintain and scale.

2. **Virtual DOM:**:

- React uses a virtual DOM to efficiently update the UI. This means that React only updates the parts of the UI that have actually changed.

3. **Unidirectional data flow:**

- React uses a unidirectional data flow, which makes it easy to reason about the state of your application.

- Overall, React is a powerful and versatile JavaScript library that can be used to build a wide variety of web applications. It is easy to learn and use, and it is backed by a large and active community.

---

5. What is crossorigin in script tag?

- The crossorigin attribute in the script tag allows you to specify wheteher or not the script can access the resources from other domains.

- This is important for security reason , as it can prevent malicious scripts from stealing your data.

There are 3 possible values for the crossoriginn attribute:

1. anonymous : This is the default value. It means the script cannot access the resourses from other domains.

2. use-credentials: This means the script can access the resources from other domains, and it can also send your cookies and other authentication credentials to those domains.

3. true: This is same as user-credentials.

Why should we use Crossorigin attrubute?

- We should use crossorigin attribute , if we are loading the script from third party domain. This is because the third-party scripts potentially be malicious, and the crossorigin attribute can help to protect our data.

- We should also use the crossorigin attribute if We are loading a script from a different domain than the one that is serving our page. This is because different domains have different security policies, and the crossorigin attribute can help to ensure that the script is loaded securely.

```HTML
<script crossorigin="anonymous" src="https://example.com/script.js"></script>
```

---

6. What is diference between React and ReactDOM?

- React and ReactDOM are two Javascript Libraries that are often used together to build user interfaces for web applications.

- React is the declerative library, it allows we to look like the UI, and it si not how to achieve it. React will find out the most efficient way to update the ui when the data changes.

- ReactDOM is the Library that provides the bridge between React and DOM. It allows to render the React Compoenents into the DOM.

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const MyComponent = () => {
  return <div>Hello, world!</div>;
};

// Render the React component to the DOM
ReactDOM.render(<MyComponent />, document.getElementById('root'));

```

- You should use React and ReactDOM together whenever you need to build a user interface for a web application. React is a great choice for building complex UIs, and ReactDOM makes it easy to render those UIs to the DOM.

---

7.  What is difference between react.development.js and react.production.js files via CDN?

- The react.development.js and react.production.js files are two different versions of the React library that are available via CDN.

- The react.development.js file is meant for development, while the react.production.js file is meant for production.

_**Difference Between 2 File:**_

1. **Size:** The react.production.js file is smaller than the react.development.js file. This is because the react.production.js file has been minified and gzipped.

2. **Features:** The react.development.js file includes additional features that are useful for development, such as error messages and warnings. The react.production.js file does not include these features, as they can slow down the performance of your application in production.

_**When to use each file:**_

- You should use the react.development.js file when you are developing your React application. This will give you access to the additional features that are useful for development, such as error messages and warnings.

- You should use the react.production.js file when you are deploying your React application to production. This will help to improve the performance of your application by reducing the size of the React library.

_**How to use each file:**_:

```HTML
<script src="https://unpkg.com/react@latest/umd/react.development.js"></script>
```

```HTML
<script src="https://unpkg.com/react@latest/umd/react.production.js"></script>
```

---

8.  What is async and defer?

_**Async**_:

- The async attribute tells the browser to load the script asynchronously, which means that the browser does not have to wait for the script to finish loading before it can continue rendering the page.

- This can improve the performance of the page, especially if the script is large or slow to load.

_**Defer**_:

- The defer attribute tells the browser to load the script after the HTML document has finished parsing, but before the DOMContentLoaded event fires.

- This means that the script will not be executed until the HTML document has been loaded and the DOM has been created.

- This can be useful if the script needs to access the DOM or if it needs to be executed in a specific order.

_**Which one to use?**_

- In general, it is best to use the async attribute if you want to improve the performance of your page.

- However, if the script needs to access the DOM or if it needs to be executed in a specific order, then you should use the defer attribute.

```HTML
<script async src="https://example.com/script.js"></script>

<script defer src="https://example.com/script.js"></script>
```

## ![Alt text](<Basics/Screenshot 2023-10-17 221714.png>)
