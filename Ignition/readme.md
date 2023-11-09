### 1. What is `NPM`?

- NPM is stands for Node Package Manager (in npm docs npm doesn't have any propper abbreviations).

- It is a package manager for javascript, specially designed for managing and sharing code libraries and packages.

- NPM is most commonly associated with Node.js, a runtime environment for executing JavaScript Code outside of the web browser.

- NPM allows developers to easily, manage, and distrubute Javascript libraries and tools.

- It's a standard repository for all packages.

- Any Packages we need to our project we use NPM.

Use cases for NPM:

1. _**Installing Dependecies**_:

   NPM makes it easy to install, manage, and update packages.
   Developers can use `npm install` to install packages and their dependencies locally within a project.

2. _**Managing Dependencies**_:

   The package.json file allows developers to list and manage project dependencies, specifying the versions and other information.

3. _**Publishing Packages**_:

   Developers can publish their own packages to the NPM registry so that others can easily use and install them.

4. _**Version Control**_:

   NPM enables developers to specify which versions of packages are compatible with their projects, helping to maintain consistency and stability in development.

   ***

### 2. What is `Parcel/Webpack`? Why do we need it?

- Parcel/Webpack , vite and other packages are JavaScript Bundlers. It basically means bundle our app (parsed) properly and so that it can be shipped to production.

- Parcel and Webpack are both JavaScript bundlers, which are tools that help to take your JavaScript code and transform it into a format that can be understood by web browsers.

- These tools are essential for modern web development because they help manage the complexities of building and deploying web applications.

- The bundler that is used in production is not the same as the bundler that is used in development.

- CRA uses Webpack for production builds, and it uses Parcel for development builds.

_**Why do we need this**_:

- In modern web development, it is common to have multiple JavaScript files that make up your web application. These files can include JavaScript libraries, your own custom code, and third-party scripts. However, loading multiple JavaScript files can slow down your website, as each file requires a separate HTTP request to be loaded by the browser.

- This is where JavaScript bundlers come in. JavaScript bundlers can take multiple JavaScript files and combine them into a single file. This can significantly reduce the number of HTTP requests and improve the overall performance of your website.

- This can improve the loading performance of our web application.

- This can make our code smaller and faster to execute.

- They apply various optimizations to the code and assets, such as minification, compression, and tree shaking, which reduce the size of the bundle and improve load times.

- They manage dependencies, ensuring that the correct versions of libraries and modules are used in the application.

- Webpack, in particular, supports code splitting, allowing you to split your code into smaller bundles that can be loaded on-demand, reducing the initial load time of our application.

_**Parcel**_:

- Parcel is the new bundler that is known for its simplicity and easy to use.

- It does not required any configuration, and it can Hot Module Reloading (HMR) .. It will automatically reload the browser after we making any changes.

- Parcel is generally considered to be more beginner-friendly, but it offers a more limited set of Tree Shaking features.

_**WebPack**_:

- Webpack is the poweful bundler that can be configured to wide range of things.

- It can be more Complex and it can more difficult to use.

- This is because CRA will bundle your project's code using Webpack during the production build process.

- Webpack is a more powerful and versatile bundler than Parcel, and it is better suited for production environments.

- Webpack offers more advanced Tree Shaking features, such as the ability to remove unused code from third-party libraries

---

### 3. What is `Parcel-Cache`?

- Parcel Cache is the directory that can be created by Parcel bundler to store the intermediate build results.

-This can be help to improve the performance of future build, as parcel does not have to re-parse and re-analyze everything from scartvh.

_Benfits of using parcel-cache_:

_**Faster Builds**_:

- Parcel can use the cache data to speed up the subsequent build, especially for large applications.

_**Reduce Resources Usage**_:

- Parcel does not have re-download the dependencies, if there are already cached.

_**Improved reliability**_:

- Parcel-cache can help to prevent errors that can occur when Parcel is parsing and analyzing files.

---

### 4. What is npx?

- NPX is the package runner in Node.js that allows you to run any npm packages without installing it locally.

- This can be useful for trying new packages or running one of commands without cluttering our porjects node_modules directory.

- npx will use the latest version of packages that is available on the npm registry.

- If you want to use a specific version of packages, you can specify it in the npx command. For example, to use Parcel version 2.0.0, you would use the following command:

  `npx parcel@2.0.0 build index.html
`

- npx will not cache the downloaded dependencies.

- This means that you will need to download the dependencies again each time you run the npx command.

_**Benfits of using NPX**_:

**No Need to install packages locally**:

- We can run any npm packages without installing first. This can save our time and space on our hard drive.

- By utilizing package runners like npx, you can temporarily access and execute tools or packages directly from the npm registry without adding them to your project's local dependencies.

- This helps to keep your project's node_modules directory lean and organized, preventing unnecessary bloat and potential conflicts with other installed packages.

- Running Parcel using the npx command will not create a dependency entry in your project's package.json or node_modules directory.

- This is because npx allows you to execute packages directly from the npm registry without installing them locally.

---

### 5. What is difference between `dependencies` vs `devDependencies`?

_**`Dependencies`**_:

- Dependencies are essentiall package that are required for the project to function correctly and deployed to the production environment.

- These Packages are Directly used for Projects code and are crucial its operation.

- The dependencies might include some packages like React, Redux, bootstrap which is essential for the application's functionality.

_**`DevDependencies`**_:

- The packages are specially used for development purposes and its not required for project deployment.

- These Packages typically include tools for building, testing and other development tasks.

- devDependencies might include the packages like Jest, ESLint, webpack which are used for testing, linting, and building the project for deployment.

---

### 6. What is `Tree Shaking`?

- Tree Shaking is the code optimization technique in javascript bundlers like Webpack and parcel that removes the unused code from the bundled files.

- This is significantly reduce the size of the bundle , which can improve the performance and speed loading in our applications.

- The Process of tree shaking involves analyzing the code to identify the unused variables, functions and modules.

- These unused code removed from the bundle , resulting smaller and more efficient code.

_Uses of `Tree Shaking`_:

**Reduced bundled size** :

- By removing unused code, Tree Shaking can significantly reduce the size of the bundle that is downloaded by users.

- This can help to improve the performance of your application, especially on mobile devices with limited bandwidth.

**Improves rendering speed**:

- Tree Shaking can also improve the rendering speed of your application, as the browser does not need to parse and execute unused code.

- This can be especially beneficial for applications with a lot of JavaScript code.

**Reduces memory consumption**:

- Tree Shaking can also reduce the memory consumption of your application, as unused code is not loaded into memory.

- This can be especially beneficial for applications that run on low-end devices.

**`How does Tress shaking Works`**:

There are 2 approaches for tree shaking:

1. **`Static Tree Shaking`** :

- Static Tree Shaking is performed during the bundling process.

- This involves analyzing the code and removing unused code before the bundle is created.

- Static Tree Shaking is generally considered to be more efficient, as it can remove unused code before it is even loaded into memory.

2. **`Runtime Tree Shaking`** :

- Runtime Tree Shaking is performed after the bundle is created.

- This involves analyzing the code at runtime and removing unused code that is not required for the current execution path.

- Runtime Tree Shaking can be more flexible, as it can remove unused code that is dynamically loaded at runtime.

---

### 7. What is `Hot Module Replacement`?

- Hot Module Reload (HMR) is the feature of the Javascript bundlers that allows to update the code in the running applications, without havinh to page reload.

- This is sigificantly improve the developement experience, as it allows you to see changes to your code immediately without having to wait for a full page reload.

- HMR works by tracking changes to the code and then updating the corresponding parts of the DOM. (This is done by using a technique called `event-driven programming`.)

- When a change is made to the code, an event is emitted. This event is then captured by the HMR module, which updates the corresponding parts of the DOM. This is done without having to reload the entire page.

_**Benifits**_:

**`Reduce the developemnt time`**:

- HMR can significantly reduce the amount of time it takes to develop an application.

- This is because you can see changes to your code immediately without having to wait for a full page reload.

**`Improved developer experience`**:

- HMR can make the development experience more enjoyable.

- This is because you can see changes to your code immediately, which can help you to identify and fix problems more quickly.This is because you can see changes to your code immediately, which can help you to identify and fix problems more quickly.

**`Increased Productivity`**:

-More time on developing code and less time to waiting for page reload.

---

### 8. List down your favourite `5 superpowers of Parcel `and describe any 3 of them in your own words.?

**`Instant bundling`**:

- Parcel uses a zero-configuration approach to bundling, which means that you don't need to set up any configuration files.

- Parcel will automatically bundle your JavaScript and CSS files whenever you make a change, so you can see your changes live in the browser.

**`Hot reloading`**:

- Parcel supports hot reloading, which means that you can see changes to your code live in the browser without having to reload the page.

- This can significantly improve your development workflow, as you can see how your changes affect the page immediately.

**`Zero configuration`**:

- Parcel is a zero-configuration bundler, which means that you don't need to create any configuration files to get started.

- Parcel will automatically detect the files that you need to bundle and bundle them for you.

**`Fast builds`**:

- Parcel is very fast, especially when it comes to incremental builds.

- This is because Parcel only needs to bundle the files that have changed since the last build.

**`Small bundle size`**:

- Parcel produces very small bundles, which can improve the performance of your website.

- This is because Parcel only includes the code that is actually needed for your website.

---

### 9.What is `.gitignore`? What should we add and not add into it?

- .gitignore file is a special text file that tells Git, the version control system, which files and directories to ignore when tracking changes and committing code.

- This file helps to keep your Git repository clean and organized by preventing unnecessary files from being added to it.

**Added Files to git ignore**:

**`Files that are generated automatically`**:

- This includes files such as compiled JavaScript files, minified CSS files, and cache files.

- These files are not necessary for the development of our project, and can be recreated easily if they are deleted.

**`Files that are private or confidential`**:

- This includes files such as API keys, passwords, and other sensitive information.

- We should never commit these files to your Git repository, as they could be exposed to others if you do.

**`Files that are specific to your development environment`**:

- This includes files such as our IDE settings, local configuration files, and temporary files.

- These files are not necessary for the development of your project, and can be difficult to share with others if they are included in your Git repository.

**Not Added Files to git ignore**:

**`Files that are essential for our project:`**:

- If you want to share a file with others, we should not add it to our .gitignore file.

- This will ensure that the file is included in our Git repository, and can be easily shared with others.

_Examples:_

node_modules/ --> which contains third-party dependencies

bower_components/ --> which contains Bower components

vendor/ --> which contains vendor libraries

.DS_Store --> which is a macOS file that stores finder metadata

_~ --> ~ which are backup files, _ which are temporary files

---

### 10.What is the difference between `package.json` and `package-lock.json`?

**`package.json`**:

- package.json is a manifest file that describes the project, including its name, version, dependencies, and scripts.

- It is a human-readable file that is used to manage the project's dependencies and metadata.

- package.json is the blueprint for the project's dependencies,

- Should be committed to our Git repository, as it contains important information about your project.

**`package-lock.json`**:

- It is a generated file that locks down the exact versions of all of the project's dependencies.

- This file is used to ensure that the project can be installed and built consistently across different environments.

- package-lock.json is the exact version of dependencies.

- should not be committed to our Git repository, as it is a generated file that can be easily recreated.

---

### 11. Why should I not modify `package-lock.json`?

**`Maintains consistent dependency versions`**:

- The package-lock.json file is generated automatically by npm to lock down the exact versions of all of the project's dependencies.

- This ensures that the project can be installed and built consistently across different environments, even if the versions of the dependencies in the npm registry change.

**`Prevents dependency conflicts`**:

- Manually modifying the package-lock.json file can introduce dependency conflicts, as different packages may require different versions of the same dependency.

- This can lead to build errors and other problems.

**`Prevents dependency conflicts`**:

- The package-lock.json file is managed by npm, and any changes to the dependencies should be made through npm commands, such as `npm install` or `npm update`.

- This ensures that the package-lock.json file is updated correctly and that the project's dependencies are compatible.

**`Source of truth for dependencies`**:

- It records the exact versions of all of the dependencies that are used in the project.

- which can be useful for troubleshooting and debugging purposes.

**`Avoids unnecessary updates`**:

- Modifying the package-lock.json file can trigger unnecessary updates to the project's dependencies.

- This can increase the size of the project's bundle and make it more difficult to manage dependencies.

---

### 12. What is `node_modules` ? Is it a good idea to push that on git?

- The node_modules directory is a standard directory in JavaScript projects that contains all of the project's dependencies.

- These dependencies are third-party modules that are used by the project to provide additional functionality.

- In general, it is not a good idea to push the node_modules directory to our Git repository.

- This is because the node_modules directory can be very large and contain a lot of unnecessary files.

- the node_modules directory is automatically generated when we using npm install command.but package.json is mandatory to create the node_modules directory.

---

### 13. What is the `dist` folder?

- It typically holds the compiled or optimized version of the project's source code, ready for deployment to a production environment.

- The dist folder is often generated during the build process using tools like Webpack or Parcel.

- It contains compiled JavaScript files, minified Css files,image assets and other generated files.

**`Purposes`**:

- dist folder serves as a repository for the final, deployable version of the project's code

- This contains the minified and optimized code,stripped of any unnecessary development-related elements, making it suitable for production environments.

---

### 14. What is `browserlists`?

- Browserslist is a tool that allows developers to specify which browsers their project should support.

- It is a configuration file that contains a list of browser versions and queries that determine which browsers should be targeted.

- This information is then used by various tools, such as Autoprefixer, Babel, and Stylelint, to automatically add vendor prefixes and polyfills to the project's code.

---

### 15. What is ` ^ - caret and ~ - tilda` in package.json?

- package.json, the caret (^) and tilde (~) symbols are used to specify version ranges for dependencies.

**`^ Caret`**:

- Major version remains fixed, minor and patch versions can update

- The caret symbol indicates that you accept any `minor` or `patch version` updates for a dependency while `keeping the major version constant.`
- For instance, if you specify ^1.2.0, you'll receive updates to versions like 1.2.1, 1.2.3, and so on, but not to major updates like 2.0.0 or 3.0.0.

**`~  Tilda`**:

- Major and minor versions remain fixed, only patch versions can update

- It only allows `updates to patch versions(bug fixes),` keeping both `major and minor versions fixed`.

- For example, if you specify ~1.2.0, you'll only receive updates to versions like 1.2.1, 1.2.2, and so on, but not to minor updates like 1.3.0 or major updates like 2.0.0.

---

### 16. Diffference between `Git` and `Github`?

**`Git`**:

- Git is a distributed version control system that allows you to track changes to your code over time.

- It is a powerful tool for collaborative development, as it allows multiple developers to work on the same codebase without stepping on each other's toes.

- Git is also a great way to back up our code and revert to previous versions if we make a mistake.

**`GitHub`**:

- GitHub is a web-based hosting service for Git repositories.

- It provides a centralized location for storing our code, as well as a platform for sharing our code with others.

- GitHub also provides a number of features that make it easier to collaborate on code, such as issue tracking and pull requests

---

### 17.what is `bundler` and what are their jobs?

- A bundler is a tool that combines multiple source files into a single file, or bundle.

- Bundlers are commonly used in web development to combine JavaScript, CSS, and other assets into a single file that can be easily served to the browser.

- Bundlers are a powerful tool that can help developers to improve the performance and efficiency of their web applications.

- By combining multiple source files into a single bundle, bundlers can reduce the number of HTTP requests that need to be made by the browser, which can improve the loading speed of the application.

- Bundlers can also help to reduce the size of the application's codebase, which can improve the performance of the browser and reduce bandwidth usage.

---

### 18. what is `transitive dependencies`?

- Transitive dependencies are dependencies that are indirectly pulled into a project because they are required by another dependency.

- In other words, if we have a project that depends on a library (direct dependency), and that library depends on another library (transitive dependency), the latter becomes a transitive dependency for our project.

Here's an example to illustrate the concept:

`Direct Dependency`:

Your project depends on Library A (directly specified in your project's dependencies).

`Transitive Dependency`:

Library A depends on Library B.
Library B becomes a transitive dependency for your project.

---

### 19. what is meant by `cache`?

- Cache is a` temporary storage location` for data that is frequently accessed.

- It can be used to improve the performance of applications by reducing the number of times data needs to be retrieved from the original source.

- Caches are commonly used in web development to `store static assets`, such as JavaScript, CSS, and images.

- By using a cache, developers can improve the performance and scalability of their applications.

- By storing these assets in the cache, the browser can avoid having to make an HTTP request to the server every time the user visits the page.

- This can significantly improve the loading speed of the page.

- Caches can also be used to store `dynamic data`, such as the results of a database query.

- This can be useful for applications that need to access frequently updated data, such as news websites or social media platforms.

`There are two main types of caches:`

**`In-memory cache`**:

- This type of cache stores data in the memory of the server.

- It is the fastest type of cache, but it is also the most volatile.

- If the server crashes, the data in the in-memory cache will be lost.

**`File-based cache`**:

- This type of cache stores data on the hard drive of the server.

- It is slower than the in-memory cache, but it is also more durable.

- If the server crashes, the data in the file-based cache will not be lost.

---

### 20. what is `yarn`?

- Yarn is a `JavaScript package manager` that is similar to npm.

`Advantages`:

**`Faster installation`**:

- Yarn is faster than npm when installing packages, especially for large projects.

**`Improved concurrency`**:

- Yarn can install multiple packages concurrently(same time), which can significantly reduce the time it takes to install a project.

**`More reliable cache`**:

- Yarn's cache is more reliable than npm's cache, and it is less likely to be corrupted.

**`More secure downloads`**:

- Yarn uses checksums to verify the integrity of downloaded packages, which helps to prevent malicious packages from being installed.

---
