import React, { useState, useRef, useEffect } from 'react';
import './SelectWithImage.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type OptionWithImage = {
  label: string;
  value: string;
  icon: string;
};

type SelectWithImageProps = {
  value: string;
  options: OptionWithImage[];
  onChange: (value: OptionWithImage) => void;
  placeholder?: string;
};

export default function SelectWithImage({
  value,
  options,
  onChange,
  placeholder = 'Select...',
}: SelectWithImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((opt) => opt.value === value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-select-wrapper" ref={wrapperRef}>
      <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selected ? (
          <div style={{ display:'flex',alignItems:'center'}}>
           {selected.icon && <img src={selected.icon} alt={selected.label} className="select-icon" />}
            <span>{selected.label}</span>
          </div>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
        <ExpandMoreIcon/>
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-option"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.icon && <img src={option.icon} alt={option.label} className="select-icon" />}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
