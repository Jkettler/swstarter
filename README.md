## Readme

I don't think there's any extra build instructions besides `git clone`, `npm install`, and `npm run ios` but I haven't built/run this on any machine but my own. I'm using node version `v12.14.0` as `default`, which is important because Metro Bundler launches a new terminal, using the default.
As far as I know, this only runs in an ios simulator, and I haven't even experimented with the Android side of things. 

I thought the time frame of 6 hours was a bit steep for a functionally complete, styled app, so I tried to front-load the work with some notes/thoughts to get the planning work done before the "dev" clock started. They're very train-of-thought and shouldn't be scrutinized too seriously. 
 
 
## Notes

Overall, I had a blast writing this. I'm sure there's some things that might jump out to a team of engineers that do this stuff all the time, but I tried to make the components and everything  as clean and logical as I could without over-thinking and over-engineering. There are a few examples of things that I probably _shouldn't_ have spent time on, but I really wanted to get as close as I could to the mock screens.
 
 Some things I would think more about if I had more time:
 
 - The CSS is duplicated in a lot of places, and doesn't really follow a cascading pattern 
 - The files themselves could be organized better. 
 - I hate writing hard-coded anything, so I try to avoid it even when most people would agree it's a premature optimization. (See `orderedObjectList` in `util/helpers` for a prime example.
 - There's no batch `GET` option through the API so I was forced to choose between N+1 queries on the Details page to get names/titles, or grabbing all the pages and filtering in memory. I went with the former because the implementation was faster/easier, but in a perfect world, the API would support something like `/films/?ids=1,2,3`. This really bothered me a lot.  It would be pretty fun to write something that chose the best strategy based on the number of expected pages would be fun to write, but out of scope for this. 
 - Test coverage is _weak_. I normally push for lots of test, but again, kind of out of time. I wrote basic tests for non-react utility functions because I already knew how to write those tests and they're pretty important to things working correctly.


### Project setup
- previous experience: expo, this time: React-Native CLI
- emulator failure to launch: stack trace ~"port in use", ` lsof -nP | grep LISTEN` => docker culprit, `docker stop [container-name]`

 
### Structure
- navigation/screens: Search, Results, Details, back-to-search button, inner-app "link" to Details page
    - https://github.com/wix/react-native-navigation looks cool, but project req is `react-navigation`
        - given mocks are for iphone, prob just use/test iOS emulator for quick v1 sample project 
    - Prob go with stack navigator bc seems like logical choice for this flow
    - https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html (maybe do this to avoid needing `navigation` passed down?)
        - or https://reactnavigation.org/docs/en/connecting-navigation-prop.html
        

- Interactions: search field, submit button, inner-app link that (maybe) requires fetch, back to search 
    - back-to-search: reset app state or just clear nav stack?
        - Components:
            - ~~Top header bar, every page, always goes 'back' except on search~~ `defaultNavigationOptions` options/styles
            - stylized scrollview with flexbox layout, consistent alignment, margin/padding
            - button: reuse single style, takes props text, onClick
            - maybe reusable component like: DisplayText, Grey separator line, list of components to render below
            

### Network/Api
- prev good experience with Axios, prob not worth extra project dependency for this simple app. might revisit.
- https://blog.logrocket.com/axios-or-fetch-api/ (stop the "dev clock" to read this)
- want to avoid N+1 queries on details page to get person's movie titles or films' character names(API only provides urls)
    - could get all films/actors and filter in memory (might be worse performance if # pages > # references (esp if pages are slower)
    - ~~yay, undocumented bulk fetch by id e.g. `/films/?ids=1,2,3` solves this problem~~ Doesn't work (returns results, but not accurate), will have to hit search again
        - workflow: click details link -> fetch instance -> .then(parse out ids and do 2nd query)
        
        
        
### Testing
- Problem: App-test.js does not work out of the box with 'react-native-gesture-handler'

    This test _should_ run, but hits a problem with the 'Direction' property in 'react-native-gesture-handler'
    
    I tried the solution discussed here:
    https://github.com/software-mansion/react-native-gesture-handler/issues/673#issuecomment-509051922
    to no avail. 
    
    I also tried adding:

    ```
    "transformIgnorePatterns": [
        "node_modules/(?!(react-native|swstarter|react-navigation|react-native-screens|react-native-gesture-handler)/)"
    ```
    to the jest config, but still no luck. 
    
    I'd want to spend more time getting this to work, but in the spirit of the time limit, I'm just commenting it out now.
  
    
### iOs/Android
- https://facebook.github.io/react-native/docs/button#color ```color: Color of the text (iOS), or background color of the button (Android)```
     - This makes me sad
     

