import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 6.375v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h5.523l-.218.875H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52h6.727q.711 0 1.23.52l2.023 2.023q.52.52.52 1.258v1.34l-.875.875V8.426a.85.85 0 0 0-.246-.63l-2.05-2.05a.75.75 0 0 0-.329-.191v2.57a.85.85 0 0 1-.246.629A.85.85 0 0 1 8 9H2.75a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629M2.75 5.5v2.625H8V5.5zm2.188 7q.026.738.656 1.148.656.33 1.312 0 .63-.41.657-1.148-.028-.738-.657-1.148a1.4 1.4 0 0 0-1.312 0q-.63.41-.657 1.148m1.312 2.188q-1.23-.028-1.887-1.094-.6-1.095 0-2.188.657-1.065 1.887-1.094 1.23.028 1.887 1.094.6 1.095 0 2.188-.657 1.065-1.887 1.094m8.066-3.72q-.327-.245-.629 0l-.683.684 1.094 1.094.683-.684q.246-.3 0-.601zM9.504 15.18a.34.34 0 0 0-.137.191l-.328 1.34 1.34-.328a.4.4 0 0 0 .191-.11l2.926-2.898-1.094-1.094zm3.582-4.813q.383-.41.902-.41.547 0 .93.41l.492.465q.383.41.383.93 0 .519-.383.93l-4.21 4.21a1.2 1.2 0 0 1-.602.328l-2.051.52q-.245.055-.41-.11a.48.48 0 0 1-.11-.437l.493-2.023q.108-.355.355-.63z' />
    </g>
    <defs>
      <clipPath id='31cd3d3df219eeda6bf0654b278dd061__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenSmRegularIcon);
export default ForwardRef;
