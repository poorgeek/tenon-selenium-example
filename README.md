# Tenon.io Selenium example

This repo shows some simple examples of how to perform Tenon assertions as part of a set of functional tests driven by [Webdriver.io](http://webdriver.io/).

## Quick Start

Export your Tenon API Key as an env variable.

```shell
$ export TENON_API_KEY=1234567890ABCDEFG
```

Run the tests using Google Chrome via

```shell
$ grunt webdriver
```

## Important bits...

Webdriver.io makes it easy to add your own commands which are included in `test/helpers/tenonCommands.js`. In this case, we are using the `tenon-node` module to send either a URL or HTML to tenon for validation and then performing an assertion on the results from Tenon.
