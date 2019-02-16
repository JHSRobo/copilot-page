# Copilot Page

Release    
[![Build Status](https://travis-ci.com/JHSRobo/copilot-page.svg?branch=release)](https://travis-ci.com/JHSRobo/copilot-page)
[![CodeFactor](https://www.codefactor.io/repository/github/jhsrobo/copilot-page/badge)](https://www.codefactor.io/repository/github/jhsrobo/copilot-page)

Master     
[![Build Status](https://travis-ci.com/JHSRobo/copilot-page.svg?branch=master)](https://travis-ci.com/JHSRobo/copilot-page)
[![CodeFactor](https://www.codefactor.io/repository/github/jhsrobo/copilot-page/badge)](https://www.codefactor.io/repository/github/jhsrobo/copilot-page)

Development     
[![Build Status](https://travis-ci.com/JHSRobo/copilot-page.svg?branch=development)](https://travis-ci.com/JHSRobo/copilot-page)
[![CodeFactor](https://www.codefactor.io/repository/github/jhsrobo/copilot-page/badge)](https://www.codefactor.io/repository/github/jhsrobo/copilot-page)

## Overview Description

This package includes the copilot webpage. The webpage is an angular page, more information about the page itself is in readme in the `src` file.

## Goal and User Experience

Allow for an easy to use interface for controlling ROV Settings, functions, and viewing important telemetry information such as depth, temperature, pressure, etc.

## Build Instructions

* `catkin_make`
* `source devel.setup.bash`
* `cd src`
* `npm i` Install Dependencies
* `npm i -g @angular/cli` Install angular command line interface
* `ng s` (Start Development Server for Webpage)

## Nodes

### NA

Publishers:

* `/rov/camera_select`: Publishes the current selected camera
  * Publishes float64
* `/rov/sensitivity`: Publishes ROV sensitity on the x, y, and z axis
  * Publishes `rov_control_interface/rov_sensitivity` message type
* `/rov/inversion`: Publishes whether or not inversion is enabled depending on the user input (0-3)
  * Publishes `UInt8` message type
* `/rov/thrusters_enabled`: Publishes a boolean whether or not thrusters are enabled
  * Publishes `std_msgs/Bool` message type

Subscribers:



## Launch Information

Not applicable since it's an angular webpage.

## Troubleshooting

## Contributors

* Current maintaner: Caelin Sutch

* Contributors:
  * Caelin Sutch - Development Lead
  * Alden Parker - Front End Developer

## Helpful Resources

* http://wiki.ros.org/roslibjs
* https://angular.io
