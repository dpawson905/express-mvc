# Express-MVC

![linux](https://img.shields.io/github/workflow/status/dpawson905/express-mvc/linux?style=for-the-badge)
![windows](https://img.shields.io/github/workflow/status/dpawson905/express-mvc/windows?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dw/express-mvc-templates?style=for-the-badge)

This is a simple cli application that will copy generic MVC templates. You can select EJS, HBS or PUG.
You can also choose css or sass stylesheets as well.

## Instructions

1) Run `npm i -g express-mvc` to install the cli app.
2) After it's installed run `express-mvc-templates` in the directory you want the files copied to.
3) Answer the two questions...
    - Currently the questions are...
        1) What template engine do you use?
            - ejs
            - pug
            - hbs
        2) Do you want css style sheets or sass stylesheets?
            - yes
            - no
        3) Do you want to install packages?
            - yes
            - no
4) That's it for now also...
    - Make sure to update "name" in `package.json` to your apps name.
    - Set up any scripts that you wish to use.
    - Run the app with `npm start` or with your own script.

### TODO

- Ask the user if they want to install a global package called npm-check-updates
  - handle user input from above question
  - this will be done before install packages
