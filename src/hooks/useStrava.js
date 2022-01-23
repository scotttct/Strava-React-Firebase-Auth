// import axios from 'axios'
// import { useEffect } from 'react'




// export default function useStrava(res) {
    

//     useEffect(() => {
//         const clientId = process.env.REACT_APP_CLIENT_ID
//         const clientSecret = process.env.REACT_APP_CLIENT_SECRET
//         const code = res.code
//         const activities_link = `https://www.strava.com/api/v3/athlete/activities`
//         async function fetchData() {
//             const stravaAuthResponse = await axios.all([
//                 axios.post`https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`]
//             );
//             const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`)
//             console.log(stravaActivityResponse)
//         }
//         fetchData()
//     }, []);


//   return 
// }

 
        
   
    
    

