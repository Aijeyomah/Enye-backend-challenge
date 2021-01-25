import axios from 'axios'
const exchangeRateApi = async (req, res, next) => {
  try{
    const {base, symbols} = req.query;
  const exchangeRateUrl = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
  const data = await axios.get(exchangeRateUrl);
  if(data){
    return res.status(200).send({
      results : data.data
    })
  }
   return res.status(200).send({
      results : data.data
    })
  
  }
  catch(error){
   error.status = 500;
    next(error);
  }
}

export default exchangeRateApi