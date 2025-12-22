import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightPassportPlaceholderKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 130 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M8.724 1h112.552C125.542 1 129 3.91 129 7.5v8.357H1V7.5C1 3.91 4.458 1 8.724 1'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M9.308 79C4.72 79 1 75.87 1 72.008v-56.15h128v56.15c0 3.862-3.72 6.992-8.308 6.992z'
    />
    <path
      fill='#F2F2F2'
      fillRule='evenodd'
      d='M41.673 25.765v31.47c0 2.08-1.694 3.765-3.785 3.765H13.785C11.695 61 10 59.315 10 57.235v-31.47C10 23.685 11.695 22 13.785 22h24.103c2.09 0 3.785 1.686 3.785 3.765'
      clipRule='evenodd'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M19.955 49.249h11.764c2.166 0 3.922 1.679 3.922 3.75v3.5H16.033v-3.5c0-2.071 1.756-3.75 3.922-3.75'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m21.563 49.249 1.005 4 2.514-2-.503-2zm9.052 0-1.005 4-2.514-2 .503-2z'
      clipRule='evenodd'
    />
    <path
      fill='#C7E5E5'
      d='M32.624 40.749a6.5 6.5 0 0 1-3.74 5.876l.22 2.624-2.66 2.646a.505.505 0 0 1-.712 0l-2.66-2.646.219-2.624a6.5 6.5 0 0 1-3.739-5.876v-1h-1.005a1.004 1.004 0 0 1-1.006-1v-1.5c0-.552.45-1 1.006-1h1.005v-1.5c0-3.59 2.926-6.5 6.536-6.5s6.536 2.91 6.536 6.5v1.5h1.005c.556 0 1.006.448 1.006 1v1.5c0 .552-.45 1-1.006 1h-1.005z'
    />
    <path
      fill='#84ABAE'
      fillRule='evenodd'
      d='M31.368 29.748q2.766 3 1.257 7.5v1.25a.25.25 0 0 1-.347.232.25.25 0 0 1-.156-.232v-1.79c-.737-.773-1.07-1.087-2.01-2.96q-2.619 1.5-5.782 1.5-1.006 0-3.268-.5-.567 1.353-1.006 1.74v2.01a.25.25 0 0 1-.347.232.25.25 0 0 1-.156-.232v-1.905q-.21-.13-.377-.595c-.628-1.75-.377-5.5 1.886-7.25s7.541-2 10.306 1M8.724 1h112.552C125.542 1 129 3.925 129 7.5v8.357H1V7.5C1 3.911 4.457 1 8.724 1'
      clipRule='evenodd'
    />
    <path
      fill='#E3E4E3'
      d='M117 65H14a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h103a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4M119 28H90a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M82 39H53a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M119 39H90a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M82 50H53a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M119 50H90a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M82 28H53a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h29a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M1 15.857v56.151C1 75.87 4.72 79 9.308 79h111.384c4.588 0 8.308-3.13 8.308-6.992v-56.15zm40.673 41.378v-31.47c0-2.079-1.695-3.765-3.785-3.765H13.785C11.695 22 10 23.685 10 25.765v31.47C10 59.315 11.695 61 13.785 61h24.103c2.091 0 3.785-1.685 3.785-3.765M14 65h103a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4m76-37h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H90a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M53 39h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H53a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m37 0h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H90a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M53 50h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H53a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m37 0h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H90a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M53 28h29a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H53a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightPassportPlaceholderKycIcon);
export default ForwardRef;
