type ratingType = { Source: string; Value: string };

export const Rating = (props: ratingType) => {
  return (
    <div className="flex mt-1">
      <div className="w-1/6">{props.Value}</div>
      <div>{props.Source}</div>
    </div>
  );
};
