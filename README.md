# README

This repo is  mianly for internal purposes. Typically the dist, variable sheet with links etc are supposed to be hidden, but since this repo is used for backup it's fine.
If this ever where to go open source or public, dist, .env, variable sheets, and non-example nightwatch test files would need to be removed.

Make sure if you're forking the repo to make sure you have the most up to date version.


## 1\. Clone your fork:

```
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```


## 2\. Add remote from original repository in your forked repository:

```
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```

## 3\. Updating your fork from original repo to keep up with their changes:

```
git pull upstream master
```

## 4\. Developing

Setup your npm env: `npm install`
Grunt will handle all the things you need for developing. Run grunt by using: `grunt -v`



## _Nightwatch Tests_

WIP

## _Pug Structure_

Start developing by creating your file structure in the `/pug` directory. After setting that up, put the files you're actively developing in the gruntfile under the pug section, that way when a change is saved, grunt will know what to render into html.
Same goes for CSS and JS, just create the file structure in the proper directory, setup in Grunt, then develop and it'll render what you need.


## _WIP_

- Replacing NPM with Yarn for smaller directory size and for less dependancies.
- Setup proper SASS and CSS folders and files.
- Possibly include Image folder with automated image compression or link to project in README file.
