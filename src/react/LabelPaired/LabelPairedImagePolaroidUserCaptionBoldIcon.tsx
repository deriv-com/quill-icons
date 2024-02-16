import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 13.25q.023.352.375.375h7.5q.352-.023.375-.375v-1.125h-8.25zM8.078 11h1.547V5.75q-.023-.352-.375-.375h-7.5q-.352.023-.375.375V11h1.547q.14-.492.515-.797a1.43 1.43 0 0 1 .938-.328h2.25q.54 0 .938.328.375.305.515.797m2.672-5.25v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055M4 7.625q.024-.843.75-1.29.75-.42 1.5 0 .726.447.75 1.29-.024.844-.75 1.29-.75.42-1.5 0-.726-.446-.75-1.29' />
    </g>
    <defs>
      <clipPath id='04fb2a1965c2e9c2dec53d6f45ad3299__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionBoldIcon);
export default ForwardRef;
