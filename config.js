const chapters = [
  {
    id: "chapter1",
    title: "Personal Info",
    screens: [
      {
        id: "screen1",
        questions: [
          {
            id: "fullName",
            type: "text",
            label: "What is your full name?",
            required: true,
          },
          {
            id: "age",
            type: "text",
            label: "How old are you?",
            required: true,
            validation: "number",
          },
          {
            id: "email",
            type: "text",
            label: "What is your email address?",
            required: true,
            validation: "email",
          },
          {
            id: "phone",
            type: "text",
            label: "Phone number",
            required: true,
            validation: "number",
          },
          {
            id: "address",
            type: "text",
            label: "Current Address",
            required: false,
          },
          {
            id: "country",
            type: "text",
            label: "Country of Residence",
            required: true,
          },
        ],
      },
      {
        id: "screen2",
        questions: [
          {
            id: "gender",
            type: "radio",
            label: "Select your gender",
            options: ["Male", "Female", "Other"],
            required: true,
          },
          {
            id: "maritalStatus",
            type: "radio",
            label: "Marital status",
            options: ["Single", "Married", "Divorced", "Widowed"],
            required: true,
          },
        ],
      },
      {
        id: "screen3",
        questions: [
          {
            id: "skills",
            type: "checkbox",
            label: "Which of these technical skills do you have?",
            options: ["JavaScript", "Python", "React", "Node.js", "SQL"],
            required: false,
          },
          {
            id: "hobbies",
            type: "checkbox",
            label: "Select your hobbies",
            options: ["Reading", "Sports", "Traveling", "Music"],
            required: false,
          },
        ],
      },
    ],
  },

  {
    id: "chapter2",
    title: "Preferences",
    screens: [
      {
        id: "screen4",
        questions: [
          {
            id: "preferredWorkType",
            type: "radio",
            label: "What type of work do you prefer?",
            options: ["Remote", "Hybrid", "On-Site"],
            required: true,
          },
          {
            id: "expectedSalary",
            type: "text",
            label: "What is your expected salary (in ₹)?",
            required: false,
            validation: "number",
          },
        ],
      },
      {
        id: "screen5",
        questions: [
          {
            id: "subscriptions",
            type: "checkbox",
            label: "Which updates would you like to receive?",
            options: ["Newsletter", "Promotions", "Events", "Job Alerts"],
            required: false,
          },
          {
            id: "feedback",
            type: "text",
            label: "Any feedback or special requests?",
            required: false,
          },
        ],
      },
    ],
  },

  {
    id: "chapter3",
    title: "Declaration",
    screens: [
      {
        id: "screen6",
        questions: [
          {
            id: "declaration",
            type: "checkbox",
            options: [
              "I hereby declare that the information provided above is true to the best of my knowledge."
            ],
            required: true,
          },
          {
            id: "place",
            type: "text",
            label: "Place",
            required: true,
          },
          {
            id: "date",
            type: "text", // could be date picker if you support it
            label: "Date (DD/MM/YYYY)",
            required: true,
          },
        ],
      },
    ],
  },
];

export default chapters;
