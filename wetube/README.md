/ -> Home /join -> Join /login -> Login /search -> Search

/users/:id -> See User /users/logout -> Log Out /users/edit -> Edit MY Profile /users/delete -> Delete MY Profile

/videos/:id -> See Video /videos/:id/edit -> Edit Video /videos/:id/delete -> Delete Video /videos/upload -> Upload Video

Create 3 routers: globalRouter, storyRouter and userRouter
Inside of the routers create the following GET routes:
/
/trending
/new
/join
/login
/users
/users/:id
/users/edit-profile
/stories/:id
/stories/:id/edit
/stories/:id/delete
Distribute these routes between the globalRouter, storyRouter and userRouter

All routes should have a controller