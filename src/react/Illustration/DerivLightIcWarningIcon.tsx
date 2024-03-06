import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcWarningIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 64 65'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#dc6e8381d2aa4faa3696cf7b3c86f448__a)'>
      <path
        fill='#FFAD3A'
        fillRule='evenodd'
        d='M64 32.133c0-17.673-14.328-32-32-32s-32 14.328-32 32 14.328 32 32 32 32-14.328 32-32'
        clipRule='evenodd'
        opacity={0.2}
      />
      <path
        fill='#FFAD3A'
        fillRule='evenodd'
        d='M55 32.133c0-12.702-10.298-23-23-23s-23 10.298-23 23 10.298 23 23 23 23-10.298 23-23'
        clipRule='evenodd'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M32.618 34.542a1.6 1.6 0 0 0 1.07-.516c.33-.356.4-.818.428-.999l.005-.033.932-5.783q.055-.343.055-.691v-3.038c0-.738-.176-1.906-1.207-2.482a2.85 2.85 0 0 0-1.434-.367 2.86 2.86 0 0 0-1.38.371c-1.024.576-1.196 1.738-1.196 2.47v3.04q0 .355.057.705l.95 5.776.005.033c.028.182.1.647.434 1.003.318.34.783.544 1.28.511m-2.728 7.245v.474c0 .598.183 1.225.677 1.698.49.47 1.168.674 1.93.674.765 0 1.444-.205 1.935-.675.494-.473.676-1.1.676-1.697v-.474c0-.598-.182-1.225-.676-1.698-.491-.47-1.17-.674-1.934-.674-.762 0-1.44.204-1.931.674-.494.473-.676 1.1-.676 1.698z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='dc6e8381d2aa4faa3696cf7b3c86f448__a'>
        <path fill='#fff' d='M0 0h64v65H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcWarningIcon);
export default ForwardRef;
