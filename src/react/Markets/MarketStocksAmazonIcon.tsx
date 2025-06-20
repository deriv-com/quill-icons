import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAmazonIcon = (
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
    <g clipPath='url(#50c6198a671fe60be72d7bf16b2a4d75__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#000'
        fillRule='evenodd'
        d='M17.774 14.285c0 1.011.025 1.854-.486 2.752-.412.73-1.065 1.179-1.795 1.179-.997 0-1.577-.76-1.577-1.88 0-2.212 1.982-2.613 3.858-2.613zm2.617 6.325a.54.54 0 0 1-.613.062c-.862-.715-1.015-1.047-1.49-1.73-1.423 1.453-2.43 1.887-4.277 1.887-2.183 0-3.883-1.347-3.883-4.044 0-2.106 1.142-3.54 2.766-4.24 1.409-.621 3.376-.73 4.88-.902v-.336c0-.617.047-1.347-.314-1.88-.318-.478-.923-.675-1.456-.675-.99 0-1.873.507-2.088 1.558-.044.234-.215.464-.449.475l-2.518-.27c-.212-.048-.445-.22-.387-.544C11.142 6.92 13.898 6 16.365 6c1.263 0 2.913.336 3.909 1.292 1.263 1.179 1.142 2.752 1.142 4.464V15.8c0 1.215.504 1.748.978 2.405.168.233.205.515-.007.69-.53.441-1.47 1.262-1.989 1.722z'
        clipRule='evenodd'
      />
      <path
        fill='#F90'
        d='M23.218 22.147c-8.096 3.853-13.12.63-16.337-1.329-.2-.123-.537.03-.244.366 1.072 1.3 4.583 4.431 9.167 4.431 4.586 0 7.315-2.503 7.657-2.94.339-.432.1-.671-.243-.528m2.273-1.256c-.217-.283-1.322-.336-2.017-.25-.696.083-1.741.508-1.65.764.046.095.141.053.62.01.48-.048 1.823-.218 2.103.148.281.369-.429 2.124-.558 2.407-.126.283.048.356.283.168.232-.189.652-.677.934-1.368.28-.694.45-1.663.285-1.879'
      />
    </g>
    <defs>
      <clipPath id='50c6198a671fe60be72d7bf16b2a4d75__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAmazonIcon);
export default ForwardRef;
