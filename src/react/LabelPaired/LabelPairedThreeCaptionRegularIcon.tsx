import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 4.625c0-.187.164-.375.375-.375H7c.14 0 .281.094.328.258.07.14.024.305-.094.398L3.063 8.75H4.75c1.64 0 3 1.36 3 3 0 1.664-1.36 3-3 3H2.336c-.844 0-1.64-.469-2.016-1.242l-.047-.07a.385.385 0 0 1 .164-.516.385.385 0 0 1 .516.164L1 13.18c.258.515.773.82 1.336.82H4.75a2.25 2.25 0 0 0 0-4.5H2.125a.36.36 0 0 1-.352-.234.325.325 0 0 1 .094-.399L6.04 5H.625a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='0edb690665e695ecbc6e464ae6c7d908__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionRegularIcon);
export default ForwardRef;
