import React, { Component , Suspense} from 'react';
const Post = React.lazy(() => import('./sub_components/post'));
let channel_details='https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDxc-Bcwk37RsZmRrSPtD6UoKcBPxW_q2M'
const data_url='https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDxc-Bcwk37RsZmRrSPtD6UoKcBPxW_q2M';
class Main extends Component {
    state = { videos:[] }
    componentDidMount(){
    fetch(data_url).then(res=>res.json())
    .then(data=>{
        this.setState({videos:data.items},()=>{console.log(this.state.videos)});

    })
    
    }

    
    render() {
            
        
        return ( <main>
            <Suspense fallback={<div>Loading...</div>}>
            {this.state.videos.map((dat,index)=><Post key={index} data={dat}/>)}
      </Suspense>
           
           
              
          </main> );
    }
}
 
export default Main;