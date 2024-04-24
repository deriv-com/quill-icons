import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.875a.64.64 0 0 0-.625.625v.898l6.719 5.508a2.18 2.18 0 0 0 2.773 0l6.758-5.508V10.5c0-.312-.312-.625-.625-.625zm-.625 3.945v6.68c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-6.68l-5.547 4.532c-1.523 1.25-3.672 1.25-5.156 0zM0 10.5C0 9.133 1.094 8 2.5 8h15c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 20.5z' />
    </g>
    <defs>
      <clipPath id='d83c2679875f065c641e99d443466ff2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgBoldIcon);
export default ForwardRef;
