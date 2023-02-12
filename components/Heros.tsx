import Link from "next/link";
import { SuperHeros } from "@/types/heros";
export const Heros = (props: SuperHeros) => {
  return (
    <>
      {props.heros ? (
        <div className="flex flex-wrap">
          {props.heros.map((item: any, i: number) => {
            return (
              <div key={i} className="w-1/5 p-2 text-center">
                <Link href="/">
                  {/* using Next Image component requires adding 
                  Width and Height properties, this doesn't work properly with responsive */}
                  <img src={item.image} alt={item.name} />
                  {item?.name}
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
