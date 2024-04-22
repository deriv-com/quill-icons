import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1h14c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1zM0 8c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm2.75.25h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m-.5 3.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 2.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2.5-5.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 2.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2.5-2.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 2.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2.5-2.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 2.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m2.5-2.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 2.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m-.5 3.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zM5.5 14.5h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7A.494.494 0 0 1 5 15c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='8417e988b1acb0bbfff029b89704889a__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardMdRegularIcon);
export default ForwardRef;
