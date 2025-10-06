'use client'

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

type FormFielProps = {
    label: string,
    name: string,
    type?: string
    placeholder?: string
    value?: any
    required?: boolean
    disabled?: boolean
    error?: string
    options?: { value: string, label: string }[],         // usado para select ou radio {label:"",value:""}
    icon?: any         // JSX opcional
    as?: string         // input | textarea | select | file | radio | date
    className?: string,
    state?: any
    defaultValue?: any,
    // defaultValue = state?.payload ? state.payload.get(name) : "",
    register?: any,
    staticForm?: boolean, /// prop para determinar se formulario é estatico, não tem mudança de estado.
    onChange?: any,
}

export function FormField({
    label,
    name,
    type = 'text',
    placeholder = '',
    value = undefined, // <-- Garante que nunca será undefined
    required = false,
    disabled = false,
    error = '',
    options,     // usado para select ou radio {label:"",value:""}
    icon = null,          // JSX opcional
    as = 'input',         // input | textarea | select | file | radio | date
    className = '',
    state = null,
    defaultValue = null,
    // defaultValue = state?.payload ? state.payload.get(name) : "",
    register = undefined,
    staticForm = false, /// prop para determinar se formulario é estatico, não tem mudança de estado.
    onChange


}: FormFielProps) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    const baseInputClasses = `w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${icon ? 'pl-10' : ''}`;

    const renderField = () => {
        if (as === 'textarea') {
            return <textarea rows={4} {...commonProps()} />;
        }

        if (as === 'select') {
            return (
                <select {...commonProps()}>
                    <option value="">Selecione...</option>

                    {options && options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
        }

        if (as === 'file') {
            return (
                <input
                    type="file"
                    name={name}
                    id={name}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    className={`${baseInputClasses} file:px-4 file:py-2 file:border-0 file:bg-blue-100 file:text-blue-700 file:rounded-md`}
                />
            );
        }

        if (as === 'radio') {
            return (
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2">
                    {options && options.map((opt) => (

                        <label key={opt.value} className="inline-flex items-center gap-2">
                            <input
                                type="radio"
                                name={name}
                                value={opt.value}

                                // defaultChecked={defaultValue == opt.value ? true : false}
                                // checked={value === opt.value}
                                onChange={onChange}
                                required={required}
                                disabled={disabled}
                                className="text-blue-600 focus:ring-blue-500 "
                            />
                            <span className="text-sm text-gray-700">{opt.label}</span>
                        </label>
                    ))}
                </div>
            );
        }

        return (
            <div className="relative">
                {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>}

                <input
                    type={as === 'date' ? 'date' : inputType}
                    {...commonProps()}
                />

                {type === 'password' && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-600"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
        );
    };

    const commonProps = () => {
        const props = {
            id: name,
            name,
            placeholder,
            onChange,
            required,
            disabled,
            className: baseInputClasses,
            register,
            defaultValue,
            value
        };
        // Se value está definido, não passe defaultValue

        if (defaultValue !== undefined && defaultValue !== null) {
            props.defaultValue = defaultValue;
        }
        else if (value || value === undefined && !staticForm) {
            props.value = value ?? "";
        }
        return props;
    };

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            {renderField()}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}

export function SubmitButton({
    text = 'Enviar',
    loading = false,
    disabled = false,
    className = '',
}) {
    return (
        <button
            type="submit"
            disabled={disabled || loading}
            className={`
        w-full flex justify-center items-center gap-2 px-4 py-2 rounded-md text-white
        bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
        >
            {loading && (
                <svg
                    className="w-4 h-4 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
            )}
            {loading ? 'Enviando...' : text}
        </button>
    );
}

