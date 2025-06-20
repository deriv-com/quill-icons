import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignXlFillIcon = (
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
      <path d='M7.5 6C8.297 6 9 6.703 9 7.5v1.688c.047 0 .14.046.188.046h.046l2.25.422c.844.14 1.36.938 1.22 1.735-.142.797-.938 1.359-1.735 1.218l-2.25-.421c-1.453-.235-2.766-.047-3.656.28-.891.376-1.266.891-1.36 1.313-.094.516 0 .797.047.985.094.187.281.375.61.609.75.516 1.921.844 3.468 1.219l.14.047c1.313.375 2.954.797 4.173 1.593.656.422 1.312 1.032 1.687 1.828.422.844.469 1.782.328 2.813-.328 1.781-1.594 2.953-3.094 3.563-.656.28-1.359.421-2.062.515V28.5c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 28.5v-1.594c-.047-.047-.047-.047-.094-.047-1.125-.14-3-.656-4.265-1.218-.797-.328-1.125-1.22-.797-1.97.375-.75 1.219-1.124 2.015-.75.938.423 2.579.845 3.516.985 1.5.235 2.719.094 3.563-.234.796-.328 1.124-.797 1.265-1.36.047-.515 0-.796-.094-.937-.093-.187-.234-.422-.609-.656-.75-.469-1.922-.797-3.469-1.219l-.14-.047c-1.313-.328-2.953-.797-4.172-1.594-.656-.422-1.313-1.03-1.688-1.828-.375-.843-.468-1.781-.281-2.765.328-1.828 1.688-2.953 3.188-3.563.656-.281 1.312-.422 2.062-.515V7.5C6 6.703 6.656 6 7.5 6' />
    </g>
    <defs>
      <clipPath id='6576f9748affd2f93797b9c6d0ff1d6a__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignXlFillIcon);
export default ForwardRef;
