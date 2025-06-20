import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m.625-11.812c0-.376-.281-.688-.656-.688a.694.694 0 0 0-.688.688v.5c-.187.062-.375.093-.531.187-.562.25-1.094.688-1.219 1.375-.125.719.157 1.375.782 1.75.437.281 1.03.469 1.5.594.062.031.156.031.218.062.375.094.75.219 1.063.406.375.25.219.72-.156.876-.282.093-.72.156-1.25.062-.375-.062-.72-.187-1.063-.281-.094-.031-.156-.063-.25-.094-.344-.125-.719.063-.844.438a.66.66 0 0 0 .407.843c.468.156.906.281 1.343.406v.532c0 .375.313.687.688.687s.656-.312.656-.687v-.469c.281-.031.563-.094.813-.187.562-.25 1.062-.72 1.187-1.407.125-.719-.156-1.406-.75-1.812-.469-.313-1.094-.5-1.594-.656-.062 0-.125-.032-.219-.032-.343-.125-.718-.219-1.03-.406-.376-.25-.095-.625.25-.75.374-.187.843-.219 1.28-.125.22.031.438.094.657.156.031 0 .094.031.125.031.375.094.75-.093.844-.468.093-.344-.126-.719-.47-.844-.062 0-.124-.031-.187-.031a4.3 4.3 0 0 0-.906-.219z' />
    </g>
    <defs>
      <clipPath id='62a4113d7e1e676ad9f87ddd5329eb6c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarMdFillIcon);
export default ForwardRef;
