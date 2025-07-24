    const errorMiddleware = (err,req,res,next)=>{
        try {
            
            return res.status(500).json({
                message : err.message
            })

        } catch (error) {
              console.log(error);
        }
    }