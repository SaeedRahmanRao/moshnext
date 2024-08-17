import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const PhotoDetail = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      Product Detail number {id} and PhotoDetail number is {photoid}
    </div>
  );
};

export default PhotoDetail;
