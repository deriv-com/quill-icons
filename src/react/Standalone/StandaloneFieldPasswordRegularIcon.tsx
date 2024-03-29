import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFieldPasswordRegularIcon = (
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
    <path d='M7.25 10.875c-1.055 0-1.875.86-1.875 1.875v7.5c0 1.055.82 1.875 1.875 1.875h17.5c1.016 0 1.875-.82 1.875-1.875v-7.5c0-1.016-.86-1.875-1.875-1.875zM4.125 12.75A3.11 3.11 0 0 1 7.25 9.625h17.5a3.134 3.134 0 0 1 3.125 3.125v7.5a3.11 3.11 0 0 1-3.125 3.125H7.25c-1.758 0-3.125-1.367-3.125-3.125zm16.25 7.5a.617.617 0 0 1-.625-.625v-6.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625v6.25a.64.64 0 0 1-.625.625M8.5 16.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFieldPasswordRegularIcon);
export default ForwardRef;
