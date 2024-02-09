import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m6.5-5q.47.031.5.5V8h2v-.5q.031-.469.5-.5.47.031.5.5V8h.5q.624.03 1.063.438.405.436.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10.5 16h-5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 4 14.5v-5q.03-.625.438-1.062A1.63 1.63 0 0 1 5.5 8H6v-.5q.031-.469.5-.5M5 9.5v.5h6v-.5q-.03-.469-.5-.5h-5q-.469.031-.5.5m6 1.5H5v3.5q.031.47.5.5h5q.47-.03.5-.5z' />
    </g>
    <defs>
      <clipPath id='0dc0e271a0fe86ac10817a074eb10c99__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarMdRegularIcon);
export default ForwardRef;
