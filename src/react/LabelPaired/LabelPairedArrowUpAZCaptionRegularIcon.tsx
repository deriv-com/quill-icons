import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZCaptionRegularIcon = (
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
      <path d='m4.258 4.367 2.25 2.25q.234.258 0 .516-.258.234-.516 0L4.375 5.539v8.836q-.023.352-.375.375-.352-.023-.375-.375V5.539L2.008 7.133q-.258.234-.516 0-.234-.258 0-.516l2.25-2.25q.258-.234.516 0M8.5 10.25h3q.235 0 .328.21a.4.4 0 0 1-.023.4L9.273 14H11.5q.352.023.375.375-.023.352-.375.375h-3a.33.33 0 0 1-.328-.21.37.37 0 0 1 .047-.4L10.727 11H8.5q-.352-.023-.375-.375.023-.352.375-.375m1.5-6q.235 0 .328.21l1.5 3h.024l.351.75q.141.33-.164.493-.304.141-.492-.164L11.266 8H8.734l-.28.54q-.165.303-.493.163-.305-.164-.164-.492l.375-.75 1.5-3A.33.33 0 0 1 10 4.25m-.89 3h1.78L10 5.469z' />
    </g>
    <defs>
      <clipPath id='af7b1281f4568bce9e0fcffed6b0ad11__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionRegularIcon);
export default ForwardRef;
