## Notes

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
     

