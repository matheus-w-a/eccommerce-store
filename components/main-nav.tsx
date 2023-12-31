"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Category } from "@/types"

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathName = usePathname()

    const routes = data.map(route => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`
    }))

return (
    <nav className="flex items-center ml-4">
        {routes.map((route) => (
            <Link
                key={route.href}
                href={route.href}
                className={cn(
                    'text-sm font-medium transition-colors hover:text-black',
                    route.active ? 'text-black' : 'text-neutral-500' 
                )}
            >
                {route.label}
            </Link>
        ))}
    </nav>
)

}

export default MainNav