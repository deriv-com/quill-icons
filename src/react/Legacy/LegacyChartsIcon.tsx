import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyChartsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#995546f127c444adc9960edbfecb5ad3__a)'>
      <path
        fill='#333'
        d='M2 0v13.999L16 14v1l-14-.001V16H1l-.001-1.001L0 15v-1l.999-.001L1 0zm10.528 2.002 2.605 7.814-.95.316-1.71-5.134-2.74 7.302L5.68 9.26l-1.955 3.91-.895-.446L5.321 7.74 9.266 10.7z'
      />
    </g>
    <defs>
      <clipPath id='995546f127c444adc9960edbfecb5ad3__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyChartsIcon);
export default ForwardRef;
