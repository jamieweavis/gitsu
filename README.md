# gitsu <img alt="Ninja Emoji" align="right" width=40 height=40 alt="Screenshot" src="./.github/ninja.svg">

> 🥷 Util for quickly & easily switching git users from a config stored at ~/.gitsu

[![build](https://github.com/jamieweavis/streaker/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/jamieweavis/streaker/actions)
[![downloads](https://img.shields.io/github/downloads/jamieweavis/streaker/total.svg)](https://github.com/jamieweavis/streaker/releases)
[![version](https://img.shields.io/github/release/jamieweavis/streaker.svg)](https://github.com/jamieweavis/streaker/releases)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jamieweavis/streaker/blob/main/LICENSE)

## Install

```sh
npm install gitsu-cli -g
```

## Usage

Open switcher to select a user from your `~/.gitsu` config
```sh
gitsu
```

List users stored in your `~/.gitsu` config
```sh
gitsu --list (or -l)
```

Open your `~/.gitsu` config for editing in your default editor
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
npm uninstall gitsu -g
```

## Built With

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
