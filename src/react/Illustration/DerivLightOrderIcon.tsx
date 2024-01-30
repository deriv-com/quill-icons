import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightOrderIcon = (
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
    <g clipPath='url(#e26ee7ca2b1fe9afd148b68b387fcf40__a)'>
      <mask
        id='e26ee7ca2b1fe9afd148b68b387fcf40__b'
        width={128}
        height={128}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M128 0H0v128h128z' />
      </mask>
      <g mask='url(#e26ee7ca2b1fe9afd148b68b387fcf40__b)'>
        <path
          fill='#C7E5E5'
          d='M31.36 17.83V17A12.12 12.12 0 0 0 20 5q.455-.022.91 0H18.1a9.291 9.291 0 0 0 0 18.58h13.26z'
        />
        <path
          fill='#BCCDCE'
          d='M47.18 15.78V16a7.63 7.63 0 0 1-7.7 7.55H17.86a7.37 7.37 0 0 0 6.9-7.29v-.49z'
        />
        <path
          fill='#E0F0F0'
          d='M96.8 5H20.89A9 9 0 0 0 20 5a12.13 12.13 0 0 1 11.36 12v95.89A10.08 10.08 0 0 0 41.45 123h65.35V15c0-5.523-4.477-10-10-10'
        />
        <path
          fill='#BCCDCE'
          d='M123 109.58v.82a12.64 12.64 0 0 1-12.69 12.6h-69.7A12.61 12.61 0 0 0 52 110.4v-.82zM47.77 17.8h-4.85a2 2 0 0 0-2 2v4.85a2 2 0 0 0 2 2h4.85a2 2 0 0 0 2-2V19.8a2 2 0 0 0-2-2M47.77 34.65h-4.85a2 2 0 0 0-2 2v4.85a2 2 0 0 0 2 2h4.85a2 2 0 0 0 2-2v-4.85a2 2 0 0 0-2-2M48.6 53.28h-4.85a2 2 0 0 0-2 2v4.85a2 2 0 0 0 2 2h4.85a2 2 0 0 0 2-2v-4.85a2 2 0 0 0-2-2M48.6 71.9h-4.85a2 2 0 0 0-2 2v4.85a2 2 0 0 0 2 2h4.85a2 2 0 0 0 2-2V73.9a2 2 0 0 0-2-2M92.16 73.34H53.61a1 1 0 1 0 0 2h38.55a1 1 0 1 0 0-2M73.91 77.8h-20.8a.5.5 0 0 0 0 1h20.8a.5.5 0 0 0 0-1M93.68 54.97H55.13a1 1 0 1 0 0 2h38.55a1 1 0 1 0 0-2M75.43 59.43h-20.8a.5.5 0 0 0 0 1h20.8a.5.5 0 0 0 0-1M93.68 36.6H55.13a1 1 0 1 0 0 2h38.55a1 1 0 1 0 0-2M75.43 41.06h-20.8a.5.5 0 0 0 0 1h20.8a.5.5 0 0 0 0-1M93.68 19.5H55.13a1 1 0 1 0 0 2h38.55a1 1 0 1 0 0-2M75.43 23.96h-20.8a.5.5 0 1 0 0 1h20.8a.5.5 0 0 0 0-1'
        />
      </g>
    </g>
    <defs>
      <clipPath id='e26ee7ca2b1fe9afd148b68b387fcf40__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightOrderIcon);
export default ForwardRef;
