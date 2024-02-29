import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownCaptionRegularIcon = (
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
      <path d='M.75 9.5q.024 1.43.703 2.625a5.4 5.4 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.4 5.4 0 0 0 1.922-1.922A5.4 5.4 0 0 0 11.25 9.5a5.4 5.4 0 0 0-.703-2.625 5.4 5.4 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.4 5.4 0 0 0-1.922 1.922A5.4 5.4 0 0 0 .75 9.5M12 9.5a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3m-6.258 3.633-2.25-2.25a.37.37 0 0 1-.094-.399q.118-.234.352-.234h4.5a.43.43 0 0 1 .352.234.37.37 0 0 1-.094.399l-2.25 2.25q-.258.234-.516 0M4.664 11 6 12.336 7.336 11zM3.492 8.117l2.25-2.25q.258-.234.516 0l2.25 2.25q.234.258 0 .516-.258.234-.516 0L6 6.664 4.008 8.633q-.258.234-.516 0-.234-.258 0-.516' />
    </g>
    <defs>
      <clipPath id='8e16becdfa60a96fe282456d04a7e80c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownCaptionRegularIcon);
export default ForwardRef;
