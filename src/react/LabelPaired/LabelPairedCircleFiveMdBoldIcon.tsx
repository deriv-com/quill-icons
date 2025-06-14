import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.5 8h3.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H7.125l-.25 1.344 1.906.219C10.031 11.219 11 12.28 11 13.53c0 1.375-1.125 2.5-2.5 2.5H7.375a2.56 2.56 0 0 1-2.125-1.156l-.125-.187a.72.72 0 0 1 .188-1.032.717.717 0 0 1 1.03.188l.157.187c.188.313.531.469.875.469H8.5a.98.98 0 0 0 1-.969.98.98 0 0 0-.875-.969l-2.719-.312c-.218 0-.406-.125-.531-.281a.8.8 0 0 1-.125-.594l.5-2.75A.77.77 0 0 1 6.5 8' />
    </g>
    <defs>
      <clipPath id='52ef231faa394efa1dac2af090d49949__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveMdBoldIcon);
export default ForwardRef;
