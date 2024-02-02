import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 10.5q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898Q1.952 8 2.5 8q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m0 6.25q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m1.25 5q0 .547-.352.898Q3.048 23 2.5 23q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898M7.5 10.5q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898Q6.952 8 7.5 8q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352m1.25 5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898M7.5 23q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898Q8.048 23 7.5 23' />
    </g>
    <defs>
      <clipPath id='2b67713700c229e210f3872a88378cac__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalLgBoldIcon);
export default ForwardRef;
