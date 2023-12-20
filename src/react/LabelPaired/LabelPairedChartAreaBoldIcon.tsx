import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 5.75v11c.042.458.292.708.75.75h13c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-13c-.646-.02-1.177-.24-1.594-.656C.24 17.927.021 17.396 0 16.75v-11c.042-.458.292-.708.75-.75.458.042.708.292.75.75m7.438 5.313L7 9.125l-2.5 2.5V14.5h9v-2.437l-1.594-1.844-.844.844A1.446 1.446 0 0 1 10 11.5c-.417 0-.77-.146-1.062-.437M10 10l1.063-1.062.187-.188c.208-.187.448-.281.719-.281.291.02.531.135.719.344l1.937 2.28c.25.272.375.595.375.97V15a.974.974 0 0 1-.281.719A.974.974 0 0 1 14 16H4a.974.974 0 0 1-.719-.281A.974.974 0 0 1 3 15v-3.375c0-.417.146-.77.438-1.062L6.28 7.719A.988.988 0 0 1 7 7.406c.27 0 .51.104.719.313l1.218 1.218z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaBoldIcon);
export default ForwardRef;
