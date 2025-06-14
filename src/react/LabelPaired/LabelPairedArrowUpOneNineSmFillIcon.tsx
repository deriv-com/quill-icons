import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineSmFillIcon = (
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
      <path d='M12.43 4.79a.86.86 0 0 1 .383.71v2.625h.437a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-2.625A.864.864 0 0 1 9.75 9c0-.465.383-.875.875-.875h.438V6.73l-.165.055a.92.92 0 0 1-1.12-.547.92.92 0 0 1 .546-1.12l1.313-.438a.9.9 0 0 1 .793.136zM4.5 4.624c.246 0 .465.11.629.3l2.406 2.626c.328.355.3.902-.055 1.23a.867.867 0 0 1-1.23-.054l-.875-.957V16c0 .492-.41.875-.875.875A.864.864 0 0 1 3.625 16V7.77l-.902.957a.867.867 0 0 1-1.23.054.867.867 0 0 1-.056-1.23l2.407-2.625c.164-.192.41-.301.656-.301m7.793 9.106a.84.84 0 0 0 .41-1.149.87.87 0 0 0-1.148-.437.877.877 0 0 0-.41 1.175.84.84 0 0 0 1.148.41m-1.094 1.503c-.984-.3-1.668-1.203-1.668-2.296a2.41 2.41 0 0 1 2.406-2.407 2.43 2.43 0 0 1 2.407 2.406c0 .657-.219 1.286-.602 1.805l-1.34 1.777c-.273.41-.82.493-1.23.192-.383-.273-.465-.82-.164-1.23z' />
    </g>
    <defs>
      <clipPath id='8f322790fcacf519a374e8ccc3ab8ca6__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineSmFillIcon);
export default ForwardRef;
