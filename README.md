<a href="https://ultimateangular.com" target="_blank"><img src="https://toddmotto.com/img/ua.png"></a>

# Angular Fundamentals Source Code

> This is source code for the [Angular Fundamentals](https://ultimateangular.com/courses/#angular) course by [Todd Motto](https://twitter.com/toddmotto).

### Source code

This source code serves as a reference guide to the [Angular Fundamentals](https://ultimateangular.com/courses/#angular) course, for running the seed project you'll want to head over [here](https://github.com/UltimateAngular/angular-fundamentals-seed).

## Notes
project33
when you want to preselect the one of the options you use [selected] and assign expression which compiles to boolean;
project34
when we do validation with templ driven form, we can take advantage of template variable, which holds for state of the form;
We need to assign each input ngModel to template reference #id=[ngModel];
That id will have different properties;
we just need to use required attribute on the input that we want to be required;
That template variable that holds reference to the form, have different properties like, valid, invalid...
project35
To disable the form submit button when form is invalid, just ues [disabled]="form.invalid" attribute;
project36
To submit template driven form we need to put (ngSubmit)="handleSubmit(form)" event on the form itself and pass template variable to it, which holds state of the form; 
Since form component is stateless component, we should not communicate with api directly, we should emit that submit event to the container (passenger-viewer) component that deals with the state;
Every time when we update the object, we should try to use Object.assign() to create new object;
project37
To use Angular Routing we need to import RouterModule;
To tell angular to use route, we need to use RouterModule static methods, called 'forRoot' and pass the routed array of objects that we created;
Routes array will have different objects, objects will have different properties like 'path', 'component', 'path-match and etc;
We need to use <router-outlet></router-outlet> directive to tell the angular that when that route matches we need our component to be rendered on that place;
We can use wild-card route, which is gonna be rendered if router could not find the provided path, we use {path: '**'} format to make it wild-card;
To use links to navigate between the routes we use routerLink="/someLink";
When we use attribute without a property binding, assigned value would be string, but if we use property binding assigned value would be rendered as an expression;
We can also use [routerLinkActiveOptions] attribute to make this link to match exactly to the url with { exact: true };
We can take advantage of routerLinkActive="active", so when we are on this link it will give 'active' class to it;
We can also dynamically create our links in the component and populate it using *ngFor directive;
So in the component we create nav array which holds objects that we want to iterate through, object will have link, name, exact properties;
When we want to add other feature modules to the navigation, we need to import RouteModules to that module and use forChild method of the module and pass our routes which we create forn this module;
There are top level and child level routes;
On the child routes, we put :id as a path, and we dynamically render passanger according to the id;
Then on the container component, we inject Router and Route services;
Route has params property, which is observable, which emits each time url changes, then we subscribe to it to get the route params id to pass to the function;
So when there are two observable that waits one another to be resolved, we can use switchMap that will subscribe to first observable and returns new observable that is result of passed observable; 
These was a great example of a switchMap, take a note;
We can use router.navigate method to navigate whatever route we want;
Since we are in the passenger-detail component, we need to emit out clicked passenger to the passenger-dashboard and there we can call router.navigate function to go the passenger page that we want to view;












