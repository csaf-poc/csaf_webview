<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->

# CSAF Webview

**WIP**:
A browser based web app to:

- Display the contents of a CSAF document.
- Browse the tree of CSAF documents offered by a CSAF Provider or Aggregator
  via the ROLIE feed.

Status: pre-alpha
(early functionality to display parts of a CSAF document)

![](docs/app.png)

A demo deployment will be done occasionally via github pages
and thus maybe behind the latest developments.

## Development

### Clone the repo

`git clone https://github.com/csaf-poc/csaf_webview.git`

### `cd` into app directory

`cd csaf_webview`

### Install dependencies

`npm install`
`npx playwright install`

### Run development server and `--open` a browser.

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

## License

- csaf_webview is licensed as Free Software under MIT License.

- See the specific source files
  for details, the licenses itself can be found in the directory `LICENSES/`.

- The resulting webpage contains third party Free Software components under
  licenses that to our best knowledge are compatible at time of adding
  the dependency. See `package.json` for details.
