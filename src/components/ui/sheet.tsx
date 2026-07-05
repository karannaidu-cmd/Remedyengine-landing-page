"use client"

import * as React from "react"
import { Drawer as SheetPrimitive } from "@base-ui/react/drawer"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const sideClasses = {
  top: "inset-x-0 top-0 max-h-[85dvh] border-b data-ending-style:-translate-y-full data-starting-style:-translate-y-full",
  right:
    "inset-y-0 right-0 h-dvh w-80 max-w-[86vw] border-l data-ending-style:translate-x-full data-starting-style:translate-x-full",
  bottom:
    "inset-x-0 bottom-0 max-h-[85dvh] border-t data-ending-style:translate-y-full data-starting-style:translate-y-full",
  left: "inset-y-0 left-0 h-dvh w-80 max-w-[86vw] border-r data-ending-style:-translate-x-full data-starting-style:-translate-x-full",
}

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ className, ...props }: SheetPrimitive.Trigger.Props) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      className={cn(
        "inline-flex items-center justify-center rounded-lg outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetClose({ className, ...props }: SheetPrimitive.Close.Props) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-ink-900/35 backdrop-blur-[2px] transition-opacity duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  )
}

type SheetContentProps = SheetPrimitive.Popup.Props & {
  side?: keyof typeof sideClasses
  showCloseButton?: boolean
}

function SheetContent({
  side = "right",
  showCloseButton = true,
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Viewport
        data-slot="sheet-viewport"
        className="pointer-events-none fixed inset-0 z-50"
      >
        <SheetPrimitive.Popup
          data-slot="sheet-content"
          className={cn(
            "pointer-events-auto fixed z-50 border-line-200 bg-paper-0 p-6 shadow-[0_16px_40px_rgba(22,35,31,0.18)] outline-none transition-[transform,opacity] duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <SheetPrimitive.Close
              aria-label="Close menu"
              className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-lg text-ink-700 transition-colors outline-none hover:bg-remedy-100 hover:text-ink-900 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          )}
        </SheetPrimitive.Popup>
      </SheetPrimitive.Viewport>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-serif text-lg font-semibold text-ink-900", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-ink-700", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
