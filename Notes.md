# TaskIt App

Figma Link <https://www.figma.com/file/6UcvwOSLa8OGQuQvdE1MHE/Task-Manager?type=design&node-id=5-12&mode=design>

### Battle Plan

![Alt text](image.png)

### The Sidebar

<https://getbootstrap.com/docs/5.0/examples/sidebars/>

Nvmd borrowing, we're building this from scratch:

<https://www.youtube.com/watch?v=ZsSCHGyFeV8>

Update, it wanted me to install JQuery. Didn't really... do much

    npm install jquery

*ANOTHER update: I just had to GitBash it and it was fine!*

### Other Important Notes

Icons for Bootstrap?

    npm i bootstrap-icons

<https://icons.getbootstrap.com>

<https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-icons.php>

I found a better version of the tutorial here

<https://www.youtube.com/watch?v=OPt87w9WuZo>


bg- <-- background colors

<https://getbootstrap.com/docs/4.0/utilities/colors/>

I found a table reference!

<https://codepen.io/RedJokingInn/pen/RpddaE>

### 10/9/23

Found instructions on how to round corners
<https://unused-css.com/blog/css-rounded-table-corners/>


### 10/10/23

Found a link to a Kanban template
<https://codepen.io/Aniboaz/pen/vKOXPa>


Sign in/create an account page
<https://codepen.io/bowie/pen/njjaZo>

Transparent Window
<https://codepen.io/jaeming/pen/XWyaMe>

### 10/11/23

Dropdown buttons
<https://getbootstrap.com/docs/4.0/components/dropdowns/>


*I'm pretty sure I can put the task lines, like we've been doing, as a template. Then I don't need to go row per row to automate them in the HTML*

### 10/12/23

<https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal>

I like this page better! It has the capability to do things I want...


**JUST LEARNED THIS VERY IMPORTANT THING**

![Hotlinking](image-1.png)

### 10/13/23

Found a page that might be helpful in designing the UI interface

<https://codepen.io/aybukeceylan/pen/OJRNbZp>


*UPDATE. There is a LITERAL Assets folder. Use this for embedded images*

![Hotlinking](image-2.png)

### 10/15/23

Getting closer to partial functionality! That Recipe app demo has everything I need to link these together...

<https://www.youtube.com/watch?v=YGCDAXFWAZo>

Found another Kanban tutorial. Try this to move panels...

### 10/16/23

Just going to stick to pure documentation... frankenstiening is becoming too much of a hassle.

<https://material.angular.io/cdk/drag-drop/api>

### 10/19/23

    npm install popper.js --save

Hope this works to get the dropdown to work...

Nope. Let's try this one

    npm install jquery --save

Nope!

At least I've got a dropdown list for the buttons now.
Going to skip this one for now and come back later...

We're going to go with change pages with routing and assemble some URLS!

![Alt text](image-3.png)

I want to work on this part... to have the buttons load the different pages

Going to use this to generate the data table

<https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning>

OKAY! I got a working add task button. Now just need to re-route the submit to "add" to the list via the submit button when making a new task...

## 10/26/23

![Alt text](image-5.png)

Updated my outline for the app

<https://jamboard.google.com/d/1QW8bDa9fh_Ix0r4Ti95sI2UvzQLTzyJLdgg0V32oWnU/viewer?f=0>

Setting up routing:

1) Make a new file called "app-routing.module.ts"

2) Add the components you want to hop between

3) Add the router outlet to your app-component.html

<router-outlet></router-outlet>

*instead of header replace with sidebar*

Note to self: Need to combine the sidebar with the pages itself to make this MUCH cleaner... Did so by importing the bar into the page. That way if something is funky can go to the source

YES!! I've been scared with routing but finally got the wheels moving

-----------------
Update: at home tried to run. Got error:

Cannot find module '@angular/cdk/drag-drop' or its corresponding type declarations.ts(2307)

Trying this command to fix it: 
    npm install --save @angular/material @angular/cdk

Now it works!

## 10/27/23

Cleaned up the bar on the left a bit. It's been a busy day.

Sometimes I wish all I had to worry about was just getting this homework done...

--------
This looks a lot more helpful for the Kanban stuff

https://www.youtube.com/watch?v=ecKw7FfikwI

OOOH!! This one is SUPER Nice:

https://github.com/lukeska/kanban-board

This one has categories!

https://www.youtube.com/watch?v=YU9XJEeLjk4

*learned that hyphens DO NOT work with routing. Example below for sign-up:*

 {path: "sign-up", component: SignUpComponent},

YESS!! Got the pages connected. One step closer. Feel like I can actually do this

*There's a pop up thing in Angular...*

https://v6.material.angular.io/components/dialog/overview

## 10/29/23

Modal Dialouge...Work with Nia 1 hour to find overlay thing

READ Angular Docs pls....

## 10/30/23

This will come in handy with making the forms submitable

https://angular.io/guide/forms

This MIGHT help with the Kanban thing

https://github.com/adityakeyal/angular-kanban


![Bug](image-6.png)

I am not sure why, this "fixes" it, but not sure how to go about solving this issue.

THE MODAL HAS TO BE IN APP COMPONENT

"Modal is behind backdrop" <- prose for the internets

*This is so we can create a new button to attach to a modal*

<div class="modal fade" id="newModal" tabindex="-1" aria-labelledby="newModalLabel" aria-hidden="true">
  <!-- Your modal content goes here -->
</div>

<button id="openModalButton" class="btn" data-bs-toggle="modal" data-bs-target="#newModal"><i class="bi bi-eye" style="font-size: 25px;"></i></button>

So I need to edit the *"id"* and the *"aria-labelledby"* 

For the task-list component area and for the individual modal areas I need to edit the *"data-bs-target"* areas.

## 11/2/23

Knocked out those cancel buttons...

data-bs-dismiss="modal"

