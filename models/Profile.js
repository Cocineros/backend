const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const recipeSchema = require('./Recipe');

const profileSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    
    savedRecipes: [recipeSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


profileSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length;
});

const Profile = model('profile', profileSchema);

module.exports = Profile;
