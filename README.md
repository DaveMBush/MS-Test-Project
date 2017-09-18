# MSTestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

`npm install` to retrieve dependencies

`npm start` to compile and run the local server

point browser to http://localhost:4200

Tested on Chrome and Edge

# Notes:

The "database" is mocked out inside the account-summary.service.ts file.  It returns an observable just like 
an Http or HttpClient call would.

The screen was created to work on a wide or narrow phone and has a max-width of 414px.  The two columns shrink as the window gets smaller.

If there would be more than 6 records, the data would need to scroll.  This has been allowed for in the CSS you can shrink the height of the
window to see this.
