module.export.mainRoute = (req, res) => {
  try{
    return res.status(200).json({"message": "Working."})
  }catch{
    return res.status(400).json({"message": "Error."})
  }
}