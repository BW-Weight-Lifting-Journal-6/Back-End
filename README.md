# Back-End

--- Weight lifting journal api docs ---

**endpoints and what they do**
base URL
users endpoints registers and login a user.

¨¨¨https://weight-lifting-api.herokuapp.com/api/auth/register

register endpoint

¨¨¨https://weight-lifting-api.herokuapp.com/api/auth/login

login endpoint

how the user input is modeled.

username:'' - password:'' are the only inputs you will need to register and login.


-------------------------------------------------------------


workout endpoints to GET,POST,PUT,DELETE

¨¨¨https://weight-lifting-api.herokuapp.com/api/workout/

all the GET,POST,PUT,DELETE are the same but just by changing the type of call will make this endpoint work.

how the workout input is modeled.

-exercise:'' <- the exercise you are wanting to do.
-reps:'' <- number of reps 'this is a integer only'.
-"muscle":'' <- the muscle that yu are targeting. 
-users_id:"" <- this is the id of the user you want the workout to be sent to. so if uers id is 1 user with the id of 1 will get that workout.
   
   
