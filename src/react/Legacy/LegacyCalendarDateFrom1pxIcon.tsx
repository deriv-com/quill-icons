import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCalendarDateFrom1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M11.5 1a.5.5 0 0 1 .5.5V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2h6v-.5a.5.5 0 0 1 .5-.5M14 6H2v8h12zm-9 4.5a1 1 0 0 1 .866.5H11.5a.5.5 0 0 1 0 1l-5.634.001A1 1 0 1 1 5 10.5M12 8v1H4.5a.5.5 0 0 1 0-1zM4 3H2v2h12V3h-2v.5a.5.5 0 0 1-1 0V3H5v.5a.5.5 0 0 1-1 0z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyCalendarDateFrom1pxIcon);
export default ForwardRef;
