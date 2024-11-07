import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import {
    ChevronDownIcon,
} from '@heroicons/react/16/solid'

const MobileMenu = () => {
    return (

        <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-full bg-zinc-800 py-1.5 px-3 text-sm/6 font-semibold text-white outline-slate-700 outline-2 hover:outline">
                Menu
                <ChevronDownIcon className="size-4 fill-white/60" />
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-zinc-800 text-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" to="/about">About</Link>
                </MenuItem>
                <MenuItem>
                <Link className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" to="/projects">Projects</Link>
                </MenuItem>
            </MenuItems>
        </Menu>

    )
}

export default MobileMenu