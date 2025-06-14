import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketCryptocurrenciesIcon = (
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
    <g>
      <path
        fillRule='evenodd'
        d='M10.75 0v2.666a6 6 0 0 1 1.782 1.402l.61.703-2.14 2.14-.701-.836a3 3 0 1 0 0 3.85l.701-.837 2.14 2.14-.61.704a6 6 0 0 1-1.782 1.402V16h-2.5v-2.005a6 6 0 0 1-.5 0V16h-2.5v-2.666A6 6 0 0 1 2 8a6 6 0 0 1 3.25-5.334V0h2.5v2.005a6 6 0 0 1 .5 0V0zm-2 3.056a5 5 0 0 0-2 .101V1h-.5v2.315a5 5 0 0 0-.5 9.152 5 5 0 0 0 .5.218V15h.5v-2.158a5 5 0 0 0 1.5.152 5 5 0 0 0 1-.152V15h.5v-2.315a5 5 0 0 0 2.027-1.408l-.71-.71A3.983 3.983 0 0 1 7.935 12a4 4 0 1 1 3.132-6.566l.71-.71A5 5 0 0 0 9.75 3.315V1h-.5v2.158a5 5 0 0 0-.5-.102'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='c341cc5901688d1e58e2ea6395ed1c98__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketCryptocurrenciesIcon);
export default ForwardRef;
