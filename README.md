<textarea id="source">

<h1 class="slide-header">Arrays and Objects</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  Say you’re compiling a playlist of your favorite karaoke songs. You could write each song on a different sheet of paper, but it would make more sense to have your whole playlist in one place. Similarly, in JavaScript, it wouldn’t be efficient to declare each song title as an individual variable. But what if you could store a collection of titles in each variable? That’s where arrays and objects come in, allowing you to store and use larger chunks of data in JavaScript. Let’s dive in.</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Arrays

<hr>

Array Methods and Properties

<hr>

Objects

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/arrays-and-objects-ef6ea5.pdf" target="_blank" download="arrays_and_objects_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Build an array and an object in JavaScript.</li>
  <li>Explore and manipulate arrays using properties and methods.</li>
  <li>Use dot notation to access and add information to an object.</li>
</ul>

---

<h1 class="slide-header">So Much Cheese, So Little Time</h1>

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/Lesson%202/cheesegif.gif)

Your best friend is a cheese aficionado. He’s so obsessed that he’s writing a JavaScript program to catalog the 750 types of cheese he’s sampled, along with his notes on each. But putting each type into its own variable would mean tedious work like this:
```javascript
const cheese1 = "Aged British Cheddar";
const cheese2 = "Aggiano";
const cheese3 = "American";
const cheese4 = "Applewood Smoked Chevre";
...
```

If only there were a way for a single variable to hold multiple values...

Enter the **array** — a list that stores multiple items together.

---

<h1 class="slide-header">Introduction to Arrays</h1>
<!--
  WISTIA EXAMPLE. REPLACE 11dit621rx with the id
-->
<div class="wistia_embed wistia_async_63qm6h7hlg wistia_embed_initialized" id="wistia-63qm6h7hlg"
  style="width: 100%; height: 90%;">
  <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
    <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
      <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
      <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
        <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
          <div class="w-video-wrapper w-css-reset"
            style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
            <video id="wistia_simple_video_135" crossorigin="anonymous"
              poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" controlslist="nodownload"
              playsinline="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"
              style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
          </div>
          <div class="w-ui-container"
            style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
            <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
              style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
              <div class="w-vulcan--background w-css-reset"
                style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                <div class="w-css-reset" data-handle="statusBar"></div>
                <div class="w-css-reset" data-handle="backgroundFocus"><button
                    aria-label="Play Video: A Brief History of the Web" class="w-css-reset w-vulcan-v2-button"
                    tabindex="0" style="width: 0px; height: 0px; pointer-events: none;"></button></div>
              </div>
              <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                style="position: absolute; left: -99999em;"></div>
              <div class="w-vulcan-overlays-table w-css-reset"
                style="display: table; pointer-events: none; position: absolute; width: 100%;">
                <div class="w-vulcan-overlays--left w-css-reset"
                  style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                  <div class="w-css-reset" style="height: 321.375px;"></div>
                </div>
                <div class="w-vulcan-overlays--center w-css-reset"
                  style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                  <div class="w-css-reset" style="height: 321.375px;">
                    <div class="w-css-reset" data-handle="bigPlayButton" style="pointer-events: auto;">
                      <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                        style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                        <button class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button" tabindex="0"
                          type="button" style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                          <div
                            style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                          </div>
                          <div
                            style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                          </div><svg x="0px" y="0px" viewBox="0 0 125 80" enable-background="new 0 0 125 80"
                            aria-hidden="true" alt=""
                            style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                            <rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="125" height="80"></rect>
                            <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="53,22 53,58 79,40">
                            </polygon>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="w-css-reset" data-handle="clickForSoundButton" style="pointer-events: auto;">
  <div class="w-css-reset w-css-reset-tree" data-handle="click-for-sound-backdrop"
    style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
    <button aria-label="Click for sound" class="w-vulcan-v2-button click-for-sound-btn"
      style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
      <div
        style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
        <span
          style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
          for sound</span>
      </div><svg viewBox="0 0 237 237" width="51.6796875" height="51.6796875"></svg>
    </button>
