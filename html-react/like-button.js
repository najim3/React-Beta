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

document.querySelectorAll(".root").forEach((rootNode) => {
  const root = ReactDOM.createRoot(rootNode);
  root.render(React.createElement(LikeButton));
});
