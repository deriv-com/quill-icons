import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightMdBoldIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h5.656c.532 0 1.032.219 1.407.594l2.343 2.343c.375.375.594.875.594 1.407v1.875c-.562.156-1.062.375-1.5.687V8.344A.5.5 0 0 0 10.344 8L8 5.656a.5.5 0 0 0-.344-.156H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5h6.875a5.4 5.4 0 0 0 1.406 1.5H2c-1.125 0-2-.875-2-2zm9 9.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5C11 20 9 18 9 15.5m2 0c0 .281.219.5.5.5h2.781l-.906.906a.53.53 0 0 0 0 .719.53.53 0 0 0 .719 0l1.75-1.75a.53.53 0 0 0 0-.719l-1.75-1.75a.53.53 0 0 0-.719 0 .53.53 0 0 0 0 .719l.906.875H11.5c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='0fd2ce73d3919b2bb9523b6ef32c0637__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightMdBoldIcon);
export default ForwardRef;
