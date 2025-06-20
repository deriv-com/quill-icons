import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenMdFillIcon = (
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
      <path d='M2 5h7.563A2.06 2.06 0 0 1 11 5.594L13.406 8c.375.375.594.906.594 1.438v1.937l-4.969 4.969c-.25.25-.437.562-.531.937L8.063 19H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m0 3v2c0 .563.438 1 1 1h6c.531 0 1-.437 1-1V8c0-.531-.469-1-1-1H3c-.562 0-1 .469-1 1m5 5c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.344-.594.344-1.375 0-2-.375-.594-1.031-1-1.719-1m10.156-1.625.469.469a1.265 1.265 0 0 1 0 1.75l-.937.937-2.22-2.219.938-.937a1.265 1.265 0 0 1 1.75 0M9.72 17.063 13.78 13 16 15.219l-4.062 4.062a.9.9 0 0 1-.438.25L9.594 20a.52.52 0 0 1-.469-.125.52.52 0 0 1-.125-.469l.469-1.906a.9.9 0 0 1 .25-.437' />
    </g>
    <defs>
      <clipPath id='8462835a720049695c8ff0c78a68f227__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenMdFillIcon);
export default ForwardRef;
