import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h6.875a5.4 5.4 0 0 0 1.406 1.5H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407v1.375c-.562.156-1.062.375-1.5.687V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5M13.5 11c1.594 0 3.063.875 3.875 2.25a4.46 4.46 0 0 1 0 4.5A4.46 4.46 0 0 1 13.5 20a4.47 4.47 0 0 1-3.906-2.25 4.46 4.46 0 0 1 0-4.5A4.54 4.54 0 0 1 13.5 11m0 3a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75c0 .438.313.75.75.75m-1 1.5c0 .281.219.5.5.5v1.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5v-2c0-.25-.25-.5-.5-.5H13c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='e09e2fc1a56bb31373e7a7b22b5778ab__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoMdBoldIcon);
export default ForwardRef;
