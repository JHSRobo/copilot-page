# Services Folder

A quick guide to how these services are organized and written

## How these services are broke up

THe publishers folder contains services that publish AND subscribe to ROS topics, such as thruster status, camera select, and sensitivity

The subscribers folder contains services that JUST subscribe, such as sensors.

The data-models folder contains classes for all the different ROS message types that are being used (with the exception of UInt8, bool, etc, where the data is just stored inside .data, and in that case, we use the general model)

## How these services are written

All services use a RXJS observable method