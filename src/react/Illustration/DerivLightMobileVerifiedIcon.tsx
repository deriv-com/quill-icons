import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightMobileVerifiedIcon = (
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
    <g clipPath='url(#371d117c39c229a87b543467e92118f7__a)'>
      <mask
        id='371d117c39c229a87b543467e92118f7__b'
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
      <g mask='url(#371d117c39c229a87b543467e92118f7__b)'>
        <path
          fill='#E0F0F0'
          d='M0 32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z'
        />
        <path
          fill='#85ACAF'
          fillRule='evenodd'
          d='M64 103.534a5 5 0 1 1 0-10 5 5 0 0 1 0 10m21.54-92.66H42.46c-5.776 0-10.46 4.684-10.46 10.46v85.332c0 5.78 4.684 10.46 10.46 10.46h43.08c5.776 0 10.46-4.68 10.46-10.46V21.334c0-5.776-4.684-10.46-10.46-10.46'
          clipRule='evenodd'
        />
        <path
          fill='#E0F0F0'
          fillRule='evenodd'
          d='M75.743 64.921H52.42a2.919 2.919 0 1 1 0-5.838h23.324a2.919 2.919 0 1 1 0 5.838m1.838-11.004H50.42a2.919 2.919 0 1 1 0-5.838H77.58a2.919 2.919 0 1 1 0 5.838'
          clipRule='evenodd'
        />
        <path
          fill='#E0F0F0'
          d='M64.43 26h-.86C59.396 26 56 29.588 56 34s3.395 8 7.57 8h.86c4.175 0 7.57-3.588 7.57-8s-3.395-8-7.57-8m3.55 6.68-4.995 5.279a.4.4 0 0 1-.273.123.4.4 0 0 1-.273-.123l-2.81-2.97a.46.46 0 0 1-.117-.288c0-.124.04-.206.117-.289l1.171-1.237a.41.41 0 0 1 .585 0l1.327 1.402 3.551-3.752a.41.41 0 0 1 .586 0l1.17 1.237a.46.46 0 0 1 .118.288c0 .083-.079.248-.156.33'
        />
        <path
          fill='#4BB4B3'
          fillRule='evenodd'
          d='M82.001 64c0 8.217 4.383 15.81 11.5 19.92a23.001 23.001 0 1 0 0-39.839A23 23 0 0 0 82 64'
          clipRule='evenodd'
          style={{
            mixBlendMode: 'multiply',
          }}
        />
        <path
          fill='#fff'
          fillRule='evenodd'
          d='m101.744 73.106-8.243-8.244 3.453-3.453 4.79 4.79 11.301-11.305 3.455 3.454z'
          clipRule='evenodd'
        />
      </g>
    </g>
    <defs>
      <clipPath id='371d117c39c229a87b543467e92118f7__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightMobileVerifiedIcon);
export default ForwardRef;
