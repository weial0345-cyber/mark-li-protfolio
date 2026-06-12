import React, { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  isEditingMode: boolean;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  isEditingMode,
  multiline = false,
  className = "",
  placeholder = "Click to edit...",
  as: Component = "span"
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Optional: place cursor at the end
      if ('selectionStart' in inputRef.current) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    if (currentValue.trim() !== value.trim()) {
      onSave(currentValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setCurrentValue(value);
      setIsEditing(false);
    }
  };

  if (!isEditingMode) {
    return (
      <Component className={className}>
        {value || <span className="text-gray-400 italic">{placeholder}</span>}
      </Component>
    );
  }

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={Math.max(3, currentValue.split('\n').length)}
          className={`w-full bg-white/90 text-slate-900 border-2 border-dashed border-rose-800 rounded p-1.5 focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-transparent ${className}`}
        />
      );
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full bg-white/90 text-slate-900 border-2 border-dashed border-rose-800 rounded px-1.5 py-0.5 focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-transparent ${className}`}
      />
    );
  }

  return (
    <Component
      onClick={() => setIsEditing(true)}
      title="Click to edit"
      className={`editable-active ${className}`}
    >
      {value || <span className="text-gray-400 italic">{placeholder}</span>}
    </Component>
  );
};
