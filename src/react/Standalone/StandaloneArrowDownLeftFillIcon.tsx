import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownLeftFillIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M9.75 21.5v-8.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5.742l7.852-7.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-7.851 7.852h5.742c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownLeftFillIcon);
export default ForwardRef;
