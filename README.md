# react-komenci

**react-komenci** is a **reactJS** starter kit wrapping the minimum number of packages needed to build real world applications.

## Usage

#### CLI

Preferably you should use this starter kit through the [komenci cli tool]() to easly bootstrap a ReactRJ application with only the necessary features. To use the cli tool follow the installation/usage instructions at the [komenci cli tool project]() page.

#### Cloning

This project can be cloned/download as it is, and you can start including your code.


## Production Packages

React is not a full framework, and in order to build real world applications you will most certanly need some extra packages. While most of these extra packages will depend on the nature of your application, there are a few standard ones that most applications use. *react-komenci* bundles the minimal packages that will support you when building your application.

 - [React](https://github.com/facebook/react) - main reactJS library
 - [ReactDom](https://github.com/facebook/react) - entry point of the DOM-related rendering path (required by reactJS)
 - [React-Router](https://github.com/reactjs/react-router)


## Features

Development Support Features:
- [x] [auto transpilation](https://babeljs.io/) - Modern JS working on most modern browsers
- [x] [auto compilation]() - Prepare your code for development and production automatically
- [x] [hot reloading]() - See the changes at your browser as you edit your source files
- [x] [sync browsers]() - Sync multiple browsers for visual test of your application look and behaviour
- [x] [unit tests]() - Automatically run unit tests every time you save a file
- [x] [code linting]() - Make sure your code is following a defined standard

Production Features:
- [x] Internationalization (l18n)
- [x] Localization (l10n)
- [x] Authentication (auth)


## Folder Structure

```
|
|- src                // folder containing the source code of your application
|  |- assets          // folder containing your app assets
|  |  |- fonts        // font assets folder
|  |  |- images       // image assets folder
|  |  |- styles       // (scss) style assets folder
|  |  |- index.ejs    // html template file, to be used when generating the final html file
|  |
|  |- components      // presentational components | they basically only present what they receive as properties
|  |- containers      // 'smart' components | they retrieve data and use it to instantiate presentational components
|  |- lib             //
|  |- state
|  |  |- actions
|  |  |- constants
|  |  |- reducers
|  |  |- sagas
|  |  |- store
|
|- tools      // folder containing the scripts to help you manage your application tasks
