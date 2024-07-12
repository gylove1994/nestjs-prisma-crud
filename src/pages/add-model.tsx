import { InboxOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { formatAst, parsePrismaSchema } from '@loancrate/prisma-schema-parser';
import { Button, Modal, notification, Upload } from 'antd';
import { useState } from 'react';

function AddModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer
      breadcrumbRender={false}
      extra={[
        <Button key="1" type="primary" onClick={showModal}>
          批量添加
        </Button>,
      ]}
    >
      <Modal
        title="批量添加"
        open={isModalOpen}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
      >
        <Upload.Dragger
          multiple={false}
          maxCount={1}
          showUploadList={false}
          beforeUpload={(file) => {
            const fs = new FileReader();
            fs.readAsText(file, 'utf-8');
            fs.onload = () => {
              try {
                const schema = parsePrismaSchema(fs.result as string);
                console.log(schema);
              } catch (e) {
                notification.error({
                  message: '解析失败',
                  description: '请检查文件格式是否正确',
                });
              }
            };
            return false;
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or
            other banned files.
          </p>
        </Upload.Dragger>
      </Modal>
    </PageContainer>
  );
}

export default AddModel;
