export default (sequelize, Sequelize) => {
  const User = sequelize.define('user',
    {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  User.sync({ force: true }).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  return User;
}