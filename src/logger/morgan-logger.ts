import morgan from "morgan"

export default morgan(':date[iso] :method :url :status :response-time ms')