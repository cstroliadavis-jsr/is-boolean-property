# @cstroliadavis/is-boolean-property

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![version](https://img.shields.io/badge/version-1.0.0-blue)

## Description

A simple function to determine if a property of an object is a boolean

### Motivation

I've decided that too frequently, I find myself writing various functions to do
fairly simple things.

Once the Deno ecosystem matured to this point, I felt that this was a better way
to handle creating single-purpose utility functions that can more easily be
included just by themselves.

It is my intention that each of these functions will be as simple as possible
and will rarely rely on other imported functions except for things like testing,
or when the imported functions are not more than a single level deep.

Essentially, I want to keep these simple and easy to follow. I want it to be
clear what each function is doing and easy to include in your own code with
minimal fuss.

## Installation

### Deno

```shell
deno add jsr:jsr/is-boolean-property
```

or simply import it directly:

```ts
import isBooleanProperty from "jsr:@cstroliadavis/is-boolean-property@1";
```

### Node.js

```shell
npx jsr add jsr/is-boolean-property
```

## Usage

### JavaScript or TypeScript

```ts
import isBooleanProperty from "@cstroliadavis/is-boolean-property";

const someObj = {
  someProp: true,
  someOtherProp: false,
  someOtherProp2: "THIS IS NOT A BOOLEAN",
};

const isSomePropBoolean = isBooleanProperty(someObj, "someProp"); // true
const isSomeOtherPropBoolean = isBooleanProperty(someObj, "someOtherProp"); // true
const isSomeOtherProp2Boolean = isBooleanProperty(someObj, "someOtherProp2"); // false
```

## License

See [MIT](./LICENSE)

Generally speaking, feel free to use and modify this, and please provide
attribution.

## Contributing

If you find a bug, or have a feature request, please open an issue.

https://github.com/cstroliadavis/jsr/issues
