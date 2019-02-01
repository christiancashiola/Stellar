# Stellar
### [Live Site](https://stellar-aa.herokuapp.com/)  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stellar is single-page web application inspired by Tumblr. Share quotes, video, photos, audio, link, and comment or like others posts. Users can search by tags (which are split and parsed when added to post) or explore trending posts (those with most likes). With an infinite scroll users can enjoy searching the stars.
  
![Posts layout](app/assets/images/posts.png?raw=true)

## Technologies Used
+ React/Redux for frontend
+ Rails as a RESTful JSON API
+ PostgreSQL for database
+ AWS S3 to handle file uploads

## Code highlights
Avoiding unnecessary connected components with this nifty way of passing down props using React Router. Using `render` instead of `component` is a more efficient option here because otherwise a new component would be mounted every render.
```javascript
<Route
  exact path='/dashboard'
  render={(props) => <DashLinks {…props} currentUser={currentUser} /> } />
```
  
Here I have an index route and action in my posts controller. This index action is unique in that, depending on the URL, a different query will be made.
I also utilized a 
```ruby
def index
  pathname = params[:pathname]
  @posts = nil

  if pathname.include?('dashboard')
    @posts = Post
      .order(created_at: :desc)
      .where(user_id: current_user.followee_ids)
      .page(params[:page]).per(20)
      
  elsif pathname.include?('explore')
    @posts = Post
      .order(likes_count: :desc)
      .page(params[:page]).per(30)
  else
    tag = Tag.find_by(subject: "##{pathname.split('/')[-1]}")
    @posts = tag.posts.order(created_at: :desc).page(params[:page]).per(30)
  end
  
  render 'api/posts/index'
end
```
I also used a count column in the database and Rails' counter cache to query a posts based on the number of likes
```ruby
t.integer "likes_count", default: 0
```
```ruby
# in Like model
belongs_to :post,
  counter_cache: true
```

## Feature Highlights

### Add comments, edit them, delete them.
  ![Comments](app/assets/images/comments.png?raw=true)

### Add all forms of media with previews before upload.
  ![Media uploading](app/assets/images/media.png?raw=true) 
  
### Choose a profile picture and change it anytime.
  ![Profile photo](app/assets/images/profile_pic.png?raw=true)

### Change themes. (These settings persist when a user logs out and logs back in)
  ![Theme selection](app/assets/images/cosmic.png?raw=true)
  ![Theme selection](app/assets/images/classic.png?raw=true)  
