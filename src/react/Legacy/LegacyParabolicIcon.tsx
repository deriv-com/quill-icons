import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyParabolicIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m9.976 17.651 2.122 2.122-2.122 2.12-2.12-2.12zm3.18-3.187 2.122 2.121-2.122 2.122-2.12-2.122zm3.18-3.177 2.122 2.121-2.122 2.122-2.12-2.122zm-5.157-.727 2.122 2.122-2.122 2.12-2.121-2.12zm8.347-2.45 2.122 2.121-2.122 2.121-2.12-2.121zM8 7.383l2.122 2.121-2.122 2.122-2.121-2.122zM4.82 4.196l2.122 2.121-2.122 2.121-2.121-2.12z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyParabolicIcon);
export default ForwardRef;
