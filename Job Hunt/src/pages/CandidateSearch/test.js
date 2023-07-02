import users from "../../data/users";

const minJobRoles = 20;
const maxJobRoles = 30;
const generatedJobRoles = [];

const getRandomLabel = () => {
  const adjectives = ["Senior", "Junior", "Lead", "Principal", "Remote"];
  const roles = [
    "Engineer",
    "Developer",
    "Architect",
    "Designer",
    "Analyst",
    "Designer",
    "Teacher",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const role = roles[Math.floor(Math.random() * roles.length)];
  return `${adjective} ${role}`;
};

const generateRandomJobRoles = () => {
  const numberOfJobRoles = Math.floor(
    Math.random() * (maxJobRoles - minJobRoles + 1) + minJobRoles
  );

  for (let i = 3; i <= numberOfJobRoles + 2; i++) {
    const jobRole = {
      value: i.toString(),
      label: getRandomLabel(),
    };
    generatedJobRoles.push(jobRole);
  }
};

generateRandomJobRoles();

// Combine existing job roles with generated random job roles
// const allJobRoles = [...jobRoles, ...generatedJobRoles];

// console.log(allJobRoles);

const jobRoles = [
  { value: "1", label: "Full Stack Developer" },
  { value: "2", label: "Backend Developer" },
  { value: "3", label: "Senior Designer" },
  { value: "4", label: "Remote Engineer" },
  { value: "5", label: "Lead Analyst" },
  { value: "6", label: "Principal Designer" },
  { value: "7", label: "Senior Architect" },
  { value: "8", label: "Senior Designer" },
  { value: "9", label: "Lead Engineer" },
  { value: "10", label: "Senior Designer" },
  { value: "11", label: "Remote Architect" },
  { value: "12", label: "Lead Designer" },
];

const locations = [
  { value: "1", label: "Mumbai" },
  { value: "2", label: "Delhi" },
  { value: "3", label: "Bangalore" },
  { value: "4", label: "Hyderabad" },
  { value: "5", label: "Chennai" },
  { value: "6", label: "Kolkata" },
  { value: "7", label: "Ahmedabad" },
  { value: "8", label: "Pune" },
  { value: "9", label: "Jaipur" },
  { value: "10", label: "Lucknow" },
  { value: "11", label: "Surat" },
  { value: "12", label: "Kanpur" },
];

const user = [];

// Generate 30 random users
for (let i = 1; i <= 30; i++) {
  const randomUser = {
    name: `random ${i}`,
    email: `random${i}@gmail.com`,
    linkedin: `linkedin.com/random${i}`,
    role: jobRoles[Math.floor(Math.random() * jobRoles.length)].label,
    Location: locations[Math.floor(Math.random() * locations.length)].label,
  };

  user.push(randomUser);
}

// console.log(user);

const getRoles = () => {
  const roles = [...new Set(users.map((user) => user.role))];
  return roles;
};

export { getRoles };
