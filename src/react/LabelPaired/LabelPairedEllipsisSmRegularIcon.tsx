import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisSmRegularIcon = (
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
      <path d='M11.75 10.75a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629m-4.375 0a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629m-5.25.875a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246A.85.85 0 0 1 3 10.75a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246' />
    </g>
    <defs>
      <clipPath id='2f1f5d8bf41e7607db72e6ca50d17774__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmRegularIcon);
export default ForwardRef;
