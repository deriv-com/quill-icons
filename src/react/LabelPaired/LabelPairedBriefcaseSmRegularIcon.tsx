import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseSmRegularIcon = (
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
      <path d='M4.375 5.063v1.312h5.25V5.063q-.027-.411-.437-.438H4.812q-.41.027-.437.438M3.5 6.375V5.063q.027-.547.383-.93.383-.356.93-.383h4.375q.546.027.93.383.355.383.382.93v1.312h1.75q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-7q.027-.738.52-1.23.492-.493 1.23-.52zm6.563.875H1.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v2.625h12.25V8.125a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm3.062 4.375H9.188v1.313a.85.85 0 0 1-.247.628.85.85 0 0 1-.629.246H5.688a.85.85 0 0 1-.63-.246.85.85 0 0 1-.245-.629v-1.312H.874v3.5q0 .383.246.629A.85.85 0 0 0 1.75 16h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629zm-7.437 0v1.313h2.625v-1.313z' />
    </g>
    <defs>
      <clipPath id='a49889d6072c55a8384cc1d0f38900ad__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseSmRegularIcon);
export default ForwardRef;
