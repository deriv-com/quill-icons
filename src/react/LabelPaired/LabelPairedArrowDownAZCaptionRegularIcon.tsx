import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZCaptionRegularIcon = (
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
      <path d='m6.508 12.383-2.25 2.25q-.258.234-.516 0l-2.25-2.25q-.234-.258 0-.516.258-.234.516 0l1.617 1.594V4.625q.023-.352.375-.375.352.023.375.375v8.836l1.617-1.594q.258-.234.516 0 .234.258 0 .516m3.82-7.922 1.5 2.976v.024l.375.75q.141.305-.164.492-.328.141-.492-.164L11.266 8H8.734l-.28.54q-.189.303-.493.163-.305-.164-.164-.492l.351-.75h.024l1.5-3A.33.33 0 0 1 10 4.25q.235 0 .328.21M10 5.469 9.11 7.25h1.78zM8.5 10.25h3q.235 0 .328.21a.4.4 0 0 1-.023.4L9.273 14H11.5q.352.023.375.375-.023.352-.375.375h-3a.33.33 0 0 1-.328-.21.37.37 0 0 1 .047-.4L10.727 11H8.5q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='e06ea50d2bd352311031d65968b225ff__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionRegularIcon);
export default ForwardRef;
