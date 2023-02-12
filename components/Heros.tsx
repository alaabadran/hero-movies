import Link from "next/link";
import { SuperHeros } from "@/types/heros";
export const Heros = (props: SuperHeros) => {
  return (
    <>
      {props.heros ? (
        <div className="flex flex-wrap">
          {console.log(props.heros[0])}
          {props.heros.map((item: any) => {
            return (
              <div className="w-1/5 p-2">
                <Link href="/">
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
