import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 9.5q0 1.335.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.84 4.84 0 0 0 6 14.376q1.29 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.7 4.7 0 0 0 .657-2.438q0-1.336-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.84 4.84 0 0 0 6 4.625q-1.29 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.67 4.67 0 0 0 1.125 9.5M12 9.5a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3m-5.742 3.633q-.258.234-.516 0l-2.25-2.25a.37.37 0 0 1-.094-.399q.118-.234.352-.234h4.5a.43.43 0 0 1 .352.234.37.37 0 0 1-.094.399zm0-7.266 2.25 2.25q.164.164.094.399-.118.234-.352.234h-4.5a.43.43 0 0 1-.352-.234.37.37 0 0 1 .094-.399l2.25-2.25q.258-.234.516 0M7.336 8 6 6.664 4.664 8z' />
    </g>
    <defs>
      <clipPath id='fe24826014eb3cf6468a6ce445a6a501__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownCaptionBoldIcon);
export default ForwardRef;
