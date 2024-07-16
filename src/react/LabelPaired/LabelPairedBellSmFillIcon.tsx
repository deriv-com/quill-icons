import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSmFillIcon = (
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
      <path d='M6.5 3.75a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.519c0 1.285.465 2.543 1.313 3.5l.19.219c.247.273.302.629.165.957a.88.88 0 0 1-.793.492H1.25c-.355 0-.684-.191-.82-.492a.89.89 0 0 1 .164-.957l.191-.219a5.32 5.32 0 0 0 1.34-3.5v-.52c0-2.105 1.504-3.882 3.5-4.265v-.547c0-.465.383-.875.875-.875m1.23 13.508a1.71 1.71 0 0 1-1.23.492c-.465 0-.93-.164-1.258-.492S4.75 16.465 4.75 16h3.5c0 .465-.191.93-.52 1.258' />
    </g>
    <defs>
      <clipPath id='0d87425289d5c38344e543b448315636__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmFillIcon);
export default ForwardRef;
