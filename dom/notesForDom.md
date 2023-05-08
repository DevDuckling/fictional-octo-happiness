
## Basic Document Object Model Notes

1. `innerText` 
    - is going to show whatever stuff is inside tag without tags included.
    - you cnnot insert new element with it as it will parse them as they are `<p>lorem</p>`

2. `textContent` 
    - is going to display stuff with tags

3. `innerHTML` 
    - `<p>lorem</p>` only lorem woulb be in view as it will convert it. 
    - give `HTML` tags inside `ul` nested tags.

4. `parent child siblings next previous`
    - If there are 3 li in ul then 
        - ul would be `parentElement` 
        - ul children would be `ul.children` all li
        - li sibling would be `li.nextElementSibling`
        - same goes to `previousElementSibling`

5. `getComputedStyle`
    - Would give you object that contains every computed css properties. `getComputedStyle(pShouldBeSlected)`

6. `ClassList`
    - it comes with property of toggle really helpful, declare one class in stylesheet and toggle it with classList.
    - It won't work on querySelectorAll because it return HTMLCollection you need to iterate over with for or foreach.

7. `createElement`
    - create an empty new element, can use `innerText` of add text and deliver it to DOM you need to `appendChild` it
       
       ### Inserting Element Into DOM
        - `insertBefore`
            - basic syntax `parentElement.insertBefore(newLi, aboveOlderLi)`
        - `appendChild()` It would append at the end.
        - `append()` 
            - newer not work in IE, multiple elements can be appended at the end seperated by comma.
        - `prepend()`
            - not work in IE, same to `append()` just it go at beginning.

       ### Removing Element From DOM
       - `remove()` and `removeChild()`
            - basic syntax `selectedParentElement.removeChild(child)` and `toRemoveParent.remove()`
            - Element to be removed should be child of element you are add `removeChild()` to.
            - It returns the tag that is removed and can be stored in variable.
        
	---

## Events

1. First you need to select an element, i.e, btn then add an method to which a event and callback function is added. 
    - basic synntax `selectedElement.addEventListener('eventName', (callback function) =>{});`
    - `click`, `mouseOver`, `scroll` 
    - `window.screen` display bunch of properties and `innerHeight` `innerWidth` can be used to move an element with the help of `Math.random`.

2. To know more about event evt or e is passed as arg in callback `function(e)` and `console.log(e)` to get information about particular event.

3. Best way for apply event listeners on multiple elements is `looping` i.e., list of `div` 

4. `key` events
    - `keyup` and `keydown` occurs when you press any key i.e., `Shift Key`, useful for making games etc
    - `keypress`  it shows the changes in input and can use `key` or `keycode` property to listen things.
        - In most browsers `arrow keys` are not considered `keypress`.

5. There is method on event object called `preventDefault()` for `form element` to prevent button of form, from redirecting us to new page.

6. `input` event gives us sync data if we managed to extract it of the input element without pressing submit button. i.e., `e.target.value`
    - would give value as you type
    `change` would give value as you lose focus or press enter key.

	---

## Callbacks Promises and Async JS

1. `Call Stack` 
    - Example Sink and Stack of plates, first plate that goes in the sink would be last to pick out, similarly the last plate would be first to pick out. 
    - Google dev tools, then sources there is call stack on top right corner. In your script press on any single line to code to add a breakpoint then pause the script, refresh page and press step into next function button and keep an eye on call stack.

2. `Single Threaded Language`
    - JavaScript is single threaded language. It runs one line of code at a time. Similar to humans they are single threaded when sneezing.

3. `Web API's`
    - Set of api's and setTimeout are provided by browser not by JavaScript as it it single threaded. Browser reminds JS to add certain api reqs when fetched to add it to the call stack in provided time.
    - Basic Functionality
    - `Call Stack --------------> Web Api's --------> Call Stack Queue` from call stack queue js pick them back to callstack.

4. `getBoundingClientRect()` 
    -  method returns a `DOMRect object` providing information about the size of an element and its position `relative` to the `viewport`.

