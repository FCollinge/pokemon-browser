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

I decided it's better to go down the shadcn/ui path sooner than later, so I added as many useful components as I could find using npx