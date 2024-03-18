import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneForwardStepFillIcon = (
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
    <path d='M11.781 23.727c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133v-12.5c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l7.5 6.25.469.352V10.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5.664l-.469.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardStepFillIcon);
export default ForwardRef;
