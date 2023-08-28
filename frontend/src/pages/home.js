import HomeProvider from "../contexts/homeContext";

export default function HomePage() {
  return (
    <HomeProvider>
      <div id="recent-item-container"></div>
      <div id="item-list-container"></div>
    </HomeProvider>
  );
}
