import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtSmBoldIcon = (
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
      <path d='M7 5.063c-3.145 0-5.687 2.57-5.687 5.687A5.683 5.683 0 0 0 7 16.438c.355 0 .656.3.656.656 0 .383-.3.656-.656.656-3.883 0-7-3.117-7-7 0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7v.766a2.526 2.526 0 0 1-2.516 2.515c-.875 0-1.613-.41-2.078-1.066A3.24 3.24 0 0 1 7 14.03a3.256 3.256 0 0 1-3.281-3.281A3.273 3.273 0 0 1 7 7.469c.766 0 1.504.3 2.05.738.137-.164.329-.3.575-.3.355 0 .656.3.656.656v2.953c0 .683.52 1.203 1.203 1.203.657 0 1.204-.52 1.204-1.203v-.766c0-3.117-2.57-5.687-5.688-5.687m1.969 5.687c0-.684-.383-1.34-.985-1.695a1.95 1.95 0 0 0-1.968 0 1.94 1.94 0 0 0-.985 1.695c0 .71.356 1.367.985 1.723a1.95 1.95 0 0 0 1.968 0 2.01 2.01 0 0 0 .985-1.723' />
    </g>
    <defs>
      <clipPath id='4b7510bc8d093d9a5479bd970a7524a9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtSmBoldIcon);
export default ForwardRef;
