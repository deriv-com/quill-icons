import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillLgFillIcon = (
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
      <path d='M2.75 8h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5v-10C.25 9.133 1.344 8 2.75 8m2.5 12.5c0-1.367-1.133-2.5-2.5-2.5v2.5zM2.75 13c1.367 0 2.5-1.094 2.5-2.5h-2.5zm15 7.5h2.5V18a2.49 2.49 0 0 0-2.5 2.5m2.5-7.5v-2.5h-2.5c0 1.406 1.094 2.5 2.5 2.5m-8.75-1.25c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875 1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75-.703-1.133-1.914-1.875-3.242-1.875' />
    </g>
    <defs>
      <clipPath id='9a93f66f0f49c97db1d7dc5a128ae05c__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillLgFillIcon);
export default ForwardRef;
