import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelMdRegularIcon = (
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
      <path d='M11 15V9c0-2.187-1.812-4-4-4H5C2.781 5 1 6.813 1 9v6c0 2.219 1.781 4 4 4h2c2.188 0 4-1.781 4-4M0 9c0-2.75 2.219-5 5-5h2c2.75 0 5 2.25 5 5v6c0 2.781-2.25 5-5 5H5c-2.781 0-5-2.219-5-5zm6.5-1.5v2c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='bce062e55614783de366edac5ab4dff7__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelMdRegularIcon);
export default ForwardRef;
