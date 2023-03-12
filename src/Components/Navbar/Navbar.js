import React from 'react';
import {Link} from 'react-scroll';
import { NavbarSection , Logo , LogoText , Input, LabelOne, LabelTwo , Label , UlList , ListItem , LinkNav } from"./style.js"

const Navbar = () => {
    
    return(
        <NavbarSection>
            <div className="container">
                
                <Logo>
                <LinkNav to="/"><LogoText primary>Pro</LogoText></LinkNav>
                </Logo>
               <React.Fragment>

                    <LabelOne>
                        <Input  type="checkbox" id="nav"/>
                        <Label htmlFor="nav"></Label>
                        
                        <LabelTwo>
                       
                            <UlList>
                                <ListItem><LinkNav to="/" activeClass="active" >Home</LinkNav></ListItem>

                                <ListItem><LinkNav> <Link to="Wo" spy={true} smooth={true} offset={100} duration={700} >Work</Link> </LinkNav></ListItem>

                                <ListItem><LinkNav> <Link to="Po" spy={true} smooth={true} offset={1} duration={700} >Portfolio</Link> </LinkNav></ListItem>

                                <ListItem><LinkNav> <Link to="Pr" spy={true} smooth={true} offset={30} duration={700} >Profile</Link> </LinkNav></ListItem>
                                
                                <ListItem><LinkNav> <Link to="Ab" spy={true} smooth={true} offset={30} duration={700} >About</Link> </LinkNav></ListItem>
                                
                                <ListItem> <LinkNav to="./Contact">Contact</LinkNav> </ListItem>
                            </UlList>
                        
                        </LabelTwo>
                    </LabelOne>

                </React.Fragment>
            </div>
        </NavbarSection>
    )
}

export default Navbar;
