module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      mediaPath: DataTypes.STRING,
    },
    {},
  );
  Post.associate = (models) => {
    // Post belongsTo a User
    Post.belongsTo(models.User);
  };
  return Post;
};
