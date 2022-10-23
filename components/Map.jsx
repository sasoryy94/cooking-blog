import dynamic from "next/dynamic";
import { useHasMounted } from "../utils/mounted";

const Map = () => {
  const VectorMap = dynamic(
    () => import("react-jvectormap").then((m) => m.VectorMap),
    { ssr: false }
  );

  const handleClick = (e, countryCode) => {
    console.log(countryCode);
  };

  return (
    <div className="h-80 md:h-96 lg:h-[500px]">
      <h1 className="text-center text-base md:text-xl xl:text-2xl 2xl:text-4xl py-2 md:py-4 xl:py-6">
        some text here asking which contry wants a recipe
      </h1>
      {useHasMounted() ? (
        <VectorMap
          map={"world_mill"}
          backgroundColor="#0077be" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="maps"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
        />
      ) : null}
    </div>
  );
};

export default Map;
