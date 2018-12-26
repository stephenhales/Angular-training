# ngRx Store Overview

Code for the steps below can be found in the Car Tool module folder.

### Step 0

Install @ngrx/store and @ngrx/effects packages.

### Step 1

Setup the AppState.ts to define the interface for your application's state structure.

### Step 2

Setup an "actions" folder and an action file for each group of actions.

Examples:

- car.actions.ts
- user.actions.ts
- hotels.actions.ts

### Step 3

Create a "reducers" folder and a reducer file for each part of the state tree. The reducer will use the state and actions to produce new states.

Examples:

- cars.reducer.ts
- editCarId.reducer.ts

### Step 4

Register the reducer functions with the StoreModule in the root module of the application. For this demo, car-tool.module.ts was used but generally the app.module.ts would be used.

### Step 5

Inject the store into the container component (ex: car-tool.component.ts). To access the state, setup observables:

```typescript
public cars$: Observable<Car[]>
public editCarId$: Observable<number> 
```

When using these properties in the template combine them with the **async** pipe.

### Step 6

Update the event handlers to use the store's dispatch function to dispatch actions.

### Step 7

To support asynchronous operations, expand the actions list to support request and done actions for each asynchronous actions. Define effects files and register them with the ngRx effect module in app.module.ts.

