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
      <path d='M1.375 13.25c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375v-1.125h-8.25zM8.078 11h1.547V5.75a.4.4 0 0 0-.375-.375h-7.5a.385.385 0 0 0-.375.375V11h1.547a1.51 1.51 0 0 1 1.453-1.125h2.25c.68 0 1.266.492 1.453 1.125m2.672-5.25v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5M4 7.625c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29 0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 4 7.625' />
    </g>
    <defs>
      <clipPath id='55d1cb7797dcb6c7929a0d54428e1558__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionBoldIcon);
export default ForwardRef;
