import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 5.5H2a.88.88 0 0 0-.875.875V12.5c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875V6.375a.9.9 0 0 0-.875-.875M2 14.25c-.984 0-1.75-.766-1.75-1.75V6.375c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75V12.5c0 .984-.793 1.75-1.75 1.75H8.07L8.645 16h1.668a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.437A.43.43 0 0 1 2 16.438.45.45 0 0 1 2.438 16h1.64l.574-1.75zM5.008 16h2.707l-.574-1.75H5.582zm9.68-10.5a.45.45 0 0 0-.438.438V7.25h2.625V5.938a.47.47 0 0 0-.437-.438zm-.438 2.625V9h2.625v-.875zm0 7.438c0 .246.191.437.438.437h1.75a.45.45 0 0 0 .437-.437V9.875H14.25zm-.875-9.625c0-.711.574-1.313 1.313-1.313h1.75c.71 0 1.312.602 1.312 1.313v9.625c0 .738-.602 1.312-1.312 1.312h-1.75a1.296 1.296 0 0 1-1.313-1.312zm2.188 7.656a.63.63 0 0 1-.657-.656c0-.356.274-.657.656-.657.356 0 .657.301.657.656 0 .383-.301.657-.657.657' />
    </g>
    <defs>
      <clipPath id='f3c30e6f0a3a98c4ff26a19d2abc8be6__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerSmRegularIcon);
export default ForwardRef;
