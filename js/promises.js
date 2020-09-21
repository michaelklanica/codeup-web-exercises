"use strict";

// USING FOREACH LOOP... NOTE: no way to break out of loop, so ALL push events stored in array.  Return index zero
// which corresponds to the most recent time/date.

function getLastCommit(username) {
    const pushEvents =[];
    let url = 'https://api.github.com/users/' + username + '/events/public';
    fetch(url, {headers: {'Authorization': 'token 10e52df073a787b7428b10c07204601983c8d137'}}).then(response => {
        response.json().then(events => {
            // console.log('array of all events: ', events);
            events.forEach(event => {
                // console.log('each event', event);
                if (event.type === "PushEvent") {
                    pushEvents.push(event.created_at);
                }
            });
            console.log("last commit: ", pushEvents[0]);
        });
    });
}
getLastCommit('michaelklanica');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NOW WITH 'FOR' LOOP... no need to store ALL push events

function getLastCommit2 (username) {
    let url = ("https://api.github.com/users/" + username + "/events/public");
    fetch(url, {headers: {'Authorization': 'token b5dc99563baece3d245c9f3d77c758155e8fbe5f'}})
        .then(response => response.json()
            .then(events => {
                for(let i = 0; i < events.length; i++) {
                    if(events[i].type === "PushEvent") {
                        console.log("The last commit was made: ", events[i].created_at);
                        break;
                    }
                }
            })
        )
}
getLastCommit2("alexandrahamner");
