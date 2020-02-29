import { Model, DataTypes } from 'sequelize'
import { sequelize } from './'

export interface IUser {
  firstName: string
  lastName: string
  email: string
}

export class User extends Model implements IUser {
  public firstName!: string
  public lastName!: string
  public email!: string
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: true
  }
}, {
  tableName: 'Users',
  sequelize: sequelize,
});
