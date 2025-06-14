import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 9.75H3c-.422 0-.75.375-.75.75V21c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V10.5c0-.375-.375-.75-.75-.75M3 24c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3V21c0 1.688-1.36 3-3 3h-4.078l.75 2.25h2.203c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.125C3.469 28.5 3 28.031 3 27.375c0-.61.469-1.125 1.125-1.125h2.156l.75-2.25zm5.672 2.25h3.61l-.75-2.25h-2.11zM24.75 9.75v1.5h3v-1.5zm0 3.75V15h3v-1.5zm3 3.75h-3v9h3zm-5.25-7.5a2.25 2.25 0 0 1 2.25-2.25h3C28.969 7.5 30 8.531 30 9.75v16.5a2.25 2.25 0 0 1-2.25 2.25h-3a2.22 2.22 0 0 1-2.25-2.25zm3.75 13.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='0f822fd704f1be17e0fc019e140100e5__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerXlBoldIcon);
export default ForwardRef;
