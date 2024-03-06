import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarMdRegularIcon = (
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
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.5-4.25v.719q.625.062 1.25.25.03.03.063.031.03 0 .062.031.438.156.344.594-.156.438-.594.375a2 2 0 0 0-.219-.094q-.375-.093-.719-.156-.936-.125-1.562.156-.562.282-.594.625-.093.437.313.656.5.313 1.406.532h.031a6 6 0 0 1 1.688.687q.906.657.75 1.75-.25 1.032-1.188 1.375A3.2 3.2 0 0 1 8.5 15.5v.75q-.062.47-.5.5-.469-.03-.5-.5v-.812a15 15 0 0 1-1.031-.25 8 8 0 0 1-.625-.22q-.438-.187-.313-.624.157-.406.625-.313l.625.188q.563.187.875.25.938.124 1.5-.125.5-.219.563-.625.093-.47-.313-.75a4.6 4.6 0 0 0-1.281-.5.3.3 0 0 0-.125-.031.24.24 0 0 0-.094-.032 7 7 0 0 1-1.625-.625 2 2 0 0 1-.625-.687q-.25-.438-.125-1 .25-1 1.188-1.375.375-.125.781-.219v-.75q.031-.469.5-.5.438.031.5.5' />
    </g>
    <defs>
      <clipPath id='c1e195fb510707c921d0fb31f22980e3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarMdRegularIcon);
export default ForwardRef;
