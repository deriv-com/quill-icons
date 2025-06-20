import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.43 4.79c.246.19.383.437.383.71v2.625h.437a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-2.625A.864.864 0 0 1 9.75 9c0-.465.383-.875.875-.875h.438V6.73l-.165.055a.92.92 0 0 1-1.12-.547.92.92 0 0 1 .546-1.12l1.313-.438c.273-.082.574-.055.793.11M4.5 16.874c-.246 0-.492-.082-.656-.273l-2.406-2.625a.867.867 0 0 1 .054-1.23.867.867 0 0 1 1.23.054l.903.957V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.258l.875-.957a.867.867 0 0 1 1.23-.055.867.867 0 0 1 .055 1.23L5.13 16.603a.8.8 0 0 1-.629.273m7.055-4.73a.877.877 0 0 0-.41 1.175.84.84 0 0 0 1.148.41.84.84 0 0 0 .41-1.148.87.87 0 0 0-1.148-.437m-.356 3.09a2.355 2.355 0 0 1-1.668-2.27 2.39 2.39 0 0 1 2.406-2.406 2.41 2.41 0 0 1 2.407 2.406c0 .629-.219 1.258-.602 1.777l-1.34 1.805a.84.84 0 0 1-1.203.164c-.41-.273-.492-.82-.191-1.23z' />
    </g>
    <defs>
      <clipPath id='5e32d6fcda163222a9db8d6e65323ca1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineSmFillIcon);
export default ForwardRef;
