# PowerSchool Plugin Boilerplate

Contains a skeleton to use to begin a PS plugin.

## Set up

### Clone this repo

```
$ git clone ssh://git@git.ldi.global:7999/ps/plugin-boilerplate.git new-plugin-name
```

### Clean up to make your own

```
$ cd new-plugin-name
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Initial commit from cloning boilerplate"
```

### Install npm dependencies

```
$ npm i
```

### Gulp configuration

There's a gulp file that contains some helpful tasks. One is compiling scss (update output path in `gulpfile.js`) and the other is to automatically copy the a file that you save to your clipboard. This allows to easily copy and paste files into PS while developing, instead of uploading a new version of the plugin each time... It sucks!

### That's it!

Start developing. There is a [guide available](https://support.powerschool.com/article/66558) to walk you through _some_ parts of a plugin. It's mostly how to use the api, but also hints on a couple plugin components.

## Build zip file

The below command will increment the plugin path version and build the plugin zip file into the `~/Downloads` directory.

```
$ npm run build
```

If the plugin has a companion database definition plugin, add the entry to `package.json`:

```json
"scripts": {
  "build": "./node_modules/.bin/pspb -o ~/Downloads -i",
  "build-d": "./node_modules/.bin/pspb -i /path/to/definition -o ~/Downloads -i"
},
```
