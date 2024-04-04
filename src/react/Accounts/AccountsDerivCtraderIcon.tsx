import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDerivCtraderIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#E22526'
      d='M0 6a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z'
    />
    <path
      fill='#B51E1E'
      d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM30.532 2.068 25.044 32H26a6 6 0 0 0 6-6V6c0-1.504-.553-2.88-1.468-3.932'
    />
    <path
      fill='#fff'
      d='M9.007 17.071q0-.798.252-1.498a3.6 3.6 0 0 1 1.946-2.072q.7-.308 1.596-.308.588 0 1.078.112.49.098.952.294l-.434 1.666a5 5 0 0 0-.644-.196 3.4 3.4 0 0 0-.784-.084q-.924 0-1.386.574-.448.574-.448 1.512 0 .994.42 1.54.435.546 1.498.546.378 0 .812-.07a3.5 3.5 0 0 0 .798-.224l.294 1.708a5 5 0 0 1-.91.266 6 6 0 0 1-1.204.112q-1.008 0-1.736-.294a3.4 3.4 0 0 1-1.204-.826 3.3 3.3 0 0 1-.686-1.218q-.21-.715-.21-1.54M22.993 11.051v1.862h-2.926v7.84h-2.184v-7.84h-2.926v-1.862z'
    />
  </svg>
);
const ForwardRef = forwardRef(AccountsDerivCtraderIcon);
export default ForwardRef;
