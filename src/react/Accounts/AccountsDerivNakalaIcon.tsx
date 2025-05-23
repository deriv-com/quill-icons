import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDerivNakalaIcon = (
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
      fill='#FF444F'
      d='M0 6a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z'
    />
    <path
      fill='#E12E3A'
      d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM30.532 2.068 25.044 32H26a6 6 0 0 0 6-6V6c0-1.504-.553-2.88-1.468-3.932'
    />
    <path
      fill='#fff'
      d='M9.686 18.847q.144.013.325.026h.455q1.521 0 2.25-.767.74-.767.74-2.119 0-1.418-.702-2.145t-2.223-.728q-.207 0-.429.013a3 3 0 0 0-.416.026zm5.863-2.86q.001 1.17-.364 2.041a3.75 3.75 0 0 1-1.04 1.443q-.663.571-1.625.858-.96.285-2.158.286-.546 0-1.274-.052a10 10 0 0 1-1.43-.182v-8.775q.703-.13 1.456-.169.768-.052 1.313-.052 1.158 0 2.093.26a4.3 4.3 0 0 1 1.625.819q.677.56 1.04 1.43.364.87.364 2.093M22.638 20.498a45 45 0 0 0-1.885-3.055 31 31 0 0 0-2.158-2.847v5.902h-2.002v-9.009h1.651q.43.429.95 1.053t1.052 1.339q.546.702 1.08 1.469.532.754 1 1.456v-5.317h2.015v9.009z'
    />
  </svg>
);
const ForwardRef = forwardRef(AccountsDerivNakalaIcon);
export default ForwardRef;
