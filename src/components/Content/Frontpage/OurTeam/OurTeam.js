import React from 'react';
import MemberCard from './MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id='our-team'>
        <h1>Our Team</h1>
        <div className='member-cards'>
            <MemberCard
                name='Håvard Aasmo'
                description='Developer'
                mail='havi@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/xEQrDAE2coJGBR0Y7wYYpjXe-HHNhST-qd7F4EQl_au_4o2-e1eF5bANpTac0YY7S4Rwd9Uiaj4nYOhqKHdUUz0_Eak3U98Pm16DC21sqoF4tTdmVIMqcR1cSGwd50oqhbmMTfkiTHLx7xDU5VjKbVnB7fKZOUB9M8YE_SMJwPwFo18QhvtTfRPwgJqcp3R_TmFhelxNoAnCh-cpurcKCDSOoH1X1QPhXrwz_T3s19MEZ9SBzWHyiafj6WA3p9hnutN1kyIz4klOL60zfouPj3TElWQEG-oIzrQPvUV0ifTk2_fJKG8BguXK_kHB1gFrGFbncSA12uhEDMuL2ibzDQxT6KLGl06pUwZsnifL5dhxvCG0PVZlZeYAzn4j3-dtxyj3T4NyKBVm2oxx_gBwNuZxYUfIIVM87__8bcKPylohaVRZ7IJJdgwBnAklp9dzPIHncDSlwVM_54cQ8saQsF_s9FY_px4m-joxLYJQsnY4aUzd8ZZQfnSk_MvogCOkq8xshgRODo1mj15p3kLYLegkBtvQ3awHHwafO6KmcfYgwyJhY7uRDJCI-au7qcOl9-dgun_vVyI1jga2avXJQwXFB-DZWgfs5DUjc0wPsQXyhaXI5znmqYAj76rzNJLIp_hhzLgL-PzZ6pHrmSvvl4hB=s500-no'
            />
            <MemberCard
                name='Jonathan Jørgensen'
                description='Developer'
                mail='jonathan@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/TVk9GmMW7ZJpkwjlakc3W-8E0bCUnS-zTlroJzZr2XvaQ9nhxpMVF2Ehe4TBLaFc9nwU6_ZJ0kdeNl6zhBzx1XGOlFzzLeBTIJM-9PqEMeZR_s1HgaVHCb5r-S9gIJfkdzT3Sb8Zuu2IkHyBqp3H7iHbZoPfa_skTF-j9BfwtVbI3WF67ywdJLWPqt4sFFnSSfN_9AdeRPDryN3hS5xGcV1YWy9K8a4GCVJiFw-h0K7wGGXRJnjJIIGpTuDxjN_8QnCA8hYcADy83V73XR0T0NkOcJCn_gXm1EgcGlHQ614EEII0HqQKBLWCQZ3-NZwpuUg8fzWptkkVLvxxUQVVdR6JhULCKC2PTWnMVkA0Gf05GAWWpuDLPNKTBPQUuyS8ZMjp-TSScUWuqtPNRZXs5jjhItvN50lsIEpY-tNFt1Ifld0s0AjjYtFElRcyPhzqRn8cO8wxEBYo5hvcpJTX1P0pNgRvflPtvTAa_Su6CCwUJEvtHZx9wnTx8FBWUH2xNiLrKgG5U7bau3USetIH-wHzV3cdEHRYpcZl7YidPQlSiwj_vDY2h7cgiFEZgEp5X9opmB7doEVEZe6eTMrfoT0qe5q1IgYzXQYVFi9OSTGNUkjFlhdE4WUR5oW5i2R3XcaQa5pTqO12-P6gFhycmiMG=s500-no'
            />
            <MemberCard
                name='Vegard Farstad'
                description='Developer'
                mail='vegard@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/leph4bHmsbhnZb0z0uZ5nEc3BxZcqEDe1FKHWG-lmQmWt_qJjxaC24U8Kt8cZyPOJLXlN7Laht2J84XZOA5xYJiAhyYymBjrMXjSV5yWLUkEPlWBS9Mc6TTff299eF_qLp1Ar6i0tuQSMlAQc6eZ6-c8zvASrd6bZwfIVCNDs3vyWMp8mDC04tqQ1BE_9vxHIQI4avPdsgtFup-An3FXgK-YYtFV9cB5YPGXou5hece0KlUdQUiMFhJ_-nw1ibcurTt97Nj41ekjCbCe_a8sC0mRM_pjMzD8PhJBzsLr7pPG56b_AejgjhsQ_pQmFu_Zfjq9ASonDh3khimDzV2Jnz2-qzN5kkkHewd3d7eDkfBDp_sx00gVILTuNwsPD9IHyWRdKqn81dcmf00t3Uv65YcE3o_Jsp9aUsmHW7fSV1L82FoFdQcH_Fo-mfJUHyCsnNi9CVVVFpro1HA8_tk17s2AYijoubUck8gDGL3BVumn_BSPSw4BXO9RZWo5VNNGxmiWWmy2vWcuO1T4lfyBYMm535H3VRd0PfYeZkzwODO44SrY7eK8mCyZUaf6hs46JMmb7C-nvFUDLdYIr6FulNYfvi1BEepdXuZw5as7UcnU0MTfBj5KE3kOj3hUmt0ZB9RzSP8-tg0FXoOE3nP8Cg-j=s500-no'
            />
            <MemberCard
                name='Oliver M. B. Nakken'
                description='Game Designer'
                mail='oliver@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/M2o4g7bgY6k6iRRoSM8qsEBIhFtNHV3Z8-_pCytfhTh4NJ6tklrV9PBD4oFjdLmgSKABhF7IeAoCRweW7Sc9981vhsOgOMTc79xXo9c34uS34aHxHaYbJO8jEQp9XQ5Fg-mtNDJpK41xGqrm0dEf6z3PetgfFlUchrQZdRE9PwwbbsPI_Mpr4KncCn5AxT8PkNjZd9bjQAWLP0vXaI0EUSJ1eoEcKs8GYZvvJYajWg6g2LysDYIO-pDVIss5zoqQq2WNYIwBiD01dYXo_ibCVcgFiHSssEVhgtXyrWI4JFzEWJnoed1lI3NWZdShUqQisw-WTBuDWOecAdogSGIc_S6dmrDBbhb9Ai0ay0BvsnXu6lHY67r8fWJcn5ojKc3-lJOUTjbApFr2lhXu3U_jd5cVna84Lxv4PZS5W8pnp-DGXlcmjvx8su5Ap8T7IyANPhXafh7VEJLLSMFHmMCQfA-xh6nDI2D-8mgFQtHvTSLphDOhXFBvafUyh7RYoICDCw_vUhPd2fBQaYkzyQwGnv3SYKIcfKXXQxZ06R86AQVQqGd2d29Hv1iprfbwzkHFf4j_ccKp1JgDr_Lx3Fno2Le1vTFOsbVOU_mNTXiKeBOdTM8qxC1IgE7yWdCtjllLwNLayFELUwl_Pf1UFSizcRk8=s500-no'
            />
            <MemberCard
                name='Lars Olav Muri'
                description='Chairman & Accountant'
                mail='lars@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/p0C-KyJ1kHLBc5j2GPZcDYyUn6k7qji-TbKROXXMjr7MeIQC94Xr7oou8RzOAs-61DCp8FgpGxp_F_wbz81K7eN13MqwKcesqwGqKEEzN-o1xLHZ4n1H1OtPPX2gBdgtdZOrWmAOHGC3fD-s7jnb-XzFJhoOVQWKV0SB5T4Vqfn1hgvnpcDiry-IDE2oZ2jKnOZ_A2yL5bx6FsKAFCMbFB34MXU0ASYl9U5SS1u3yqR6-UovLmHs1gGyr0ZDTrWtiwt8K0qpb4tJf5aO-j0bBFI-9pCv5gBQ3vG9husSTtruAHsZKlHW0bl5lCGV01JstvmU0v0QCuTogsCe55HX8vec6hvVzRF3ws8J97D8MvuW0FJSM29S3s_u4RO_GyNHSU2sA0F35THfkwfCCDLYn0xGnrsZkLU0NqDVu6USYucY3HzDhM9T8sGJiWxzsl_j0_RaswDmrHUXnx6l6JYfVgMYKdJ2rLI0AxCdKpSjv5dWbtcpm-Av_gHjgHAIGWeiKDIuh2tizzKDo2GCOz48XQYVTiMknkrxlUcy5m38yAMa_Fb-ZaUFawBA5LBsrlK_h9ANDr6yQiIzJgjVQfsyMkV-m7kkQOl5Q7f6cRrxM1njZPlepa_olTOFOOkDUvpP9sEtHhkMf8V9UjjpcnzUEKQd=s500-no'
            />
            <MemberCard
                name='Thomas Moe'
                description='Setback Artist'
                mail='moe@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/xXpqlsNK8HElDACejWmkXE1-qxa8mzPtPoKbrAPC67f8rtlJAhlTaEfRzyFmZGm2g1PAlh5d-wbQK7PsM0qVLvMzioNINyoTWBquZuB_6Z_RNAf9x-R5u5QViwwuUuThHYmFpnxFhQcuJIu79cxzUJirAX4NyWztEvBhlXEKzwsytUpb8yGf0gw8Jnp8x8cNS9u76oG4oEgMoQK8BONk2YqL36jgG9EShKxL1Gf4fN6NuaYYSG9uCQIWvC0Bd1EWyEZ5wgjT0L6sJ7ZwfmXO3HdJMJskSnZE8A8JpcIp-BAmVn9K7Ee5OtzAAj-rCcLz6bOeVNAHFpUtbnhpJGqZcozsotFMjwJzIpvt8tO88A8UjgiXtHQ9LR6u-Qs4tkguxo57RbM6muEgyzPxDVs4GR6CdfQx8Ui6Y6BVK1aDD09wMrxoQxMT2EwSNHT361kv_U1-Jb84oGxGWBiOCNBFLLRCXwvghh0fsoEKDmD4SZmuBaSW1SC1r0H4wGeRSfg-u-RpsVzPcBwagA-R3cLQE8eAxt6Arkrsy1VIhZAs4zN8dDVbis-VaTJ-XAAVqpj2H_-eN6PXORpjN0-1AQVFig7EibPTpkDbqFMuU9N8hHYgc8ImjYC-EE6zDLFfxwXMvU2eDdl0Jqc6wAc1modirzT5=s500-no'
            />
            <MemberCard
                name='Thomas Dalstein'
                description='Setback Artist'
                mail='dalstein@riddlebit.net'
                imageURL='https://lh3.googleusercontent.com/VecOckfQCiY_b2DX1A9_YmklcIOMEZCKZURetbOGAED6zqsl9UecVZGFkKuenESulBNELUDO4n80twMyfGMYhgkTj5Xm8OeiDaPvUOw6BLm6qYwNOcWacs8EQv3zrFwFDrLbehHsrqrJquODuX_-W3ej50ShahDWR5fVVPOpM1iWT4LwD0H6v1F8jpH912e_saqDgkZ4tAkQMUo_SVBxKKxv9LdQBBbuM8Rx-O7sTuby3hu9q4jPjlV95HHZVz_posJF2vlFsQd5b-z2i7dSZkBur8pOjNGB60lT6LX-QCRwNutpf6htGwD0sdlF720DrAqG3DduTxQzTpUv6ZeTlYJ1a6_ivmxMIkWG5Y2JSjMsUbO0H_8RxOP3xlFPggCvl4-buXa3zNAp3Yr_t-Rq1V779dg4NEqeicOQWdjMR7yq8nVz_-Zbq5j5l4BgwuP3buo2CKpKRD9hcYHAoCKQ30fr5a_sfD-HMLWBCO8nY1JXaFDRjuT-_uIh2RnIKwqKG5baVxvk4tpnHtx2dbZjUEsNQU4AOWrcaa29LMzn5elU1RtLLdF2501tb5FN552ZPr-dguP-a-2k6Em-ntdn8x-rg4uocuoNJT98kKfaf9VrYnv_Yicn6HSqwGGZkGMhqZ0UOyrj3PiXjbuT8cmVauNf=s500-no'
            />
        </div>
    </div>
);

export default OurTeam;