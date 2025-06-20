import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.094 7.781c.422.282.656.75.656 1.219v4.5h.75c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H18a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h.75v-2.39l-.281.093c-.797.235-1.64-.187-1.922-.937-.235-.797.187-1.641.937-1.922l2.25-.75a1.55 1.55 0 0 1 1.36.234zM7.5 7.5c.422 0 .797.188 1.078.516l4.125 4.5c.563.609.516 1.547-.094 2.109a1.487 1.487 0 0 1-2.109-.094L9 12.891V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 27V12.89l-1.547 1.641c-.562.61-1.5.656-2.11.094a1.487 1.487 0 0 1-.093-2.11l4.125-4.5A1.5 1.5 0 0 1 7.5 7.5m13.36 15.61a1.44 1.44 0 0 0 .703-1.97c-.329-.75-1.22-1.078-1.97-.75-.75.376-1.077 1.266-.702 2.016a1.44 1.44 0 0 0 1.968.703m-1.876 2.578c-1.687-.516-2.859-2.063-2.859-3.938a4.13 4.13 0 0 1 4.125-4.125c2.25 0 4.125 1.875 4.125 4.125a5.22 5.22 0 0 1-1.031 3.094l-2.297 3.047c-.469.703-1.406.843-2.11.328-.656-.469-.796-1.407-.28-2.11z' />
    </g>
    <defs>
      <clipPath id='6d15daa6f6cab88b5269cb62b506d65e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineXlFillIcon);
export default ForwardRef;
