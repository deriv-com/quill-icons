import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskMdFillIcon = (
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
      <path d='M2 5h7.563A2.06 2.06 0 0 1 11 5.594L13.406 8c.375.375.594.906.594 1.438V17c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m0 3v2c0 .563.438 1 1 1h6c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1H3c-.562 0-1 .469-1 1m5 5c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.344-.594.344-1.375 0-2-.375-.594-1.031-1-1.719-1' />
    </g>
    <defs>
      <clipPath id='421e554761d0b3bb1520899eedf5c096__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskMdFillIcon);
export default ForwardRef;
