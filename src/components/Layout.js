export default function Layout(props) {
  return (
    <div>
      <div className="container mx-auto pt-10 bg-red-200 p-10 ">
        <div className="">{props.children}</div>
      </div>
    </div>
  );
}
