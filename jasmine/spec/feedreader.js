/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
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

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it ('url is defined',function(){
            for(let allFeed of allFeeds){
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it ('name is defined',function(){
            for(let allFeed of allFeeds){
                expect(allFeed.name).toBeDefined();
                expect(allFeed.name.length).not.toBe(0);
            }
        }); 
    });

    /* A new test suite named "The menu" */

    describe('The menu', function() {
        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden', function() {
            const menu= document.querySelector('body');
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        }); 

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations:menu displays when
          * clicked and hides when clicked again.
          */
        it('menu icon changes on click', function() {
            const menu= document.querySelector('body');
            const menuIcon= document.querySelector('.menu-icon-link');
            
            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(false);// displays when clicked

            menuIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBe(true);// hides when clicked again
        });  
    });  

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least 1
         * single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });
        // ensures there is at least one entry in feed container
        it('Has at least one entry in feed container',function(){
            const feedContainer= document.querySelectorAll('.feed .entry');
            expect(feedContainer.length).toBeGreaterThan(0);
        });   
    }); 

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         */
        let firstFeed, secondFeed;

        beforeEach(function(done){
            loadFeed(0,function(){
                firstFeed = document.querySelector('.feed').innerText;// stores first feed content
                loadFeed(1,function(){
                    secondFeed = document.querySelector('.feed').innerText;// stores second feed content
                    done();
                });
            });
        }); 

        it('when new feed loads content changes',function(){
            expect(firstFeed).not.toBe(secondFeed);
        });
    });    
      
}());
