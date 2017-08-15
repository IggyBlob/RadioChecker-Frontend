<img src="http://radiochecker.paulhaunschmied.com/assets/img/jack.png" alt="RadioChecker Logo" width="200"/>

# RadioChecker.com Frontend
The frontend is the web application the user experiences when accessing RadioChecker.com via a browser. It sends queries to and visualizes data from the [API Service](https://github.com/IggyBlob/RadioChecker-API) using HTTP. 

## Language
AngularJS / HTML

## Service Configuration
When the frontend is loaded into the browser, the *startController.js* (responsible for displaying the index page of the frontend) requests a list of available radio stations from the [API Service](https://github.com/IggyBlob/RadioChecker-API) by calling `http://<API Service Host>/api/config/stations` (see https://github.com/IggyBlob/RadioChecker-API#endpoints-api-design for details).
This list is then displayed and allows the user to select the radio station they want to see data for.

The frontend does not use any other form of configuration except the one described above.

## Views
The following frontend views/routes are available to the user:

+ `/radio/<rc-api-svc.config.stations.station.uri>`
shows the data for the radio station specified. The name/URI of the radio station matches the one in the configuration of the API service. 
The frontend is not able to detect whether the provided name/URI of the radio station is valid or not; it waits for the response code of the request to the API service. If `200 OK` is returned by the API service, the radio station exists and the data can be visualized by the frontend, if a `400 Bad Request` is returned the station does not exist and the frontend redirects back to the start page. 
2. `/about/wtf`
description of the RadioChecker.com project
3. `/about/impressum`
legal information and imprint
4. `/about/datenschutz`
privacy policy statement

## Deployment
World4You.com/Apache
