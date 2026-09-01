"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PhoneMockup } from "@/components/phone-mockup";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isOpen, closeCart, lines, count } = useCart();
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/30"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-background shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <Dialog.Title className="text-xs font-medium uppercase tracking-[0.2em]">
                    Cart ({count})
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close cart"
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-card cursor-pointer"
                    >
                      <X className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {lines.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
                      <ShoppingBag className="h-8 w-8" strokeWidth={1.25} />
                      <p className="text-sm">Your cart is empty.</p>
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-6">
                      {lines.map((line) => (
                        <li key={line.id} className="flex gap-4">
                          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-[#F0EFEA]">
                            <PhoneMockup
                              shade={line.swatch}
                              floatCard={false}
                              className="w-10"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-center">
                            <p className="text-sm font-medium">{line.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {line.shade} &middot; Qty {line.qty}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            ${(line.price * line.qty).toFixed(2)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {lines.length > 0 && (
                  <div className="border-t border-border px-6 py-6">
                    <div className="mb-4 flex items-center justify-between text-sm font-medium">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full text-sm uppercase">
                      Checkout
                    </Button>
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
