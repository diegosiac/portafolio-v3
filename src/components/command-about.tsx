"use client"

import {
	Calendar,
	CreditCard,
	Settings,
	User
} from "lucide-react"
import * as React from "react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from "@/components/ui/command"

export function CommandDemo() {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<p className="text-xs absolute bottom-2 left-3 hidden sm:block">
				<kbd className="pointer-events-none inline-flex select-none items-center font-oxanium text-[10px] font-medium">
					Presiona ⌘ + J
				</kbd>
			</p>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="CV">
						<CommandItem>
							<Calendar className="mr-2 h-4 w-4" />
							<span>Imprimir CV</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Social">
						<CommandItem>
							<User className="mr-2 h-4 w-4" />
							<span>Mi GitHub</span>
						</CommandItem>
						<CommandItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Mi LinkedIn</span>
						</CommandItem>
						<CommandItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Mi Correo</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
