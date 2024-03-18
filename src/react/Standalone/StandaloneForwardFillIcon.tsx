import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneForwardFillIcon = (
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
    <path d='M8.031 23.727c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133v-12.5c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l6.719 5.586v3.242zM16 20.25v-10c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l7.5 6.25c.274.235.469.586.469.938 0 .39-.195.742-.469.977l-7.5 6.25c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardFillIcon);
export default ForwardRef;
