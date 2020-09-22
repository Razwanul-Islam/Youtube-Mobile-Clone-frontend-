import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons'
function channel_p(id){
  let plink='';
  fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='+id+'&key=AIzaSyDxc-Bcwk37RsZmRrSPtD6UoKcBPxW_q2M').then(res=>res.json())
  .then(data=>{
      plink=data.items[0].snippet.thumbnails.default.url;
      return plink;
  })  
}
class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="post">
        <div className="cover">
        <img src={this.props.data.snippet.thumbnails.medium.url} alt="" />
        <span className="duration">Defult</span>
      </div>
      <div className="des">
        <div className="profile-pic"><img src={channel_p(this.props.data.snippet.channelId)} alt="" /></div>
        <div className="ts">
          <div className="title">{this.props.data.snippet.localized.title}</div>
          <div className="lower-des">
            <div className="cname">{this.props.data.snippet.channelTitle}</div>
            <div className="views">{this.props.data.statistics.viewCount} Views</div>
            <div className="time">{''}</div>
          </div>
        </div>
        <div className="toggler"><FontAwesomeIcon icon={faEllipsisV}/></div>
      </div>
    </div> );
    }
}
 
export default Post;