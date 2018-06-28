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
        /*
        |--------------------------------------------------------------------------
        | First Test
        |--------------------------------------------------------------------------
        | it tests to make sure that the
        | 1)allFeeds variable has been defined and
        | 2)that it is not empty
        |
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
        |--------------------------------------------------------------------------
        | Second Test
        |--------------------------------------------------------------------------
        | 1)loops through each feed in the allFeeds object
        | 2)ensures it has a URL defined and
        | 3)that the URL is not empty
        |
        */

        it('urls are defined', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');

            });
        });

        /*
         |--------------------------------------------------------------------------
         | Third Test
         |--------------------------------------------------------------------------
         | 1)loops through each feed in the allFeeds object
         | 2)ensures it has a name defined and
         | 3)that the name is not empty
         |
         */
        it('names are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name']).not.toBe('');
            }
           });
         });






    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        // Declare the variables
        var $body = $('body');

        /*
       |--------------------------------------------------------------------------
       | Fourth Test
       |--------------------------------------------------------------------------
       | 1)ensures the menu element is hidden by default
       |
       */

        it('is hidden', function() {
            expect($body).toHaveClass('menu-hidden');
        });
        /*
            |--------------------------------------------------------------------------
            | Fifth Test
            |--------------------------------------------------------------------------
            | 1)ensures the menu changes visibility when the menu icon is clicked
            |This test should have two expectations:  does the menu display when clicked and does it hide when clicked again
            */
        it('changes visibility', function() {
            var $menuIcon = $('.menu-icon-link');

            // Click the first time
            $menuIcon.trigger('click');
            expect($body).not.toHaveClass('menu-hidden');

            // Click the second time
            $menuIcon.trigger('click');
            expect($body).toHaveClass('menu-hidden');
        });
    });







    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        /*
           |--------------------------------------------------------------------------
           | Sixth Test
           |--------------------------------------------------------------------------
           | 1)ensures when the loadFeed function is called and completes its work, there is at least
           |   a single .entry element within the .feed container.
           */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has a single entry', function(done) {
            var $feed = $('.feed');
            var $entry = $('.entry');

            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });











    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var $feed = $('.feed');
        var initialFeed,
            newFeed;

          /*
          |--------------------------------------------------------------------------
          | Sixth Test
          |--------------------------------------------------------------------------
          | 1)ensures when a new feed is loaded  by the loadFeed function that the content actually changes.
          |
          */

        beforeEach(function(done) {
            // Load initial feed
            loadFeed(0, function() {
                // Save the contents
                initialFeed = $feed.html();

                // Load new feed
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('changes the content', function(done) {
            // Save  contents of the new feed
            newFeed = $feed.html();

            // Compare two feeds
            expect(initialFeed).not.toBe(newFeed);

            done();
        });


    });


}());
