## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Strategy

Throughout this exercise I made particular decisions on code/UI/config/performance which can be summarised below

- Firstly I added SCSS to allow for more advanced CSS scaling
- Added a font using Next's local font import. Unfortunately I only imported one due to not wanting to spend time picking the correct ones from the vast options available
- Added global styles and CSS variables and mixins to allow for easier adoption throughout components (breakpoint mixins and colours)
- Installed jest for testing but had to import one package to every test file as was unable to manage inside Next config
- Created localStorage helper and QuizContext to allow for values to be consumed by all child components rather than prop drilling
- Due to CORS issues with the provided endpoint I used Next's API functionality and hosted the response there to call instead
- Upon realised the images for question 1 was HTML in a string I installed a HTML parser to be able to render those properly
- I used https://tinyjpg.com/ to compress JPG files for better perfomance on page loads
- Mobile first design

## Improvements

I managed to achieve what the goal set out but as always there are improvements I would have made given the time:

- Better test coverage, I only added tests for a few components, need to add more
- More global, reusable styles. Some repetition was useed for the sake of time
- Add more fonts to handle all scenarios
- Configure the test imports properly


