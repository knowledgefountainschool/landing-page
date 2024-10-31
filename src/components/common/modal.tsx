import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal = ({ onClose, className, children }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('fixed inset-0 z-50', className)}
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className='absolute top-8 right-8 text-white/80 hover:text-white 
                  transition-colors duration-200 z-[2]'
      >
        <X className='size-4' />
      </motion.button>

      {children}
    </motion.div>
  );
};

export default Modal;
