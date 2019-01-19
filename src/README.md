# Copilot Page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## How This Project is Setup

Inside of the app folder:

(ReadMe.md) = More information inside that directory
INCOMPLETE = Not Finished

```

├── copilot                                     # Copilot Submodule
│   ├── copilot-components                      # Components for the copilot page
│   │   ├── depth-chart                         # Displays depth reading
│   │   ├── main-camera                         # Displays main camera buttons
│   │   ├── secondary-camera                    # Secondary camera buttons and display
│   │   ├── systems                             # Buttons with ROV systems (i.e. depth hold)
│   │   ├── telemetrydata                       # Overview of ROV Tube temp, status, etc.
│   │   ├── thruster-sensativity                # Thruster sensativity sliders
│   │   ├── thrusters                           # Thruster Values INCOMPLETE
│   │   ├── timer                               # Stopwatch (ReadMe.md)
│   │   ├── tools                               # List of tools and status/buttons INCOMPLETE
│   │   ├── velocity-graph                      # ROV Veloctiy INCOMPLETE
├── drq                                         # DRQ Submodule
│   ├── drq-components                          # Components for the DRQ page, broken into 2 DRQs (Thanks Alden)
│   │   ├── drq1                                # First DRQ Components
│   │   │   ├── drq1data                        # Data settings (temp, power, etc.)
│   │   │   ├── settingsdrq1                    # DRQ Settings holder
│   │   │   ├── statusdrq1                      # DRQ Status indicator
│   │   ├── drq2                                # First DRQ Components
│   │   │   ├── drq2data                        # Data settings (temp, power, etc.)
│   │   │   ├── settingsdrq2                    # DRQ Settings holder
│   │   │   ├── statusdrq2                      # DRQ Status indicator
│   │   ├── drqsettings                         # DRQ Settings card
├── routing                                     # Routing module (defines routes)
├── sensor-telemetry                            # Sensor-Telemetry Submodule        
│   ├── sensor-telemetry-components             # Components for ROV CORE Diagram Module Page
│   │   ├── tcudata                             # TCU Icon with Data
│   │   ├── tubedata                            # Tube Icon with Data
├── services                                    # Services that are connection with ROS (ReadMe.md) INCOMPLETE
│   ├── data-models                             # Data models for each service INCOMPLETE
├── shared                                      # Components that are used throughout multiple submodules
│   ├── card-header                             # Cardheader with dropdown menu INCOMPLETE
│   ├── nav                                     # Navigation side menu

```

Make sure you `npm i ` before doing anything in this repo.

# Generic Angular Info

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Note that unit tests are not all setup

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Note that end to end tests are not completely setup

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
