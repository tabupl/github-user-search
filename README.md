# Description

This is an app, that has a purpose of imitating github user search with providing some additional user info in a table with pagination.

# Note from me

A very important note in task description for me was to "be proud of what you create". And therefore I decided to use React (which I haven't used in 2 years and started reminding just recently) instead of VueJs (which I was working with for the last 2 years). And actually this makes me proud. All the code I created is 100% mine, I used stackOverflow during development, but nothing here is copied from there. The only "copied" stuff in the project is in eslintrc and prettierrc. The setup was created from scratch with `yarn create react-app <app-name> --template typescript` and any packages or techs are added from here by me.
I don't want to list what I would add or change if I had more time, because this could just sound like: "I would make an amazing feature and test it, but management won't let me" :P. If you find it valueable though, I can definitely talk about it on techtalk.
I also decided to write my own debounce/caching functions instead of using some ready ones because it was a great fun for me and added to "being proud of" thingy.
One additional note is, that I used a "safe" github token, that only has access to public stuff, but I imitated the behaviour of an env variable. In normal scenario, I'd just work with a real env variable, not added to the repo.
