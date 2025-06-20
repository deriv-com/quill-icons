import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.203 25.078V14.953h3.375v-3.937H3.563v3.937h3.375v10.125zm3.75-14.062h6.703c.657 0 1.313.14 1.875.375a4.4 4.4 0 0 1 1.453.984c.422.422.703.938.938 1.547.187.562.281 1.219.281 1.875s-.094 1.312-.281 1.875a4.7 4.7 0 0 1-.938 1.547 4.4 4.4 0 0 1-1.453.984c-.562.235-1.218.328-1.875.328H19.22v4.547h-4.266zM21.75 15c-.047-.047-.14-.094-.422-.094h-2.11v1.781h2.11c.281 0 .422-.093.469-.14s.094-.094.094-.375v-.797c0-.234-.047-.328-.094-.328z' />
    </g>
    <defs>
      <clipPath id='a5ae3471c976bac11fdc3a9b1c8b59c8__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitXlFillIcon);
export default ForwardRef;
