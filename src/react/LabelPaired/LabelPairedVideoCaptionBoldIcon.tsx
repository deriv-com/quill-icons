import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.125q-.352.023-.375.375v6q.023.352.375.375h6q.352-.023.375-.375v-6q-.023-.352-.375-.375zM.25 6.5q.024-.632.445-1.055Q1.117 5.024 1.75 5h6q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zm12.375 5.508V6.992L10 8.164V6.922l2.438-1.078a.9.9 0 0 1 .398-.094q.374 0 .633.281.28.257.281.657v5.648q0 .374-.281.633a.83.83 0 0 1-.633.281q-.21 0-.399-.07L10 12.078v-1.242z' />
    </g>
    <defs>
      <clipPath id='b6a1afed211434be9eb70561fdd6bb8b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionBoldIcon);
export default ForwardRef;
