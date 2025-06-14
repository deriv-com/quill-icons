import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayMdRegularIcon = (
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
      <path d='M15 10H1v7c0 .563.438 1 1 1h12c.531 0 1-.437 1-1zm0-1V7a.93.93 0 0 0-.344-.719L11.937 9zM7.188 9h3.343l3-3h-3.344zM5.78 9l3-3H5.437l-3 3zM2 6c-.562 0-1 .469-1 1v2h.031l3-3zm14 3v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2zm-9.25 2.094 4.25 2.5c.156.094.25.25.25.406a.5.5 0 0 1-.25.438l-4.25 2.5a.48.48 0 0 1-.5 0c-.156-.094-.281-.25-.281-.438v-5c0-.156.125-.344.281-.406a.48.48 0 0 1 .5 0m3 2.906L7 12.375v3.25z' />
    </g>
    <defs>
      <clipPath id='bde86aafc9442a9a9fd0db3e938a8d2f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayMdRegularIcon);
export default ForwardRef;
