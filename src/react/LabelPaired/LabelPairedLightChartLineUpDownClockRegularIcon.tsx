import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLightChartLineUpDownClockRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11c0 .844.656 1.5 1.5 1.5h8.094c.187.375.406.719.656 1H2.5A2.468 2.468 0 0 1 0 16.5zm3.125 6.656 3-3A.518.518 0 0 1 6.5 9c.125 0 .25.063.344.156L9 11.312C10.406 9.876 11.844 8.439 13.281 7H11.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V7.719c-1.562 1.562-3.125 3.093-4.656 4.656a.53.53 0 0 1-.719 0c-.719-.719-1.437-1.437-2.125-2.156-.906.875-1.781 1.781-2.656 2.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719M11 15.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m1 0c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m3-2c0-.25.219-.5.5-.5.25 0 .5.25.5.5V15h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1.5a.494.494 0 0 1-.5-.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockRegularIcon);
export default ForwardRef;
