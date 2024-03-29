import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoSmFillIcon = (
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
      <path d='M4.008 6.375c-.574 0-1.149.246-1.559.656l-.847.848a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l.847-.848a3.98 3.98 0 0 1 2.789-1.176A3.98 3.98 0 0 1 8 8.617a3.98 3.98 0 0 1-1.176 2.79l-3.719 3.718H8a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H1c-.355 0-.684-.191-.82-.52a.89.89 0 0 1 .191-.957l5.223-5.222c.41-.41.656-.985.656-1.559a2.25 2.25 0 0 0-2.242-2.242' />
    </g>
    <defs>
      <clipPath id='36fab8466daf655d6b08538a7723617f__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmFillIcon);
export default ForwardRef;
