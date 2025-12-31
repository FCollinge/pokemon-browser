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