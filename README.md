This readme will be committed regularly to show notes/motivations. It will certainly be rewritten at the end into multiple parts - the required readme per the exercise instructions and a second part containing the revised notes.
The motivation for this noted readme is that I have never used any of the tools required for this assignment.

The figma shows 6 different pages but the first two are the same with the only difference being that P1 has a grayed out "previous" pagination button. I assume I will be able to use some code to do that and avoid writing multiple landing pages.

Thus I have 5 pages: app/page, /loading-detail/page, /loading-list/page, /pokemon/[id]/page, /search/page

I begin by creating these pages with simple links between them in the first commit.

I have two big elements to the website: the API and the figma design. Having used APIs before I imagine it won't be too much work so I will focus on figma first. I start with the pokemon detail page - loading state, as it seems to be the most empty.

Having understood that figma is really just a top-down classifier for the design, I find that I just need to copy all the specs and write them up. I start by doing the design of the whole page followed by the four elements.

That was quite easy, I guess I can probably fly through the rest of this page.

That was considerably more difficult. I failed to get the spinner to work. Will get back to it later.

Bit of research shows that the spinner is shadcn/ui. That means i'll be able to build it in later, but I'll wait until I see what else I need to get from there (I imagine buttons, skeletons etc)

I decided it's better to go down the shadcn/ui path sooner than later, so I added as many useful components as I could find using npx.

I'll rewrite the detail loading page using shadcn and lucide now.

Going to do the loading list page now as it can't be much harder than what I just did.

First element of said page is the Hero which (obviously!) is the same as the actual landing page, so I'll build that as a component first so I can reuse it later.

The separator also seems to be the same everywhere so I'll make that component.

Same thing, footer I built in the detail loading page is the same everywhere so I'll write that component.

Going to quickly fix the detail loading page to use the components we built.

Some of the pages have a lot of levels of indentation so I'm going to do the sound thing of doing the minimal amount of work on each page: that is, install already existing components everywhere I can and wire up links/buttons so I can still navigate.

I've changed my mind about the buttons because on the first page I decided to do it (search results) the buttons are inside of the body. Fortunately I can still hit Ctrl + Left arrow if ever I want to leave the page.

So I noticed the search results page's footer is 215px instead of the 244px in my components.

Fortunately I can rewrite the footer to accept the height as an argument and set my default to 244 and use 215 in the search results page

Stopping there for now 20:07 GMT

Resuming at 14:04 GMT

Going to make the pokemon detail page now which seems to be the most complicated.

I have to fill it with fake data as I want to complete the design first.

I've just read that the purple elements in the figma design are actually components. I'll try and do more of the page before I make the Pokemon Avatar subcomponents.

Nevermind the page is actually full of components and I guess it's because they're all API specific so I think I'll do the components now and I might as well wire them straight into the API. I'll commit whatever progress I have at the moment.

I've changed my mind I think I can still make the components without wiring the API just yet. Hopefully I can save it for a final pass through. I'm just going to make as many components as I can find in the figma.

I wasted some time messing with the badge checks under the Search Button component but frankly I think I can just get rid of them since they're invisible in the final design. Figma has a "Show leading/trailing element" option set to false for both on the button so I assumed it had something to do with spacing but I'm finding it impossible to reproduce what is shown on the figma, therefore I will just not add them.

Looking for the next component to build, I notice the pagination buttons are very similar to the one I just built. Eureka! I have shadcn components... What a waste of time that was.

Onto the pagination. A lot of the code should be the same.

So that was okay. Unfortunately now I have no way of navigating around the website anymore.

I think the highest impact now would be to collect some pokemon to populate the website, because I will have to create dynamic cards for the grid and for pretty much everything else. Hopefully I can make it quite light.

So reading around a bit I will need two calls to pokemon/id and pokemon-species/id for the description, category gender and weaknesses. All other variables are pokemon specific.

I need to think about how to store all this information without querying all of it all of the time.

So based on the type of information I need to display at each point in time (during use of the website) I think I need to build the pokemon card and grid first.

I wrote the card and more of the landing page (search bar + pokemon list/grid)
I want to focus on making the website functional now because it is a bit boring to just write static pages.

So I wrote up the API functions and types and the cards display but the grid is all messed up extending much further down than I had hoped. Pagination is seriously broken, search doesn't work. The sprites on the cards are smaller than in the figma. Will tackle this now before committing.

So I had my offset wrong (20 instead of 12). The sprites being too small I have no option but to eyeball a magnification.
Nevermind, I had just thought the image was under an extra level of indentation in the figma but I was wrong and copied the wrong image pxl size. It appears to be slightly distorted now and upon closer inspection my sprites look a lot "muddier" than the figma's. So maybe I'm using the wrong sprites?
Wrong again, there's an imageRendering flag on the img which has sharpened my sprites as desired.
I had to properly await my promises and I wrapped the back/next buttons with links.

