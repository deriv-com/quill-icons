import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineMdBoldIcon = (
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
      <path d='M1.5 5.75v11q.063.687.75.75h13q.687.063.75.75-.063.687-.75.75h-13q-.969-.031-1.594-.656Q.032 17.719 0 16.75v-11Q.063 5.063.75 5q.687.063.75.75m13.281 3.531-4.25 4.25q-.531.438-1.062 0L7 11.062l-2.469 2.47q-.531.435-1.062 0-.438-.533 0-1.063l3-3A.72.72 0 0 1 7 9.25q.312 0 .531.219L10 11.938l3.719-3.72q.531-.435 1.062 0 .438.533 0 1.063' />
    </g>
    <defs>
      <clipPath id='5ad84388b564858a1428dfdecdfdee16__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdBoldIcon);
export default ForwardRef;
