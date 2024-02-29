import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.07 24.055.195 17.18q-.39-.43 0-.86.43-.39.86 0l5.82 5.782V7.375q.039-.585.625-.625.585.039.625.625v14.727l5.82-5.782q.43-.39.86 0 .39.43 0 .86L7.93 24.055q-.43.39-.86 0' />
    </g>
    <defs>
      <clipPath id='e5c44b1fc93a1d386b90d34a596cdb98__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgRegularIcon);
export default ForwardRef;
