## Set up
- Install dependencies by running "npm i"
- Start your local server by running the command "ng serve"

## Notes
- I have built.
    - the UI 
    - the interface Post
    - the service PostService
- API end point "https://jsonplaceholder.typicode.com"
    - All posts GET "/posts"
    - Create a new post POST "/posts"
    - API documentation https://jsonplaceholder.typicode.com/guide/

## Tasks
1. Create 2 routes
    - /all-posts (AllPostsComponent)
        - This route should render a list of post. Make sure to use the lifecycle methods.
    - /create-post (CreatePostComponent)
        - This route should render a form to create a new post. 
2. AllPostsComponent
    - Render a list of posts when the component gets initialized.
3. CreatePostsComponent 
    - Render a form to create new post.
    - After we create a new post, the post should be render right below the form.
