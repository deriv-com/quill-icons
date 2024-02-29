import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.125 4.813v.937h3.75v-.937q-.024-.165-.187-.188H4.313q-.165.024-.188.188M3 5.75v-.937q.023-.563.375-.938.375-.352.938-.375h3.375q.562.023.937.375.352.375.375.938v.937h1.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-6q.024-.632.445-1.055.423-.421 1.055-.445zm-1.875 4.875v2.625q.023.352.375.375h9q.352-.023.375-.375v-2.625H7.5V11a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-1.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54v-.375zM4.5 9.5h6.375V7.25q-.023-.352-.375-.375h-9q-.352.023-.375.375V9.5z' />
    </g>
    <defs>
      <clipPath id='c1af983c502ed6f617f44aa1897e5130__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseCaptionBoldIcon);
export default ForwardRef;
