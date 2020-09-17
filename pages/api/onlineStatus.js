// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var lastUpdate = 0;
var statusObj = 0;

export default (req, res) => {

  if(lastUpdate + 60000 <= Date.now()) {
    //Update
    lastUpdate = Date.now();
  }

  res.statusCode = 200;
  res.json({ lastUpdate: lastUpdate, status: statusObj });
}
