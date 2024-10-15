import { ButtonHTMLAttributes, ElementType } from "react";

interface TableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ElementType
    cor?: string
}

export function TableButton({ icon: Icon, cor, ...rest }: TableButtonProps) {
    return (
        <button {...rest} className="p-2 bg-gray-200 rounded">
            <Icon className={`h-5 w-5 ${cor}`}/>
		</button>
    )
}