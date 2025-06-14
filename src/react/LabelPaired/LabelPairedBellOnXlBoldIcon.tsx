import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnXlBoldIcon = (
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
      <path d='M15 6c.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v1.219c0 2.11.703 4.172 2.016 5.86l.703.843c.281.375.328.844.14 1.219-.187.375-.562.609-.984.609H5.625c-.469 0-.844-.234-1.031-.61-.188-.374-.14-.843.14-1.218l.704-.844c1.312-1.687 2.062-3.75 2.062-5.86V15.75c0-3.61 2.578-6.656 6-7.312V7.5c0-.797.656-1.5 1.5-1.5m0 4.5c-2.906 0-5.25 2.39-5.25 5.25v1.219c0 2.25-.656 4.406-1.875 6.281h14.203c-1.219-1.875-1.828-4.031-1.828-6.281V15.75c0-2.86-2.39-5.25-5.25-5.25M18 27c0 .797-.328 1.594-.89 2.156S15.796 30 15 30s-1.594-.281-2.156-.844S12 27.796 12 27h6M0 15.375c0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 4.875 16.5h-3.75C.469 16.5 0 16.031 0 15.375m25.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m2.86-7.219c.28.563.046 1.219-.516 1.5l-3 1.5c-.563.281-1.219.047-1.5-.515-.282-.563-.047-1.22.515-1.5l3-1.5c.563-.282 1.22-.047 1.5.515m-25.5 1.5c-.563-.281-.797-.937-.516-1.5s.937-.797 1.5-.515l3 1.5c.562.28.797.937.515 1.5-.28.562-.937.797-1.5.515z' />
    </g>
    <defs>
      <clipPath id='5d2bbd3fc57db0f388d97bdc2b34437a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlBoldIcon);
export default ForwardRef;
