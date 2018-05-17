# PowerSchool Plugin Boilerplate

Contains a skeleton to use to begin a PS plugin.

## Set up

Clone this repo

```
$ git clone ssh://git@git.ldi.global:7999/ps/plugin-boilerplate.git new-plugin-name
```

Clean up to make your own

```
$ cd new-plugin-name
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Initial commit from cloning boilerplate"
```

Install npm dependency

```
$ npm i
```

Start developing!

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
