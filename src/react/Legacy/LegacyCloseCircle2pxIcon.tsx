import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCloseCircle2pxIcon = (
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
    <rect width={16} height={16} rx={8} />
    <path
      fillRule='evenodd'
      d='M5.293 5.293a1 1 0 0 1 1.414 0L8 6.586l1.293-1.293a1 1 0 0 1 1.414 1.414L9.414 8l1.293 1.293a1 1 0 0 1-1.414 1.414L8 9.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L6.586 8 5.293 6.707a1 1 0 0 1 0-1.414'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyCloseCircle2pxIcon);
export default ForwardRef;
