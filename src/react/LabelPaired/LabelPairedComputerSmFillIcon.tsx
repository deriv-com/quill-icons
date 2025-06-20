import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerSmFillIcon = (
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
      <path d='M10.75 6.375H2V12.5h8.75zM2 4.625h8.75c.957 0 1.75.793 1.75 1.75V12.5c0 .984-.793 1.75-1.75 1.75H7.523l.301.875h2.051a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-7A.864.864 0 0 1 2 16c0-.465.383-.875.875-.875h2.023l.301-.875H2c-.984 0-1.75-.766-1.75-1.75V6.375c0-.957.766-1.75 1.75-1.75m12.688 0h1.75c.71 0 1.312.602 1.312 1.313v9.625c0 .738-.602 1.312-1.312 1.312h-1.75a1.296 1.296 0 0 1-1.313-1.312V5.938c0-.711.574-1.313 1.313-1.313m.437 1.75a.45.45 0 0 0-.437.438c0 .246.19.437.437.437H16a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.438zm-.437 2.188c0 .246.19.437.437.437H16a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.438h-.875a.45.45 0 0 0-.437.438m.874 4.374a.88.88 0 0 0-.874.876c0 .492.382.874.874.874a.88.88 0 0 0 .876-.874.9.9 0 0 0-.875-.876' />
    </g>
    <defs>
      <clipPath id='4c1354b86ef61e9a29ff6a2ff6bd9c25__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerSmFillIcon);
export default ForwardRef;
