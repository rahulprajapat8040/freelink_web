import React, { useEffect } from "react";
import { X } from "lucide-react";

interface CommonModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    maxWidth?: string;
}

const CommonModal = ({
    children,
    isOpen,
    onClose,
    title,
    showCloseButton = true,
    closeOnOverlayClick = true,
    maxWidth = "max-w-md"
}: CommonModalProps) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 h-screen bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={closeOnOverlayClick ? onClose : undefined}
            />

            {/* Modal Container */}
            <div
                className={`relative bg-white rounded-lg shadow-2xl w-full ${maxWidth} max-h-[90dvh] overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        {title && (
                            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90dvh-64px)] p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CommonModal;
