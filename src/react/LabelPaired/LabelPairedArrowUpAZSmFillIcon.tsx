import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZSmFillIcon = (
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
      <path d='M5.129 4.926 7.535 7.55c.328.355.3.902-.055 1.23a.867.867 0 0 1-1.23-.054l-.875-.957V16c0 .492-.41.875-.875.875A.864.864 0 0 1 3.625 16V7.77l-.902.957a.867.867 0 0 1-1.23.054.867.867 0 0 1-.056-1.23l2.407-2.625c.164-.192.41-.301.656-.301s.465.11.629.3M8.875 12.5c0-.465.383-.875.875-.875h3.5c.355 0 .656.219.793.547a.88.88 0 0 1-.191.957l-1.997 2.023h1.395c.465 0 .875.383.875.875a.9.9 0 0 1-.875.875h-3.5a.9.9 0 0 1-.82-.547.89.89 0 0 1 .191-.957l1.996-2.023H9.75a.864.864 0 0 1-.875-.875M11.5 4.625c.328 0 .629.191.766.492l1.75 3.5.437.875a.866.866 0 0 1-.383 1.176.867.867 0 0 1-1.175-.383l-.192-.41H10.27l-.192.41a.867.867 0 0 1-1.176.383.867.867 0 0 1-.382-1.176l.437-.875 1.75-3.5a.85.85 0 0 1 .793-.492m-.574 3.938h1.12L11.5 7.469z' />
    </g>
    <defs>
      <clipPath id='1c05add09dae17d93adfb29cd437c4f8__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmFillIcon);
export default ForwardRef;
