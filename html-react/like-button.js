function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this";
  }
  return React.createElement(
    "Button",
    { onClick: () => setLiked(true) },
    "Like"
  );
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));

const rootNode2 = document.getElementById("root2");
const root2 = ReactDOM.createRoot(rootNode2);
root2.render(React.createElement(LikeButton));
