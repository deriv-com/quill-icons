import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowDown1pxIcon = (
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
    <path d='M8 2a.5.5 0 0 1 .5.5v9.792l2.646-2.646a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708l-3.5 3.5-.052.044A.5.5 0 0 1 8 14l.072-.005L8.02 14H8a.5.5 0 0 1-.151-.023.5.5 0 0 1-.203-.123l.052.044-.04-.033-.012-.011-3.5-3.5a.5.5 0 0 1 .708-.708L7.5 12.292V2.5a.5.5 0 0 1 .41-.492z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowDown1pxIcon);
export default ForwardRef;
