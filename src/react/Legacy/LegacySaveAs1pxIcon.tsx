import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySaveAs1pxIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333' fillRule='evenodd' clipRule='evenodd'>
      <path d='M3.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H4V9.5A1.5 1.5 0 0 1 5.5 8H11v1H5.5a.5.5 0 0 0-.5.5V13h2v1H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2h6.793a1 1 0 0 1 .707.293l2.56 2.56A1.5 1.5 0 0 1 14 5.915V7h-1V5.914a.5.5 0 0 0-.146-.353L11 3.707V5.5A1.5 1.5 0 0 1 9.5 7h-4A1.5 1.5 0 0 1 4 5.5V3zM5 3v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V3zM15.03 7.97a.75.75 0 0 1 0 1.06L9.06 15H8v-1.06l5.97-5.97a.75.75 0 0 1 1.06 0' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacySaveAs1pxIcon);
export default ForwardRef;
