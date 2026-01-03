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