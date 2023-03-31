import Link from "next/link"

type ButtonProps = {
    label: string,
    href: string,
}

export default function ButtonLink({
    label,
    href,
}: ButtonProps) {
    return (
        <Link href={href}>
            <button className="text-white border-2 w-20 p-1 border-green-500 rounded-lg font-thin
            hover:bg-green-500 duration-300
            ">
                {label}
            </button>
        </Link>
    )
}