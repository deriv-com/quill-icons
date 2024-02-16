import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedMdBoldIcon = (
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
      <path d='m15.75 6.313-5.25 4.5q-.5.375-1 0L5.938 7.687l-4.782 3.188q-.594.312-1.031-.219-.312-.594.219-1.031l5.25-3.5q.468-.281.906.063L10 9.25l4.75-4.062q.563-.406 1.063.062.406.563-.063 1.063M6.25 17.5v-5q-.03-.22-.25-.25-.22.03-.25.25v5q.03.22.25.25.22-.03.25-.25M6 11q.624.03 1.063.438.405.437.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 6 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 4.5 17.5v-5q.03-.625.438-1.062A1.63 1.63 0 0 1 6 11m-3.75 6.5v-2q-.03-.22-.25-.25-.22.03-.25.25v2q.03.22.25.25.22-.03.25-.25M2 14q.625.03 1.063.438.405.437.437 1.062v2a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 2 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 .5 17.5v-2q.03-.625.438-1.062A1.63 1.63 0 0 1 2 14m8.25.5q-.03-.22-.25-.25-.22.03-.25.25v3q.03.22.25.25.22-.03.25-.25zm-1.75 0q.03-.625.438-1.062A1.63 1.63 0 0 1 10 13q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 8.5 17.5zm5.75 3v-5q-.03-.22-.25-.25-.22.03-.25.25v5q.03.22.25.25.22-.03.25-.25M14 11q.624.03 1.063.438.405.437.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 14 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 12.5 17.5v-5q.03-.625.438-1.062A1.63 1.63 0 0 1 14 11' />
    </g>
    <defs>
      <clipPath id='01597e395954dcdc55e93c50611f18b5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedMdBoldIcon);
export default ForwardRef;
