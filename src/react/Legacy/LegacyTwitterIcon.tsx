import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTwitterIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 17'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M14.362 4.737c.01.141.01.282.01.425 0 4.337-3.302 9.34-9.34 9.34v-.003A9.3 9.3 0 0 1 0 13.027q.39.047.781.048a6.6 6.6 0 0 0 4.077-1.408 3.29 3.29 0 0 1-3.067-2.28c.492.095 1 .076 1.482-.056A3.28 3.28 0 0 1 .64 6.113v-.041c.457.254.967.395 1.49.41A3.287 3.287 0 0 1 1.114 2.1 9.32 9.32 0 0 0 7.88 5.53a3.285 3.285 0 0 1 5.594-2.994 6.6 6.6 0 0 0 2.085-.797 3.3 3.3 0 0 1-1.443 1.815A6.5 6.5 0 0 0 16 3.037a6.7 6.7 0 0 1-1.638 1.7' />
  </svg>
);
const ForwardRef = forwardRef(LegacyTwitterIcon);
export default ForwardRef;
