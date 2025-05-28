import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightSmFillIcon = (
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
      <path d='m10.555 8.125-.465-.465a4.423 4.423 0 0 0-6.207 0 4.423 4.423 0 0 0 0 6.207 4.423 4.423 0 0 0 6.207 0c.328-.355.875-.355 1.23 0 .328.328.328.875 0 1.23a6.156 6.156 0 0 1-8.668 0 6.156 6.156 0 0 1 0-8.667 6.156 6.156 0 0 1 8.668 0l.492.492V5.5c0-.465.383-.875.876-.875a.9.9 0 0 1 .874.875V9c0 .492-.41.875-.874.875h-3.5A.864.864 0 0 1 8.312 9c0-.465.383-.875.876-.875z' />
    </g>
    <defs>
      <clipPath id='a74893115b4ef3adb7219441e967a05c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightSmFillIcon);
export default ForwardRef;
