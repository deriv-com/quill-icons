import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.617 8.445a.395.395 0 0 1-.375.305c-.234 0-.422-.187-.375-.422C1.407 6.008 3.492 4.25 6 4.25c1.898 0 3.563 1.031 4.5 2.555v-1.43c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.266a4.501 4.501 0 0 0-8.274 1.195m8.742 2.133a.42.42 0 0 1 .399-.328c.21 0 .398.21.351.445A5.25 5.25 0 0 1 6 14.75a5.22 5.22 0 0 1-4.5-2.531v1.406a.37.37 0 0 1-.375.375.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375h2.25c.21 0 .375.188.375.375a.37.37 0 0 1-.375.375h-1.29C2.86 13.11 4.314 14 6 14c2.11 0 3.89-1.453 4.36-3.422' />
    </g>
    <defs>
      <clipPath id='ffa7062d495e9d9e54c3bb17f9599269__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionRegularIcon);
export default ForwardRef;
