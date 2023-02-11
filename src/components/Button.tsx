
import Link from 'next/link';

type ButtonProps = {
    className: string ;
    route?: string | number;
    text?: string;
    type: string;
    value?: string;
}

export default function Button({ className, route, text, type, value }: ButtonProps) {
    console.log(className);
    return (
        className !== 'linkButton' ?
            <input className={className} type={type} value={value} />
            :
            <Link href={`/${route}`} className={className}>{text}</Link>
    );
}