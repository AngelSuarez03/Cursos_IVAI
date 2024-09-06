import React, { useState } from 'react';
import './Modal.css'; // Estilos personalizados

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Registro de Cursos</h2>
                <div className="modal-body">
                    <div className="left-column">
                        <p>Nombre del Curso:</p>
                        <p>Descripción:</p>
                        <p>Duración (en horas):</p>
                        <p>Profesor:</p>
                    </div>
                    <div className="right-column">
                        <input type="text" placeholder="Ingrese nombre del curso" />
                        <input type="text" placeholder="Ingrese descripción" />
                        <input type="number" placeholder="Duración en horas" />
                        <input type="text" placeholder="Nombre del profesor" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={() => alert('Registro enviado')}>Registrar</button>
                </div>
            </div>
        </div>
    );
};

const CourseRegistration = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Registrar Curso</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default CourseRegistration;
