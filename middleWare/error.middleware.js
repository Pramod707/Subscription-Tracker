const errorMiddleware = (err, req, res, next) => {
  try {
let error = {...err};
error.message = err.message;

//mongoose bad object

if(err.name === 'CastError'){
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new Error(message);
    error.statusCode = 400;
}

//mongoose duplicate key error
if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    error = new Error(message);
    error.statusCode = 400;
}

//mongoose validation error

if(err.name === 'ValidationError'){
    const message = Object.values(err.errors).map((value) => value.message);
    error = new Error(message);
    error.statusCode = 400;
}

    return res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    console.log(error);
  }
};

export default errorMiddleware;
