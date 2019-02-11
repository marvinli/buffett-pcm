<!--- Provide a general summary of your changes in the Title above -->

## Description
<!--- Describe your changes in detail -->

## How Has This Been Tested?
<!--- Please describe in detail how you tested your changes. -->
<!--- Include details of your testing environment, and the tests you ran to -->
<!--- see how your change affects other areas of the code, etc. -->

## Screenshots (if appropriate):

## Types of changes
<!--- What types of changes does your code introduce? Put an `x` in all the boxes that apply: -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Refactoring (changes in code organization without major change in functionality)

## Checklist:
<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!--- If you’re unsure about any of these, don’t hesitate to ask. We’re here to help! -->
- [ ] My code follows the code style of this project.
- [ ] My change requires a change to the documentation.
- [ ] I have updated the documentation accordingly.
- [ ] I have added tests to cover my changes.
- [ ] All new and existing tests passed.


## [New Feature|Feature Change|Refactor|Bug Fix]

## What's changed:
- [list code changes that were made]

## Test Cases
- [list unit tests cases written]

## Pages to test are:
CNBC: http://localhost:3000/video/2017/11/16/bernstein-sr-analyst-on-tesla-semi-truck-market-will-be-limited.html
Buffett: http://localhost:3000/video/2018/09/10/buffett-remembers-the-2008-financial-crisis.html
Deal or No Deal: http://localhost:3000/video/2018/09/20/howie-mandel-i-have-a-lot-of-baggage-that-comes-with-me.html

Prod locations:
Buffett: https://buffett.cnbc.com/video/2018/09/10/buffett-remembers-the-2008-financial-crisis.html
DOND: https://dealornodeal.cnbc.com/video/2018/09/20/howie-mandel-i-have-a-lot-of-baggage-that-comes-with-me.html

## Other
A lot of the problems were happening when a different brand styles were loaded up. The usual way of selecting the proper brand styles weren't working. I'm not sure what the best way to fix it was...so I found a quick fix that I put in the first commit...

## Other
DOND page isn't loading dynamic content feed content. The problem is that no data is loading for this component. I'm not sure what's the difference between QA and local, but I'm not receiving data. I fixed the issue for this component for Buffett, so hopefully it's also fixed for DOND.
