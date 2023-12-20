import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaRegularIcon = (
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
        d='M1 5.5v11c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h13c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-13c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-11c.02-.312.188-.48.5-.5.313.02.48.188.5.5m8.281 5.219L7 8.406l-2.844 2.875a.416.416 0 0 0-.156.344V15h10v-2.937a.538.538 0 0 0-.125-.344l-1.937-2.25-1.22 1.25A1.044 1.044 0 0 1 10 11c-.27 0-.51-.094-.719-.281m0-1.438L10 10l.719-.719.531-.531c.208-.187.448-.281.719-.281.291.02.531.135.719.344l1.937 2.28c.25.272.375.595.375.97V15a.974.974 0 0 1-.281.719A.974.974 0 0 1 14 16H4a.974.974 0 0 1-.719-.281A.974.974 0 0 1 3 15v-3.375c0-.417.146-.77.438-1.062L6.28 7.719A.988.988 0 0 1 7 7.406c.27 0 .51.104.719.313z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaRegularIcon);
export default ForwardRef;
