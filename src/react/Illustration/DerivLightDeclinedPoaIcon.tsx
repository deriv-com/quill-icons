import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightDeclinedPoaIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#E2F1F1'
      d='M97.82 124H12.193c-5.071-.014-9.179-4.109-9.193-9.164V13.164C3.014 8.109 7.122 4.014 12.193 4h72.749L107 26v88.836c-.021 5.048-4.117 9.136-9.18 9.164'
    />
    <path
      fill='#fff'
      d='M90.04 42H18.96A2.96 2.96 0 0 0 16 44.96v1.08A2.96 2.96 0 0 0 18.96 49h71.08A2.96 2.96 0 0 0 93 46.04v-1.08A2.96 2.96 0 0 0 90.04 42M90.04 57H18.96A2.96 2.96 0 0 0 16 59.96v1.08A2.96 2.96 0 0 0 18.96 64h71.08A2.96 2.96 0 0 0 93 61.04v-1.08A2.96 2.96 0 0 0 90.04 57M55.04 73H18.96A2.96 2.96 0 0 0 16 75.96v1.08A2.96 2.96 0 0 0 18.96 80h36.08A2.96 2.96 0 0 0 58 77.04v-1.08A2.96 2.96 0 0 0 55.04 73'
    />
    <path
      fill='#EC3F3F'
      d='M105.55 119c11.846 0 21.45-9.604 21.45-21.45s-9.604-21.45-21.45-21.45S84.1 85.703 84.1 97.55 93.703 119 105.55 119'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M108.338 103h-4.676L103 84h6zm-2.347 3q1.356 0 2.182.845.827.846.827 2.164 0 1.299-.827 2.145-.826.846-2.182.846-1.338 0-2.164-.846t-.827-2.145q0-1.297.827-2.154.826-.855 2.164-.855'
      clipRule='evenodd'
    />
    <path fill='#BCCDCF' d='M107 26H94.187c-5.063-.014-9.166-4.114-9.187-9.18V4z' />
  </svg>
);
const ForwardRef = forwardRef(DerivLightDeclinedPoaIcon);
export default ForwardRef;
