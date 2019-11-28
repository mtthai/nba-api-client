# NBA API Client

A client for almost all stats.nba.com API endpoints, written in Node.js.

## Installation
Have Node installed and run in terminal:
```
npm install nba-api-client
```
## Example
Endpoints, along with a description and parameters can be found in [data/endpoints.json](https://github.com/mtthai/nba-api-client/blob/master/data/endpoints.json). 
Functions return a promise and are generally named after their respective endpoints: team_details => teamDetails. Ex:
```js
const nba = require('nba-api-client');

nba.teamDetails({TeamID: 1610612745}).then(function(data){
	console.log(data)
})
```
```
{ TeamBackground:
   { TEAM_ID: 1610612745,
     ABBREVIATION: 'HOU',
     NICKNAME: 'Rockets',
     YEARFOUNDED: 1967,
     CITY: 'Houston',
     ARENA: 'Toyota Center',
     ARENACAPACITY: '18104',
     OWNER: 'Tilman Fertitta',
     GENERALMANAGER: 'Daryl Morey',
     HEADCOACH: 'Mike D\'Antoni',
     DLEAGUEAFFILIATION: 'Rio Grande Valley Vipers' },
  TeamHistory:
   { '0':
      { TEAM_ID: 1610612745,
        CITY: 'Houston',
        NICKNAME: 'Rockets',
        YEARFOUNDED: 1971,
        YEARACTIVETILL: 2016 },
     '1':
      { TEAM_ID: 1610612745,
        CITY: 'San Diego',
        NICKNAME: 'Rockets',
        YEARFOUNDED: 1967,
        YEARACTIVETILL: 1970 } },
  TeamSocialSites: {...},
  TeamAwardsChampionships: {...},
  TeamAwardsConf: {...},
  TeamAwardsDiv: {...},
  TeamHof: {...},
  TeamRetired: {...} }
```
## Parameters
Generally, "team" functions require a "TeamID", "player" functions require a "PlayerID", "box score" functions require a "GameID", and league functions require no parameters as they list all teams or players. To get a team's or player's ID:

```js
nba.getTeamID("Houston Rockets"); //{ TeamID: 1610612745, Abbrev: 'HOU', TeamName: 'Rockets', City: 'Houston' }
nba.getPlayerID("James Harden"); //{ PlayerID: 201935, TeamID: 1610612745 }
```
For a list of all current TeamIDs, go to [data/teams.json](https://github.com/mtthai/nba-api-client/blob/master/data/teams.json).
And for a list of all PlayerIDs in NBA history, go to [data/players.json](https://github.com/mtthai/nba-api-client/blob/master/data/players.json). 

To get more specific data from an endpoint, add parameters listed under its respective [endpoint](https://github.com/mtthai/nba-api-client/blob/master/data/endpoints.json). All parameters and their possible values are listed in [data/params.json](https://github.com/mtthai/nba-api-client/blob/master/data/params.json).

```js
nba.teamPlayerStats({TeamID: 1610612745, MeasureType: 'Advanced', Season: '2017-18', SeasonType: 'Playoffs'}).then(function(data){
	console.log(data)
})
```

```
...
'6':
      { GROUP_SET: 'Players',
        PLAYER_ID: 201935,
        PLAYER_NAME: 'James Harden',
        GP: 17,
        W: 11,
        L: 6,
        W_PCT: 0.647,
        MIN: 36.5,
        eOFF_RATING: 108.8,
        OFF_RATING: 110.1,
        sp_work_OFF_RATING: 110.1,
        eDEF_RATING: 104.3,
        DEF_RATING: 103.8,
        sp_work_DEF_RATING: 103.8,
        eNET_RATING: 4.6,
        NET_RATING: 6.2,
        sp_work_NET_RATING: 6.2,
        AST_PCT: 0.356,
        AST_TO: 1.78,
        AST_RATIO: 18.8,
        OREB_PCT: 0.022,
        DREB_PCT: 0.127,
...
```   
## Options
Raw data from stats.nba.com come in a separate header and row set format. To present it a bit more user friendly, this module formats the data into a key: value object before outputting it to the user. To receive the raw data unformatted, include an options object with the function call:

```js
var options = {formatted: false}

nba.teamDetails({TeamID: 1610612745}, options).then(function(data){
	console.log(data)
})
```    
```
{
  "resource": "teamdetails",
  "parameters": {
    "TeamID": 1610612745
  },
  "resultSets": [
    {
      "name": "TeamBackground",
      "headers": [
        "TEAM_ID",
        "ABBREVIATION",
        "NICKNAME",
        "YEARFOUNDED",
        "CITY",
        "ARENA",
        "ARENACAPACITY",
        "OWNER",
        "GENERALMANAGER",
        "HEADCOACH",
        "DLEAGUEAFFILIATION"
      ],
      "rowSet": [
        [
          1610612745,
          "HOU",
          "Rockets",
          1967,
          "Houston",
          "Toyota Center",
          "18104",
          "Tilman Fertitta",
          "Daryl Morey",
          "Mike D'Antoni",
          "Rio Grande Valley Vipers"
        ]
      ]
    ...
```

There is also an option to include parameters in a formatted output: 

```js
var options = {formatted: true, parameters: true}

nba.teamDetails({TeamID: 1610612745}, options).then(function(data){
	console.log(data)
})
```
This will add a parameters object at the end similar to the one from a nonformatted output.

Some endpoints from stats.nba.com like league_leader, player_estimated_advanced_stats, league_player_shot_locations have different key names and formatting. Thus, the default option for these params have been set to 'formatted: false' to return the raw data unformatted.

## Logos, Player Images, and Play By Play Video

getTeamLogosURLs, getPlayerHeadShot, and getPBPVideoURL return URLs:

```js
nba.getTeamLogoURLs("HOU")
//['https://stats.nba.com/media/img/teams/logos/HOU_logo.svg',
//'https://cdn.nba.net/assets/logos/teams/secondary/web/HOU.svg']

nba.getPlayerHeadshotURL({PlayerID: 201935, TeamID: 1610612745})
//'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612745/2018/260x190/201935.png'
  
nba.getPBPVideoURL({EventNum: 731, GameID: '0021800848', Size: '1280x720'}).then(function(data){
//'https://ssl.cdn.turner.com/nba/big/nba/wsc/2019/02/13/01d9b228-e553-c8ed-0c07-5a6f23fb15ba.nba_3317649_1280x720_3500.mp4'
```
An EventNum is a singular event (made/miss shot, foul, turnover, etc.) in play by play data:

```js
nba.playByPlay({GameID: '0021800848'}).then(function(data){
  console.log(data)
});
```
```
...
 { GAME_ID: '0021800848',
        EVENTNUM: 731, //in PBP data, it's uppercase
        EVENTMSGTYPE: 2,
        EVENTMSGACTIONTYPE: 79,
        PERIOD: 4,
        WCTIMESTRING: '10:00 PM',
        PCTIMESTRING: '0:37',
        HOMEDESCRIPTION: null,
        NEUTRALDESCRIPTION: null,
        VISITORDESCRIPTION: 'MISS James 26\' 3PT Pullup Jump Shot',
...
AvailableVideo: { VIDEO_AVAILABLE_FLAG: 1 }
```

A VIDEO_AVAILABLE_FLAG at the end of the PBP data will indicate if there's video available for the game.

Possible video sizes are: 1920x1080, 1280x720, 960x540, 768x432, 640x360, 480x270, 416x240.

*VIDEO PLAY-BY-PLAY DOES NOT INCLUDE 2019-20 SEASON AND FUTURE SEASONS
(For 2019-20 video play-by-play, use https://github.com/mtthai/nba-pbp-video)
