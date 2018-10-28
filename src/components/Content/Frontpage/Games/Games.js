import React from 'react';
import './Games.css';
import ProjectCard from './ProjectCard/ProjectCard';

const Games = () => (
    <div id='games' className='content-wrapper'>
        <div className='content-section content-width-md games-content'>
            <h1>Games</h1>
            <p>
                These are our current projects. More info will be available here at a later time.<br/>
                Until then, please visit our <a href='https://www.facebook.com/riddlebit'>facebook page</a>.
            </p>
            <div className='project-cards'>
                <ProjectCard
                    title='Setback'
                    description='A fast-paced online shooter'
                    large={true}
                    status='In Development'
                    imageURL='https://lh3.googleusercontent.com/46_D6W6rgO5186QDxTVG9WOhL-zjuoNUUI36E5cy6ZhZXpkVkF31CGUJdw9cCmsNOhOcBbFzSDRPt1Vil8HZ3an63IYm_BhCFga9PHZbujhuOm3bWXasKA_JV5I1Bh3O5h0k0lSGOU2xx6etBdlUyBOsCY4Lw17HRDB5-PBIjeaRqPn6uJnPjTa-nqlZqmcEkdr8En9jXv0anHF4Rjd79J7omOq8KjQ0yikvCBdLJRA4nR99T5eIxA4OpKb5WuTp2gujpg8C5u8wS1PVFTWg-FoApnzd73U03N9N2gAr7K1KrGFNbm05MznhRCJTcnFTDj6qIT3GrQMv2pSonlYRZs4TyZX0W6UsnC4TbmtdW_DrblMp0vD7hNqs9HqiwblLg8kHtYkdxgSRiNuvY5JhyQ-azuG-4k6mKyk8saTaKc-j-y4XIiydsIkZfCvCHbVrgEy4Mgy3ErJGS4J1kmUl89KjWxFx7H3UuZhpzNEq3ZY_m9QNUXAt0wDD7jx2zzW6FBmwvpYsA2g4eFoLjXAG4aBV5j8id3Lf3gQMxHxvyV4t8VLLp8LGKP7EgS2AlMUZhxS8GfPyHNviXZGvjyo3YHGRpdcKGdDEGEIifxdvWZAN3wHh9fv2oy7nf1MfEJCzenx2U8ThZw-L-rjJXElPninz=w717-h402-no'
                />
                <ProjectCard
                    title='Project Summon'
                    description='[CLASSIFIED]'
                    classified={true}
                    status='Planned'
                    imageURL='https://lh3.googleusercontent.com/bFkbnhmXcJRu3iWDIqmtmUxBqFpqh2SyryO6ia9nCOf6O2hlsJdkmGaZjf80xWjPsvBi6gpBKNl3VCuRYPCwiDoEDcPk5WPHS1u2EAg1pDPWZThSrFgydrtZUdvSugFiGzg3uUgKNVNgOTFC9MHmGgKGxtiW_een8C-yy5PxPyp94EoQIzjNdUh0A07Ahjj8rSz1ogKgqteAY2Tjgbk-AQp0uzHMnTaQTCKZVvfg30orGmgde38h3r1Y18VPYc8WrPxsOEQ5yRJie-M4U_pNy-cJlu2BrJJCBPZ3wHeC3Y2aVM4PxF5FwcYM45cS1leRKNvY1UcuejP9xnb3MVrR5Q6Rx2xsh989WVvVMmjZwgmhRXVdtTso3OLcGjpRzyzg4HgW2WTljUkSEhYGG398OgzupvmWH-RYsnuqQN1DNGE0x4z6Su_7nUs0mLjQoTCTlxUdXf9Xo9Mw66If8i5p292m7iUwgOtJir3fIYPx5496wlqhrisVF3Jkgjd1gNtcjNjOz2wfVIulTplm92ZK5d6XV0FVYLOSzffia-15Dyp1LQkhD2502axl9kfDFMSlwGxLDu6DsHYmEgRUyJ5lLrP3QUkPUn4uIXzwpl3Rm-72P7OaGGK8kV2f_y8o0H3oLaIr5FZVFm3M0m61tcBa3yxC=w960-h480-no'
                />
                <ProjectCard
                    title='Project Crumble'
                    description='[CLASSIFIED]'
                    classified={true}
                    status='Planned'
                    imageURL='https://lh3.googleusercontent.com/Q-OWURqB1kagqXjykj3g81vCYU_Jnp05IeE1kQ4qGb2vdtGnq3ZqVa9MGRel8ZI8sXAJChmRxghvZDTU7A4rphxq8PtWo7kjOdA_aKuKWRFFZ504tgFNzlwuK61S_rr9Rhtpaowkh1ZIoZcjKl9NhxX0ZnRz6i8kiLy9R3TbRc78noW7-FG9wGsVpduyuv7G2isyVDD3rRrFve1ahSGDdqA0_l6o4cm1oWf_DbzqgI-SaMt0VJM7-PW9a_3iJMr4ewnxi7Ym20oWIGpyw__c73QgmXGxBVvghnvd0KiP-vzwEJi8Jhom93AUOzIlO6uJEJXawxt36PW-2WV4Tgyg9IqykS0hcbscTscVjTC2nq2dMcZEVrwJJXtH2mgxiIh2z12ONsfdhiuL74BjV6jwp-QCrBpV22DXmOsLLXFnj7zZWcdPnTodEZOlhLUdPT2wszoU7hJxqMK6eauMcTMSM7Q9eVLI0H0jgYY-wzE2W-7ppGxr1fThIg0ZI1YTOdzjr9pshNadqnBSRtOVNBYshr1wAIkt9aay-ienP8x-wSKait0bcRVQ80WBCW41cKTiHcjwFYnhE6l6DXXZlJPBYFQRbrPO6791JBnbVpmpJkZ994BBbjumE_D0Ac8K5zuE0N3SilTj5zyd2u5lAWmY8ggt=w960-h580-no'
                />
            </div>
        </div>
    </div>
);

export default Games;
