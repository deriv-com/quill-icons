import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkReceivedFundIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#195809067beef1912d4a3e3783bdd469__a)'>
      <mask
        id='195809067beef1912d4a3e3783bdd469__b'
        width={96}
        height={96}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M96 0H0v96h96z' />
      </mask>
      <g mask='url(#195809067beef1912d4a3e3783bdd469__b)'>
        <path fill='#5C616D' d='M15.74 51.13H0v36.41h15.74z' />
        <path
          fill='#CED0D6'
          d='M80.11 79.79H54.93c-1.33 0-2.61-.53-3.55-1.47l-8.73-8.73c-.44-.44-.64-1.06-.52-1.69.28-1.5 2.22-1.98 3.29-.9l6.57 6.57c1.95 1.95 4.59 3.04 7.34 3.04h7.5c1.63 0 2.45-1.97 1.3-3.13L49.17 54.51c-2.18-2.18-5.13-3.4-8.2-3.4h-25.2v32.61h7.33l11.99 9.81c1.93 1.58 4.34 2.44 6.82 2.45h27.14c3.88 0 7.46-2.06 9.42-5.41l3.95-6.77c1.04-1.79-.25-4.01-2.31-4.01'
        />
        <path
          fill='#FF444F'
          d='M76 56.29c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20'
        />
        <path
          fill='#fff'
          d='M82.86 39.95c0-2.97-1.56-4.64-5.72-5.8-2.98-.84-3.64-1.38-3.64-2.6 0-.86.51-1.91 2.3-1.91 2.13 0 2.49 1.25 2.69 2.02h3.95c-.21-2.17-1.44-4.31-4.9-4.83v-1.79h-3.31v1.81c-2.64.5-4.71 2.25-4.71 5.07 0 2.62 1.37 4.35 6.07 5.7 2.58.74 3.3 1.4 3.3 2.77 0 1.11-.66 2.1-2.72 2.1-1.66 0-2.77-.91-3.09-2.34h-3.95c.22 2.69 2.06 4.65 5.28 5.14v2.24h3.33v-2.24c3.05-.46 5.12-2.2 5.12-5.34'
        />
        <path fill='#CED0D6' d='M83.89 0H78.2v10.97h5.69zM73.8 0h-5.69v10.97h5.69z' />
      </g>
    </g>
    <defs>
      <clipPath id='195809067beef1912d4a3e3783bdd469__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkReceivedFundIcon);
export default ForwardRef;