</div>
</div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- YOUTUBE -->
<!-- VIMEO -->
<details>
  <summary>Transcript</summary>
  
  <p class="transcript-text">
    We’ve learned how variables are used to temporarily store and remember data. But say we’re dealing with multiple variables. Then what do we do?

    For instance, say we’re creating a grocery list of items we need for a fruit salad. We could declare each of the items individually. This would kind of be like writing each item on our list on a different sheet of paper. It would probably be easier and make more sense to just have it all in one place.
    
    We can do the same thing with variables using arrays. An array is a list of values contained within brackets and separated by commas. Each value in the array is called an element. Just as we might refer to an item on a grocery list by its placement, the same is true for the elements in an array. However, instead of starting at one, we start at zero.
    
    We’ll get into all of this in depth later on. For now, just remember that when we’re dealing with the variable salad, arrays can help us keep all of our ingredients in one place.
  </p>
</details>

---

<h1 class="slide-header">Array Syntax</h1>

![Array Syntax](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-8/array_syntax.png)

Arrays are **data structures**, which is a fancy way to say that they’re a means of organizing information. In an array, we place multiple values in a sequential list.

The items in the list — known as **elements** — are separated by commas and situated between square brackets `[ ]`.

``` js
const beverages = ["coffee", "tea", "hot chocolate", "milk"];
const leapYears = [2016, 2020, 2024, 2028];
```

An array usually contains one data type and, in JavaScript, arrays can dynamically grow and shrink in size.

---

<h1 class="slide-header">Indices</h1>

Items in an array are stored in _sequential_ order. Each element has an **index** — a number that tells us the position in the array at which the element can be found.

Indices allow you to access and update array values.

Take a look at this grocery list. Do you notice anything interesting about how these items are numbered?

```html
0. Milk
1. Cheese
2. Juice
3. Cauliflower
```

---

<h1 class="slide-header">Index Values</h1>

You may have noticed that the numbers start at `0` instead of `1`. JavaScript, like many programming languages, is _zero-based_, meaning its numbering starts at `0` instead of `1`.

So when we start assigning index values to an array, the first position in the array will be `[0]`, the second will be `[1]`, and so on. Take a look at the following example:

```javascript
const animals = ["camel", "dog", "lizard", "cat"];
```

As you can see, there are four elements contained within this array.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/Lesson%202/animalsarray.png)

---

<h1 class="slide-header">Knowledge Check</h1>

In the array below, what’s the index of the term `"pepperoni pizza"`?

```js
const favoriteFoods = ["ice cream", "pepperoni pizza", "apple pie", "almond butter"];
```

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">0</label><br />
  <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">1</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">2</label><br />
  <input type="radio" name="action" id="answer4" value="answer4" /><label for="answer4">3</label><br />

</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Accessing Elements of an Array</h1>

To see what’s contained in an array, we use a format called **bracket notation**. Bracket notation is written like this: `arrayName[0]`. This tells JavaScript to find the array called `arrayName`, then look at the value at index `0`.

Looking at our food array, we could find the second value in the array using a `console.log`:
```js
const favoriteFoods = ["ice cream", "pepperoni pizza", "apple pie", "almond butter"];
console.log(favoriteFoods[1]);
```

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/Lesson%202/foodarray.png)

---

<h1 class="slide-header">Updating Elements of an Array</h1>

Changing an element in an array is just as easy. To access a value from an array, we use the array name, followed by the index number of the element we want to update. We then simply write an *assignment operator* as if we were assigning a value to a variable.

```js
favoriteFoods[1] = "veggie burgers";
```

In this example, we’re replacing `"pepperoni pizza"`, the element previously at index `1`, with `"veggie burgers"`. The updated array will look like this:

```js
["ice cream", "veggie burgers", "apple pie", "almond butter"];
```

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/Lesson%202/mygafoodarray.001.jpeg)

---

<h1 class="slide-header">Knowledge Check</h1>

Given the following code snippet, what would the console return? You might want to write these changes down somewhere to keep track.

```js
const luckyNumbers = [13, 42, 7, 28];
luckyNumbers[0] = 99;
luckyNumbers[2] = luckyNumbers[0] - luckyNumbers[2];
console.log(luckyNumbers);
```
<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">[99, 71, 7, 8]</label><br />
  <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">[99, 42, 92, 28]</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">[13, 15, 7, 28]</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">The Length Property</h1>

