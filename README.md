# Tenon.io Selenium example

This repo shows some simple examples of how to perform Tenon assertions as part of a set of functional tests driven by [Webdriver.io](http://webdriver.io/).

## Quick Start

1. Make sure you have [NodeJS](https://nodejs.org) installed (currently, version 0.10.33), and you can use the `npm` command:

    ```shell
    $ npm version
    ```

1. Install [Grunt](http://gruntjs.com) globally:

    ```shell
    $ npm install -g grunt-cli
    ```

1. Install dependencies from the project root directory:

    ```shell
    $ npm install
    ```

1. Export your Tenon API Key as an environment variable:

    ```shell
    $ export TENON_API_KEY=1234567890ABCDEFG
    ```

1. Run the tests using Google Chrome:

    ```shell
    $ grunt webdriver
    ```

## Important bits...

Webdriver.io makes it easy to add your own commands which are included in `test/helpers/tenonCommands.js`. In this case, we are using the `tenon-node` module to send either a URL or HTML to tenon for validation and then performing an assertion on the results from Tenon.
