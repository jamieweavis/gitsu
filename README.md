# gitsu

> 🥷 Command line util for quickly & easily switching git users

[![build](https://github.com/jamieweavis/gitsu/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/jamieweavis/gitsu/actions)
[![downloads](https://img.shields.io/npm/dt/gitsu-cli.svg)](https://npmjs.com/package/gitsu-cli)
[![version](https://img.shields.io/github/release/jamieweavis/gitsu.svg)](https://github.com/jamieweavis/gitsu/releases)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jamieweavis/gitsu/blob/main/LICENSE)

## Install

```sh
npm install gitsu-cli -g
```

## Usage

Open the `gitsu` switcher to select a user from your `~/.gitsurc` config
```sh
gitsu
```

List users stored in your `~/.gitsurc` config
```sh
gitsu --list (or -l)
```

Open your `~/.gitsurc` config for editing in your default editor
```sh
gitsu --edit (or -e)
```

## Building

Compiling a production build
```sh
npm run build
```

Running in development mode
```sh
npm run dev
```

Running a production build
```sh
npm start
```

## Linking

Link the local package to your global npm modules
```sh
npm link
```

Unlink the local package from your global npm modules
```sh
npm unlink gitsu-cli -g
```

## Built With

- [Node.js](https://github.com/nodejs/node)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Commander.js](https://github.com/tj/commander.js)
