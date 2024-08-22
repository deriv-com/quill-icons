import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareMdRegularIcon = (
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
      <path d='m8.344 4.156 3.25 3.25a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8.5 5.719V14c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V5.719L5.094 8.125a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3.25-3.25a.53.53 0 0 1 .719 0M2 5h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h12c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1h-1a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1c1.094 0 2 .906 2 2v11c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2' />
    </g>
    <defs>
      <clipPath id='a5eb28c85841e07ced169786b9e6316e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdRegularIcon);
export default ForwardRef;
