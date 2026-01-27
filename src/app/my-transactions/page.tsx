import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export const metadata = {
  title: "My Transactions",
};

type Transaction = {
  id: string;
  date: string; // ISO
  // purchase-only fields
  courseId?: string;
  courseTitle?: string;
  courseSlug?: string;
  amount: number; // negative = paid amount
  status: "paid" | "pending" | "failed";
  method?: string;
  note?: string;
};

const transactions: Transaction[] = [
  {
    id: "TRX-2001",
    date: "2026-01-21T10:15:00.000Z",
    courseId: "C-001",
    courseTitle: "Fullstack Web Development",
    courseSlug: "fullstack-web-development",
    amount: -199000,
    status: "paid",
    method: "Credit Card",
  },
  {
    id: "TRX-2003",
    date: "2026-01-10T12:00:00.000Z",
    courseId: "C-020",
    courseTitle: "Cloud DevOps Mini-course",
    courseSlug: "cloud-devops-mini",
    amount: -129000,
    status: "pending",
    method: "Bank Transfer",
  },
  {
    id: "TRX-2004",
    date: "2025-12-28T14:20:00.000Z",
    courseId: "C-030",
    courseTitle: "Automation Fundamentals",
    courseSlug: "automation-fundamentals",
    amount: -99000,
    status: "paid",
    method: "Credit Card",
  },
];

function formatPrice(v: number) {
  return Math.abs(v).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
}

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Transactions</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <select className="px-3 py-2 border rounded bg-white dark:bg-zinc-800 dark:border-zinc-700">
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <input
              placeholder="Search description or id"
              className="px-3 py-2 border rounded bg-white dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {transactions.length} transactions
          </div>
        </div>

        <div className="w-full bg-white dark:bg-zinc-900 rounded-lg shadow-sm border dark:border-zinc-800 overflow-hidden">
          <div className="hidden md:grid w-full grid-cols-12 gap-4 px-4 py-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900">
            <div className="col-span-2">Invoice</div>
            <div className="col-span-1">Cover</div>
            <div className="col-span-3">Course</div>
            <div className="col-span-2">Payment Method</div>
            <div className="col-span-1 text-right">Price</div>
            <div className="col-span-1 text-right">Status</div>
            <div className="col-span-2 text-right">Invoice</div>
          </div>

          <div className="overflow-x-auto">
            <ul className="w-full divide-y bg-white dark:bg-zinc-900 dark:divide-zinc-800">
              {transactions.map((t) => (
                <li
                  key={t.id}
                  className="w-full px-4 py-3 grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <div className="font-medium">{t.id}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(t.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(t.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  <div className="col-span-1">
                    <Image
                      src="/assets/images/sample-banner-course-1.png"
                      alt="cover"
                      width={160}
                      height={96}
                      className="w-20 h-12 object-cover rounded"
                    />
                  </div>

                  <div className="col-span-3">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {t.courseTitle}
                    </div>
                  </div>

                  <div className="col-span-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {t.method || "—"}
                  </div>

                  <div className="col-span-1 text-right text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {formatPrice(t.amount)}
                  </div>

                  <div className="col-span-1 text-right">
                    <span
                      className={
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold " +
                        (t.status === "paid"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20"
                          : t.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20"
                            : "bg-red-100 text-red-800 dark:bg-red-900/20")
                      }
                    >
                      {t.status}
                    </span>
                  </div>

                  <div className="col-span-2 text-right">
                    <a
                      href={`/invoice/${t.id}.pdf`}
                      className="inline-flex items-center p-2 rounded border bg-white dark:bg-zinc-800 text-xs"
                      aria-label={`Download invoice ${t.id}`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-4 py-3 flex items-center justify-between text-sm text-muted-foreground">
            <div>Page 1 of 1</div>
            <div />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
