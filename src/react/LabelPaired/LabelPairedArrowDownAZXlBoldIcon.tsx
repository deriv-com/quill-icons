import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.203 23.672q-.655-.797 0-1.594.797-.655 1.594 0l2.578 2.578V8.625Q6.47 7.595 7.5 7.5q1.032.095 1.125 1.125v16.031l2.578-2.578q.797-.655 1.594 0 .656.797 0 1.594l-4.5 4.5q-.797.656-1.594 0zM16.5 19.5h6q.704.047 1.031.656a1.23 1.23 0 0 1-.187 1.219l-4.36 4.875H22.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6q-.703-.047-1.031-.656a1.23 1.23 0 0 1 .187-1.219l4.36-4.875H16.5q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125m3-12q.704.046.984.61l3.75 7.5q.375.984-.468 1.5-.985.375-1.5-.47l-.657-1.265h-4.218l-.657 1.266q-.515.843-1.5.515-.843-.562-.468-1.547l3.75-7.5q.328-.609.984-.609m-.984 5.625h1.968l-.984-1.969z' />
    </g>
    <defs>
      <clipPath id='9675187944752906__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlBoldIcon);
export default ForwardRef;
