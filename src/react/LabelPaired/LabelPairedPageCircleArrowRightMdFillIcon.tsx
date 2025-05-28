import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightMdFillIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h5.656c.532 0 1.032.219 1.407.594l2.343 2.343c.375.375.594.875.594 1.407v1.875C9.688 10.875 8 13 8 15.5c0 1.844.906 3.5 2.281 4.5H2c-1.125 0-2-.875-2-2zm9 9.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5C11 20 9 18 9 15.5m2 0c0 .281.219.5.5.5h2.781l-.906.906a.53.53 0 0 0 0 .719.53.53 0 0 0 .719 0l1.75-1.75a.53.53 0 0 0 0-.719l-1.75-1.75a.53.53 0 0 0-.719 0 .53.53 0 0 0 0 .719l.906.875H11.5c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='e74286604f512894a48b1c9d9e1ad5c2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightMdFillIcon);
export default ForwardRef;
