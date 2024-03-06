import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 16.438h6.043q.492.765 1.23 1.285a1.4 1.4 0 0 1-.273.027h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258v1.203a4.7 4.7 0 0 0-1.312.575V8.125H7.124a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H1.875q-.41.027-.437.437V16q.027.41.437.438m10.063-6.563q1.066 0 1.968.52.903.519 1.45 1.449.519.93.519 1.969 0 1.038-.52 1.968a3.95 3.95 0 0 1-1.449 1.45 3.9 3.9 0 0 1-1.969.519q-1.066 0-1.968-.52a3.95 3.95 0 0 1-1.45-1.449A4 4 0 0 1 8 13.812q0-1.038.52-1.968a3.95 3.95 0 0 1 1.449-1.45 3.9 3.9 0 0 1 1.969-.519m0 2.625q.601-.055.656-.656-.055-.602-.656-.656-.602.054-.657.656.055.601.656.656m-.876 1.313q.028.41.438.437v1.313q-.41.027-.437.437.027.41.437.438h.875q.41-.028.438-.438-.028-.41-.438-.437v-1.75q-.027-.411-.437-.438H11.5q-.41.027-.437.438' />
    </g>
    <defs>
      <clipPath id='c47ff5dc37653ec73e83ce27522e28e4__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoSmBoldIcon);
export default ForwardRef;
