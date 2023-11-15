--Sheet Setup--

on your gboss google sheet (or whatever) create a blank sheet and name it something like "Data"

if not modifying client code, set the following cells to: 

A1 = Remaining, B1 = Minutes, C1 = Seconds

navigate to Extensions > Apps Script

replace the default text in Code.gs with sheet.js (if existing code, just create a new .gs file)

at the top right, click Deploy > New Deployment

Description doesn't matter, Execuse as "Me (your email)", Who has access "Anyone", click deploy. (might have some authorization stuff happen here. if not follow the link it generates to prompt auth stuff ((I think)) )

--UserScript Setup--

add client.js to a new tampermonkey

copy the link for your deployment - should look like https://script.google.com/macros/s/[lotsoflettersandnumbers]/exec - and replace the default url (line 14) on your tampermonkey script.

enable the script, refresh lyr, probably should be working idk



---- depending on my mood you can /w nezumi in game and I might help you if you run into issues ----
