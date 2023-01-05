homeScore = 0;
      let tally = document.getElementById("tally");
      function addOne() {
        homeScore += 1;
        tally.textContent = "Home: " + homeScore;
      }
      function addTwo() {
        homeScore += 2;
        tally.textContent = "Home: " + homeScore;
      }
      function addThree() {
        homeScore += 3;
        tally.textContent = "Home: " + homeScore;
      }
      function reset() {
        homeScore = 0;
        tally.textContent = "Home: " + homeScore;
      }
      function remove(){
        if (homeScore < 0) homeScore = 0;
        if (homeScore > 0)
        homeScore -= 1;
        tally.textContent = "Home: " + homeScore;
      }
      //away
      awayScore = 0;
      let tallyAway = document.getElementById("tallyAway");
      function addOneAway() {
        awayScore += 1;
        tallyAway.textContent = "Away: " + awayScore;
      }
      function addTwoAway() {
        awayScore += 2;
        tallyAway.textContent = "Away: " + awayScore;
      }
      function addThreeAway() {
        awayScore += 3;
        tallyAway.textContent = "Away: " + awayScore;
      }
      function resetAway() {
        awayScore = 0;
        tallyAway.textContent = "Away: " + awayScore;
      }
      function removeAway(){
        if (awayScore < 0) awayScore = 0;
        if (awayScore > 0)
        awayScore -= 1;
        tallyAway.textContent = "Away: " + awayScore;
      }
