import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.164 14.836c.352.39.352.976 0 1.328l-7.5 7.5c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.289l6.836-6.836-6.836-6.875a.855.855 0 0 1 0-1.289.855.855 0 0 1 1.289 0z' />
    </g>
    <defs>
      <clipPath id='2e242a6f2d35af3fb2e21b69d3d130c8__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgBoldIcon);
export default ForwardRef;
