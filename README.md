# Stellar
### [Live Site](https://stellar-aa.herokuapp.com/)  
![screen shots](public/stellar.gif?raw=true)

## Background
Stellar is a responsive single-page web application inspired by Tumblr. Share quotes, video, photos, audio, link, and comment or like others posts. Users can search by tags or explore trending posts (those with most likes). With an infinite scroll users can enjoy searching the stars.

## Technologies Used
+ **React/Redux** for frontend
+ **Rails** as a RESTful JSON API
+ **PostgreSQL** for database
+ **AWS S3** to handle file uploads

## Code highlights
+ Avoiding unnecessary connected components with this nifty way of passing down props using React Router. Using `render={...}` instead of `component={...}` is a more efficient option here because otherwise a new component would be mounted every render.
```javascript
<Route
  exact path='/dashboard'
  render={(props) => <DashLinks {…props} currentUser={currentUser} /> } />
```
  
+ This index action is unique in that, depending on the URL, a different query will be made. No need for custom routes.
```ruby
# in PostsController
def index
  # example pathname: "#/search/trails"
  pathname = params[:pathname].split('/')
  @posts = nil

  if pathname[1] == 'dashboard'
    @posts = Post
      .order(created_at: :desc)
      .where(user_id: current_user.followee_ids)
      .page(params[:page]).per(20)
  elsif pathname[1] == 'explore'
    @posts = Post
      .order(likes_count: :desc)
      .page(params[:page]).per(30)
  else
    tag = Tag.find_by(subject: "##{pathname[-1]}")
    @posts = tag.posts.order(created_at: :desc).page(params[:page]).per(30)
  end

  render 'api/posts/index'
end
```

## Feature Highlights
**Add comments, edit them, delete them.**
  
  ![Comments](app/assets/images/comments.png?raw=true)
  
**Add all forms of media with previews before upload.**
  
  ![Media uploading](app/assets/images/media.png?raw=true) 
  
**Choose a profile picture and change it anytime.**
  
  ![Profile photo](app/assets/images/profile_pic.png?raw=true)

**Change themes. (These settings persist when a user logs out and logs back in)**
  ![Theme selection](app/assets/images/cosmic.png?raw=true)
  ![Theme selection](app/assets/images/classic.png?raw=true)  
  
**Admin profile that can remove any posts**
