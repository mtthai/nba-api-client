const path = require('path');
const DOMParser = require('xmldom').DOMParser;
const axios = require('axios');
const stat_endpoints = require('./data/endpoints.json');
const teams = require('./data/teams.json');
const players = require('./data/players.json');
const jsonp = require('jsonp');

var default_options = {formatted: true, parameters: false}

generateURL = (params, endpoint) => {
	var values = ({...stat_endpoints[endpoint].params, ...params});
	var url = stat_endpoints[endpoint].url + "?";
	var param_names = Object.keys(values);
	
	for(var i = 0; i < param_names.length; i++){
		url = url + param_names[i] + "=" + values[param_names[i]] + "&";  
	}

	return url;
}

formatData = (json, options) => {

	var data = {};
	var parameters = json.parameters;

	if(options.formatted){
		var result_set = json.resultSets;
		for(i in result_set){
			var merged = {};
			if(result_set[i].rowSet.length !== 1){
				var multipleRowSets = {};
				for(j in result_set[i].rowSet){
					var temp = {};
					for(k in result_set[i].headers){
						temp[result_set[i].headers[k]] = result_set[i].rowSet[j][k];
					}
					multipleRowSets[j] = temp;
				}
				data[result_set[i].name] = multipleRowSets;	
			} else {
				for(j in result_set[i].headers){
					merged[result_set[i].headers[j]] = result_set[i].rowSet[0][j];
				}
				data[result_set[i].name] = merged;
			}
		}
	} else data = json;
	if (options.parameters) return {data, parameters};
	else return data;
}

getDataFromNBA = (params, endpoint, options) => {
	var headers = {
		'Host': 'stats.nba.com',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0',
		'Accept': 'application/json, text/plain, */*',
		'Accept-Language': 'en-US,en;q=0.5',
		'Referer': 'https://stats.nba.com/',
		'Accept-Encoding': 'gzip, deflate, br',
		'Connection': 'keep-alive',
		'x-nba-stats-origin': 'stats',
		'x-nba-stats-token': 'true'
	};

	var url = generateURL(params, endpoint);
	
	return new Promise(function(resolve, reject){
		if(typeof window === 'undefined'){
			axios.get(url, {headers}).then(function(res){
				resolve(formatData(res.data, options))
			}).catch(function(err){
				reject(err)
			});	
		} else {
			jsonp(url, null, (err, data) => {
				if(!err) resolve(formatData(data, options))
					else reject(err)
				});
		}
	});
}

