
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDOM  from 'react-dom';


const ModalPortal = ({ children }) =>{
    const elem = document.getElementById('modal-root') || document.createElement('div');
    return ReactDOM.createPortal(children, elem);
}

const HModal = ({
    close,
    children
}) =>{
    return (
        <React.Fragment>
            <ModalPortal>
                <Overlay onClick={close} />
                <Wrapper>
                    {children}
                </Wrapper>
            </ModalPortal>
        </React.Fragment>
    )
}

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 31, 31, 0.2);
  backdrop-filter: blur(4px);
  transition: backdrop-filter 0.5s;
`;

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 25px;
  z-index: 99;
`;

export default HModal;
