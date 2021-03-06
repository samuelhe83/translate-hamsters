const db = require('../dbconfig.js');

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  sentences: () => this.belongsToMany(Sentence, 'user_sentences', 'sentence_id', 'user_id'),
  words: () => this.belongsToMany(Word, 'user_words', 'word_id', 'user_id'),
  createdSentence: () => this.hasOne(Sentence),

});

module.exports = User;
