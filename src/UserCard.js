import React,{ useState } from 'react';
import {
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
   HeartOutlined,
   DeleteFilled,
   EditOutlined ,
   HeartFilled 
  } from '@ant-design/icons';
  import { Card,Col, Modal,Form, Input } from 'antd';
  
  
export default function UserCard({user,deleteUser}){
    const [userData, setUserData] = useState(user);
    const {name,id,phone,website,email}=user;
    const [like, setlike] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const [form] = Form.useForm();

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const handleLike=()=>{
      setlike(!like)
    }
    const onFinish =  (values) => {
      form.validateFields()
      .then(()=>{
        setUserData((prevState)=>({...prevState,...form.getFieldsValue()}))
        setIsModalVisible(false);
      })
      .catch(()=>{
        setIsModalVisible(true);
      }) 
    };
    return (
        <Col xs={24} sm={24} md={8} lg={8} xl={6} >
           <Modal title="Basic Modal" visible={isModalVisible} onOk={onFinish} onCancel={handleCancel}>
           <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} >
            <Form.Item
              name="name"
              label="Name"
              initialValue={name}
              rules={[
                {
                  required: true,
                  message:'Empty field'
                },
              ]}
            >
              <Input />
            </Form.Item>
            </Form>
            <Form {...layout} form={form} name="control-hooks" >
            <Form.Item
              name="email"
              label="Email"
              initialValue={email}
              rules={[
                {
                  required: true,
                  message:'Empty field'
                },
              ]}
            >
              <Input />
            </Form.Item>
            </Form>
            <Form {...layout} form={form} name="control-hooks" >
            <Form.Item
              name="phone"
              label="Phone"
              initialValue={phone}
              rules={[
                {
                  required: true,
                  message:'Empty field'
                },
              ]}
            >
              <Input />
            </Form.Item>
            </Form>
            <Form {...layout} form={form} name="control-hooks" >
            <Form.Item
              name="website"
              label="Website"
              initialValue={website}
              rules={[
                {
                  required: true,
                  message:'Empty field'
                },
              ]}
            >
              <Input/>
            </Form.Item>
            </Form>
           </Modal>
        <Card
    bordered={true}
    style={{ width: 'auto',margin:'15px' }}
    cover={
      <div  bordered={true} className='d-flex justify-content-center' style={{background:'#f5f5f5'}}>
      <img
     
        alt="example"
        src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
        width="200px"
        height="200px"
      />
      </div>
    }
    actions={[
      <button
      style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
      onClick={handleLike}
    >
     {like===false?<HeartOutlined  style={{ color: '#FF0000', fontSize: 20 }}/>:<HeartFilled style={{ color: '#FF0000', fontSize: 20 }} />} 
    </button>,
      <button
      style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
      onClick={showModal}
    >
      <EditOutlined  style={{fontSize: 20 }}  />
    </button>,
     <button
     style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
   >
     <DeleteFilled  style={{fontSize: 20 }} onClick={()=>deleteUser(id)} />
   </button>
    ]}
  >
      <h3 style={{fontSize:'1.17em'}}>{userData.name}</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MailOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 10 }}>{userData.email}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <PhoneOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 10 }}>{userData.phone}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GlobalOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 10 }}>{userData.website}</p>
        </div>
        </Card> 
        </Col>
    )
}
