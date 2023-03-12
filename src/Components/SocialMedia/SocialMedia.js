import React , {Component} from 'react';
import { SocialMediaz , Social , Icon , SocialDesc , Span , SpanInfo } from './style.js';
import axios from 'axios';

class SocialMedia extends Component {
    state = {
        social : []
    };

    componentDidMount () {
         axios.get('js/data.json')
         .then( res => 
            {this.setState( { social : res.data.social } ) } ) };
    render(){
        const {social} = this.state ;
        
        const socialList = social.map( (socialItem)  => {

        return(
                <Social Item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo>{socialItem.body}</SpanInfo>
                    </SocialDesc>
                </Social>
        )
        } )

        return(
            <SocialMediaz id="So">
                {socialList}
            </SocialMediaz>
        )
    }
}



export default SocialMedia;