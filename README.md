<!--
 This file is Free Software under the MIT License
 without warranty, see README.md and LICENSES/MIT.txt for details.

 SPDX-License-Identifier: MIT

 SPDX-FileCopyrightText: 2023 German Federal Office for Information Security (BSI) <https://www.bsi.bund.de>
 Software-Engineering: 2023 Intevation GmbH <https://intevation.de
-->
# Webview+

The CSAF-Webview is a complementary service for the CSAF-suite. Its purpose is to display the abstract information of CSAF-Dokuments in a human friendly way.

There are two ways to visualize the documents: For one you could drag and drop any single CSAF-Document in the dropzone and view its contens. Or you could browse ROLIE-feeds.

![](docs/app.png)

## Development

### Clone the repo

```git clone https://github.com/csaf-poc/csaf_webview.git```

### `cd` into app directory

```cd csaf_webview```

### Install dependencies

```npm install```
```npx playwright install```

### Run development server and `--open` a browser.

```npm run dev -- --open```

### Drag a valid csaf-file over the `dropzone`.

### Run unit tests

```npm run test:unit```

### Run integration tests

```npm run test:integration```

### Run unit tests coverage

```npm run coverage```

### Deploy new version of GH page

```npm run build:ghpage```
```npm run deploy```
