import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2MdBoldIcon = (
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
      <path d='M2.5 6.5v3h3v-3zM1 6.5q.03-.625.438-1.062A1.63 1.63 0 0 1 2.5 5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 9.5zm1.5 8v3h3v-3zm-1.5 0q.03-.625.438-1.062A1.63 1.63 0 0 1 2.5 13h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 17.5zm12.5-8h-3v3h3zm-3-1.5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 9.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 10.5 5m0 9.5v3h3v-3zm-1.5 0q.03-.625.438-1.062A1.63 1.63 0 0 1 10.5 13h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 17.5z' />
    </g>
    <defs>
      <clipPath id='09a3979ff88c532391d172f0886db6bb__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2MdBoldIcon);
export default ForwardRef;
