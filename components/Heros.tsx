import Link from "next/link";
import { SuperHeros } from "@/types/heros";
import { makeURL } from "@/services/utils";

export const Heros = (props: SuperHeros) => {
  return (
    <>
      {props.heros ? (
        <div className="flex flex-wrap">
          {props.heros.map((item: any, i: number) => {
            return (
              <div key={i} className="w-1/5 p-2 text-center">
                <Link
                  className="border block rounded border-slate-700 bg-slate-900 hover:bg-slate-600 opacity-80 hover:opacity-100"
                  href={`${makeURL(item.name)}`}
                >
                  {/* using Next Image component requires adding 
                  Width and Height properties, this doesn't work properly with responsive */}
                  <img
                    className="rounded rounded-b-none"
                    src={item.image}
                    alt={item.name}
                  />
                  <span className="inline-block py-2">{item?.name}</span>
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
