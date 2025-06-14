import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.844 9.781c-.219.188-.531.188-.719 0-.187-.219-.187-.531 0-.719A14.04 14.04 0 0 1 10 5c3.813 0 7.313 1.563 9.844 4.063.187.187.187.5 0 .718-.188.188-.5.188-.719 0A12.85 12.85 0 0 0 10 6 12.87 12.87 0 0 0 .844 9.781M10 11a7.98 7.98 0 0 0-5.656 2.344c-.188.187-.5.187-.719 0a.49.49 0 0 1 0-.688A8.97 8.97 0 0 1 10 10.031c2.469 0 4.719 1 6.344 2.625a.49.49 0 0 1 0 .688c-.188.187-.5.187-.719 0A7.96 7.96 0 0 0 10 11m0 5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1m0 3a2.03 2.03 0 0 1-1.75-1c-.344-.594-.344-1.375 0-2 .375-.594 1.031-1 1.75-1 .688 0 1.344.406 1.719 1 .344.625.344 1.406 0 2A2.02 2.02 0 0 1 10 19' />
    </g>
    <defs>
      <clipPath id='f27c75e5f288b420b7042691eedd82d9__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiMdRegularIcon);
export default ForwardRef;
