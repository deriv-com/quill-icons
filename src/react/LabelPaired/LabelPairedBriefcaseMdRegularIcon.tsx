import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseMdRegularIcon = (
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
      <path d='M5 5.5V7h6V5.5c0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5M4 7V5.5A1.5 1.5 0 0 1 5.5 4h5c.813 0 1.5.688 1.5 1.5V7h2c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2zm7.5 1H2c-.562 0-1 .469-1 1v3h14V9c0-.531-.469-1-1-1zm3.5 5h-4.5v1.5c0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1V13H1v4c0 .563.438 1 1 1h12c.531 0 1-.437 1-1zm-8.5 0v1.5h3V13z' />
    </g>
    <defs>
      <clipPath id='0cdb9f71d9ed20c0da6fb0b47048a29f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseMdRegularIcon);
export default ForwardRef;
