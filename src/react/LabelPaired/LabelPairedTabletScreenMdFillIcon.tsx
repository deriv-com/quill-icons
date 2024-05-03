import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenMdFillIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm5 12c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-3c-.281 0-.5.25-.5.5m7-12H2v10h10z' />
    </g>
    <defs>
      <clipPath id='dedef701c6c8586fb0bed1e881aebff7__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenMdFillIcon);
export default ForwardRef;
