import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 8v10c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V8zm0-1h12V6c0-.531-.469-1-1-1H2c-.562 0-1 .469-1 1zm13-1v12c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2M3.5 10h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 3h7c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 3h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='9a15f4bc95ac14a010daa57a8f82c6cc__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadMdRegularIcon);
export default ForwardRef;