module.exports = {

	teamDetails: function(params, options){
		return getDataFromNBA(params, "team_details", {...default_options, ...options});
	},

	teamRoster: function(params, options){
		return getDataFromNBA(params, "team_roster", {...default_options, ...options});
	},

	leagueTeamTrackingShots: function(params, options){
		return getDataFromNBA(params, "league_team_tracking_shots", {...default_options, ...options});
	},

	leagueTeamGeneralStats: function(params, options){
		return getDataFromNBA(params, "league_team_general_stats", {...default_options, ...options} );
	},

	allPlayersList: function(params, options){
		return getDataFromNBA(params, "all_players_list", {...default_options, ...options});
	},

	franchiseLeaders: function(params, options){
		return getDataFromNBA(params, "franchise_leaders", {...default_options, ...options});
	},

	franchiseLeadersRank: function(params, options){
		return getDataFromNBA(params, "franchise_leaders_rank", {...default_options, ...options});
	},

	teamGeneralSplits: function(params, options){
		return getDataFromNBA(params, "team_general_splits", {...default_options, ...options});
	},

	teamYearSplits: function(params, options){
		return getDataFromNBA(params, "team_year_splits", {...default_options, ...options});
	},

	teamPerformanceSplits: function(params, options){
		return getDataFromNBA(params, "team_performance_splits", {...default_options, ...options});
	},

	teamClutchSplits: function(params, options){
		return getDataFromNBA(params, "team_clutch_splits", {...default_options, ...options});
	},

	teamInGameSplits: function(params, options){
		return getDataFromNBA(params, "team_in_game_splits", {...default_options, ...options});
	},

	teamLastNGamesSplits: function(params, options){
		return getDataFromNBA(params, "team_lastngames_splits", {...default_options, ...options});
	},

	teamOpponentSplits: function(params, options){
		return getDataFromNBA(params, "team_opponent_splits", {...default_options, ...options});
	},

	teamShootingSplits: function(params, options){
		return getDataFromNBA(params, "team_shooting_splits", {...default_options, ...options});
	},

	teamLineups: function(params, options){
		return getDataFromNBA(params, "team_lineups", {...default_options, ...options});
	},

	teamPlayerStats: function(params, options){
		return getDataFromNBA(params, "team_player_stats", {...default_options, ...options});
	},

	teamPlayerOnOffDetails: function(params, options){
		return getDataFromNBA(params, "team_player_on_off_details", {...default_options, ...options});
	},

	teamPlayerOnOffRatings: function(params, options){
		return getDataFromNBA(params, "team_player_on_off_ratings", {...default_options, ...options});
	},

	teamTrackingShots: function(params, options){
		return getDataFromNBA(params, "team_tracking_shots", {...default_options, ...options});
	},

	teamTrackingReb: function(params, options){
		return getDataFromNBA(params, "team_tracking_reb", {...default_options, ...options});
	},

	teamTrackingPasses: function(params, options){
		return getDataFromNBA(params, "team_tracking_passes", {...default_options, ...options});
	},

	teamBoxScoresTraditional: function(params, options){
		return getDataFromNBA(params, "team_box_scores_traditional", {...default_options, ...options});
	},

	teamBoxScoresAdvanced: function(params, options){
		return getDataFromNBA(params, "team_box_scores_advanced", {...default_options, ...options});
	},

	teamYearByYearStats: function(params, options){
		return getDataFromNBA(params, "team_year_by_year_stats", {...default_options, ...options});
	},

	teamPlayerMatchups: function(params, options){
		return getDataFromNBA(params, "team_player_matchups", {...default_options, ...options});
	},

	leagueTeamDefenseStats: function(params, options){
		return getDataFromNBA(params, "league_team_defense_stats", {...default_options, ...options});
	},

	leagueTeamShootingStats: function(params,options){
		return getDataFromNBA(params, "league_team_shooting_stats", {...default_options, ...options});
	}, 

	leagueTeamOpponentShooting: function(params, options){
		return getDataFromNBA(params, "league_team_opponent_shooting", {...default_options, ...options});
	},

	leagueTeamHustleStats: function(params, options){
		return getDataFromNBA(params, "league_team_hustle_stats", {...default_options, ...options});
	},

	leagueTeamEstimatedAdvancedStats: function(params, options){
		return getDataFromNBA(params, "league_team_estimated_advanced_stats", {...default_options, ...options});
	},

	leagueTeamClutchStats: function(params, options){
		return getDataFromNBA(params, "league_team_clutch_stats", {...default_options, ...options});
	},

	leaguePlayerGeneralStats: function(params, options){
		return getDataFromNBA(params, "league_player_general_stats", {...default_options, ...options});
	},

	leaguePlayerEstimatedAdvancedStats: function(params, options){
		return getDataFromNBA(params, "league_player_estimated_advanced_stats", {...default_options, ...options});
	},

	leaguePlayerClutchStats: function(params, options){
		return getDataFromNBA(params, "league_player_clutch_stats", {...default_options, ...options});
	},

	leaguePlayerTrackingStats: function(params, options){
		return getDataFromNBA(params, "league_player_tracking_stats", {...default_options, ...options});
	},

	leaguePlayerShootingDefense: function(params, options){
		return getDataFromNBA(params, "league_player_shooting_defense", {...default_options, ...options});
	},

	leaguePlayerTrackingShooting: function(params, options){
		return getDataFromNBA(params, "league_player_tracking_shooting", {...default_options, ...options});
	},

	leaguePlayerBoxScoresTraditional: function(params, options){
		return getDataFromNBA(params, "league_player_box_scores_traditional", {...default_options, ...options});
	},

	leaguePlayerBoxScoresAdvanced: function(params, options){
		return getDataFromNBA(params, "league_player_box_scores_advanced", {...default_options, ...options});
	},

	leaguePlayerShotLocations: function(params, options){
		return getDataFromNBA(params, "league_player_shot_locations", {...default_options, ...options});
	},

	leaguePlayerShotLocationDefense: function(params, options){
		return getDataFromNBA(params, "league_player_shot_location_defense", {...default_options, ...options});
	},

	leaguePlayerHustleStats: function(params, options){
		return getDataFromNBA(params, "league_player_hustle_stats", {...default_options, ...options});
	},

	leaguePlayerBioStats: function(params, options){
		return getDataFromNBA(params, "league_player_bio_stats", {...default_options, ...options});
	},

	scoreboard: function(params, options){
		return getDataFromNBA(params, "scoreboard", {...default_options, ...options});
	},

	boxScoreTraditional: function(params, options){
		return getDataFromNBA(params, "box_score_traditional", {...default_options, ...options});
	},

	boxScoreAdvanced: function(params, options){
		return getDataFromNBA(params, "box_score_advanced", {...default_options, ...options});
	},

	boxScoreSummary: function(params, options){
		return getDataFromNBA(params, "box_score_summary", {...default_options, ...options});
	},

	boxScoreScoring: function(params, options){
		return getDataFromNBA(params, "box_score_scoring", {...default_options, ...options});
	},

	boxScoreMisc: function(params, options){
		return getDataFromNBA(params, "box_score_misc", {...default_options, ...options});
	},

	boxScoreUsage: function(params, options){
		return getDataFromNBA(params, "box_score_usage", {...default_options, ...options});
	},

	boxScoreFourFactors: function(params, options){
		return getDataFromNBA(params, "box_score_four_factors", {...default_options, ...options});
	},

	boxScorePlayerTracking: function(params, options){
		return getDataFromNBA(params, "box_score_player_tracking", {...default_options, ...options});
	},

	boxScoreHustle: function(params, options){
		return getDataFromNBA(params, "box_score_hustle", {...default_options, ...options});
	},

	boxScoreDefense: function(params, options){
		return getDataFromNBA(params, "box_score_defense", {...default_options, ...options});
	},

	boxScoreMatchups: function(params, options){
		return getDataFromNBA(params, "box_score_matchups", {...default_options, ...options});
	},

	playByPlay: function(params, options){
		return getDataFromNBA(params, "play_by_play", {...default_options, ...options});
	},

	winProbability: function(params, options){
		return getDataFromNBA(params, "win_probability", {...default_options, ...options});
	},

	infographicFanduelPlayer: function(params, options){
		return getDataFromNBA(params, "infographic_fanduel_player", {...default_options, ...options});
	},

	leagueStandings: function(params, options){
		return getDataFromNBA(params, "league_standings", {...default_options, ...options});
	},

	draftHistory: function(params, options){
		return getDataFromNBA(params, "draft_history", {...default_options, ...options});
	},

	draftCombineSpotUpShooting: function(params, options){
		return getDataFromNBA(params, "draft_combine_spot_up_shooting", {...default_options, ...options});
	},

	draftCombineNonStationaryShooting: function(params, options){
		return getDataFromNBA(params, "draft_combine_nonstationary_shooting", {...default_options, ...options});
	},

	draftCombineDrillResults: function(params, options){
		return getDataFromNBA(params, "draft_combine_drill_results", {...default_options, ...options});
	},

	draftCombinePlayerAnthro: function(params, options){
		return getDataFromNBA(params, "draft_combine_player_anthro", {...default_options, ...options});
	},

	franchiseHistory: function(params, options){
		return getDataFromNBA(params, "franchise_history", {...default_options, ...options});
	},

	playerGameStreakFinder: function(params, options){
		return getDataFromNBA(params, "player_game_streak_finder", {...default_options, ...options});
	},

	teamGameStreakFinder: function(params, options){
		return getDataFromNBA(params, "team_game_streak_finder", {...default_options, ...options});
	},

	leagueGameFinder: function(params, options){
		return getDataFromNBA(params, "league_game_finder", {...default_options, ...options});
	},

	playerSplitsByYear: function(params, options){
		return getDataFromNBA(params, "player_splits_by_year", {...default_options, ...options});
	},

	playerSplits: function(params, options){
		return getDataFromNBA(params, "player_splits", {...default_options, ...options});
	},

	playerCareerStats: function(params, options){
		return getDataFromNBA(params, "player_career_stats", {...default_options, ...options});
	},

	playerAwards: function(params, options){
		return getDataFromNBA(params, "player_awards", {...default_options, ...options});
	},

	playerBoxScores: function(params, options){
		return getDataFromNBA(params, "player_box_scores", {...default_options, ...options});
	},

	playerTrackingShooting: function(params, options){
		return getDataFromNBA(params, "player_tracking_shooting", {...default_options, ...options});
	},

	playerTrackingReb: function(params, options){
		return getDataFromNBA(params, "player_tracking_reb", {...default_options, ...options});
	},

	playerTrackingPasses: function(params, options){
		return getDataFromNBA(params, "player_tracking_passes", {...default_options, ...options});
	},

	playerTrackingDefense: function(params, options){
		return getDataFromNBA(params, "player_tracking_defense", {...default_options, ...options});
	},

	playerMatchups: function(params, options){
		return getDataFromNBA(params, "player_matchups", {...default_options, ...options});
	},

	playerInfo: function(params, options){
		return getDataFromNBA(params, "player_info", {...default_options, ...options});
	},

	fantasyStats: function(params, options){
		return getDataFromNBA(params, "fantasy_stats", {...default_options, ...options});
	},

	leagueLeaders: function(params, options){
		return getDataFromNBA(params, "league_leaders", {formatted: false, parameters: false});
	},

	getPlayerID: function(playerName){
		return players[playerName];
	},

	getTeamID: function(teamName){
		return teams[teamName];
	},		

	getTeamLogoURLs: function(teamAbr){
		return ['https://stats.nba.com/media/img/teams/logos/' + teamAbr + '_logo.svg',
		'https://cdn.nba.net/assets/logos/teams/secondary/web/' + teamAbr + '.svg'];
	},

	getPlayerHeadshotURL: function(params){
		return 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/' 
		+ params.TeamID + '/2019/260x190/' + params.PlayerID + '.png';
	},

	transactions: function(){
		return getDataFromNBA({}, "transactions", {formatted: false, parameters: false});
	},

	schedule: function(year){
		return new Promise(function(resolve, reject){
			axios.get(`https://data.nba.com/data/10s/v2015/json/mobile_teams/nba/${year}/league/00_full_schedule_week.json`)
			.then(function(res){
				resolve(res.data)
			}).catch(function(err){
				reject(err)
			})
		});
	},

	getPBPVideoURL: function(vid){
		return new Promise(function(resolve, reject){
			var url = 'https://stats.nba.com/stats/videoevents?GameEventID=' + vid.EventNum + '&GameID=' + vid.GameID;
			if(typeof window === "undefined"){
				axios.get(url)
				.then((res) => {
					var vidId = res.data.resultSets.Meta.videoUrls[0].uuid;
					return axios.get('https://secure.nba.com/video/wsc/league/' + vidId + '.secure.xml');
				})
				.then((res) => {
					var xmlData = new DOMParser().parseFromString(res.data, "text/xml");
					var files = xmlData.documentElement.getElementsByTagName('file');
					if(vid.Size){
						for(var i = 3; i < files.length; i++){
							if(files[i].firstChild.data.includes(vid.Size)){
								resolve(files[i].firstChild.data);
								break;
							}
						} 
					} else resolve(files[5].firstChild.data);
				}) 
				.catch(function(err){
					console.log(err);
					reject(err)
				});
			} else {
				jsonp(url, null, (err, vidSet) => {
					var vidId = vidSet.resultSets.Meta.videoUrls[0].uuid;
					axios.get('https://secure.nba.com/video/wsc/league/' + vidId + '.secure.xml').then(function(res){
						var xmlData = new DOMParser().parseFromString(res.data, "text/xml");
						var files = xmlData.documentElement.getElementsByTagName('file');
						if(vid.Size){
							for(var i = 3; i < files.length; i++){
								if(files[i].firstChild.data.includes(vid.Size)){
									resolve(files[i].firstChild.data);
									break;
								}
							} 
						} else resolve(files[5].firstChild.data);
					}).catch(function(err){
						console.log(err);
						reject(err)
					});	
				});
			}
		})
	}
};

