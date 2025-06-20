import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightMdRegularIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h5.656c.532 0 1.032.219 1.407.594l2.343 2.343c.375.375.594.875.594 1.407v1.875a3.5 3.5 0 0 0-1 .406V8.344c0-.281-.125-.531-.312-.719L8.375 5.313A1.02 1.02 0 0 0 7.656 5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h7.25c.313.375.656.719 1.031 1H2c-1.125 0-2-.875-2-2zm9 9.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5C11 20 9 18 9 15.5m1 0c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m1 0c0-.25.219-.5.5-.5h2.781l-.906-.875a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l1.75 1.75a.53.53 0 0 1 0 .719l-1.75 1.75a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l.906-.906H11.5a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='ba75354b539d73bca1f8e72d72f74929__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightMdRegularIcon);
export default ForwardRef;
