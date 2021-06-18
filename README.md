# guild-chat
I imagined this chat application as a support resource to help a tech onboard a prospective student. That is what influenced some of the features I was thinking about.

`git clone` the project

## Backend
cd into `guild-chat-be`
`npm install`
`node server.js`
You should see listening on 8080. Congrats! Your server is ready for a socket connection
`cd ..`

## Frontend
cd into `guild-chat-fe`
`npm install`
`npm start`
This will spin up the React app on localhost:3000
Now open two windows on localhost:3000
Type your message, click SEND, and check your other window to see it come through!

## Bugs/Continued Work
I was not able to distinguish the send from the receiver via socket ID like I thought I would. This would allow me to apply some simple styling to distinguish between sent and received messages.

I think there are also some instances of repeated rendering, mostly when the user types a character in. I think this is a side-effect of React's lifecyle that I'm not 100% sure of (especially since it moved to hooks and functional components). I believe that useEffect() might be the solution (as it was in Socket.js), but I wasn't sure.

I'd like to think more about how this could scale, especially from a student/support split, and think about what components would need to be broken out from the main Chat.jsx (input, button, etc). The backend would also need to be wired up to a db (potentially, if we decided saving chats was necessary for training, etc).


## Future Features
I wanted to add in short cuts to make support more effiecient. Things like '/greeting', '/deadlines', '/contact', etc. 

I didn't not create a channel list because I was thinking of this as a way for a support person to help a prospective student get onboarded, so I was imagining it as a popup. But what could be beneficial, is if on the site, the user was tagged as a student/standard user, wheras we could have an internal chat application (think slack), with all the open channels in a sidebar to make navigating easier for the support tech.

A button to send a transcript of the chat to the user's email.

## What I learned
This was a refresher on sockets for me as well as a re-learning of React. The last time I touched React was back in the pre-hook and class based components day. I like the move towards functional component declarations and the new hook pattern is nifty. There's just a learning curve there, that I was a little behind on for this project, and I think that caused some side-effects (re-rendering) and might have a potential solution (checking ids) to some of the things I ran into with this challenge.

It was fun diving back into React-land after having been exclusively in Angular and Vue for my professional career. 
