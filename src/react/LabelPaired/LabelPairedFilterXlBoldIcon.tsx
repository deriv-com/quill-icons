import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.469C0 8.39.844 7.5 1.922 7.5h20.11A1.98 1.98 0 0 1 24 9.469c0 .469-.187.89-.469 1.219l-7.781 9.609V27c0 .844-.703 1.5-1.547 1.5-.328 0-.656-.094-.937-.328L8.953 24.75a1.82 1.82 0 0 1-.703-1.453v-3l-7.828-9.61C.14 10.36 0 9.938 0 9.47m2.578.281 7.64 9.422q.282.352.282.703v3.234l3 2.391v-5.625c0-.234.047-.469.234-.703l7.688-9.422z' />
    </g>
    <defs>
      <clipPath id='09759841a8594236da3f6256e74c7152__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterXlBoldIcon);
export default ForwardRef;
