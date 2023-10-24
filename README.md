<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de>
-->

# CSAF Webview

**WIP**:
A browser based web app to:

- Display the contents of a CSAF document.
- Browse the tree of CSAF documents offered by a CSAF Provider or Aggregator
  via the ROLIE feed.

Status: the display part is in beta, the browsing part not yet implemented.

![](docs/app.png)

A demo deployment will be done occasionally via github pages
and thus maybe behind the latest developments.

## Development

### Clone the repo

`git clone https://github.com/csaf-poc/csaf_webview.git`

### `cd` into app directory

`cd csaf_webview`

### Install dependencies

Install current LTS version of NodeJS, e.g. see
https://github.com/nodesource/distributions/blob/master/README.md .
Upgrade to the latest version of npm if you can.
Development has been started with Node v20 and npm 10.2.1

```sh
npm install
npx playwright install
```

### Run development server
Optionally add `-- --open` to directly open a browser.

`npm run dev -- --open`

### Drag a valid csaf-file over the `dropzone`.

### Run unit tests

`npm run test:unit`

### Run integration tests

`npm run test:integration`

### Run unit tests coverage

`npm run coverage`

### Deploy new version of GH page

`npm run build:ghpage`
`npm run deploy`

## Configure a local proxysetup

In order to configure a proxy server use `vite.config.js`.
The default configuration is:

```javascript
...
server: {
    proxy: {
      "/proxy/": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, "")
      }
    }
  },
...
```
For more information look [here](https://vitejs.dev/config/server-options.html#server-proxy).

In order to access the configured URL in a development setup you prefix the URL like

Copy `.env` to `.env.development` and set `PUBLIC_PROXY_PATH=/proxy/`.
After that all requests are prefixed with the `PUBLIC_PROXY_PATH`.

## License

- csaf_webview is licensed as Free Software under MIT License.

- See the specific source files
  for details, the licenses itself can be found in the directory `LICENSES/`.

- The resulting webpage contains third party Free Software components under
  licenses that to our best knowledge are compatible at time of adding
  the dependency. See `package.json` for details.
