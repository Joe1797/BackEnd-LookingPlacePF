import Sequelize from "sequelize";

const sequelize = new Sequelize(
  //"postgres://itdnwfxe:IuRTXnrtJTsdSuw3we5ArdeQ9_ctVbvU@fanny.db.elephantsql.com/itdnwfxe",
  // postgres://user:pass@example.com:5432/dbname
  "postgres://postgres:zVU4TxXaHikUgiyyHzek@containers-us-west-19.railway.app:5907/railway",
  {
    logging: false,
  }
);

export default sequelize;