So I had the realisation that making 5 different pages was a big mistake. There probably was a much easier way of writing the website, by keeping the hero/footer which is common on each page and then swapping out the body based on the state.
I think I will refactor that at the end because I want to stay focused on getting the website up to standard.

In that case I will continue with the detail pages.
Spent a little time trying to find the description for Bulbasaur but it definitely doesn't exist in the pokeAPI despite it being all over the internet. I have gone with the arbitrary choice of using the descriptions from pokemon Soulsilver.

All done I just want to finish making the containers for this site and then dinner + New year's so I'll stop there.

First session since the new year, hopefully this should be the last for this project but I still have tomorrow to finish. Right now I need to finish making the detail page, after that I need to make the search functionality and iirc that'll be everything. I'll have a look at any refactors and especially making sure the skeleton pages appear in the right spot (probably refactoring them into the actual target pages).
I also want to look at fixing/scaling the page display to the browser.

Left sidebar is done. Had to make some changes to the api values because the format is different (weight in hectograms for example). Also I had to figure out how to get the gender which depends on the "gender_rate" variable.
The page's sourcecode is getting ridiculously long so I will definitely want to refactor at least this page (for example lots of repeated formatting for the left sidebar when I could've just made a component).

Going to do the statistics chart now. I won't do the same mistake as I just did with the left sidebar and I'll just immediately save myself some time and write a component.

Well this worked better, I still had to declare lots of variables and it seems the code is repetitive. I leave here a note to refactor those in something shorter. Displaying all the same stats each time in the same order I could probably have written it even shorter using a list of sorts.

Doing the type/weaknesses section I see that I could've written a custom badge component for the types when I wrote the pokemoncard component. I won't do that now because I am now motivated to do lots of refactoring before I hand in the assignment, so I'll save some head scratching for now and just copy the code around.

Turns out the weaknesses involves a bit of logic so I'm going to skip that for right now. This is because weaknesses aren't provided by the API and the logic is that one must calculate the multipliers of a pokemon's types against all other elements. For example a grass/poison pokemon like Bulbasaur is weak to fire and psychic and those multipliers stack. I'll just have to write a function but for now I want to continue the page and I'll just leave a placeholder.

I'm going to do the ability section now.
So same thing I'll have to write an (albeit much simpler) auxiliary function to map pokemon.ability to ability.description. I'll do that later because for now the format is done. I'm also a bit confused because about half of all pokemon have two abilities to sample from. A rule of the game it seems is that pokemon only exhibit one ability but there are definitely more available in the API and obviously in the game. So I think I'll also rewrite that bit to maybe display "Abilities" and both descriptions, but I'll want to do that when I do the refactor since it'll be a component I want to just edit based on query result.

I'm just going to do the lower nav section which is just a button to the homepage. I considered wiring the page back to the page on which the viewed pokemon was originally displayed but in practice people will use prev/next page and also the search bar, which would make that button useless.

That's done. All that is left in terms of critical functionality is the search bar.

I think for the search bar best thing to do is get rid of my searchinput and searchbuttons and rewrite those with my newfound knowledge.

Turns out I never actually wrote the search results page because I never had a way of accessing it and it slipped my mind. I'll write that when I'm done with this search bar

I added keyhandling so that I can hit enter to finalise my search.

Next is to do the search results page which shouldn't be a problem.

It took a little while but I got there. It was a lot of stuff I had already seen before. I added a "feature" where searching an empty string returns the user to the home page.

My next target is to make those two functions I was talking about earlier: the first big one to calculate list of weaknesses from list of types.

So I wrote out the logic down to two functions which test if an element is strong/weak against another (mult = 1/2 or mult = 2). I thought it would be quite complicated to avoid hardcoding the information but apparently the API does carry that information.
After careful reflection it'll be much faster to run the website if I do indeed hardcode the strengths/weaknesses since I'll avoid about 1.5 API calls per queried detail page. 
Okay so after wasting 20 minutes writing my hash map and some test functions it turns out that I should just use the API. Reason for this is the API returns a parsable json with every multiplier and type. I thought the only multipliers were 0.5 1 and 2 but turns out ground -> flying has a multiplier of zero.
I'm going to commit and add a third elt to the hash map and if my test script is still returning whack results I'll use the API.
So I figured out that my hashmap not only was missing a whole category of immunity but is also entirely wrong because I used the strengths/weaknesses from PokemonGO which apparently are not the same as the regular game (?)
Turns out that's also wrong I therefore blame my source.

After rewriting the map and adding the necessary logic I then wasted another 15 minutes because my test script was broken not the source code... It works now though.

I'll write the badges into the detail page now.

Wiring the descriptions. Had a bit of a dilemma since I need to display multiple abilities for certain pokemon. I first considered showing hidden abilities as well, but as the figma doesn't for bulbasaur I decided not to (as well as three abilities + three descriptions forced me to write a scrolling thing).

The previous commit was the final commit before the website included every required component. There's two things to do:
a. Lots of refactoring b. Going over all of the figma specs. I notice for example the badges aren't perfect and some divisions are also not quite right.

