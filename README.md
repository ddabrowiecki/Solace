## Solace Candidate Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Changes made
- Changed layout to CSS grid
- Created a SpecialtyField component so that if an advocate has many specialties it doesn't clutter up the grid
- Fixed the search function to search through specialties as well as years of experience (the integers in this column needed to be converted to strings)
- Fixed logic related to advocates -- filter properly and reset the full list with a click of the button
- Fixed some anti-patterns -- the onChange and onClick functions, HTML page breaks everywhere, etc.
- Wrote some handler functions

### Further work is discussed in Discussion.md

