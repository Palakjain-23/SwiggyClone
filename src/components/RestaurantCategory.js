import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";


const RestaurantCategory = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [showStripe, setShowStripe] = useState(false); 
  const dispatch = useDispatch();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handelAddItem = (item) => {
    dispatch(addItem(item));
    setShowStripe(true); 
    setTimeout(() => {
      setShowStripe(false); 
    }, 3000);
  };

  return (
    <div className={"w-6/12 m-auto"}>
      {/* Stripe */}
      {showStripe && <div className="stripe">Item added to cart</div>}

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="mb-5"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}
            className="font-bold"
          >
            {data.title} ({data.itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              {data.itemCards.map((item) => (
                <div
                  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                  key={item?.card?.info?.id}
                >
                  <div className="w-9/12">
                    <div className="py-2">
                      <span>{item?.card?.info?.name}</span>
                      <span>
                        - ⟨₹⟩
                        {item?.card?.info?.price
                          ? item?.card?.info?.price / 100
                          : item?.card?.info?.defaultPrice / 100}
                      </span>
                    </div>
                    <p className="text-xs ">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  <div className="w-3/12 p-4 relative">
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      className="drop-shadow-md rounded-md object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                      <button
                        className="text-green-400 text-sm rounded-lg py-3 px-5 font-bold bg-white hover:shadow-lg"
                        onClick={() => handelAddItem(item)}
                      >
                        +ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantCategory;
