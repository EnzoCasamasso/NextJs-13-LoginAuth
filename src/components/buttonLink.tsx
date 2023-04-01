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
            <button className="text-gray-600 border-2 w-20 p-1 border-amber-400 rounded-lg font-thin
            hover:bg-amber-400 duration-300
            ">
                {label}
            </button>
        </Link>
    )
}