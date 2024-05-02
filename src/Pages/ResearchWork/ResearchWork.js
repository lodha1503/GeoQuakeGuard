import React from 'react';
import './ResearchWork.css';
import SB from '../../assets/Images/Santosh_Bisoyi_PhD_April2022.jpg';
import SR from '../../assets/Images/Sahil_Rana_PhD_April2022.jpeg';
import AK from '../../assets/Images/Amar_Kumar_MTech_April2022.jpg'

function ResearchWork() {
    return (
        <div className='ResearchWork'>
            <div className="section">
                <div className="section-header">
                    Abstract of My Doctoral Research
                </div>
                <div className="Phd-Thesis-Title">
                    <span>PhD Thesis Title: </span>
                    <a href="https://gyan.iitg.ac.in/items/8da9f9bc-5ad9-4ba3-b772-77c96230f6e3" className='link'>
                        Multi-Level Dimension Decomposition Approach for Structural Reliability Analysis
                    </a> (
                    <a href="https://gyan.iitg.ac.in/bitstreams/cbce9d8a-02ff-4626-b8f0-4894d928c0ab/download" className='link'>
                        pdf
                    </a>
                    )
                    
                </div>
                <div className='research-details'>
                    The research aims to develop high-fidelity polynomial dimension decomposition schemes for stochastic computation. It is achieved in multiple stages using efficient modelling of bases, decomposition terms, unknown coefficients and error terms. Using these improvements, the study proposes the following novel schemes – (a) Two-Step Adaptive Response Surface Method (RSM), (b) Sequential Stochastic Response Surface Method (Seq. SRSM), (c) Adaptive Multiple Finite Difference High Dimensional Model Representation (AMFD-HDMR), (d) Dimension AMFD-HDMR (dAMFD-HDMR) and (e) Hybrid Dimension AMFD-HDMR (hdA-HDMR). Also, a new sequential support point generation scheme is also proposed in this research work for efficient construction of the meta-model. For this purpose, Clenshaw-Curtis sparse grid is adopted to generate the support point using selective tensor product based on the hierarchy as per Smolyak’s algorithm.
                    <br /><br />

                    This scheme employs three key features – multi-level sequential generation, distribution and dimension adaptiveness. Both, dimension decomposition and support points generation are developed for different non-intrusive applications to address the curse of dimensionality.The two-step adaptive RSM is proposed for efficient reliability based design optimization (RBDO). Two sets of separate response surfaces using moving least square (MLS) technique are constructed to determine the optimal design point and the response statistics necessary for the constrained optimization. The MLS based adaptive determination of unknown coefficients is extended further using polynomial chaos expansion (PCE) to develop the stochastic response surface (i.e. Seq. SRSM) for better accuracy. Further, the accuracy is improved by representing it in terms of orthogonal subfunctions under AMFD-HDMR.
                    <br /><br />

                    This proposal uses finite difference HDMR to provide an iterative multi-order multi-level dimension decomposition technique for reliability analysis. The issue of curse of dimensionality is further addressed by a novel approach using dAMFD-HDMR. It decomposes the original performance function into summands of smaller dimensions using a sparse formulation of HDMR based on sensitivity analysis. Use of MLS technique yields a scalar approach where matrices are inverted for each realization. This affects the tractability of meta-modelling due to computational time required in training and approximating multiple realizations of MCS. To address this demerit, a hybrid scheme (i.e. hdA-HDMR) is suggested where the coefficients are determined using a Gaussian process. The global error of the multiple HDMRs is decomposed into the error terms of each subfunction. Overall, each proposal is validated using various problems to demonstrate their performance which clearly establishes that the proposed algorithms can be adopted for large class of practical reliability based design problems.
                </div>
            </div>

            <div className="section">
                <div className="section-header">
                    PhD Students:
                </div>
                <div className="students">
                    <div className="student">
                        <img className="photo" src={SB} alt="" />
                        <div className="PhD-info">
                            <div className="name">
                                Santosh Bisoyi
                            </div>
                            <div className="domain">
                                <b>Research Domain:</b> Structural Health Monitoring
                            </div>
                            <div className="domain">
                                <b>Thesis Title:</b> Structural Condition Assessment using Time and Frequency Parameters
                            </div>
                            <div className="domain">
                                <b>Qualification:</b> MTech (Civil Engineering), National Institute of Technology Agartala.
                            </div>
                            <div className="domain">
                                <b>Status:</b> Ongoing.
                            </div>
                        </div>
                    </div>
                    <div className="student">

                        <img className="photo" src={SR} alt="" />
                        <div className="PhD-info">
                            <div className="name">
                                Sahil Rana
                            </div>
                            <div className="domain">
                                <b>Research Domain:</b> Structural Reliability
                            </div>
                            <div className="domain">
                                <b>Thesis Title:</b> Hybrid Reduced Order Method for Reliability Analysis
                            </div>
                            <div className="domain">
                                <b>Qualification:</b> MTech (Civil Engineering), National Institute of Technology Jalandhar.
                            </div>
                            <div className="domain">
                                <b>Status:</b> Ongoing.
                            </div>
                            <br></br>
                            <br></br>

                        </div>
                    </div>

                </div>
            </div>




            <div className="section">
                <div className="section-header">
                    MTech Students :
                </div>
                <div className="students">
                    <div className="student">
                        <img className="photo" src={AK} alt="" />
                        <div className="MTech-info">
                            <div className="name">
                                Amar Kumar
                            </div>
                            <div className="domain">
                                <b>Thesis Title:</b> Probabilistic Analysis of Reinforced Concrete Steel Bars Exposed to Corrosive Environment
                            </div>
                            <div className="domain">
                                <b>Qualification:</b> BTech (Civil Engineering)

                            </div>
                            <div className="domain">
                                <b>Status:</b> Completed(2022).

                            </div>
                        </div>
                    </div>


                </div>
            </div>

           
           


            <div className="section">
                <div className="section-header">Professional / Expert Services</div>
                <ol className="research-details">
                    <li>Peer review of journal papers / projects related to research interests.</li>
                    <li>Chartered Engineer: Performing tasks such as structural analysis and design, concrete mix design, investigation, retrofitting, structural safety audit, third party visits/inspections etc.</li>
                    <li>Proof Consultant: Independent vetting of structural designs ensuring compliance as per standards/regulations/practices.</li>
                </ol>
            </div>


        </div>
    )
}

export default ResearchWork
