import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcEmailVerificationLinkBlockedIcon = (
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
    <g clipPath='url(#4f47b506cc24b826aff29b2154043ae0__a)'>
      <mask
        id='4f47b506cc24b826aff29b2154043ae0__b'
        width={129}
        height={128}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M.5 0h128v128H.5z' />
      </mask>
      <g mask='url(#4f47b506cc24b826aff29b2154043ae0__b)'>
        <path
          fill='#BBCCCE'
          d='M13.5 44.626v14.087l37.62 31.59 6.565-5.582 6.565-5.583 6.46 5.831 6.46 5.831 38.33-32.752V45.063a1.985 1.985 0 0 0-.94-1.688L66.61 13.602a4.02 4.02 0 0 0-4.23 0L14.5 42.93c-.612.35-.992.995-1 1.697'
        />
        <path
          fill='#E1F4F3'
          d='M21.5 30.248v59.404h86V30.248a4 4 0 0 0-1.174-2.823 3.99 3.99 0 0 0-2.826-1.165h-78c-2.21 0-4 1.784-4 3.988'
        />
        <path
          fill='#84ABAE'
          d='M13.5 49.197v61.815a3.99 3.99 0 0 0 4 3.988h93.969c2.209 0 4-1.785 4-3.988V49.197L77.282 82.003 67.1 72.926a3.877 3.877 0 0 0-5.3 0l-10.122 9.042z'
        />
        <path
          fill='#E1F4F3'
          fillRule='evenodd'
          d='m114.979 112.925-46.542-41.49-.006.004a5.873 5.873 0 0 0-7.968.007L14.01 112.96A4 4 0 0 0 17.5 115h.2l45.476-40.601.008-.008a1.884 1.884 0 0 1 2.572 0l.009.008L111.3 115h.169a4 4 0 0 0 3.51-2.075'
          clipRule='evenodd'
        />
        <path
          fill='#85ACB0'
          fillRule='evenodd'
          d='M54.45 45.175c-3.175 0-5.775 2.6-5.775 5.775s2.6 5.775 5.775 5.775h7.95V60.9h-7.95c-5.475 0-9.95-4.475-9.95-9.95S48.975 41 54.45 41h7.95v4.175zM74.55 41H66.6v4.175h7.95c3.175 0 5.775 2.6 5.775 5.775s-2.6 5.775-5.775 5.775H66.6V60.9h7.95c5.5 0 9.95-4.475 9.95-9.95S80.025 41 74.55 41m-.775 7.875H55.25v4.175h18.525z'
          clipRule='evenodd'
        />
        <path
          fill='#FF444F'
          fillRule='evenodd'
          d='M128 23c0-12.702-10.298-23-23-23S82 10.298 82 23s10.298 23 23 23 23-10.298 23-23'
          clipRule='evenodd'
          style={{
            mixBlendMode: 'multiply',
          }}
        />
        <path
          fill='#fff'
          d='M115.212 9.046A16.9 16.9 0 0 0 105.5 6c-9.388 0-17 7.612-17 17 0 3.61 1.126 6.959 3.046 9.712zm4.242 4.242L95.788 36.954A16.9 16.9 0 0 0 105.5 40c9.388 0 17-7.612 17-17a16.9 16.9 0 0 0-3.046-9.712'
        />
      </g>
    </g>
    <defs>
      <clipPath id='4f47b506cc24b826aff29b2154043ae0__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcEmailVerificationLinkBlockedIcon);
export default ForwardRef;
