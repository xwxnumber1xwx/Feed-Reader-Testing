/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* It tests that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('check URLS', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* It tests that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('check Name', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    describe('The menu', function () {

        // It ensures the menu element is hidden by default.
        it('Side-menu is hidden when start', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         // It ensures the menu changes visibility when the menu icon is clicked
         it ('Side-menu must visible or hidden when clicked', function () {
            //on the first click the side-menu must be visible
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //on the second click the side-menu must be hidden
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* It ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it("tracks that the LoadFeed Function was called", function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function () {
        let oldContent,
            newContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = document.querySelector('.feed');
                done();
            });
        });

        /* It ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('contents changed', function (done) {
            // get new feed's value (index 1) and test it
            loadFeed(1, function() {
                newContent = document.querySelector('.feed');
                done();
            });
            expect(oldContent).not.toEqual(newContent);
        });
    });
}());
