import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.465 9.684-3.5 3.5c-.274.273-.684.273-.93 0l-3.5-3.5a.6.6 0 0 1 0-.903.6.6 0 0 1 .902 0l2.38 2.38V4.405c0-.355.3-.656.656-.656.382 0 .656.3.656.656v6.754l2.379-2.379c.273-.273.683-.273.93 0a.6.6 0 0 1 0 .903zm-8.777 3.472v2.188c0 .629.464 1.094 1.093 1.094h7.438a1.08 1.08 0 0 0 1.094-1.094v-2.188c0-.355.273-.656.656-.656.355 0 .656.3.656.656v2.188a2.41 2.41 0 0 1-2.406 2.406H2.78a2.39 2.39 0 0 1-2.406-2.406v-2.188c0-.355.273-.656.656-.656.356 0 .657.3.657.656' />
    </g>
    <defs>
      <clipPath id='6dc4bc945222f4ff94da15944133de97__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketSmBoldIcon);
export default ForwardRef;
