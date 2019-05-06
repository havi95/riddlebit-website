import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => (
    <div id='projects' className='content-wrapper'>
        <div className='content-section content-width-md projects-content'>
            <h1>Projects</h1>
            <p>
                These are our current and planned projects. More info will be available here at a later time.<br/>
                Until then, please visit our <a href='https://www.facebook.com/riddlebit'>facebook page</a>.
            </p>
            <div className='project-cards'>
                <ProjectCard
                    title='Setback'
                    description='A fast-paced online shooter'
                    link='https://setback.riddlebit.net'
                    size='large'
                    status='In Development'
                    imageURL='https://lh3.googleusercontent.com/5m1EyyvBjszK29tT65kEHqIeJky0184eDFnr2Ul3h6Vz6UtFJ8M7W9DGDBaou0E13j1izZl0835VApEuk6jd8RK95o6tHAksziueQJmvIalTRiZ1kHeqJn_V7K6y4uUykdjS455VBkKfujpb_pbZ7UHJuaJ4jcFCN4OGmpMlngbAcXpN2cNHVgjlB2gxWCTzpkn8duXhbq6o_NA9KuEkmDiUnNmvc_whl8ZoQpqv97SKePM0blh1zBDlotANzaH93LbTAxEGw5HPYRmNie8P3uSb8dfWKJeQPb3sPJIOOD5uRbvHWQADo_WoBlO24dCbxQA3xjqTLhfNF1nnG3Qe3y1lpSYhzgXPJq1yoHNIcR5NETlyFG_kzIcAhRmcdZvkq3Ny2ZCRlTgZ07NMYWG8Sj87MjSYs-Ve0vUYW1a0GLt-qJYJc3IHm1Z0eqdDTQ-0WRHzA8qB_OvTXWQ9s8mJcDXMl3qPy_2vVRoyENCqJLVjIp07ry4EM6Z8lk2QPX1_BQ5Xmfc4nLlS8fQVklamPuNWHFvVlfcacpxuQk4ETTYv02FNImB5QzM9xSmHENJkO7G8oslHnVX68eYJINkZOx8wCM0pl9ZBoQwXvskg0skuCzRxvNWPZPf-GzRulYonkItkfJiiQ31k2bdAzEOXlXVmeFhDUos=w683-h346-no'
                />
                <ProjectCard
                    title='Project Summon'
                    description='[CLASSIFIED]'
                    size='small'
                    classified={true}
                    status='Planned'
                    imageURL='https://lh3.googleusercontent.com/bFkbnhmXcJRu3iWDIqmtmUxBqFpqh2SyryO6ia9nCOf6O2hlsJdkmGaZjf80xWjPsvBi6gpBKNl3VCuRYPCwiDoEDcPk5WPHS1u2EAg1pDPWZThSrFgydrtZUdvSugFiGzg3uUgKNVNgOTFC9MHmGgKGxtiW_een8C-yy5PxPyp94EoQIzjNdUh0A07Ahjj8rSz1ogKgqteAY2Tjgbk-AQp0uzHMnTaQTCKZVvfg30orGmgde38h3r1Y18VPYc8WrPxsOEQ5yRJie-M4U_pNy-cJlu2BrJJCBPZ3wHeC3Y2aVM4PxF5FwcYM45cS1leRKNvY1UcuejP9xnb3MVrR5Q6Rx2xsh989WVvVMmjZwgmhRXVdtTso3OLcGjpRzyzg4HgW2WTljUkSEhYGG398OgzupvmWH-RYsnuqQN1DNGE0x4z6Su_7nUs0mLjQoTCTlxUdXf9Xo9Mw66If8i5p292m7iUwgOtJir3fIYPx5496wlqhrisVF3Jkgjd1gNtcjNjOz2wfVIulTplm92ZK5d6XV0FVYLOSzffia-15Dyp1LQkhD2502axl9kfDFMSlwGxLDu6DsHYmEgRUyJ5lLrP3QUkPUn4uIXzwpl3Rm-72P7OaGGK8kV2f_y8o0H3oLaIr5FZVFm3M0m61tcBa3yxC=w960-h480-no'
                />
                <ProjectCard
                    title='Project Crumble'
                    description='[CLASSIFIED]'
                    size='small'
                    classified={true}
                    status='Planned'
                    imageURL='https://lh3.googleusercontent.com/Q-OWURqB1kagqXjykj3g81vCYU_Jnp05IeE1kQ4qGb2vdtGnq3ZqVa9MGRel8ZI8sXAJChmRxghvZDTU7A4rphxq8PtWo7kjOdA_aKuKWRFFZ504tgFNzlwuK61S_rr9Rhtpaowkh1ZIoZcjKl9NhxX0ZnRz6i8kiLy9R3TbRc78noW7-FG9wGsVpduyuv7G2isyVDD3rRrFve1ahSGDdqA0_l6o4cm1oWf_DbzqgI-SaMt0VJM7-PW9a_3iJMr4ewnxi7Ym20oWIGpyw__c73QgmXGxBVvghnvd0KiP-vzwEJi8Jhom93AUOzIlO6uJEJXawxt36PW-2WV4Tgyg9IqykS0hcbscTscVjTC2nq2dMcZEVrwJJXtH2mgxiIh2z12ONsfdhiuL74BjV6jwp-QCrBpV22DXmOsLLXFnj7zZWcdPnTodEZOlhLUdPT2wszoU7hJxqMK6eauMcTMSM7Q9eVLI0H0jgYY-wzE2W-7ppGxr1fThIg0ZI1YTOdzjr9pshNadqnBSRtOVNBYshr1wAIkt9aay-ienP8x-wSKait0bcRVQ80WBCW41cKTiHcjwFYnhE6l6DXXZlJPBYFQRbrPO6791JBnbVpmpJkZ994BBbjumE_D0Ac8K5zuE0N3SilTj5zyd2u5lAWmY8ggt=w960-h580-no'
                />
            </div>
        </div>
    </div>
);

export default Projects;
