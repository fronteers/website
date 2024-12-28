---
title: Angular NgRx
date: 2025-01-05
author: Sven Hoffmann
summary: Using NgRx as a state management solution in Angular provides structure and testability through unidirectional data flow, but can also introduce extra boilerplate code and complexity for side-effects. Is it the right solution for your Angular app?
---

## Introduction

Hello everyone, my name is Sven. I currently work as a software developer at MO4, where I'm involved in creating a web portal for the offshore industry.

The front-end of this web portal is written in Angular and has many moving parts. Information from different sources comes together in one comprehensive view.

One of the challenges we faced during development was that data arrived at different times. This resulted in complex Observable streams to combine data in the right way. And that made debugging much more difficult.

> 💡 **What are Observables?**
> Observables are a data type that represents a stream of values over time. Angular works largely with Observables.

This couldn't continue, so we began our search for a _state management_ solution. After comparing various options, we ultimately chose NgRx.

## Why State Management?

Let's take a step back. A state management solution can bring structure to your business logic and simplify working with data. But it can also introduce extra boilerplate code.

When should you choose a state management solution and when should you not?

**State management libraries are unnecessary...**

- For small applications where it's acceptable to maintain state locally at the component level.
- When a large part of the front-end complexity can be solved through endpoints or back-end solutions. In that case, more emphasis should be placed on organizing your back-end.

**State management libraries are useful...**

- For larger applications, especially when access to the same data is needed across multiple pages.
- When the data is complex and there's a need for clear data flow in the front-end.

## Angular Redux: NgRx

NgRx is an Angular implementation of the Redux library, with some modifications to make it work better with Angular as the view layer.

The distinctive feature of NgRx (and similar implementations) is the unidirectional data flow.

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-diagram-en.svg" "A schematic representation of the NgRx data flow. The diagram shows four main components connected with arrows: 'Store', 'View', 'Reducers' and their relationships. The Store sends 'selectors' to the View, the View sends an 'action' to the Reducers, and the Reducers send a 'new state' back to the Store, completing the cycle. The diagram is rendered in light purple rectangles with black text and arrows." "A schematic representation of the NgRx data flow" %}

- **Store:** Contains the current state of the application.
- **Selectors:** Parts of the state can be combined and/or displayed as Observable streams.
- **View:** Angular components can use the selectors to display the state or use it in other ways.
- **Action:** A 'message' that is sent from the view, for example when clicking a button. These messages represent events that happen in the application.
- **Reducers:** Through pure functions, the next state is created using the current state and an action.

> 💡 **What are pure functions?**
> A pure function must always give the same result when you call it another time with the same input. There should be no side-effects.

But how do you fetch data from an API or implement other side-effects if reducers must always be pure functions?

## Effects

NgRx provides _effects_ for handling side-effects.

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-diagram-effects-en.svg" "A schematic representation of the NgRx data flow. The diagram shows four main components connected with arrows: 'Store', 'View', 'Effect' and 'Reducers'. The Store sends 'selectors' to the View, which can then send actions to both Effect and Reducers. The Effect component also sends actions to the Reducers, and the Reducers send a new state back to the Store, completing the cycle. The diagram is rendered in light purple rectangles with black text and arrows." "A schematic representation of the NgRx data flow with effects" %}

Effects are Observable streams that listen to all actions being dispatched. You can listen for a specific action, perform side-effects, and then dispatch a new action based on the result.

For an API call, it might look like this:

{% figure "/_img/blog/2025/01/angular-ngrx/ngrx-effect-sequence-en.svg" "A diagram showing the interaction between View, Effect, and Reducer components for fetching cat facts. The View sends a 'Dashboard Get Cat Fact' action to the Effect component, which can then follow two possible paths: a successful path 'Cat API Get Cat Fact Success' or a failed path 'Cat API Get Cat Fact Failure' to the Reducer. The diagram is rendered in light purple rectangles with black text and arrows." "Interaction between View, Effects, and Reducers" %}

## One-way Traffic

The data in NgRx flows in one direction, which offers major advantages but also causes some disadvantages.

**Advantages:**

- The state can only be changed through actions, making it easy to trace why something changed.
- NgRx works with the Redux debugger extension for web browsers, allowing you to see the current state and rewind all executed actions. This makes debugging much easier.
- Reducers and selectors must be pure functions, which simplifies testing.

**Disadvantages:**

- The state cannot be changed arbitrarily. The code that defines actions and reducers can feel like a lot of boilerplate to achieve something simple.
- For side-effects, you need to write Effect streams, which can feel complex for something like a simple API call.

## Conclusion

The NgRx state management library has a unique architecture that forces you to think about your application's data flow. The biggest advantage is the testability and transparency it provides. The biggest disadvantage is that many files and components are needed to add state to your application.

Want to try NgRx yourself? [You can find the official documentation here.](https://ngrx.io/)

Do you have questions or comments? I always enjoy talking about tech. [Find me through my website.](https://svenh.dev/)

Thanks for reading!
