import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedGbpBasketIcon = (
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
    <g fill='#0AA0B0' fillRule='evenodd' clipRule='evenodd'>
      <path d='M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' />
    </g>
    <path
      fill='#0D47A1'
      d='M17 1.25C17 .56 17.56 0 18.25 0h12.5C31.44 0 32 .56 32 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-12.5C17.56 10 17 9.44 17 8.75z'
    />
    <path
      fill='#fff'
      d='M17 1.25C17 .56 17.56 0 18.25 0h1.003l3.997 2.664V0h2.5v2.664L29.747 0h1.003C31.44 0 32 .56 32 1.25v.252L28.628 3.75H32v2.5h-3.372L32 8.498v.252c0 .69-.56 1.25-1.25 1.25h-1.003L25.75 7.336V10h-2.5V7.336L19.253 10H18.25C17.56 10 17 9.44 17 8.75v-.252l3.372-2.248H17v-2.5h3.372L17 1.502z'
    />
    <path fill='#F44336' d='M23.724 0v4.204H17V5.78h6.724V10h1.552V5.78H32V4.204h-6.724V0z' />
    <path
      fill='#F44336'
      d='m31.228.094-5.435 3.584h.95L31.684.42a1.25 1.25 0 0 0-.456-.326M31.825 9.39l-4.677-3.085h-.95l5.265 3.472c.146-.102.27-.234.361-.388M17.749 9.895l5.444-3.59h-.95L17.3 9.564c.122.141.274.255.448.331M17.152.653l4.588 3.025h.95L17.496.253a1.3 1.3 0 0 0-.344.4'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30.75.625h-12.5a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-7.5a.625.625 0 0 0-.625-.625M18.25 0C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedGbpBasketIcon);
export default ForwardRef;
