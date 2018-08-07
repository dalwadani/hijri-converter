# hijri-converter

This simple package exposes functions to convert between Hijri and Gregorian.
## Install

The best way to install and use hijri-converter is with npm or yarn.

#### npm 

```
$ npm install hijri-converter
```

#### yarn 

```
$ yarn add hijri-converter
```

## Usage
``` Node.js

import { toHijri, toGregorian } from "hijri-converter";

toHijri(1987,3,1) // convert 1st of March, 1987 to Hijri

toHijri(1407,7,1) // convert 1st of Rajab, 1407 to Gregorian

```