import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6c0-1.094.875-2 2-2h5v4c0 .563.438 1 1 1h4v1.219C9.688 10.875 8 13 8 15.5c0 1.875.906 3.5 2.281 4.5H2c-1.125 0-2-.875-2-2zm12 2H8V4zm1.5 3c1.594 0 3.063.875 3.875 2.25a4.46 4.46 0 0 1 0 4.5A4.46 4.46 0 0 1 13.5 20a4.47 4.47 0 0 1-3.906-2.25 4.46 4.46 0 0 1 0-4.5A4.54 4.54 0 0 1 13.5 11m0 3a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m-1 1.5c0 .281.219.5.5.5v1.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5v-2c0-.25-.25-.5-.5-.5H13c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='e390bf79ee36ebc7f1bf05d8e9685cc3__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoMdFillIcon);
export default ForwardRef;
