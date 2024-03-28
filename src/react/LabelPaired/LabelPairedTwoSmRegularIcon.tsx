import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.172 5.5c-.793 0-1.559.328-2.133.875l-.738.766a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l.767-.738a3.78 3.78 0 0 1 2.734-1.148C6.25 4.625 8 6.32 8 8.425c0 1.067-.437 2.052-1.203 2.79L1.657 16h6.78a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H.561a.42.42 0 0 1-.41-.273.38.38 0 0 1 .11-.465l5.933-5.578c.575-.547.93-1.313.93-2.133 0-1.614-1.34-2.926-2.953-2.926' />
    </g>
    <defs>
      <clipPath id='3bb786ce54950ae8ef0bbfbb7aa2fb01__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmRegularIcon);
export default ForwardRef;
