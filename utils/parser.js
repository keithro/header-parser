module.exports = {
  parser: function(req) {
    const ipaddress = req.ip.includes(':') ? req.ip.split(':').reverse()[0] : req.ip; // also use: req.connection.remoteAddress;
    const language = req.get('Accept-Language').split(',')[0]; // also use: req.headers["accept-language"]
    const software = req.get('User-Agent').split(/[\(\)]/)[1]; // also use: req.headers["user-agent"]
    
    return {
      ipaddress,
      language,
      software
    }
  }

  
}