import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraMdRegularIcon = (
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
      <path d='M5.969 5H10c.656 0 1.219.438 1.438 1.031L11.75 7H14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2h2.219l.312-.969C4.75 5.438 5.313 5 5.97 5m-.5 1.344L5.03 7.687A.48.48 0 0 1 4.563 8H2c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h12c.531 0 1-.437 1-1V9c0-.531-.469-1-1-1h-2.594a.47.47 0 0 1-.469-.344L10.5 6.344C10.406 6.156 10.219 6 10 6H5.969c-.219 0-.407.156-.5.344M8 16.5a3.44 3.44 0 0 1-3.031-1.75c-.657-1.062-.657-2.406 0-3.5A3.5 3.5 0 0 1 8 9.5c1.25 0 2.375.688 3 1.75.656 1.094.656 2.438 0 3.5a3.43 3.43 0 0 1-3 1.75M5.5 13c0 .906.469 1.719 1.25 2.188.75.437 1.719.437 2.5 0 .75-.47 1.25-1.282 1.25-2.188 0-.875-.5-1.687-1.25-2.156-.781-.438-1.75-.438-2.5 0-.781.469-1.25 1.281-1.25 2.156' />
    </g>
    <defs>
      <clipPath id='75662cdbc91e6781fdc6dacff338cf82__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraMdRegularIcon);
export default ForwardRef;
