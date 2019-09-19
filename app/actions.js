/* actions */

module.exports = {
  UPVOTE: "UPVOTE",

  DOWNVOTE: "DOWNVOTE",

  upvote() {
    return {
      type: this.UPVOTE
    };
  },

  downvote() {
    return {
      type: this.DOWNVOTE
    };
  }
};
