import * as Sequelize from 'sequelize'

const db = 'expressapp'
const username = 'admin'
const password = 'admin'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "postsql",
  port: 3306,
});

sequelize.authenticate()