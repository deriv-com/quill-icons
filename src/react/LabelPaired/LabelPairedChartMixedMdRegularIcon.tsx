import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedMdRegularIcon = (
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
      <path d='M15.875 5.156q.281.375-.031.719l-5.5 5q-.345.25-.688-.031L5.937 7.156l-5.156 3.75q-.375.219-.687-.125-.219-.375.125-.687l5.5-4q.343-.219.625.062l3.687 3.657 5.125-4.688q.375-.28.719.031M2.5 17.5v-2q-.03-.469-.5-.5-.469.031-.5.5v2q.031.47.5.5.47-.03.5-.5M2 14q.625.03 1.063.438.405.437.437 1.062v2a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 2 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 .5 17.5v-2q.03-.625.438-1.062A1.63 1.63 0 0 1 2 14m4.5-1.5q-.03-.469-.5-.5-.469.031-.5.5v5q.031.47.5.5.47-.03.5-.5zm-2 0q.03-.625.438-1.062A1.63 1.63 0 0 1 6 11q.624.03 1.063.438.405.437.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 6 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 4.5 17.5zm6 5v-3q-.03-.469-.5-.5-.469.031-.5.5v3q.031.47.5.5.47-.03.5-.5M10 13q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 8.5 17.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 10 13m4.5-.5q-.03-.469-.5-.5-.469.031-.5.5v5q.031.47.5.5.47-.03.5-.5zm-2 0q.03-.625.438-1.062A1.63 1.63 0 0 1 14 11q.624.03 1.063.438.405.437.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 14 19a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 12.5 17.5z' />
    </g>
    <defs>
      <clipPath id='c078c35a53b112b4ae38273b2e3bea13__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedMdRegularIcon);
export default ForwardRef;
