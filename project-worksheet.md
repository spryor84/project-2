# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1- Tuesday| Project Description | Complete
|Day 2- Wednesday| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3- Thursday| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4- Friday| Pseudocode / actual code | Complete
|Day 5- Saturday| Initial Clickable Model  | Complete
|Day 6- Sunday| MVP | Complete
|Day 7- Monday| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

In these turbulent times my goal is to create a application that displays how US senators have voted in Senate confirmations. I will start by including the ability to search by votes that take place in each congress (115, 114, 113, etc.) and then hopefully include searching by US state (this will likely involve multiple APIs). The major PostMVP goal would be to also create a visual represention of the data.

Potential Problems:
- Accession API with multiple fetch arguments (DONE)
- Mapping (SOLVED)
- Multiple APIs (ABANDONED)
- D3 (NOT SOLVED)

Deployed link:
senate-nominations.surge.sh

API link: 
https://www.propublica.org/datastore/api/propublica-congress-api

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Complete Wireframe](https://res.cloudinary.com/duuqzvlvn/image/upload/v1539653293/unit02-project/Complete.png)<br>
[Wireframe](https://res.cloudinary.com/duuqzvlvn/image/upload/v1539653294/unit02-project/Wireframe.png)<br>
[Components](https://res.cloudinary.com/duuqzvlvn/image/upload/v1539653294/unit02-project/Components.png)<br>
[MVP](https://res.cloudinary.com/duuqzvlvn/image/upload/v1539653293/unit02-project/MVP.png)<br>

(Pictures also in Repo)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

### MVP/PostMVP - 5min

#### MVP ***

- Access API
- Lookup Senate Data
- Fix CSS 
- Deploy site

#### PostMVP  ***

- Lookup by State/zipcode (other APIs)
- Multiple data categories
- D3
- Use Routing

## React Architectural Design ***

Define the the React components and the architectural design of your app.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Index | This will render the whole application | 
| App | This will render Form and VoteList | 
| Form | This will render inputs | 
| VoteList | This will render the list of votes | 
| Vote | This will render the individual political vote | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | 3hrs | 3hrs | 3hrs |
| Setting up main Components | 3hrs | 4hrs | 4hrs |
| Adding Form Component | H | 3hrs| 3.5hrs | 3.5hrs |
| Accessing the API | H | 3hrs| 3hrs | 4hrs |
| Pulling from the API MVP | H | 3hrs| 4hrs | 2hrs |
| Pulling from the API PostMVP | H | 3hrs| 4hrs | 0hrs |
| CSS | L | 3hrs| 2.5hrs | 2hrs |
| D3 | L | 10hrs? | 5hrs | 5hrs |
| Deployment via Firebase | L | 2.5hrs? | 1hrs | 1hrs |
| Total | / | 33.5hrs | 23.5hrs | / |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
    // here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
