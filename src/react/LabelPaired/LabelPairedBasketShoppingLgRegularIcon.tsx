import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingLgRegularIcon = (
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
      <path d='M13.023 5.617a.62.62 0 0 1 .86.196L18.102 13h4.023c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937l-2.344 9.375c-.274 1.094-1.29 1.875-2.422 1.875H6.578c-1.172 0-2.148-.781-2.46-1.875L1.811 14.25H.876a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H4.86l4.218-7.187a.62.62 0 0 1 .86-.196c.273.156.39.547.195.86L6.305 13h10.351l-3.828-6.523a.62.62 0 0 1 .195-.86M3.102 14.25l2.265 9.063c.117.546.625.937 1.211.937h9.844c.547 0 1.055-.39 1.21-.937l2.266-9.063zM9 17.375v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625m2.5-.625c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m3.75.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='185a8506f5a3625e2d33b49921b51cbf__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingLgRegularIcon);
export default ForwardRef;
