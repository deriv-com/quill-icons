import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutSmRegularIcon = (
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
      <path d='M12.25 5.5H1.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v1.75h12.25v-1.75a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246M.875 15.125q0 .383.246.629A.85.85 0 0 0 1.75 16h2.625V9h-3.5zM5.25 16h7a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V9H5.25zM1.75 4.625h10.5q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52' />
    </g>
    <defs>
      <clipPath id='c9b3bd26fa55a0b9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutSmRegularIcon);
export default ForwardRef;
