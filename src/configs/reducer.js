import {
  sfmAssessment,
  vaultAssessment,
  sfmAssessmentPaths,
  vaultAssessmentPaths,
  sfmAssessmentMessage,
  vaultAssessmentMessage,
} from "./test";

// DataLayer
export const initialState = {
  questionNum: 1,
  test: null,
  answers: [],
  submit: false,
  contactId: false,
  recommended: null,
  message: null,
  activePath: null,
};

// Remove Item From List
const removeFromList = (listData, id) => {
  const newList = listData.filter((item) => item.id !== id);
  return newList;
};

// SFM Assessment Filter Answers
const sfmAssessmentFilter = (answers) => {
  let recommended = sfmAssessmentPaths;
  let message = sfmAssessmentMessage;

  if (answers[1] === 1) {
    recommended = removeFromList(recommended, 2);
  }
  if (answers[2] === 1) {
    recommended = removeFromList(recommended, 3);
  }
  if (answers[3] !== 1) {
    recommended = removeFromList(recommended, 4);
  }
  if (answers[4] !== 1) {
    recommended = removeFromList(recommended, 5);
  }
  if (answers[4] !== 2) {
    recommended = removeFromList(recommended, 6);
  }
  if (answers[4] !== 4) {
    recommended = removeFromList(recommended, 7);
  }
  if (answers[4] !== 6) {
    recommended = removeFromList(recommended, 8);
  }
  if (answers[5] === 2) {
    recommended = removeFromList(recommended, 9);
  }
  if (answers[6] === 1) {
    recommended = removeFromList(recommended, 10);
  }
  return [recommended, message];
};

