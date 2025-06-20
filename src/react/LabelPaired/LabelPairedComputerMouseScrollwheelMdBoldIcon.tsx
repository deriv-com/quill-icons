import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelMdBoldIcon = (
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
      <path d='M10.5 15V9c0-1.906-1.594-3.5-3.5-3.5H5C3.063 5.5 1.5 7.094 1.5 9v6c0 1.938 1.563 3.5 3.5 3.5h2c1.906 0 3.5-1.562 3.5-3.5M0 9c0-2.75 2.219-5 5-5h2c2.75 0 5 2.25 5 5v6c0 2.781-2.25 5-5 5H5c-2.781 0-5-2.219-5-5zm6-2c.531 0 1 .469 1 1v1c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='de0a3430ac613bd9a060bafb6b6990c1__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelMdBoldIcon);
export default ForwardRef;
