const errorHandler = (err, req, res, next) => {
  console.error(`Greška: ${err.message}`);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    error: {
      message: err.message || 'Interna greška na poslužitelju.',
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, 
    },
  });
};

module.exports = errorHandler;
