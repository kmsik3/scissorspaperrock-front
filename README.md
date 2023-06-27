# Scissors Paper Rock Game (Front-End)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Functions (Player)
* Signup
* Login
* Logout

## Functions (Game)
* Play
* Calculate win rate (total game count, total win count, total loss count, total draw count)
* Set winning percentage (only for admin account)

## How to use Admin advantage in Admin Dashboard menu

This advantage is able to set winning percentage of user.
On Admin Dashboard page, there are text box that you can type the percentage (0 ~ 100 only Integer) and check box that decide you want to use this percentage.
So, firstly type the percentage and tick the check box and click Apply button, then you can see what percentage you apply for and whether you are using the advantage or not below the button.
After you do this, please go to Game Play menu and play it, then the percentage will be applied.
If you don't want to use the advantage anymore after you apply it, you can simply come back to Admin Dashboard menu and click apply button without ticking the check box. Then you can see that you are not using it below the button.
