import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosSmIcon = (
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
      <path d='M11.313 4.625q.546.027.93.383.355.383.382.93v9.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H1.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V5.938q.027-.547.383-.93.382-.356.93-.383zm-7.465 9.652.52-.93q-.411-.519-1.067-.3l-.41.683q-.192.438.218.739.438.191.739-.192m3.8-1.476a.81.81 0 0 0-.027-.739q-.165-.327-.601-.355H5.324l2.352-4.074q.219-.465-.192-.738-.465-.218-.765.19l-.246.411-.22-.41q-.3-.41-.765-.191-.41.273-.191.738l.547.957-1.778 3.117H2.672q-.492.027-.547.547.054.492.547.547zm2.68 0q.492-.055.547-.547-.055-.52-.547-.547H8.906a644 644 0 0 1-1.394-2.406 4 4 0 0 0-.219-.383q-.273.22-.383.71-.137.52.192 1.122.382.656.957 1.668.465.82 1.066 1.86.3.382.738.19.411-.3.219-.738l-.547-.93z' />
    </g>
    <defs>
      <clipPath id='bde8d3a41d34514c36fa870a891cf211__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosSmIcon);
export default ForwardRef;