// Vault Assessment Filter Answers
const vaultAssessmentFilter = (answers) => {
  let recommended = vaultAssessmentPaths;
  let message = vaultAssessmentMessage;
  recommended.forEach(path => {
    path.score = 0;
  });

  // Score Increased
  // A[0], E[1], C[2], P[3], Fo[4], Fr[5], YT[6], B[7]
  // Question 1
  if (answers[0] > 3) {
    recommended[4].score += 1; // Forex
    recommended[1].score += 1; // Ecommerce
    recommended[0].score += 1; // Affiliate
  } else if (answers[0] < 3) {
    recommended[0].score -= 1; // Affiliate
    recommended[1].score -= 1; // Ecommerce
  }
  // Question 2
  if (answers[1] === 1) {
    recommended[5].score += 2; // Freelance
    recommended[6].score += 2; // YouTube
    recommended[7].score += 2; // Blog
    recommended[2].score += 1; // Coaching
  }
  // Question 3
  if (answers[2] > 3) {
    recommended[3].score += 2; // Property
    recommended[4].score += 2; // Forex
  } else if (answers[2] < 3) {
    recommended[3].score -= 2; // Property
    recommended[4].score -= 2; // Forex
  }
  // Question 4 => No Scoring
  // Question 5
  if (answers[4] === 1) {
    recommended[1].score += 1; // Ecommerce
    recommended[2].score += 2; // Coaching
    recommended[6].score += 2; // YouTube
    recommended[7].score += 2; // Blog
    recommended[5].score += 2; // Freelance
  } else if (answers[4] === 0) {
    recommended[0].score += 1; // Affiliate
    recommended[3].score += 1; // Property
    recommended[4].score += 1; // Forex
  }
  // Question 6
  if (answers[5] === 1) {
    recommended[1].score += 2; // Ecommerce
    recommended[2].score += 2; // Coaching
    recommended[5].score += 1; // Freelance
  } else if (answers[5] === 0) {
    recommended[0].score += 1; // Affiliate
  }
  // Question 7 => No Scoring
  // Question 8
  if (answers[7][0] === 1) {
    recommended[0].score += 2; // Affiliate
    recommended[1].score += 2; // Ecommerce
    recommended[5].score += 2; // Freelance
    recommended[6].score += 2; // YouTube
    recommended[7].score += 2; // Blog
    recommended[4].score += 2; // Forex
  }
  if (answers[7][1] === 1) {
    recommended[3].score += 3; // Property
  }
  if (answers[7][2] === 1) {
    recommended[2].score += 3; // Coaching
  }
  if (answers[7][3] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[2].score += 1; // Coaching
    recommended[6].score += 2; // YouTube
    recommended[7].score += 2; // Blog
  }
  if (answers[7][4] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[5].score += 2; // Freelance
    recommended[6].score += 2; // YouTube
    recommended[7].score += 2; // Blog
  }
  if (answers[7][5] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[1].score += 1; // Ecommerce
    recommended[4].score += 3; // Forex
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  // Question 9
  if (answers[8][0] === 1) {
    recommended[3].score -= 2; // Property
    recommended[4].score -= 1; // Forex
  }
  if (answers[8][1] === 1) {
    recommended[2].score -= 2; // Coaching
    recommended[5].score -= 2; // Freelance
  }
  if (answers[8][2] === 1) {
    recommended[1].score -= 3; // Ecommerce
  }
  if (answers[8][3] === 1) {
    recommended[2].score -= 3; // Coaching
    recommended[3].score -= 1; // Property
    recommended[5].score -= 1; // Freelance
  }
  if (answers[8][4] === 1) {
    recommended[0].score -= 1; // Affiliate
    recommended[2].score -= 1; // Coaching
    recommended[3].score -= 1; // Property
    recommended[6].score -= 1; // YouTube
    recommended[7].score -= 1; // Blog
  }
  // Question 10
  if (answers[9][0] === 1) {
    recommended[2].score += 2; // Coaching
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  if (answers[9][1] === 1) {
    recommended[0].score += 2; // Affiliate
    recommended[1].score += 2; // Ecommerce
    recommended[2].score += 1; // Coaching
    recommended[5].score += 1; // Freelance
  }
  if (answers[9][2] === 1) {
    recommended[1].score += 3; // Ecommerce
  }
  if (answers[9][3] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[2].score += 1; // Coaching
    recommended[5].score += 1; // Freelance
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  if (answers[9][4] === 1) {
    recommended[0].score += 3; // Affiliate
    recommended[1].score += 2; // Ecommerce
  }
  if (answers[9][5] === 1) {
    recommended[3].score += 5; // Property
  }
  if (answers[9][6] === 1) {
    recommended[4].score += 3; // Forex
  }
  // Question 11
  // Answer 1 => No Scoring
  // Answer 2 => No Scoring
  if (answers[10][2] === 1) {
    recommended[3].score -= 1; // Property
  }
  if (answers[10][3] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[1].score += 1; // Ecommerce
    recommended[2].score += 1; // Coaching
    recommended[5].score += 1; // Freelance
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  if (answers[10][4] === 1) {
    recommended[2].score -= 2; // Coaching
    recommended[5].score -= 2; // Freelance
  }
  if (answers[10][5] === 1) {
    recommended[0].score += 1; // Affiliate
    recommended[2].score += 2; // Coaching
    recommended[3].score += 1; // Property
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  if (answers[10][6] === 1) {
    recommended[2].score += 1; // Coaching
    recommended[3].score += 1; // Property
    recommended[4].score -= 1; // Forex
    recommended[5].score += 1; // Freelance
    recommended[6].score += 1; // YouTube
    recommended[7].score += 1; // Blog
  }
  // Score Decreased

  // Temporary Elimination
  recommended = removeFromList(recommended, 7); // YouTube (Influencer)
  recommended = removeFromList(recommended, 8); // Blog (Influencer)

  // Sort Recommended by Score
  recommended.sort(function (a, b) {
    return b.score - a.score;
  });

  // Eliminate Low Scores
  console.log(recommended);
  let removeId = [];

  for (let i = 3; i < recommended.length; i++) {
    if (recommended[i].score < 3) {
      removeId.push(recommended[i].id);
    }
  }

  removeId.forEach(id => {
    recommended = removeFromList(recommended, id);
  });

  return [recommended, message];
};

// Recommended Paths Filter VAULT Logic

// onClick Event Handler
const reducer = (state, action) => {
  switch (action.type) {
    case "ANSWER":
      state.answers[state.questionNum - 1] = action.answer;

      return {
        ...state,
        answers: state.answers,
      };

    case "NEXT_QUESTION":
      if (state.questionNum === state.test.questions.length) {
        return {
          ...state,
          submit: true,
          questionNum: state.questionNum + 1,
        };
      }
      if (state.questionNum > state.test.questions.length) {
        return state;
      }
      return {
        ...state,
        questionNum: state.questionNum + 1,
      };

    case "PREVIOUS_QUESTION":
      if (state.questionNum === 1) {
        return state;
      }
      if (state.questionNum > state.test.questions.length) {
        return {
          ...state,
          submit: false,
          questionNum: state.questionNum - 1,
        };
      }
      return {
        ...state,
        questionNum: state.questionNum - 1,
      };

    case "SUBMIT":
      let sessionTest = sessionStorage.getItem("sessionTest");
      let recommended = "";
      let message = "";
      if (sessionTest === "sfm-assessment") {
        [recommended, message] = sfmAssessmentFilter(state.answers);
      } else if (sessionTest === "vault-assessment") {
        [recommended, message] = vaultAssessmentFilter(state.answers);
      }
      return {
        ...state,
        recommended: recommended,
        message: message,
      };

    case "PATH_SELECTED":
      return {
        ...state,
        activePath: action.path,
      };

    case "SET_CONTACT_ID":
      return {
        ...state,
        contactId: true,
      };

    case "SET_TEST":
      let tempTest;
      if (action.test === "sfm-assessment") {
        tempTest = sfmAssessment;
      } else if (action.test === "vault-assessment") {
        tempTest = vaultAssessment;
      }

      return {
        ...state,
        test: tempTest,
      };

    default:
      return state;
  }
};

export default reducer;
