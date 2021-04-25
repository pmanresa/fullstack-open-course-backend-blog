const totalLikes = (blogs) => {
  return blogs.reduce(function (totalSum, blog) {
    return totalSum + blog.likes;
  }, 0);
};

module.exports = {
  totalLikes,
};
