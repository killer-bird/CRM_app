import React, { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
//@ts-ignore
import Close from '../../assets/svg/close.svg?react'
import styled from "styled-components"


const StyledOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(17, 17, 17, 0.5);
  padding: 6px;
  display: flex;
  align-items: flex-end;
`
const StyledModal = styled(motion.div)`
  border-radius: 30px;
  background: #FFF;
  padding: 14px;
  z-index: 101;
  width: 100%;
`
export const Modal = ({ children, isOpen, onClose }: { isOpen: boolean, onClose: () => void } & PropsWithChildren) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])
  return createPortal(
    <AnimatePresence>
      {isOpen && <StyledOverlay onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <StyledModal
          onClick={e => e.stopPropagation()}
          initial={{ y: 100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="flex justify-end" >
            <Close className="cursor-pointer" onClick={onClose} />
          </div>
          {children}
        </StyledModal>
      </StyledOverlay>
      }
    </AnimatePresence>,
    document.body
  )
}
