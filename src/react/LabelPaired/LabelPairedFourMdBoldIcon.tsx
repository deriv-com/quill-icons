import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.906 6.094 2 13.5h6.5V8.75q.063-.687.75-.75.687.063.75.75v4.75h1.25q.687.063.75.75-.063.687-.75.75H10v3.25q-.063.687-.75.75-.687-.063-.75-.75V15H.75q-.406 0-.656-.375-.187-.344 0-.719l4.5-8.5q.375-.594 1-.312.594.375.312 1' />
    </g>
    <defs>
      <clipPath id='a22a03f200367d9effe525391eed89b4__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourMdBoldIcon);
export default ForwardRef;
