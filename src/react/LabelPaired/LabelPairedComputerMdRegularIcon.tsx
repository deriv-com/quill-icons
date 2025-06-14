import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 6H2c-.562 0-1 .469-1 1v7c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1M2 16c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H8.938l.656 2H11.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-9a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.875l.656-2zm3.438 2H8.53l-.656-2H6.094zM16.5 6c-.281 0-.5.25-.5.5V8h3V6.5c0-.25-.25-.5-.5-.5zM16 9v1h3V9zm0 8.5c0 .281.219.5.5.5h2c.25 0 .5-.219.5-.5V11h-3zm-1-11A1.5 1.5 0 0 1 16.5 5h2c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a1.48 1.48 0 0 1-1.5-1.5zm2.5 8.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='336b35ae1c2285bb46e13387bc67fdb2__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMdRegularIcon);
export default ForwardRef;
