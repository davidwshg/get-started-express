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

  return User;
}