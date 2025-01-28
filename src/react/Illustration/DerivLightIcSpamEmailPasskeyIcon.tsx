import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcSpamEmailPasskeyIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#393d2b469397dc4d9fc2e782dc5760f9__a)'>
      <path
        fill='url(#393d2b469397dc4d9fc2e782dc5760f9__b)'
        fillRule='evenodd'
        d='M5.5 13.006v6.017l5.685 3.009a1274 1274 0 0 1 3.608-2.93c.714-.54 1.7-.54 2.426.009q1.223.988 3.599 2.92l5.682-3.008V1.539c0-.275-.21-.5-.455-.513H5.977a.51.51 0 0 0-.477.513v11.467m16.16 9.71q3.564 2.898 9.34 7.607V16.177l-3.5-2.259v4.575l1.766-.935a.5.5 0 0 1 .468.884zm8.57 8.27a5312 5312 0 0 0-13.627-11.087 1 1 0 0 0-1.194-.01q-3.104 2.507-13.613 11.097zM1 30.346v-14.21l.11-.069c.096-.06.213-.13.4-.241l.256-.152.29-.171A49 49 0 0 0 4.5 13.957v4.536l-1.766-.935a.5.5 0 1 0-.468.884l8.077 4.276Q6.776 25.625 1 30.345M4.5 12.74a45 45 0 0 1-3.243 2.073L1 14.966c-.192.114-.313.187-.416.25-.13.08-.223.142-.294.195a1 1 0 0 0-.103.085.5.5 0 0 0-.187.395v14.548c.028.894.752 1.583 1.62 1.558h28.775c.853.025 1.577-.664 1.605-1.541V15.89a.505.505 0 0 0-.346-.481L27.5 12.728V1.539c0-.823-.63-1.501-1.433-1.538L5.956 0A1.526 1.526 0 0 0 4.5 1.54zM16 17c3.87 0 7-3.25 7-7.25S19.87 2.5 16 2.5 9 5.75 9 9.75 12.13 17 16 17m0-1c-3.31 0-6-2.794-6-6.25s2.69-6.25 6-6.25 6 2.794 6 6.25S19.31 16 16 16m0-6.928 2.662-2.44a.5.5 0 0 1 .676.737L16.74 9.75l2.598 2.382a.5.5 0 1 1-.676.736L16 10.429l-2.662 2.44a.5.5 0 1 1-.676-.736L15.26 9.75l-2.598-2.381a.5.5 0 0 1 .676-.738z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='393d2b469397dc4d9fc2e782dc5760f9__b'
        x1={16}
        x2={47.998}
        y1={47.996}
        y2={15.996}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF444F' />
        <stop offset={1} stopColor='#FF6444' />
      </linearGradient>
      <clipPath id='393d2b469397dc4d9fc2e782dc5760f9__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcSpamEmailPasskeyIcon);
export default ForwardRef;
