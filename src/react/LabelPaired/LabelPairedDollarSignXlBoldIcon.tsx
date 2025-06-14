import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignXlBoldIcon = (
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
      <path d='M8.625 7.125v2.344c1.266.14 2.438.375 3.328.562a1.13 1.13 0 1 1-.515 2.203c-1.454-.328-3.563-.75-5.344-.562q-1.335.07-2.11.562c-.468.329-.796.75-.937 1.454-.14.515-.047.89.094 1.124.093.282.375.516.797.797.89.563 2.25.891 3.796 1.313l.141.047c1.453.375 3.094.797 4.36 1.547a3.97 3.97 0 0 1 1.593 1.687c.422.75.469 1.64.328 2.578-.328 1.688-1.547 2.766-3.047 3.328a8.4 8.4 0 0 1-2.484.516v2.25A1.11 1.11 0 0 1 7.5 30c-.656 0-1.125-.469-1.125-1.125v-2.297c-.187-.047-.328-.047-.469-.094-1.172-.14-3.234-.609-4.5-1.172-.562-.28-.843-.937-.562-1.5.234-.562.89-.796 1.453-.562 1.031.422 2.86.89 3.89 1.031 1.688.235 3.094.094 4.126-.281.984-.375 1.5-.937 1.593-1.64.14-.516.047-.891-.094-1.126-.093-.28-.374-.562-.796-.797-.891-.562-2.203-.937-3.797-1.312l-.14-.047c-1.454-.375-3.095-.797-4.36-1.547-.61-.422-1.219-.937-1.594-1.687-.375-.797-.469-1.64-.281-2.578.234-1.36.937-2.297 1.922-2.907.937-.609 2.062-.843 3.14-.937.14-.047.282-.047.469-.047v-2.25C6.375 6.515 6.844 6 7.5 6c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='c41bea164a94d2237f5af3dd6d050119__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignXlBoldIcon);
export default ForwardRef;
