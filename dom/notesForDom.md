
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
