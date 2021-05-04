# Tech Blog
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jdbell123/tech_blog)
 [![GitHub issues](https://img.shields.io/github/issues/jdbell123/tech_blog)](https://github.com/jdbell123/tech_blog/issues)
 [![GitHub stars](https://img.shields.io/github/stars/jdbell123/tech_blog)](https://github.com/jdbell123/tech_blog/stargazers)
## Table of Contents

* [Reason](#reason)
* [Learnt](#learnt)
* [Take-Aways](#Take-Aways)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Links](#links)

***

## Reason

The reason for this assignment this week was to learn about using handlebars and the MVC paradigm. As well as using handlebarsm, we were asked to use Sequelize as the ORM, and the express-session npm package for authentication.. We were given the following User Story and Acceptance Criteria:

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```

---

## Learnt

Working on this project I have learnt about the following things:

    1 - Gained knowledge on using handlebars (views etc.)
    2 - Expanded knowledge on MySQL
    3 - Expanded knowledge on JavaScript
    4 - Expanded knowledge on deploying to Heroku that use MySQL/JawsDB

---

## Take-Aways

This was a little bit of a beast of a project to complete. There were a lot of things to do. I would say the main take away on this project was to work on one page/feature at a time. At times I didn't follow this and started making messes/mistakes.

---

## Installation

To install the required libraires for this application use the following command to install the application locally:

```
npm i
```

There is a deployed version of this application. Just navigate to the URL to see the application.

* [Links](#links)

---

## Usage 

To use this application type the following command into your terminal/command prompt (after installing it):

```
npm start
```

Once the local server is running navigate to http://localhost:3001/ to see the app in action.

Here are some screenshots of the finished application:

![Homepage Screenshot](./assets/images/homepage.png "Homepage Screenshot")

![Login Page Screenshot](./assets/images/login_page.png "Login Page Screenshot")

![Dashboard Screenshot](./assets/images/dashboard.png "Dashboard Screenshot")

![Blog Page Screenshot](./assets/images/blog_page.png "Blog Page Screenshot")

---

## Credits

As always thanks to my BFF Google for being there in my hours of need. Also, to my fellow class mates for the study groups and hints/tips I received on this project. Last but not least a thank you to the tutor and TAs for the guidance and support they gave on this project. 

---

## License


Licensed under the [MIT](./LICENSE) license.


---

## Links

[GitHub Repo](https://github.com/jdbell123/tech_blog)

[Deployed App](https://calm-bayou-90219.herokuapp.com/)