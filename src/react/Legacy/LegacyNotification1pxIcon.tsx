import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyNotification1pxIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M6.5 1.5a1.5 1.5 0 1 1 3 0v.53A4 4 0 0 1 13 5.993v5.39l.947 1.894A.5.5 0 0 1 13.5 14h-11a.5.5 0 0 1-.447-.724L3 11.382V5.99a4 4 0 0 1 3.5-3.96zM8 1a.5.5 0 0 0-.5.5v.999A.5.5 0 0 1 6.999 3 3 3 0 0 0 4 5.99v5.628L3.309 13h9.382L12 11.618V5.992A3 3 0 0 0 9.001 3a.5.5 0 0 1-.501-.501V1.5A.5.5 0 0 0 8 1' />
      <path d='M6 13h4v1a2 2 0 1 1-4 0zm3 1H7a1 1 0 1 0 2 0' />
    </g>
    <defs>
      <clipPath id='c861a30e44e17add069b465bfcca8be7__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyNotification1pxIcon);
export default ForwardRef;
