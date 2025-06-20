import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 6.375A.45.45 0 0 0 1 6.813v7.875c0 .246.191.437.438.437H2.75a.45.45 0 0 0 .438-.437V6.812a.47.47 0 0 0-.438-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313H2.75c.71 0 1.313.602 1.313 1.313v7.875C4.063 15.426 3.46 16 2.75 16H1.438a1.296 1.296 0 0 1-1.313-1.312zm6.125-.438a.45.45 0 0 0-.437.438v7.875c0 .246.19.437.437.437h1.313A.45.45 0 0 0 8 14.688V6.812a.47.47 0 0 0-.437-.437zm-1.312.438c0-.711.574-1.313 1.312-1.313h1.313c.71 0 1.312.602 1.312 1.313v7.875c0 .738-.602 1.312-1.312 1.312H6.25a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='589bc7fd5f3c853f37fde613f119b7d1__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseSmRegularIcon);
export default ForwardRef;
