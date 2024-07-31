import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkScamPotIcon = (
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
    <g clipPath='url(#2abed05b4f5fcddbc6f1c040f33f65bc__a)'>
      <mask
        id='2abed05b4f5fcddbc6f1c040f33f65bc__b'
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
      <g mask='url(#2abed05b4f5fcddbc6f1c040f33f65bc__b)'>
        <path
          fill='#414652'
          d='M8.02 41.96H0v5h8.02zM20.59 41.96h-8.02v5h8.02zM33.16 41.96h-8.02v5h8.02zM45.73 41.96h-8.02v5h8.02zM58.29 41.96h-8.02v5h8.02zM70.86 41.96h-8.02v5h8.02zM83.43 41.96h-8.02v5h8.02zM96 41.96h-8.02v5H96z'
        />
        <path
          fill='#5C616D'
          d='M72.76 0c0 1.66-1.34 3-3 3s-3-1.34-3-3h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3h-5c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4.53c0 1.66-1.34 3-3 3s-3-1.34-3-3h-5.24v78.88h5.25c.07-1.6 1.37-2.88 2.99-2.88s2.92 1.28 2.99 2.88h4.55c.07-1.6 1.37-2.88 2.99-2.88s2.92 1.28 2.99 2.88h5.03c.07-1.6 1.37-2.88 2.99-2.88s2.92 1.28 2.99 2.88h5.03c.07-1.6 1.37-2.88 2.99-2.88s2.92 1.28 2.99 2.88h5.03c.07-1.6 1.37-2.88 2.99-2.88s2.92 1.28 2.99 2.88h5.25V0z'
        />
        <path
          fill='#9498A2'
          d='M37.14 21.66c0-1.98-1.04-3.1-3.81-3.87-1.98-.56-2.42-.92-2.42-1.73 0-.57.34-1.27 1.53-1.27 1.42 0 1.66.83 1.79 1.35h2.63c-.14-1.45-.96-2.87-3.26-3.22v-1.19h-2.21v1.21c-1.76.33-3.14 1.5-3.14 3.38 0 1.74.92 2.9 4.05 3.8 1.72.49 2.2.94 2.2 1.85 0 .74-.44 1.4-1.81 1.4-1.11 0-1.85-.6-2.06-1.56H28c.14 1.79 1.38 3.1 3.52 3.43v1.49h2.22v-1.49c2.03-.3 3.4-1.47 3.4-3.57zM28 32.15h40v5H28zM28 42.15h40v5H28zM68 52.15H28v5h40zM28 62.15h40v5H28zM60.5 11.72c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5m-.89 10.68-3.08-3.08 1.49-1.49 1.59 1.59 3.36-3.36 1.49 1.49-4.86 4.86z'
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
      <clipPath id='2abed05b4f5fcddbc6f1c040f33f65bc__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivDarkScamPotIcon);
export default ForwardRef;
