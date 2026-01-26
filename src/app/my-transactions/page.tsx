import React from "react";

export const metadata = {
  title: "My Transactions",
};

export default function Page() {
  return (
    <main className="container mx-auto p-6 max-w-6xl">
      <div className="flex gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">My Transactions</h1>
          <div className="space-y-3">
            <div className="p-4 border rounded">No transactions yet.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
