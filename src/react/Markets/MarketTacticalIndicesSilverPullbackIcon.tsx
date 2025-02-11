import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketTacticalIndicesSilverPullbackIcon = (
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
      fill='#3E1DC5'
      d='M0 25.571a1.6 1.6 0 0 1 1.6-1.6h16a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-16a1.6 1.6 0 0 1-1.6-1.6z'
    />
    <path
      fill='#fff'
      d='M14.207 26.416q-.619 0-.897.346-.273.341-.273.938 0 .29.068.528.069.233.205.403.136.171.34.267.205.09.478.091.148 0 .25-.006.108-.005.187-.022v-1.37h.886v1.949a4.316 4.316 0 0 1-1.38.204q-.442 0-.807-.136a1.7 1.7 0 0 1-.613-.398 1.8 1.8 0 0 1-.398-.641 2.6 2.6 0 0 1-.136-.87q0-.493.153-.874.154-.381.42-.642.268-.267.626-.403.363-.137.772-.137.278 0 .5.04.227.034.386.085.165.045.267.097.108.05.154.08l-.256.71a2 2 0 0 0-.42-.165 1.7 1.7 0 0 0-.512-.074M10.974 29.67a8 8 0 0 0-.142-.42l-.148-.431H9.15q-.073.215-.153.431-.075.216-.136.42h-.92q.22-.636.42-1.175.198-.54.386-1.017.193-.477.375-.903.188-.432.386-.84h.847a29 29 0 0 1 .755 1.743q.194.477.392 1.017t.42 1.176zM9.91 26.627a6 6 0 0 1-.085.233l-.295.767q-.086.233-.176.488h1.119q-.091-.255-.176-.488a12 12 0 0 0-.165-.426zM6.56 29.67q-.164-.328-.363-.664a7 7 0 0 0-.449-.693 6 6 0 0 0-.448.67l-.228.392a5 5 0 0 0-.159.296h-1.01q.249-.46.579-.966.334-.506.744-1.073l-1.267-1.898h1.074l.766 1.227.75-1.227H7.56l-1.25 1.909q.479.62.801 1.147.324.523.512.88z'
    />
    <path
      fill='#3E1DC5'
      d='m7 7.586-7 7v2.828l7-7 3 3 7-7 3 3 6-6v14.757l-2.293-2.292-1.414 1.414L27 22l4.707-4.707-1.414-1.414L28 18.17V0h-1.414L26 .586l-6 6-3-3-7 7z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketTacticalIndicesSilverPullbackIcon);
export default ForwardRef;
