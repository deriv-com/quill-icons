import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnXlFillIcon = (
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
      <path d='M15 6c.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v.89c0 2.204.797 4.36 2.25 6l.328.376c.422.468.516 1.078.281 1.64-.234.516-.797.844-1.359.844H6c-.61 0-1.172-.328-1.406-.844a1.52 1.52 0 0 1 .281-1.64l.328-.375C6.656 21 7.5 18.844 7.5 16.64v-.891c0-3.61 2.578-6.656 6-7.312V7.5c0-.797.656-1.5 1.5-1.5m2.11 23.156c-.563.563-1.313.844-2.11.844s-1.594-.281-2.156-.844S12 27.796 12 27h6c0 .797-.328 1.594-.89 2.156M0 15.375c0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 4.875 16.5h-3.75C.469 16.5 0 16.031 0 15.375m25.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m2.86-7.219c.28.563.046 1.219-.516 1.5l-3 1.5c-.563.281-1.219.047-1.5-.515-.282-.563-.047-1.22.515-1.5l3-1.5c.563-.282 1.22-.047 1.5.515m-25.5 1.5c-.563-.281-.797-.937-.516-1.5s.937-.797 1.5-.515l3 1.5c.562.28.797.937.515 1.5-.28.562-.937.797-1.5.515z' />
    </g>
    <defs>
      <clipPath id='60fc160d4f9ef1d29bfde48300904cab__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlFillIcon);
export default ForwardRef;
