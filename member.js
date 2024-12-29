function skillsMember() {
  return {
    type: "member",
    title: "Skills",
    subtitle: "Member",
    icon: "skills",
    questions: [
      {
        title: "Skills",
        subtitle: "Please list any skills you have and rate yourself from 1 to 10",
        fields: [
          {
            type: "text",
            id: "skills",
            title: "Skills",
            subtitle: "List any skills you have",
            placeholder: "Web development, graphic design, video editing, etc.",
            required: true,
          },
          {
            type: "rating",
            id: "rating",
            title: "Rating",
            subtitle: "Rate your skill from 1 to 10",
            required: true,
          },
        ],
      },
    ],
  };
}

