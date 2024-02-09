import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.25q.031-.72.625-1.094a1.33 1.33 0 0 1 1.25 0q.594.375.625 1.094-.031.72-.625 1.094a1.33 1.33 0 0 1-1.25 0q-.594-.375-.625-1.094m-1.25 4q.063-.687.75-.75H3q.687.063.75.75v8.25h1.5q.687.063.75.75-.063.687-.75.75H.75q-.687-.063-.75-.75.063-.687.75-.75h1.5V11h-1q-.687-.063-.75-.75' />
    </g>
    <defs>
      <clipPath id='2dae4914cffeeec8af0ec102bfc6cff5__a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdBoldIcon);
export default ForwardRef;
