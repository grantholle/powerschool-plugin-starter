# PowerSchool Plugin Starter

This contains the file structure for creating a PowerSchool plugin.

## Set up

You will use this starter to create your own plugin. If you plan on creating database extensions, you will need to clone the starter twice because [a very old bug](https://support.powerschool.com/thread/17356).

Priorities, I guess.

### Clone this repo

```
$ git clone https://github.com/grantholle/powerschool-plugin-starter.git my-plugin

$ npx degit grantholle/powerschool-plugin-starter#main my-plugin
```

### Clean up to make your own

You'll need to remove the existing git history by removing the `.git` directory. If you're using source control, start tracking.

```
$ cd my-plugin
$ rm -rf .git

# Optional
$ git init
$ git add .
$ git commit -m "Initial commit from cloning starter"
```

You will need to rename the files in the following directories:

- MessageKeys
- permissions_root
- queries_root
- user_schema_root

### Install npm dependencies

```
$ npm i
```

### Gulp configuration

There's a gulp file that contains some helpful tasks. One is compiling scss (update output path in `gulpfile.js`) and the other is to automatically copy the a file that you save to your clipboard. This allows to easily copy and paste files into PS while developing, instead of uploading a new version of the plugin each time... It sucks!

### That's it!

Start developing. There is a [guide available](https://support.powerschool.com/article/66558) to walk you through _some_ parts of a plugin. It's mostly how to use the api, but also hints on a couple plugin components.

## Build zip file

The below command will increment the plugin path version and build the plugin zip file into the `~/Downloads` directory. If you need to change the output directory, modify the `build` script entry in `package.json`.

```
$ npm run build
```
