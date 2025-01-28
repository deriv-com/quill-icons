import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 4h2c2.75 0 5 2.25 5 5v6c0 2.781-2.25 5-5 5H5c-2.781 0-5-2.219-5-5V9c0-2.75 2.219-5 5-5m2 4c0-.531-.469-1-1-1-.562 0-1 .469-1 1v1c0 .563.438 1 1 1 .531 0 1-.437 1-1z' />
    </g>
    <defs>
      <clipPath id='3d04ebc3e495c25aae69b5089eacbe6b__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelMdFillIcon);
export default ForwardRef;
