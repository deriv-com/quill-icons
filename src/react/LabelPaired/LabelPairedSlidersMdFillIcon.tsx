import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 17c0-.531.438-1 1-1h1.688c.406-.875 1.28-1.5 2.312-1.5 1 0 1.906.625 2.281 1.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H7.281C6.906 18.906 6 19.5 5 19.5A2.51 2.51 0 0 1 2.688 18H1c-.562 0-1-.437-1-1m4 0c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m6-5c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m1-2.5c1 0 1.906.625 2.281 1.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1.719c-.375.906-1.281 1.5-2.281 1.5A2.51 2.51 0 0 1 8.688 13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h7.688c.406-.875 1.28-1.5 2.312-1.5M6 8c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m2.281-2H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H8.281C7.906 8.906 7 9.5 6 9.5A2.51 2.51 0 0 1 3.688 8H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2.688C4.093 5.125 4.968 4.5 6 4.5c1 0 1.906.625 2.281 1.5' />
    </g>
    <defs>
      <clipPath id='a287907c97a7dd2a01890f4fb0007859__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersMdFillIcon);
export default ForwardRef;
