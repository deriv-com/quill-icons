import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6h1q.625.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 2.5 18h-1a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 16.5v-9q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 6m6 0h1q.624.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 8.5 18h-1a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 6 16.5v-9q.03-.625.438-1.062A1.63 1.63 0 0 1 7.5 6' />
    </g>
    <defs>
      <clipPath id='501744b167fb730a469332522aa30fb1__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdFillIcon);
export default ForwardRef;
