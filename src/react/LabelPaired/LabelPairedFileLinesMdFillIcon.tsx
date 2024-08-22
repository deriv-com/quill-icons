import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesMdFillIcon = (
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
      <path d='M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-4.5 8c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm0 2c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm0 2c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5z' />
    </g>
    <defs>
      <clipPath id='8d8dc3eb018c182387bf679688d5e78b__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesMdFillIcon);
export default ForwardRef;
