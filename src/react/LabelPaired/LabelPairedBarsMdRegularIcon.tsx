import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5m0 5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5m14 5c0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h13c.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='a967e556cac3a6a08a0bb4059ee749dd__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsMdRegularIcon);
export default ForwardRef;
