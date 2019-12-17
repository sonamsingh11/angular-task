# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Available routes:
home page (default route: `/`)
user profile page (route: `/profile`)

# Assignment details

## Instructions:

Fork this repo and complete the following task. *Please do not spend more than 2 hours on this project.* Please submit a pull request with your work once finished.

### Task
One of the goals of this task is to measure your understanding of ngrx and the redux pattern.
Use ngrx and create or modify appropriate actions, reducers, and selectors.

1. The user profile page is currently loaded with dummy data. Use the public API at [Random User Generator](https://randomuser.me/)
to pull in a random user and populate the profile page. You should get the relevant data from the API to fill a `ProfileStore`.

2. Create a new page, a profile list. Pull in 10 random profiles to populate this list, storing them in the state, and make each profile list item clickable, sending the user to a user details page with that user data. The user profile page route should be adjusted to take an optional id param, which if missing will show a random user (step 1)

The UI is up to you, although it is recommended to use Angular Material components.


# Candidate Matt Irwin Responses

Initial readthrough...

---

I did give myself a NGRX crash course yesterday but still had to do a lot of reading and theory is not practice...

For sure I don't fully understand ngrx yet but figured out hooking services through effects(?) at least in a rough way.  My rough plan:

    1. Before messing with NGRX - make a standard service to randomuser API and verify
    2. Figure out how to feed this service into the current ngrx store and profile
    3. Make the new profile list page
    4. update service/store for new page as needed
    5. send list page link to profile page

## Final thoughts

Got this to work, but have more to learn.  As I was coming to a close I was trying to figure out how to have the profile detail page load from the service if it hadn't been loaded from data in the list.  Some googling turned up this can be done through the service or the effects side (with opinions on both) but ran out of time.  Think I would have tried the service path as it seemed easier and more maintainable.
