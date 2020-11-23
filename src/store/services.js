import axios from "axios"
const newPluginXXXX = axios.create({
  baseURL: "https://a.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const aUTHTEST = axios.create({
  baseURL: "https://a.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newpluginxxxx_post__create(action) {
  return newPluginXXXX.post(`/`, null, {
    data: action.data,
    params: { new_param_4: action.new_param_4 }
  })
}
export const apiService = { newpluginxxxx_post__create }
