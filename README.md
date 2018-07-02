OpenSponsorship Submission

Athlete Profile Input Form
Overview
In this task you'll be creating and deploying a simple, full-stack, single-page application in Node and Angular 1.

I would like you to create a multi-step or multi-screen athlete profile form that gathers standard demographic, sports and event data. Here is a list of data points and sports you might want to use:

Data Points
Name
Date of Birth
Nationality
Location
Association (e.g. NBA, NFL)
Team (e.g. New York Giants)
Gender
Sports (Can Multiple)
About
Interests
Charities
Social Media Handles (Facebook, Twitter, Instagram, Youtube, Twitch, Snapchat)
Pets
Drinks Alcohol
Married
Profile Image (If you have time - S3 storage)
Sports
Golf
Tennis
Cricket
Basketball
Baseball
American Football
Aquatics
Archery
Automobile Racing
Badminton
Beach Volleyball
Bobsleigh
Body Building
Boxing
Cross Country Running
Cross Country Skiing
Curling
Cycling
Darts
Decathlon
Down Hill Skiing
Equestrianism
eSports
Fencing
Field Hockey
Figure Skating
Gymnastics
Ice Hockey
Martial Arts
Mixed Martial Arts
Modern Pentathlon
Motorcycle Racing
Netball
Polo
Racquetball
Rowing
Rugby
Sailing
Softball
Shooting
Skateboarding
Skeet Shooting
Skeleton
Snow Boarding
Soccer (Football)
Squash
Surfing
Swimming
Track and Field
Here is a suggested organization of the form but use your best judgement and creativity:

Basic Info: name, sport, nationality, gender, date of birth
About: description, location, team etc
Social Media: handles
Summary: show the athlete a wrap-up screen with the info they added, and give them a way to go back and edit if there are any mistake
Submit: On submit, the payload should be sent to a simple end point which persists the profile. This should be saved to a simple free MongoDB instance, such as mLab.
List: After submission I should see a list of all profiles I have created
Here are the requirements for the API

Node/Express
Mongoose ORM (MongoDB)
3 End Points - POST, GET, PUT
Request Param Validation - express-validator (Bonus Feature)
Please note:

This is a single-page application. There shouldn't be page reloads between screens.
It would be nice to see your stage as your work through the form
Time limits
Please spend no more than 4-hours on this test. If you can't make it perfect in that time, don't worry, just send me what you've accomplished.

Please turn in your results within 72-hours of the prompt being given. If that falls during the weekend, then please turn it in by Monday.

Extensions are available, just ask! 
Evaluation & priorities
Within your brief 4 hour time limit I hope you'll prioritize the following, in this order. Consider this an iterative process � get it working on sound principles first, then refine and polish as time allows.

Make it work!
Clean and clear code (hopefully you didn't sacrifice this to make it work)
Project organization
Planning: tools used, implementation strategy, basic UX concerns like what to ask for where
Make it look good - just use Bootstrap, a Material theme, or whatever you're comfortable with
Management of data, state, and events internally
Code quality details - Type, variable, property checking - Failing fast, for better debugging
Extra polish, concern and care will be noticed
Less important details:

How you host your project. Please consider a simple cheap (or free) host like Heroku.
Tests are great, but I doubt you'll have time.
Delivery of project
Please place your finished source code on GitHub
Please host your finished application somewhere (Heroku)
Email me the repository URL and application URL
If for some reason you would rather not have your code or application out in the open, please send me a zip file of the source code and instructions on to launch and view the finished application.
Wrap up
When you've finished the test let me know by email: ishveen@opensponsorship.com

We will then schedule a short wrap up call to go over your results and the thinking you applied to this project.

Hints
Be efficient! Please don�t reinvent the wheel, use generators and other tools when they speed up your process and get you to your end goal faster.
