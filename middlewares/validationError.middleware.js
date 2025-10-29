function validationError(err, req, res, next) {
  if (err.name !== 'ValidatorError') return next(err);
  
  const errors = Object.values(err.details).map(({ params, message }) => ({
    param: params.join('.'),
    msg: message
  }));

  res.status(400).json({ validation: { errors } });
}

module.exports = validationError;