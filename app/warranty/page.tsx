import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Warranty — Hülle",
  description: "Every Hülle case carries a 3-month warranty. Here is what it covers and how to claim.",
};

export default function WarrantyPage() {
  return (
    <PolicyPage
      title="Warranty"
      intro="Every Hülle case includes a 3-month warranty against manufacturing defects, counted from the day your order is delivered."
      sections={[
        {
          heading: "What is covered",
          body: [
            "Defects in materials or workmanship: peeling or bubbling finishes, buttons that stop clicking, cracked shells under normal use, MagSafe magnets that lose alignment, and fit issues out of the box.",
          ],
        },
        {
          heading: "What is not covered",
          body: [
            "Normal wear from daily use, cosmetic scratches, abrasion, damage from drops, misuse, or modification, damage during transport, and cases bought second-hand or from unauthorised sellers.",
          ],
        },
        {
          heading: "How to claim",
          body: [
            "Write to us via the contact page with your order number and a photo of the issue. If it is a manufacturing defect, we will ship a replacement — you do not need to return the defective case unless we ask.",
          ],
        },
      ]}
    />
  );
}
