

const employees = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete Report",
        "taskDate": "2024-10-20",
        "taskCategory": "Reporting",
        "taskDescription": "Prepare and complete the financial report for Q3.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Website",
        "taskDate": "2024-10-21",
        "taskCategory": "Development",
        "taskDescription": "Implement the new design updates on the company website.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Presentation",
        "taskDate": "2024-10-24",
        "taskCategory": "Marketing",
        "taskDescription": "Prepare and deliver a presentation for a potential client.",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Anjali",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product Launch Meeting",
        "taskDate": "2024-10-18",
        "taskCategory": "Management",
        "taskDescription": "Discuss the launch plan for the upcoming product.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Server Maintenance",
        "taskDate": "2024-10-22",
        "taskCategory": "IT",
        "taskDescription": "Carry out routine server maintenance to ensure system stability.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Sandeep",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Team Training Session",
        "taskDate": "2024-10-19",
        "taskCategory": "HR",
        "taskDescription": "Conduct a training session for the new employees.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Triage",
        "taskDate": "2024-10-23",
        "taskCategory": "Development",
        "taskDescription": "Review and prioritize reported bugs from the latest release.",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Pooja",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Invoice Review",
        "taskDate": "2024-10-25",
        "taskCategory": "Finance",
        "taskDescription": "Review invoices and prepare for the upcoming audits.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Planning",
        "taskDate": "2024-10-27",
        "taskCategory": "Finance",
        "taskDescription": "Plan the budget for Q4 based on projected expenses.",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Ravi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Campaign Strategy",
        "taskDate": "2024-10-26",
        "taskCategory": "Marketing",
        "taskDescription": "Develop a strategy for the upcoming social media campaign.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Feedback Review",
        "taskDate": "2024-10-24",
        "taskCategory": "Support",
        "taskDescription": "Analyze feedback from recent customer support surveys.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];





const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
