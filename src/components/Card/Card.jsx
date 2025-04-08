import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Button, Modal } from 'antd';
import './Card.css'
const { Meta } = Card;
function MyCard({Firsttitle,SecondTitle,ModalInfo}) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
  
    const showLoading = () => {
      setOpen(true);
      setLoading(true);
  
      // Simple loading mock. You should add cleanup logic in real world.
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

  return (
    <div className="MyCard">
       <Card
    cover={<img className='allimage' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={Firsttitle} description={SecondTitle} />
    <Button type="primary" onClick={showLoading}>
        Open Modal
      </Button>
      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <Button type="primary" onClick={showLoading}>
            Reload
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
       <ul>
      {Object.entries(ModalInfo).map(([key, value], index) => (
        <li key={index}>
          <strong>{key}:</strong>{' '}
          {typeof value === 'object' && value !== null ? (
            <ul>
              {Object.entries(value).map(([subKey, subValue], subIndex) => (
                <li key={subIndex}>
                  {subKey}: {String(subValue)}
                </li>
              ))}
            </ul>
          ) : (
            String(value)
          )}
        </li>
      ))}
    </ul>
      </Modal>
  </Card>
    </div>
  );
}

export default MyCard;
