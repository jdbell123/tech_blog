const sequelize = require('../config/connection');
const { User, Blogs, Comments } = require('../models');

const userData = require('./userData.json');
const blogsData = require('./blogsData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogs of blogsData) {
    await Blogs.create({
      ...blogs,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comments of commentsData) {
    await Comments.create({
      ...comments,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
