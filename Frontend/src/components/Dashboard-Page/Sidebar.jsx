
// My old code of Dashboard.... 


import React, { Children } from 'react';
import { CarOutlined, HomeFilled, UserOutlined,  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from "react-router-dom";
// import logo from '../../Images/Logo.png';
import './Dashboard.css'
// import img from '../../Images/Dashboard/Bachiii.jpg'
// import Link from 'antd/es/typography/Link';

const { Content, Sider, Header } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//         key: String(index + 1),
//         icon: React.createElement(icon),
//         label: `nav ${index + 1}`,

//     }),
// );

const Sidebar = ({ children, title }) => {
    const path = window.location.pathname.split('/');
    const navigate = useNavigate();

    const handleClick = (item) => {
        const { key } = item;

        if (key === "new") {
            navigate(`/dashboard/`);
        } else {
            navigate(`/dashboard/${key}`);
        }
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <div className=''>
                <Layout>
                    <Sider
                        style={{ height: '128vh', backgroundColor: 'white' }}
                        breakpoint="lg"
                        className='border-end'
                        width={250}
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        {/* <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
                            <Link to='/'> <img src={logo} style={{ height: '80px', width: 'auto' }} alt="Logo" /></Link>
                        </div> */}
                        <Menu theme="light" className=' fs-5' mode="inline" defaultSelectedKeys={path[2] === '' ? "new" : path[2]} onClick={handleClick} items={[
                            { label: "Dashboard", icon: <HomeFilled style={{ fontSize: '20px' }} />, key: "new" },
                            { label: "Profile", icon: <UserOutlined style={{ fontSize: '20px' }} />, key: "user-profile" },
                            { label: "My Blogs", icon: <CarOutlined style={{ fontSize: '20px' }} />, key: "my-cars" },
                        ]} />
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                                padding: 0,
                                background: colorBgContainer,
                                height: '80px'
                            }}
                            className='border-bottom'
                        >

                            <div className="d-flex flex-column flex-md-row justify-content-between px-4 mt-2">
                                <div>
                                    <h1 className="fw-bolder"><b>{title}</b></h1>
                                </div>

                                
                            </div>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px ',
                            }}

                        >
                            <div
                                className='content'
                                style={{
                                    padding: 24,
                                    margin: 25,
                                    minHeight: 360,
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                }}
                            >
                                {Children.map(children, child =>
                                    child
                                )}

                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </>
    );
};

export default Sidebar;
