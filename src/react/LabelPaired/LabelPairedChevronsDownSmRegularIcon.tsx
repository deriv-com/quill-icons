import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.45 5.8q-.274-.3 0-.6.3-.274.6 0L7 10.12 11.95 5.2q.3-.273.6 0 .274.3 0 .602L7.3 11.05q-.3.273-.6 0zm0 5.25q-.274-.3 0-.6.3-.274.6 0L7 15.37l4.95-4.922q.3-.273.6 0 .274.3 0 .602L7.3 16.3q-.3.273-.6 0z' />
    </g>
    <defs>
      <clipPath id='83a807ca91e0a3a6e98e797277bcd3ef__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmRegularIcon);
export default ForwardRef;
