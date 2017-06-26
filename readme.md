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
$ git commit -m "Initial commit"
```

Start developing!

## Build zip file

Use [this utility](https://www.npmjs.com/package/powerschool-plugin-builder) to build this plugin as a zip file that PS will accept.

```
$ npm i -g powerschool-plugin-builder
// Run in this repo's root
// Outputs the zip file to the downloads folder
$ pspb -o ~/Downloads
```
