### End to End Tests
We use Saucelabs to run end-to-end tests with Galen, by default. For now,
if you wish to run end-to-end tests you will need to change the `selenium_host` 
and `selenium_port` settings in `./config`.

If you have an access key and username combo for our SauceLabs account (
contributors should get these), then you should instead set the following
environment variables:

- `SAUCELABS_USERNAME` to your saucelabs username
- `SAUCELABS_ACCESS_KEY` to your saucelabs access key

If you are running the tests on a web server running on `localhost`, you'll need
to run them through [Sauce Connect](https://docs.saucelabs.com/reference/sauce-connect/),
which is just a simple piece of software that proxies all connects to SauceLabs.

There are known issues with `localhost` web servers, Sauce Connect and the browsers
Safari and IE.See [this article](https://support.saucelabs.com/customer/portal/articles/2005369-testing-with-a-localhost-server-and-some-browsers-can-t-load-my-website) 
for workarounds.

You will also need to set the following environment variables:

- `IP` for the host of the web server
- `PORT` for the port of the web server

This is primarily due to the support for the Cloud9 IDE which uses both of these
environment variables.
