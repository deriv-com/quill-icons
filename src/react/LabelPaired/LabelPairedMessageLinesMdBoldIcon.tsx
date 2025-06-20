import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 17v.5l2.25-1.687c.25-.188.563-.313.906-.313H14c.25 0 .5-.219.5-.5V6c0-.25-.25-.5-.5-.5H2c-.281 0-.5.25-.5.5v9c0 .281.219.5.5.5h3c.813 0 1.5.688 1.5 1.5m-.031 2.406-.157.094-.53.406c-.157.125-.344.125-.532.063A.51.51 0 0 1 5 19.5V17H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v9c0 1.125-.906 2-2 2H9.656L6.5 19.375zM4.75 8.5h6.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-6.5A.72.72 0 0 1 4 9.25a.74.74 0 0 1 .75-.75m0 3h3.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='663706e716c3fb6d50dd997f2c4e9398__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesMdBoldIcon);
export default ForwardRef;
