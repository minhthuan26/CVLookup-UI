import React from 'react'
import { styled } from 'styled-components'
import * as FooterComponent from './FooterComponent'

function Footer() {
    return (
        <FooterComponent.Container>
            <FooterComponent.FooterContainer className="padding_4x">
                <FooterComponent.FlexContainer>
                    <FooterComponent.Logo />
                    <FooterComponent.AboutSection />
                    <FooterComponent.ProfileSection />
                    <FooterComponent.DiscoverSection />
                    <FooterComponent.ContactSection />
                </FooterComponent.FlexContainer>
                <FooterComponent.FlexContainer>
                    <FooterComponent.SocialMediaSection />
                    <FooterComponent.CopyrightSection />
                </FooterComponent.FlexContainer>
            </FooterComponent.FooterContainer>
        </FooterComponent.Container>
    )
}

export default Footer
