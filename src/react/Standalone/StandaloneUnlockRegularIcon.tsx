import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUnlockRegularIcon = (
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
    <path d='M12.25 11.5V14h9.375a3.134 3.134 0 0 1 3.125 3.125v6.25a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-6.25A3.11 3.11 0 0 1 10.375 14H11v-2.5c0-2.734 2.227-5 5-5a4.956 4.956 0 0 1 4.766 3.594c.117.312-.078.664-.43.781-.313.078-.664-.078-.742-.43C19.125 8.883 17.68 7.75 16 7.75c-2.07 0-3.75 1.68-3.75 3.75M8.5 17.125v6.25c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-6.25c0-1.016-.86-1.875-1.875-1.875h-11.25c-1.055 0-1.875.86-1.875 1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUnlockRegularIcon);
export default ForwardRef;
