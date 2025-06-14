import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleMdBoldIcon = (
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
      <path d='M14 4c1.094 0 2 .906 2 2v4c0 .281-.25.5-.5.5h-1.625a.38.38 0 0 0-.375.375V11c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-.125a.4.4 0 0 0-.375-.375H10a.494.494 0 0 1-.5-.5V9c0-.25.219-.5.5-.5h.5c.531 0 1-.437 1-1 0-.531-.469-1-1-1H10a.494.494 0 0 1-.5-.5V4.5c0-.25.219-.5.5-.5zM0 11.5V8c0-1.094.875-2 2-2h4.5c.25 0 .5.25.5.5v1.625c0 .219.156.375.375.375H7.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-.125a.38.38 0 0 0-.375.375V12.5c0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5V12c0-.531-.469-1-1-1-.562 0-1 .469-1 1v.5c0 .281-.25.5-.5.5h-1v4.75c0 .438.313.75.75.75H7v-1.125A.4.4 0 0 0 6.625 17H6.5c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.125A.38.38 0 0 0 7 14.625V13.5c0-.25.219-.5.5-.5H9c.25 0 .5.25.5.5v.5c0 .563.438 1 1 1 .531 0 1-.437 1-1v-.5c0-.25.219-.5.5-.5h1.5c.25 0 .5.25.5.5V18c0 1.125-.906 2-2 2H2.25C1 20 0 19 0 17.75V11.5' />
    </g>
    <defs>
      <clipPath id='156695b30a2febc66c32f2e72ff56234__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleMdBoldIcon);
export default ForwardRef;
