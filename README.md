# gitsu <img alt="Ninja Emoji" align="right" width=40 height=40 alt="Screenshot" src="./.github/ninja.svg">

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

Open switcher to select a user from your `~/.gitsurc` config
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

Running a production build
```sh
npm start
```

Running in development mode
```sh
npm run dev
```

Linking the package to your global npm modules
```sh
npm link
```

Unlinking the package from your global npm modules
```sh
npm unlink gitsu-cli -g
```

## Built With

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