In addition to containing multiple elements, arrays also have a number of built-in properties and functions that give them many useful abilities.

All arrays have a property called `length`, which tells us how many elements are present in the array. To access this value, simply tack on `.length` to the end of an array’s name.

Here’s an example of `.length` in action:

```javascript
const numbers = [10, 20, 30, 40];
numbers.length;
// => 4 elements in the array
```

---

<h1 class="slide-header">Push and Pop</h1>

Just as we can use concatenation to modify strings, we can use **array methods** to work with arrays. A method manipulates items in an array, whether by sorting, removing, or adding data.

To start, let's look at two array methods that accomplish simple-yet-important functions:

| Method | What It Does | How It’s Written |
| --- | --- | --- |
| Push | Adds new items to the end of an array. | `arrayName.push(elementToAdd)` |
| Pop | Removes items from the end of an array. | `arrayName.pop()` |

(And yes, there are many other array methods out there — we’re just starting with the basics here.)

---

<h1 class="slide-header">Knowledge Check</h1>

To recap, `.push()` adds new items to the end of an array and `.pop()` removes items from the end of an array.

Given the following code snippet, what would show up in the console?

```js
const myHobbies = ["basket weaving", "hot yoga", "film noir movies"];
myHobbies.pop();
myHobbies.push("fantasy novels");
console.log(myHobbies);
```

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">["basket weaving", "hot yoga", "film noir movies", "fantasy novels"]</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">["fantasy novels", "basket weaving", "hot yoga"]</label><br />
  <input type="radio" name="action" id="message" value="message" correct="true"  /><label for="message">["basket weaving", "hot yoga", "fantasy novels"]</label><br />
  <input type="radio" name="action" id="answer4" value="answer4" /><label for="answer4">["film noir movies", "basket weaving", "hot yoga", "fantasy novels"]</label><br />

</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Your Turn</h1>

Time to practice your array-making skills.

1. Create an array called `favoriteFoods` with four values in it.
2. Push two more values into the array.
3. `pop()` a value from the array.
4. Use `console.log()` to see what values now are in the array.
5. Use `console.log()` again to check the length of your array.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Favorite Foods" src="https://codepen.io/GAmarketing/embed/poBNxqv?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/poBNxqv">
  Favorite Foods</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Our Next Data Structure</h1>

Arrays store similar values based on one shared characteristic, such as all of your favorite foods or all of your hobbies.

But, what if you wanted to store both types of information, as well as your age and hometown, in one place? All of that data wouldn’t quite fit into an array, but we can store the information in an **object**.

Here’s how we write an object: We start with the name of the object, followed by its properties, which are surrounded by curly braces:
```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
```

---

<h1 class="slide-header">Key Value Pairs</h1>

Objects store properties — written as **key-value pairs of data** — under one umbrella. Here, that umbrella is `aboutMe`, and it contains five key-value properties. 

Think of a key-value pair as a term and its definition. In this case, a term is `name` (the key) and its definition is `"Lisa Simpson"` (the value). Keys and values are separated by a colon, and commas are used to separate each new key-value pair.

```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
```

Notice how we have strings, numbers, Booleans, and arrays all in `aboutMe`. With objects, you can store as much data as you want in whatever format you want. You will even see objects that store other objects as properties.

---

<h1 class="slide-header">Knowledge Check</h1>

Which of the following statements about the syntax of this object are **true**?

```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
```

<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" /><label for="uniqueAnswer">age is a value</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" correct="true"/><label for="uniqueAnswer2">isABoss is a key</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">8 is a value</label><br />
  <input type="checkbox" id="uniqueAnswer4" name="unique4" /><label for="uniqueAnswer4">true is a key</label><br />
  <input type="checkbox" id="uniqueAnswer5" name="unique5" correct="true"/><label for="uniqueAnswer5">hobbies is a key</label><br />
  <input type="checkbox" id="uniqueAnswer6" name="unique6" /><label for="uniqueAnswer6">"Springfield, Oregon" is a key</label><br />

</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">All About You</h1>

Now, it’s your turn to tell us something about yourself using an object!

