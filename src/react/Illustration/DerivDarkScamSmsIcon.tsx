import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkScamSmsIcon = (
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
    <g clipPath='url(#f9c918da80e515e0bd278ddb1d622891__a)'>
      <mask
        id='f9c918da80e515e0bd278ddb1d622891__b'
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
      <g mask='url(#f9c918da80e515e0bd278ddb1d622891__b)'>
        <path
          fill='#414652'
          d='M6 34.02a6 6 0 0 0-6 6V96l13.88-13.88h59.27a6 6 0 0 0 6-6v-36.1a6 6 0 0 0-6-6zm15.22 31.09c-3.1 0-5.61-2.51-5.61-5.61s2.51-5.61 5.61-5.61 5.61 2.51 5.61 5.61-2.51 5.61-5.61 5.61m18.35 0c-3.1 0-5.61-2.51-5.61-5.61s2.51-5.61 5.61-5.61 5.61 2.51 5.61 5.61-2.51 5.61-5.61 5.61m18.36 0c-3.1 0-5.61-2.51-5.61-5.61s2.51-5.61 5.61-5.61 5.61 2.51 5.61 5.61-2.51 5.61-5.61 5.61'
        />
        <path
          fill='#787D88'
          d='M36.9 0a6 6 0 0 0-6 6v44.98l11.41-11.41H90a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm11.45 25.57c-2.55 0-4.61-2.07-4.61-4.61 0-2.55 2.07-4.61 4.61-4.61s4.61 2.07 4.61 4.61-2.07 4.61-4.61 4.61m15.1 0c-2.55 0-4.61-2.07-4.61-4.61 0-2.55 2.07-4.61 4.61-4.61s4.61 2.07 4.61 4.61-2.07 4.61-4.61 4.61m15.1 0c-2.55 0-4.61-2.07-4.61-4.61 0-2.55 2.07-4.61 4.61-4.61s4.61 2.07 4.61 4.61-2.07 4.61-4.61 4.61'
        />
        <path
          fill='#FF444F'
          d='M74.37 96C86.316 96 96 86.316 96 74.37s-9.684-21.63-21.63-21.63-21.63 9.684-21.63 21.63S62.424 96 74.37 96'
        />
        <path
          fill='#fff'
          d='M86.71 74.76c0-6.81-5.52-12.33-12.33-12.33s-12.33 5.52-12.33 12.33v5.4h4.47l-.62 6.17h3.47V84.4h1.54v1.93h2.7V84.4h1.54v1.93h2.7V84.4h1.54v1.93h3.47l-.62-6.17h4.47zM69.29 77.3c-2.04 0-3.7-1.66-3.7-3.7h7.4c0 2.04-1.66 3.7-3.7 3.7m2.72 3.24 2.36-3.48 2.36 3.48zm7.45-3.24c-2.04 0-3.7-1.66-3.7-3.7h7.4c0 2.04-1.66 3.7-3.7 3.7'
        />
      </g>
    </g>
    <defs>
      <clipPath id='f9c918da80e515e0bd278ddb1d622891__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkScamSmsIcon);
export default ForwardRef;
