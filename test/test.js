const expect = require("chai").expect;
const app = require('../index');

var firstKey = function(data){
	return Object.keys(data)[0];
}

//***IMPORTANT****
//NBA api throttles calls after multiple successive requests
//so dont test all, test in chunks  

describe('Getting NBA Data', function(){
	it('fantasyStats', function(){
	 	return app.fantasyStats({"TeamID": 1610612759}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
	 	});
	 })

	it('teamDetails', function(){
		return app.teamDetails({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamRoster', function(){
		return app.teamRoster({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('franchiseLeaders', function(){
		return app.franchiseLeaders({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('franchiseLeadersRank', function(){
		return app.franchiseLeadersRank({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamGeneralSplits', function(){
		return app.teamGeneralSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamShootingSplits', function(){
		return app.teamShootingSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamLineups', function(){
		return app.teamLineups({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamPlayerStats', function(){
		return app.teamPlayerStats({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamPlayerOnOffDetails', function(){
		return app.teamPlayerOnOffDetails({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamPlayerOnOffRatings', function(){
		return app.teamPlayerOnOffRatings({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamTrackingShots', function(){
		return app.teamTrackingShots({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamTrackingReb', function(){
		return app.teamTrackingReb({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamTrackingPasses', function(){
		return app.teamTrackingPasses({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamBoxScoresTraditional', function(){
		return app.teamBoxScoresTraditional({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamBoxScoresAdvanced', function(){
		return app.teamBoxScoresAdvanced({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamYearByYearStats', function(){
		return app.teamYearByYearStats({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamPlayerMatchups', function(){
		return app.teamPlayerMatchups({OffTeamID: 1610612742, DefTeamID: 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('allPlayersList', function(){
		return app.allPlayersList({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamTrackingShots', function(){
		return app.leagueTeamTrackingShots({}, {formatted: false, parameters: false}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamGeneralStats', function(){
		return app.leagueTeamGeneralStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamDefenseStats', function(){
		return app.leagueTeamDefenseStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamShootingStats', function(){
		return app.leagueTeamShootingStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamOpponentShooting', function(){
		return app.leagueTeamOpponentShooting({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamHustleStats', function(){
		return app.leagueTeamHustleStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamEstimatedAdvancedStats', function(){
		return app.leagueTeamEstimatedAdvancedStats({}, {formatted: false}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueTeamClutchStats', function(){
		return app.leagueTeamClutchStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerGeneralStats', function(){
		return app.leaguePlayerGeneralStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerEstimatedAdvancedStats', function(){
		return app.leaguePlayerEstimatedAdvancedStats({}, {formatted: false}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leaguePlayerClutchStats', function(){
		return app.leaguePlayerClutchStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerTrackingStats', function(){
		return app.leaguePlayerTrackingStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerShootingDefense', function(){
		return app.leaguePlayerShootingDefense({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerShotLocationDefense', function(){
		return app.leaguePlayerShotLocationDefense({}, {formatted: false}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerTrackingShooting', function(){
		return app.leaguePlayerTrackingShooting({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerBoxScoresTraditional', function(){
		return app.leaguePlayerBoxScoresTraditional({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('leaguePlayerBoxScoresAdvanced', function(){
		return app.leaguePlayerBoxScoresAdvanced({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leaguePlayerShotLocations', function(){
		return app.leaguePlayerShotLocations({}, {formatted: false}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leaguePlayerHustleStats', function(){
		return app.leaguePlayerHustleStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leaguePlayerBioStats', function(){
		return app.leaguePlayerBioStats({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('scoreboard', function(){
		return app.scoreboard({GameDate: '2/12/2019'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})	

	it('boxScoreTraditional', function(){
		return app.boxScoreTraditional({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreAdvanced', function(){
		return app.boxScoreAdvanced({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreSummary', function(){
		return app.boxScoreSummary({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreScoring', function(){
		return app.boxScoreScoring({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreMisc', function(){
		return app.boxScoreMisc({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreUsage', function(){
		return app.boxScoreUsage({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreFourFactors', function(){
		return app.boxScoreFourFactors({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScorePlayerTracking', function(){
		return app.boxScorePlayerTracking({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreHustle', function(){
		return app.boxScoreHustle({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreDefense', function(){
		return app.boxScoreDefense({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('boxScoreMatchups', function(){
		return app.boxScoreMatchups({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('winProbability', function(){
		return app.winProbability({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('infographicFanduelPlayer', function(){
		return app.infographicFanduelPlayer({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueStandings', function(){
		return app.leagueStandings({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('draftHistory', function(){
		return app.draftHistory({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('draftCombineSpotUpShooting', function(){
		return app.draftCombineSpotUpShooting({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('draftCombineNonStationaryShooting', function(){
		return app.draftCombineNonStationaryShooting({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('draftCombineDrillResults', function(){
		return app.draftCombineDrillResults({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('draftCombinePlayerAnthro', function(){
		return app.draftCombinePlayerAnthro({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('franchiseHistory', function(){
		return app.franchiseHistory({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerGameStreakFinder', function(){
		return app.playerGameStreakFinder({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamGameStreakFinder', function(){
		return app.teamGameStreakFinder({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueGameFinder', function(){
		return app.leagueGameFinder({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerSplitsByYear', function(){
		return app.playerSplitsByYear({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerSplits', function(){
		return app.playerSplits({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerCareerStats', function(){
		return app.playerCareerStats({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerAwards', function(){
		return app.playerAwards({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerBoxScores', function(){
		return app.playerBoxScores({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerTrackingShooting', function(){
		return app.playerTrackingShooting({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerTrackingReb', function(){
		return app.playerTrackingReb({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerTrackingPasses', function(){
		return app.playerTrackingPasses({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerTrackingDefense', function(){
		return app.playerTrackingDefense({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerMatchups', function(){
		return app.playerMatchups({OffPlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playerInfo', function(){
		return app.playerInfo({PlayerID: 2544}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('leagueLeaders', function(){
		return app.leagueLeaders({}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('getPlayerID', function(){
		expect(app.getPlayerID("James Harden").PlayerID).to.equal(201935);
	})

	it('getTeamID', function(){
		expect(app.getTeamID("Houston Rockets").TeamID).to.equal(1610612745);

	})

	it('getTeamLogoURLs', function(){
		expect(app.getTeamLogoURLs("HOU")).to.eql(['https://stats.nba.com/media/img/teams/logos/HOU_logo.svg',
			'https://cdn.nba.net/assets/logos/teams/secondary/web/HOU.svg']);
	})

	it('getPlayerHeadshotURL', function(){
		expect(app.getPlayerHeadshotURL({PlayerID: 201935, TeamID: 1610612745})).to.equal(
			'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612745/2018/260x190/201935.png');
	})

	it('teamYearSplits', function(){
		return app.teamYearSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamPerformanceSplits', function(){
		return app.teamPerformanceSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamClutchSplits', function(){
		return app.teamClutchSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamInGameSplits', function(){
		return app.teamInGameSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamLastNGamesSplits', function(){
		return app.teamLastNGamesSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('teamOpponentSplits', function(){
		return app.teamOpponentSplits({"TeamID": 1610612745}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})


	it('schedule', function(){
		return app.schedule().then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		})
	})

	it('transactions', function(){
		return app.transactions().then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('playByPlay', function(){
		return app.playByPlay({GameID: '0021800848'}).then(function(data){
			expect(data[firstKey(data)]).to.not.be.empty;
		});
	})

	it('getPBPVideoURL', function(){
		return app.getPBPVideoURL({EventNum: 731, GameID: '0021800848', Size: '1280x720'}).then(function(data){
			expect(data).to.equal('https://ssl.cdn.turner.com/nba/big/nba/wsc/2019/02/13/01d9b228-e553-c8ed-0c07-5a6f23fb15ba.nba_3317649_1280x720_3500.mp4');
		});
	})
});
