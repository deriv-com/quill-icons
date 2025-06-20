import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketTacticalIndicesSilverTrendDownIcon = (
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
    <g clipPath='url(#7e380645798b7d9fc2d371c9fac2e2eb__a)'>
      <path
        fill='#D04229'
        d='M32 32h-8v-2h4.586L19 20.414l-5 5-14-14V8.586l14 14 5-5 11 11V24h2zM12.822 1.6a1.6 1.6 0 0 1 1.6-1.6h16a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-16a1.6 1.6 0 0 1-1.6-1.6z'
      />
      <path
        fill='#fff'
        d='M27.03 2.445q-.62 0-.898.346-.273.342-.273.938 0 .29.068.528.069.233.205.403.136.171.34.267.205.09.478.091.147 0 .25-.006.108-.005.187-.022V3.62h.886V5.57a4.32 4.32 0 0 1-1.38.204q-.443 0-.807-.136a1.7 1.7 0 0 1-.613-.397 1.8 1.8 0 0 1-.398-.642 2.6 2.6 0 0 1-.136-.87q0-.493.153-.874.154-.381.42-.642a1.8 1.8 0 0 1 .625-.403q.364-.137.773-.137.279 0 .5.04.227.034.386.085.165.045.267.097.108.05.153.08l-.255.71a2 2 0 0 0-.42-.165 1.7 1.7 0 0 0-.512-.074M23.795 5.7a733.396 733.396 0 0 0-.29-.852h-1.533q-.074.215-.153.431-.075.216-.137.42h-.92q.222-.636.42-1.175.2-.54.387-1.017.194-.478.375-.903.187-.432.386-.84h.846a30 30 0 0 1 .756 1.743q.194.477.392 1.017t.42 1.176zm-1.062-3.045a6 6 0 0 1-.085.233l-.295.767q-.086.233-.176.488h1.119l-.177-.488a12 12 0 0 0-.164-.426zM19.382 5.7a11 11 0 0 0-.363-.665 7 7 0 0 0-.449-.693 6 6 0 0 0-.449.67l-.227.392a5 5 0 0 0-.159.296h-1.011q.25-.46.58-.966.334-.505.744-1.074L16.78 1.763h1.073l.767 1.227.75-1.227h1.011l-1.25 1.909q.478.62.801 1.147.324.523.512.88z'
      />
    </g>
    <defs>
      <clipPath id='7e380645798b7d9fc2d371c9fac2e2eb__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketTacticalIndicesSilverTrendDownIcon);
export default ForwardRef;