1. Create an object named `aboutMe`.
2. Add four key-value properties inside the object. 
3. Make sure one of the properties is your name, one is your age, and one contains an array.
4. When you’re done, `console.log()` your object to check your work.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="All About You" src="https://codepen.io/GAmarketing/embed/rNbWqoL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/rNbWqoL">
  All About You</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Accessing Values from an Object with Dot Notation</h1>

Just as we can explore what’s in an array using bracket notation and properties, we can see what’s inside an object using **dot notation**. Dot notation is written like this: `objectName.propertyName`.

For example, if we wanted to check the `hometown` property in the object below, we could add a `console.log` for `aboutMe.hometown`:

```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
console.log(aboutMe.hometown);
```

---

<h1 class="slide-header">Knowledge Check</h1>

How would you use the console to check what hobbies are contained in the object below? 

```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
```

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">console.log(hobbies.aboutMe);</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">console.log(hobbies);</label><br />
  <input type="radio" name="action" id="message" value="message" correct="true"/><label for="message">console.log(aboutMe.hobbies);</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Creating New Properties in an Object</h1>

We can also use dot notation to add new key-value pairs to an object. 

Imagine we wanted to add a property to describe Lisa’s dream job. Instead of rewriting the entire object, we could just use dot notation, followed by the value we’re adding, like so:

`aboutMe.dreamJob = "political activist"`

If we were to `console.log` the object after adding this, we’d get:

```js
const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"],
  dreamJob: "political activist"
};
```

---

<h1 class="slide-header">Your Turn</h1>

Let’s use dot notation to work with an object about yourself. This time, we’ll start with an empty object and use dot notation to add properties.

1. Add a `name` property equal to your name in string format.
2. Add an `age` property equal to your age as a number.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Introduce Yourself" src="https://codepen.io/GAmarketing/embed/xxeRymd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/xxeRymd">
  Introduce Yourself</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**Up for a challenge?**

Let’s throw it back to string concatenation, but this time, we’ll use the `aboutMe` object. Use concatenation and dot notation to `console.log()` the following sentence, filling in the blanks with the `name` and `age` properties, respectively.

`"Hello! My name is _______ and I am _______ years old."`

---

<h1 class="slide-header">Arrays Are Your New Superpower</h1>

Add `"Chemical X"` to the existing array of ingredients by using the `push()` method.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Arrays are Your New Superpower" src="https://codepen.io/GAmarketing/embed/LYvbgMz?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/LYvbgMz">
  Arrays are Your New Superpower</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Let's Eat</h1>

We’ve prepared a substantial array of breakfast foods, and it’s time to clear our plate! 

One by one, use the `pop()` method to remove each string from the back of the array. But first, `console.log()` each item before removing it. Your console output should end up looking like this:

```
Huevos Rancheros
Pancakes
Biscuits and Gravy
```

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Let's Eat" src="https://codepen.io/GAmarketing/embed/YzMpJda?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/YzMpJda">
  Let's Eat</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">The Work of an Artist</h1>

Objects are so helpful because they can be used to represent anything in the real world, whether it’s animal, vegetable, or mineral.

For this challenge, create an object named `artist` that represents your favorite musical artist. Give them the following properties:

1. A `name`, which should be a string.
2. An array called `talents`, which should contain strings.
3. A number called `albumsRecorded`. 

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="The Work of an Artist" src="https://codepen.io/GAmarketing/embed/RwOoeEJ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/RwOoeEJ">
  The Work of an Artist</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Game Over!</h1>

We’re programming a video game in space, and our `player` was doing really well... until they got hit by an asteroid. Modify the `player` object using dot notation to make the following changes:

1. Set `health` to `0`, because there’s no coming back from an asteroid hit.
2. Set `points` to `950`, because they deserve some credit for a spectacular ending.

<iframe sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Game Over" src="https://codepen.io/GAmarketing/embed/mdgOzaj?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/mdgOzaj">
  Game Over</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Conclusion</h1>

You're now able to represent complex, real-world objects using JavaScript data structures: arrays and objects.

Next, we'll see how JavaScript can use logic and comparisons to make reasonable decisions and run the code that we want it to run.

</textarea>