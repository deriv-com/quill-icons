import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleMdFillIcon = (
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
      <path d='M10 4h4c1.094 0 2 .906 2 2v4c0 .281-.25.5-.5.5h-1.625a.38.38 0 0 0-.375.375V11c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-.125a.4.4 0 0 0-.375-.375H10a.494.494 0 0 1-.5-.5V9c0-.25.219-.5.5-.5h.5c.531 0 1-.437 1-1 0-.531-.469-1-1-1H10a.494.494 0 0 1-.5-.5V4.5c0-.25.219-.5.5-.5M0 12V8c0-1.094.875-2 2-2h4c.25 0 .5.25.5.5v1.125c0 .219.156.375.375.375H7c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.125a.38.38 0 0 0-.375.375V12c0 .281-.25.5-.5.5H5a.494.494 0 0 1-.5-.5v-.5c0-.531-.469-1-1-1-.562 0-1 .469-1 1v.5c0 .281-.25.5-.5.5H.5A.494.494 0 0 1 0 12m0 6v-4c0-.25.219-.5.5-.5H6c.25 0 .5.25.5.5v1c0 .281-.25.5-.5.5h-.5c-.562 0-1 .469-1 1 0 .563.438 1 1 1H6c.25 0 .5.25.5.5v1.5c0 .281-.25.5-.5.5H2c-1.125 0-2-.875-2-2m7.5-4c0-.25.219-.5.5-.5h1c.25 0 .5.25.5.5v.5c0 .563.438 1 1 1 .531 0 1-.437 1-1V14c0-.25.219-.5.5-.5h1.5c.25 0 .5.25.5.5v4c0 1.125-.906 2-2 2H8a.494.494 0 0 1-.5-.5z' />
    </g>
    <defs>
      <clipPath id='58fc3c06f346bf7dae1244fc7c397b1f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleMdFillIcon);
export default ForwardRef;
