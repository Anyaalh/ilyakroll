import React from 'react';
import styled from "styled-components";
import {theme} from "../../../assets/styles/Theme";

export const Information = () => {
    return (
        <StyledInformation>
            <FirstColumn>
                <Title><span>Илья</span> кролик</Title>
                <p>Ну что, кролсик, вот и все доказательства твоей кролиной натуры представлены. Пушистожопикс, литл
                    рэбит, огородный вредитель, любитель морковки, капусточки и клевера. Это все ты</p>
            </FirstColumn>
            <Column>
                <ul>Навигация
                    <li>Контакты</li>
                    <li>О тебе</li>
                    <li>Галерея</li>
                    <li>Интересный факт</li>
                </ul>
            </Column>

            <Column>
                    <ul>Напоминание ты:
                        <li>Любишь морковку</li>
                        <li>Далеко прыгаешь</li>
                        <li>Хорошо слышишь</li>
                        <li>Кушаешь клевер</li>
                    </ul>
            </Column>

            <Column>
                    <ul>О сайте
                        <li>Только правда</li>
                        <li>Все о тебе</li>
                        <li>Настоящий ты</li>
                        <li>Твой сайт</li>
                    </ul>
            </Column>

            <LastColumn>
                <p>Социальные сети</p>
                <SvgContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                    <g filter="url(#filter0_d_1_404)">
                        <circle cx="32.9999" cy="19.9998" r="20" fill="url(#paint0_linear_1_404)"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6157 20.5444H33.9529V30.2995V30.2995H29.9187V20.5444H27.9999V17.1161H29.9187V14.8976C29.9187 13.3112 30.6723 10.8269 33.9888 10.8269L36.9772 10.8394V14.1672H34.8089C34.4533 14.1672 33.9532 14.3449 33.9532 15.1017V17.1193H36.9681L36.6157 20.5444Z" fill="white"/>
                    <defs>
                        <filter id="filter0_d_1_404" x="-6.10352e-05" y="-0.000244141" width="56" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="-5" dy="9"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.188235 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_404"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_404" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_404" x1="-6.75315" y1="19.7528" x2="32.753" y2="59.259" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#C8DCFF"/>
                            <stop offset="0.993827" stop-color="#004ACB"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                    <g filter="url(#filter0_d_1_407)">
                        <circle cx="32.9999" cy="19.9998" r="20" fill="url(#paint0_linear_1_407)"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0445 22.0284L27.4093 24.3999L25.0874 24.449C24.3935 23.162 23.9999 21.6895 23.9999 20.1247C23.9999 18.6116 24.3679 17.1847 25.0202 15.9282H25.0207L27.0878 16.3072L27.9933 18.3619C27.8038 18.9144 27.7005 19.5075 27.7005 20.1247C27.7006 20.7946 27.8219 21.4363 28.0445 22.0284Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0906 18.4199C42.1954 18.9719 42.25 19.542 42.25 20.1246C42.25 20.7779 42.1813 21.4151 42.0505 22.0298C41.6063 24.1215 40.4456 25.948 38.8377 27.2406L38.8372 27.2401L36.2336 27.1072L35.8651 24.8069C36.932 24.1812 37.7658 23.202 38.205 22.0298H33.3256V18.4199H38.2762H42.0906Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.837 27.2403L38.8375 27.2408C37.2737 28.4978 35.2873 29.2498 33.1249 29.2498C29.6498 29.2498 26.6286 27.3075 25.0873 24.4492L28.0444 22.0286C28.815 24.0852 30.799 25.5492 33.1249 25.5492C34.1246 25.5492 35.0612 25.279 35.8649 24.8072L38.837 27.2403Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9494 13.1005L35.9933 15.5206C35.1615 15.0007 34.1783 14.7004 33.1249 14.7004C30.7464 14.7004 28.7253 16.2316 27.9933 18.3619L25.0207 15.9283H25.0202C26.5389 13.0002 29.5982 10.9998 33.1249 10.9998C35.339 10.9998 37.369 11.7884 38.9494 13.1005Z" fill="white"/>
                    <defs>
                        <filter id="filter0_d_1_407" x="-6.10352e-05" y="-0.000244141" width="56" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="-5" dy="9"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.188235 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_407"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_407" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_407" x1="-13.4198" y1="18.8833" x2="24.3472" y2="71.7228" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFB6B6"/>
                            <stop offset="1" stop-color="#F62B19"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                    <g filter="url(#filter0_d_1_414)">
                        <circle cx="32.9999" cy="19.9998" r="20" fill="url(#paint0_linear_1_414)"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7396 15.2036C42.2847 15.9066 41.7093 16.4974 41.0434 16.9998C40.9115 17.0994 40.8692 17.1981 40.8736 17.3659C40.9196 19.1526 40.5308 20.8485 39.7595 22.4554C38.8373 24.3768 37.4948 25.9325 35.6758 27.0597C34.3853 27.8595 32.9795 28.3353 31.476 28.5365C30.4164 28.6784 29.3573 28.6813 28.3012 28.5295C26.7705 28.3095 25.3459 27.79 24.0374 26.9606C24.0283 26.9548 24.0225 26.9437 23.9999 26.9173C26.0816 27.1075 27.9521 26.5974 29.645 25.3252C27.8814 25.1692 26.7056 24.2802 26.0434 22.6317C26.6341 22.6964 27.1842 22.7149 27.7528 22.5536C25.5217 22 24.6279 20.024 24.7233 18.7481C24.9909 18.85 25.253 18.9721 25.5278 19.0481C25.8022 19.124 26.0894 19.1539 26.3835 19.1807C25.5847 18.5676 25.0465 17.7958 24.8288 16.8167C24.6122 15.8421 24.7672 14.9222 25.2562 14.0339C27.3484 16.4963 29.9849 17.8526 33.2114 18.0727C33.1898 17.8221 33.1597 17.5881 33.151 17.3533C33.0809 15.4453 34.3381 13.7942 36.1997 13.4078C37.5122 13.1353 38.6798 13.4765 39.6652 14.3938C39.7813 14.5018 39.877 14.5361 40.034 14.4979C40.7467 14.3245 41.4293 14.0769 42.071 13.7198C42.1235 13.6906 42.1781 13.665 42.2695 13.6185C41.9726 14.5207 41.4296 15.1812 40.6888 15.7264C40.9148 15.6847 41.1425 15.6504 41.3663 15.5991C41.5928 15.5472 41.8178 15.4852 42.0395 15.4153C42.2671 15.3435 42.49 15.2569 42.715 15.1768C42.7225 15.1863 42.7307 15.1953 42.7396 15.2036Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8863 13.0098C30.9039 13.0064 30.9215 13.0031 30.9391 12.9998C30.9316 13.0173 30.9241 13.0349 30.9165 13.0525C30.9057 13.0392 30.8955 13.025 30.8863 13.0098Z" fill="#04A9F3"/>
                    <defs>
                        <filter id="filter0_d_1_414" x="-6.10352e-05" y="-0.000244141" width="56" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="-5" dy="9"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.188235 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_414"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_414" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_414" x1="-12.6376" y1="22.3677" x2="32.0982" y2="73.6428" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="#00B99E"/>
                        </linearGradient>
                    </defs>
                </svg>
                </SvgContainer>
                <p>Позвонить</p>
                <SvgContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                        <g filter="url(#filter0_d_1_427)">
                            <circle cx="32.9999" cy="19.9998" r="20" fill="#EDA306"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9739 23.3925C38.5121 23.0791 37.9054 23.0807 37.4453 23.3965L36.7828 23.8512C36.0449 24.3577 35.0635 24.3301 34.3543 23.7843C33.6858 23.2698 33.0478 22.7181 32.4419 22.1335C31.8573 21.5277 31.3057 20.8897 30.7911 20.2212C30.2452 19.512 30.2178 18.5306 30.7242 17.7927L31.1789 17.1302C31.4947 16.6701 31.4963 16.0634 31.1829 15.6016L29.2866 12.8069C28.7627 12.035 27.743 11.7763 26.9159 12.2079L26.9154 12.2081C25.2446 13.0798 24.5436 15.0956 25.3091 16.8177C26.411 19.2966 27.8906 21.5641 29.6762 23.5498L31.0257 24.8993C33.0114 26.6848 35.2789 28.1644 37.7578 29.2663C39.4799 30.0319 41.4956 29.3309 42.3673 27.6601L42.3676 27.6595C42.7991 26.8325 42.5405 25.8127 41.7685 25.2889L38.9739 23.3925Z" fill="white"/>
                        <defs>
                            <filter id="filter0_d_1_427" x="-6.10352e-05" y="-0.000244141" width="56" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="-5" dy="9"/>
                                <feGaussianBlur stdDeviation="4"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.188235 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_427"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_427" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </SvgContainer>
            </LastColumn>

        </StyledInformation>
    );
};

const StyledInformation = styled.section`
  height: 250px;
  background-image: linear-gradient(65deg, #18104A 10%, #201560 10%, #201560 20%, #18104A 20%, #18104A 65%, #201560 65%, #201560 75%, #18104A 75%);

  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Title = styled.h3`

  font-family: Nova Script, sans-serif;
  font-size: 23px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${theme.colors.primaryBg};

  span {
    color: ${theme.colors.secondaryBg}
  }
`

const FirstColumn = styled.div`
  height: 170px;
  max-width: 315px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    color: ${theme.colors.primaryBg};
    font-size: 13px;
    font-weight: 400;
    display: inline-block;
  }
`

const Column = styled.div`
  height: 170px;
  color: ${theme.colors.primaryBg};
  display: flex;
  flex-direction: column;


ul{
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}
  
  li{
    color: ${theme.colors.primaryBg};
    font-size: 14px;
    font-weight: 300;
    line-height: 31px; 
  }
  
  li:first-child{
    margin-top: 18px;
  }
  
`

const LastColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
 

  color:  ${theme.colors.primaryBg};
  font-size: 16px;
  font-weight: 500;
  
  p{
    text-align: center;
    margin-left: 15px;
  }
`

const SvgContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  
`