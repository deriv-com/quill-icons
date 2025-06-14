import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 6.75h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m2.188 3.75a.925.925 0 0 0-.938.938v8.124c0 .547.39.938.938.938.507 0 .937-.39.937-.937v-8.125a.95.95 0 0 0-.937-.938m2.187.625v8.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-8.75c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625m3.438-.625a.925.925 0 0 0-.938.938v8.124c0 .547.39.938.938.938.507 0 .937-.39.937-.937v-8.125a.95.95 0 0 0-.937-.938m3.437.938v8.124c0 .547.39.938.938.938.507 0 .937-.39.937-.937v-8.125a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938m4.375-.938a.64.64 0 0 0-.625.625v8.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-8.75c0-.312-.312-.625-.625-.625' />
    </g>
    <defs>
      <clipPath id='b048a8e14dd17038735cb124a61cccdb__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeLgFillIcon);
export default ForwardRef;
