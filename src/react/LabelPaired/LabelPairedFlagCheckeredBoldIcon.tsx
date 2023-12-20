import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFlagCheckeredBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 4c.458.042.708.292.75.75v.875l2.656-.656a5.264 5.264 0 0 1 3.563.375c.729.375 1.49.562 2.281.562.792 0 1.563-.187 2.313-.562l.28-.125c.355-.167.667-.157.938.031.292.167.448.438.469.813v8.75c-.02.437-.24.75-.656.937l-1.063.406c-1.52.542-3 .459-4.437-.25A5.691 5.691 0 0 0 4 15.5l-2.5.625v3.125c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V4.75c.042-.458.292-.708.75-.75m.75 4.719L4 8.156V6.562l-2.5.625zm0 1.531v1.469l2.5-.563V9.72zm0 3v1.344l2.156-.563c.104-.02.219-.041.344-.062v-1.25zm4 .594c1.042.02 2.042.26 3 .719V13.03L6.781 12.5a2.955 2.955 0 0 0-1.281-.094zM10 15a4.254 4.254 0 0 0 1.75-.25l.75-.281V13l-.812.188a5.772 5.772 0 0 1-1.688.124zm2.5-3.531V10l-.812.188a5.772 5.772 0 0 1-1.688.124v1.5c.458.042.917.01 1.375-.093zm0-3V6.906a6.53 6.53 0 0 1-2.5.5v1.407c.458.041.917.01 1.375-.094zm-4-1.25c-.5-.104-.99-.282-1.469-.532-.479-.229-.99-.354-1.531-.375v1.563a5.676 5.676 0 0 1 1.688.188l1.312.406zm0 2.812L6.781 9.5A2.953 2.953 0 0 0 5.5 9.406v1.5a5.062 5.062 0 0 1 1.688.156l1.312.407z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredBoldIcon);
export default ForwardRef;
