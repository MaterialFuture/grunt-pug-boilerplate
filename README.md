# Pug Grunt Boilerplate
This is, as the name suggests, a Boilerplate template for the Pug/Jade html templating, and the grunt task runner for automating tasks and such. This is what I use personally for getting up and running faster when there's an existing backend to host and serve content (FTP).

I chose grunt over other task runners not just because I was more familiar with it at the time.. I chose pug (within grunt) because you can create templates and mixins to make building pages faster. I'll go over how I develop pages within grunt from the ground up so that it's easier to jump in and get started.

This was built for a specific use case where I had the html codebase on a server and had to manually push the code to it, or breakup code to do so. This is also optimized for marketing and analytics with the variable sheets as they're formatted to the proper GA Tagging format for data. While this isn't really that useful outside of the environment it was built for, someone could still find a use for it.

I will be updating this repo so that other people can use this and customize it to their liking for their own projects.

## Setting up
- Open the command-line terminal of your choosing.
- Download or clone the Git Repo `git clone <git ssh url>`.
- Go into directory `cd <repo name>`.
- Run `npm install` to install everything.
- After everything is done run the grunt task runner and start editing `atom . && grunt` or `subl . && grunt` if you're working with sublime.

#### Easy Mode
One line version if you don't care about what everything does `git clone git@github.com:MaterialFuture/grunt-pug-boilerplate.git && cd grunt-pug-boilerplate && npm install && grunt` Paste in console where you'd like the directory copied, and make sure you know what you're doing.

## Getting started with Grunt
By running the command `grunt` you start a local server through browserSync as well as a watch command so that Grunt can watch files for changes, run the appropriate task according to what's changed, and then serve it locally.

If you don't understand what's going on then check out the docs for this: <https://gruntjs.com/getting-started>

## Getting started with Pug
Grunt will take care of the compiling work so you can just focusing on working on your project and grunt will watch for changes and output into the `/dist` directory.

## _Nightwatch Tests_
I'd recommend looking into Selenium and Nightwatch Automation here: https://nightwatchjs.org/

## _CSS_
WIP

## _JS_
WIP

## _Pug Structure_
Start developing by creating your file structure in the `/pug` directory. After setting that up, put the files you're actively developing in the gruntfile under the pug section, that way when a change is saved, grunt will know what to render into html.
Same goes for CSS and JS, just create the file structure in the proper directory, setup in Grunt, then develop and it'll render what you need.

## _WIP_
- Replacing NPM with Yarn for smaller directory size and for less dependancies.
- Reintroducing BrowserSync or possibly something better
- Setup proper JS, SASS, and CSS folders and files.
- Possibly include Image folder with automated image compression or link to project in README file. Or setup a separate repo for it.


##  _Collaborating_
### 1\. Clone your fork:
```
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```

### 2\. Add remote from original repository in your forked repository:
```
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```

### 3\. Updating your fork from original repo to keep up with their changes:
```
git pull upstream master
```

### 4\. Developing
Setup your npm env: `npm install`
Grunt will handle all the things you need for developing. Run grunt by using: `grunt -v`



### Notes

Added in extra dependancies. If you need to take them out, just remove from package.json. I wanted this to be a tool that can be modular and made for different types of projects. Note also that this is intended for static sites, how you serve it is up to you.