5. `PROMISES`
    - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    - basic syntax

        ```
            const savingItInVariable = new Promise(resolve, response){
                 if(condn === true){
                    resolve();
                    }else{
                        failure();
                        }
                    }
            <!-- if success -->
            savingItInVariable.then(){
                callback function....
            }.catch(){
                callback function.....
             }
        ```
    
    - if neither of them is passed then we get status of `pending`
    - every `resolve()` have `.then()` which triggers on `success`
    - every `failure()` have `.catch()` which trigerrs on `rejected`
    - nesting on `.then()` can be done on the same level when all of them are returning the same promise.

    ```
    example:
    .then((res)=>{
        res.data;
        const id = res.data[0].pageNUmber;
        return MimicReq(`/url/${id}`)})
    .then((res)=>{
        res.data;
        const commentRating = res.data.ratings
         return MimicReq(`/url/${commentRating}`)
    })
    .catch((error)=>{
        console.log('error',error)
    })
    ```
    - best part of this is we only need one `catch()` of multiple `.then()`.

    ---

### AJAJ

1. Terms
    
    - AJAX - Asynchronous JavaScripst And XML : Idead of AJAX is communicationg with servers behind the scenes (SPA) and NOT behind pages load (refreshing page for evry query).
    - XML - Extensible Markup Language : in simple terms, for grouping content and adding meaning to your data. 
    
    - AJAJ - Asynchronous JavaScripst And JSON
    - JSON Java Script Object Notation : is protocol for communicating between servers or sending data between server to server || server to browser then we can it by JS.
    - Diff between JS JSON is not JS. JSON is look a like JS. In JSON every key should be under quotes and cannot store complicated functions.

2. `XMLHttpRequest`
    basic syntax

    ```
    const someReq = new XMLHttpRequest();

    <!-- If success -->
    someReq.addEventListener('load', function(){
        const data = JSON.parse(this.resposeText);
        console.log(data);
    })

    <!-- If Error -->
    someReq.addEventListener('error', function(eror){
        console.log('Error', error);
    })

    <!-- provide type of request and where to send request to (api path )-->
    someReq.open('GET', 'api/path');

    <!-- send the request -->
    someReq.send();

    ```
3. `Fetch API`
    - new way of making Js reqs, n/a in IE and supports promises.
    - basic syntax understanding
    ```
    <!-- pass fetch an api path -->
    fetch('api/path')

    <!-- below response is `ReadableStream` which can big chunk of data which can tale time that's why it returns a promise -->

    .then((response) => {
        <!-- body.json() would make it to completion -->
        response.json()

        <!-- now to get data we need another .then() -->
    
    .then((data) => {
        console.log(data)
    })
    
    })

    <!-- It wont run on status code 404 or 500 It will only run when network issues are detetcted.  -->

     .catch((error)=>{
        console.log('error');
    })

    ```
    - how it looks without comments and chaining too.

    ```
     <!-- as long as you pass return to response.json() you chain .`then()`   -->
    fetch('api/path`).then((response)=>{
        return response.json()
    })
    .then((data)=>{
            console.log(data)
            return response.json()
    })
    .catch((error)=>{
        console.log('error');
    })
    ```
4. `Axios`
    
    - Axios is a promise-based HTTP Client for node.js and the browser
    - bts uses fetch()
    - no need to json parsing it is already done under data.
    - catch works on 404 and on 500

    - basic syntax
    ```
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

    add it above js file

    in js file

    axios.get('api/path').then((response)=>{
        console.log('success', resposne)
    }).catch((error)=>{
        console.log('Error came',error)
    })

    ```

5. `ASYNC` `AWAIT`
    - async keyword : async function always returns a promise, if function return a value te promise is resolved with that value else it is rejected.
    - can add `.then()` as it is returning promise
    - basic syntax
    ```
    async function quote(){
        return('Do not rush... Trust the process')
    }
    quote().then((foo)=>{
        console.log('Quote of the day',foo);
    })
    <!-- It will return promise with return value -->
    ```
    - await : can be only used with async function. It will pause the execution of function, waits for promise to be resolved. 