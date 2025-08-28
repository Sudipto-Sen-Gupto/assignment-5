1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementById: It select a single element based on its unique id and return a element.

getElementsByClassName: It select all classes which are matched .It returns a HTMLCollection which array of object. So loop is must to use if we want get element. We can get a single class by using index number. It is also Live which means it can update automatically.

querySelector: It  select a single first element like getElementById but not select specific id only.It selects all valid css selector.

querySelectorAll: It selects all valid css selector and return  a nodeList which is also array like objects. It is static that means it can't update automatically.
---

2.How do you create and insert a new element into the DOM?

Ans: 
At first i take a div where i write some heading or paragraph when i want to insert new element into div i use DOM .I catch that parent div where i want insert new element. Then i create a new tag with  innerText or innHTML and append with parent Div.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <div id="market">
    <h1>This is supeer marke1t</h1>
    <p>I came here lastnight</p>
 </div> 
 <script>
    const market=document.getElementById("market");
    const newChild=document.createElement("p");
    newChild.innerText="I get my desirable product from here."
    market.append(newChild);
 </script>  
</body>
</html>

end
---
3.What is Event Bubbling and how does it work?

Ans: Event bubbling is a browser mechanism where after a user action  triggers an event on a specific element that event then bubbles up through its ancestor elements toward the document's root triggering event listeners on each element in the process.
It works as event trigger,target phase,bubbling phase, ancestor handling,and event propogation.
---
4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event delegation  is a technique for handling events on multiple child elements by attaching a single event listener to their common parent element. 
It is useful because it can help improved performance and memory efficiency,simplified codes,and reduced complexity.
---

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans: 
preventDefault: Ther are many HTML elements have deafult behaviour when certain event occurs.This method is helped to prevent the default action associated with an event.

stopProgation:This method is used to prevent event propagation  in the DOM hierarchy. When an event occurs on an element  it typically bubbles up to its parent elements then their parents and so on until it reaches the document object.

