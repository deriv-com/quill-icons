import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenMdBoldIcon = (
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
      <path d='M1.5 7v10c0 .281.219.5.5.5h6.438L8.062 19H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h7.656c.531 0 1.031.219 1.406.594l2.344 2.343L12.344 9 10 6.656v-.031V9.75a.74.74 0 0 1-.75.75h-6a.72.72 0 0 1-.75-.75V6.5H2c-.281 0-.5.25-.5.5m11.906.938c.375.375.594.875.594 1.406v2.031l-1.5 1.5V9.344A.5.5 0 0 0 12.344 9zM4 6.5V9h4.5V6.5zM5 14a2.02 2.02 0 0 1 1-1.719c.594-.344 1.375-.344 2 0 .594.375 1 1.031 1 1.719 0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 5 14m12.156-2.625.469.469a1.265 1.265 0 0 1 0 1.75l-.937.937-2.22-2.219.938-.937a1.265 1.265 0 0 1 1.75 0M9.72 17.063 13.78 13 16 15.219l-4.062 4.062a.9.9 0 0 1-.438.25L9.594 20a.52.52 0 0 1-.469-.125.52.52 0 0 1-.125-.469l.469-1.906a.9.9 0 0 1 .25-.437' />
    </g>
    <defs>
      <clipPath id='0b1a9f4b478d6939e2928a8053eb9cdc__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenMdBoldIcon);
export default ForwardRef;
