import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.281 11.781A3.96 3.96 0 0 0 10 9.5c0-2.187-1.812-4-4-4-2.219 0-4 1.813-4 4 0 .875.25 1.656.688 2.281.124.188.25.375.406.563.406.562.875 1.219 1.25 1.875.312.594.5 1.219.562 1.781h-1.5c-.094-.375-.187-.719-.375-1.062a13.5 13.5 0 0 0-1.094-1.626l-.468-.656A5.47 5.47 0 0 1 .5 9.5C.5 6.469 2.938 4 6 4c3.031 0 5.5 2.469 5.5 5.5 0 1.188-.375 2.25-1 3.156l-.469.656a13.5 13.5 0 0 0-1.094 1.626c-.187.343-.28.687-.374 1.062h-1.5c.093-.562.25-1.187.562-1.781.375-.656.844-1.313 1.25-1.875.156-.188.281-.375.406-.563M6 8a1.5 1.5 0 0 0-1.5 1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5C3.5 8.125 4.594 7 6 7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5m0 12a2.47 2.47 0 0 1-2.5-2.5V17h5v.5C8.5 18.906 7.375 20 6 20' />
    </g>
    <defs>
      <clipPath id='d45aab61f351ab8e5adc35cbb6df0dbc__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdBoldIcon);
export default ForwardRef;
