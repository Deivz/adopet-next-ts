import Link from 'next/link';

type ButtonProps = {
    className: string ;
    route?: string | number;
    text?: string;
    type: string;
    value?: string;
    onClickFunction?: (event: any) => void;
}

export default function Button({ className, route, text, type, value, onClickFunction }: ButtonProps) {

    return (
        className !== 'linkButton' ?
            <input className={className} type={type} value={value} onClick={onClickFunction} />
            :
            <Link href={`/${route}`} className={className}>{text}</Link>
    );
}