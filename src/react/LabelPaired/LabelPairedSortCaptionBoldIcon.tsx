import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortCaptionBoldIcon = (
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
      <path d='M1.914 7.625h4.172L4 5.539zM4.54 4.461l3 3q.329.375.164.82A.77.77 0 0 1 7 8.75H1a.77.77 0 0 1-.703-.469q-.165-.445.164-.82l3-3A.78.78 0 0 1 4 4.25q.305 0 .54.21m-2.625 6.914L4 13.461l2.086-2.086zm2.625 3.164A.78.78 0 0 1 4 14.75a.78.78 0 0 1-.54-.21l-3-3q-.327-.375-.163-.821A.77.77 0 0 1 1 10.25h6a.77.77 0 0 1 .703.469q.165.445-.164.82z' />
    </g>
    <defs>
      <clipPath id='4b0ce87bc367cd548fb163393b5a5f64__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionBoldIcon);
export default ForwardRef;
