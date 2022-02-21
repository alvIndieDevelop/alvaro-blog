import HomePage from "./../pages/Home";

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
