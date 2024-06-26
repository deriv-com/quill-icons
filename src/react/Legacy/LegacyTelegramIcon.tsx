import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyTelegramIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.167.485-4.666 2.01-.567.225-.595.442c-.03.243.274.339.69.47l.175.055c.408.133.958.288 1.243.294q.389.01.868-.32Q9.27 6.65 9.376 6.627c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336q-.096.098-.188.186c-.38.366-.664.64.015 1.088.327.216.588.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751.01-.111-.003-.253-.013-.315a.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.301.005-.763.166-2.984 1.09'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyTelegramIcon);
export default ForwardRef;
