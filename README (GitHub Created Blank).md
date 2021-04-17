# MERN_WhatsApp_Clone

#1 Created a back-end folder (whatsapp-backend)

#2 Installed React.js in a folder called whatsapp-clone (this will be the front end)

#3 Created a new Firebase project (MERN-whatsapp-clone-project)

#4 Clean-up the default installed files (front-end) by deleting App.test.js; logo.svg and setupTests.js and then remove the appropriate imports from App.js file

#5 Remove all css from App.css file and re-margin everything in index.css

#6 On the Firebase Dashboard establish the app as a </> (webapp) under the Project Settings

#7 Created firebase.js file on the front-end (src folder) and took config-settings from the Firebase website and pasted them in. This will help with authentication

#8 Establish the rough format of the app in the App.js file

#9 Begin work on the components on the front-end (sidebar & chat)

#10 In the .css for each component, establish how much of the screen each component will take up

#12 Install Material-Ui/core in the front-end folder and then install Material-Ui/icons in the front-end folder as well

#13 HINT: To make a Material-Ui/icon ..."click-able"... wrap the icon in a <IconButton> and make sure to import both the icon you are wrapping and import the 'IconButton' itself as well

#14 Import the Icons and add css for the Icons at the top of the Sidebar component

#15 Import and add the Search field at the top of the Sidebar

#16 Complete the Sidebar-component and then move on to the Chat-component

#17 Chat-component; work on header-section which includes the Avatar, info, and icons

#18 Chat-component; work on body-section which contains the actual conversations or messages

#19 Chat-component: work on footer-section which includes the smiley, type box, and submit button

#20 Front-end complete now. Start working on the Back-end

#21 Start by typing 'npm-init' in the terminal to start installing Node.js on the back-end
>>> Entry point should be entered as 'server.js'

#22 In the pacakge.json file (created after you run npm-init) make sure to add a new script:  "start": "node server.js". Also add in the main section "type": "module" which allows you to use the ES6 convention on the back-end with node.js

#23 Install Express and Mongoose on the back-end

#24 Set-up Mongod-Atlas so that the database is established

#25 Create the basic outline in server.js of how the application back-end will run

#26 Write the first api-route to check for functionality (i.e. '/')

#27 Set-up access to MongoDB-Atlas database access

#28 Set-up access to MongoDB-Atlas network access

#29 Set-up access to MongoDB-Atlas 'cluster connect'

#30 Add db-conifg code to server.js to be able to connect to the database

#31 Create db-schema with new file of dbMessages.js

#32 Create the POST-api that will send the data to the database

#33 DONT FORGET the middleware in the server.js file 'app.use(express.json())

#34 Create the GET-api that will get the data back from the database

#35 Install PUSHER (on the back-end with 'npm i pusher' and start working with it 

#36 DONT FORGET to import PUSHER from 'pusher' on the server.js file (at the top)

#37 Test to make sure that PUSHER gets information back from MongoDB every-time the database gets a new record.

#38 And now, link up the back-end with the front-end to get the whole application working

#39 On the front-end install 'pusher-js'

#40 Include a useEffect-hook on the front-end in app.js

#41 On the front-end add code to app.js (the useEffect-hook) and in the hook, this code comes from Pusher webpage

#42 On the front-end install 'axios' to be able to make a call to the database

#43 useState is necessary on the front-end in app.js

#44 The database now updates and Pusher indicates there's been an update from the database

#45 Now, update the code to show the front end sending data to the back-end (i.e. so the messages are not static; pass through all the PROPS)
