import React, { Component } from 'react';
import '../App.css';
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


class Footer extends Component {


    render() {
        return (
            <footer className="footer" style={{ paddingBottom: '0px', width: '100%', backgroundColor: '#424242' }}>
                <div className="row">
                    <div className='col-1 col-sm-1'>
                    </div>
                    <div className="col-sm-10 col-10 text-center" >
                        <p style={{ fontSize: '16px', color: '#c9c9c9' }} className="text-justify">
                            <br /><br />
                            This is a React based todo app. Its data is preserved to a single browser as for now.

                         It will delete its content if you clear the localStorage of the browser.
                         Feel free to use it and make modification in it and make your own project.
                         You can view and download its source code from <a style={{ textDecoration: 'none' }} href='https://github.com/himanshu27tasveer/reactT'>
                                <span className="logo" style={{
                                    backgroundColor: '#620082', color: 'white', display: 'inline',
                                    padding: '4px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '4px', textAlign: 'center',

                                }}>
                                    Bs</span><span style={{
                                    color: 'white', display: 'inline',
                                    padding: '4px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '4px', textAlign: 'center', fontWeight: 'normal'
                                }}>Todo</span>
                            </a>.
                        And feel free to contribute to it.
                            </p>
                    </div>
                    <div className='col-1 col-sm-1'>
                    </div>

                </div>


                <div className="row" style={{
                    display: 'flex', justifyContent: 'center',
                    flexDirection: 'row', backgroundColor: '#ffffff00', height: '40px', alignItems: 'center'
                }}>

                    <div className='ml-3'>
                        <a href='https://facebook.com/himanshu27.stu'><FaFacebookF size='25px' color='#3b5998' /></a>
                    </div>
                    <div className='ml-5'>
                        <a href='https://twitter.com/imhimanshu27'><FaTwitter size='25px' color='#00acee' /></a>
                    </div>
                    <div className='ml-5'>
                        <a href='https://instagram.com/himanshu.tasveer'><FaInstagram size='25px' color='#8a3ab9' /></a>
                    </div>
                    <div className='ml-5'>
                        <a href='https://github.com/himanshu27tasveer'><FaGithub size='25px' color='#211f1f' /></a>
                    </div>
                    <div className='ml-5'>
                        <a href='https://linkedin.com/in/im-himanshu27'><FaLinkedinIn size='25px' color='#0e76a8' /></a>
                    </div>

                </div>
                <br />

                <div className='container-fluid text-center p-3' style={{ backgroundColor: '#2e2e2e', color: '#9c9c9c', fontSize: '13px' }}>
                    <div className='text-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 Copyright : <a href='https://himanshu27tasveer.github.io'>Tasveer</a>

                    </div>
                    Licensed under MIT License.

                </div>

            </footer>
        );
    }
}

export default Footer;