Problem #2: Asset Loading

1.	Describe in your own words the differences between Pre-loading and Lazy-loading.

    Pre-loading loads what it's required and loads some of the other modules with some delay.
    Lazy-loading loads modules when you need them.
    
2.	What are the advantages and disadvantages of each approach?

    Lazy-loading - when using lazy loading website has an initial small download a fraction of the overall application size,
    but once it's navigated to another view, new page will be loaded and repeat for each new view.
    
    Pre-loading - loads really fast at the beginning, but also keeps loading unnecessary content.
    

3.	In what cases is one better than the other?
    
    Lazy-loading is better for large and fast growing projects.
        
    Pre-loading is better when the user navigates to the lazy-loadable section of the application, 
    the router will have to fetch the required modules from the server, which can take time.
    
4.	Is there a better approach than the two? If so, describe it, along with its advantages and disadvantages.

    In my opinion using both of them will be the best, so the users could navigate and interact as quickly as possible.
