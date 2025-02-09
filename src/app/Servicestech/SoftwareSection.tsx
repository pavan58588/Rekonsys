import { FocusCards } from "@/app/ui/focus-cards";

export function SoftwareSection() {
  const cards = [
    {
      id: "1",
      title: "E-Commerce",
      src: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 200,
    },
    {
      id: "2",
      title: "Industries",
      src: "https://images.unsplash.com/photo-1565866926760-213f0b57e8b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 200,
    },
    {
      id: "3",
      title: "Education",
      src: "https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 250,
    },
    {
      id: "4",
      title: "Realstate",
      src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 200,
    },
    {
      id: "5",
      title: "Construction",
      src: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 200,
    },
    {
      id: "6",
      title: "Government",
      src: "https://images.unsplash.com/photo-1575493214498-fd46fe95b7ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 300,
      height: 200,
    },
  ];

  return <FocusCards cards={cards} />;
}

export default SoftwareSection;