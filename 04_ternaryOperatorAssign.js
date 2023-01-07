console.log(`-------------Check TCS Eligibility Criteria ---------------`);

function eligibilityTCS(gradScore, hscScore, sscScore, candidateName) {
    var eligibility = ((gradScore < 0 || gradScore > 100) || (hscScore < 0 || hscScore > 100) || (sscScore < 0 || sscScore > 100)) ? `Invalid Input ${candidateName} Pleade chek it` : ((gradScore >= 70 || hscScore >= 80 || sscScore >= 90) ? `Congrates ${candidateName} you are eligible for TCS Interview` : `Unfortunately ${candidateName} you are Not eligible for Interview`)
    console.log(eligibility);
}
eligibilityTCS(80, 86, 90, "Sitaram");
eligibilityTCS(70, 65, 55, "Sachin");
eligibilityTCS(60, 79, 88, "Sandip");
eligibilityTCS(110, 79, 88, "Sagar");



console.log(`----------Check Eligibility for Voting -----------`);

function eligibilityVoting(age) {
    var eligible = (age <= 0 || age >= 120) ? `${age} is Invalid Age` : ((age >= 18) ? `Yes You are Eligible for Vote` : `Sorry You May be Eligible for vote Next Year`)
    console.log(eligible);
}
eligibilityVoting(45);
eligibilityVoting(17);
eligibilityVoting(8);
eligibilityVoting(20);
eligibilityVoting(-10);
eligibilityVoting(200);
eligibilityVoting(0);
