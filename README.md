# EmailVerifierDFA

In this project, the problem of validating whether a string is a valid email address was addressed. The objective was to develop a web application that allows the user to input an email address and receive a response indicating whether the entered address is valid or not.

To solve this problem, a deterministic finite automaton (DFA) was used. Finite automata are powerful tools for validating input strings against specific patterns, and in this case, it was used to evaluate whether a given string satisfies the rules of a valid email address. HTML, CSS, and JavaScript were used for the development of the web application. HTML provides the basic structure of the web page, while CSS was used to add style and design. JavaScript was used to add interactivity and dynamism to the page, allowing the user to interact with the application and perform tasks in response to user actions.

![image](https://user-images.githubusercontent.com/62727899/233811326-b140be27-dbe8-4176-8e4d-b4adcf71da47.png)
 
This is the main screen of the project and it consists of two main parts: the DFA visualization (1) and the string input section (2).

In the visualization section, the DFA that will be responsible for validating the entered strings can be observed. This automata is defined as follows:

![image](https://user-images.githubusercontent.com/62727899/233811362-cd6b7e2c-b1bd-42f7-afad-d3c68bf6b5c7.png)

Where:
* ∑ - Is the alphabet composed of lowercase letters, digits from 0 to 9, and a pair of accepted special characters.
* q1 - Is the initial state.
* q6 - Is the final state.
* T - Is the set of transitions.
* S - Is the set of states.

As an AFD, this automaton corresponds to a type 3 grammar, so it can generate a regular language.

The string input section consists of three components, a field to enter the string (2), a button to validate the string without extra procedures (3), and a button where the user can visualize how the string is read by the automata step by step (4).

## Demo

![dfasuccess](https://user-images.githubusercontent.com/62727899/234030611-a30e99b3-4312-407a-a927-5134ea5f1179.gif)

### Step by step validation

![dfastepbystep](https://user-images.githubusercontent.com/62727899/234030974-f3118fe0-0c8f-4b40-a5ad-ec25d990bd2c.gif)

### Invalid email

![dfainvalid](https://user-images.githubusercontent.com/62727899/234031005-08aa3905-749e-4086-9f82-fc9b82468ce1.gif)

