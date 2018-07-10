# Vocal Remover for Karaoke

### About

This project is under by [Music and Audio Research Group, Seoul National University](http://marg.snu.ac.kr/).


### Usage

Install dependencies:

```
$ yarn
```

Run development server:

```
$ yarn client
```

Run backend server:

```
$ yarn server
```

Run development and backend server together:

```
$ yarn dev
```

To start a MongoDB server:

```
$ mongod
```

### Building

```
$ yarn build
```

Will create a `dist` directory containing your compiled code.

Depending on your needs, you might want to do more optimization to the production build.

## Webpack Bundle Analyzer

Run in development:

```
$ yarn dev:bundleanalyzer
```

Run on the production oprimized build:

```
$ yarn build:bundleanalyzer
```
