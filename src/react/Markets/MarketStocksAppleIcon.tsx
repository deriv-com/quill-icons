import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAppleIcon = (
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
    <g clipPath='url(#dec858d6105667d8b9f7993baa44264e__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#000'
        d='M23.665 20.803a10.3 10.3 0 0 1-1.021 1.836q-.806 1.149-1.316 1.59-.787.724-1.69.745-.651.001-1.563-.373-.913-.373-1.681-.372-.805 0-1.729.372-.925.374-1.494.393-.867.037-1.729-.765-.55-.48-1.376-1.646-.885-1.245-1.455-2.89-.61-1.779-.611-3.445 0-1.91.826-3.29a4.85 4.85 0 0 1 1.73-1.75 4.65 4.65 0 0 1 2.339-.66q.688 0 1.809.42 1.12.421 1.435.422.237 0 1.591-.497 1.279-.46 2.163-.384 2.398.194 3.597 1.894-2.144 1.3-2.122 3.635.02 1.819 1.317 3.022.585.557 1.315.863-.158.459-.335.88M20 6.38q-.001 1.426-1.04 2.658c-.834.976-1.844 1.54-2.939 1.451a3 3 0 0 1-.022-.36c0-.912.397-1.888 1.102-2.686q.528-.606 1.343-1.008.812-.397 1.536-.435.02.19.02.38'
      />
    </g>
    <defs>
      <clipPath id='dec858d6105667d8b9f7993baa44264e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAppleIcon);
export default ForwardRef;
