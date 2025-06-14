import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleMdRegularIcon = (
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
      <path d='M10 4h4c1.094 0 2 .906 2 2v3.5c0 .563-.469 1-1 1h-1a1.5 1.5 0 0 1-1.5 1.5 1.48 1.48 0 0 1-1.5-1.5h-1c-.562 0-1-.437-1-1v-.75c0-.531.438-1 1-1h.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H10c-.562 0-1-.437-1-1V5c0-.531.438-1 1-1m0 1v.75h.5c.813 0 1.5.688 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H10v.75h1.5c.25 0 .5.25.5.5v.5c0 .281.219.5.5.5.25 0 .5-.219.5-.5V10c0-.25.219-.5.5-.5H15V6c0-.531-.469-1-1-1zM2 6h4.5c.531 0 1 .469 1 1v5.5h1c.531 0 1 .469 1 1v.5c0 .281.219.5.5.5.25 0 .5-.219.5-.5v-.5c0-.531.438-1 1-1H13c.531 0 1 .469 1 1V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2m4.5 1H2c-.562 0-1 .469-1 1v4.5h1.5V12A1.5 1.5 0 0 1 4 10.5c.813 0 1.5.688 1.5 1.5v.5h1zm-4 6.5H1V18c0 .563.438 1 1 1h4.5v-1.5H6A1.48 1.48 0 0 1 4.5 16 1.5 1.5 0 0 1 6 14.5h.5v-1h-1c-.562 0-1-.437-1-1V12c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v.5c0 .563-.469 1-1 1m5 4V19H12c.531 0 1-.437 1-1v-4.5h-1.5v.5a1.5 1.5 0 0 1-1.5 1.5A1.48 1.48 0 0 1 8.5 14v-.5h-1v1c0 .563-.469 1-1 1H6c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h.5c.531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='5018a43ccd8eeb91bd05f777b9b590d7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleMdRegularIcon);
export default ForwardRef;
