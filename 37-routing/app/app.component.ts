import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
/*
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
*/
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
