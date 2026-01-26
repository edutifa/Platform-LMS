type User = {
  name?: string;
  email?: string;
  avatarUrl?: string;
  personalGoal?: string;
};

let _draft: Partial<User> | null = null;
let _user: User | null = {
  name: "Budi Santoso",
  email: "budi@example.com",
  avatarUrl: "/assets/images/photo-profile.png",
  personalGoal: "Belajar Web Development",
};

export function getUser(): User | null {
  return _user;
}

export function setUser(u: User | null) {
  _user = u;
}

export function getDraft(): Partial<User> | null {
  return _draft;
}

export function setDraft(d: Partial<User> | null) {
  _draft = d;
}
