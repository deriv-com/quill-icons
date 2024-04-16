import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyForward1pxIcon = (
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
    <path
      fill='#333'
      d='m8.87 2.164 5 5.5a.5.5 0 0 1 0 .672l-5 5.5a.5.5 0 1 1-.74-.672L12.824 8 8.13 2.836a.5.5 0 0 1 .74-.672m-5 0 5 5.5a.5.5 0 0 1 0 .672l-5 5.5a.5.5 0 1 1-.74-.672L7.824 8 3.13 2.836a.5.5 0 0 1 .74-.672'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyForward1pxIcon);
export default ForwardRef;