I think the refactoring is a higher priority.
I also need to go over the readme to check if I left any notes for stuff I promised myself to do later.

After having regex'd my repo I will:

Detail page:
    Componentise the left sidebar 
    Use an array for the stats instead of declaring them individually
Global:
   fixed width needs to be dynamic to the browser
   reduce total number of pages (can probably make it two: general/search and the detail page)
Loading states:
    move skeletons to actually use them properly
UI:
    fix the badges (probably componentise)

Game plan:
1. Detail page refactors
2. Badge component
3. Loading states
4. Page consolidation
5. global responsive design (includes checking if it works on my phone)

Detail page refactors done (700 -> 570 lines)

Type badges made into component and added. also added a line to justify the weakness badges to the next line if need be. No need to adjust container height.

I've fixed the loading pages (just copy and paste into right location and rename a couple things) and added a spinner that was missing to the home loading page. Note for future: Wrap content in a "Suspense" so the spinner also appears when using the pagination.

Will stop there for today.

So I'm back now at 15:10 looks like I need to do finish item 3 right now wrapping in a suspense. I'll try wrapping the whole block to get it working and then refactor later.
So the suspense worked by passing currentPage as a key I was able to add my usual spinner as the fallback. It forces react to remount the page. After playing around with it I note two things: I actually haven't done any skeletons so big problem and that the website is slow and I want to cache api requests. I never noticed that because chrome automatically caches the entire state, but use of the pagination and home (detail) buttons forces new api calls. I've read that you can set a cache with an expiry but I probably want to try writing something fancier.

// Commit ends here these are just thoughts

So I had a quick think about the cache and I've realised that per the assignment there isn't really anything to say that I can't just fetch the entire website (in a queue with injections for specific details/searches) but even then I could probably load the first page and download the entire rest of the required api information before a user even had time to move to a second page - or even the time they would wait would have been reduced by exactly the duration of their inactivity on first reaching the site.
I had misunderstood "rendering dynamically" as dynamically fetching.
Logically this would make the website extremely fast (and eliminate loaders/skeletons almost entirely) for anyone with a modern average internet speed, and wouldn't affect people with a slower connection. It would be bad for people using cellular data though.

So I've come to the conclusion that for the cache I want, on request of a page of the website (because I can access any page number from the aaddress), I should fetch the data required to display it (starting with pokemon list) and then build a queue do fetch every single piece of data I will need, bumping the priority for the pages currentPage+-1 as they are the most likely next visits as well as bumping any other data (for example search results which would be against the already queried pokemon list) to the top of the queue.

The final thought on this was that as I wrote just above it would be bad for people using cellular data, but apparently there's a way to collect that data from the user's client info on certain browsers. I've read that the standard is to check for that otherwise fallback on the data efficient version.

// end of note and back to items 4. and 5. from lines 159-160

So to consolidate the pages I wanted to merge the browser and search pages because they're extremely similar. 
To do so I need to add a query parameter to the landing page and check whether it is present to decide to show a search result or not. I'd also be able to condition which sub-header I display, change the footer height and change the pagination targets. 
After that I just need to update the suspense key and search bar.

So first I found out that search params are commutative. I had to make sure that when initiating a search I should reset to page 1 to avoid targetting (likely) unexisting pages. I added hasNextPage to disable the next button in case the page doesn't exist.

So I just have to change all the widths to maxWidth and add centering.
I've had to do that so many times. Fortunately regex made it easier.
I set smaller (now minimal because of the previous step) padding for people with smaller screens removing the fixed 140px

Okay so I found out you can emulate a phone with F12 and it didn't work. 
So it's because I didn't make *all* of the container sizes responsive: the subelements are basically overflowing out of their containers which was quite hard to figure out.

I have spent 45 minutes since I last wrote that note and problem after problem have appeared and I still cannot make it work on smaller screen sizes.

So turns out I wasn't really using minHeight which I hadn't realised would force objects to scale. I'm finally moving but my neck hurts. Also I've started using flex wraps for a lot of items.
I guess it's good practice.

So it's even better than good practice. This has taught me that children match their containers. If I had to redo this project I would save at least 4-6 hours just on this, I had defined every single dimension according to the figma. I guess it gave me courage to carry on but I should have read more before starting...
I changed how the 'pokemonList' displays with repeat using auto-fit
Two notes: I can probably simplify the body from [id]/page by removing divisions so that (maybe?) it will fit better on smaller screen sizes. I don't know yet how I will conserve the regular layout if I do that.
I need to change the game version for the descriptions because some of the early pokemon don't have any, or rather change my strategy for querying the descriptions.
I need to add error handling for some pokemon (a lot of sprite queries come back empty). I will probably wait until I do the cache.

So while reviewing the commit I found it still doesn't work amazing on even smaller screens, a lot of things end up overlapping and not rendering nicely so I will finish this commit and I'll leave this as a note to fix that later.
I did a bit more testing with screenfly and yeah it's still unreliable.



