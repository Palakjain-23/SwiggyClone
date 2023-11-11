import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItem,setShowIndex}) => {
  const handelClick=()=>{
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 mx-auto shadow-lg my-4">
        <div className="flex justify-between p-3 " onClick={handelClick}>
          <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        { showItem === true && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};
export default RestaurantCategory;
