import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMdFillIcon = (
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
      <path d='M12 7H2v7h10zM2 5h10c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H8.313l.343 1H11c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2.313l.343-1H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m14.5 0h2c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a1.48 1.48 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 16.5 5m.5 2c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5zm-.5 2.5c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5m1 5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1' />
    </g>
    <defs>
      <clipPath id='8b9f9de677ffd3e6421732bdd5c5cc41__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMdFillIcon);
export default ForwardRef;
