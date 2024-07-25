import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.559 16.875c-.711.137-1.395-.328-1.559-1.04l-.055-.327c-.164-.902-.683-1.723-1.394-2.297l-.192-.164a2.57 2.57 0 0 1-.984-2.05V7.96c0-.874.438-1.694 1.148-2.187L6.59 5.09c.437-.3.93-.465 1.45-.465h2.679c.71 0 1.312.602 1.312 1.313 0 .109-.027.218-.054.3a1.288 1.288 0 0 1 .738 1.914c.601.137 1.066.657 1.066 1.286 0 .437-.191.792-.492 1.039.41.218.711.656.711 1.148 0 .738-.602 1.313-1.312 1.313H8.75c.355.656.629 1.34.766 2.078l.082.3c.136.711-.328 1.395-1.04 1.559M.875 14.25A.864.864 0 0 1 0 13.375V7.25c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875v6.125c0 .492-.41.875-.875.875z' />
    </g>
    <defs>
      <clipPath id='baa935d83e13e3f5f18c05a26e4a59aa__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownSmFillIcon);
export default ForwardRef;
