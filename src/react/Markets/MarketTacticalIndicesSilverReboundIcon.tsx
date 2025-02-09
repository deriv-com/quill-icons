import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketTacticalIndicesSilverReboundIcon = (
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
      fill='#1557BD'
      d='M0 1.6A1.6 1.6 0 0 1 1.6 0h16a1.6 1.6 0 0 1 1.6 1.6v4.8A1.6 1.6 0 0 1 17.6 8h-16A1.6 1.6 0 0 1 0 6.4z'
    />
    <path
      fill='#fff'
      d='M14.207 2.445q-.619 0-.897.346-.273.341-.273.938 0 .29.068.528.069.233.205.403.136.171.34.267.205.09.478.091.148 0 .25-.006.108-.005.187-.022V3.62h.886V5.57a4.322 4.322 0 0 1-1.38.204q-.442 0-.807-.136a1.7 1.7 0 0 1-.613-.397 1.8 1.8 0 0 1-.398-.642 2.6 2.6 0 0 1-.136-.87q0-.493.153-.874.154-.381.42-.642.268-.267.626-.403.363-.137.772-.137.278 0 .5.04.227.034.386.085.165.046.267.097.108.05.154.08l-.256.71a2 2 0 0 0-.42-.165 1.7 1.7 0 0 0-.512-.074M10.974 5.7a8 8 0 0 0-.142-.42l-.148-.432H9.15q-.073.215-.153.431-.075.216-.136.42h-.92q.22-.635.42-1.175.198-.54.386-1.017.193-.477.375-.903a22 22 0 0 1 .386-.84h.846a29 29 0 0 1 .756 1.743q.194.477.392 1.017t.42 1.176zM9.91 2.655a6 6 0 0 1-.085.233l-.295.767q-.086.233-.176.488h1.119q-.091-.255-.176-.488a12 12 0 0 0-.165-.426zM6.56 5.7q-.164-.33-.363-.665a7 7 0 0 0-.449-.693 6 6 0 0 0-.448.67l-.228.392a5 5 0 0 0-.159.296h-1.01q.249-.46.579-.966.335-.505.744-1.074L3.959 1.763h1.074l.766 1.227.75-1.227H7.56L6.31 3.672q.478.62.802 1.147.323.523.51.88z'
    />
    <path
      fill='#1557BD'
      d='m7.01 24.414-7-7v-2.828l7 7 3-3 7 7 3-3 6 6V13.828l-2.292 2.293-1.415-1.414L27.011 10l4.707 4.707-1.415 1.414-2.292-2.293V32h-1.415l-.586-.586-6-6-3 3-7-7z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketTacticalIndicesSilverReboundIcon);
export default ForwardRef;
