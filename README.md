# GetYourGuide Tours

> GetYourGuide Practise Test  
> Search between different tours!

[![1](https://user-images.githubusercontent.com/16105726/46907145-93a92000-cee4-11e8-9713-99fc90a045eb.png)](https://user-images.githubusercontent.com/16105726/46907158-b1768500-cee4-11e8-8d18-75fba5cca638.png) 
[![1](https://user-images.githubusercontent.com/16105726/46907143-93108980-cee4-11e8-9a71-96bfedfd882e.png)](https://user-images.githubusercontent.com/16105726/46907156-b1768500-cee4-11e8-8df4-e0faf7553da5.png) 
[![1](https://user-images.githubusercontent.com/16105726/46907144-93a92000-cee4-11e8-8f8d-6047206964be.png)](https://user-images.githubusercontent.com/16105726/46907157-b1768500-cee4-11e8-9b76-da2545a0e61b.png)  

### Features
- Responsive design [Desktop / Mobile]
- No scaffolding generators. Created from scratch.
- Unit testing with Jest & Enzyme
- Functional testing with Nightwatch
- Bundle JS - CSS (Transpile ES6 and JSX to ES5, Compile SCSS)
- Minify CSS - JS - Images
- Autoprefix styles for different browsers
- Lint JS with eslint
- Sort / Filter / Pagination / Loading
- 404 page

### Why React
- Easy to split functionality in atomic components.
- Easy to reuse components between multiple projects.
- Fast to code.
- Easy to handle interactions.
- Easy to test.

### Considerations
**Things I would have loved to do, but I couldn't for lack of time:**  
- Deploy in demo server and provide public url. 
- Add more functional tests.
- Generate different bundles in development (with sourcemaps, not minified, etc).

---
### Run Project
`Node: v8.9.2`  
#### 1) Install Dependencies
```
npm install
```
#### 2) Run
```
npm run start
```
#### 3) Navigate to
```
http://localhost:3000
```
---

### Develop
#### 1) Start project
```
npm run start:dev
```
#### 2) Compile assets (run it in a different terminal)
```
npm run watch
```

---

### Unit Tests
```
npm run test:unit
```

### Functional Tests
#### 1) Run the app
```
npm run start:test
```
#### 2) In another terminal run the tests
**Attention:** This required JAVA 8 installed with `JAVA_HOME` set
```
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
npm run test:e2e
```


### Author
Made from Córdoba, Argentina :smiley:  
```
Facundo Allemand  
fallemand@outlook.com
``` 
