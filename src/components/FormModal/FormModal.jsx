'use client';

import { Modal, Form, Input, Select } from 'antd';

export default function FormModal({ aberta, aoFechar, aoSalvar }) {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.submit();
    };

    const handleFinish = (valores) => {
        aoSalvar(valores);
        form.resetFields();
    };

    return (
        <Modal
            title="Criar Novo Personagem"
            open={aberta}
            onCancel={() => {
                form.resetFields();
                aoFechar();
            }}
            onOk={handleOk}
            okText="Salvar"
            cancelText="Cancelar"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item
                    name="name"
                    label="Nome do Personagem"
                    rules={[{ required: true, message: 'Por favor, insira o nome!' }]}
                >
                    <Input placeholder="Ex: Albus Dumbledore" />
                </Form.Item>

                <Form.Item
                    name="house"
                    label="Casa"
                >
                    <Select placeholder="Selecione a casa">
                        <Select.Option value="Gryffindor">Grifinória (Gryffindor)</Select.Option>
                        <Select.Option value="Slytherin">Sonserina (Slytherin)</Select.Option>
                        <Select.Option value="Ravenclaw">Corvinal (Ravenclaw)</Select.Option>
                        <Select.Option value="Hufflepuff">Lufa-Lufa (Hufflepuff)</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="actor"
                    label="Ator / Atriz"
                >
                    <Input placeholder="Ex: Richard Harris" />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="URL da Imagem"
                >
                    <Input placeholder="https://..." />
                </Form.Item>
            </Form>
        </Modal>
    );
}