import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.563 14.25H1.25v.875q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-.875zm-.055-.875h2.242v-7a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246h-8.75a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v7h2.242q.165-.765.738-1.258.575-.465 1.395-.492h1.75q.82.027 1.395.492.573.492.738 1.258m-5.113 0h4.21q-.327-.82-1.23-.875h-1.75q-.903.055-1.23.875m8.23-7v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23M7.375 9a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629q0 .383.246.629a.85.85 0 0 0 .629.246.85.85 0 0 0 .629-.246A.85.85 0 0 0 7.375 9M6.5 7.25q.984.027 1.504.875.492.875 0 1.75-.52.848-1.504.875-.984-.027-1.504-.875-.492-.875 0-1.75.52-.848 1.504-.875' />
    </g>
    <defs>
      <clipPath id='344b9b4f6272e8374d3c823c26dd10e7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserSmRegularIcon);
export default ForwardRef;
