import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneExclamationFillIcon = (
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
    <path d='M17.25 9v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M16 25.25c-.586 0-1.094-.273-1.367-.781-.274-.469-.274-1.055 0-1.563A1.58 1.58 0 0 1 16 22.125a1.56 1.56 0 0 1 1.328.781c.274.508.274 1.094 0 1.563A1.48 1.48 0 0 1 16 25.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExclamationFillIcon);
export default ForwardRef;
