import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeMdRegularIcon = (
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
      <path d='M2 6c-.562 0-1 .469-1 1v10c0 .563.438 1 1 1h14c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1zM0 7c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3 1.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zm9 0c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zm2.5-.5c.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-7c0-.25.219-.5.5-.5M5 8.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zM7.5 8c.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-7c0-.25.219-.5.5-.5m2 .5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v7c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5z' />
    </g>
    <defs>
      <clipPath id='3c9513ac3485fbb3d0a34ac605eff842__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeMdRegularIcon);
export default ForwardRef;
