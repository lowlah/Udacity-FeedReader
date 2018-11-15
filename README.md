# Udacity-FeedReader
This is my repository for the udacity feed reader testing project using Jasmine.

## Instructions
To run the page directly on your computer, download ALL the files from  https://github.com/lowlah/Udacity-FeedReader and open index.html file in your browser.

## Test performed
- Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- Test that ensures the menu element is hidden by default.
- Test that ensures the menu changes visibility when the menu icon is clicked.
- Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Credit
Udacity provided a starter code.
The following links are main resources consulted(but not limited to) during the course of this project:
- https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/
- https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/
- https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
- https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/
- https://www.diigo.com/outliner/fjsk23/Udacity-Feed-Reader-Testing-(project-%234)?key=i5xqspbzvg

