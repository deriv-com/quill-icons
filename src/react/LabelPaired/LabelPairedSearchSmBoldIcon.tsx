import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchSmBoldIcon = (
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
      <path d='M10.063 9.438c0-1.56-.848-2.981-2.188-3.774a4.32 4.32 0 0 0-4.375 0 4.34 4.34 0 0 0-2.187 3.774c0 1.585.82 3.007 2.187 3.8a4.32 4.32 0 0 0 4.375 0c1.34-.793 2.188-2.215 2.188-3.8m-.848 4.484a5.73 5.73 0 0 1-3.527 1.203A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.34-.465 2.57-1.23 3.554l3.664 3.637c.246.273.246.683 0 .93-.274.273-.684.273-.93 0z' />
    </g>
    <defs>
      <clipPath id='41a56eb9e1aafab4c3b513c542b6a46b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmBoldIcon);
export default ForwardRef;
