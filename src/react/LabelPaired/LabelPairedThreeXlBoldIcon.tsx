import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.625C0 8.015.469 7.5 1.125 7.5h12c.422 0 .844.281 1.031.75.188.422.047.89-.281 1.219l-6.984 6.656h1.922c3.374 0 6.187 2.813 6.187 6.188 0 3.421-2.812 6.187-6.187 6.187H4.547a4.91 4.91 0 0 1-4.36-2.672l-.093-.187c-.281-.563-.047-1.22.515-1.5.563-.282 1.22-.047 1.5.515l.094.14c.422.892 1.36 1.454 2.344 1.454h4.266a3.93 3.93 0 0 0 3.937-3.937c0-2.157-1.781-3.938-3.937-3.938H4.125c-.469 0-.89-.281-1.078-.703-.14-.422-.047-.89.281-1.219l6.985-6.703H1.124C.469 9.75 0 9.281 0 8.625' />
    </g>
    <defs>
      <clipPath id='746ad75ca0786dfe4792f0a252b93325__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlBoldIcon);
export default ForwardRef;
