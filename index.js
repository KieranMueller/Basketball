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
      //djdjdjdjd
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