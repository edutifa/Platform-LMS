import React from "react";

export const metadata = {
  title: "My Profile",
};

export default function Page() {
  return (
    <main className="container mx-auto p-6 max-w-6xl">
      <div className="flex gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-2">Account Details</h2>
            <p className="text-sm text-muted-foreground">
              Edit your personal information and preferences here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
