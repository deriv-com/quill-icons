import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketTacticalIndicesSilverTrendUpIcon = (
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
    <g clipPath='url(#1a63e19f71f0c6854ade2d3374a22703__a)'>
      <path
        fill='#19790A'
        d='M32 0h-8v2h4.586L19 11.586l-5-5-14 14v2.828l14-14 5 5 11-11V8h2zM12.822 25.571a1.6 1.6 0 0 1 1.6-1.6h16a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-16a1.6 1.6 0 0 1-1.6-1.6z'
      />
      <path
        fill='#fff'
        d='M27.03 26.416q-.62 0-.898.347-.273.341-.273.937 0 .29.068.528.069.233.205.403.135.171.34.267.205.091.478.091.147 0 .25-.005.108-.006.187-.023v-1.37h.886v1.95a4.323 4.323 0 0 1-1.38.205q-.443-.002-.807-.138a1.7 1.7 0 0 1-.613-.397 1.8 1.8 0 0 1-.398-.642 2.6 2.6 0 0 1-.136-.87q0-.493.153-.874.155-.38.42-.642.268-.267.625-.403.364-.136.773-.136.279 0 .5.04.227.033.386.085.165.045.267.096.108.05.153.08l-.255.71a2 2 0 0 0-.42-.165 1.7 1.7 0 0 0-.512-.074M23.796 29.67a8 8 0 0 0-.142-.42l-.148-.431h-1.534q-.074.216-.153.431a14 14 0 0 0-.136.42h-.92q.22-.635.42-1.175.198-.54.386-1.017.194-.477.375-.903.188-.432.386-.84h.846a29 29 0 0 1 .756 1.743q.194.477.392 1.017t.42 1.176zm-1.063-3.044a6 6 0 0 1-.085.233l-.13.341-.165.426q-.086.233-.176.488h1.119q-.091-.255-.176-.488a12 12 0 0 0-.165-.426l-.13-.34zM19.382 29.67q-.164-.328-.363-.664a7 7 0 0 0-.449-.693 6 6 0 0 0-.449.67l-.227.392a5 5 0 0 0-.159.296h-1.01q.25-.46.578-.966.336-.506.745-1.073l-1.267-1.898h1.073l.767 1.227.75-1.226h1.011l-1.25 1.908q.478.619.801 1.148.324.522.512.88z'
      />
    </g>
    <defs>
      <clipPath id='1a63e19f71f0c6854ade2d3374a22703__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketTacticalIndicesSilverTrendUpIcon);
export default ForwardRef;
