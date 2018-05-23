# Feed Reader Testing
This is a simple feed reader written from another developer. I implemented the Javascript's tests with the framework [Jasmine](http://jasmine.github.io/) version 2.1.

## steps to run
Open the file index.html and you will find all the tests on the bottom of the page.
It could take a while, depends of your internet connection.

You can clone the code here: https://github.com/xwxnumber1xwx/Udacity_Project_5.git

## what is tested

Jasmine check on the `RSS Feeds` section:
* if the array `allFeeds` contains at least one feed.
* if the name and the URL were defined.

Jasmine test on the `The menu` section:
* if the `Side-menu` is hidden by default.
* if the `Side-menu` does display when clicked and does it hide when clicked again.

Jasmine ensure on the `Initial Entries` section:
* if the Feeds function `LoadFeed` is called.
* if the function `LoadFeed` have at least one element.

Jasmine ensure on the `New Feed Selection` section:
* if the content of the function `LoadFeed` is loaded.
* if the content of the function `LoadFeed` is changed.