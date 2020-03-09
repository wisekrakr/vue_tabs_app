const bcrypt = require("bcryptjs");

module.exports = (sequilize, DataTypes) => {
  const User = sequilize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32]
      }
    }
  });

  User.beforeSave(async user => {
    user.password = await user.generatePasswordHash(user);
  });

  User.prototype.generatePasswordHash = async function(user) {
    const saltRounds = 8;
    return await bcrypt.hash(user.password, saltRounds);
  };

  User.prototype.comparePassword = function(password) {
    console.log(password, this.password);
    return bcrypt.compare(password, this.password);
  };

  return User;
};
