import React , {useState , useEffect} from 'react';
import { ProfileSkills , ProfileSection , Title , TitleSpan , ProfileList , ProfileItem , ProfileSpan , SpanWeb , SkillsSection , SkillsDesc , SkillsBar , BarTitle , BarPerc , BarParent , BarParentSpan} from './style.js'
import axios from 'axios';

const Profile = () => {
    
    const [ profiles , setProfiles ] = useState([]);
       
    useEffect( () => {
        axios.get('js/data.json').then( res => {setProfiles(res.data.profiles)});
        
    },[])

    const ProfileContent = (profiles).map((profilesItem)=>{
        return(
            <SkillsBar key={profilesItem.id}>
                <BarTitle>{profilesItem.title}</BarTitle>
                    <BarPerc>{profilesItem.perc}</BarPerc>
                        <BarParent>
                            <BarParentSpan num={profilesItem.id}></BarParentSpan>
                        </BarParent>
            </SkillsBar>
        )
        } )

    return(
        <ProfileSkills id="Pr">
            <div className="container">
                <ProfileSection>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            Abdelrahman Elgmmal
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Birthday</ProfileSpan>
                            00/00/0000
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Address</ProfileSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Phone</ProfileSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Email</ProfileSpan>
                            elgmmal@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Website</ProfileSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {ProfileContent}
                    
                </SkillsSection>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile;